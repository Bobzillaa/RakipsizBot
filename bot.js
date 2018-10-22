//Discord.js Kütüphanesi
const Discord = require('discord.js');

const client = new Discord.Client();
let bot = client;//Thanks TDG
let Rakipsiz = client;

//Ayarlar Dosyamız
const ayarlar = require("./ayarlar.json");
const { prefix, gelistirici, token, botismi, telif , basarili, basarisiz, ban, vip, wifi, server, kizgin, partizamani, bosyapma, fenasikerim, Bot, oylama, blobcosturuyor, kod, yukleniyor, papagan, cevrimici, bosta, rahatsizetmeyin, yayinda, cevrimdisi, dikkat, sagkol, solkol, onaylandi, nah } = require("./ayarlar");

//DOSYALARI KOMUT OLARAK ALGILAMASI ICIN
client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(prefix) !== 0) return;
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const komut = args.shift().toLowerCase();
  const event = msg.content.toLower
  try {
    let komutDosyası = require(`./komutlar/${komut}.js`);
    komutDosyası.run(client, msg, args);
  } catch (err) {}
});

//Değişen Twitchli oynuyor
client.on("ready", () => {
var oyun = [
  "r!davet (YAKINDA)",
  "r!yardım",
  "r!moderasyon",
  "r!eğlence",
  "r!resimler",
  "r!müzik",
  "r!nsfw",
  "r!geliştirici",
  "r!istatistikler",
  "r!yenilikler (YAKINDA)",
  "r!destek (YAKINDA)",
  "Prefix: r!",
  "Geliştirici: Bobzillaa",
  "Dm de bota kötü davrananlar edenler tespit ediliyor"
];
setInterval(function() {
  var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
  client.user.setActivity(oyun[random], "https://www.twitch.tv/enesonurata");
  }, 2 * 2500);
});

//Yardım isteyince TM emojileri bırakcak (şimdilik) ; (ileride tüm kategorileri yazınca da atacak emojileri [moderasyon , müzik , resimler , nsfw])
client.on('message', async msg => {
  if (msg.content.toLowerCase() === '<@503556255110004767> yardım') {
    await msg.react('🇹');
    msg.react('🇲');
  }
  if (msg.content.startsWith(prefix + "yardım")) {
    await msg.react('🇹');
    msg.react('🇲');
  }
  if (msg.content.toLowerCase() === '<@503556255110004767>') {
    await msg.react('🇹');
    msg.react('🇲');
  }
});

//Davet ve Cümlenin içinde Hayalet veya hayalet geçerse olayı
client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "davet") {
    const embed = new Discord.RichEmbed()
      .setDescription('Davet linkim için [üzerime tıkla.](https://discordapp.com/api/oauth2/authorize?client_id=${botismi}&permissions=2146958839&scope=bot)')
    return message.channel.sendEmbed(embed);
  }
});

// Özelden Yazılanlar
client.on("message", message => {
  const dmchannel = bot.guilds.get("503557010835636225").channels.get("503575740575383572");
  if (message.channel.type === "dm") {
      if (message.author.id === client.user.id) return;
      dmchannel.send("", {embed: {
              color: 3447003,
              title: `Yazan: ${message.author.tag} ID: ${message.author.id}`,
              description: `*Mesaj:* ${message.content}`
            }})
  }
  if (message.channel.bot) return;
});

//Botu ekleyen sunucunun kurucusuna botun eklendiğini özelden bildirir
client.on('guildCreate', async guild => {
  const girismesaj = [
    '**Rakipsiz** sunucunuza başarıyla eklendi.',
    `Botumuzun özelliklerini öğrenmek için ${prefix}yardım yazabilirsiniz.`,
  ]
  guild.owner.send(girismesaj)
});


// RESIMLI GIRIS CIKIS
const Canvas = require('canvas');
const snekfetch = require('snekfetch');


const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'hosgeldin-gulegule');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./medya/images.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#00ff43';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#00ff43';
	ctx.fillText('Sunucumuza Hoş Geldin', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.user.username}!`);
	ctx.fillStyle = '#e9ff00';
	ctx.fillText(`${member.user.username}`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'rakipsiz-hosgeldin.png');

	channel.send(attachment);
});

//Sunucudan bir üye çıkarsa "hosgeldin-gulegule" isimli kanala resimli çıkışı atar
client.on("guildMemberRemove", async member => {
  const channel = member.guild.channels.find(ch => ch.name === 'hosgeldin-gulegule');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./medya/images.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#ff0000';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ff0000';
	ctx.fillText('Sunucudan Ayrıldı', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.user.username}!`);
	ctx.fillStyle = '#e9ff00';
	ctx.fillText(`${member.user.username}`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'rakipsiz-gulegule.png');

	channel.send(attachment);
});

//Botun açılması için gerek "/ ULTRA | MEGA | SÜPER \" gizli tokeni buraya girin
client.login(process.env.BOT_TOKEN);


/*
//botu ekleyen bir sunucu varsa
client.on('guildCreate', guild => {
  let channel = bot.channels.get("hayalet-log")
  const embed = new Discord.RichEmbed()
    .setColor("0x00cc44")
    .setAuthor(`👻 Eklediler 👻`)
    .setThumbnail(guild.iconURL)
    .addField("Sunucu Adı", guild.name)
    .addField("Kurucu", guild.owner)
    .addField("Sunucu ID", guild.id, true)
    .addField("Toplam Kullanıcı", guild.memberCount, true)
    .addField("Toplam Kanal", guild.channels.size, true)
    .setFooter("©2018 | 👻 Hayalet 👻", client.user.displayAvatarURL)
  channel.send(embed);
});
//botu atan bir sunucu varsa
client.on('guildDelete', guild => {
  let channel = bot.channels.get("hayalet-log")
  const embed = new Discord.RichEmbed()
    .setColor("0xff1a1a")
    .setAuthor(`👻 Attılar 👻`)
    .setThumbnail(guild.iconURL)
    .addField("Sunucu Adı", guild.name)
    .addField("Kurucu", guild.owner)
    .addField("Sunucu ID", guild.id, true)
    .addField("Toplam Kullanıcı", guild.memberCount, true)
    .addField("Toplam Kanal", guild.channels.size, true)
    .setFooter("©2018 | 👻 Hayalet 👻", client.user.displayAvatarURL)
  channel.send(embed);
});
*/
