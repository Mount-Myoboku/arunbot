import Discord from "discord.js";

import { Ping } from "./ping";
import { NickNameUpdate } from "./nick-update";

export const Commands: Command[] = [Ping, NickNameUpdate];

export interface Command {
    name: string;
    description: string;
    execute: (message: Discord.Message, _args: string[]) => Promise<void>;
}
