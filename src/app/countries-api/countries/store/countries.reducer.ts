import { Country } from '../country.model';
import * as CountriesActions from './countries.actions';

export interface State {
  countries: Country[];
}

const initialState: State = {
  countries: []
};

export function countriesReducer(
  state = initialState,
  action: CountriesActions.CountriesActions
) {
  switch (action.type) {
    case CountriesActions.SET_COUNTRIES:
      return {
        ...state,
        countries: [...action.payload]
      };
    default:
      return state;
  }
}
