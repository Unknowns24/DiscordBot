exports.run = async (client, message, args) => {
  // Variables
  var user = message.author.id;
  var infucnb = false;
  var botname = (config.title);

  const botinfomsg = new Discord.RichEmbed()
    .setColor('#FBFF00')
    .setTitle(` 🔍 | Informacion sobre ${config.title}`)
    .setDescription(`Todos los derechos de este bot estan reservados hacia unknowns#8424 unico creador y distribuidor`)
    //.addBlankField()
    .addField('📌 | Informacion', `este bot esta en la version ${config.botversion}`, true)
    .addField('🎮 | Funciones', `este bot tiene funciones para servidores de ${config.botgamesfuctions}`, true)
    .addField('🔨 | Sistema Operativo', `este bot opera en ${config.system}`, true)
    .addField('📎 | Actualizaciones', `la actualizacion mas reciente se realizo el ${config.ultfechademod}`)
    .addField('🔧 | Changelog', `${config.lastverchangelog}`)
    .setTimestamp()
    .setFooter('UNK-Bot © made by unknowns')
  ;
        
  // Pregunta 

  util.green(` \n Hola <@${message.author.id}>, quieres ver la informacion General del ${botname}?`); //\n means new line.
  infucnb = true 

  setTimeout(() => {
    infucnb = false
  }, 30000)

  client.on("message", (message) => {
    try{ 
      if (( message.content.startsWith("si") || message.content.startsWith("Si") || message.content.startsWith("SI") || message.content.startsWith("sI")) && infucnb == true && message.author.id == user){
        message.channel.send(botinfomsg);        
        infucnb = false
      }else if ((message.content.startsWith("no") || message.content.startsWith("NO") || message.content.startsWith("No") || message.content.startsWith("nO")) && infucn == true && message.author.id == user) { 
        util.red('Cancelando Accion..');
        infucnb = false  
      } 
    }catch(err){
      console.log(err)
    }
  });
}

