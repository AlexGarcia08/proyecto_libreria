import mongoose from 'mongoose'; 
import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv'; 
import { testAutor } from './backend/controllers/autor.controller.js';
import { testCategoria } from './backend/controllers/categoria.controller.js';
import { testLibros } from './backend/controllers/libro.controller.js';
import { testOrden} from './backend/controllers/orden.controller.js';
import { testUsuario} from './backend/controllers/usuario.controller.js';

dotenv.config();

mongoose.connect(process.env.url) 
.then (()=> {
    console.log("Si funciona la base de datos")
})
.catch((error)=>{
    console.log ("No funciona la base de datos")
})
const app =express(); 
app.use (cors());

app.listen(4000,()=>{ 
    console.log ('Funciona el servidor')
})

testAutor()
testCategoria()
testLibros()
testOrden()
testUsuario()