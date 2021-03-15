export interface Country {
  name: string;
  nativeName: string;
  topLevelDomain: string[];
  population: number;
  currencies: Currency[];
  region: string;
  languages: Language[];
  area: number;
  latlng: string;
  translations: string;
  altSpellings: string;
  timezones: string;
  subregion: string;
  capital: string;
  borders: string[];
  flag: string;
  alpha2Code: string;
  alpha3Code: string;
  regionalBlocs: RegionalBloc[];
  demonym: string;
  gini: string;
  callingCodes: string;
  numericCode: string;
  currenciesCode?: string[];
  languagesName?: string[];
  bordersName?: string[];
}
export interface RegionalBloc {
  acronym: string
}


export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
