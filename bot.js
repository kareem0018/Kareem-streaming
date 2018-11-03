const Discord = require("discord.js");
const client = new Discord.Client();

console.log("BOT ONLINE");


client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('سباام يولد يلعن اومم الفله')
          .then(m => {
            count++;
          })

        }
      }
});



client.login("NTA4MzUwNDAwMzk5NjcxMjk2.Dr9-CA.0fLXCr8nIIOU0L2QYsoULTJdbsA");



