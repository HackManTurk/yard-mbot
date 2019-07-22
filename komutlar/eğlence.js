const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("EĞLENCE KOMUTLARI:",`
-mkasözleri Atatürk'ün Sözlerini Yazar
-kahkaha Kahkaha resmi atar
-düello @kullanıcı İstediğiniz bir kişi ile düello atarsınız!
-espri espiri yapar :d
-ilginc-bilgi [Çok ilginç Bilgiler Verir]
`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'eğlence'
};