import {Router} from "express";
import { methodsHTTP as productoController } from "../controllers/producto.controllers.js";

const router = Router();

router.get("/", productoController.getProducto);
    
export default router;