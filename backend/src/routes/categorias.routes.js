//importamos el archivo Router de express
import {Router} from "express";
import { methodsHTTP as categoriaController } from "../controllers/categoria.controllers.js";
//creamos una constante para declarar Router
const router = Router();
//le declaramos el parametro .get a router y dentro de el los pparametros mandamos una arrow function con req y res (reques y response)
router.get("/", categoriaController.getCategorias);
    /* //mandamos una respuesta dentro de la arrow function
    res.send("categorias de FacturArtemis") */

//exportamos la constante router
export default router;