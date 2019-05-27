import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {WeatherContainer} from './weather.container';
import {Store} from '@ngrx/store';
import {AppState} from './store';
import {SearchCitiesWeatherAction} from './store/actions/weather.action';

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContainer],
      imports: [],
      providers: [{
        provide: Store,
        useValue: jasmine.createSpyObj('Store', ['dispatch', 'select'])
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create container', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch SearchCityWeatherAction on search', () => {
    const mockSearch = 'test';
    const store: jasmine.SpyObj<Store<AppState>> = TestBed.get(Store);
    store.dispatch.and.callThrough();
    component.cityWeatherSearch(mockSearch);

    expect(store.dispatch).toHaveBeenCalledWith(new SearchCitiesWeatherAction(mockSearch));
  });
});
