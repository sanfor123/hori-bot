const fs = require('fs');

const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const {prefix, SeuNome, SeuNumero, SegundoNumero, NomeDoMenu, NumeroDoSeuBot, NomeDoBot, NomeDoAtualDono, cdd, ammOff, cr, crtt, crh } = infos

exports.wait = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nCaso não funcione, use o comando novamente.`
}

exports.tterro = () => {
	return `Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`
}

exports.waitmusic = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitplay = () => {
	return`⏳Comando play aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitplay1 = () => {
	return`⏳Comando play1 aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitplay2 = () => {
	return`⏳Comando play2 aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitplay3 = () => {
	return`⏳Comando play3 aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitfig = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos.`
}

exports.waitgif = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos\nA criação de stickergif leva de 10 segundos á 1 minuto dependendo do tamanho do gif\nLimite de 10 segundos por gif.`
}

exports.waitsfw = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar o hentai em até 2 minutos\nTente novamente caso não envie.`
}

exports.waitpor = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar a img\nTente novamente caso não envie.`
}

exports.waitimg= () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar criar e enviar a imagem\nO processo dura no mínimo 10 segundos\nTente novamente caso não envie.`
}

exports.success = () => {
	return`✅Sucesso✅`
}

exports.levelon = () => {
	return`✅função leveis foi ativada✅`
}

exports.leveloff = () => {
	return`❌função leveis foi desativada❌`
}

exports.levelnoton = () => {
	return`🚫A função leveis está desativada🚫`
}

exports.levelnol = () => {
	return`Você está level 0... \njá se registrou para começar ganhar XP?`
}

exports.ban = () => {
	return`🤝🏼Você está banido🤝🏼`
}

exports.stick = () => {
	return`❌Ocorreu um erro na criação de sticker❌`
}

exports.Lv = () => {
	return`❌Link inválido❌`
}

exports.group = () => {
	return`❌O comando só pode ser usado em grupos❌`
}

exports.ownerG = (SeuNome) => {
	return`O comando só pode ser usado pelo ${SeuNome}`
}

exports.lia = () => {
	return`Só a adm pode usar😳👌`
}

exports.ownerB = (SeuNome) => {
	return`O comando só pode ser usado pelo dono`
}

exports.isprem = (SeuNome) => {
	return`O comando só pode ser usado pelo dono`
}

exports.admin = () => {
	return`❌O comando só pode ser usado por administradores do grupo❌`
}

exports.modoanime = () => {
	return`❌Modo anime está desativado ❌\n\nEsse comando foi privado para evitar flode❌`
}

exports.Badmin = () => {
	return`❌O comando só pode ser usado quando o bot é um administrador do grupo❌'`
}

exports.AdmDoBot = () => {
	return`「 ❗ 」Cadê o meu adm?? Só pode usar esse comando quando eu me torno administrador`
}

exports.registro = (prefix, SeuNome, pushname, SeuNumero) => {
	return`
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
╚⊷╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾⊷⊷`
}
exports.rgerrado = (prefix, pushname) => {
	return`
[❗] Formato de registro errado tente assim:
*${prefix}rg ${pushname}/15*`
}

exports.rg = (prefix, pushname) => {
	return`
╔═❀
║*「️𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗡𝗘𝗚𝗔𝗗𝗢」*
╚╦❀
╔╣Para se registrar :
║║「💎」Basta digitar ${prefix}rg
║║ou ${prefix}menu e clicar em registrar
║╠════════❀
║║ 𝗛𝗢𝗥𝗜-𝗕𝗢𝗧 
║╚════════❀
║❀                                              ❀
╚╩══••°••✠•❀•✠ ••°••══╝
`
}

exports.nsfw = () => {
	return`🚫funções NSFW desativadas nesse grupo🚫`
}

exports.erro = () => {
	return`❌ocorreu um erro❌\n\nTente novamente.`
}


