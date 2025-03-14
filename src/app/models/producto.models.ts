export class Producto {
    nombre: string;
    img: string;
    precio: number;
    constructor(nombre: string = "", img: string = "", precio: number = 0) {
        this.nombre = nombre;
        this.img = img;
        this.precio = precio;
    }
}