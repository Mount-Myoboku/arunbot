import Discord from "discord.js";

import { NickNameUpdate } from "./nick-update";
import { Ping } from "./ping";

export const Commands: Command[] = [Ping, NickNameUpdate];

export interface Command {
    name: string;
    description: string;
    execute: (message: Discord.Message, _args: string[]) => Promise<void>;
}
