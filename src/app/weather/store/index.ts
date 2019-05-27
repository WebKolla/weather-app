import {WeatherSearchState, reducer as WeatherReducer} from './reducers/weather.reducer';
import {ActionReducerMap} from '@ngrx/store';


export interface AppState {
  weather: WeatherSearchState;
}

export const reducers: ActionReducerMap<AppState> = {
  weather: WeatherReducer
};
