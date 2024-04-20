const { Client } = require("discord.js");

const bot = new Client({ intents: ["Guilds"] });
console.log("Connexion au bot...");
bot.login("MTIzMDU1NjMyNzU1NDg0MjY5NA.G6l7G_.1gpsz7iUNV5JstTqn6aR_rgOWexeKnzstZ_6JA")
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
        interaction.reply("https://discord.gg/jtybB54jkh");
});