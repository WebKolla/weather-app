import {Weather} from '../../../model/weather';
import {WeatherActions, WeatherActionType} from '../actions/weather.action';

export interface WeatherSearchState {
  search: string;
  cities: Array<Weather>;
}

export const initialState: WeatherSearchState = {
  search: '',
  cities: []
};

export function reducer(state = initialState, action: WeatherActions): WeatherSearchState {

  switch (action.type) {
    case WeatherActionType.SEARCH_WEATHER_SUCCESS: {
      const payload = action.payload;
      return {
        search: '',
        cities: [...state.cities, payload]
      };
    }

    default: {
      return state;
    }
  }
}
