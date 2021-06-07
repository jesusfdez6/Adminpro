import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public elemento_url = document.querySelector('#theme')   

  constructor(private settingservices : SettingsService) { }

  ngOnInit(): void {
    this.settingservices.checkCurrentTheme();
  }
  
  cambiaColor(color : string){

    this.settingservices.cambiaColor(color);
    this.settingservices.checkCurrentTheme();
  }

 

}
