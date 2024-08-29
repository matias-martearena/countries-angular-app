import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiCountryService } from '../../services/api-country.service';
import { debounceTime, switchMap } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'home-searcher',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.css'
})
export class SearcherComponent implements OnInit {
  @Output() searchResult = new EventEmitter<any>(); 

  countryForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private apiCountryService: ApiCountryService) {} 

  ngOnInit(): void {
 
    this.countryForm.get('name')?.valueChanges
      .pipe(
        debounceTime(300), 
        switchMap(value => this.apiCountryService.getCountryByName(value))
      )
      .subscribe(result => {
        this.searchResult.emit(result);
      });
  }

  onSearch(): void {
    const countryName = this.countryForm.get('name')?.value;
    this.apiCountryService.getCountryByName(countryName).subscribe(result => {
      this.searchResult.emit(result); 
    });
  }
}