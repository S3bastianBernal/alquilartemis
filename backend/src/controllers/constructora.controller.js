import getConnection from "./../db/database.js";

const getConstructora = async (req,res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT id_constructora, nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto FROM constructoras");
    console.log(result);
    res.json(result);
};

// 
export const methodsHTTP = {
    //
    getConstructora 
}