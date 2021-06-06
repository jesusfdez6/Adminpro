import { Component, OnInit,Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label,Color } from 'ng2-charts';
@Component({
  selector: 'app-graficar',
  templateUrl: './graficar.component.html',
  styles: [
  ]
})
export class GraficarComponent{

  @Input('labels') doughnutChartLabels: Label[] = ['','', ''];
  @Input('datos') doughnutChartData: MultiDataSet = [
    [0, 0,0],
  ];
  @Input('titulo') titulo:string = '';

  public doughnutChartType: ChartType = 'doughnut';

  public colors:Color[]=[{
    backgroundColor:['red','blue','green']
  }];

}
