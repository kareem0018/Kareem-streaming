const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");


client.on("guildMemberAdd", member => {
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
client.on("guildMemberRemove", member => {
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
client.login('NTA1NzgzNzI5MDk3Mjc3NDcy.DrY0WA.vcgo4-pu5hGxo-QCjj1iOAF27rw');
