import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ErroComponent } from './erro/erro.component';
import { FilmesComponent } from './filmes/filmes.component';


export const routes: Routes = [
    { path: 'inicio', component: InicioComponent},
    { path: 'diretivas', component: DiretivasComponent},
    { path: 'databinding', component: DatabindingComponent},
    { path: 'erro', component: ErroComponent},
    { path: 'filmes', component: FilmesComponent},

    { path: '**', redirectTo: 'erro'} // rota coringa
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})

export class AppRoutes { }
