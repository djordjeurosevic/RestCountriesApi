import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Country } from './country.model';
import * as fromApp from '../../store/app.reducer';
import * as CountriesActions from './store/countries.actions';

@Injectable({ providedIn: 'root' })
export class CountriesResolverService implements Resolve<Country[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('countries').pipe(
      take(1),
      map(countriesState => {
        return countriesState.countries;
      }),
      switchMap(countries => {
        if (countries.length === 0) {
          this.store.dispatch(new CountriesActions.FetchCountries());
          return this.actions$.pipe(
            ofType(CountriesActions.SET_COUNTRIES),
            take(1)
          );
        } else {
          return of(countries);
        }
      })
    );
  }
}
