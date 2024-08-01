import { esquemaAutor } from "./autor.model.js";
import {model} from 'mongoose'

export const modeloOrden = new model('Ordenes', esquemaAutor)