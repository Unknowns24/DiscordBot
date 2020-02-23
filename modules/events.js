exports.run = async (client) => { 
    /////////////
    // eventos //
    /////////////

    ////////////////////////////////////////////
    // Mensaje de Bienvenida y entrega de rol //
    ////////////////////////////////////////////

    client.on("guildMemberAdd", (member) => {
        console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);

        var canal = client.channels.get('639849165584597014');
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
    });
    
    client.on("guildCreate", guild => {
        const aviseMsg = new Discord.RichEmbed()
            .setColor('#FBFF00')
            .setTitle(`📛 AVISO 📛`)
            .setDescription(`⚠ Tienes 20 minutos para activar el UNK-Bot en ${guild.name} con el comando __/activar__, de lo contrario saldre de ese server ⚠`)
            .setTimestamp()
            .setFooter('UNK-Bot © made by unknowns')
        ;

        log(`[(${config.title})] Se fue añadido a un nuevo servidor de nombre ${guild.name} (id: ${guild.id})`);
        
        // Registrar el server en la base de datos 
        MySQL.query(`SELECT aproved FROM servers WHERE guild = ${guild.id}`, (err, result) => {
            if(result[0] == undefined){
                MySQL.query(`INSERT INTO servers (guild) VALUES (${guild.id})`);   
            }else if(err){
                return console.log(err);
            }
        });

        client.users.get(guild.ownerID).send(aviseMsg)

        setTimeout(() => {
            MySQL.query(`SELECT aproved FROM servers WHERE guild = ${guild.id}`, (err, result) => {
                if(result[0].aproved != 1){
                    MySQL.query(`DELETE FROM servers WHERE guild = ${guild.id}`);   
                    guild.leave();
                }else if(err){
                    return console.log(err);
                }
            });
        }, 1200000)
    });
      
    client.on("guildDelete", guild => {
        log(`(${config.title}): fue removido de un server con nombre ${guild.name} (id: ${guild.id})`);

        // Eliminar el server en la base de datos 
        try{
            MySQL.query(`SELECT aproved FROM servers WHERE guild = ${guild.id}`, (err, result) => {
                if(result[0] != undefined){
                    MySQL.query(`DELETE FROM servers WHERE guild = ${guild.id}`);   
                }else if(err){
                    return console.log(err);
                }
            });
        }catch(e){
            return console.log(e)
        }
    });

    client.on("error", (e) => console.error(e));
    client.on("warn", (e) => console.warn(e));
}