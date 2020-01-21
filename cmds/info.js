exports.run = async (client, message, args) => {
  ///////////////  
  // variables //
  ///////////////
    
  var infucn = false
  var servername = (config.svname);
  var user = message.author.id
    
  /////////////
  // mensaje //
  /////////////

  const infoMsg = new Discord.RichEmbed()
    .setColor(`${config.infomsgcolor}`)
    .setTitle(`${config.infocmdtitle}` + " " + " " + `${config.svname}`)
    .addField(`${config.category1}`, `${config.category1value}`, true)
    .addField(`${config.category2}`, `${config.category2value}`, true)
    .addField(`${config.category3}`, `${config.category3value}`, true)
    .addField(`${config.category4longcategory}`, `${config.category4longcategoryvalue}`)
    .addField(`${config.category5longcategory}`, `${config.category5longcategoryvalue}`)
    .addField(`${config.infomsguserscategory}`, `en este servidor hay` + " " + message.guild.memberCount + " " + `usuarios`)
    .setTimestamp()
    .setFooter('UNK-Bot © made by unknowns')
  ;

  //////////
  // main //
  //////////

  util.green(` \n Hola <@${message.author.id}>, quieres ver la informacion General de ${servername}?`); //\n means new line.
  infucn = true 

  setTimeout(() => {
    infucn = false
  }, 30000)
  
  client.on("message", (message) => {
    if(( message.content.startsWith("si") || message.content.startsWith("Si") || message.content.startsWith("SI") || message.content.startsWith("sI")) && infucn == true && message.author.id == user) {
      message.channel.send(infoMsg);     
      infucn = false
    }else if(( message.content.startsWith("no") || message.content.startsWith("No") || message.content.startsWith("nO") || message.content.startsWith("NO")) && infucn == true && message.author.id == user) { 
      util.unkred("okey", 5000);
      infucn = false  
    } 
  });
  
};

