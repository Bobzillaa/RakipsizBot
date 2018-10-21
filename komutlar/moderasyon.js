const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

module.exports.run = async (client, message, args) => {

let Moderasyon = new Discord.RichEmbed()
    .setTitle("🛠️ Moderasyon")
    .setAuthor("👻 Hayalet 👻", client.user.displayAvatarURL)
    .setDescription("Gerekli Kanal: **mod-log**")
    .setThumbnail("https://cdn.discordapp.com/emojis/427610495814729728.gif")
    .setColor(0xFFFF00)
    .addField("`" + prefix + "yasakla`", "Üyeyi banlarsın")
    .addField("`" + prefix + "affet`", "Üyenin banını kaldırırsın")
    .addField("`" + prefix + "temizle`", "Girdiğin sayı kadar mesajları temizlersin")
    .addField("`" + prefix + "at`", "Üyeyi atarsın")
    .addField("`" + prefix + "sustur`", "Üyeyi susturursun")
    .setFooter("©2018 | 👻 Hayalet 👻", client.user.displayAvatarURL)

message.channel.send(Moderasyon);
}

module.exports.help = {
  name: "moderasyon"
}