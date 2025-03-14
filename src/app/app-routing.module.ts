import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardProductosComponentComponent } from './components/card-productos-component/card-productos-component.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { CardBuscadorComponent } from './components/card-buscador/card-buscador.component';
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca-de', component: AboutComponent },
  { path: 'productos', component: CardProductosComponentComponent },
  { path: 'producto/:id', component: CardProductoComponent },
  { path: 'buscar/:termino', component: CardBuscadorComponent },
  { path: '**', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
