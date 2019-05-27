import {WeatherSearchState} from '../reducers/weather.reducer';
import {MemoizedSelector, createSelector} from '@ngrx/store';
import {AppState} from '../index';
import {Weather} from '../../../model/weather';

export const selectWeather = (state: AppState) => state.weather;

export class WeatherSelectors {
  public static search: MemoizedSelector<AppState, string> = createSelector(selectWeather,
    (state: WeatherSearchState) => state.search
  );

  public static cities: MemoizedSelector<AppState, Array<Weather>> = createSelector(selectWeather,
    (state: WeatherSearchState) => state.cities
  );
}
