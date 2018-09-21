const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "*";

client.login("NDkyMzc3Njg5ODYxMjU5Mjc1.DobXDg.44IaYuD_Mw4DAjqpECYLk27ovrU");

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
