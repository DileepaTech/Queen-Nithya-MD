/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : @samapndey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/
const axios = require('axios');
const { tlang,cmd } = require('../lib')
const Config = require('../config')
const { redeploy , getvar , delvar , getallvar , change_env , get_deployments} = require('../lib/koyeb')

//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "updatenow",
    desc: "update bot with main repo.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
    async function updatedb() {	
      const simpleGit = require('simple-git')	
          const git = simpleGit();	
        const Heroku = require('heroku-client');	
        const heroku = new Heroku({ token: process.env.HEROKU_API_KEY })	
          await git.fetch();	
              var commits = await git.log(['main' + '..origin/' +'main']);	
              if (commits.total === 0) {	
                return 'ʏᴏᴜ..ʜᴀᴠᴇ...ᴀʟʀᴇᴅʏ..ᴜᴘᴅᴀᴛᴇᴅ...'	
              } else {	
                    var app = await heroku.get('/apps/' + process.env.HEROKU_APP_NAME)	
                   //   await Void.sendMessage(citel.chat,{text:'*ᴜᴘᴅᴀᴛɪɴɢ...*'})	
                  git.fetch('upstream', 'main');	
                  git.reset('hard', ['FETCH_HEAD']);	
      
                  var git_url = app.git_url.replace(	
                    "https://", "https://api:" + process.env.HEROKU_API_KEY + "@"	
                  )   	
                  try {	
                    await git.addRemote('heroku', git_url);	
                  } catch { console.log('heroku remote adding error'); }	
                  await git.push('heroku', 'main');	
      
                  return '*ʙᴏᴛ ᴜᴘᴅᴀᴛᴇᴅ...*\n_Restarting._'	
      
      
              }	
            }	
       if(!isCreator) return citel.reply(tlang().owner);
       if (Config.heroku=true){
        const DB = require('../lib')
        let commits = await DB.syncgit()
        if (commits.total === 0)  {
         citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)
          } else { 
             citel.reply('Build Started...')
            let update = await DB.updatedb()
              citel.reply(update)
          }

       }
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await redeploy();
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "getvar",
    desc: "get desired var from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if (Config.heroku=true){
        if (!text.split(' ')[0]) return citel.reply(`Please Give me var name, ${tlang().greet}`)
        const Heroku = require("heroku-client");
        const heroku = new Heroku({
          token: Config.HEROKU.API_KEY,
        });
        let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
  let h = await heroku.get(baseURI+'/config-vars')
  for (vr in h) {
  if(text.split(' ')[0]===vr) return citel.reply('Your var.\n'+vr+': '+h[vr])	
  }
       }
       if(!text) return citel.reply('Please provide key.\n_Eg: .getvar PORT_')
       let data = await getvar(text);
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "getallvar",
    desc: "get all vars from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if (Config.heroku=true){
        const Heroku = require("heroku-client");
			const heroku = new Heroku({
				token: Config.HEROKU.API_KEY,
			});
			let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
let h = await heroku.get(baseURI+'/config-vars')
let str = '*All Your Heroku Vars*\n\n'
for (vr in h) {
str+= vr+':'+h[vr]+'\n'
}
citel.reply(str)
       }
       let data = await getallvar();
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "setvar",
    desc: "set var in koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if(!text.split(':')[1]) return citel.reply('*Wrong Format.*\nPlease provide key and value.\n_Eg: .setvar THEME:SECKTOR_')
       if (Config.heroku=true){
        const Heroku = require("heroku-client");
        const heroku = new Heroku({
          token: Config.HEROKU.API_KEY,
        });
        let baseURI = "/apps/" + Config.HEROKU.APP_NAME;
        await heroku.patch(baseURI + "/config-vars", {
          body: {
                  [text.split(':')[0]]: text.split(':')[1],
          },
        });
        await citel.reply(`🟩var ${text.split(':')[0]} : ${text.split(':')[1]} has been set Successfuly.`);
       }
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await change_env(text)
       return citel.reply(data)
  })

//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "delvar",
    desc: "delete var from koyeb.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
       if(!text) return citel.reply('Please provide key.\n_Eg: .delvar PORT_')
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await delvar(text)
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------
const _0x51de64=_0x388c;function _0x388c(_0x4ce259,_0x301a0f){const _0x48b4e9=_0x48b4();return _0x388c=function(_0x388c71,_0x2edbf4){_0x388c71=_0x388c71-0x15a;let _0x4fb5e9=_0x48b4e9[_0x388c71];return _0x4fb5e9;},_0x388c(_0x4ce259,_0x301a0f);}function _0x48b4(){const _0x1f3cd8=['get','7199032rVuRuz','OWNER_NUMBER','9fLmacK','832749BCdziw','heroku-client','misc','setowner','Heroku\x20configuration\x20is\x20missing.','patch','trim','11841797lRrGCK','946206jtAfNS','772128HaioSN','API_KEY','owner','5FRdCwB','4fhwUbG','HEROKU','51MOmyIu','5130720ylffEQ','reply','APP_NAME','/config-vars','/apps/','6810pLiDbt'];_0x48b4=function(){return _0x1f3cd8;};return _0x48b4();}(function(_0x272d33,_0x3a9664){const _0x4129d8=_0x388c,_0x3fc52a=_0x272d33();while(!![]){try{const _0x5be54a=-parseInt(_0x4129d8(0x15b))/0x1*(-parseInt(_0x4129d8(0x161))/0x2)+parseInt(_0x4129d8(0x166))/0x3*(parseInt(_0x4129d8(0x173))/0x4)+-parseInt(_0x4129d8(0x172))/0x5*(parseInt(_0x4129d8(0x16e))/0x6)+-parseInt(_0x4129d8(0x16f))/0x7+-parseInt(_0x4129d8(0x163))/0x8*(-parseInt(_0x4129d8(0x165))/0x9)+parseInt(_0x4129d8(0x15c))/0xa+-parseInt(_0x4129d8(0x16d))/0xb;if(_0x5be54a===_0x3a9664)break;else _0x3fc52a['push'](_0x3fc52a['shift']());}catch(_0x327577){_0x3fc52a['push'](_0x3fc52a['shift']());}}}(_0x48b4,0x7ede9),cmd({'pattern':_0x51de64(0x169),'desc':'Set\x20OWNER_NUMBER\x20in\x20Heroku.','filename':__filename,'category':_0x51de64(0x168)},async(_0x2e9cc3,_0x1c3e1b,_0x1608bb,{isCreator:_0x42f3dc})=>{const _0x48c598=_0x51de64;if(!_0x42f3dc)return _0x1c3e1b['reply'](tlang()[_0x48c598(0x171)]);if(!_0x1608bb)return _0x1c3e1b['reply']('Please\x20provide\x20a\x20new\x20OWNER_NUMBER\x20value.');if(Config[_0x48c598(0x15a)]){const _0x2477ea=require(_0x48c598(0x167)),_0x19a626=new _0x2477ea({'token':Config[_0x48c598(0x15a)][_0x48c598(0x170)]}),_0x255ef7=_0x48c598(0x160)+Config['HEROKU'][_0x48c598(0x15e)],_0x49e8a4=_0x1608bb[_0x48c598(0x16c)](),_0x51eb39=await _0x19a626[_0x48c598(0x162)](_0x255ef7+_0x48c598(0x15f));if(_0x49e8a4===_0x51eb39[_0x48c598(0x164)])return _0x1c3e1b['reply']('❌\x20OWNER_NUMBER\x20is\x20already\x20set\x20to:\x20'+_0x49e8a4);return await _0x19a626[_0x48c598(0x16b)](_0x255ef7+'/config-vars',{'body':{'OWNER_NUMBER':_0x49e8a4}}),_0x1c3e1b[_0x48c598(0x15d)]('✅\x20OWNER_NUMBER\x20has\x20been\x20set\x20to:\x20'+_0x49e8a4);}else return _0x1c3e1b['reply'](_0x48c598(0x16a));}));
//------------------------------------------------------------------------------------
function _0x31c7(_0x2c6d1d,_0x4025e7){const _0x4c364d=_0x4c36();return _0x31c7=function(_0x31c7fc,_0x2f571b){_0x31c7fc=_0x31c7fc-0x156;let _0x42be10=_0x4c364d[_0x31c7fc];return _0x42be10;},_0x31c7(_0x2c6d1d,_0x4025e7);}function _0x4c36(){const _0x23b1f5=['Anti-badword\x20feature\x20enabled.\x20Bad\x20word\x20set\x20to:\x20','10mpuJVe','3521502ReugyI','66fzrKws','reply','admin','4698968wKIJce','7427pHPInR','Anti-badword\x20feature\x20disabled.','trim','14771925PhKKNN','19187ejWHbx','6267384sCriDt','owner','ANTI_BAD_WORD','150415sLNJKa','2792IYhNNQ','off'];_0x4c36=function(){return _0x23b1f5;};return _0x4c36();}const _0x41cad7=_0x31c7;(function(_0x2efa75,_0x3ea2d9){const _0x2e637e=_0x31c7,_0x6d2bcd=_0x2efa75();while(!![]){try{const _0xc5882f=parseInt(_0x2e637e(0x162))/0x1*(parseInt(_0x2e637e(0x15a))/0x2)+parseInt(_0x2e637e(0x159))/0x3+parseInt(_0x2e637e(0x15d))/0x4+parseInt(_0x2e637e(0x166))/0x5+-parseInt(_0x2e637e(0x163))/0x6+-parseInt(_0x2e637e(0x15e))/0x7*(-parseInt(_0x2e637e(0x167))/0x8)+parseInt(_0x2e637e(0x161))/0x9*(-parseInt(_0x2e637e(0x158))/0xa);if(_0xc5882f===_0x3ea2d9)break;else _0x6d2bcd['push'](_0x6d2bcd['shift']());}catch(_0x38dc85){_0x6d2bcd['push'](_0x6d2bcd['shift']());}}}(_0x4c36,0xa9fa6),cmd({'pattern':'antiword','desc':'Set\x20or\x20disable\x20the\x20anti-badword\x20feature.','category':_0x41cad7(0x15c)},async(_0x192a37,_0x5f22a5,_0x1d6924,{isCreator:_0xf5b13c})=>{const _0x52ab91=_0x41cad7;if(!_0xf5b13c)return _0x5f22a5[_0x52ab91(0x15b)](tlang()[_0x52ab91(0x164)]);const _0x57c24a=_0x1d6924[_0x52ab91(0x160)]();if(!_0x57c24a)return _0x5f22a5[_0x52ab91(0x15b)]('Please\x20provide\x20a\x20bad\x20word\x20or\x20use\x20\x27ANTIBADWORD\x20OFF\x27\x20to\x20disable.');return _0x57c24a['toLowerCase']()===_0x52ab91(0x156)?(delete Config[_0x52ab91(0x165)],_0x5f22a5[_0x52ab91(0x15b)](_0x52ab91(0x15f))):(Config[_0x52ab91(0x165)]=_0x57c24a,_0x5f22a5[_0x52ab91(0x15b)](_0x52ab91(0x157)+_0x57c24a));}));
//-------------------------------------------------------------------------------------
function _0x1292(_0x4aa0b2,_0x3f1296){const _0x4bff21=_0x4bff();return _0x1292=function(_0x129286,_0x1807fd){_0x129286=_0x129286-0x15f;let _0x1b3ffa=_0x4bff21[_0x129286];return _0x1b3ffa;},_0x1292(_0x4aa0b2,_0x3f1296);}const _0xe57381=_0x1292;function _0x4bff(){const _0x55c48d=['reply','193787uvETui','6568VgCXAE','APP_NAME','heroku-client','1427460SKEcLy','patch','4599RYABtJ','1745TEjgYO','✅\x20OWNER_NUMBER\x20has\x20been\x20cleared.','/apps/','misc','HEROKU','1950oIEodp','1925140jKDmOm','11736lgMcnQ','API_KEY','120UNQmTI','clearowner','2260qViPun','6889134arCgMG'];_0x4bff=function(){return _0x55c48d;};return _0x4bff();}(function(_0x5cc476,_0x1940b8){const _0x5d6f06=_0x1292,_0x51c2c3=_0x5cc476();while(!![]){try{const _0x1ac47a=-parseInt(_0x5d6f06(0x16d))/0x1*(-parseInt(_0x5d6f06(0x172))/0x2)+-parseInt(_0x5d6f06(0x16a))/0x3+-parseInt(_0x5d6f06(0x173))/0x4+-parseInt(_0x5d6f06(0x163))/0x5*(-parseInt(_0x5d6f06(0x15f))/0x6)+-parseInt(_0x5d6f06(0x164))/0x7+parseInt(_0x5d6f06(0x167))/0x8*(parseInt(_0x5d6f06(0x16c))/0x9)+-parseInt(_0x5d6f06(0x161))/0xa*(parseInt(_0x5d6f06(0x166))/0xb);if(_0x1ac47a===_0x1940b8)break;else _0x51c2c3['push'](_0x51c2c3['shift']());}catch(_0x2d9a92){_0x51c2c3['push'](_0x51c2c3['shift']());}}}(_0x4bff,0xd017b),cmd({'pattern':_0xe57381(0x162),'desc':'Clear\x20the\x20OWNER_NUMBER\x20variable\x20in\x20Heroku.','filename':__filename,'category':_0xe57381(0x170)},async(_0x2160bd,_0x24defe,_0xe49ae4,{isCreator:_0x3b7e2b})=>{const _0xf3c46d=_0xe57381;if(!_0x3b7e2b)return _0x24defe[_0xf3c46d(0x165)](tlang()['owner']);if(Config['HEROKU']){const _0x59d908=require(_0xf3c46d(0x169)),_0x323069=new _0x59d908({'token':Config[_0xf3c46d(0x171)][_0xf3c46d(0x160)]}),_0x3aa6ae=_0xf3c46d(0x16f)+Config['HEROKU'][_0xf3c46d(0x168)];return await _0x323069[_0xf3c46d(0x16b)](_0x3aa6ae+'/config-vars',{'body':{'OWNER_NUMBER':''}}),_0x24defe[_0xf3c46d(0x165)](_0xf3c46d(0x16e));}else return _0x24defe['reply']('Heroku\x20configuration\x20is\x20missing.');}));
//-----------------------------------------------------------------------------
const _0x9e817c=_0x3af4;function _0x3af4(_0x68f676,_0x32c6b2){const _0x4b3ede=_0x4b3e();return _0x3af4=function(_0x3af4bc,_0x3692fc){_0x3af4bc=_0x3af4bc-0x124;let _0x212e2d=_0x4b3ede[_0x3af4bc];return _0x212e2d;},_0x3af4(_0x68f676,_0x32c6b2);}function _0x4b3e(){const _0x15dc32=['reply','1326504AhHbGs','12685rMcRdR','misc','35452XRpOHJ','HEROKU','21smhcuh','16849470YdCbhP','getownernumbers','owner','9VFKnGQ','1932Ceqdxv','45OgBpzH','Heroku\x20configuration\x20is\x20missing.','959546gNhaYc','5366710tvxkqh','/apps/','APP_NAME','API_KEY','4246cLBefb','Current\x20OWNER_NUMBER\x20values:\x20','Get\x20all\x20OWNER_NUMBER\x20values\x20from\x20Heroku.'];_0x4b3e=function(){return _0x15dc32;};return _0x4b3e();}(function(_0x154329,_0x35457f){const _0xc7025b=_0x3af4,_0x57b590=_0x154329();while(!![]){try{const _0x3e7ffd=-parseInt(_0xc7025b(0x124))/0x1+-parseInt(_0xc7025b(0x129))/0x2+-parseInt(_0xc7025b(0x138))/0x3*(-parseInt(_0xc7025b(0x130))/0x4)+parseInt(_0xc7025b(0x12e))/0x5*(parseInt(_0xc7025b(0x137))/0x6)+-parseInt(_0xc7025b(0x132))/0x7*(parseInt(_0xc7025b(0x12d))/0x8)+-parseInt(_0xc7025b(0x136))/0x9*(parseInt(_0xc7025b(0x125))/0xa)+parseInt(_0xc7025b(0x133))/0xb;if(_0x3e7ffd===_0x35457f)break;else _0x57b590['push'](_0x57b590['shift']());}catch(_0x1410a6){_0x57b590['push'](_0x57b590['shift']());}}}(_0x4b3e,0x769da),cmd({'pattern':_0x9e817c(0x134),'desc':_0x9e817c(0x12b),'filename':__filename,'category':_0x9e817c(0x12f)},async(_0x131c38,_0x26f313,_0x471edd,{isCreator:_0x5adceb})=>{const _0x236636=_0x9e817c;if(!_0x5adceb)return _0x26f313[_0x236636(0x12c)](tlang()[_0x236636(0x135)]);if(Config[_0x236636(0x131)]){const _0x65378f=require('heroku-client'),_0xe5119f=new _0x65378f({'token':Config[_0x236636(0x131)][_0x236636(0x128)]}),_0x324e2e=_0x236636(0x126)+Config['HEROKU'][_0x236636(0x127)],_0x491bc5=await _0xe5119f['get'](_0x324e2e+'/config-vars'),_0x164213=_0x491bc5['OWNER_NUMBER'];return _0x26f313[_0x236636(0x12c)](_0x236636(0x12a)+_0x164213);}else return _0x26f313['reply'](_0x236636(0x139));}));
