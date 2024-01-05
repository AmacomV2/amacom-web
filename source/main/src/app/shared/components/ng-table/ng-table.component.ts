import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgTableConfig } from './models/table.config.model';
import { MatTableDataSource } from '@angular/material/table';
import { MappingPipe } from '../../pipes/mapping.pipe';
import { cascadeKey } from '@core/utils/utils';
import { SearchFilterPipe } from '@shared/pipes/search-filter.pipe';
import { AbstractControl, FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-ng-table',
  templateUrl: './ng-table.component.html',
  styleUrls: ['./ng-table.component.scss'],
})
export class NgTableComponent<T> implements OnInit {
  /**
   * Configuración de la tabla.
   */
  @Input()
  set config(configuration: NgTableConfig<T>) {
    this._config = configuration;
  }

  get config(): NgTableConfig<T> {
    return this._config;
  }

  _config!: NgTableConfig<T>;

  @Input() pageSize: number = 10;

  @Output() editAction: EventEmitter<T> = new EventEmitter();

  @Output() deleteAction: EventEmitter<T> = new EventEmitter();

  @Output() viewAction: EventEmitter<T> = new EventEmitter();

  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();

  /**
   * variable que guarda la suscripcion de los datos de la tabla cuando se busca la informacion por peticiones http.
   */
  susbcribeHttpData: Subscription;

  /**
   * variable que guarda el la pagina actual. (si es paginable)
   */
  page: number = 0;

  controlFilter: FormControl = new FormControl('');
  typingTimer: any;
  /**
   * tiempo de espera antes de buscar los datos segun el filtro. (solo aplica si es urlData)
   */
  timeToSearch: number = 500;

  constructor(
    private httpClient: HttpClient,
    private mappingPipe: MappingPipe,
    private filterPipe: SearchFilterPipe
  ) {}

  ngOnInit() {
    console.log(this.config);
    this.findData();
    this.controlFilter.valueChanges.subscribe((value) => {
      console.log(value);
      if (this.config.pageable) {
        clearTimeout(this.typingTimer); // Limpiar el temporizador previo
        this.typingTimer = setTimeout(() => {
          this.findData();
        }, this.timeToSearch);
      } else {
        this.dataSource.data = this.filterPipe.transform(
          this.config.allData,
          value,
          this.config.keys
        );
      }
      // this.dataSource.data = this.filterPipe.transform(
      //   this.dataSource.data,
      //   value,
      //   this.config.keys
      // );
    });
  }

  /**
   * metodo que busca los datos de la tabla.
   */
  findData() {
    if (this.config.urlData) {
      let params = {};
      if (this.config.pageable) {
        params = {
          page: this.page,
          size: this.pageSize,
          query: this.controlFilter.value,
          //sort: 'id,desc',//TODO: cambiar por el parametro de ordenamiento
        };
      }
      this.susbcribeHttpData?.unsubscribe();
      this.susbcribeHttpData = this.httpClient
        .get(this.config.urlData, { params: params })
        .subscribe((data: any) => {
          if (this.config.dataOptions?.dataKey) {
            this.dataSource = data[this.config.dataOptions?.dataKey];
          } else if (this.config.pageable) {
            console.log(data.content);
            this.dataSource.data = data.content;
          } else {
            this.dataSource.data = data;
          }
        });
    } else {
      this.dataSource.data = this.config.allData;
    }
  }

  /**
   * metodo que mapea los datos de la tabla.
   * @param row
   * @param key
   */
  toMapper(row: any, key: string, indexKey: number) {
    let value = '';
    if (key.split('.').length > 0) {
      value = cascadeKey(row, key);
    } else {
      value = row[key];
    }
    //si tiene el columntypes
    if (this.config.typeColumns && this.config.typeColumns[indexKey]) {
      return this.mappingPipe.transform(
        value,
        this.config.typeColumns[indexKey]
      );
    }

    if (this.config.mapperColums && this.config.mapperColums[indexKey]) {
      return this.config.mapperColums[indexKey](value, row);
    } else {
      return value;
    }
  }

  // ========================= DEFAULT ACTIONS =========================

  edit(row: any) {
    this.editAction.emit(row);
  }

  deleteItem(row: any) {
    this.deleteAction.emit(row);
  }

  view(row: any) {
    this.viewAction.emit(row);
  }
}
