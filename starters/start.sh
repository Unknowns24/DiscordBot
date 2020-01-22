#!/bin/bash

# --================================--
# --==		    Created           ==--
# --==		       By             ==-- 
# --== 		     Unknowns	      ==--	
# --================================--

### Start variables

# Version

currentVersion="0.1"

# Colors functions
function defaultMsg() {
  echo -e "\\e[0m${*}\\e[0m"
}
function greenMsg() {
  echo -e "\\e[0;32m${*}\\e[0m"
}
function redMsg() {
  echo -e "\\e[0;31m${*}\\e[0m"
}
function yellowMsg() {
  echo -e "\\e[0;33m${*}\\e[0m"
}
function cyanMsg() {
  echo -e "\\e[0;36m${*}\\e[0m"
}

# Restart message
  restartMsg="el Bot se reinicia en $2 segundos!"

# Countdown function
function countdown () {
	cd=$1 # seconds
	until [ $cd -lt 1 ]; do
		printf "$cd "
		sleep 1
		((cd--))
	done
	echo -e "\r"
}	

# Paths
dataPath="/home/unkbot"
PathBotMain="/home/unkbot/fivem.js"
nodePath="/home/unkbot/node_modules"

# Screen name
screen="unkbot"

# Screen
	if [ "$screen" = "none" ]; then
		yellowMsg "Como quieres llamar a esta screen?"
		cyanMsg "Ejemplo: x bot"
    read input1
	  screenName=$input1
      sed -i "48s@none@$screenName@" $0
	fi 
# Check if a Bot with same screen name is already running
cd $dataPath
isOn(){
	screen -S "$screen" -X select ; return $?
}
### End variables

### Start main script

case "$1" in

################################################################################################################################################################################################################################

# Setup bot 

setup)
	if isOn; then
			redMsg "primero debes cerrar el server"
			read -r -p "Quires cerrar el server? [y/N]" useScreen
		case $useScreen in
			[yY])
			screen -S $screen -X quit
			sleep 1
			redMsg "Bot Detenido."
			if [ -d "$nodePath" ]; then
				sleep 1
				npm i
				sleep 1 
				npm run build
				sleep 5 
				greenMsg "listo"
			else 
				cyanMsg "Configurando npm"
				npm init -y
				sleep 5
				yellowMsg "npm Configurado"
				sleep 1 
				cyanMsg "instalando modulos de discord"
				npm install discord.js --save
				sleep 4 
				greenMsg "npm y modulos de discord descargados y configurados exitosamente"
				sleep 3
				npm i
				sleep 3
				npm run build 
				
			fi
			echo -e "\r\r"
			;;
			*)
			echo "Accion Cancelada"
			exit 1
			;;
		esac
	else
		if [ -d "$nodePath" ]; then
			sleep 1
			npm i
			sleep 1 
			npm run build
			sleep 5 
			greenMsg "listo"
		else 
			cyanMsg "Configurando npm"
			npm init -y
			sleep 5
			yellowMsg "npm Configurado"
			sleep 1 
			cyanMsg "instalando modulos de discord"
			npm install discord.js --save
			sleep 4 
			greenMsg "npm y modulos de discord descargados y configurados exitosamente"	
			sleep 3
			npm i	
			sleep 3
			npm run build 
		fi 
	fi
;;
	
setdatabase)
	if isOn; then
		redMsg "el Bot ya esta iniciado"
	else
		npm install --save sequelize
		npm install --save sqlite3
	fi
;;


################################################################################################################################################################################################################################

# Start  
start)
	if isOn; then
	redMsg "El Bot ya esta iniciado"
	else
		yellowMsg "Bot iniciandose..."
		screen -dmS $screen node fivem.js
		sleep 1
		greenMsg "Bot Iniciado."
	fi
;;

# Start in debug mode
debug)
	if isOn; then
		redMsg "el Bot ya esta iniciado"
	else
		yellowMsg "Bot iniciandoce en modo Debug..."
		screen -S $screen node $PathBotMain
	fi
;;


# Stop
stop)
	if isOn; then
		screen -S $screen -X quit
		sleep 1
		redMsg "Bot Detenido."
		sleep 1
	else
		redMsg "el Bot no se pudo detener ya que no esta encendido"
	fi
;;


# Restart
restart)
	if isOn; then
		if [ -z "$2" ]; then
			screen -S $screen -X quit
			sleep 1
			cyanMsg "Bot Detenido."
			sleep 1
			yellowMsg "Bot iniciandose..."
			screen -dmS $screen node fivem.js
			sleep 2
			greenMsg "Bot Iniciado."
		else
			screen -S $screen -X stuff "\r\rsay $restartMsg\rsay $restartMsg\rsay $restartMsg\r";
			yellowMsg "[CTRL+C] para cancelar"
			countdown $2
			screen -S $screen -X quit
			sleep 1
			cyanMsg "Bot Deteneido."
			sleep 1
			yellowMsg "Bot iniciandose..."
			screen -dmS $screen node fivem.js
			sleep 2
			greenMsg "Bot Iniciado"
		fi
	else
		redMsg "el Bot no se pudo iniciar."
	fi
;;

# Restart in Debug Mode 
redebug)
	if isOn; then
		if [ -z "$2" ]; then
			screen -S $screen -X quit
			sleep 1
			cyanMsg "Bot Detenido."
			sleep 1
			yellowMsg "Bot iniciandose..."
			screen -S $screen node fivem.js
		else
			screen -S $screen -X stuff "\r\rsay $restartMsg\rsay $restartMsg\rsay $restartMsg\r";
			yellowMsg "[CTRL+C] para cancelar"
			countdown $2
			screen -S $screen -X quit
			sleep 1
			cyanMsg "Bot Deteneido."
			sleep 1
			yellowMsg "Bot iniciandose..."
			screen -S $screen node fivem.js
		fi
	else
		redMsg "el Bot no se pudo iniciar."
	fi
;;

# Status
status)
	if isOn; then
		greenMsg "Bot Corriendo"
	else
		redMsg "Bot Apagado"
	fi	
;;


# Command
cmd)
	if isOn; then
		if [ -z "$2" ]; then
			yellowMsg "Usage: $0 cmd \"command to run\"."
			read -r -p "Do you want to reattach to the screen instead? [y/N]" useScreen
			case $useScreen in
				[yY])
				screen -dr $screen
				echo -e "\r\r"
				;;
				*)
				echo "Abort"
				exit 1
				;;
			esac
		else
			screen -S $screen -X stuff "\r\r$2\r";
		fi
	else
	 	sleep 1
		redMsg "Bot is not running."
	fi
;;



		
*)
  yellowMsg "Comandos: {start|stop|restart|setup|status|cmd|debug|installnode|restartd}"
  exit 1
;;
esac
exit 0

