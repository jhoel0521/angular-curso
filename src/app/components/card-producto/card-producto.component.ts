import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto.models';
@Component({
  selector: 'app-card-producto',
  standalone: false,
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.css'
})
export class CardProductoComponent implements OnInit {
  producto: Producto | undefined;
  loading = true;
  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id') || '0', 10);
      this.producto = this.productosService.getProducto(id);
      this.loading = false;

      if (!this.producto) {
        console.error('Producto no encontrado');
      }
    });
  }

}