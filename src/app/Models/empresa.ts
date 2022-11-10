export class Empresa{
    _id?: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    precio: string;

    constructor(nombre: string, categoria: string, ubicacion: string, precio: string){
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;

    }
}