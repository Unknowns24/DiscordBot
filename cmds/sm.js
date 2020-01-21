exports.run = async (client, message, args) => {

    // variables 
    var userusedcommand = (message.author.id); var cmdinuse = false;
    var avaliblerank1 = (config.sendspammenssage1); var avaliblerank2 = (config.sendspammenssage2); var avaliblerank3 = (config.sendspammenssage3); var avaliblerank4 = (config.sendspammenssage4);
    var msgdesc1 = (config.automsg1description);
    var msgdesc2 = (config.automsg2description);
    var msgdesc3 = (config.automsg3description);
    var msgdesc4 = (config.automsg4description);

    message.delete(); 
    
    // rank check 

    if ((avaliblerank1 != "null" & !message.member.roles.find("name", `${avaliblerank1}` )) || (avaliblerank2 != "null"  & !message.member.roles.find("name", `${avaliblerank2}`)) || (avaliblerank3 != "null"  & !message.member.roles.find("name", `${avaliblerank3}`)) || (avaliblerank4 != "null"  & !message.member.roles.find("name", `${avaliblerank4}`))) {
        return util.error(" No tienes Permiso para utilizar este comando ")
    }

    ////////////////////////////////////////////////////////////////////////////////////////
    
    // msg for options 

    const optionmsg = new Discord.RichEmbed()
        .setColor('#0047C0')
        .setTitle(`🌌 | opciones del comando /sm`)
        .setDescription("para usar una de las opciones pon en el canal que hayas usado el comando - y la opcion que quieras (ej. -opcion 1)")
        .addField('🎫 | opcion 1', `${msgdesc1}`)
        .addField('🎫 | opcion 2', `${msgdesc2}`)
        .addField('🎫 | opcion 3', `${msgdesc3}`)
        .addField('🎫 | opcion 4', `${msgdesc4}`)
        .setTimestamp()
        .setFooter('UNK-Bot © made by unknowns')
    ;


    const msg1 = (`||@everyone|| \n\n :fire: El server ${config.fivemsv} esta abierto :fire: \n\n🎮 que estas esperando para entrar y rolear🎮 \n IP del server: ${config.fivemip} \n\n 🌏 te estamos esperando 🌏 \n\n UNK-Bot © made by unknowns`);

    const msg2 = (`||@everyone|| \n\n🔧 El servidor ${config.fivemsv} se encuentra en mantenimiento 🔧`);
    
    const msg3 = (`||@everyone|| \n\n 🚨🚨 El servidor ${config.fivemsv} se acaba de 🔧🔧 actualizar 🔧🔧 encuentra la informacion de la actualizacion en <#${config.changelogchannelid}> 🚨🚨`);
    
    const msg4 = (`||@everyone|| \n\n 🚨🚨 AVISO GENERAL 🚨🚨: \n\n 🔎🎮 ${config.fivemsv} Esta buscando Staff !! 🎮🔎 \n  📛 Si quieres ayudar al server Postulate como Staff 📛 \n\n 📎 Informacion | Requisitos: 📎 \n-Debes tener 16 años o mas. \n-Tienes que saber todas las normas del Server (se evaluaran).\n-Tienes que estar disponible al menos 7hs semanales.\n-No puedes tener sanciones en ninguno de los Servers. \n\n canal de normas: <#${config.normasstaffchannelid}> canal para postularse: <#${config.staffchannelid}> \n att: ${config.highrank}; `);
    


    ////////////////////////////////////////////////////////////////////////////////////////

    // main 

    util.unklima("comando activado \n\n por favor indique una opcion ( -help para verlas ) \n\n\n UNK-Bot © made by unknowns", 5000)
    cmdinuse = true 

    setTimeout(() => {
        cmdinuse = false
      }, 30000)

    client.on("message", (message) => {
        
        if (message.content.startsWith("-help") & userusedcommand == message.author.id & cmdinuse == true) {
            message.delete();
            message.author.send(optionmsg);
        }else if (message.content.startsWith("-opcion 1") & userusedcommand == message.author.id & cmdinuse == true) {
            message.delete();
            message.channel.send(msg1);
            cmdinuse = false; 
        }else if (message.content.startsWith("-opcion 2") & userusedcommand == message.author.id & cmdinuse == true) {
            message.delete();
            message.channel.send(msg2);
            cmdinuse = false; 
        }else if (message.content.startsWith("-opcion 3") & userusedcommand == message.author.id & cmdinuse == true) {
            message.delete();
            message.channel.send(msg3);
            cmdinuse = false; 
        }else if (message.content.startsWith("-opcion 4") & userusedcommand == message.author.id & cmdinuse == true) {
            message.delete();
            message.channel.send(msg4);
            cmdinuse = false; 
        }
    });
};