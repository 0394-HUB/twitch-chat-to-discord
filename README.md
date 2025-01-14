# Twitch to Discord Bot

This bot listens to specified Twitch channels and forwards messages to a configured Discord channel.

## 🚀Features

- Listen to Twitch channels.
- Forward Twitch messages to Discord.
- Display messages in a clear format with timestamp, username, and channel.
- Easy to configure and customize.

## 🛠️Requirements

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## ⚙️Setup

### 1. Clone the repository

Clone this repository to your local machine:

```bash
git clone https://github.com/0394-HUB/twitch-chat-to-discord.git
cd twitch-chat-to-discord
```

## Install dependencies
Make sure you have Node.js and npm installed, and run the following command to install the required dependencies:

```bash
npm install
```

## Configure environment variables
Create a .env file in the root directory and add the following variables:
```dotenv
TWITCH_OAUTH_TOKEN=your-twitch-oauth-token
DISCORD_TOKEN=your-discord-bot-token
DISCORD_CHANNEL_ID=your-discord-channel-id
```

- TWITCH_OAUTH_TOKEN: You can obtain this token from the : https://twitchtokengenerator.com/
- DISCORD_TOKEN: This is the token for your Discord bot, which you can get by following the : https://discord.com/developers/applications
- DISCORD_CHANNEL_ID: The ID of the Discord channel where Twitch messages will be posted. Enable "Developer Mode" in Discord, right-click the channel, and copy its ID.

## ▶️Start the bot
Once the environment variables are set up, you can start the bot by running:
```bash
node index.js
```
This will launch the bot and begin listening to the specified Twitch channels. When a new message is sent in any of those channels, it will be forwarded to the configured Discord channel.

## ⚙️Customizing
You can modify the Twitch channels the bot listens to by editing the channels array in the index.js file. Add or remove Twitch channel names as needed:
const channels = ['CHANNEL_NAME_HERE', 'CHANNEL_NAME_HERE', 'CHANNEL_NAME_HERE'];


## 📊Example Output
When a message is posted on Twitch, it will be forwarded to the Discord channel with the following format:
```bash
15:30:45 | **c0d3x94** => c0d3x94 | Hello World!
```

## 🛠️Troubleshooting
- Bot does not connect to Discord: Ensure your DISCORD_TOKEN is correct and that the bot has the necessary permissions in your Discord server.
- Twitch messages are not being forwarded: Double-check that the TWITCH_OAUTH_TOKEN is valid and the Twitch channel names are correct.

