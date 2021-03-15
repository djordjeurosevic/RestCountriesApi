import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../country.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  @Input() countries: Country[];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCountryClick(countryCode: string) {
    this.router.navigate([`/countries/item/${countryCode}`]);
  }
}
