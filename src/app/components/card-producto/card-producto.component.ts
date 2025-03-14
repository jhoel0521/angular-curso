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
  producto: Producto = new Producto();
  constructor(private route: ActivatedRoute, private _productosService: ProductosService) {
    this.route.params.subscribe(params => {
      this.producto = this._productosService.getProducto(parseInt(params['id']) ?? 0);
    });
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '0';
    this.producto = this._productosService.getProducto(parseInt(id));
    console.log(this.producto);
  }

}