exports.run = async (client) => { 
    /////////////
    // eventos //
    /////////////

    ////////////////////////////////////////////
    // Mensaje de Bienvenida y entrega de rol //
    ////////////////////////////////////////////

    client.on("guildMemberAdd", (member) => {
        console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
       // console.log(member)
        var canal = client.channels.get('639849165584597014');
        var nameserv = (config.svname);
        var crole = (config.civilrol);
        let rolecivil = member.guild.roles.find("name", `${crole}`);  
        
        const welcomemsg = new Discord.RichEmbed()
        .setColor('#00E4FF')
        .setTitle(` ${member.user.username} Bienid@!`)
        .setDescription(` :fire: <@${member.user.id}>, El staff de ${member.guild.name} te da la bienvenida a esta comunidad :fire:`)
        .addField('📌 | Informacion', 'esta es una comunidad gaming en sus inicios', true)
        .addField('🎮 | Juegos', 'tenemos servidores en: FiveM', true)
        .addField('🔎 | postulaciones', 'estamos buscando soportes', true)
        .addBlankField()
        .addField('📎 | No te lo olvides', 'Lee las normas para poder tener una mejor experiencia en nuestra comunidad')
        .setTimestamp()
        .setFooter('UNK-Bot © made by unknowns')
        ;
        
        canal.send(welcomemsg);
        member.addRole(rolecivil).catch(console.error); 
        member.send(`Gracias Por Unirte a ${member.guild.name}`);
    });
    
    client.on("guildCreate", guild => {
        log(`[(${config.title})] Se fue añadido a un nuevo servidor de nombre ${guild.name} (id: ${guild.id})`);
        
        MySQL.query(`SELECT aproved FROM servers WHERE guild = ${guild.id}`, (err, result) => {
            if(result[0] == undefined){
                MySQL.query(`INSERT INTO servers (guild) VALUES (${guild.id})`, () => {
                    util.unkgreen("El server se configuro en la base de datos, exitosamente", 5000) 
                });   
            }else if(err){
                return console.log(err);
            }
        });
    });
      
    client.on("guildDelete", guild => {
        log(`(${config.title}): fue removido de un server con nombre ${guild.name} (id: ${guild.id})`);
    });


    client.on("error", (e) => console.error(e));
    client.on("warn", (e) => console.warn(e));

}