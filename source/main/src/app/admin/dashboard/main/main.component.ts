import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
  ApexFill,
  ApexResponsive,
  ApexGrid,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  grid: ApexGrid;
  colors: string[];
};
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public listaSituaciones: Array<any> = [];
  public listaEnfermeria: Array<any> = [];
  public listaBitacora: Array<any> = [];
  public listaPacientes: Array<any> = [];
  public indicePrimerItem: number = 1;
  public indiceUltimoItem: number = 10;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  ngOnInit() {
    this.llenarLista();
  }
  llenarLista(){
    this.listaSituaciones = [
     {id:1, tema:"tema 2", date:"27/06/2023", descripcion:"me siento triste", gradoAfectacion: 8, sentimiento: "tristeza", firstPen: "Me siento solo", comportamiento: "solitario"},
     {id:2, tema:"tema 2", date:"27/06/2023", descripcion:"me siento feliz", gradoAfectacion: 1, sentimiento: "felicidad", firstPen: "Soy feliz", comportamiento: "alegre"},
     {id:3, tema:"tema 3", date:"27/06/2023", descripcion:"me duele la panza", gradoAfectacion: 4, sentimiento: "debilidad", firstPen: "Estoy enferma", comportamiento: "debilidad"},
     {id:4, tema:"tema 4", date:"27/06/2023", descripcion:"no me duele la panza", gradoAfectacion: 0, sentimiento: "neutral", firstPen: "nada", comportamiento: "ninguno"}
    ];

    this.listaEnfermeria = [
      {id:1, nombre:"Esmeralda", estado:"activo"},
      {id:2, nombre:"Coral", estado:"activo"},
      {id:3, nombre:"Alicia", estado:"activo"},
      {id:4, nombre:"Roberto", estado:"inactivo"},
      {id:5, nombre:"Sum", estado:"inactivo"}
     ];

     this.listaBitacora = [
      {id:1, i_name:"bitacora 1", date:"27/06/2023", descripcion:"primera bitacora"},
      {id:2, i_name:"bitacora 2", date:"27/06/2023", descripcion:"segunda bitacora"},
      {id:3, i_name:"bitacora 3", date:"27/06/2023", descripcion:"tercera bitacora"}
     ];

     this.listaPacientes = [
      {id:1, nombre:"Magenta", estado:"activo"},
      {id:2, nombre:"Perla", estado:"activo"},
      {id:3, nombre:"Victoria", estado:"activo"},
      {id:4, nombre:"Rene", estado:"inactivo"}
     ];
  }

  searchSituacion(data: any){
    //temporal
  }

  searchBitacora(data: any){
    //temporal
  }

}
