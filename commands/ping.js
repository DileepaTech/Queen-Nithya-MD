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

//---------------------------------------------------------------------------
const Secktor = require('../lib');
Secktor.cmd({
    pattern: "ping",
    desc: "To check ping",
    category: "general",
    filename: __filename,
},
async (Void, citel) => {
    var initial = new Date().getTime();
    const { key } = await Void.sendMessage(citel.chat, { text: '```Pinging from server```' });
    var final = new Date().getTime();

    // Calculate the ping value in milliseconds
    const pingValue = final - initial;

    // Create a loading bar
    const loadingBarLength = 20;
    const loadedBlocks = loadingBarLength;
    const loadingBar = '█'.repeat(loadedBlocks);

    // Send the loading bar first
    await Void.sendMessage(citel.chat, { text: `*Pong*\nLoading: [${loadingBar}] 100%`, edit: key });

    // Wait for a brief moment (you can customize this delay)
    await Secktor.sleep(1000);

    // Send the final ping message
    return await Void.sendMessage(citel.chat, { text: `*Ping: ${pingValue} ms*` });
});
