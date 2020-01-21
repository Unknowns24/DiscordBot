/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////
//       UNK BOT       //
/////////////////////////

//////////////
// Globales //
//////////////

global.Discord = require("discord.js");
global.client = new Discord.Client();
global.config = require("./config.json");
global.package = require("./package.json");
global.servers = require('./auth/servers.json')
global.req = require('request');
global.notes = require("./auth/notes.json")
global.log = require("./modules/log") 
global.util = require("./modules/utils")
global.Q3RCon = require('quake3-rcon');
global.rcondb = require("./auth/rcon.json");
global.crypto = require("crypto-js");
global.tempNatives = require("./auth/temp.json")
global.listNatives = require("./auth/names.json")
global.fs = require("fs");
global.dns = require('dns');
global.sleep = require("system-sleep");
global.createHash = require('hash-generator');
global.Fuse = require("fuse.js")
global.colors = require("colors")
global.state = config.title;
global.icon = `https://i.imgur.com/CL1uQx9.png`;
global.set = new Set();
global.title = config.title;
global.prefix = config.prefix;
global.color = config.color;
global.premcolor = config.premcolor
global.author = package.author;

const express = require('express');
const database = require("./database/db")
const moduleCloneSv = require('./modules/cloneServer.js');
const moduleEvents = require('./modules/events.js')
var tries = 0;
var maxTries = 4;
var noCatched = true;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////
//  Main Function //
////////////////////

client.on("ready", () => { 
  setInterval(function start() {
    database.createDB.createTables();
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
      moduleCloneSv.run(client);
      moduleEvents.run(client);

    return start;
  }(), 3600000); //Que cada una hora diga si esta en linea
  
  setInterval(function live() {
    log(`${config.title} : ${colors.yellow(`sigo vivo`)}`)
    return live;              
  }(), 180000); // que cada 3 mins tire un heard beat
});

client.login(config.token);

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
        return util.unkred(`<@${message.author.id}>, Se detectaron muchos intentos de ingreso de comandos en menos de 5 segundos por lo que se te prohibio el uso de estos por 1 hora`, 5000)
      }else if(tries >= maxTries && noCatched == false){
        return util.unkred(`<@${message.author.id}>, Sigues sin poder usar comandos intenta mas tarde`, 5000)
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
      set.delete(message.author.id)
    }, 5000)  
  }else if(noCatched == false){
    setTimeout(() => {
      set.delete(message.author.id)
      noCatched = true
    }, 3600000) 
  }

  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();   
  try {
    let commandFile = require(`./cmds/${command}.js`);
    commandFile.run(client, message, args);
    console.log(`el usuario ${message.author.username} de id ${message.author.id} acaba de utilizar el comando /${command}`)   
  } catch (err) {
    message.delete();
    util.unkred("Lo sentimos ese comando no existe", 5000)
  }

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////