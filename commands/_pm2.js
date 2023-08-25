/**  Copyright (C) 2023. 
  Licensed under the  GPL-3.0 License; 
  You may not use this file except in compliance with the License. 
  It is supplied in the hope that it may be useful. 
  * @project_name : Blue_Lion_Bot 
  * @author : nipuna rangana
  * @description : Blue-Lion,A Multi-functional whatsapp bot. 
  * @version 0.0.2 **/

//---------------------------------------------------------------------------
const {cmd,tlang,sleep} = require('../lib')
cmd({
        pattern: "restart",
        desc: "To restart bot",
        category: "tools",
        filename: __filename
    },
    async(Void, citel,text,{ isCreator }) => {
   if (!isCreator) return citel.reply(tlang().owner)
            const { exec } = require("child_process")
            citel.reply('🍁 Restarting NITHYA')
            await sleep(2000)
            exec('pm2 restart all')
    }
);
