import { Injectable } from '@angular/core';
import {CanActivate, CanActivateChild} from '@angular/router';


@Injectable()
export class AuthGuardsService implements CanActivate,
CanActivateChild {

constructor() {}

  canActivate() {
    console.log('i am checking to see if you are logged in');
    return true;
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

}
