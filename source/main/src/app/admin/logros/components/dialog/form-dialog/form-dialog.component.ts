import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { LogroDTO } from '../../../models/logro.model';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { map } from 'rxjs';

@Component({
  selector: 'app-add-material:not(i)',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogLogroComponent implements OnInit {
  action: string;
  dialogTitle: string;
  form: UntypedFormGroup;
  logro: LogroDTO;

  valueSubject: LogroDTO;

  constructor(
    public dialogRef: MatDialogRef<FormDialogLogroComponent>,
    private pasoParametrosService: PasoParametrosService,
    @Inject(MAT_DIALOG_DATA) public data: { action: string; row: LogroDTO },
    private fb: UntypedFormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.action = this.data?.action;
    this.logro = this.data?.row;
    this.form = this.createContactForm();
    this.getCurrentTema();
  }

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.logro?.id],
      name: [this.logro?.name, Validators.required],
      description: [this.logro?.description, Validators.required],
      subjectId: [this.logro?.subjectId, Validators.required],
    });
  }

  listTema(filtro) {
    return this.http
      .get<any>(environment.apiUrl + '/subject/search', {
        params: {
          page: '0',
          size: '100',
          query: filtro,
        },
      })
      .pipe(
        map((res) => {
          return res.content;
        })
      );
  }

  getCurrentTema() {
    this.http
      .get<any>(environment.apiUrl + '/subject/' + this.logro?.subjectId)
      .subscribe((res) => {
        this.valueSubject = res;
      });
  }
}
