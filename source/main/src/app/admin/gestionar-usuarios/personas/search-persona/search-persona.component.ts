import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';

@Component({
  selector: 'app-search-persona',
  templateUrl: './search-persona.component.html',
  styleUrls: ['./search-persona.component.scss'],
})
export class SearchPersonaComponent {
  patientForm: UntypedFormGroup;
  public indicePrimerItem: number = 1;
  public indiceUltimoItem: number = 10;
  public data: any;
  formdata = {
    first: 'Pooja',
    last: 'Sarma',
    gender: 'Female',
    mobile: '123456789',
    age: '23',
    email: 'test@example.com',
    maritalStatus: '1',
    bGroup: 'O+',
    bPresure: '123',
    sugger: '150',
    injury: 'Fever',
    address: '101, Elanxa, New Yourk',
    dob: '1987-02-17T14:22:18Z',
    uploadFile: '',
  };
  constructor(private fb: UntypedFormBuilder,
    private pasoParametrosService: PasoParametrosService,
    private router: Router) {
    this.patientForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.patientForm.value);
  }
  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro("data");
    return this.fb.group({
      id: [this.data.id, [Validators.required]],
      nombre: [this.data.nombre, [Validators.required]],
      apellido: [this.data.apellido, [Validators.required]],
      direccion: [this.data.direccion, [Validators.required]],
      estado: [this.data.estado, [Validators.required]],
      estadoCivil: [this.data.estadoCivil, [Validators.required]],
      fechaNacimientobre: [this.data.fechaNacimiento, [Validators.required]],
      genero: [this.data.genero, [Validators.required]],
      numeroDocumento: [this.data.numeroDocumento, [Validators.required]],
      tipoDocumento: [this.data.tipoDocumento, [Validators.required]],
      ocupacion: [this.data.ocupacion, [Validators.required]],
      date: [this.data.date, [Validators.required]],
      uploadFile: [''],
    });
  }

  volver(){
    this.router.navigate(['/admin/gestionar-usuarios/personas/all-personas']);
  }
}
