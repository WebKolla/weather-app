import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {map, switchMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {WeatherService} from '../../weather.service';
import {SearchCitiesWeatherAction, WeatherActionType, SearchCitiesWeatherActionSuccess, SearchCitiesWeatherActionFail} from '../actions/weather.action';


@Injectable()
export class WeatherEffects {
constructor(private actions: Actions, private weatherService: WeatherService) {}

  @Effect()
  searchCity: Observable<Action> = this.actions
    .ofType(WeatherActionType.SEARCH_WEATHER)
    .pipe(
      switchMap((action: SearchCitiesWeatherAction) => {
        const query: string = action.payload;

        return this.weatherService.searchWeatherForCity(query).pipe(
          map((response: any) => new SearchCitiesWeatherActionSuccess(response)),
          catchError(() => of(new SearchCitiesWeatherActionFail('error')))
        );
      })
    );
}
