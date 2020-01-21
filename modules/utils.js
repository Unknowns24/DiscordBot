//////////////////////////////
//      Discord Embeds      //
//////////////////////////////

client.on("message", message => {

    // Embed para errores

    module.exports.error = (args) => {
        let embed = new Discord.RichEmbed()
        .setAuthor(state)
        .setDescription(args)
        .setColor('#e22424')
        .setThumbnail(icon)
        message.channel.send({ embed: embed })
        .then(msg => {
            msg.delete(15000)
        })
        return;
    }

    // Embed Colores 

    module.exports.green = (args) => {
        let embed = new Discord.RichEmbed()
        .setAuthor(state)
        .setDescription(args)
        .setColor('#00FF08')
        .setThumbnail(icon)
        message.channel.send({ embed: embed })
        return;
    }

    module.exports.blue = (args) => {
        let embed = new Discord.RichEmbed()
        .setAuthor(state)
        .setDescription(args)
        .setColor('#00F0FF')
        .setThumbnail(icon)
        message.channel.send({ embed: embed })
        return;
    }

    module.exports.red = (args) => {
        let embed = new Discord.RichEmbed()
        .setAuthor(state)
        .setDescription(args)
        .setColor('#FF0000')
        .setThumbnail(icon)
        message.channel.send({ embed: embed })
        return;
    }

    module.exports.yellow = (args) => {
        let embed = new Discord.RichEmbed()
        .setDescription(args)
        .setColor('#FBFF00')
        .setThumbnail(icon)
        message.channel.send({ embed: embed })
        return;
    }

    module.exports.lightblue = (args) => {
        let embed = new Discord.RichEmbed()
        .setDescription(args)
        .setColor('#6FF1E6')
        message.channel.send({ embed: embed })
        return;
    }

    module.exports.lima = (args) => {
        let embed = new Discord.RichEmbed()
        .setDescription(args)
        .setColor('#59C000')
        message.channel.send({ embed: embed })
        return;
    }


    // embeds que se borran solos
    
    module.exports.unkgreen = (args, tiempo) => {
        let embed = new Discord.RichEmbed()
        .setAuthor(state)
        .setDescription(args)
        .setColor('#00FF08')
        .setThumbnail(icon)
        message.channel.send({ embed: embed })
        .then(msg => {
            msg.delete(tiempo)
        })
        return;
    }

    module.exports.unkblue = (args, tiempo) => {
        let embed = new Discord.RichEmbed()
        .setAuthor(state)
        .setDescription(args)
        .setColor('#00F0FF')
        .setThumbnail(icon)
        message.channel.send({ embed: embed })
        .then(msg => {
            msg.delete(tiempo)
        })
        return;
    }

    module.exports.unkred = (args, tiempo) => {
        let embed = new Discord.RichEmbed()
        .setAuthor(state)
        .setDescription(args)
        .setColor('#FF0000')
        .setThumbnail(icon)
        message.channel.send({ embed: embed })
        .then(msg => {
            msg.delete(tiempo)
        })
        return;
    }

    module.exports.unkyellow = (args, tiempo) => {
        let embed = new Discord.RichEmbed()
        .setDescription(args)
        .setColor('#FBFF00')
        .setThumbnail(icon)
        message.channel.send({ embed: embed })
        .then(msg => {
            msg.delete(tiempo)
        })
        return;
    }

    module.exports.unklightblue = (args, tiempo) => {
        let embed = new Discord.RichEmbed()
        .setDescription(args)
        .setColor('#6FF1E6')
        message.channel.send({ embed: embed })
        .then(msg => {
            msg.delete(tiempo)
        })
        return;
    }

    module.exports.unklima = (args, tiempo) => {
        let embed = new Discord.RichEmbed()
        .setDescription(args)
        .setColor('#59C000')
        message.channel.send({ embed: embed })
        .then(msg => {
            msg.delete(tiempo)
        })
        return;
    }

    // Funcion Para numero aleatorio //

    module.exports.randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
})
