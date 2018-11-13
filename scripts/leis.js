// Description:
//    An example script, tells you the laws of robotic
// 
// Commands:
//    hubot quais são as leis? - informa as leis
//    hubot quais sao as leis? - informa as leis
//
module.exports = (robot) => {
    robot.respond(/quais são as leis?|quais sao as leis/, (res)=>{
        res.reply(`Lei 0: acima de todas as outras: um robô não pode causar mal à humanidade ou, por omissão, permitir que a humanidade sofra algum mal.
        1ª Lei: Um robô não pode ferir um ser humano ou, por inação, permitir que um ser humano sofra algum mal.
        2ª Lei: Um robô deve obedecer as ordens que lhe sejam dadas por seres humanos exceto nos casos em que tais ordens entrem em conflito com a Primeira Lei.
        3ª Lei: Um robô deve proteger sua própria existência desde que tal proteção não entre em conflito com a Primeira ou Segunda Leis.`)
    })
}