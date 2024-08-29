import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        component: inicio,
        children: [
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
        ],
    },
    { path: 'home', component: home },
]
