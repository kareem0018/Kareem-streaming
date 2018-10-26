const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");

client.login(process.env.BOT_TOKEN);


A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
***Konex shop***
```متجر لبيع :```
***نايترو***
***حسابات ماين كرافت***
***حسابات فورت نايت***
***حسابات سبوتي فاي ***
***تاقات مميزة***
تخفيضات ليومين ***لحق نفسك*** 
الرابط 
https://discord.gg/bcpjsSC

}).catch(console.error)
})
