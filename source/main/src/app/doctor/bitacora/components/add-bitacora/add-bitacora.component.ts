import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { IssuedItems } from './issued-items.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BitacoraDTO } from '../../models/bitacora.model';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { BitacoraService } from '../../services/bitacora.service';
import { AuthService } from '@core';

@Component({
  selector: 'app-add-bitacora',
  templateUrl: './add-bitacora.component.html',
  styleUrls: ['./add-bitacora.component.scss'],
})
export class AddBitacoraComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  modoEditar: boolean = false;
  form: UntypedFormGroup;
  data: BitacoraDTO;
  personId: number;

  title: string = 'Adicionar Bitacora';
  subtitle: string = 'En esta pantalla podrás adicionar una bitacora';

  issuedItems?: IssuedItems;
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private fb: UntypedFormBuilder,
    private router: Router,
    private location: Location,
    private pasoParametrosService: PasoParametrosService,
    private bitacoraService: BitacoraService,
    private auth: AuthService
  ) {
    super();
    this.data = this.pasoParametrosService.obtenerParametro('data');
    this.modoEditar = this.pasoParametrosService.obtenerParametro('modoEditar');
  }

  ngOnInit() {
    if (this.modoEditar) {
      this.title = 'Editar Bitacora';
      this.subtitle = 'En esta pantalla podrás editar la bitacora';
    }

    this.personId =
      this.pasoParametrosService.obtenerParametro('dataPersona')?.id ??
      this.auth.currentUserValue.person.id;
    this.form = this.fb.group({
      id: [this.data?.id],
      name: [this.data?.name, [Validators.required]],
      description: [this.data?.description, [Validators.required]],
      personId: [this.data?.personId ?? this.personId],
      createdAt: [this.data?.createdAt ?? new Date()],
    });
  }

  onSubmit() {
    const observer = this.modoEditar
      ? this.bitacoraService.updateBitacora(this.form.value)
      : this.bitacoraService.createBitacora(this.form.value);

    observer.subscribe((data) => {
      console.log('BITACORA CREADA', data);
      this.form.controls['id'].setValue(data.id);
      this.volver();
      // this.configTableBaby.pageableOptions.otherParams['situationId'] = data.id;
      // this.configTableMother.pageableOptions.otherParams['situationId'] =
      //   data.id;
    });
  }

  cancelar() {
    this.volver();
  }

  volver() {
    this.location.back();
  }
}
