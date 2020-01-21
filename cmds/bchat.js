exports.run = async (client, message, args) => {    
    async function purge() {
        var bchatrank = (config.brank);
        var prefix = '/' 

        if (message.channel.type == 'dm'){
            return util.unkred("No puedes hacer eso", 5000)
        }
        
        message.delete();
        
        if(message.author.id != message.channel.guild.ownerID){ 
            if (!message.member.roles.find("name", `${bchatrank}`)) { // This checks to see if they DONT have it, the "!" inverts the true/false
                util.unkred('No tienes permiso para realizar esta accion', 5000);
                return; 
            }
        }

        if (isNaN(args[0])) {
            util.unkred(' ```Por Favor Indica la Cantidad de Mensajes. \n Usa: ' + prefix + 'bchat <cantidad>\n\n -UNK-``` ', 5000); //\n means new line.
            return;
        }

        const fetched = await message.channel.fetchMessages({limit: args[0]}); 

        if(fetched.size > 100 || fetched < 1){return util.unkred("Debes ingresar una cantidad valida (mayor a 0 y menor que 100)", 5000)}

        // Deleting the messages
        message.channel.bulkDelete(fetched.size)
        .catch(error => util.unkred(`Error: ${error}`, 5000)); 
        console.log( 'En este momento Hay ' + fetched.size + ' Mensajes Eliminandose...'); 
    }
    purge();
}