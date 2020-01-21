exports.run = async (client) => { 
    var copySv = "unkbot.clone.copy"; var pasteSv = "unkbot.clone.paste";
    var channelsCopy = undefined

    //console.log(message.member.guild)
    //console.log(message.member.guild.channels)
    
    /*
    let canales = message.member.guild.channels
    
    canales.forEach(function(valor) {
        valor.delete()
    });
    */

    client.on("message", (message) => {
        try{ 
             
            if (message.content.startsWith(copySv)) {               
                if (message.author.id != 344543506481807363 || message.author.id != '344543506481807363'){ 
                    return
                };
                
                req(message.member.guild.iconURL, function (err, response, body) {
                    fs.writeFile('./modules/cloneServer.png', body, 
                    (err) => {
                        if (err) { console.error(err) }
                    });
                })
                
                guildInfo = message.member.guild
                channelsCopy = new Map(message.member.guild.channels)
                rolesCopy = new Map(message.member.guild.roles)

                console.log(guildInfo)
                message.delete()
                util.unkgreen("Hecho", 5000)                              
            }else if (message.content.startsWith(pasteSv)){
                if (message.author.id != 344543506481807363 || message.author.id != '344543506481807363'){ 
                    return
                };

                if (channelsCopy == undefined) {
                    return util.unkred(`Primero debes usar el comando ${copySv} en el servidor que quieres clonar`, 10000)
                }
                
                util.unkgreen("Preparando para limpiar server", 2000)
                // Editar el nombre del servidor
                message.guild.edit({
                    name: guildInfo.name,
                    region: guildInfo.region,
                })

               message.guild.setIcon('./modules/cloneServer.png')

                setTimeout(() => {
                    // Limpia los Canales y los Roles del servidor

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
                    }
                    console.log(rolesCopy)
                    
                    //Crear roles copiados
                    for (var [clave, valor] of rolesCopy) {                     
                        if (valor.name != "@everyone" && valor.name != "UNK-Bot") {
                            let role = message.guild.createRole({
                                name: valor.name,
                                color: valor.color,
                                permissions: valor.permissions,
                                mentionable: valor.mentionable,
                                //managed: valor.managed,
                                hoist: valor.hoist
                            })
                            
                            console.log("----------------------------------------------------------------")
                            console.log(role)
                            return
                           /* 
                            .then(role =>{
                                role.setPosition(valor.position)   
                            });*/
                        }
                    }
                    
                    fs.unlink('codeText.txt', function (err) {
                        if (err) throw err;
                    });

                    message.delete()
                    util.unkgreen("Operacion finalizada con exito", 5000)
                    
                }, 5000)
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