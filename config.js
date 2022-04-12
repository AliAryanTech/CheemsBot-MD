//═══════[© 2022 Xeon Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['18623298140'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['18623298140'] //another owner number
global.premium = ['18623298140'] //premium number
global.pengguna = '𝙏𝙚𝙭𝙖𝙨' //username
global.botnma = '𝙃𝙚𝙘𝙠𝙚𝙧 𝙏𝙚𝙭𝙖𝙨 ✨' //bot name
global.ownernma = 'Alι_Aryαɴ' //owner name
global.packname = '𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝙋𝙖𝙘𝙠 𝘽𝙮' //sticker package name
global.author = '𝙏𝙚𝙭𝙖𝙨 𝘽𝙤𝙩 ✨' //sticker author name
global.sessionName = 'session' //session name
global.prefix = ['$'] //prefix
global.sp = '❍' //design
global.mess = {
    success: '𝘿𝙤𝙣𝙚 ✅',
    admin: '𝙊𝙣𝙡𝙮 𝘼𝙙𝙢𝙞𝙣 𝙘𝙖𝙣 𝙪𝙨𝙚 𝙩𝙝𝙞𝙨 𝘾𝙤𝙢𝙢𝙖𝙣𝙙.',
    botAdmin: '𝘽𝙤𝙩 𝙉𝙚𝙚𝙙 𝙩𝙤 𝙗𝙚 𝘼𝙙𝙢𝙞𝙣, 𝙁𝙞𝙧𝙨𝙩!',
    owner: '𝙊𝙣𝙡𝙮 𝙊𝙬𝙣𝙚𝙧 𝙘𝙖𝙣 𝙪𝙨𝙚 𝙩𝙝𝙞𝙨 𝘾𝙤𝙢𝙢𝙖𝙣𝙙.',
    group: '𝙏𝙝𝙞𝙨 𝘾𝙤𝙢𝙢𝙖𝙣𝙙 𝙤𝙣𝙡𝙮 𝙬𝙤𝙧𝙠 𝙞𝙣 𝙂𝙧𝙤𝙪𝙥.',
    private: '𝙏𝙝𝙞𝙨 𝘾𝙤𝙢𝙢𝙖𝙣𝙙 𝙤𝙣𝙡𝙮 𝙬𝙤𝙧𝙠 𝙞𝙣 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 𝘾𝙝𝙖𝙩.',
    bot: '𝙏𝙝𝙞𝙨 𝘾𝙤𝙢𝙢𝙖𝙣𝙙 𝙞𝙨 𝙊𝙣𝙡𝙮 𝙛𝙤𝙧 𝘽𝙤𝙩.',
    wait: '𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜... 𝙋𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩!!',
    endLimit: '𝙔𝙤𝙪𝙧 𝙙𝙖𝙞𝙡𝙮 𝙡𝙞𝙢𝙞𝙩 𝙝𝙖𝙨 𝙀𝙭𝙥𝙞𝙧𝙚𝙙, 𝙏𝙝𝙚 𝙡𝙞𝙢𝙞𝙩 𝙬𝙞𝙡𝙡 𝙗𝙚 𝙧𝙚𝙨𝙚𝙩 𝙞𝙣 𝙚𝙫𝙚𝙧𝙮 12 𝙃𝙤𝙪𝙧𝙨.',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
