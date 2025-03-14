import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: Producto[] = [
    new Producto("Audífonos", "assets/img/productos/earphones.webp", 100),
    new Producto("Tenis", "assets/img/productos/tennis.jpeg", 200),
    new Producto("Reloj", "assets/img/productos/clock.jpeg", 300),
    new Producto("Celulares", "assets/img/productos/phone.webp", 400),
    new Producto("Computadora", "assets/img/productos/laptop.jpg", 500),
  ];
  constructor() { }
  getProductos(): Producto[] {
    return this.productos;
  }
  getProducto(idx: number): Producto {
    return this.productos[idx];
  }
  findProducto(palabra: string): Producto[] {
    let productosArr: Producto[] = [];
    palabra = palabra.toLowerCase();
    for (let producto of this.productos) {
      let nombre = producto.nombre.toLowerCase();
      if (nombre.indexOf(palabra) >= 0) {
        productosArr.push(producto);
      }
    }
    return productosArr;
  }

}