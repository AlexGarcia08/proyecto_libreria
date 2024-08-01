import { modeloOrden } from "../models/orden.model.js";

export const testOrden = () =>{
    console.log("funciona la conexion de orden")
}

modeloOrden.create({
    name:"Erik",
    n_libro: "fernanfloo",
    fecha_nacimiento: "12/12/2000",
    numero_orden: 413
})