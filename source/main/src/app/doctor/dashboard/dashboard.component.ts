/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
  ApexFill,
  ApexGrid,
} from 'ng-apexcharts';
export type areaChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
};

export type linechartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: string[];
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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  ngOnInit() {
    this.llenarLista();
  }
  llenarLista(){
    this.listaSituaciones = [
      {id:1, tema:"tema 2", date:"27/06/2023", descripcion:"me siento triste", gradoAfectacion: 8, sentimiento: "tristeza", firstPen: "Me siento solo", comportamiento: "solitario"},
      {id:2, tema:"tema 2", date:"27/06/2023", descripcion:"me siento feliz", gradoAfectacion: 1, sentimiento: "felicidad", firstPen: "Soy feliz", comportamiento: "alegre"},
      {id:3, tema:"tema 3", date:"27/06/2023", descripcion:"me duele la panza", gradoAfectacion: 4, sentimiento: "debilidad", firstPen: "Estoy enferma", comportamiento: "debilidad"}
     ];
 
     this.listaEnfermeria = [
       {id:1, nombre:"mario", estado:"activo"}
      ];
 
      this.listaBitacora = [
       {id:1, i_name:"bitacora 1", date:"27/06/2023", descripcion:"primera bitacora"},
       {id:2, i_name:"bitacora 2", date:"27/06/2023", descripcion:"segunda bitacora"}
      ];
 
      this.listaPacientes = [
       {id:1, nombre:"may", estado:"activo"},
       {id:2, nombre:"pruebita", estado:"activo"}
      ];
  }

  searchSituacion(data: any){
    //temporal
  }

  searchBitacora(data: any){
    //temporal
  }
}
