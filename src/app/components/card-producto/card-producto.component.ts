import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
  producto!: Producto;
  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productosService.getProducto(id);
  }
  back(): void {
    this.location.back();
  }
}