import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { RegionCountriesComponent } from './region-countries/region-countries-component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryIndexComponent } from './country-index/country-index.component';
import { CountryItemComponent } from './country-item/country-item.component';
import { FilterCountriesService } from './all-countries/filter-countries.service'

import { CountriesRoutingModule } from './countries-routing.module';

import { CountriesListComponent } from './shared/countries-list/countries-list.component';
import { CountriesTitleComponent } from './shared/countries-title/countries-title.component';
import { CountriesHeaderComponent } from './shared/countries-header/countries-header.component';
import { CountryIndexService } from './country-index/country-index.service';


@NgModule({
  declarations: [
    CountryItemComponent,
    RegionCountriesComponent,
    AllCountriesComponent,
    CountryIndexComponent,
    CountriesListComponent,
    CountriesTitleComponent,
    CountriesHeaderComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ScrollingModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    CountriesRoutingModule
  ],
  exports: [

  ],
  providers: [FilterCountriesService, CountryIndexService]
})
export class CountriesModule { }
