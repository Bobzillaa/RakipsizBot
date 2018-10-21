const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<:basarisiz:478214443231215622> **| Senin `MANAGE_MESSAGES` yetkin yok.**");
  if(!args[0]) return message.channel.send("Kaç tane mesajı siliyim? `Minimum 2`");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<:basarili:478214442899734529> Sohbette **${args[0]}** tane mesaj silindi.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "temizle"
}