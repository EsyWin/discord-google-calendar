import { registerCommands, registerEvents } from './utils/registry';
import config from '../slappey.json';
import DiscordClient from './client/client';
import { GatewayIntentBits } from 'discord.js';
const client = new DiscordClient({ intents: [GatewayIntentBits.Guilds] });

(async () => {
  client.prefix = config.prefix || client.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.DISCORD_TOKEN);
})();
