/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexMarkers,
  ApexGrid,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
export type areaChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
};

export type restRateChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
export type performanceRateChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

export type radialChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public listaSituaciones: Array<any> = [];
  public listaEnfermeria: Array<any> = [];
  public listaBitacora: Array<any> = [];
  public listaPacientes: Array<any> = [];
  public indicePrimerItem: number = 1;
  public indiceUltimoItem: number = 10;
  public fechaFormateada: any;
  public fechaFormateadaSiguiente: any;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  ngOnInit() {
    this.llenarLista();
    this.mostrarFechaActual();
    this.mostrarFechaSiguiente();
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
      {id:3, i_name:"bitacora 3", date:"27/06/2023", descripcion:"tercera bitacora"},
      {id:4, i_name:"bitacora 4", date:"27/06/2023", descripcion:"cuarta bitacora"}
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

  mostrarFechaActual() {
    // Obtener la fecha actual
    const fechaActual = new Date();

    // Formatear la fecha como desees (por ejemplo, DD/MM/AAAA HH:MM:SS)
    const formatoFecha: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };

    this.fechaFormateada = fechaActual.toLocaleString('es-ES', formatoFecha);

  }

  mostrarFechaSiguiente() {
    // Obtener la fecha actual
    const fechaActual = new Date();

    // Agregar un día a la fecha actual
    fechaActual.setDate(fechaActual.getDate() + 1);

    // Formatear la fecha como desees (por ejemplo, DD/MM/AAAA HH:MM:SS)
    const formatoFecha: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };

    this.fechaFormateadaSiguiente = fechaActual.toLocaleString('es-ES', formatoFecha);

}
}
