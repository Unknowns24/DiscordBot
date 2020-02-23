const mysql = require('mysql');

module.exports = () => { 
    try{
        
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '', 
            database: 'unk_bot'
        })
        
        connection.query("SHOW TABLES", (err, res) => { 
            if(err != null || err != undefined){
                return log(`${colors.red("ERROR: Coneccion a la base de datos rechazada")}`)
            }else{
                log(`Data Base: ${colors.green("Coneccion con la base de datos establecida")}`)
            }
        });

        return connection;
    }catch(err){
        return console.log(err);
    };
};
