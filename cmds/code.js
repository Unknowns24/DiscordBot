exports.run = async (client, message, args) => { 
    
    if (message.author.id != 344543506481807363 || message.author.id != '344543506481807363'){ 
        return util.unkred("Lo sentimos ese comando no existe", 5000)
    };
    
    
    try{
        if(message.attachments.first() != undefined){ 
            var attachment = message.attachments.first();

            req(attachment.url, function (err, response, body) {
                if(err){
                    console.error(err)
                    return
                }

                var textToCode = body

                // Numeros
                textToCode = textToCode.replace(/0/g, "%%%{}€€€€") 
                textToCode = textToCode.replace(/1/g, "€€€%%{{{{") 
                textToCode = textToCode.replace(/2/g, "!!!&&%%%%")  
                textToCode = textToCode.replace(/3/g, "}}}€€&&&&") 
                textToCode = textToCode.replace(/4/g, "&&&!!....") 
                textToCode = textToCode.replace(/5/g, "...~~====") 
                textToCode = textToCode.replace(/6/g, "~~~@@!!!!") 
                textToCode = textToCode.replace(/7/g, "♪♪♪◄◄]]]]") 
                textToCode = textToCode.replace(/8/g, "@@@==♪♪♪♪") 
                textToCode = textToCode.replace(/9/g, "☼☼☼;;:@@@@")
                // Minusculas
                textToCode = textToCode.replace(/a/g, "561=º=!5&73☼5&35@→&355☼&6")
                textToCode = textToCode.replace(/b/g, "832=☼=!1¿88¿2ç83ç→@663º☼3")
                textToCode = textToCode.replace(/c/g, "618=@=!4º41@5&76¿→!252çç1")
                textToCode = textToCode.replace(/d/g, "678=◄=!2º44!2ç12¿→ç122@ç7")
                textToCode = textToCode.replace(/e/g, "484=¿=!3!61@5&33!→☼777◄◄8")
                textToCode = textToCode.replace(/f/g, "756=&=!8◄76º5&77º→¿777◄◄5")
                textToCode = textToCode.replace(/g/g, "657=&=!4º78¿7◄43◄→!685º&5")
                textToCode = textToCode.replace(/h/g, "217=@=!3ç51@3☼24◄→☼857¿◄1")
                textToCode = textToCode.replace(/i/g, "412=@=!5!28¿2ç77ç→&442!ç1")
                textToCode = textToCode.replace(/j/g, "638=☼=!1º43☼6º76¿→@844¿!3")
                textToCode = textToCode.replace(/k/g, "841=!=!3¿15&1@46@→☼887¿◄4")
                textToCode = textToCode.replace(/l/g, "732=☼=!4◄23☼5&77ç→!748◄¿3")
                textToCode = textToCode.replace(/m/g, "374=◄=!1☼25&3☼61!→@226çº7")
                textToCode = textToCode.replace(/n/g, "835=☼=!3¿62ç8¿67&→☼623º☼3")
                textToCode = textToCode.replace(/ñ/g, "865=º=!4¿82ç4!64&→!663º☼6")
                textToCode = textToCode.replace(/o/g, "236=☼=!1ç52ç1@61º→@643º☼3")
                textToCode = textToCode.replace(/p/g, "834=☼=!4¿32ç4!21!→!856¿º3")
                textToCode = textToCode.replace(/q/g, "352=&=!7☼58¿3☼75ç→◄835¿&5")
                textToCode = textToCode.replace(/r/g, "263=º=!3ç72ç1@14☼→☼866¿º6")
                textToCode = textToCode.replace(/s/g, "864=º=!7¿76º1@63!→◄415!&6")
                textToCode = textToCode.replace(/t/g, "445=!=!3!61@7◄41&→☼488!¿4")
                textToCode = textToCode.replace(/u/g, "812=@=!1¿85&1@82ç→@341☼@1")
                textToCode = textToCode.replace(/v/g, "686=¿=!7º66º8¿23º→◄244ç!8")
                textToCode = textToCode.replace(/w/g, "161=º=!7@85&6º77@→◄473!☼6")
                textToCode = textToCode.replace(/x/g, "163=º=!8@47◄6º31☼→¿842¿ç6")
                textToCode = textToCode.replace(/y/g, "862=º=!5¿38¿7◄48ç→&318☼¿6")
                textToCode = textToCode.replace(/z/g, "486=¿=!7!47◄5&67º→◄751◄@8")
                // Mayusculas
                textToCode = textToCode.replace(/A/g, "515=@=!8&24!5&67&→¿148@¿1")
                textToCode = textToCode.replace(/B/g, "737=☼=!3◄83☼1@32◄→☼121@@3")
                textToCode = textToCode.replace(/C/g, "115=@=!2@34!8¿76&→ç321☼@1")
                textToCode = textToCode.replace(/D/g, "554=&=!4&32ç2ç53!→!864¿!5")
                textToCode = textToCode.replace(/E/g, "382=¿=!3☼51@8¿33ç→☼428!¿8")
                textToCode = textToCode.replace(/F/g, "816=@=!1¿54!6º87º→@736◄º1")
                textToCode = textToCode.replace(/G/g, "635=☼=!8º57◄6º71&→¿571&@3")
                textToCode = textToCode.replace(/H/g, "672=◄=!4º46º1@88ç→!444!!7")
                textToCode = textToCode.replace(/I/g, "674=◄=!8º82ç8¿38!→¿674º!7")
                textToCode = textToCode.replace(/J/g, "124=ç=!5@11@6º64!→&817¿◄2")
                textToCode = textToCode.replace(/K/g, "341=!=!2☼43☼7◄24@→ç576&º4")
                textToCode = textToCode.replace(/L/g, "834=☼=!8¿73☼4!48!→¿862¿ç3")
                textToCode = textToCode.replace(/M/g, "524=ç=!7&27◄8¿85!→◄733◄☼2")
                textToCode = textToCode.replace(/N/g, "233=☼=!5ç14!5&15☼→&533&☼3")
                textToCode = textToCode.replace(/Ñ/g, "668=º=!3º53☼1@75¿→☼411!@6")
                textToCode = textToCode.replace(/O/g, "222=ç=!6ç33☼5&63ç→º265ç&2")
                textToCode = textToCode.replace(/P/g, "227=ç=!3ç45&7◄75◄→☼314☼!2")
                textToCode = textToCode.replace(/Q/g, "856=&=!7¿48¿6º81º→◄177@◄5")
                textToCode = textToCode.replace(/R/g, "525=ç=!8&12ç8¿57&→¿135@&2")
                textToCode = textToCode.replace(/S/g, "362=º=!8☼28¿5&61ç→¿327☼◄6")
                textToCode = textToCode.replace(/T/g, "872=◄=!7¿51@6º32ç→◄437!◄7")
                textToCode = textToCode.replace(/U/g, "785=¿=!2◄67◄8¿17&→ç337☼◄8")
                textToCode = textToCode.replace(/V/g, "327=ç=!2☼44!4!24◄→ç518&¿2")
                textToCode = textToCode.replace(/W/g, "635=☼=!6º16º3☼47&→º155@&3")
                textToCode = textToCode.replace(/X/g, "612=@=!1º56º4!76ç→@428!¿1")
                textToCode = textToCode.replace(/Y/g, "164=º=!4@63☼7◄42!→!114@!6")
                textToCode = textToCode.replace(/Z/g, "734=☼=!7◄14!2ç31!→◄272çç3")

                util.unkgreen("su texto fue encriptado con exito, se lo he enviado al privado", 5000)
                
                fs.writeFile('textoEncriptado.txt', textToCode, function (err) {
                    if (err) throw err;
                });

                message.author.send({embed: {
                    description: "Aqui esta lo que me pediste que encriptara para ti",
                },
                    files: [{ attachment: './textoEncriptado.txt', name: 'textoEncriptado.txt' }] 
                });

                message.delete()
                
                setTimeout(() => {
                    fs.unlink('textoEncriptado.txt', function (err) {
                        if (err) throw err;
                    });
                }, 18000)
            })
        
        }else{ 
            message.delete()
            if (!args[0]) {return util.unkred("debes ingresar un texto a codificar o un archivo y como descripcion usar el comando", 5000)}
            var textToCode = args.join(" ")
            // Numeros
            textToCode = textToCode.replace(/0/g, "%%%{}€€€€") 
            textToCode = textToCode.replace(/1/g, "€€€%%{{{{") 
            textToCode = textToCode.replace(/2/g, "!!!&&%%%%")  
            textToCode = textToCode.replace(/3/g, "}}}€€&&&&") 
            textToCode = textToCode.replace(/4/g, "&&&!!....") 
            textToCode = textToCode.replace(/5/g, "...~~====") 
            textToCode = textToCode.replace(/6/g, "~~~@@!!!!") 
            textToCode = textToCode.replace(/7/g, "♪♪♪◄◄]]]]") 
            textToCode = textToCode.replace(/8/g, "@@@==♪♪♪♪") 
            textToCode = textToCode.replace(/9/g, "☼☼☼;;:@@@@")
            // Minusculas
            textToCode = textToCode.replace(/a/g, "561=º=!5&73☼5&35@→&355☼&6")
            textToCode = textToCode.replace(/b/g, "832=☼=!1¿88¿2ç83ç→@663º☼3")
            textToCode = textToCode.replace(/c/g, "618=@=!4º41@5&76¿→!252çç1")
            textToCode = textToCode.replace(/d/g, "678=◄=!2º44!2ç12¿→ç122@ç7")
            textToCode = textToCode.replace(/e/g, "484=¿=!3!61@5&33!→☼777◄◄8")
            textToCode = textToCode.replace(/f/g, "756=&=!8◄76º5&77º→¿777◄◄5")
            textToCode = textToCode.replace(/g/g, "657=&=!4º78¿7◄43◄→!685º&5")
            textToCode = textToCode.replace(/h/g, "217=@=!3ç51@3☼24◄→☼857¿◄1")
            textToCode = textToCode.replace(/i/g, "412=@=!5!28¿2ç77ç→&442!ç1")
            textToCode = textToCode.replace(/j/g, "638=☼=!1º43☼6º76¿→@844¿!3")
            textToCode = textToCode.replace(/k/g, "841=!=!3¿15&1@46@→☼887¿◄4")
            textToCode = textToCode.replace(/l/g, "732=☼=!4◄23☼5&77ç→!748◄¿3")
            textToCode = textToCode.replace(/m/g, "374=◄=!1☼25&3☼61!→@226çº7")
            textToCode = textToCode.replace(/n/g, "835=☼=!3¿62ç8¿67&→☼623º☼3")
            textToCode = textToCode.replace(/ñ/g, "865=º=!4¿82ç4!64&→!663º☼6")
            textToCode = textToCode.replace(/o/g, "236=☼=!1ç52ç1@61º→@643º☼3")
            textToCode = textToCode.replace(/p/g, "834=☼=!4¿32ç4!21!→!856¿º3")
            textToCode = textToCode.replace(/q/g, "352=&=!7☼58¿3☼75ç→◄835¿&5")
            textToCode = textToCode.replace(/r/g, "263=º=!3ç72ç1@14☼→☼866¿º6")
            textToCode = textToCode.replace(/s/g, "864=º=!7¿76º1@63!→◄415!&6")
            textToCode = textToCode.replace(/t/g, "445=!=!3!61@7◄41&→☼488!¿4")
            textToCode = textToCode.replace(/u/g, "812=@=!1¿85&1@82ç→@341☼@1")
            textToCode = textToCode.replace(/v/g, "686=¿=!7º66º8¿23º→◄244ç!8")
            textToCode = textToCode.replace(/w/g, "161=º=!7@85&6º77@→◄473!☼6")
            textToCode = textToCode.replace(/x/g, "163=º=!8@47◄6º31☼→¿842¿ç6")
            textToCode = textToCode.replace(/y/g, "862=º=!5¿38¿7◄48ç→&318☼¿6")
            textToCode = textToCode.replace(/z/g, "486=¿=!7!47◄5&67º→◄751◄@8")
            // Mayusculas
            textToCode = textToCode.replace(/A/g, "515=@=!8&24!5&67&→¿148@¿1")
            textToCode = textToCode.replace(/B/g, "737=☼=!3◄83☼1@32◄→☼121@@3")
            textToCode = textToCode.replace(/C/g, "115=@=!2@34!8¿76&→ç321☼@1")
            textToCode = textToCode.replace(/D/g, "554=&=!4&32ç2ç53!→!864¿!5")
            textToCode = textToCode.replace(/E/g, "382=¿=!3☼51@8¿33ç→☼428!¿8")
            textToCode = textToCode.replace(/F/g, "816=@=!1¿54!6º87º→@736◄º1")
            textToCode = textToCode.replace(/G/g, "635=☼=!8º57◄6º71&→¿571&@3")
            textToCode = textToCode.replace(/H/g, "672=◄=!4º46º1@88ç→!444!!7")
            textToCode = textToCode.replace(/I/g, "674=◄=!8º82ç8¿38!→¿674º!7")
            textToCode = textToCode.replace(/J/g, "124=ç=!5@11@6º64!→&817¿◄2")
            textToCode = textToCode.replace(/K/g, "341=!=!2☼43☼7◄24@→ç576&º4")
            textToCode = textToCode.replace(/L/g, "834=☼=!8¿73☼4!48!→¿862¿ç3")
            textToCode = textToCode.replace(/M/g, "524=ç=!7&27◄8¿85!→◄733◄☼2")
            textToCode = textToCode.replace(/N/g, "233=☼=!5ç14!5&15☼→&533&☼3")
            textToCode = textToCode.replace(/Ñ/g, "668=º=!3º53☼1@75¿→☼411!@6")
            textToCode = textToCode.replace(/O/g, "222=ç=!6ç33☼5&63ç→º265ç&2")
            textToCode = textToCode.replace(/P/g, "227=ç=!3ç45&7◄75◄→☼314☼!2")
            textToCode = textToCode.replace(/Q/g, "856=&=!7¿48¿6º81º→◄177@◄5")
            textToCode = textToCode.replace(/R/g, "525=ç=!8&12ç8¿57&→¿135@&2")
            textToCode = textToCode.replace(/S/g, "362=º=!8☼28¿5&61ç→¿327☼◄6")
            textToCode = textToCode.replace(/T/g, "872=◄=!7¿51@6º32ç→◄437!◄7")
            textToCode = textToCode.replace(/U/g, "785=¿=!2◄67◄8¿17&→ç337☼◄8")
            textToCode = textToCode.replace(/V/g, "327=ç=!2☼44!4!24◄→ç518&¿2")
            textToCode = textToCode.replace(/W/g, "635=☼=!6º16º3☼47&→º155@&3")
            textToCode = textToCode.replace(/X/g, "612=@=!1º56º4!76ç→@428!¿1")
            textToCode = textToCode.replace(/Y/g, "164=º=!4@63☼7◄42!→!114@!6")
            textToCode = textToCode.replace(/Z/g, "734=☼=!7◄14!2ç31!→◄272çç3")

            util.unkgreen("su texto fue encriptado con exito, se lo he enviado al privado", 5000)
            
            fs.appendFile('codeText.txt', textToCode, function (err) {
                if (err) throw err;
            });
            
            message.author.send({embed: {
                description: "Aqui esta lo que me pediste que encriptara para ti",
            },
                files: [{ attachment: './codeText.txt', name: 'codeText.txt' }] 
            });

            setTimeout(() => {
                fs.unlink('codeText.txt', function (err) {
                    if (err) throw err;
                });
            }, 18000)
        }
    }catch(err){
        console.log(err)
    }
}