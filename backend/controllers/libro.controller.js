import { modeloLibro } from "../models/libro.model.js";

export const testLibros = () =>{
    console.log("funciona la conexion de libros")
}

modeloLibro.create({
    categoria: "comedia",
    libro: "fernan el crack"
})