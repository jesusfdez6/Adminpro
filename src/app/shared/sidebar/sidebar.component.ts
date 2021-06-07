import { Component, OnInit } from '@angular/core';
import { SiderbarService } from 'src/app/services/siderbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  constructor( private siderbarservice: SiderbarService) {
    
    this.menuItems = this.siderbarservice.menu;
  }

  ngOnInit(): void {
  }

}
