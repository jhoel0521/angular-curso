import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardProductosComponentComponent } from './components/card-productos-component/card-productos-component.component';
import { CardBuscadorComponent } from './components/card-buscador/card-buscador.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { CardProductoTarjetaComponent } from './components/card-producto-tarjeta/card-producto-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InicioComponent,
    AboutComponent,
    NavbarComponent,
    CardProductosComponentComponent,
    CardBuscadorComponent,
    CardProductoComponent,
    CardProductoTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
