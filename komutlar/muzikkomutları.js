const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("MUZİK KOMUTLARI:",`
-çal [Şarkı İsmi]
-durdur [Çalan Şarkıyı Durdurur]
-geç [Çalan Şarkıyı Geçer Sıradakini Açar]
-kuyruk [Çalınacak Olan Listeyi Gösterir]
-çalan [Çalan Şarkıyı Gösterir]
`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'muzik',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'muzik'
};