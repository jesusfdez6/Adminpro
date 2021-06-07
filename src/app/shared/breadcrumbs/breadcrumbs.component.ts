import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {filter,map} from 'rxjs/operators'




@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements  OnDestroy  {
  
  public titulo ="";  
  public tituloSub$:Subscription; 

  constructor(private router:Router) {

    this.tituloSub$ =  this.argumentosRuta().subscribe(({titulo})=>{
        this.titulo=titulo;
      });
   
   }

   ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }
  argumentosRuta(){

   return this.router.events.pipe(
      filter((event:any)=>event instanceof ActivationEnd && event.snapshot.firstChild==null),
      map((event:any) => event.snapshot.data),
      )

  } 

  
}
