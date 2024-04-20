const { Client } = require("discord.js");

const bot = new Client({ intents: ["Guilds"] });
console.log("Connexion au bot...");
bot.login("YOUR TOKEN")
    .then(() => console.log("Connecté au bot !"))
    .catch((error) => console.log("Impossible de se connecter au bot - " + error));

bot.on("ready", async () => {

    await bot.application.commands.set([
        {
            name: "link",
            description: "Invitation Link"
        }
    ]);

    console.log("Le bot est prêt !");
});

bot.on("interactionCreate", (interaction) => {

    if (!interaction.isCommand()) return;

    if (interaction.commandName === "link")
        interaction.reply("YOUR DISCORD SERVER LINK");
});
