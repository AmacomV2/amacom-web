import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogroDTO } from 'app/admin/logros/models/logro.model';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';

@Component({
  selector: 'app-add-material-file',
  templateUrl: './add-material-file.component.html',
  styleUrls: ['./add-material-file.component.scss'],
})
export class AddMaterialFileComponent implements OnInit {
  form: FormGroup;

  idSupportMaterial: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { action: string; row: any },
    private fb: UntypedFormBuilder,
    private http: HttpClient,
    private pasoParametrosService: PasoParametrosService
  ) {}

  ngOnInit() {
    this.idSupportMaterial =
      this.pasoParametrosService.obtenerParametro('data')?.id;

    this.form = this.fb.group({
      id: [this.data?.row?.id],
      idSupportMaterial: [this.idSupportMaterial],
      name: [this.data?.row?.name, Validators.required],
      description: [this.data?.row?.description, Validators.required],
      path: [this.data?.row?.path, Validators.required],
    });
  }
}
