exports.run = async (client, message, args) => { 
    message.delete ();
    
    // variables 
    
    var argumentos = message.content.slice(12); 
    var canal = client.channels.get(`${config.suggestchannelid}`); 
    var usr = message.author.id; 
    var usrid = message.author.id; 
    var msgauthor = message.author;
    
    // ARGS chek 

    if (argumentos == "" || argumentos == " " || argumentos == null ) 
    {
        return util.unkred("debes ingresar una sugerencia", 5000)
    };
    
    
    // variables fecha //
    
    var hoy = new Date(); var dia = hoy.getDate(); var mes = hoy.getMonth() + 1; var year = hoy.getFullYear(); var hora = hoy.getHours(); var minutos = hoy.getMinutes(); var segundos = hoy.getSeconds();
    var fecha = (`${dia}/${mes}/${year} a las ${hora}:${minutos}:${segundos} hora española`)

    // MSGs //

    const suggest = new Discord.RichEmbed()
        .setColor('#4457E3')
        .setTitle(`Sugerencia para  ${config.svname}`)
        .addField('📌 | Usuario', `<@${usr}>`, true)
        .addField('📍 | Id del Usuario', `la id de el usuario es (${usrid})`, true)
        .addField('🕛 | Fecha', `la sugerencia se realizo el ${fecha}`, true)
        .addField('📧 | Sugerencia', `${argumentos}`)
        .setTimestamp()
        .setFooter('UNK-Bot © made by unknowns')
    ;

    const dm = new Discord.RichEmbed()
        .setColor('#FF7800')
        .setTitle(`Estado de Sugerencia`)
        .addField('🔒 | Server', `Su sugerencia se envio al server  ${config.svname}`, true)
        .addField('📁 | Canal', `<#${config.suggestchannelid}>`, true)
        .addField('📅 | Fecha', `la sugerencia se realizo el ${fecha}`, true)
        .addField('💬 | Sugerencia', `${argumentos}`)
        .setTimestamp()
        .setFooter('UNK-Bot © made by unknowns')
    ;

    ///////////
    // main //
    //////////
    
    canal.send(suggest)
    .then(function (message) {
        message.react("✖")
        message.react("✔")
    });

    // DM`s
    msgauthor.send(dm);
};
