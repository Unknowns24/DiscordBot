exports.run = async (client, message, args) => {
    // Variables // 
    var tabla = undefined;
    var usuarios = new Map(message.guild.members);

    try {
        tabla = new Set();
        let text = message.content.slice(7);
        for(var [k,v] of usuarios){
            if(v.user.bot == false){
                if(!tabla.has(v.id)){
                    v.send(text)
                    tabla.add(v.id)
                }
            }
        }
    }catch(err){
        console.log(err)
    }
};