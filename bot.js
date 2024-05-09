import * as Discord from 'discord.js';

const client = new Discord.Client(

    {
        intents: [
            Discord.Intents.FLAGS.GUILDS,
            Discord.Intents.FLAGS.GUILD_MESSAGES // 用于接收服务器消息相关事件
        ]
    }
);

const discordBotToken = 'MTIzODA1MTkzMzczOTI4NjU0OA.GSQaJO.vdwL64J8HnOeb08OeuGj45lxAF8xnUjPMnQ8Hg';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  // 忽略自己的消息
  if (message.author.bot) return;

  // 如果消息以 '!' 开头,则认为是命令,不做回应
  if (message.content.startsWith('!')) return;

  // 回响用户发送的消息
  message.channel.send(`You said: ${message.content}`);
});

client.login(discordBotToken);