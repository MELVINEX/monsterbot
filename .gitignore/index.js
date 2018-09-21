const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "*";

client.login("NDkyMzc3Njg5ODYxMjU5Mjc1.Dobacg.x8_kJ2SYxF97rFzpAzleS7UjPFw");

client.on('message', message => {

    if(message.content === "Bonjour"){
        message.reply("Salut à toi!");
        console.log('Le bot dis bonjour');
    }
});
client.on('message', message => {

    if(message.content === "Bjr"){
        message.reply("Salut à toi!");
        console.log('Le bot dis bonjour');
    }
});
client.on('message', message => {

    if(message.content === "bonjour"){
        message.reply("Salut à toi!");
        console.log('Le bot dis bonjour');
    }
});
client.on('message', message => {

    if(message.content === "bjr"){
        message.reply("Salut à toi!");
        console.log('Le bot dis bonjour');
    }
});
