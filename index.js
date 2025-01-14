require('dotenv').config();

const tmi = require('tmi.js');
const { Client, GatewayIntentBits } = require('discord.js');

const channels = ['CHANNEL_NAME_HERE', 'CHANNEL_NAME_HERE', 'CHANNEL_NAME_HERE'];
const twitchClient = new tmi.Client({
  options: { debug: true },
  identity: {
    username: 'YOUR_TWITCH_BOT_NAME',
    password: process.env.TWITCH_OAUTH_TOKEN
  },
  channels: channels
});


const discordClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const discordChannelId = process.env.DISCORD_CHANNEL_ID;

discordClient.once('ready', () => {
  console.log('Discord-Bot is logged in!');
});

discordClient.login(process.env.DISCORD_TOKEN).catch(console.error);
twitchClient.on('message', (channel, tags, message, self) => {
  if (self) return;
  const data = {
    channel: channel.replace('#', ''),
    username: tags['display-name'],
    message: message,
    time: new Date().toLocaleTimeString()
  };

  const discordChannel = discordClient.channels.cache.get(discordChannelId);
  if (discordChannel) {
    discordChannel.send(`\`${data.time}\` | \`**${data.username}**\` => \`${data.channel}\` | \`${data.message}\``);
  } else {
    console.log(`Channel with ID ${discordChannelId} was not found!`);
  }
});

twitchClient.connect().catch(console.error);
