exports.run = async (client, message, args) => {    
    let texto = args.join(" ");
    var rpts = ["Sí", "No", "¿Por qué queres saber eso?", "Por favor No Podes Preguntar Eso, es muy obvio que no", "Tal vez", "No sé", "Definitivamente", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no", "Por favor No Podes Preguntar Eso, es muy obvio que si" ];
    
    if (!texto) {
        return message.reply(`Por Favor Pon ` + config.prefix + `adivino <y la pregunta> para que te pueda responder`);
    }

    message.channel.send(message.member.user+' a su pregunta `'+texto+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
}