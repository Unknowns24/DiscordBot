exports.run = async (client, message, args) => {  
    message.delete();
    
    // variables 
    var money = message.content.slice(6).toLowerCase();
    var canal = client.channels.get(`${config.dndcanalid}`);

    /*
        Estas son las variables para la fecha y la hora 
        que se utilizan en el mensaje
    */
    var hoy = new Date(); var dia = hoy.getDate(); var mes = hoy.getMonth() + 1; var year = hoy.getFullYear(); var hora = hoy.getHours(); var minutos = hoy.getMinutes(); var segundos = hoy.getSeconds();
    var fecha = (`${dia}/${mes}/${year} a las ${hora}:${minutos}:${segundos} hora española`)

    
    // MSGs //
    const donateMsg = new Discord.RichEmbed()
        .setColor('#44E39B')
        .setTitle(`💵 | Comando Donar Utilizado`)
        .setDescription(`el usuario <@${message.author.id}> de id ${message.author.id} uso el comando /donar`)
        .addField('💰 | Monto', `El (o Ella) aclaro que quiere donar un monto de ${money}`)
        .addField('📩 | Estado', 'Recibio mi mensaje esta esperando respuesta')
        .addField('🕜 | fecha', `${fecha}`)
        .setTimestamp()
        .setFooter('UNK-Bot © made by unknowns')
    ;

    const howToDonate = new Discord.RichEmbed()
        .setColor('#44E39B')
        .setTitle(`📌 | Como puedo donar`)
        .addField('📛 | Aviso', `Este comando lo que hace es avisarle a los "${config.highrank}" que quieres donar por lo que se ruega que no se use sin sentido`)
        .addField('📋 | Pasos', 'Para donar debes escribir el comando **/donar** + __la cantidad a donar__ + __la moneda en la que se donara (solo se puede en dolares y euros)__ por ejemplo: \n **/donar 8 euros** \naqui estas indicando que vas a donar 8 euros')
        .setTimestamp()
        .setFooter('UNK-Bot © made by unknowns')
    ;
    
    // main function
    try {
        if (args[0] === " " || args[0] == "" || args[0] === null) {
            message.delete();
            return util.unkred("usa [ /donar -help ] para ver como se utiliza este comando",5000)
        }
        
        if (args[0] == "-help" || args[0] == "-Help" || args[0] == "-HELP") {
            message.delete();
            return message.channel.send(howToDonate);
        }

        if (isNaN(parseFloat(args[0]))){
            message.delete();
            return util.unkred("Por favor ingresa un monto valido", 5000)
        }

        if (!args[1]) {return util.unkred("Debes ingresar una moneda", 5000)}

        if ((args[1].toLowerCase() != "dolares" && args[1].toLowerCase() != "euros" && args[1].toLowerCase() != "usd" && args[1].toLowerCase() != "eu")){
            message.delete();
            return util.unkred("Por favor ingresa una moneda valida", 5000)
        }

        message.author.send(`🎉 Muchas gracias por querer contribuir con  ${config.svname} todo ayuda muchisimo 🎉 \n :fire: Se le acaba de avisar a los "${config.highrank}" que quieres donar ${money} 💶 ya se pondran en contacto con tigo :fire:\n mensaje enviado el ${fecha}`)
        util.unkgreen("Hecho :fire:", 5000)
        canal.send(donateMsg);
    }catch(err){
        console.log(err)
    }
};