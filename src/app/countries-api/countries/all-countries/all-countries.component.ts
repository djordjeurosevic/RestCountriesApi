import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';

import { combineLatest, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';


import { Store } from '@ngrx/store';

import { Country } from '../country.model';
import { FilterCountriesService } from './filter-countries.service';

import * as fromApp from '../../../store/app.reducer'


@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit, OnDestroy {
  @ViewChild('selectDropdown') selectDropdown: MatSelect;


  public _allCountries: Country[] = [];
  private searchFilter: string;
  private selectFilter: string;
  public selectedItem: boolean = false;
  subscription: Subscription;

  constructor(
    private filterCountriesService: FilterCountriesService,
    private store: Store<fromApp.AppState>
  ) {
    const filterObservables = combineLatest([this.filterCountriesService.inputChange$.pipe(startWith('')),
    this.filterCountriesService.selectChange$.pipe(startWith(''))]);

    filterObservables.subscribe(([input, select]) => {
      this.searchFilter = input ? input : '';
      this.selectFilter = select ? select : '';
    });
  }
  get countries() {
    return this._allCountries
      ? this._allCountries
        .filter(country =>
          this.searchFilter ? country.name.toLowerCase().includes(this.searchFilter) : country)
        .filter(country =>
          this.selectFilter ? country.borders.includes(this.selectFilter) : country)
      : this._allCountries;
  }
  get selectCountries() {
    return this._allCountries;
  }
  ngOnInit(): void {
    this.loadCountries();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  loadCountries(): void {
    this.subscription = this.store
      .select('countries')
      .pipe(map(countriesState => countriesState.countries))
      .subscribe((countries: Country[]) => {
        this._allCountries = countries;
      });
  }
  onInputFilterChanged(filter: InputEvent) {
    this.filterCountriesService.emitInputChange((filter.target as any).value);
  }
  onSelectFilterChanged(filter: InputEvent) {
    this.selectedItem = true;
    this.filterCountriesService.emitSelectChange((filter as any).value);
  }
  onSelectFilterCleared(event: InputEvent) {
    this.selectedItem = false;
    this.filterCountriesService.emitSelectChange('');
    this.selectDropdown.value = [];
    event.stopPropagation();
  }
}
