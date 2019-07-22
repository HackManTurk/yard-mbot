const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("EK KOMUTLARI:",`
-ailemiz Ailemizin Yazısını Yazar
-davet Davet Linki Oluşturur
-havadurumu hava durumunu gösterir
-ilginçbilgi ilginçbilgiler verir
-istatistik istatistikleri görüntüler
-kullanıcılar kullanıcıları görüntüler
-alinti bir mesajı alıntılar
`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ekkomutlar',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'ekkomutlar'
};