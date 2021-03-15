import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators'
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer'

import { Country } from '../country.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css']
})
export class CountryItemComponent implements OnInit, OnDestroy {
  public country: Country;
  public neighborCountries: Country[] = [];
  private countriesSubscription: Subscription;
  private neighborsSubscription: Subscription;
  private code: string;
  private borders: string[];

  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadCountry();
  }
  ngOnDestroy(): void {
    if (this.countriesSubscription)
      this.countriesSubscription.unsubscribe();
    if (this.neighborsSubscription)
      this.neighborsSubscription.unsubscribe();
  }

  loadCountry(): void {
    this.countriesSubscription = (this.route.params
      .pipe(
        map(params => {
          return params['code'];
        }),
        switchMap(code => {
          this.code = code;
          return this.store.select('countries');
        }),
        map(countriesState => {
          return countriesState.countries.find((country) => {
            return country.alpha3Code.toLowerCase() === this.code.toLowerCase();
          });
        })
      )
      .subscribe(country => {
        this.borders = country.borders;
        this.country = country;
        this.loadNeighbors();
      }));
  }
  loadNeighbors(): void {
    this.neighborsSubscription = (this.store
      .select('countries')
      .pipe(map(countriesState => countriesState.countries.filter((country) => {
        return this.borders.includes(country.alpha3Code);
      })))
      .subscribe((countries: Country[]) => {
        this.neighborCountries = countries;
      }));
  }
}
