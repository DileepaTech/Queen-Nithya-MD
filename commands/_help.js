const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
            react: "📒",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╮` + fancytext(Config.ownername.split(' ')[0], 58) +`\👩‍🎨Nithya Queen MD👩‍🎨\n╼╌➢╌➢╌➢╌➢╌➢╾\n🪢🅼⃝⃝⃝⃞🅴⃞🅽⃞🆄⃞🅻⃞🅸⃞🆂⃞🆃⃞🪢🎧\n╰╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╯\n`
                str +=
                    '```' + `┏┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥
┊╭═══════╍════════⃥
┋┊We Will A Team With Few Members If your whatsapp account banned we will not respond it

🔢Please Select Number Below,
1️⃣ 1.1 Owner Commands [Only For Owner]
2️⃣ 1.2 Download Commands [Downloader Commands]
3️⃣ 1.3 Misc Commands [Game Comands And More
4️⃣ 1.4 Logo Commands [Logo Maker Commands]
6️⃣ 1.5 Anime Commands[Anime Pics]
7️⃣ 1.6 All Commands
8️⃣ 1.7 Beta Commands (only for vip users)






│┖┈─┈──┈─◈☪◈─┈─┈─┈─◍
┗┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥\n
`+ '```'
               str += `\n┗──────────────────┛\n`
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                };
                await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/DileepaTech/voicec/raw/main/Alive (2).mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "1.1",
            desc: "Help list",
            category: "general",
            react: "📒",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╮` + fancytext(Config.ownername.split(' ')[0], 58) +`\👩‍🎨Nithya Queen MD👩‍🎨\n╼╌➢╌➢╌➢╌➢╌➢╾\n🪢🅼⃝⃝⃝⃞🅴⃞🅽⃞🆄⃞🅻⃞🅸⃞🆂⃞🆃⃞🪢🎧\n╰╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╯\n`
                str +=
                    '```' + `┏┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥
┊╭══════▻═╍════════⃥
┋┊=============Owner Command List==============
┃  │ ◉ plugins
┃  │ ◉ remove
┃  │ ◉ install
┃  │ ◉ restart
┃  │ ◉ update
┃  │ ◉ vv





│┖┈─┈──┈─◈☪◈─┈─┈─┈─◍
┗┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥\n
`+ '```'
               str += `\n┗──────────────────┛\n`
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                };
                await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/DileepaTech/voicec/raw/main/Alive (2).mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    

//----------------------------------------------------------------------
Secktor.cmd({
            pattern: "1.2",
            desc: "Help list",
            category: "general",
            react: "📒",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╮` + fancytext(Config.ownername.split(' ')[0], 58) +`\👩‍🎨Nithya Queen MD👩‍🎨\n╼╌➢╌➢╌➢╌➢╌➢╾\n🪢🅼⃝⃝⃝⃞🅴⃞🅽⃞🆄⃞🅻⃞🅸⃞🆂⃞🆃⃞🪢🎧\n╰╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╯\n`
                str +=
                    '```' + `┏┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥
┊╭═══════╍════════⃥
┋┊=============Download Command List==============
┃  │ ◉ insta
┃  │ ◉ yts
┃  │ ◉ facebook
┃  │ ◉ tiktok
┃  │ ◉ tiktokmp3
┃  │ ◉ tts
┃  │ ◉ apk
┃  │ ◉ gdrive
┃  │ ◉ video
┃  │ ◉ play
┃  │ ◉ mediafire
┃  │ ◉ song
┃  │ ◉ songdoc
┃  │ ◉ ytmp4
┃  │ ◉ ytmp3
┃  │ ◉ ytdoc



│┖┈─┈──┈─◈☪◈─┈─┈─┈─◍
┗┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥\n
`+ '```'
               str += `\n┗──────────────────┛\n`
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                };
                await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/DileepaTech/voicec/raw/main/Alive (2).mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    

//---------------------------------------------------------------------
Secktor.cmd({
            pattern: "1.3",
            desc: "Help list",
            category: "general",
            react: "📒",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╮` + fancytext(Config.ownername.split(' ')[0], 58) +`\👩‍🎨Nithya Queen MD👩‍🎨\n╼╌➢╌➢╌➢╌➢╌➢╾\n🪢🅼⃝⃝⃝⃞🅴⃞🅽⃞🆄⃞🅻⃞🅸⃞🆂⃞🆃⃞🪢🎧\n╰╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╯\n`
                str +=
                    '```' + `┏┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥
┊╭═══════╍════════⃥

┃  │ ◉ paste
┃  │ ◉ help
┃  │ ◉ list
┃  │ ◉ owner
┃  │ ◉ file
┃  │ ◉ pastebin
┃  │ ◉ delttt
┃  │ ◉ ttt
┃  │ ◉ ship
┃  │ ◉ question
┃  │ ◉ truth
┃  │ ◉ dare
┃  │ ◉ fact
┃  │ ◉ quotes
┃  │ ◉ define
┃  │ ◉ photo
┃  │ ◉ quotely
┃  │ ◉ fancy
┃  │ ◉ tiny
┃  │ ◉ toaudio
┃  │ ◉ daily
┃  │ ◉ resetwallet
┃  │ ◉ capacity
┃  │ ◉ deposit
┃  │ ◉ lb
┃  │ ◉ transfer
┃  │ ◉ wallet
┃  │ ◉ give
┃  │ ◉ bank
┃  │ ◉ rob
┃  │ ◉ withdraw
┃  │ ◉ gamble
┃  │ ◉ slot2
┃  │ ◉ slot
┃  │ ◉ fullpp

│┖┈─┈──┈─◈☪◈─┈─┈─┈─◍
┗┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥\n
`+ '```'
               str += `\n┗──────────────────┛\n`
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                };
                await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/DileepaTech/voicec/raw/main/Alive (2).mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    

//---------------------------------------------------------------------
Secktor.cmd({
            pattern: "1.4",
            desc: "Help list",
            category: "general",
            react: "📒",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╮` + fancytext(Config.ownername.split(' ')[0], 58) +`\👩‍🎨Nithya Queen MD👩‍🎨\n╼╌➢╌➢╌➢╌➢╌➢╾\n🪢🅼⃝⃝⃝⃞🅴⃞🅽⃞🆄⃞🅻⃞🅸⃞🆂⃞🆃⃞🪢🎧\n╰╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╯\n`
                str +=
                    '```' + `┏┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥
┊╭═══════╍════════⃥


│ ◉ deepsea
┃│ ◉ horror
┃│ ◉ whitebear
┃│ ◉ joker
┃│ ◉ metallic
┃│ ◉ steel
┃│ ◉ harrypotter
┃│ ◉ underwater
┃│ ◉ luxury
┃│ ◉ glue
┃│ ◉ logo12
┃│ ◉ logo13
┃│ ◉ logo14
┃│ ◉ logo15
┃│ ◉ logo16
┃│ ◉ logo17
┃│ ◉ logo18
┃│ ◉ logo19
┃│ ◉ logo20
│┖┈─┈──┈─◈☪◈─┈─┈─┈─◍
┗┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥\n
`+ '```'
               str += `\n┗──────────────────┛\n`
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                };
                await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/DileepaTech/voicec/raw/main/Alive (2).mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    

//---------------------------------------------------------------------
Secktor.cmd({
            pattern: "1.5",
            desc: "Help list",
            category: "general",
            react: "📒",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╮` + fancytext(Config.ownername.split(' ')[0], 58) +`\👩‍🎨Nithya Queen MD👩‍🎨\n╼╌➢╌➢╌➢╌➢╌➢╾\n🪢🅼⃝⃝⃝⃞🅴⃞🅽⃞🆄⃞🅻⃞🅸⃞🆂⃞🆃⃞🪢🎧\n╰╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╯\n`
                str +=
                    '```' + `┏┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥
┊╭═══════╍════════⃥

Not Configure Yet

│┖┈─┈──┈─◈☪◈─┈─┈─┈─◍
┗┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥\n
`+ '```'
               str += `\n┗──────────────────┛\n`
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                };
                await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/DileepaTech/voicec/raw/main/Alive (2).mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    
//--------------------------------------------------------------------
Secktor.cmd({
            pattern: "1.6",
            desc: "Help list",
            category: "general",
            react: "📒",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╮` + fancytext(Config.ownername.split(' ')[0], 58) +`\👩‍🎨Nithya Queen MD👩‍🎨\n╼╌➢╌➢╌➢╌➢╌➢╾\n🪢🅼⃝⃝⃝⃞🅴⃞🅽⃞🆄⃞🅻⃞🅸⃞🆂⃞🆃⃞🪢🎧\n╰╌╌╌╌╌╌╌➢╌╌╌╌╌╌╌╯\n`
                str +=
                    '```' + `┏┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥
┊╭═══════╍════════⃥
┋┊ʙᴏᴛ ɴᴇᴍᴇ 👩‍🎨:-NITHYA QUEEN
┊┋‍‍ᴜꜱᴇʀ 👩🏻‍💼:- ${citel.pushName}
┋┊‍‍ᴛʜᴇᴍᴇ 🎨:- ${tlang().title}
┊┋‍‍‍ᴘʀᴇꜰɪx 🧑‍🔧:- [ ${prefix} ]
┋┊ᴏᴡɴᴇʀ 🕵️‍♂️:- ${Config.ownername}
┊┋‍‍‍ᴅᴇᴡᴠᴇʟᴏᴘᴇʀ 👨🏻‍💻:-*DILEEPA*
┋┊‍‍‍ᴘʟᴜɢɪɴꜱ 🔌:- ${commands.length}
┋┊‍‍‍ᴘʟᴜɢɪɴꜱ 🔌:- ${total}
┊┋ᴜᴘᴛɪᴍᴇ ⏳:- ${runtime(process.uptime())}
┋┊‍‍ᴍᴇᴍᴏʀʏ 💾:- ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┊┋‍‍‍ᴛɪᴍᴇ ⏰:- ${time}
┋┊‍‍‍ᴅᴀᴛᴇ 🗓️:- ${date}
│┖┈─┈──┈─◈☪◈─┈─┈─┈─◍
┗┉┉┉┉┉┉┉┉━┉┉┉┉┉┉┉┉⃥\n
`+ '```'
                str += `◍👩‍🎨┈─┈『 ` + fancytext('Commands', 57) + `』┈─┈◈◍`
                for (const category in cmds) {
                    str += `
┎─┈─┈─┈─◈👩‍🎨◈─┈─┈─┈◎
┃ ${tiny(category)}
┖─┈──┈─◈👩‍🎨◈─┈─┈─┈─◎
┃➢ ┌┤\n`
                    for (const plugins of cmds[category]) {
                        str += `┃ ${plugins}\n`
                    }
                    str += `──────────────➢`
                }

                str += `\n┗──────────────────┛\n`
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    
//---------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "🧑‍💻",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "🗃️",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
