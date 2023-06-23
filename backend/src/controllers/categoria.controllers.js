//importamos la conexion
import getConnection from "./../db/database.js";

const getCategorias = async (req,res) =>{
    /* // res.json({"Categoria":"Electrodomesticos"}) */
    const connection = await getConnection();
    const result = await connection.query("SELECT id_categoria, nombre_categoria, descripcion_categoria, img_categoria FROM categorias");
    console.log(result);
    res.json(result);
};

// Exportamos el metodo el cual sera getCategorias
export const methodsHTTP = {
    getCategorias 
}

