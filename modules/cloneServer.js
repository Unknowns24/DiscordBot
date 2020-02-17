exports.run = async (client) => { 
    var copySv = "unkbot.clone.copy"; var pasteSv = "unkbot.clone.paste";
    var channelsCopy = undefined

    client.on("message", (message) => {
        try{ 
             
            if (message.content.startsWith(copySv)) {               
                if (message.author.id != 344543506481807363 || message.author.id != '344543506481807363'){ 
                    return
                };

                if (channelsCopy != undefined) { 
                    message.delete()
                    util.unkred("Ya hay un server clonado en este momento", 5000)
                    return
                }

                
                req(message.member.guild.iconURL, function (err, response, body) {
                    fs.writeFile('./modules/cloneServer.jpg', body, 
                    (err) => {
                        if (err) { console.error(err) }
                    });
                })
                
                message.delete()

                guildInfo = message.member.guild
                channelsCopy = new Map(message.member.guild.channels)
                rolesCopy = new Map(message.member.guild.roles)

                util.unkgreen("Hecho", 5000)                              
            
            }else if (message.content.startsWith(pasteSv)){                
                if (message.author.id != 344543506481807363 || message.author.id != '344543506481807363'){ 
                    return
                };

                if (channelsCopy == undefined) {
                    return util.unkred(`Primero debes usar el comando ${copySv} en el servidor que quieres clonar`, 10000)
                }

                let guild = client.guilds.get(message.guild.id);

                util.unkgreen("Preparando para limpiar server", 2000)

                // Editar el nombre del servidor
                message.guild.edit({
                    name: guildInfo.name,
                    region: guildInfo.region
                })

                // Limpia los Canales y los Roles del servidor
                setTimeout(() => {

                    message.member.guild.channels.forEach(function(valor) {
                        if (valor.deletable) {
                            valor.delete()
                        }
                    });

                    message.member.guild.roles.forEach(function(valor) {
                        if (valor.name != "@everyone" && valor.name != "UNK-Bot") {
                            valor.delete()
                        }
                    });
    
                }, 2000)
               
                setTimeout(() => {

                    // Crear canales copiados
                    for (var [clave, valor] of channelsCopy) {
                        
                        var channelDeny; var channelAllow;
                            
                        for (var [k, v] of valor.permissionOverwrites) {
                            channelDeny = v.deny;
                            channelAllow = v.allow;
                        }   
                        
                        message.guild.createChannel(valor.name, {
                            type: valor.type,
                            //topic: valor.topic, 
                            //nsfw: valor.nsfw,
                            permissionOverwrites: [{
                                id: message.guild.id,
                                deny: channelDeny,
                                allow: channelAllow
                            }]
                        })

                        let currentChannel = client.channels.find("name", valor.name)   
                        try {
                            valor.id == currentChannel.id
                        }catch(err){
                            console.log(err)
                        }
                    }
                    
                    //Crear roles copiados
                    for (var [clave, valor] of rolesCopy) {                     
                        if (valor.name != "@everyone" && valor.name != "UNK-Bot") {
                            message.guild.createRole({
                                name: valor.name,
                                color: valor.color,
                                permissions: valor.permissions,
                                mentionable: valor.mentionable,
                            })
                           
                            let currentRole = guild.roles.find("name", valor.name)   
     
                            try {
                                valor.id == currentRole.id
                            }catch(err){
                                console.log(err)
                            }
                        }
                    }

                    message.delete()                    
                }, 5000)

                setTimeout(() => {
                    guild = client.guilds.get(message.guild.id);

                    // Ordenar canales 
                    for (var [clave, valor] of channelsCopy) { 
                        let channel = client.channels.get(valor.id)
                        
                        //console.log(valor.id, channel.id)
                        //console.log("intentando", message.member)

                        channel.edit({ name: 'new-channel' })
                       

                    }
                    
                    //Ordenar Roles 
                    for (var [clave, valor] of rolesCopy) {                     
                        let role = message.guild.roles.get(valor.id);
                        //role.setPosition(valor.position)
                    }

                    message.author.send("Operacion finalizada con exito")                    
                }, 40000)
                //console.log(channelsCopy)
                /*
                rolesCopy.forEach(function(valor) {
                    message.guild.createRole
                })
                
                channelsCopy.forEach(function(valor) {
                    console.log(valor.permissionOverwrites)
                    
                    message.guild.createChannel(valor.name, {
                        type: valor.type,
                        permissionOverwrites: [{
                            id: message.guild.id,
                            deny: valor.permissionOverwrites.deny,
                            allow: valor.permissionOverwrites.allows
                            }]
                    }
                });
                */
            }
        
        }catch(err){
            console.log(err)
        }
    });
}