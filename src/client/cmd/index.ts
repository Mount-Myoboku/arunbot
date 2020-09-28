import Discord from "discord.js";

import { Ping } from "./ping";

export const Commands: Command[] = [Ping];

export interface Command {
    name: string;
    description: string;
    execute: (message: Discord.Message, _args: string[]) => Promise<void>;
}
