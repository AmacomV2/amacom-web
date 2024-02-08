import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppDataService } from '@shared/services/app-data.service';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { PersonService } from '../allpersonas/services/person.service';
import { AuthService } from '@core';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.scss'],
})
export class AddPersonaComponent implements OnInit {
  public data: any;
  public modoEditar: boolean = false;
  public titulo: any;
  public subtitulo: any;
  patientForm: UntypedFormGroup;

  tiposDocumento = this.appService.getDocumentTypes();

  tiposGenero = this.appService.getGenderTypes();

  tiposEstadoCivil = this.appService.getCivilState();

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private pasoParametrosService: PasoParametrosService,
    private appService: AppDataService,
    private personService: PersonService,
    private activateRoute: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.patientForm = this.createContactForm();
  }
  onSubmit() {
    const observer$ = this.modoEditar
      ? this.personService.updatePerson(this.patientForm.value)
      : this.personService.createPerson(this.patientForm.value);
    observer$.subscribe((val) => {
      this.cancelar();
    });
  }

  cancelar() {
    this.router.navigate(['/admin/gestionar-usuarios/personas/all-personas']);
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro('data');
    this.modoEditar = this.pasoParametrosService.obtenerParametro('modoEditar');

    if (this.activateRoute.snapshot.data['autoedit']) {
      this.data = this.authService.currentUserValue.person;
    }
    if (this.modoEditar == true) {
      this.titulo = 'Editar persona';
      this.subtitulo = 'En esta pantalla podrás editar la persona';
    } else {
      this.titulo = 'Adicionar persona';
      this.subtitulo = 'En esta pantalla podrás adicionar una persona';
    }
    return this.fb.group({
      id: [this.data?.id],
      name: [
        this.data?.name,
        [Validators.required, Validators.pattern('[a-zA-Z]+( [a-zA-Z]+)*')],
      ],
      lastName: [
        this.data?.lastName,
        [Validators.required, Validators.pattern('[a-zA-Z]+( [a-zA-Z]+)*')],
      ],
      documentTypeId: [this.data?.documentTypeId, [Validators.required]],
      documentNo: [
        this.data?.documentNo,
        [Validators.required, Validators.pattern('[0-9]+')],
      ],
      genderId: [this.data?.genderId, [Validators.required]],
      address: [this.data?.address, [Validators.required]],
      civilStatusId: [this.data?.civilStatusId, [Validators.required]],
      birthDate: [this.data?.birthDate, [Validators.required]],
      occupation: [this.data?.occupation, [Validators.required]],
      consentText: [this.data?.consentText, [Validators.required]],
      perfil: [''], //TODO: falta el perfil
      firma: [''], //TODO: falta la firma
      privacyPolicy: [true],
      imageUrl: [this.data?.imageUrl],
      uploadFile: [],
      evaluationCompleted: [this.data?.evaluationCompleted ?? false],
    });
  }
}
