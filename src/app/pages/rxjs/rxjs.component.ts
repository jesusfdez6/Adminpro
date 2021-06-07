import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable,interval, Subscription } from 'rxjs';
import {retry,take,map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public  intervalSubs:Subscription;
  constructor() {

   // this.getObservable();
  this.intervalSubs= this.retornaIntervalo().subscribe(console.log)
  
}

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaObservable():Observable<number>{

    return new Observable<number>((observer)=>{
      
      let i =-1;

     const intervalo = setInterval(()=>{
        i++;
        observer.next(i);
        if(i==4){
          clearInterval(intervalo);
          observer.complete();
        }
        if(i==2){
          
          observer.error('i llegó mal');
        }
      },1000)

     
    });
  }

  getObservable(){

    this.retornaObservable().pipe(
      retry()
    ).subscribe(
      (valor) => console.log("subs", valor),
      (error)=>console.log(error),
      ()=>console.log("terminado")
    );

  }

  retornaIntervalo(): Observable<number>{

    return interval(500).pipe(
     // take(10),
      map(valor=> valor+1),
      filter(valor=> valor%2==1)
    );
  }

  //MAP : Map, hace un nuevo array con los valores que puedo modificarlo
  //FILTER: un array que se hace por medio de una condidicion



}
