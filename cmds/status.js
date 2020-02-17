exports.run = async (client, message, args) => {
  // Variables 

  var serverIp = "127.0.0.1";
  var serverName = (config.fivemsv);

  let serverInfo = `http://${serverIp}/info.json`
  let serverPlayers = `http://${serverIp}/players.json`
  
  req(serverInfo, function (err, response, main) {
    if (err) {
      util.unkred(`📍 En Estos Momentos el Servidor ${serverName} esta Offline\n\n -UNK-`)
    }else{
      try{
        req(serverPlayers, function (err, response, body) {
          var start = JSON.parse(body)
          var start2 = JSON.parse(main)

          if (start == null || start == []) {
            var e = 0
          } else {
            var e = start.length;
          }
          var embed = new Discord.RichEmbed()
            .setColor('#00FF08')
            .setTitle(`📎 Estado del servidor ${serverName} 📎`)
            .setDescription(`🎮 | Como jugar?\n Puedes buscar en la lista de servidores ${serverName} o Presionar F8 y escribir **connect ${serverIp}** o En la seccion Direct Connect escribir ${serverIp}`)
            .addField('📊 | Estado del Servidor', '✅ Server en linea', true)
            .addField('📌 | Informacion', `Jugadores en Linea **${e}/${start2.vars.sv_maxClients}**`, true)
            .setFooter('UNK-Bot © made by unknowns')
          ;

          message.channel.send(embed);
        })
      } catch (err) {
        util.unkred(`Se ha Producido un error al intentar conseguir la informacion de el servidor con ip **${serverIp}**`)
      }
    }
  })
};