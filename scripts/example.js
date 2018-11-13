// Description:
//    An example script, tells you the time. See below on how documentation works.
//    https://github.com/hubotio/hubot/blob/master/docs/scripting.md#documenting-scripts
// 
// Commands:
//    hubot what time is it? - Tells you the time
//    hubot what's the time? - Tells you the time
//    hubot let me pass here - Tells you shall not pass
//
module.exports = (robot) => {
  robot.respond(/(what time is it|what's the time)/gi, (res) => {
    const d = new Date()
    const t = `${d.getHours()}:${d.getMinutes()} and ${d.getSeconds()} seconds`
    res.reply(`It's ${t}`)
  })

  robot.respond(/(let me pass here)/, (res) => {
    res.reply("You Shall Not Pass!");
  })
}