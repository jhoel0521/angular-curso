import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: Producto[] = [
    new Producto("Audífonos", "assets/img/producto1.jpg", 100),
    new Producto("Tenis", "assets/img/producto2.jpg", 200),
    new Producto("Reloj", "assets/img/producto3.jpg", 300),
    new Producto("Celulares", "assets/img/producto4.jpg", 400),
    new Producto("Computadora", "assets/img/producto5.jpg", 500),
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

describe('ProductosService', () => {
  let service: ProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
