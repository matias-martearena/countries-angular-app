import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        /*children: [
            {
                path: '/capitales',
                title: 'capitales',
                component: 'componente',
            },
            {
                path: '/paises',
                title: 'paises',
                component: 'componentepais',
            },
            {
                path: '/ciudad',
                title: 'ciudades',
                component: 'componente',
            },
        ],*/
    },
]
