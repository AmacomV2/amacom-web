import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { TemaDTO } from '../all-temas/models/tema.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { map } from 'rxjs';

@Component({
  selector: 'app-add-tema',
  templateUrl: './add-tema.component.html',
  styleUrls: ['./add-tema.component.scss'],
})
export class AddTemaComponent implements OnInit {
  public data: TemaDTO;
  public modoEditar: boolean = false;
  public titulo: any;
  public subtitulo: any;
  roomForm: UntypedFormGroup;
  public listaSigAlarMadre: Array<any> = [];
  public listaSigAlarPadre: Array<any> = [];
  public listaSigAlarBebe: Array<any> = [];
  public indicePrimerItem: number = 1;
  public indiceUltimoItem: number = 10;
  toppings = new UntypedFormControl();
  toppingList: string[] = [
    'Feliz',
    'Tristeza',
    'Enojo',
    'Decepción',
    'Extasis',
    'Neutral',
  ];
  panelOpenState = false;
  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }

  valueParent: TemaDTO;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private pasoParametrosService: PasoParametrosService,
    private http: HttpClient
  ) {
    this.roomForm = this.createContactForm();
  }
  ngOnInit() {
    this.getTemaParent();
  }

  onSubmit() {
    const observable = this.modoEditar
      ? this.http.put(environment.apiUrl + '/subject', this.roomForm.value)
      : this.http.post(
          environment.apiUrl + '/subject/create',
          this.roomForm.value
        );

    observable.subscribe((res) => {
      this.cancel();
    });
  }

  cancel() {
    this.router.navigate(['/admin/gestion-temas/all-temas']);
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro('data');
    this.modoEditar = this.pasoParametrosService.obtenerParametro('modoEditar');
    if (this.modoEditar == true) {
      this.titulo = 'Editar tema';
      this.subtitulo = 'En esta pantalla podrás editar el tema';
    } else {
      this.titulo = 'Adicionar tema';
      this.subtitulo = 'En esta pantalla podrás adicionar un tema';
    }
    return this.fb.group({
      id: [this.data?.id],
      name: [this.data?.name, [Validators.required]],
      validityIndicator: [this.data?.validityIndicator, [Validators.required]],
      parentId: [this.data?.parentId],
      createdAt: [this.data?.createdAt],
    });
  }

  getTemaParent() {
    if (this.modoEditar && this.data?.parentId) {
      this.http
        .get(environment.apiUrl + '/subject/' + this.data?.parentId)
        .subscribe((res: any) => {
          this.valueParent = res;
        });
    }
  }

  listTema(filtro) {
    const params = {
      size: 10,
      page: 0,
      query: filtro,
    };
    return this.http
      .get(environment.apiUrl + '/subject/search', { params: params })
      .pipe(map((res: any) => res?.content ?? []));
  }
}
