import { modeloCategoria } from "../models/categoria.model.js";

export const testCategoria =() =>{
    console.log('Si funcina la conexion de categoria')
}

modeloCategoria.create({
    categoria: "terror",
    libro: "slenderman"
})