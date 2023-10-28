const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("hello hell!")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready" , () => {
  client.user.setPresence({ activity: { name: `E-girls show`, type:'STREAMING' , url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }, status: "idle"});

})

client.on("message", message => {
  if (message.content === "hii") {
    message.channel.send("hello !!") 
  }

  if (message.content === "hru") {
    message.reply('mai sexy 😳 , wby')
  }
  
   if (message.content === "Hru") {
    message.reply('mai sexy 😳 , wby')
  }

   if (message.content === "hmm") {
    message.reply('kya hmm, aja haveli pe 😳 ')
  }

  if (message.content === "kkrh") {
    message.reply('haveli pe ajao, batati hu 😳')
  }

  if (message.content === "Hmm") {
    message.reply('kya hmm, aja haveli pe 😳 ')
  }

  if (message.content === "hm") {
    message.reply('kya hmm, aja haveli pe 😳 ')
  }

   if (message.content === "aur kkrh") {
    message.reply('haveli pe ajao, batati hu 😳')
  }


  if (message.content === "hi") {
    message.reply("hey") 
  }

  if (message.content === "fuck you") {
    message.reply("No, your mom") 
  }

  if (message.content === "Fuck you") {
    message.reply("No, your mom") 
  }

  if (message.content === "fuck") {
    message.reply("whom? me..? 😳") 
  }

   if (message.content === "Fuck") {
    message.reply("whom? me..? 😳") 
  }

  
  if (message.content === "hello") {
    message.channel.send("hello wassup") 
  }
  
  if (message.content === "pog") {
    message.channel.send("https://media.discordapp.net/attachments/824584896433356831/845923561897197578/793491689855647754.png?width=26&height=38") 
  }
  
  if (message.content === "kekw") {
    message.channel.send("https://images-ext-2.discordapp.net/external/LheNGy_s5pjx2SOPug0yXbMTQzyNcrunfpPzosdNQcc/%3Fv%3D1%26size%3D64/https/cdn.discordapp.com/emojis/792777406876090398.gif?width=33&height=33") 
  }
  
   if (message.content === "!!!invite") {
    message.channel.send("https://discord.com/api/oauth2/authorize?client_id=845173707746967552&permissions=8&scope=bot") 
  }

  });

  module.exports = {
    name: 'avatar',
    aliases: ['icon', 'logo'],
    description: 'display the image and url of users\' avatar',
    execute(client, api, config, message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
        }

        module.exports = {
    name: 'args-info',
    description: 'Information about the arguments provided',
    args: true,
    usage: '<arguments>',
    execute(client, api, config, message, args) {
        if (args[0] === 'foo') {
            return message.channel.send('bar');
        }
        message.channel.send(`Arguments: ${args}`);
        message.channel.send(`First Argument: ${args[0]}`);
    },
};

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL}`;
        });

        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
        message.channel.send(avatarList);
    },
};

module.exports = {
    name: '8ball',
    description: 'generates a 8ball game for a user',
    usage: '[question]',
    execute(client, kayn, REGIONS, config, message, args, con, guilds) {
        if(!args[0]) {
            message.reply('Please ask me a question.');
          }
          else {
            let eightball = [
            'It is certain.',
            'It is decidedly so.',
            'Without a doubt.',
            'Yes definitely.',
            'You may rely on it.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good.',
            'Yes.',
            'Signs point to yes.',
            'Reply hazy try again.',
            'Ask again later.',
            'Better not tell you now.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            'Don\'t count on it.',
            'My reply is no.',
            'My sources say no.',
            'Outlook not so good.',
            'Very doubtful.',
            'No way.',
            'Maybe',
            'The answer is hiding inside you',
            'No.',
            'Depends on the mood of the CS god',
            'Hang on',
            'It\'s over',
            'It\'s just the beginning',
            'Good Luck',
            ];
            let index = (Math.floor(Math.random() * Math.floor(eightball.length)));
            message.reply(eightball[index]);
          }
    },
};

client.login(process.env.token)


