import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logged: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.logged.next(false);
  }

  logIn() {
    this.logged.next(true);
  }


  logOut() {
    this.logged.next(false);
  }


  public isLogged() {
    return this.logged.asObservable();
  }
}
