import { esquemaAutor } from "./autor.model.js";
import {model} from 'mongoose'

export const modeloUsuario = new model('Usuarios', esquemaAutor)