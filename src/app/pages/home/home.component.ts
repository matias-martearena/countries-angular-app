import { Component } from '@angular/core'

import { ApiCountryService } from './../../services/api-country.service'

import { SidebarComponent } from '../../components/sidebar/sidebar.component'
import { NavbarComponent } from '../../components/navbar/navbar.component'
import { SearcherComponent } from '../../components/searcher/searcher.component'
import { CountriesListComponent } from '../../components/countries-list/countries-list.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent,
    SearcherComponent,
    CountriesListComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public countries: any[] = []

  constructor(private apiCountryService: ApiCountryService) {}

  onSearch(query: string): void {
    if (query || query.trim()) {
      this.apiCountryService.getCountryByName(query).subscribe(response => {
        this.countries = response
      })
    } else {
      this.countries = []
    }
  }
}
