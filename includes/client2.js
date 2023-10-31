/*
 * Information
 * Creator / Developer: Dani Ramdani (Dani Techno.) - FullStack Engineer
 * Contact creator / Developer: 0895 1254 5999 (WhatsApp), contact@danitechno.com (Email)
*/

/* Thanks to
 * Dani Techno. - FullStack Engineer (Creator / Developer)
 * @danitech/wa-web-api (Library "WhatsApp Web API" provider)
*/

const chalk = require('chalk');
const config = require('../config/settings.js');

module.exports = async ({
  client,
  messages
}) => {
  try {
    const body = messages.mtype === 'conversation' ? messages.message.conversation : messages.mtype === 'extendedTextMessage' ? messages.message.extendedTextMessage.text : '';
    const budy = typeof messages.text === 'string' ? messages.text : '';
    const command = body.startsWith(config.prefix) ? body.replace(config.prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
    const cleanCommand = command.replace(config.prefix, '');
    const args = body.trim().split(/ +/).slice(1);
    const query = q = args.join(' ');
    const query1 = q1 = query.split('|')[0]
    const query2 = q2 = query.split('|')[1]

    const ownerNumbers = config.owner.number;
    const senderNumber = messages.sender.replace(/\D/g, '');
    const senderName = messages.pushName || 'Undefined';
    const isOwner = ownerNumbers.includes(messages.sender);

    if (!config.public_mode) {
      if (!messages.key.fromMe) {
        return;
      };
    };

    if (messages.message) {
      client.readMessages([messages.key]);

      console.log(
        chalk.bgMagenta(' [New Message] '),
        chalk.cyanBright('Time: ') + chalk.greenBright(new Date()) + '\n',
        chalk.cyanBright('Message: ') + chalk.greenBright(budy || messages.mtype) + '\n' +
        chalk.cyanBright('From:'), chalk.greenBright(senderName), chalk.yellow('- ' + senderNumber) + '\n' +
        chalk.cyanBright('Chat Type:'), chalk.greenBright(!messages.isGroup ? 'Private Chat' : 'Group Chat - ' + chalk.yellow(messages.chat))
      );
    };

    if (!body.startsWith(config.prefix) || body === config.prefix) {
      return;
    };

    switch (cleanCommand) {
      case 'test': {
        messages.reply('Ok, Success!');
        break;
      };
      
      default: {
        messages.reply(`Command: ${config.prefix}${cleanCommand}, tidak tersedia!`);
      };
    };
  } catch (error) {
    messages.reply('Terjadi kesalahan pada server.');
    console.error(error);
  };
};