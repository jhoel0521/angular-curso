import { Component } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-card-productos-component',
  standalone: false,
  templateUrl: './card-productos-component.component.html',
  styleUrl: './card-productos-component.component.css'
})
export class CardProductosComponentComponent {
  productos: Producto[] = [];
  constructor(private productosService: ProductosService) {
    this.productos = this.productosService.getProductos();
  }
}
