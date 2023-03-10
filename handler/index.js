const { Routes } = require('discord-api-types/v9');
const { REST } = require('@discordjs/rest')
const { readdirSync } = require('fs');
const colors = require('colors');

module.exports = (client) => {
    // # commands
    const loadCommands = (dir = "./commands/") => {
        readdirSync(dir).forEach(dirs => {
          const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

          for (const files of commands) {
            const getFileName = require(`../${dir}/${dirs}/${files}`);
            client.commands.set(getFileName.name, getFileName);
            console.log(`[COMMANDS]`.bold.red + ` Loading command :`.bold.white + ` ${getFileName.name}`.bold.red);
            if(!commands) return console.log(`[COMMANDS]`.bold.red + `Nothing command in : `.bold.yellow + `${files}`.bold.red)
          };
        });
    };
    loadCommands()
    console.log(`•----------•`.bold.black)

    // # events
    const loadEvents = (dir = "./events/") => {
        readdirSync(dir).forEach(dirs => {
            const events = readdirSync(`${dir}/${dirs}`).filter(files => files.endsWith(".js"));
      
            for(const files of events) {
                const getFileName = require(`../${dir}/${dirs}/${files}`)
                client.on(getFileName.name, (...args) => getFileName.execute(...args, client))
                console.log(`[EVENTS]`.bold.red + ` Loading event :`.bold.white + ` ${getFileName.name}`.bold.red);
                if(!events) return console.log(`[EVENTS]`.bold.red + `Nothing event in : `.bold.yellow + `${files}`.bold.red)
            }
        })
    }
    loadEvents();
    console.log(`•----------•`.bold.black)
}
