import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RoomService } from './room.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Room } from './room.model';
import { DataSource } from '@angular/cdk/collections';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FormDialogComponent } from './dialog/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './dialog/delete/delete.component';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { Direction } from '@angular/cdk/bidi';
import {
  TableExportUtil,
  TableElement,
  UnsubscribeOnDestroyAdapter,
} from '@shared';
import { formatDate } from '@angular/common';
import { SituacionList } from './situacion.model';
import { Router } from '@angular/router';
import { PasoParametrosService } from '../../paso-parametro.service';

@Component({
  selector: 'app-allroom',
  templateUrl: './allroom.component.html',
  styleUrls: ['./allroom.component.scss'],
})
export class AllroomComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  public listaSituaciones: Array<any> = [];
  public indicePrimerItem: number = 1;
  public indiceUltimoItem: number = 10;
  displayedColumns = [
    'select',
    'img',
    'rNo',
    'pName',
    'rType',
    'gender',
    'admitDate',
    'dischargeDate',
    'actions',
  ];
  exampleDatabase?: RoomService;
  dataSource!: ExampleDataSource;
  selection = new SelectionModel<Room>(true, []);
  index?: number;
  id?: number;
  room?: Room;
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public roomService: RoomService,
    private snackBar: MatSnackBar,
    private router: Router,
    private pasoParametrosService: PasoParametrosService
  ) {
    super();
  }
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild('filter', { static: true }) filter?: ElementRef;
  ngOnInit() {
   // this.loadData();
    this.llenarLista();
  }
  refresh() {
    this.loadData();
  }
  addNew() {
    this.router.navigate(['/admin/room/add-allotment']);
  }
  search(row: Room) {
    this.id = row.id;
    this.pasoParametrosService.adicionarParametro('data', row);
    this.router.navigate(['/admin/room/edit-allotment']);
  }
  editCall(row: SituacionList) {
    this.id = row.id;
    this.pasoParametrosService.adicionarParametro('data', row);
    this.pasoParametrosService.adicionarParametro('modoEditar', true);
    this.router.navigate(['/admin/room/add-allotment']);
  }
  deleteItem(row: SituacionList) {
    this.id = row.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: row,
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase?.dataChange.value.findIndex(
          (x) => x.id === this.id
        );
        // for delete we use splice in order to remove single object from DataService
        if (foundIndex != null && this.exampleDatabase) {
          this.exampleDatabase.dataChange.value.splice(foundIndex, 1);

          this.refreshTable();
          this.showNotification(
            'snackbar-danger',
            'Delete Record Successfully...!!!',
            'bottom',
            'center'
          );
        }
      }
    });
  }
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.renderedData.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.renderedData.forEach((row) =>
          this.selection.select(row)
        );
  }
  removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    this.selection.selected.forEach((item) => {
      const index: number = this.dataSource.renderedData.findIndex(
        (d) => d === item
      );
      // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
      this.exampleDatabase?.dataChange.value.splice(index, 1);
      this.refreshTable();
      this.selection = new SelectionModel<Room>(true, []);
    });
    this.showNotification(
      'snackbar-danger',
      totalSelect + ' Record Delete Successfully...!!!',
      'bottom',
      'center'
    );
  }
  public loadData() {
    this.exampleDatabase = new RoomService(this.httpClient);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase,
      this.paginator,
      this.sort
    );
    this.subs.sink = fromEvent(this.filter?.nativeElement, 'keyup').subscribe(
      () => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter?.nativeElement.value;
      }
    );
  }
  // export table data in excel file
  exportExcel() {
    // key name with space add in brackets
    const exportData: Partial<TableElement>[] =
      this.dataSource.filteredData.map((x) => ({
        'Room No': x.rNo,
        'Patient Name': x.pName,
        'Room Type': x.rType,
        'Admit Date':
          formatDate(new Date(x.admitDate), 'yyyy-MM-dd', 'en') || '',
        Gender: x.gender,
        'Discharge Date':
          formatDate(new Date(x.dischargeDate), 'yyyy-MM-dd', 'en') || '',
      }));

    TableExportUtil.exportToExcel(exportData, 'excel');
  }

  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  llenarLista(){
    this.listaSituaciones = [
     {id:1, tema:"tema 2", date:"27/06/2023", descripcion:"me siento triste", gradoAfectacion: 8, sentimiento: "tristeza", firstPen: "Me siento solo", comportamiento: "solitario"},
     {id:2, tema:"tema 2", date:"27/06/2023", descripcion:"me siento feliz", gradoAfectacion: 1, sentimiento: "felicidad", firstPen: "Soy feliz", comportamiento: "alegre"},
     {id:3, tema:"tema 3", date:"27/06/2023", descripcion:"me duele la panza", gradoAfectacion: 4, sentimiento: "debilidad", firstPen: "Estoy enferma", comportamiento: "debilidad"},
     {id:4, tema:"tema 4", date:"27/06/2023", descripcion:"no me duele la panza", gradoAfectacion: 0, sentimiento: "neutral", firstPen: "nada", comportamiento: "ninguno"}
    ];
  }
}
export class ExampleDataSource extends DataSource<Room> {
  filterChange = new BehaviorSubject('');
  get filter(): string {
    return this.filterChange.value;
  }
  set filter(filter: string) {
    this.filterChange.next(filter);
  }
  filteredData: Room[] = [];
  renderedData: Room[] = [];
  constructor(
    public exampleDatabase: RoomService,
    public paginator: MatPaginator,
    public _sort: MatSort
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Room[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this._sort.sortChange,
      this.filterChange,
      this.paginator.page,
    ];
    this.exampleDatabase.getAllRooms();
    return merge(...displayDataChanges).pipe(
      map(() => {
        // Filter data
        this.filteredData = this.exampleDatabase.data
          .slice()
          .filter((room: Room) => {
            const searchStr = (
              room.rNo +
              room.pName +
              room.rType +
              room.gender +
              room.admitDate +
              room.dischargeDate
            ).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());
        // Grab the page's slice of the filtered sorted data.
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.renderedData = sortedData.splice(
          startIndex,
          this.paginator.pageSize
        );
        return this.renderedData;
      })
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
  /** Returns a sorted copy of the database data. */
  sortData(data: Room[]): Room[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';
      switch (this._sort.active) {
        case 'id':
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case 'pName':
          [propertyA, propertyB] = [a.pName, b.pName];
          break;
        case 'rType':
          [propertyA, propertyB] = [a.rType, b.rType];
          break;
        case 'admitDate':
          [propertyA, propertyB] = [a.admitDate, b.admitDate];
          break;
        case 'dischargeDate':
          [propertyA, propertyB] = [a.dischargeDate, b.dischargeDate];
          break;
        case 'rNo':
          [propertyA, propertyB] = [a.rNo, b.rNo];
          break;
      }
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1)
      );
    });
  }
}
