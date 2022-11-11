const { ApplicationCommandType, Colors, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'bot-infos',
    description: '(💡) Permet de voir les informations du robot',
    type: ApplicationCommandType.ChatInput,
execute: async (client, interaction, args) => {
    
            let francais = new EmbedBuilder()
                .setColor(Colors.White)
                .setTitle(`${client.user.tag}`)
                .setThumbnail(client.user.displayAvatarURL())
                .addFields(
                    {
                        name: `Identité`,
                        value: `> Nom : ${client.user} [\`${client.user.tag}\`]\n > ID : \`${client.user.id}\``,
                    },
                    {
                        name: `Statistiques`,
                        value: `> Serveurs : \`${client.guilds.cache.size}\`\n > Utilisateurs : \`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\`\n > Latence : \`${client.ws.ping}\``,
                    },
                    {
                        name: `Equipe technique`,
                        value: `> Discord : <@645679348283736134> & <@840260894432165888>`,
                    },
                )
                .setFooter({
                    text: `Demandé par ${interaction.user.username}`,
                    iconURL: interaction.user.displayAvatarURL({dynamic: true})
                })

                interaction.reply({embeds: [francais]})
    }     
}