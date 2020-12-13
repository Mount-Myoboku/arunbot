import Convict from 'convict';
import DotEnv from 'dotenv';

DotEnv.config();

const config = Convict({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development', 'test'], // todo: make these an enum
        default: 'development',
        env: 'NODE_ENV',
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 8000, // todo: add healthcheck server
        env: 'PORT',
        arg: 'port', // todo: what does this do?
    },
    discord: {
        bot: {
            token: {
                doc: 'The arun-bot token',
                format: String,
                default: 'fake_token',
                env: 'DISCORD_BOT_TOKEN',
            },
        },
        guild: {
            aruins: {
                id: {
                    doc: 'the_aruins guild id',
                    format: String,
                    default: '414597668086480898',
                },
            },
        },
    },
});

export const conf = config.getProperties();
