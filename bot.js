const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");

      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(adminprefix + 'say')) {
            message.channel.send(x);
                message.delete(999)
        }
        
       
      

client.on('ready', () => {

	

        client.user.setGame('hi',`http://www.youtube.com/gg`);	

	

});



client.login('NDY2MzE4Mzc1NTAxNDMwNzg1.Dr5iEA.WznhsfPzlZn3ULW4fSd3CmzP8pk');



