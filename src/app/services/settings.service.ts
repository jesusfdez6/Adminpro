import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private elemento_url = document.querySelector('#theme')   


  constructor() {

    var url= localStorage.getItem('theme');
    if(!url){
      url="./assets/css/colors/green-dark.css";
    }

    this.elemento_url?.setAttribute('href',url);

  

    
   }

   cambiaColor(color : string){

    const url = `./assets/css/colors/${color}.css`;
    this.elemento_url?.setAttribute('href',url);

    localStorage.setItem('theme',url);
//    this.checkCurrentTheme();
  }

  checkCurrentTheme(){

    const elemento = document.querySelectorAll('.selector');
    
    elemento.forEach(element =>{
       element.classList.remove("working");
       const btnTheme = element.getAttribute('data-theme');
       const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
       const urlTheme= localStorage.getItem('theme')  || `./assets/css/colors/green.css`;

       if(btnThemeUrl==urlTheme){
         element.classList.add("working");
       }
    });
 }

}
