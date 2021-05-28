const { MessageEmbed } = require('discord.js')

module.exports = {
    kod: "ping",
    run: (client, message, args) => {
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('pİNG')
        .addField('BOT PİNGİ:', client.ws.ping + 'ms')
        .addField('Mesaj gecikme Süresi:', `${Date.now() - message.createdTimestamp} ms`)
        .addField('©️ tüm hakları saklıdır')
        message.channel.send(embed)
    }
}