import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }
//https://reqres.in/api/users
  ngOnInit(): void {
/*
   const  promesas = new Promise((resolve, reject)=>{
    
    if(true){
      reject("algo salio mal");
    }

    resolve("hola mundo");


  });

  promesas.then( (data)=>{
       console.log(data);
    }
  ).catch((e)=>{
    console.log(e);
  });

  console.log("fin init");
*/
  this.getUsuarios().then(usuarios=>console.log(usuarios));
  }
/*
  getUsuarios(){

    fetch('https://reqres.in/api/users')
    .then(resp =>{
      resp.json().then(data =>console.log(data));
    })
  } */

  getUsuarios(){


    return new Promise((resolve=>{
      fetch('https://reqres.in/api/users')
      .then(resp =>resp.json()) 
      .then(body=>resolve(body.data));
    })
    );
  }




}
