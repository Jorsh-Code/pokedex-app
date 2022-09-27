import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public user: string = '';
  public password: string = '';
  
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.user = this.user;
    this.authService.password = this.password;
    this.authService.getToken(this.user,this.password);
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

  showSession():boolean{
    return this.authService.showSession();
  }

 
  
}
