/**
██╗███████╗██╗   ██╗██╗  ██╗██╗   ██╗    ███╗   ███╗██████╗ 
██║╚══███╔╝██║   ██║██║ ██╔╝██║   ██║    ████╗ ████║██╔══██╗
██║  ███╔╝ ██║   ██║█████╔╝ ██║   ██║    ██╔████╔██║██║  ██║
██║ ███╔╝  ██║   ██║██╔═██╗ ██║   ██║    ██║╚██╔╝██║██║  ██║
██║███████╗╚██████╔╝██║  ██╗╚██████╔╝    ██║ ╚═╝ ██║██████╔╝
╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝     ╚═╝     ╚═╝╚═════╝ 
                                                            
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Izuku-Md
 * @author : excel <https://github.com/excelottah6>
 * @description : Izuku,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/
//---------------------------------------------------------------------------
const { cmd } = require('../lib');
const util = require('util');
const axios = require('axios');

cmd({
    pattern: "paste",
    desc: "create paste of text.",
    category: "extra",
    filename: __filename,
},
async (Void, citel, text) => {
    let a = citel.quoted ? citel.quoted.text : citel.text;
    let apiToken = 'd3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722'; // Replace with your Telegraph API token
    let apiUrl = `https://api.telegra.ph/createPage?access_token=${apiToken}&title=Secktor-Md+Bot&author_name=SamPandey001&content=[%7B"tag":"p","children":["${a.replace(/ /g, '+')}"]%7D]&return_content=true`;

    try {
        let { data } = await axios.get(apiUrl);
        if (data && data.result) {
            let title = util.format(data.result.title);
            let url = util.format(data.result.url);
            let stylishReply = `*Paste created on Telegraph*\nName:- ${title}\nUrl:- ${url}`;
            return citel.reply(stylishReply);
        } else {
            return citel.reply('Error creating paste on Telegraph.');
        }
    } catch (error) {
        console.error('Error creating paste:', error);
        return citel.reply('Error creating paste on Telegraph.');
    }
});
