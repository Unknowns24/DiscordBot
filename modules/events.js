exports.run = async (client) => { 
    /////////////
    // eventos //
    /////////////

    client.on("guildCreate", guild => {
        log(`[(${config.title})] Se fue añadido a un nuevo servidor de nombre ${guild.name} (id: ${guild.id})`);
      
    });
      
    client.on("guildDelete", guild => {
        log(`(${config.title}): fue removido de un server con nombre ${guild.name} (id: ${guild.id})`);
    });

    ////////////////////////////////////////////
    // Mensaje de Bienvenida y entrega de rol //
    ////////////////////////////////////////////

    client.on("guildMemberAdd", (member) => {
        console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
        console.log(member)
        var canal = client.channels.get('639849165584597014');
        var nameserv = (config.svname);
        var crole = (config.civilrol);
        var usr = (`<@${member.user.id}>`);
        let rolecivil = member.guild.roles.find("name", `${crole}`);  
        const welcomemsg = new Discord.RichEmbed()
        .setColor('#00E4FF')
        .setTitle(` ${member.user.username} Bienid@!`)
        .setDescription(` :fire: <@${member.user.id}>, El staff de ${nameserv} te da la bienvenida a esta comunidad :fire:`)
        .addField('📌 | Informacion', 'esta es una comunidad gaming en sus inicios', true)
        .addField('🎮 | Juegos', 'tenemos servidores en: FiveM', true)
        .addField('🔎 | postulaciones', 'estamos buscando soportes', true)
        .addBlankField()
        .addField('📎 | No te lo olvides', 'Lee las normas para poder tener una mejor experiencia en nuestra comunidad')
        .setTimestamp()
        .setFooter('UNK-Bot © made by unknowns')
        ;
        
        canal.send(usr);
        canal.send(welcomemsg);
        member.addRole(rolecivil).catch(console.error); 
        member.send(`Gracias Por Unirte a ${nameserv}`);
    });

    client.on("error", (e) => console.error(e));
    client.on("warn", (e) => console.warn(e));

    client.on("message", async message => {
        if (message.author.bot) return;

        if (message.content.indexOf(config.prefix) !== 0) return;

        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        // FiveM Bot API -> cdn:1234/api (HTTP)
        setInterval(function start() {
            let totalSeconds = (client.uptime / 1000);
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
            fs.writeFile('./modules/api.json', `{
"ping": ${Math.round(client.ping)}, 
"users": ${client.users.size}, 
"servers": ${client.guilds.size}, 
"uptime": ["${hours} hours", 
"${minutes} minutes", "${seconds} seconds"]
}`, 
            (err) => {
            if (err) { console.error(err) }
            });
            return start;
        }(), 600000);
    });

}