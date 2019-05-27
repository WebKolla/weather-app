import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {SearchComponent} from './search.component';

import Spy = jasmine.Spy;
import {ReactiveFormsModule} from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        ReactiveFormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should pass the set value when search clicked', () => {
    const searchInput: HTMLInputElement = fixture.nativeElement.querySelector('#city');
    const mockValue = 'Colombo';

    spyOn(component.onSearch, 'emit').and.callThrough();
    searchInput.value = mockValue;
    searchInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const button: HTMLElement = fixture.nativeElement.querySelector('button');
    button.click();

    fixture.detectChanges();

    expect(component.onSearch.emit).toHaveBeenCalledWith(mockValue);
  });

  it('should accept the set value', () => {
    const mockValue = 'Colombo';
    component.value = mockValue;
    fixture.detectChanges();

    const searchInput: HTMLInputElement = fixture.nativeElement.querySelector('#city');
    expect(searchInput.value).toEqual(mockValue);
  });
});
