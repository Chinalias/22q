const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
   client.user.setStatus(" online");
});





client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك ه
