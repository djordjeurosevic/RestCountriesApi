import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'

import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer'
import { Country } from '../country.model';

@Component({
  selector: 'app-region-countries',
  templateUrl: './region-countries-component.html',
  styleUrls: ['./region-countries-component.css']
})
export class RegionCountriesComponent implements OnInit, OnDestroy {
  public regionCountries: Country[] = [];
  public regionTitle: string;
  public title = "";
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.loadCountries();
  }
  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
  loadCountries(): void {
    this.subscription = this.route.params
      .pipe(
        map(params => {
          return params['reg'];
        }),
        switchMap(reg => {
          this.regionTitle = reg;
          this.title = "Region name: " + reg;
          return this.store.select('countries');
        }),
        map(countriesState => {
          return countriesState.countries.filter((countries) => {
            return countries.regionalBlocs.some((regionalBloc) =>
              regionalBloc.acronym.toLowerCase() === this.regionTitle.toLowerCase()
            )
          });
        })
      )
      .subscribe((countries: Country[]) => {
        this.regionCountries = countries;
      });

  }
}
