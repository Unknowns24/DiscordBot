exports.run = async (client, message, args) => {
    // Variables // 
    var tabla = undefined;
    var usuarios = new Map(message.guild.members);

    try {
        let text = message.content.slice(7);
        
        message.delete()
        
        if(message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_GUILD')){
            if(text == " " || text == "" || text == null){
                return util.unkred("Debes ingresar un mensaje", 5000)
            }
            
            else {
                tabla = new Set();
                for(var [k,v] of usuarios){
                    if(v.user.bot == false){
                        if(!tabla.has(v.id)){
                            v.send(text)
                            tabla.add(v.id)
                        }
                    }
                }
            }
        }
        
        else{
            return util.unkred("No tienes permiso para realizar esta accion", 5000)
        }
    }catch(err){
        console.log(err)
    }
};