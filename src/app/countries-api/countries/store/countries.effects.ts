import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as CountriesActions from './countries.actions';
import { Country } from '../country.model';
import * as fromApp from '../../../store/app.reducer';

@Injectable()
export class CountriesEffects {

  fetchCountries = createEffect(() => {
    return this.actions$.pipe(
      ofType(CountriesActions.FETCH_COUNTRIES),
      switchMap(() => {
        return this.http.get<Country[]>(
          'https://restcountries.eu/rest/v2/all'
        );
      }),
      map(countries => {
        return new CountriesActions.SetCountries(countries);
      })
    )
  });

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }
}
