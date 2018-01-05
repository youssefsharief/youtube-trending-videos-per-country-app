import { countries } from '../mock-data/country-list.mock';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ContextService } from '../context.service';

@Component({
	selector: 'page-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@Input() isSearchBar: boolean
	// might neeed to be removed
	public selectedCountry: any;
	public countryList: any[] = countries

	public search = (text$: Observable<string>) => text$.debounceTime(200).distinctUntilChanged()
		.map(term => term.length < 2 ? [] : this.countryList.filter(v => new RegExp(term, 'gi').test(v.name)).splice(0, 10));

	public formatter = (x: { name: string }) => x.name;

	constructor(public appContext: ContextService) { }

	public selectCountry(country) {
		console.log(country);
		
		if (typeof country === 'object') {
			console.log(country);
			
			this.appContext.setCountry(country.code);
		}
	}

	ngOnInit() {
	}
}
