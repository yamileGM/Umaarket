import { Component, OnInit } from '@angular/core';
//import {LoginService} from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  /*
  logout():void{
    this.isMenuCollapsed = true;
    this.login.logout();
  }

  active():boolean{
    return this.login.isActive();
  }
  */
}