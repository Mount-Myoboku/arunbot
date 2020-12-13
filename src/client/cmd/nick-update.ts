import Discord from 'discord.js';

export const NickNameUpdate = {
    name: 'updatenick',
    description: 'steps to update nick',
    execute: async (message: Discord.Message, args: string[]): Promise<void> => {
        if (!message.member) {
            console.log('not a member');
            return;
        }

        const member = message.member;
        await member.setNickname(args.join(' '));
    },
};
