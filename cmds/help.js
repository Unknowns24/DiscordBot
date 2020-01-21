exports.run = async (client, message, args) => {
    var act = false;
    var user = message.author.id
    util.lightblue(`hola <@${message.author.id}>, quieres ver los comandos disponibles?`);
    act = true 
    
    setTimeout(() => {
        act = false
    }, 30000)

    client.on("message", (message) => {
        if ((message.content.startsWith("si") || message.content.startsWith("Si") || message.content.startsWith("sI") || message.content.startsWith("SI")) & act == true && message.author.id == user) {
            message.channel.send({embed: {
                color: 3447003,
                            
                fields: [
                {
                    name: "***Comandos Generales***",
                    value: "UNK-Bot © made by unknowns"
                },
                {
                  name: "**/info**",
                  value: "Funcion: Con este comando puedes ver la informacion del Server"
                },
                {
                    name: "**/status**",
                    value: "Funcion: Con este comando puedes ver el estado del server y los jugadores conectados"
                },
                {
                    name: "**/adivino**",
                    value: "Funcion: Responde a la pregunta que le hagas ej: /adivino alaf es el mejor?"
                },
                {
                    name: "**/botinfo**",
                    value: "Funcion: Muestra informacion sobre mi"
                },
                {
                  name: "**/soporte**",
                  value: "Funcion: Te ayudara con algunas cosas"
                },
                {
                    name: "**/donar**",
                    value: "Funcion: Te contacta con alguien del staff para poder donar"
                },
                {
                    name: "**/sugerencia**",
                    value: "Funcion: es para proponer una sugerencia al servidor"
                }
              ],
                timestamp: new Date(),
              }
            });
            act = false 
        }else if (message.content.startsWith("-unkmco") && act == true && message.author.id == user) {
            message.delete();
            util.unkblue(` \n Bienvenido, <@${message.author.id}>, Mostrando Comandos Ocultos... \n\n - **__/set <ip del server>:<puerto del server>__** \n - __Funcion:__ Con este comando puedes establecer una coneccion a un servidor de fivem \n\n - **__/bchat <Cantidad>**__ \n - __Funcion:__ Con este comando vas a eliminar la catidad de mensajes especificada \n\n -UNK- \n  `, 15000)
            act = false
        }else if (message.content.startsWith("-unkmco") && act == false && message.author.id == user) {
            message.delete();
        }else if ((message.content.startsWith("no") || message.content.startsWith("nO") || message.content.startsWith("No") || message.content.startsWith("NO")) && act == true && message.author.id == user) {
            message.channel.send(`***okey... <@${message.author.id}>***`);
            act = false
        }    
    }); 
};



