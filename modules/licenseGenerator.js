
module.exports = (cantidad) => {
  
  var licenses = undefined;
  licenses = [];
    
  for(i=0; i < cantidad; i++){
    var randomNum = Math.floor(Math.random() * (9 - 1)) + 1; var randomNum2 = Math.floor(Math.random() * (9 - 1)) + 1; var randomNum3 = Math.floor(Math.random() * (9 - 1)) + 1; var randomNum4 = Math.floor(Math.random() * (9 - 1)) + 1; var randomNum5 = Math.floor(Math.random() * (9 - 1)) + 1; var randomNum6 = Math.floor(Math.random() * (9 - 1)) + 1;
    var signo1; var signo2;var signo3;var signo4;var signo5;
    var letra; var Num = Math.floor(Math.random() * (9999 - 1000)) + 1; var Num2 = Math.floor(Math.random() * (5000 - 1000)) + 1; var Num3 = Math.floor(Math.random() * (2500 - 1000)) + 1; var Num4 = Math.floor(Math.random() * (1900 - 1000)) + 1; var Num5 = Math.floor(Math.random() * (999 - 100)) + 1; var Num6 = Math.floor(Math.random() * (500 - 100)) + 1;

    switch (randomNum) {
      case 1:
        signo1 = "AZ"
      break;
      
      case 2:
        signo1 = "BD"
      break;

      case 3:
        signo1 = "YU"
      break;
      
      case 4:
        signo1 = "PW"
      break;

      case 5:
        signo1 = "RT"
      break;

      case 6:
        signo1 = "NM"
      break;

      case 7:
        signo1 = "MX"
      break;

      case 8:
        signo1 = "CJ"
      break;

      case 9:
        signo1 = "IN"
      break;

      default:
        signo1 = "QB"
      break;
    }

    switch (randomNum2) {
      case 1:
        signo2 = "4B"
      break;
      
      case 2:
        signo2 = "7K"
      break;

      case 3:
        signo2 = "8M"
      break;

      case 4:
        signo2 = "1J"
      break;

      case 5:
        signo2 = "9N"
      break;

      case 6:
        signo2 = "2H"
      break;

      case 7:
        signo2 = "3K"
      break;

      case 8:
        signo2 = "6M"
      break;

      case 9:
        signo2 = "4Q"
      break;

      default:
        signo2 = "5S"
      break;
    }

    switch (randomNum3) {
      case 1:
        signo3 = "WX"
      break;
      
      case 2:
        signo3 = "YR"
      break;

      case 3:
        signo3 = "RH"
      break;

      case 4:
        signo3 = "HU"
      break;

      case 5:
        signo3 = "JB"
      break;

      case 6:
        signo3 = "KN"
      break;

      case 7:
        signo3 = "LO"
      break;

      case 8:
        signo3 = "PS"
      break;

      case 9:
        signo3 = "QA"
      break;

      default:
        signo3 = "CV"
      break;
    }

    switch (randomNum4) {
      case 1:
        signo4 = "4B"
      break;
      
      case 2:
        signo4 = "7K"
      break;

      case 3:
        signo4 = "8M"
      break;

      case 4:
        signo4 = "1J"
      break;

      case 5:
        signo4 = "9N"
      break;

      case 6:
        signo4 = "2H"
      break;

      case 7:
        signo4 = "3K"
      break;

      case 8:
        signo4 = "6M"
      break;

      case 9:
        signo4 = "4Q"
      break;

      default:
        signo4 = "5S"
      break;
    }

    switch (randomNum5) {
      case 1:
        signo5 = "F1"
      break;
      
      case 2:
        signo5 = "F2"
      break;

      case 3:
        signo5 = "F3"
      break;

      case 4:
        signo5 = "F4"
      break;

      case 5:
        signo5 = "F5"
      break;

      case 6:
        signo5 = "F6"
      break;

      case 7:
        signo5 = "F7"
      break;

      case 8:
        signo5 = "F8"
      break;

      case 9:
        signo5 = "F9"
      break;

      default:
        signo5 = "FX"
      break;
    }  

    switch (randomNum6) {
      case 1:
        letra = "U"
      break;
      
      case 2:
        letra = "N"
      break;

      case 3:
        letra = "K"
      break;

      case 4:
        letra = "N"
      break;

      case 5:
        letra = "O"
      break;

      case 6:
        letra = "W"
      break;

      case 7:
        letra = "N"
      break;

      case 8:
        letra = "W"
      break;

      case 9:
        letra = "R"
      break;

      default:
        letra = "T"
      break;
    }
    
    var generatedLicense = `${letra}${Num}${signo1}${Num2}${signo2}${Num3}${Num4}${signo3}${Num5}${signo4}${Num6}${signo5}`;

    MySQL.query(`INSERT INTO licenses (license, useByGuild) VALUES ("${generatedLicense}", 0)`);
    
    licenses.push(generatedLicense);
  }

  return licenses;
};
