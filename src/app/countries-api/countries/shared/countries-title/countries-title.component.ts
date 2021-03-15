import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries-title',
  templateUrl: './countries-title.component.html',
  styleUrls: ['./countries-title.component.css']
})
export class CountriesTitleComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
