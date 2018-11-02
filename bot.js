const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");


client.on('ready', () => {

	

        client.user.setGame('تم التهكير يا منوووووب',`http://www.youtube.com/gg`);	
});


client.login('NDk2MzAzNTYxNjIyMjkwNDQy.DpPevQ.Lq5US5CcgN6CJ3uY1DI-o6ntikM');
