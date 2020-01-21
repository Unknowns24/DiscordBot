const sqlite3 = require('sqlite3').verbose();
const sql = new sqlite3.Database(config.database);

module.exports = {
    createTables: async function(){
        try{
            await sql.run("CREATE TABLE IF NOT EXISTS licences (aprove INTEGER, licence TEXT)")
            await sql.run("CREATE TABLE IF NOT EXISTS servers (serverID INTEGER, licence TEXT, verificated INTEGER)")
        }catch(err){
            console.log(err)
        }
    }
}