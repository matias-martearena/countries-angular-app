import { Component, Input } from '@angular/core'

@Component({
  selector: 'home-countries-list',
  standalone: true,
  imports: [],
  templateUrl: './countries-list.component.html',
})
export class CountriesListComponent {
  @Input() countries: any[] = []
}
