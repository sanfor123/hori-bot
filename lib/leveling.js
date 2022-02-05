const fs = require('fs')
const crypto = require('crypto')

const _level = JSON.parse(fs.readFileSync('./datauser/level.json'))

const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
        
const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./datauser/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./datauser/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./datauser/level.json', JSON.stringify(_level))
        }
        
        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }
        
        const getUserRank = (sender, _level) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: sender, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./datauser/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

    const xpGain = new Set()
    
    const isGained = (sender) => {
    return !!xpGain.has(sender)
}
     const addCooldown = (sender) => {
    xpGain.add(sender)
    setTimeout(() => {
        return xpGain.delete(sender)
    }, 10000) 
}
     
const leveltab = (pushname, userLevel, userXp, patt) => {
const requirXp = 20 * Math.pow(userLevel, 2) + 150 * userLevel + 1000
const usXp = getLevelingXp(sender)
const requiredXp = 5 * Math.pow(userLevel) + 150 * userLevel + 1000
const requiredXp1 = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 1000
var requiredXp2 = 5 * Math.pow((userLevel - 1), (5 / 2)) + 50 * (userLevel - 1) + 1000
if (userLevel == 1) {
    requiredXp2 = 0
} 
const porcent = Math.round(((userXp - requiredXp2) * 5) / (requiredXp1 - requiredXp2))
const bar = [`[▒▒▒▒▒▒▒▒▒]`, `[███▒▒▒▒▒▒]`, `[████▒▒▒▒▒]`, `[██████▒▒▒]`, `[████████▒]`, `[█████████]`]
var selectbar = ``
if (porcent < 20) {
    selectbar = bar[0]
} else if (porcent > 20 && porcent < 40) {
    selectbar = bar[1]
} else if (porcent > 40 && porcent < 60) {
    selectbar = bar[2]
} else if (porcent > 60 && porcent < 80) {
    selectbar = bar[3]
} else if (porcent > 80 && porcent < 100) {
    selectbar = bar[4]
} else {
    selectbar = bar[5]
}
const moon = [`🌑` ,`🌘` ,`🌗` ,`🌖` ,`🌕` ,`🌔` ,`🌓` ,`🌒`]
var selectMoon1 = ``
var selectMoon2 = ``
if (porcent < 20) {
    selectMoon1 = moon[0]
    selectMoon2 = moon[0]
} else if (porcent >= 20 && porcent < 40) {
    selectMoon1 = moon[1]
    selectMoon2 = moon[7]
} else if (porcent >= 40 && porcent < 60) {
    selectMoon1 = moon[2]
    selectMoon2 = moon[6]
} else if (porcent >= 60 && porcent < 80) {
    selectMoon1 = moon[3]
    selectMoon2 = moon[5]
} else if (porcent >= 80) {
    selectMoon1 = moon[4]
    selectMoon2 = moon[4]
}

var ase = new Date();
var waktoonyabro = ase.getHours();
switch(waktoonyabro){
case 0: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 1: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 2: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 3: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 4: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 5: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 6: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 7: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 8: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 9: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 10: waktoonyabro = `Bom Dia ${pushname}✨`; break;
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

    return `
 
┬────────────┈ ⳹
┌┤${selectMoon1}「 Ｌｅｖｅｌ」${selectMoon2}
││
││𝙽𝚘𝚖𝚎 : ${pushname}
││𝙽𝚞𝚖𝚎𝚛𝚘 : @${sender.split("@")[0]}
││𝙻𝚎𝚟𝚎𝚕: ${userLevel} 
││𝙿𝚊𝚝𝚎𝚗𝚝𝚎: ${patt} 
││𝚇𝚙: ${userXp}
││├────────
││└ ✦${usXp} | ${requirXp}✦
│├────────
││_SISTEMA LEVEL_
│└────────
│Copyright © Zadik/Hori-BOT
╰─━━━─── • ───━━━❋ཻུ۪۪⸙`
}
  
module.exports = {
     getLevelingXp, 
     getLevelingId, 
     addLevelingXp, 
     addLevelingLevel, 
     addLevelingId, 
     getLevelingLevel,
     getUserRank,
     isGained,
     addCooldown,
     leveltab
}

