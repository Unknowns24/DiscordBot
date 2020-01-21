exports.run = async (client, message, args) => {
    
    ////////////////////////////
    //        VARIABLES      //
    /////////////////////////// 
    
    ///////////////////////////

    // check permissions
    if (!message.member.roles.find("name", `${hrank}`)) 
    {
    message.channel.send('No tienes permiso para utilizar este comando');
    return; 
    }

    message.channel.send(`<@${message.author.id}> Este comando esta en desarrollo`)

    // Main Fuction 


}


// ¡¿ trash ?! i think 


/*
    || !message.member.roles.find("name", `${setems}`) || !message.member.roles.find("name", `${setgc}`)  || !message.member.roles.find("name", `${settaxi}`) || !message.member.roles.find("name", `${setmecanico}`) || !message.member.roles.find("name", `${setmafia}`) || !message.member.roles.find("name", `${setstaff}`) || !message.member.roles.find("name", `${setoposems}`) || !message.member.roles.find("name", `${setoposgc}`) || !message.member.roles.find("name", `${setoposmecanico}`) || !message.member.roles.find("name", `${setopostaxi}`) || !message.member.roles.find("name", `${setoposstaff}`)
*/