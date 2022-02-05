/***********FUNCAO DE VOTACAO*********/
    const votacao = JSON.parse(fs.readFileSync('./arquivos_json/votacao.json'))
const votou = JSON.parse(fs.readFileSync('./arquivos_json/votou.json'))
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
   if (votou[i].usuario === sender && votou[i].grupo === from) {
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
      voto = {grupo: from, usuario: sender}
      votou.push(voto)
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
      if (ja_votou())return reply('Voce ja votou, espere um admin parar esta votaesta')
      reply('Voto adicionado')
      voto = {grupo: from, usuario: sender}
      votou.push(voto)
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
    /***********FIM FUNCAO DE VOTAÇÃO***************/
    
    case 'votacao':
   if (!isGroupAdmins)return reply('Apenas admins podem começar ou parar uma votação')
   if (args.length < 1)return reply(`Exemplo: ${prefix + comando} devo comprar Minecraft?`)
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
         if (votou[i].usuario === sender && votou[i].grupo === from) {
            position2 = i
         }
        })
           if (position2 !== false) {
            votou.splice(position2)
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