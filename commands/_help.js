/**
██╗███████╗██╗   ██╗██╗  ██╗██╗   ██╗    ███╗   ███╗██████╗ 
██║╚══███╔╝██║   ██║██║ ██╔╝██║   ██║    ████╗ ████║██╔══██╗
██║  ███╔╝ ██║   ██║█████╔╝ ██║   ██║    ██╔████╔██║██║  ██║
██║ ███╔╝  ██║   ██║██╔═██╗ ██║   ██║    ██║╚██╔╝██║██║  ██║
██║███████╗╚██████╔╝██║  ██╗╚██████╔╝    ██║ ╚═╝ ██║██████╔╝
╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝     ╚═╝     ╚═╝╚═════╝ 
                                                            
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
const _0x55b1d0=_0x450b;function _0x3e06(){const _0x4fd649=['「★」','countDocuments','find','❱━━━\x0a','*⚡️Type:*\x20_','1715ZuJVNI','*📡Usage:*\x0a\x20```','*』•═══◎\x0a','map','\x20\x0a⁞❏.\x20Theme:-\x20','freemem','───\x20✧《✩》✧\x20───\x0a','help','menu','3054ZEBfjO','pattern','1213004hygjFJ','27612YGjjry','totalmem','\x20»\x0a⁞❏.\x20Mem:-\x20','locale','\x20❑\x0a⁞❏.\x20Owner:-\x20','Help\x20list','┏━━━•❃\x20*','chat','category','toLowerCase','*⚡️Alias:*\x20','alias','Africa/LAGOS','25945uRqReF','use','3fBxCvw','ownername','help\x20cmd_\x20name\x20to\x20know\x20more\x20about\x20specific\x20command.\x0a*Eg:*\x20_','length','setDefault','\x20»\x0a⁞❏.\x20Time:-\x20','◎═══•『*','title','\x0a⁞❏.\x20Prefix:-\x20❑\x20','reply','HH:mm:ss','split','22832DXORHc','20710290RdfmMl','../lib','help\x20attp_\x0a*Made\x20by\x20🥷\x20Excel*\x20','push','9426726wQuibw','\x20\x0a⁞❏.\x20Uptime:-\x20','format','DD/MM/YYYY','\x20»\x0a⁞❏.Plugins:-\x20','cmd','dontAddCommandList','2429UNqsOd','```','desc','*😔No\x20Such\x20commands.*','*\x20❃•━━━┓\x0a'];_0x3e06=function(){return _0x4fd649;};return _0x3e06();}function _0x450b(_0x1f8472,_0x20524b){const _0x3e0608=_0x3e06();return _0x450b=function(_0x450bf5,_0x536d40){_0x450bf5=_0x450bf5-0x1b4;let _0x4e4a8c=_0x3e0608[_0x450bf5];return _0x4e4a8c;},_0x450b(_0x1f8472,_0x20524b);}(function(_0x4a3f3e,_0x55cef3){const _0x1039ec=_0x450b,_0x112913=_0x4a3f3e();while(!![]){try{const _0x48c8ae=-parseInt(_0x1039ec(0x1d1))/0x1+parseInt(_0x1039ec(0x1c3))/0x2+-parseInt(_0x1039ec(0x1d3))/0x3*(parseInt(_0x1039ec(0x1c4))/0x4)+parseInt(_0x1039ec(0x1b8))/0x5*(parseInt(_0x1039ec(0x1c1))/0x6)+-parseInt(_0x1039ec(0x1eb))/0x7*(parseInt(_0x1039ec(0x1df))/0x8)+-parseInt(_0x1039ec(0x1e4))/0x9+parseInt(_0x1039ec(0x1e0))/0xa;if(_0x48c8ae===_0x55cef3)break;else _0x112913['push'](_0x112913['shift']());}catch(_0x4111a0){_0x112913['push'](_0x112913['shift']());}}}(_0x3e06,0xbecce),Secktor[_0x55b1d0(0x1e9)]({'pattern':_0x55b1d0(0x1bf),'alias':[_0x55b1d0(0x1c0)],'desc':_0x55b1d0(0x1c9),'category':'general','react':'📡','filename':__filename},async(_0x36113c,_0x5abc1a,_0x35ce7f)=>{const _0x3d3347=_0x55b1d0,{commands:_0xdcc3}=require(_0x3d3347(0x1e1));if(_0x35ce7f[_0x3d3347(0x1de)]('\x20')[0x0]){let _0x253691=[];const _0xa0f0e8=_0xdcc3[_0x3d3347(0x1b5)](_0x510948=>_0x510948[_0x3d3347(0x1c2)]===_0x35ce7f[_0x3d3347(0x1de)]('\x20')[0x0][_0x3d3347(0x1cd)]());if(!_0xa0f0e8)return await _0x5abc1a[_0x3d3347(0x1dc)](_0x3d3347(0x1ee));else _0x253691['push']('*🍁Command:*\x20'+_0xa0f0e8[_0x3d3347(0x1c2)]);if(_0xa0f0e8[_0x3d3347(0x1cc)])_0x253691['push']('*✨Category:*\x20'+_0xa0f0e8[_0x3d3347(0x1cc)]);if(_0xa0f0e8[_0x3d3347(0x1cf)])_0x253691[_0x3d3347(0x1e3)](_0x3d3347(0x1ce)+_0xa0f0e8[_0x3d3347(0x1cf)]);if(_0xa0f0e8[_0x3d3347(0x1ed)])_0x253691['push']('*🗂Description:*\x20'+_0xa0f0e8['desc']);if(_0xa0f0e8['use'])_0x253691[_0x3d3347(0x1e3)](_0x3d3347(0x1b9)+prefix+_0xa0f0e8[_0x3d3347(0x1c2)]+'\x20'+_0xa0f0e8[_0x3d3347(0x1d2)]+_0x3d3347(0x1ec));return await _0x5abc1a[_0x3d3347(0x1dc)](_0x253691['join']('\x0a'));}else{const _0x27cdb8={};_0xdcc3[_0x3d3347(0x1bb)](async(_0x59f06f,_0x3afe7a)=>{const _0xab749e=_0x3d3347;if(_0x59f06f[_0xab749e(0x1ea)]===![]&&_0x59f06f[_0xab749e(0x1c2)]!==undefined){if(!_0x27cdb8[_0x59f06f['category']])_0x27cdb8[_0x59f06f[_0xab749e(0x1cc)]]=[];_0x27cdb8[_0x59f06f[_0xab749e(0x1cc)]][_0xab749e(0x1e3)](_0x59f06f[_0xab749e(0x1c2)]);}});const _0xed2187=moment(moment())[_0x3d3347(0x1e6)](_0x3d3347(0x1dd));moment['tz'][_0x3d3347(0x1d7)](_0x3d3347(0x1d0))[_0x3d3347(0x1c7)]('id');const _0x3036cb=moment['tz']('Africa/Lagos')[_0x3d3347(0x1e6)](_0x3d3347(0x1e7));let _0x1bd2d7=await sck1[_0x3d3347(0x1b4)](),_0x122a1e='━━❰\x20'+fancytext(Config[_0x3d3347(0x1d4)][_0x3d3347(0x1de)]('\x20')[0x0],0x26)+_0x3d3347(0x1b6);_0x122a1e+=_0x3d3347(0x1ec)+('\x20╔═══════\x20❃\x20══════════\x0a⁞❏.\x20User:-\x20'+_0x5abc1a['pushName']+_0x3d3347(0x1bc)+tlang()[_0x3d3347(0x1da)]+_0x3d3347(0x1db)+prefix+_0x3d3347(0x1c8)+Config[_0x3d3347(0x1d4)]+_0x3d3347(0x1e8)+_0xdcc3[_0x3d3347(0x1d6)]+'\x20»\x0a⁞❏.\x20Users:-\x20'+_0x1bd2d7+_0x3d3347(0x1e5)+runtime(process['uptime']())+_0x3d3347(0x1c6)+formatp(os[_0x3d3347(0x1c5)]()-os[_0x3d3347(0x1bd)]())+'/'+formatp(os[_0x3d3347(0x1c5)]())+_0x3d3347(0x1d8)+_0xed2187+'\x20»\x0a⁞❏.Date:-\x20'+_0x3036cb+'\x20»\x0a╚═══════\x20❃\x20══════════\x0a\x0a')+_0x3d3347(0x1ec);for(const _0x3bc66d in _0x27cdb8){_0x122a1e+=_0x3d3347(0x1d9)+tiny(_0x3bc66d)+_0x3d3347(0x1ba);if(_0x35ce7f['toLowerCase']()==_0x3bc66d[_0x3d3347(0x1cd)]()){_0x122a1e=_0x3d3347(0x1ca)+tiny(_0x3bc66d)+_0x3d3347(0x1ef);for(const _0x21069e of _0x27cdb8[_0x3bc66d]){_0x122a1e+=_0x3d3347(0x1f0)+fancytext(_0x21069e,0x1)+'\x0a';}_0x122a1e+=_0x3d3347(0x1be);break;}else{for(const _0xfef813 of _0x27cdb8[_0x3bc66d]){_0x122a1e+=_0x3d3347(0x1f0)+fancytext(_0xfef813,0x1)+'\x0a';}_0x122a1e+=_0x3d3347(0x1be);}}_0x122a1e+=_0x3d3347(0x1b7)+prefix+_0x3d3347(0x1d5)+prefix+_0x3d3347(0x1e2);let _0x4a623e={'image':{'url':await botpic()},'caption':_0x122a1e};return await _0x36113c['sendMessage'](_0x5abc1a[_0x3d3347(0x1cb)],_0x4a623e);}}));
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
┏━━━━━•❃〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙❃•━━━━━┓`
            str += `
┃ ⛥┏━━━━━•❃°•°•━━━━━•❃°•°•      
•͙͙✧⃝•͙ User: ${citel.pushName}
•͙͙✧⃝•͙ Theme: ${tlang().title}
•͙͙✧⃝•͙│ Prefix: ${prefix}
•͙͙✧⃝•͙ Owner: ${Config.ownername}
•͙͙✧⃝•͙ Commands: ${commands.length}
•͙͙✧⃝•͙ Uptime: ${runtime(process.uptime())}
•͙͙✧⃝•͙ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
•͙͙✧⃝•͙  
•͙͙✧⃝┗━━━━━•❃°•°•━━━━━•❃°•°•
┗━━━━━•❃°•°•━━━━━•❃°•°•\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       `✰ ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
      if (commands[i].desc === undefined) commands[i].desc = "";
      str += `✰ ${fancytext(commands[i].desc, 1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "👾",
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
    react: "🥷",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*😔No Such commands.*");
        else arr.push(`*📡Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
