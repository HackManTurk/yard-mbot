const Discord = require('discord.js');
module.exports.run = async (bot,message,args) => {
    var options = {
        maxAge: 0
    };
    const useruser = "Oluşturan: " + message.author.username;
    const usermade = message.author;
    const userurl = message.author.avatarURL;
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`:information_source:  Oluşturuluyor......`)
        .setTimestamp()
    message.channel.send(botembed).then(message => {
    message.channel.createInvite(options).then(i => {
        botembed.setColor("#000FF")
        botembed.setDescription(`Buyrun Davet kodu ${usermade}. \n https://discordapp.com/oauth2/authorize?client_id=601706454923345920&scope=bot&permissions=805314622${i.code}`)
        botembed.setFooter(useruser, userurl)
        botembed.setTimestamp()
        message.edit(botembed)
        })
    })
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite","davetoluştur"],
  permLevel: 0
};

module.exports.help = {
  name: "davet",
  description: "Bulunduğunuz sunucunun davet linkini oluşturur.",
  usage: "davet"
};
