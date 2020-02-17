/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////
//       UNK BOT       //
/////////////////////////

//////////////
// Globales //
//////////////

// essentials 
global.Discord = require("discord.js");
global.client = new Discord.Client();

//requeriments 
global.req = require('request');
global.fs = require("fs");
global.colors = require("colors");

//files requires 
global.config = require("./config.json");
global.package = require("./package.json");
global.util = require("./modules/utils");
global.log = require("./modules/log");

global.set = new Set();
global.icon = `https://i.imgur.com/CL1uQx9.png`;
global.title = config.title;
global.prefix = config.prefix;
global.color = config.color;
global.premcolor = config.premcolor
global.author = package.author;

////////////////
// constantes //
////////////////

const moduleCloneSv = require('./modules/cloneServer.js');
const moduleEvents = require('./modules/events.js')

///////////////
// Variables //
///////////////

var tries = 0;
var maxTries = 3;
var noCatched = true;

//////////////
// database //
//////////////

const db = require('./database/dbConnection');
global.MySQL = db();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////
//  Main Function //
////////////////////

client.login(config.token); // Que el bot se inicie con el token indicado en el cfg 

client.on("ready", () => { 
  setInterval(function start() {
    client.user.setStatus('online');
    client.user.setPresence( {
      status: "online",  // estado del bot 
      game: {
        name: `/help para ver los comandos | UNK-Bot © made by unknowns`,   // Descripcion del Bot
        type: "WATCHING"
      }
    });
    log(`${config.title} : ${colors.green(`En Linea en ${client.guilds.size} servidores.`)}`);
    
    // Carga de modulos esenciales
      moduleEvents.run(client);
      moduleCloneSv.run(client);

    return start;
  }(), 3600000); //Que cada una hora diga si esta en linea
  
  setInterval(function live() {
    log(`${config.title} : ${colors.yellow(`sigo vivo`)}`)
    return live;              
  }(), 180000); // que cada 3 mins tire un heart beat

});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////
// Control de Spam para comandos //
///////////////////////////////////

client.on("message", message => {

  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;
  
  if (set.has(message.author.id)) {
    tries = tries + 1
    message.delete();
    
    try{ 
      if (tries >= maxTries && noCatched == true){
        noCatched = false
        util.unkred(`<@${message.author.id}>, Se detectaron muchos intentos de ingreso de comandos en menos de 5 segundos por lo que se te prohibio el uso de estos por 1 hora`, 5000) 
        return 
      }else if(tries >= maxTries && noCatched == false){
        util.unkred(`<@${message.author.id}>, Sigues sin poder usar comandos intenta mas tarde`, 5000)
        return 
      }
    }catch(err){
      console.log(err)
    }
  }
  
  if (message.author.id != 344543506481807363 || message.author.id != '344543506481807363') {
    set.add(message.author.id)
  }
  
  if (noCatched == true) {
    setTimeout(() => {
      if (noCatched == true) {
        set.delete(message.author.id)
      }
    }, 5000)  
  }else if(noCatched == false){
    setTimeout(() => {
      set.delete(message.author.id);
      tries = 0;
      noCatched = true;
    }, 3600000) 
  }

  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();   
  
  // antes de ejecutarse el comando verifica que el servidor tenga permisos o este aprobado
  if(!(`${command}` == `setup` || `${command}` == `activar` || `${command}` == `unk`)){
    MySQL.query(`SELECT aproved FROM servers WHERE guild = ${message.guild.id}`, (err, result) => {
      if(err){
        console.log(err)
        return;
      }
      
      if (result[0] != undefined && result[0].aproved == 1){
        try {
          let commandFile = require(`./cmds/${command}.js`);
          commandFile.run(client, message, args);
          console.log(`el usuario ${message.author.username} de id ${message.author.id} acaba de utilizar el comando /${command}`)   
        }catch (err) {
          message.delete();
          util.unkred("Lo sentimos ese comando no existe", 5000)
        }
      }else if (result[0] != undefined && result[0].aproved == 0){
        message.delete();
        util.unkred("Lo siento este servidor no tiene acceso a mis comandos, para darle acceso usa __/activar + la licencia del bot__ ", 5000);
        return;
      }else if (result[0] == undefined){
        message.delete();
        util.unkred("Lo siento este servidor no esta configurado en la base de datos, para configurarlo usa __/setup__", 10000);
        return;
      }
    });
  
  }else{
    try {
      let commandFile = require(`./cmds/${command}.js`);
      commandFile.run(client, message, args);
      console.log(`el usuario ${message.author.username} de id ${message.author.id} acaba de utilizar el comando /${command}`)   
    } catch (err) {
      message.delete();
      util.unkred("Lo sentimos ese comando no existe", 5000)
    }
  }

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////