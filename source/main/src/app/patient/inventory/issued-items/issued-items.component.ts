import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IssuedItems } from './issued-items.model';
import { DataSource } from '@angular/cdk/collections';
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
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bitacora',
  templateUrl: './issued-items.component.html',
  styleUrls: ['./issued-items.component.scss'],
})
export class IssuedItemsComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  roomForm: UntypedFormGroup;
  displayedColumns = [
    'select',
    'i_name',
    'category',
    'issue_date',
    'return_date',
    'issue_to',
    'qty',
    'status',
    'actions',
  ];
  selection = new SelectionModel<IssuedItems>(true, []);
  index?: number;
  id?: number;
  issuedItems?: IssuedItems;
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private fb: UntypedFormBuilder,
    private router: Router
  ) {
    
    super();
    this.roomForm = this.fb.group({
      rNo: ['', [Validators.required]],
      rType: ['', [Validators.required]],
      pName: ['', [Validators.required]],
      aDate: ['', [Validators.required]],
      dDate: ['', [Validators.required]],
    });
  }
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild('filter', { static: true }) filter?: ElementRef;
  ngOnInit() {
   // this.loadData();
  }
  onSubmit() {
    console.log('Form Value', this.roomForm.value);
  }
  refresh() {
 //   this.loadData();
  }
  
  
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
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

  cancelar(){
    this.router.navigate(['/patient/inventory/item-stock-list']);
  }
}
