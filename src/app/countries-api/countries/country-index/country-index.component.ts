import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryIndexService } from './country-index.service';
import { Region } from './region.model';


@Component({
  selector: 'app-regions',
  templateUrl: './country-index.component.html',
  styleUrls: ['./country-index.component.css']
})
export class CountryIndexComponent implements OnInit {
  public regionList: Region[] = [];
  public title = "Select a region to view available countries";
  constructor(
    private router: Router,
    private countryIndexService: CountryIndexService
  ) { }

  ngOnInit(): void {
    this.regionList = this.countryIndexService.getRegions();
  }
  onRegionClick(regionCode: string) {
    this.router.navigate([`countries/region/${regionCode}`]);
  }
}