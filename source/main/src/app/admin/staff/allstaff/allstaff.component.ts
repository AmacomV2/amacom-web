import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StaffService } from './staff.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Staff } from './staff.model';
import { DataSource } from '@angular/cdk/collections';
import { FormDialogComponent } from './dialog/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './dialog/delete/delete.component';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
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
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { Room } from 'app/admin/room/allroom/room.model';
import { UsuarioList } from './usuario.model';
import { SearchDialogComponent } from './dialog/search/search.component';
@Component({
  selector: 'app-allstaff',
  templateUrl: './allstaff.component.html',
  styleUrls: ['./allstaff.component.scss'],
})
export class AllstaffComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  public listaUsuarios: Array<any> = [];
  public indicePrimerItem: number = 1;
  public indiceUltimoItem: number = 10;
  displayedColumns = [
    'select',
    'img',
    'name',
    'designation',
    'mobile',
    'email',
    'date',
    'address',
    'actions',
  ];
  exampleDatabase!: StaffService | null;
  dataSource!: ExampleDataSource;
  selection = new SelectionModel<Staff>(true, []);
  index!: number;
  id!: number;
  staff!: Staff | null;
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public staffService: StaffService,
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
  @ViewChild('filter', { static: true })
  filter!: ElementRef;
  ngOnInit() {
    this.llenarLista();
  }
  refresh() {
    this.loadData();
  }
  search(row: Room) {
    this.id = row.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      data: row,
      direction: tempDirection,
    });
  }
  addNew() {
    this.router.navigate(['/admin/staff/add-staff']);
  }
  editCall(row: UsuarioList) {
    this.id = row.id;
    this.pasoParametrosService.adicionarParametro('data', row);
    this.pasoParametrosService.adicionarParametro('modoEditar', true);
    this.router.navigate(['/admin/staff/add-staff']);
  }
  deleteItem(row: UsuarioList) {
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
    const numRows = this.dataSource?.renderedData.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource?.renderedData.forEach((row) =>
          this.selection.select(row)
        );
  }
  removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    this.selection.selected.forEach((item) => {
      const index = this.dataSource?.renderedData.findIndex((d) => d === item);
      // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
      if (index !== undefined) {
        if (this.exampleDatabase) {
          this.exampleDatabase.dataChange.value.splice(index, 1);
        }
        this.refreshTable();
        this.selection = new SelectionModel<Staff>(true, []);
      }
    });
    this.showNotification(
      'snackbar-danger',
      totalSelect + ' Record Delete Successfully...!!!',
      'bottom',
      'center'
    );
  }
  public loadData() {
    this.exampleDatabase = new StaffService(this.httpClient);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase,
      this.paginator,
      this.sort
    );
    this.subs.sink = fromEvent(this.filter.nativeElement, 'keyup').subscribe(
      () => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      }
    );
  }
  // export table data in excel file
  exportExcel() {
    // key name with space add in brackets
    const exportData: Partial<TableElement>[] =
      this.dataSource.filteredData.map((x) => ({
        Name: x.name,
        Designation: x.designation,
        Email: x.email,
        Date: formatDate(new Date(x.date), 'yyyy-MM-dd', 'en') || '',
        Address: x.address,
        Mobile: x.mobile,
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
    this.listaUsuarios = [
     {id:1, nombreUsuario:"VEEB", date:"27/06/2001", correo:"nenitq@gmail.com", rol: "ADMIN", estado: "Activo"},
     {id:2, nombreUsuario:"Lori", date:"27/06/2001", correo:"luigi@gmail.com", rol: "NO-ADMIN", estado: "Inactivo"},
    ];
  }
}

export class ExampleDataSource extends DataSource<Staff> {
  filterChange = new BehaviorSubject('');
  get filter(): string {
    return this.filterChange.value;
  }
  set filter(filter: string) {
    this.filterChange.next(filter);
  }
  filteredData: Staff[] = [];
  renderedData: Staff[] = [];
  constructor(
    public exampleDatabase: StaffService,
    public paginator: MatPaginator,
    public _sort: MatSort
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Staff[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this._sort.sortChange,
      this.filterChange,
      this.paginator.page,
    ];
    this.exampleDatabase.getAllStaffs();
    return merge(...displayDataChanges).pipe(
      map(() => {
        // Filter data
        this.filteredData = this.exampleDatabase.data
          .slice()
          .filter((staff: Staff) => {
            const searchStr = (
              staff.name +
              staff.designation +
              staff.mobile +
              staff.email +
              staff.date +
              staff.address
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
  sortData(data: Staff[]): Staff[] {
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
        case 'name':
          [propertyA, propertyB] = [a.name, b.name];
          break;
        case 'email':
          [propertyA, propertyB] = [a.email, b.email];
          break;
        case 'date':
          [propertyA, propertyB] = [a.date, b.date];
          break;
        case 'address':
          [propertyA, propertyB] = [a.address, b.address];
          break;
        case 'mobile':
          [propertyA, propertyB] = [a.mobile, b.mobile];
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
