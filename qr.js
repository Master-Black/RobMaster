/*  RobMaster dev v1 - Public Release

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Master-Black - RobMaster
*/

const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./RobMaster/');
const fs = require('fs');

async function RobMaster () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 40000;
    
    conn.on('🔄 connecting', async () => {
        console.log(`${chalk.green.bold('Rob')}${chalk.blue.bold(' Master')}
${chalk.white.italic('RobMaster Sting session')}

${chalk.blue.italic('ℹ️  Whatsapp වෙත සම්බන්ධ වෙමින්... කරුණාකර රැඳී සිටින්න.')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('RobMaster session: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `ROB_SESSION="${st}"`);
        }

        console.log(
            chalk.blue.bold('If you are installing locale, you can start the bot with node bot.js.')
        );
        process.exit(0);
    });

    await conn.connect();
}

RobMaster()
