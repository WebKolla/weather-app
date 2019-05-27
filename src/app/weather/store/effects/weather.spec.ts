import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';

import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {of} from 'rxjs/observable/of';
import {hot, cold} from 'jasmine-marbles';

import {SearchCitiesWeatherAction, WeatherActionType, SearchCitiesWeatherActionSuccess, SearchCitiesWeatherActionFail} from '../actions/weather.action';
import {WeatherService} from '../../weather.service';
import {WeatherEffects} from './weather.effect';

describe('WeatherEffects', () => {
  let weatherEffects: WeatherEffects;
  let weatherService: jasmine.SpyObj<WeatherService>;
  let actions: any;

  beforeEach(async(() => TestBed.configureTestingModule({
      imports: [],
      providers: [
        WeatherEffects,
        provideMockActions(() => actions),
        {
          provide: WeatherService,
          useValue: jasmine.createSpyObj('WeatherService', ['searchWeatherForCity'])
        }
      ]
    })
  ));

  beforeEach(() => {
    weatherService = TestBed.get(WeatherService);
    weatherEffects = TestBed.get(WeatherEffects);
  });

  describe('searchWeatherForAGivenCity', () => {

    it('should trigger SearchCityWeatherSuccessAction on success', () => {
      weatherService.searchWeatherForCity.and.returnValue(of({}));
      const triggerAction: SearchCitiesWeatherAction = new SearchCitiesWeatherAction('test');
      const expectedAction: SearchCitiesWeatherActionSuccess = new SearchCitiesWeatherActionSuccess({});

      actions = hot('--a-', {a: triggerAction});
      const expected = cold('--b', {b: expectedAction});

      expect(weatherEffects.searchCity).toBeObservable(expected);
    });

    it('should trigger SearchCityWeatherFailureAction on failure', () => {
      weatherService.searchWeatherForCity.and.returnValue(ErrorObservable.create('test'));
      const triggerAction: SearchCitiesWeatherAction = new SearchCitiesWeatherAction('test');
      const expectedAction: SearchCitiesWeatherActionFail = new SearchCitiesWeatherActionFail('error');

      actions = hot('--a-', {a: triggerAction});
      const expected = cold('--b', {b: expectedAction});

      expect(weatherEffects.searchCity).toBeObservable(expected);
    });
  });
});
