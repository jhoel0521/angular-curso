import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardproductoComponent } from './components/cardproducto/cardproducto.component';
import { CardproductosComponent } from './components/cardproductos/cardproductos.component';
import { CardproductoTarjetaComponent } from './components/cardproducto-tarjeta/cardproducto-tarjeta.component';
import { CardbuscadorComponent } from './components/cardbuscador/cardbuscador.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardProductosComponentComponent } from './components/card-productos-component/card-productos-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardproductoComponent,
    CardproductosComponent,
    CardproductoTarjetaComponent,
    CardbuscadorComponent,
    FooterComponent,
    InicioComponent,
    AboutComponent,
    NavbarComponent,
    CardProductosComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
