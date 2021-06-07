import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiderbarService {

  menu:any[] =[
    {
      titulo:'Dashboard',
      icon:'<i class="mdi mdi-gauge"></i>',
      submenu:[
        {titulo:"main",url:"/"},
        {titulo:"progress",url:"progress"},
        {titulo:"graficas",url:"grafica1"},
      ]
    }
  ];

  constructor() { }


}
