import { Component, Input } from '@angular/core';
import { Producto } from '../../models/producto.models';

@Component({
  selector: 'app-card-producto-tarjeta',
  standalone: false,
  templateUrl: './card-producto-tarjeta.component.html',
  styleUrl: './card-producto-tarjeta.component.css'
})
export class CardProductoTarjetaComponent {
  @Input() producto!: Producto;
  @Input() indice!: number;
}
