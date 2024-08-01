import { modeloUsuario } from "../models/usuario.model.js";

export const testUsuario = () =>{
    console.log("funciona la conexion de usuario")
}

modeloUsuario.create({
    name:"betza",
    n_libro: "only good days",
    fecha_nacimiento: "18/07/2002",
    numero_orden: 418
})