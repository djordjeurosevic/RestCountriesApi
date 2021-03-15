import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-header',
  templateUrl: './countries-header.component.html',
  styleUrls: ['./countries-header.component.css']
})
export class CountriesHeaderComponent implements OnInit {

  constructor(private router: Router
    ) { }

  ngOnInit(): void {
  }

  showAllControls(){
    this.router.navigate([`/countries/all`]);
  }
  backToRegions() {
    this.router.navigate([`/countries`]);
  }
}
