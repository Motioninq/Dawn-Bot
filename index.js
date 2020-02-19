const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'Njc5MTQ5OTYyOTM1OTI2Nzk1.XktMUA.eDrZoanf5w6XaL9A8nMe6d6wSBw';
const PREFIX = '!d';
const embed = new Discord.RichEmbed();

bot.on('ready', () =>{
    console.log('Bot: ONLINE');
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;

    const embed = new Discord.RichEmbed()
    .setTitle('Welcome')
    .addField('User', `${member}`)
    .setColor(0x3498DB)
    channel.sendEmbed(embed);

});

bot.login(token);