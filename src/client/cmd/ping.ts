import Discord from 'discord.js';

export const Ping = {
    name: 'ping',
    description: 'ping pong',
    execute: async (message: Discord.Message, _args: string[]): Promise<void> => {
        await message.channel.send('pong');
    },
};
