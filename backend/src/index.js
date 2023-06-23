//importamos el app previamente creado
import app from "./app.js";
const main = () =>{
    //hacemos una listen para crear nuestro servidor y le asiganmos el puerto previamente declarado
    app.listen(app.get("port"));
    //mandamos un mensaje de confirmacion a la consola para saber cuando nuestro servidor se esta ejecutando
    //agregamos nodemon al package.json para que el servidor actualize los cambios de manera manual
    console.log(`The Practice Server with nodemon is running on port ${app.get("port")}`);

}

main();