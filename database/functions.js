const query = require('./db');

module.exports = {
    addServerByLicence: async function(serverId, serverLicense){
        try {
            let result = await query.getQuery("SELECT aprove FROM licences WHERE licence = ?", serverLicense);
            if(result != undefined){
                try{
                    await query.executeQuery("INSERT INTO servers (serverId, ServerLicence) VALUES (?, ?)", [serverId, serverLicense]);
                    await query.executeQuery("UPDATE licences SET aprove = 0 WHERE licence = ?", serverLicense);
                }catch(err){
                    console.log(err)
                }
            }else {
                util.error(`La licencia ${serverLicense}, no es una licencia valida o ya esta usada por otro server`)
            }

        }catch(e){
            console.log(e)
        }
    }
}