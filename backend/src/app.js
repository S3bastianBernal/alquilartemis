//importamos el express
import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";
import constructoraRoutes from "./routes/constructoras.routes.js";
import empleadoRoutes from "./routes/empleados.routes.js";
import productoRoutes from "./routes/productos.routes.js";

// creamos una constante para declarar express
const app = express();

//declaramos el puerto y el valor que queramos asiganrle al mismo
app.set("port", 5500);

//Aqui manejaremos las rutas(Routes)
//le declaramos una consicion de busqueda exacta para mostrar el dato deseado
app.use("/api/categorias",categoriaRoutes);
app.use("/api/constructora",constructoraRoutes);
app.use("/api/empleados",empleadoRoutes);
app.use("/api/productos",productoRoutes);   

// exportamos las constante app(la cual esta obteniendo los datos de express)
export default app;
