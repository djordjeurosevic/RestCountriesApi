import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CountriesModule } from './countries/countries.module'

@NgModule({
  declarations: [

  ],
  exports: [
   ],
  imports: [
    BrowserModule,
    CountriesModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {})
  ],
  bootstrap: []
})
export class CountriesApiModule { }
