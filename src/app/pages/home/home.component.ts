import { Component } from '@angular/core'
import { SidebarComponent } from '../../components/sidebar/sidebar.component'
import { NavbarComponent } from '../../components/navbar/navbar.component'
import { SearcherComponent } from '../../components/searcher/searcher.component'
import { CountriesListComponent } from '../../components/countries-list/countries-list.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [SidebarComponent, NavbarComponent, SearcherComponent, CountriesListComponent],
    templateUrl: './home.component.html',
})
export class HomeComponent {}
