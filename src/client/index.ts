import * as Discord from "discord.js";
import conf from "../config";

const client = new Discord.Client();

client.on("ready", async () => {
    console.log("client is ready");

    const guild = await client.guilds.fetch(conf.discord.guild.aruins.id);
    console.log(`number of members: ${guild.members.cache.array().length}`);
});

client.on("message", (msg) => {
    console.log(msg);
    if (msg.content === "ping") {
        msg.reply("pong");
    }
});

client.on("error", (err) => {
    console.error("error", err);
});

client.on("shardError", (err) => {
    console.error("shardError", err);
});

client.on("rateLimit", (rateLimitInfo: Discord.RateLimitData) => {
    console.error("rate limit error", rateLimitInfo);
});

export default client;
