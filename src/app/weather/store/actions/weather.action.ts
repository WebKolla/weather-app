import {Action} from '@ngrx/store';
import {Weather} from '../../../model/weather';

export enum WeatherActionType {
  SEARCH_WEATHER = '[WeatherSearch] search weather',
  SEARCH_WEATHER_SUCCESS= '[WeatherSearch] search weather success',
  SEARCH_WEATHER_FAIL = '[WeatherSearch] search weather fail'
}

export class SearchCitiesWeatherAction implements Action {
  readonly type = WeatherActionType.SEARCH_WEATHER;

  constructor(public payload: string) {}
}

export class SearchCitiesWeatherActionSuccess implements Action {
  readonly type = WeatherActionType.SEARCH_WEATHER_SUCCESS;

  constructor(public payload: Weather) {}
}

export class SearchCitiesWeatherActionFail implements Action {
  readonly type = WeatherActionType.SEARCH_WEATHER_FAIL;

  constructor(public payload: string) {}
}

//Action types
export type WeatherActions = SearchCitiesWeatherAction | SearchCitiesWeatherActionSuccess | SearchCitiesWeatherActionFail;
