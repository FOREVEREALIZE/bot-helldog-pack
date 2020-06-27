const Discord = require("discord.js");
const Client = new Discord.Client();
var prefix = "!";
var today = new Date();
var time = today.getHours + ":" + today.getMinutes;

Client.on("ready", () => {
  console.log("El bot ha iniciado sesión con exito como: " + Client.user);
});

Client.on("message", msg => {
  if (msg.content.substring(prefix.length, prefix.length + 4).toLowerCase() === "ping") {
    msg.channel.send("pong!");
  } else if (msg.content.substring(prefix.length, prefix.length + 12).toLowerCase() === "changeprefix") {
      msg.channel.send("Prefijo cambiado a: " + msg.content.substring(prefix.length + 13, msg.content.length));
      prefix = msg.content.substring(prefix.length + 13, msg.content.length);
  } else if (msg.content.substring(prefix.length, prefix.length + 8) === "pedirrol") {
      if (msg.content.substring(prefix.length + 9, msg.content.length).toLowerCase() === "tester") {
        msg.guild.member(msg.author.id).addRole("710484345592479805"); //tester
        msg.react("✅");
      } else if (msg.content.substring(prefix.length + 9, msg.content.length).toLowerCase() === "builder") {
        msg.guild.member(msg.author.id).addRole("710484306325405738"); //builder
        msg.react("✅");
      } else if (msg.content.substring(prefix.length + 9, msg.content.length).toLowerCase() === "modder") {
        msg.guild.member(msg.author.id).addRole("715876279748132946"); //modder
        msg.react("✅");
      } else if (msg.content.substring(prefix.length + 9, msg.content.length) === "") {
        msg.reply("Uso: !pedirRol <nombre del rol>\nLista de roles a elegir: #info");
      } else {
        msg.react("❌")
        msg.reply("el rol " + msg.content.substring(prefix.length + 9, msg.content.length) + " no existe / no es elegible!")
      }
  } else if (msg.content.toLowerCase() === "prefix") {
    msg.channel.send(prefix);
  } else if (msg.content.substring(prefix.length, prefix.length + 7).toLowerCase() === "refresh") {
    Client.destroy();
    wait(10000);
    Client.login(process.env.BOT_TOKEN);
    wait(2000);
    msg.channel.send("Refrescado con exito!");
  } else if (msg.content.substring(prefix.length, prefix.length + 8).toLowerCase() === "anunciar") {
    if (msg.member.hasPermission("ADMINISTRATOR")) {
      if (msg.content.substring(prefix.length + 10, msg.content.length) != "") {
        msg.react("✅");
        msg.guild.channels.get("715884048446259260").send("@everyone, " + msg.content.substring(prefix.length + 9, msg.content.length));
      } else {
        msg.react("❌");
        msg.reply("no has escrito ningún anuncio!");
      }
    } else {
      msg.react("❌");
      msg.reply("no tienes permiso para usar este comando!");
    }
  }
});

function wait(ms) {
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

Client.login(process.env.BOT_TOKEN);