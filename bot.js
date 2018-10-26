const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");


A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`***Konex shop***
متجر لبيع :
***نايترو***
***حسابات ماين كرافت***
***حسابات فورت نايت***
***حسابات سبوتي فاي ***
***تاقات مميزة***
تخفيضات ليومين ***لحق نفسك*** 
الرابط 
https://discord.gg/bcpjsSC
`)


}).catch(console.error)
})
A7MD.login('MzczMTc3MTc0MDM3MTAyNjAz.DrTL6g.QsYozZB_BAHCH2Bnjp4kalA6spQ');
