import { Action } from '@ngrx/store';
import { Country } from '../country.model';

export const SET_COUNTRIES = 'Set Countries';
export const FETCH_COUNTRIES = 'Fetch Countries';

export class SetCountries implements Action {
  readonly type = SET_COUNTRIES;
  constructor(public payload: Country[]) { }
}
export class FetchCountries implements Action {
  readonly type = FETCH_COUNTRIES;
}

export type CountriesActions =
  | SetCountries
  | FetchCountries;
