import getConnection from "./../db/database.js";

const getEmpleado = async (req,res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT id_empleado, nombre_empleado, celular_empleado, password_empleado FROM empleados");
    console.log(result);
    res.json(result);
};

// 
export const methodsHTTP = {
    //
    getEmpleado 
}