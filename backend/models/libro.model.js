import { esquemaCategoria } from "./categoria.model.js";
import {model} from 'mongoose'

export const modeloLibro = new model('Libros', esquemaCategoria)