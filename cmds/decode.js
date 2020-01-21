exports.run = async (client, message, args) => { 

    if (message.author.id != 344543506481807363 || message.author.id != '344543506481807363'){ 
        return util.unkred("Lo sentimos ese comando no existe", 5000)
    };
    
    try{
        if (message.attachments.first() != undefined) {
            let attachment = message.attachments.first();

            req(attachment.url, function (err, response, body) {
                if(err){
                    console.error(err)
                    return
                }
                var textToDecode = body

                // Minusculas
                textToDecode = textToDecode.replace(/561=º=!5&73☼5&35@→&355☼&6/g, "a")
                textToDecode = textToDecode.replace(/832=☼=!1¿88¿2ç83ç→@663º☼3/g, "b")
                textToDecode = textToDecode.replace(/618=@=!4º41@5&76¿→!252çç1/g, "c")
                textToDecode = textToDecode.replace(/678=◄=!2º44!2ç12¿→ç122@ç7/g, "d")
                textToDecode = textToDecode.replace(/484=¿=!3!61@5&33!→☼777◄◄8/g, "e")
                textToDecode = textToDecode.replace(/756=&=!8◄76º5&77º→¿777◄◄5/g, "f")
                textToDecode = textToDecode.replace(/657=&=!4º78¿7◄43◄→!685º&5/g, "g")
                textToDecode = textToDecode.replace(/217=@=!3ç51@3☼24◄→☼857¿◄1/g, "h")
                textToDecode = textToDecode.replace(/412=@=!5!28¿2ç77ç→&442!ç1/g, "i")
                textToDecode = textToDecode.replace(/638=☼=!1º43☼6º76¿→@844¿!3/g, "j")
                textToDecode = textToDecode.replace(/841=!=!3¿15&1@46@→☼887¿◄4/g, "k")
                textToDecode = textToDecode.replace(/732=☼=!4◄23☼5&77ç→!748◄¿3/g, "l")
                textToDecode = textToDecode.replace(/374=◄=!1☼25&3☼61!→@226çº7/g, "m")
                textToDecode = textToDecode.replace(/835=☼=!3¿62ç8¿67&→☼623º☼3/g, "n")
                textToDecode = textToDecode.replace(/865=º=!4¿82ç4!64&→!663º☼6/g, "ñ")
                textToDecode = textToDecode.replace(/236=☼=!1ç52ç1@61º→@643º☼3/g, "o")
                textToDecode = textToDecode.replace(/834=☼=!4¿32ç4!21!→!856¿º3/g, "p")
                textToDecode = textToDecode.replace(/352=&=!7☼58¿3☼75ç→◄835¿&5/g, "q")
                textToDecode = textToDecode.replace(/263=º=!3ç72ç1@14☼→☼866¿º6/g, "r")
                textToDecode = textToDecode.replace(/864=º=!7¿76º1@63!→◄415!&6/g, "s")
                textToDecode = textToDecode.replace(/445=!=!3!61@7◄41&→☼488!¿4/g, "t")
                textToDecode = textToDecode.replace(/812=@=!1¿85&1@82ç→@341☼@1/g, "u")
                textToDecode = textToDecode.replace(/686=¿=!7º66º8¿23º→◄244ç!8/g, "v")
                textToDecode = textToDecode.replace(/161=º=!7@85&6º77@→◄473!☼6/g, "w")
                textToDecode = textToDecode.replace(/163=º=!8@47◄6º31☼→¿842¿ç6/g, "x")
                textToDecode = textToDecode.replace(/862=º=!5¿38¿7◄48ç→&318☼¿6/g, "y")
                textToDecode = textToDecode.replace(/486=¿=!7!47◄5&67º→◄751◄@8/g, "z")
                // Mayusculas
                textToDecode = textToDecode.replace(/515=@=!8&24!5&67&→¿148@¿1/g, "A")
                textToDecode = textToDecode.replace(/737=☼=!3◄83☼1@32◄→☼121@@3/g, "B")
                textToDecode = textToDecode.replace(/115=@=!2@34!8¿76&→ç321☼@1/g, "C")
                textToDecode = textToDecode.replace(/554=&=!4&32ç2ç53!→!864¿!5/g, "D")
                textToDecode = textToDecode.replace(/382=¿=!3☼51@8¿33ç→☼428!¿8/g, "E")
                textToDecode = textToDecode.replace(/816=@=!1¿54!6º87º→@736◄º1/g, "F")
                textToDecode = textToDecode.replace(/635=☼=!8º57◄6º71&→¿571&@3/g, "G")
                textToDecode = textToDecode.replace(/672=◄=!4º46º1@88ç→!444!!7/g, "H")
                textToDecode = textToDecode.replace(/674=◄=!8º82ç8¿38!→¿674º!7/g, "I")
                textToDecode = textToDecode.replace(/124=ç=!5@11@6º64!→&817¿◄2/g, "J")
                textToDecode = textToDecode.replace(/341=!=!2☼43☼7◄24@→ç576&º4/g, "K")
                textToDecode = textToDecode.replace(/834=☼=!8¿73☼4!48!→¿862¿ç3/g, "L")
                textToDecode = textToDecode.replace(/524=ç=!7&27◄8¿85!→◄733◄☼2/g, "M")
                textToDecode = textToDecode.replace(/233=☼=!5ç14!5&15☼→&533&☼3/g, "N")
                textToDecode = textToDecode.replace(/668=º=!3º53☼1@75¿→☼411!@6/g, "Ñ")
                textToDecode = textToDecode.replace(/222=ç=!6ç33☼5&63ç→º265ç&2/g, "O")
                textToDecode = textToDecode.replace(/227=ç=!3ç45&7◄75◄→☼314☼!2/g, "P")
                textToDecode = textToDecode.replace(/856=&=!7¿48¿6º81º→◄177@◄5/g, "Q")
                textToDecode = textToDecode.replace(/525=ç=!8&12ç8¿57&→¿135@&2/g, "R")
                textToDecode = textToDecode.replace(/362=º=!8☼28¿5&61ç→¿327☼◄6/g, "S")
                textToDecode = textToDecode.replace(/872=◄=!7¿51@6º32ç→◄437!◄7/g, "T")
                textToDecode = textToDecode.replace(/785=¿=!2◄67◄8¿17&→ç337☼◄8/g, "U")
                textToDecode = textToDecode.replace(/327=ç=!2☼44!4!24◄→ç518&¿2/g, "V")
                textToDecode = textToDecode.replace(/635=☼=!6º16º3☼47&→º155@&3/g, "W")
                textToDecode = textToDecode.replace(/612=@=!1º56º4!76ç→@428!¿1/g, "X")
                textToDecode = textToDecode.replace(/164=º=!4@63☼7◄42!→!114@!6/g, "Y")
                textToDecode = textToDecode.replace(/734=☼=!7◄14!2ç31!→◄272çç3/g, "Z")
                //numeros 
                textToDecode = textToDecode.replace(/%%%{}€€€€/g, "0") 
                textToDecode = textToDecode.replace(/€€€%%{{{{/g, "1") 
                textToDecode = textToDecode.replace(/!!!&&%%%%/g, "2")  
                textToDecode = textToDecode.replace(/}}}€€&&&&/g, "3") 
                textToDecode = textToDecode.replace(/&&&!!..../g, "4")
                textToDecode = textToDecode.replace(/...~~====/g, "5") 
                textToDecode = textToDecode.replace(/~~~@@!!!!/g, "6") 
                textToDecode = textToDecode.replace(/♪♪♪◄◄]]]]/g, "7") 
                textToDecode = textToDecode.replace(/@@@==♪♪♪♪/g, "8") 
                textToDecode = textToDecode.replace(/☼☼☼;;@@@@/g, "9") 

                util.unkgreen("su texto fue desencriptado con exito", 5000)

                fs.writeFile('decodeText.txt', textToDecode, function (err) {
                    if (err) throw err;
                });
                                
                message.author.send({embed: {
                    description: "Aqui esta lo que me pediste que desencriptara",
                },
                    files: [{ attachment: './decodeText.txt', name: 'decodeText.txt' }] 
                });
                
                message.delete()

                setTimeout(() => {
                    fs.unlink('decodeText.txt', function (err) {
                        if (err) throw err;
                    });
                }, 18000)
            })
            
        }else{
            message.delete()
            if (!args[0]) {return util.unkred("debes ingresar un texto a decodificar o subir un archivo y usar el comando", 5000)}
            
            var textToDecode = args.join(" ")

            // Minusculas
            textToDecode = textToDecode.replace(/561=º=!5&73☼5&35@→&355☼&6/g, "a")
            textToDecode = textToDecode.replace(/832=☼=!1¿88¿2ç83ç→@663º☼3/g, "b")
            textToDecode = textToDecode.replace(/618=@=!4º41@5&76¿→!252çç1/g, "c")
            textToDecode = textToDecode.replace(/678=◄=!2º44!2ç12¿→ç122@ç7/g, "d")
            textToDecode = textToDecode.replace(/484=¿=!3!61@5&33!→☼777◄◄8/g, "e")
            textToDecode = textToDecode.replace(/756=&=!8◄76º5&77º→¿777◄◄5/g, "f")
            textToDecode = textToDecode.replace(/657=&=!4º78¿7◄43◄→!685º&5/g, "g")
            textToDecode = textToDecode.replace(/217=@=!3ç51@3☼24◄→☼857¿◄1/g, "h")
            textToDecode = textToDecode.replace(/412=@=!5!28¿2ç77ç→&442!ç1/g, "i")
            textToDecode = textToDecode.replace(/638=☼=!1º43☼6º76¿→@844¿!3/g, "j")
            textToDecode = textToDecode.replace(/841=!=!3¿15&1@46@→☼887¿◄4/g, "k")
            textToDecode = textToDecode.replace(/732=☼=!4◄23☼5&77ç→!748◄¿3/g, "l")
            textToDecode = textToDecode.replace(/374=◄=!1☼25&3☼61!→@226çº7/g, "m")
            textToDecode = textToDecode.replace(/835=☼=!3¿62ç8¿67&→☼623º☼3/g, "n")
            textToDecode = textToDecode.replace(/865=º=!4¿82ç4!64&→!663º☼6/g, "ñ")
            textToDecode = textToDecode.replace(/236=☼=!1ç52ç1@61º→@643º☼3/g, "o")
            textToDecode = textToDecode.replace(/834=☼=!4¿32ç4!21!→!856¿º3/g, "p")
            textToDecode = textToDecode.replace(/352=&=!7☼58¿3☼75ç→◄835¿&5/g, "q")
            textToDecode = textToDecode.replace(/263=º=!3ç72ç1@14☼→☼866¿º6/g, "r")
            textToDecode = textToDecode.replace(/864=º=!7¿76º1@63!→◄415!&6/g, "s")
            textToDecode = textToDecode.replace(/445=!=!3!61@7◄41&→☼488!¿4/g, "t")
            textToDecode = textToDecode.replace(/812=@=!1¿85&1@82ç→@341☼@1/g, "u")
            textToDecode = textToDecode.replace(/686=¿=!7º66º8¿23º→◄244ç!8/g, "v")
            textToDecode = textToDecode.replace(/161=º=!7@85&6º77@→◄473!☼6/g, "w")
            textToDecode = textToDecode.replace(/163=º=!8@47◄6º31☼→¿842¿ç6/g, "x")
            textToDecode = textToDecode.replace(/862=º=!5¿38¿7◄48ç→&318☼¿6/g, "y")
            textToDecode = textToDecode.replace(/486=¿=!7!47◄5&67º→◄751◄@8/g, "z")
            // Mayusculas
            textToDecode = textToDecode.replace(/515=@=!8&24!5&67&→¿148@¿1/g, "A")
            textToDecode = textToDecode.replace(/737=☼=!3◄83☼1@32◄→☼121@@3/g, "B")
            textToDecode = textToDecode.replace(/115=@=!2@34!8¿76&→ç321☼@1/g, "C")
            textToDecode = textToDecode.replace(/554=&=!4&32ç2ç53!→!864¿!5/g, "D")
            textToDecode = textToDecode.replace(/382=¿=!3☼51@8¿33ç→☼428!¿8/g, "E")
            textToDecode = textToDecode.replace(/816=@=!1¿54!6º87º→@736◄º1/g, "F")
            textToDecode = textToDecode.replace(/635=☼=!8º57◄6º71&→¿571&@3/g, "G")
            textToDecode = textToDecode.replace(/672=◄=!4º46º1@88ç→!444!!7/g, "H")
            textToDecode = textToDecode.replace(/674=◄=!8º82ç8¿38!→¿674º!7/g, "I")
            textToDecode = textToDecode.replace(/124=ç=!5@11@6º64!→&817¿◄2/g, "J")
            textToDecode = textToDecode.replace(/341=!=!2☼43☼7◄24@→ç576&º4/g, "K")
            textToDecode = textToDecode.replace(/834=☼=!8¿73☼4!48!→¿862¿ç3/g, "L")
            textToDecode = textToDecode.replace(/524=ç=!7&27◄8¿85!→◄733◄☼2/g, "M")
            textToDecode = textToDecode.replace(/233=☼=!5ç14!5&15☼→&533&☼3/g, "N")
            textToDecode = textToDecode.replace(/668=º=!3º53☼1@75¿→☼411!@6/g, "Ñ")
            textToDecode = textToDecode.replace(/222=ç=!6ç33☼5&63ç→º265ç&2/g, "O")
            textToDecode = textToDecode.replace(/227=ç=!3ç45&7◄75◄→☼314☼!2/g, "P")
            textToDecode = textToDecode.replace(/856=&=!7¿48¿6º81º→◄177@◄5/g, "Q")
            textToDecode = textToDecode.replace(/525=ç=!8&12ç8¿57&→¿135@&2/g, "R")
            textToDecode = textToDecode.replace(/362=º=!8☼28¿5&61ç→¿327☼◄6/g, "S")
            textToDecode = textToDecode.replace(/872=◄=!7¿51@6º32ç→◄437!◄7/g, "T")
            textToDecode = textToDecode.replace(/785=¿=!2◄67◄8¿17&→ç337☼◄8/g, "U")
            textToDecode = textToDecode.replace(/327=ç=!2☼44!4!24◄→ç518&¿2/g, "V")
            textToDecode = textToDecode.replace(/635=☼=!6º16º3☼47&→º155@&3/g, "W")
            textToDecode = textToDecode.replace(/612=@=!1º56º4!76ç→@428!¿1/g, "X")
            textToDecode = textToDecode.replace(/164=º=!4@63☼7◄42!→!114@!6/g, "Y")
            textToDecode = textToDecode.replace(/734=☼=!7◄14!2ç31!→◄272çç3/g, "Z")
            //numeros 
            textToDecode = textToDecode.replace(/%%%{}€€€€/g, "0") 
            textToDecode = textToDecode.replace(/€€€%%{{{{/g, "1") 
            textToDecode = textToDecode.replace(/!!!&&%%%%/g, "2")  
            textToDecode = textToDecode.replace(/}}}€€&&&&/g, "3") 
            textToDecode = textToDecode.replace(/&&&!!..../g, "4")
            textToDecode = textToDecode.replace(/...~~====/g, "5") 
            textToDecode = textToDecode.replace(/~~~@@!!!!/g, "6") 
            textToDecode = textToDecode.replace(/♪♪♪◄◄]]]]/g, "7") 
            textToDecode = textToDecode.replace(/@@@==♪♪♪♪/g, "8") 
            textToDecode = textToDecode.replace(/☼☼☼;;@@@@/g, "9") 

            util.unkgreen("su texto fue desencriptado con exito", 5000)

            fs.writeFile('decodeText.txt', textToDecode, function (err) {
                if (err) throw err;
            });
            
            message.author.send({embed: {
                description: "Aqui esta lo que me pediste que desencriptara",
            },
                files: [{ attachment: './decodeText.txt', name: 'decodeText.txt' }] 
            });
            
            setTimeout(() => {
                fs.unlink('decodeText.txt', function (err) {
                    if (err) throw err;
                });
            }, 18000)
        }
        
       // message.author.send(textToDecode)
    }catch(err){
        console.log(err)
    }
}