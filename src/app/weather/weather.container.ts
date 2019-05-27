import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './store/index';
import {SearchCitiesWeatherAction} from './store/actions/weather.action';
import {Observable} from 'rxjs/Observable';
import {Weather} from '../model/weather';
import {WeatherSelectors} from './store/selectors/weather.selector';

@Component({
  selector: 'app-weather',
  template: `
    <app-search
      [value]="search$ | async"
      (onSearch)="cityWeatherSearch($event)">
    </app-search>
    <app-results [cities]="cities$ | async"></app-results>  `
})

export class WeatherContainer implements OnInit {
  public search$: Observable<string>;
  public cities$: Observable<Array<Weather>>;

  constructor(private store: Store<AppState>) {
  }

  cityWeatherSearch(city: string) {
    this.store.dispatch(new SearchCitiesWeatherAction(city));
  }

  public ngOnInit(): void {
    this.search$ = this.store.select<string>(WeatherSelectors.search);
    this.cities$ = this.store.select<Array<Weather>>(WeatherSelectors.cities);
  }
}
