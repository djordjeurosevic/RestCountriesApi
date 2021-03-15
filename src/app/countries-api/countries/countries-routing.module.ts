import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryItemComponent } from './country-item/country-item.component'
import { RegionCountriesComponent } from './region-countries/region-countries-component'
import { AllCountriesComponent } from './all-countries/all-countries.component'
import { CountryIndexComponent } from './country-index/country-index.component'

const routes: Routes = [

  { path: '', component: CountryIndexComponent },
  { path: 'all', component: AllCountriesComponent },
  { path: 'item/:code', component: CountryItemComponent },
  { path: 'region/:reg', component: RegionCountriesComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
