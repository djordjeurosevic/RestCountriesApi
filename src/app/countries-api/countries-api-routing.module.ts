import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountriesResolverService} from './countries/countries-resolver.service'

const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', 
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule), resolve: [CountriesResolverService]}
];

@NgModule({ 
  imports: 
    [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesApiRoutingModule { }
