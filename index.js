
const { Client, RichEmbed } = require('discord.js');
const client = new Client();
// the ready event
client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity("Statistics", { type: "WATCHING"});
});
// ping command
client.on('message', msg => {
  if (msg.content === '!ping') {
    // msg.reply('pong');
    msg.channel.send(`Pong! API Latency is ${Math.round(client.ping)}ms`)
  }
});




client.on('message', msg => {
    if(msg.author.bot) return;
    if(!msg.content.startsWith('!poll')) return;

    const args = msg.content.slice('!poll'.length).trim().split(', ');
    let question = args.shift();
    let options = args

    let count = options.length
       switch (count) {
         case 2:
           options = `:one:   ${args[0]} \n :two:   ${args[1]}`
           break;

          case 3:
            options =  `:one:   ${args[0]} \n :two:   ${args[1]} \n :three:   ${args[2]}`
            break;

          case 4 :
            options =  `:one:   ${args[0]} \n :two:   ${args[1]} \n :three:   ${args[2]} \n :four:    ${args[3]}`  
            break;

          case 5 :
            options =  `:one:   ${args[0]} \n :two:   ${args[1]} \n :three:   ${args[2]} \n :four:    ${args[3]} \n :five: ${args[4]}`
            break;

          case 6 :
            options =  `:one:   ${args[0]} \n :two:   ${args[1]} \n :three:   ${args[2]} \n :four:    ${args[3]} \n :five: ${args[4]} \n :six: ${args[5]}`
            break;
          
          case 7: 
            options = options =  `:one:   ${args[0]} \n :two:   ${args[1]} \n :three:   ${args[2]} \n :four:    ${args[3]} \n :five:    ${args[4]} \n   :six:     ${args[5]} \n :seven:   ${args[6]}`
            break;
          case 8:
            options = options =  `:one:   ${args[0]} \n :two:   ${args[1]} \n :three:   ${args[2]} \n :four:    ${args[3]} \n :five:    ${args[4]} \n   :six:   ${args[5]} \n :seven:   ${args[6]} \n :eight:   ${args[7]}`
            break;
          case 9:
            options = options =  `:one:   ${args[0]} \n :two:   ${args[1]} \n :three:   ${args[2]} \n :four:    ${args[3]} \n :five:    ${args[4]} \n   :six:   ${args[5]} \n :seven:   ${args[6]} \n :eight:   ${args[7]} \n :nine:    ${args[8]}`
        default:
            msg.channel.send('You can\'t have less than *2* options nor more than *9*');
            break;
       }
   
    const embed = new RichEmbed()
    .setTitle(question)
    .setColor('#4dbedf')
    .setDescription(options)
    .setFooter('React to vote!')

    msg.channel.send(embed)
    .then(message => {
      let reactions = ["\u0031\u20E3","\u0032\u20E3","\u0033\u20E3","\u0034\u20E3","\u0035\u20E3", "\u0036\u20E3","\u0037\u20E3","\u0038\u20E3","\u0039\u20E3"] 
      for(let i = 0; i < count; i++){
        async function react(){
          await message.react(reactions[i])
        }
        react();
      }
    })
    .catch(e => {
      console.error(e);
    })

    msg.delete({timeout: 1000})

    })





client.login('NTM3Njg5MjU3MDc1MDE1Njgw.DysrQg.JpGVDUiqh6hWPrArGtXHZ1Z-gsA');