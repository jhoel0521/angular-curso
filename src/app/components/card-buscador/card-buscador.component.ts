import { Component } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-card-buscador',
  standalone: false,
  templateUrl: './card-buscador.component.html',
  styleUrl: './card-buscador.component.css'
})
export class CardBuscadorComponent {
  productosEncontrados: Producto[] = [];
  termino: string = ''
  constructor(
    private activatedRoute: ActivatedRoute,
    private _productosService: ProductosService
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.productosEncontrados = this._productosService.findProducto(this.termino);
    });
  }
}
