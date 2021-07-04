const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi! - Candy | Code`);
  console.log(`Dr.SansarBey`)
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${client.user.username} ismi ile giriş yapıldı! - Candy | Code`); 
  client.user.setStatus("dnd");
  client.user.setActivity(`Candy | Code v12 boş altyapı`);
}; 
