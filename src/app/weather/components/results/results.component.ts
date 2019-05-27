import {Component, OnChanges, Input} from '@angular/core';
import {City} from '../../../model/weather';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {
  @Input() cities: Array<City>;

  ngOnChanges() {
  }

}


