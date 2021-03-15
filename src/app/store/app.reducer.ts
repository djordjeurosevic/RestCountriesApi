import { ActionReducerMap } from '@ngrx/store';

import * as fromCountries from '../countries-api/countries/store/countries.reducer'

export interface AppState {
  countries: fromCountries.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  countries: fromCountries.countriesReducer
};
