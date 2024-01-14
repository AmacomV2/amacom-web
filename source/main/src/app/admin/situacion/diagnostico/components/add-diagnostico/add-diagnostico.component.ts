import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { DiagnosticoDTO } from '../../models/diagnostico.model';
import { DiagnosticoService } from '../../services/diagnostico.service';

@Component({
  selector: 'app-add-diagnostico',
  templateUrl: './add-diagnostico.component.html',
  styleUrls: ['./add-diagnostico.component.scss'],
})
export class AddDiagnosticoComponent {
  data: DiagnosticoDTO;
  modoEditar: boolean = false;
  situacionId: number;

  public titulo: any;
  public subtitulo: any;

  form: UntypedFormGroup;

  alertaList: string[] = ['INFORMATION', 'TO_REVIEW', 'URGENT'];

  estadoList: string[] = ['PENDING', 'IN_PROGRESS', 'COMPLETED'];

  indicador = new UntypedFormControl();
  indicadorList: string[] = ['Indicador 1', 'Indicador 2', 'Indicador 3'];
  actividad = new UntypedFormControl();
  actividadList: string[] = [
    'Actividad 1',
    'Actividad 2',
    'Actividad 3',
    'Actividad 4',
    'Actividad 5',
  ];
  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private pasoParametrosService: PasoParametrosService,
    private diganosticoService: DiagnosticoService,
    private location: Location
  ) {
    this.form = this.createContactForm();
  }

  onSubmit() {
    const observer = this.modoEditar
      ? this.diganosticoService.updateDiagnosis(this.form.value)
      : this.diganosticoService.createDiagnosis(this.form.value);

    observer.subscribe((data) => {
      this.volver();
    });
  }

  cancelar() {
    this.location.back();
  }

  volver() {
    this.location.back();
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro('data');
    this.situacionId =
      this.pasoParametrosService.obtenerParametro('situation')?.id;
    this.modoEditar = this.pasoParametrosService.obtenerParametro('modoEditar');

    if (this.modoEditar == true) {
      this.titulo = 'Editar diagnostico';
      this.subtitulo = 'En esta pantalla podrás editar el diagnostico';
    } else {
      this.titulo = 'Adicionar diagnostico';
      this.subtitulo = 'En esta pantalla podrás adicionar un diagnostico';
    }
    return this.fb.group({
      id: [this.data?.id],
      personSituationId: [this.situacionId, [Validators.required]],
      consultationResult: [
        this.data?.consultationResult,
        [Validators.required],
      ],
      consultationAlert: [this.data?.consultationAlert, [Validators.required]],
      consultationStatus: [
        this.data?.consultationStatus,
        [Validators.required],
      ],
      createdAt: [this.data?.createdAt ?? new Date(), [Validators.required]],
    });
  }
}
