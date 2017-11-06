import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';

export interface CanComponentDeactivateService {
  canDeactivate: () => Observable < boolean > | Promise < boolean > | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate < CanComponentDeactivateService > {
  canDeactivate(component: CanComponentDeactivateService) {
    return component.canDeactivate
      ? component.canDeactivate()
      : true;
  }
}
