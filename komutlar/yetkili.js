const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("YETKILI  KOMUTLARI:",`
Ekledin komutlari preffix ve komutun ismi ornnek

-ban @kulanici [bir kisiyye ban atarsiniz]
-yazı-kanal-aç [açmak istediğiniz kanalın adı]
-ses-kanal-aç [açmak istediğiniz kanalın adı]
-reboot [Botu Yeniden Başlatır]
-banlananlar [Banlananlar Listesini Görüntüler]
-otorol [Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.]
-sayac [sayac ayarlarsiniz]
-yavaşmod 5 [bu odada kullanıcılar 5 saniye aralıklarla mesaj gönderebilecek.]
-canlıdestek [botunsahibiyle itirabe gecersiniz]
-sunucutanıt [12 saatte bir sunucu tanıtır]
-hazır-sunucu [hazır sunucu yapar odalar yapar]
-statayarla [sunucu istatistiklerini açar]
`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yetkili'
};
