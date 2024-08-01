import { modeloAutor } from "../models/autor.model.js";

export const testAutor =() =>{
    console.log('Si funcina la conexion de autor')
}

modeloAutor.create({
    name: "Alex",
    n_libro: "fernanfloo",
    fecha_nacimiento: "08/07/2004",
    numero_orden: 230
})