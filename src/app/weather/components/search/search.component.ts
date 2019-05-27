import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public formGroup: FormGroup;

  @Input()
  public set value(city: string) {

    if (!this.formGroup) {
      return;
    }
    //Bind form value
    this.formGroup.patchValue({city});
  }

  //Emit the bound value
  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  search() {
    this.onSearch.emit(this.formGroup.value.city);
  }

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      city: ['', [Validators.required]]
    });
  }

}
