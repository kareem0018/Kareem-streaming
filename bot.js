const Discord = require('discord.js');
const client = new Discord.Client();

console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`)


 var prefix = "+";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`${prefix}say <words>`);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});




client.login('NDc3NTY3NzczNzQ5MjgwNzY4.DlAt1g.24xXCf783eQsJc9d4-WD15lG_W4');



