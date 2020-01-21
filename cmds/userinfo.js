exports.run = async (client, message, args) => { 
    try{ 
        let userm = message.mentions.users.first()
        message.delete()
        if(!userm){
            var user = message.author;
        
            const embed = new Discord.RichEmbed()
            .setThumbnail(user.avatarURL)
            .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
            .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
            .addField('ID', user.id, true)
            .addField('Estado', user.presence.status, true)
            .addField('Apodo', message.member.nickname, true)
            .addField('Cuenta Creada', user.createdAt.toDateString(), true)
            .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
            .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
            .setColor(0x66b3ff)
            
        message.channel.send({ embed });
        }else{
            console.log(userm)

            const embed = new Discord.RichEmbed()
                .setThumbnail(userm.avatarURL)
                .setAuthor("👥 Informacion del Usuario 👥", userm.avatarURL)
                .addField('Nombre', `${userm.id}`, true)
                .addField('Identificador', userm.presence.status, true)
                .addField('📋 | Cuenta Creada', getTime(userm.createdAt))
                //.addField('🕛 | Fecha de Union', getTime(userm.member/*.joinedTimestamp*/))
                .setColor(0x66b3ff)
            ;

            message.channel.send({ embed });
        }
    }catch(err){
        console.error(err)
    }
    function getTime(time) {
        var hoy = new Date(time); var dia = hoy.getDate(); var mes = hoy.getMonth() + 1; var year = hoy.getFullYear(); var hora = hoy.getHours() + 1; var minutos = hoy.getMinutes();
        var fecha = (`${dia}/${mes}/${year} a las ${hora}:${minutos}`)
        
        return fecha
    }
}