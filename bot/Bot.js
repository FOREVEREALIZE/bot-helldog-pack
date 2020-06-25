const Discord = require("discord.js");
const Client = new Discord.Client();
var prefix = "!";

Client.on("ready", () => {
  console.log("El bot ha iniciado sesión con exito como: " + Client.user);
});

Client.on("message", msg => {
  if (msg.content.substring(prefix.length, prefix.length + 4) === "ping") {
    msg.channel.send("pong!");
  } else if (msg.content.substring(prefix.length, prefix.length + 12) === "changeprefix") {
      msg.channel.send("Prefijo cambiado a: " + msg.content.substring(prefix.length + 13, msg.content.length));
      prefix = msg.content.substring(prefix.length + 13, msg.content.length);
  } else if (msg.content.substring(prefix.length, prefix.length + 8) === "pedirRol") {
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
  } else if (msg.content === "prefix") {
    msg.channel.send(prefix);
  }
});

Client.on('guildCreate', guild => {
  Client.channel.get("715884048446259260").send("@everyone hemos puesto en funcionamiento un bot para el servidor, ahora es posible pedir un rol elegible con !pedirRol <nombre del rol>, en el futuro se añadiran mas funciones, gracias.");
  Client.channel.get("720663623319552041").send("@everyone ha salido la 1.0 del bot!\nse a añadido el comando pedirRol.\nUso: !pedirRol <nombre del rol>\nLista de roles a elegir: #info");
});

Client.login(process.env.BOT_TOKEN);
