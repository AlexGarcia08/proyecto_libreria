import {Schema, model} from 'mongoose'

export const esquemaCategoria = new Schema({
    categoria:{
        type: String
    },
    libro:{
        type: String
    }
 })
 

export const modeloCategoria = new model ('Categoria', esquemaCategoria)