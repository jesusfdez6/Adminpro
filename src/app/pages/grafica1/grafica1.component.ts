import { Component, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label,Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public labels2: string[] = ['Download Sales2', 'In-Store Sales2', 'Mail-Order Sales2'];

  public data1 = [
    [350, 450, 100],
  ];
  public data2 = [
    [300, 350, 200],
  ];
 

}
