import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'home-searcher',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './searcher.component.html',
})
export class SearcherComponent implements OnInit {
  @Output() searchResult = new EventEmitter<string>()

  countryForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  })

  ngOnInit(): void {
    this.countryForm.get('name')?.valueChanges.subscribe(value => {
      this.searchResult.emit(value)
    })
  }

  onSearch(): void {
    this.searchResult.emit(this.countryForm.get('name')?.value)
  }
}
