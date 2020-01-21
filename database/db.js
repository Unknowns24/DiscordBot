const sqlite3 = require('sqlite3').verbose();
const sql = new sqlite3.Database(config.database);

module.exports = {    
    // registrar, eliminar o actualizar datos de la base de datos
    executeQuery: async function(query, args){
        try  {
            await sql.run(query, args)
        } catch(e){
            console.log(`Se ha Producido un error al intentar correr un Query Error: ${e}`)
        }
    },

    //seleccionar columnas especificas de una tabla ens la base de datos
    getQuery: async function(query, args){
        try  {
            var result = new Promise((resolve, reject) => {
                sql.get(query, args, async function(err, row){
                  if(err) reject(err);
                  resolve(row)  
                })
            })
            return result;
        } catch(e){
            console.log(`Se ha Producido un error al intentar conseguir un dato de la base de datos Error: ${e}`)
        }
    },

    //seleccionar todas las columnas de una tabla
    fetchAllQuery: async function(query, args){
        try  {
            var result = new Promise((resolve, reject) => {
                sql.get(query, args, async function(err, row){
                  if(err) reject(err);
                  resolve(row)  
                })
            })
            return result;
        } catch(e){
            console.log(`Se ha Producido un error al intentar conseguir un dato de la base de datos Error: ${e}`)
        }
    }
}

module.exports.createDB = require('./estructure')