import {Schema, model} from 'mongoose'


export const esquemaAutor = new Schema({
    name:{
        type: String
    },
    n_libro:{
        type: String
    },
    fecha_nacimiento:{
        type: String
    },
    numero_orden:{
        type: Number
    }
 })
 
export const modeloAutor = new model ('Autor', esquemaAutor)