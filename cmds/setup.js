exports.run = async (client, message, args) => {
    message.delete()
    
    util.unklightblue("este servidor se esta configurando en la base de datos", 5000)

    MySQL.query(`SELECT aproved FROM servers WHERE guild = ${message.guild.id}`, (err, result) => {
        if(result[0] == undefined){

            MySQL.query(`INSERT INTO servers (guild) VALUES (${message.guild.id})`, () => {
                util.unkgreen("El server se configuro en la base de datos, exitosamente", 5000) 
            });  

        }else if(result[0] != undefined) {

            if(result[0].aproved == 1) {
                util.unkgreen("Este server ya esta en la base de datos, con licencia activa", 5000);
            }else if(result[0].aproved == 0){
                util.unkyellow("Este server ya esta en la base de datos, sin licencia activa", 5000);
            }

        }else if(err){
            console.log(err);
            return;
        }
    });
}