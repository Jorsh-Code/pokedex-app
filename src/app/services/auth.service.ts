import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth : boolean = false;
  public user: string = '';
  public password: string = '';
  public token: string = '';
  constructor() { 
    this.auth = this.getStatus();
  }

  login(){
    this.auth = true;
    localStorage.setItem('auth','true');
  }

  logout(){
    this.auth = false;
    localStorage.removeItem('auth');
  }

  getStatus(){
    return (localStorage.getItem('auth') === 'true');
  }

  showSession(){
    return this.auth;
  }
  getToken(u:string,p:string){
    if(u === 'jl' && p === '123456') this.token = 'abcd123456789';
  }
}
