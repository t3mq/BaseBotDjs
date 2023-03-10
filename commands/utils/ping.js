module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: '',
execute: async (client, message, args) => {
    return message.channel.send({ content: `:ping_pong: • ${message.author} pong!` })
    }
}
