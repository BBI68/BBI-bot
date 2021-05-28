const Discord = require('discord.js') 
const client = new Discord.Client() 
const { readdirSync } = require('fs'); 
const { join } = require('path'); 
const { PREFIX } = require("./ayarlar.json");

client.commands= new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); 
}

client.on("error", console.error);

client.on('ready', () => {
    client.user.setActivity('BBI')
    console.log('Botumuz Aktif')
});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım.`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.login('ODQ2MDUzODc2Mjc2Mzk2MDcy.YKp7Ew.1ot2Y4GGidz8JhWNWDCQoM8X-K0')