import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgTableConfig } from './models/table.config.model';
import { MatTableDataSource } from '@angular/material/table';
import { MappingPipe } from '../../pipes/mapping.pipe';

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

  @Output() editAction: EventEmitter<T> = new EventEmitter();

  @Output() deleteAction: EventEmitter<T> = new EventEmitter();

  @Output() viewAction: EventEmitter<T> = new EventEmitter();

  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>();

  constructor(private httpClient: HttpClient, private mappingPipe: MappingPipe) {}

  ngOnInit() {
    console.log(this.config);
    this.findData();
  }

  /**
   * metodo que busca los datos de la tabla.
   */
  findData() {
    if (this.config.urlData) {
      this.httpClient.get(this.config.urlData).subscribe((data: any) => {
        if (this.config.dataOptions?.dataKey) {
          this.dataSource = data[this.config.dataOptions?.dataKey];
        } else if (this.config.pageable) {
          this.dataSource.data = data.content;
        } else {
          this.dataSource.data = data;
        }
      });
    }
  }

  /**
   * metodo que mapea los datos de la tabla.
   * @param row
   * @param key
   */
  toMapper(row: any, key: any, indexKey: number) {
    //si tiene el columntypes
    if (this.config.typeColumns && this.config.typeColumns[indexKey]) {
      return this.mappingPipe.transform(row[key], this.config.typeColumns[indexKey]);
    }

    if (this.config.mapperColums && this.config.mapperColums[indexKey]) {
      return this.config.mapperColums[indexKey](row[key], key);
    } else {
      return row[key];
    }
  }

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
