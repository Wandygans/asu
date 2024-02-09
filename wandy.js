require('./config')
const { default: jadiBot,
useMultiFileAuthState,
DisconnectReason,
fetchLatestBaileysVersion,
makeInMemoryStore,
makeCacheableSignalKeyStore,
jidDecode,
proto,
downloadContentFromMessage,
generateForwardMessageContent,
getAggregateVotesInPollMessage,
BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent,
generateWAMessage, 
prepareWAMessageMedia, 
areJidsSameUser, 
getContentType
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const https = require('https');
const mailer = require('nodemailer')
const BodyForm = require('form-data')
const { fromBuffer } = require('file-type')
const fetch = require("node-fetch")
const { wawan, conns } = require('./jadibot')
const chalk = require("chalk");
const cheerio = require('cheerio')
const ffmpeg = require("fluent-ffmpeg")
const axios = require('axios')
const qrcode = require('qrcode')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const Math_js = require('mathjs')
const FileType = require('file-type')
const jimp = require('jimp')
const ggs = require('google-it')
const os = require('os')
const kbbi = require('kbbi-scraper')
const path = require("path")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { exec, spawn, execSync } = require("child_process");
const speed = require('performance-now')
const moment = require('moment-timezone')
const translate = require('@vitalets/google-translate-api')
const PhoneNumber = require('awesome-phonenumber') 
const { Configuration, OpenAIApi } = require("openai");

//━━━━━━━━━━━━━━━[ MODULE ]━━━━━━━━━━━━━━━━━//

const hitnya = global.db.data.visitor
const { tanggal, wib, wita, wit, formatp } = require('./lib/function')
const { linkwa,
quotesAnime,
katabijak,
wikimedia,
gempa,
pinterest,
wiki,
googleImage,
lirikLagu,
wallanime,
sfilesearch,
ttp,
style,
ringtone,
trendtwit,
githubstalk } = require('./lib/scraper')

//━━━━━━━━━━━━━━━[ CONFIG ]━━━━━━━━━━━━━━━━━//

hit_today = []
global.hit = {}

//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━━━//

module.exports = conn = async (conn, m, chatUpdate, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.includes(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushName = m.pushName || "NPC";
const nomorBot = await conn.decodeJid(conn.user.id);
const isCreator = [nomorBot, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == nomorBot ? true : false;
const text = q = args.join(" ")
const arg = budy.trim().substring(budy.indexOf(" ") + 1);
const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
const dari = m.chat;
const from = m.key.remoteJid
const kirim = m.reply;
const sender = m.sender
const mek = chatUpdate.messages[0];
const quoted = m.quoted ? m.quoted : m
const qmsg = (quoted.msg || quoted)
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;
hit_today.push(command)
const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text);
};
	
//━━━━━━━━━━━━━━━[ GROUP ]━━━━━━━━━━━━━━━━━//

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(nomorBot) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"        
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false

//━━━━━━━━━━━━━━━[ TAMBAHAN ]━━━━━━━━━━━━━━━━━//



//━━━━━━━━━━━━━━━[ APA AJA ]━━━━━━━━━━━━━━━━━//

if (db.data.settings.bot.autoread){
async function read() {
const readnya = {
remoteJid: m.key.remoteJid,
id: m.key.id,
participant: m.key.participant
}
conn.readMessages([readnya])
}
read()
}

if (db.data.settings.bot.autotyping){
conn.sendPresenceUpdate("composing", m.chat)
}

//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━━━//

conn.resize = async(buffer, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
var baper = await jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
resolve(ab)
})
}

jsonformat = (string) => {
return JSON.stringify(string, null, 2)
}

if (isCmd && !m.isGroup) {
console.log(chalk.black(chalk.bgWhite("[ JEJAK ]")), color(argsLog, "turquoise"), chalk.magenta("Dari"), chalk.green(pushName), chalk.yellow(`[ ${sender.replace("@s.whatsapp.net", "")} ]`));
} else if (isCmd && m.isGroup) {
console.log(
chalk.black(chalk.bgWhite("[ JEJAK ]")),
color(argsLog, "turquoise"),
chalk.magenta("Dari"),
chalk.green(pushName),
chalk.yellow(`[ ${sender.replace("@s.whatsapp.net", "")} ]`),
chalk.blueBright("Di Grup"),
chalk.green(groupName)
);
}

let ucapan = "Selamat "+ moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
let jumlahCommand = require('util').inspect(hit.all)
let stamp = speed()
let sped = speed() - stamp
try {
let bio_nya =  await conn.fetchStatus(m.sender)
bio = `${bio_nya.status}`
} catch {
bio = `No bio`
}
	
function runtime(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

const wibT = wib()
const witaT = wita()
const witT = wit()
const tanggalT = tanggal()

const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = db.data.users[m.sender]
let limitUser = global.limit
if (typeof user !== 'object') db.data.users[m.sender] = {}
if (user) {
if (!('registered' in user)) user.registered = false
if (!('nama' in user)) user.nama = ''
if (!('token' in user)) user.token = ''
if (!('email' in user)) user.email = ''
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!('money' in user)) user.money= 0
if (!('exp' in user)) user.exp = 0
if (!('level' in user)) user.level = 0
if (!('autolevelup' in user)) user.autolevelup = true
if (!('rename' in user)) user.rename = 3
if (!('lastclaim' in user)) user.lastclaim = 0
if (!('expired' in user)) user.expired = 0
if (!('atm' in user)) user.atm = 0
if (!('role' in user)) user.role = ''
if (!('lastrob' in user)) user.lastrob = 0
if (!('tertangkap' in user)) user.tertangkap = 0
if (!('Banneduser' in user)) user.Banneduser = false
if (!('BannedReason' in user)) user.BannedReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
if (!isNumber(user.ojekk)) user.ojekk = 0
if (!isNumber(user.lastngojek)) user.lastngojek = 0
if (!isNumber(user.antispam)) user.antispam = 0
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
nama: '',
email: '',
registered: false,
token: '',
limit: limitUser,
money: 0,
exp: 0,
level: 0,
autolevelup: true,
rename: 3,
lastclaim: 0,
antispam: 0,
atm: 0,
role: '',
expired: 0,
lastrob: 0,
tertangkap: 0,
Banneduser: false,
BannedReason: '',
lastngojek: 0,
ojekk: 0,
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('simi' in chats)) chats.simi = false
if (!('antitoxic' in chats)) chats.antitoxic = true
if (!('welcome' in chats)) chats.welcome = true
if (!('antilink' in chats)) chats.antilink = false
if (!('nsfw' in chats)) chats.nsfw = false
if (!('antiviewonce' in chats)) chats.antiviewonce = true
if (!('gcupdate' in chats)) chats.gcupdate = true
} else global.db.data.chats[m.chat] = {
simi: false,
antilink: false,
nsfw: false,
antitoxic: true,
welcome: true,
antiviewonce: true,
gcupdate: true,
}

const commandnya= hitnya.count

if (isCmd) {
hitnya.count += 1
}

const limitorang = db.data.users[m.sender].limit
const registered = db.data.users[m.sender].registered

function getRandom(ext){
return `${Math.floor(Math.random() * 10000)}${ext}`
}

function randomkontol(){
gambar = [
{'result': 'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg'},
{'result': 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg'},
{'result': 'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg'},
{'result': 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg'},
{'result': 'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg'},
{'result': 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg'},
{'result': 'https://telegra.ph/file/55e5af5f33fbd57104187.jpg'},
{'result': 'https://telegra.ph/file/af236598456b95884bd15.jpg'},
{'result': 'https://telegra.ph/file/de92ed4a729887ffc974c.jpg'},
{'result': 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'}
]
randomnya = gambar[Math.floor(Math.random() * gambar.length)]
resultnya = randomnya.result
return resultnya
}

async function getBuffer(url, options){
try {
options ? options : {}
const res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (err) {
return err
}
}

function reply(text){
conn.sendMessage(m.chat, { text: text }, { quoted: m })
}

function getToken(){
data = Math.random().toString(9).substr(2, 5);
return data
}

const nama = db.data.users[m.sender].nama
async function email(email, text, namanya){
try {
var transporter = await mailer.createTransport({
service: 'gmail',
auth: {
user: 'zerobothelp@gmail.com',
pass: 'bxsseqwwrryqognf'
}
});


var mailOptions = {
from: 'zerobothelp@gmail.com',
to: email,
subject: 'ZERO-BOT VERIFICATION',
html: `<!DOCTYPE html>
<html>
<head>
<title>Zero-Bot verification</title>
<style>
body {
background-color: white;
color: black;
font-weight: bold;
font-size: 30px;
text-align: left,
padding: 50px;
}
</style>
</head>
<h1>
Selamat datang di WhatsApp bot Zero-Bot
</h1>
<p> Halo ${namanya} 👋 </p>
<p> </p>
<p> Kode verifikasi anda adalah: </p>
<h2> ${text} </h2>
<p>  </p>
<p> </p>
<p> Note: Token expired dalam 1 menit! </p>
</html>
`
};

await transporter.sendMail(mailOptions)
console.log('Done')
return true
} catch (e) {
error(util.format(e), m, m.chat)
console.log(e)
}
}

const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})

let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })

async function ppwa(conn, m) { 
let font = await jimp.loadFont('./name.fnt'), 
mask = await jimp.read('https://i.imgur.com/552kzaW.png'), 
welcome = await jimp.read(randomkontol()),  
avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')), 
status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected' 
  
await avatar.resize(460, 460) 
await mask.resize(460, 460) 
await avatar.mask(mask) 
await welcome.resize(welcome.getWidth(), welcome.getHeight()) 

await welcome.print(font, 550, 180, 'Name:') 
await welcome.print(font, 650, 255, pushName.slice(0, 25)) 
await welcome.print(font, 550, 340, 'About:') 
await welcome.print(font, 650, 415, status) 
await welcome.print(font, 550, 500, 'Number:') 
await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')) 
return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png') 
}

async function verifikasi(pengirim, nama, token, opsional) {
datot = `「 *VERIFIKASI* 」

Halo, ${nama}
Kode verifikasi anda adalah:

*${token}*
`
await conn.sendMessage(pengirim, {text: datot }, opsional)
}

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 
 
var bioorg = `-`
if (registered == true) {
var bioorg = bio;
}
var limitnya = `-`
if (registered == true) {
var limitnya = `${limitorang}`
}
var login = `❌`
if (registered == true) {
var login = `✅`
}
var namaorang = m.pushName
if (registered == true) {
var namaorang = nama
}

function getCase(cases){
let data = fs.readFileSync("./wandy.js")
try{
return "case "+`'${cases}'`+data.toString().split("case \""+cases+"\"")[1].split("break")[0]+"break"
} catch {
return "case "+`'${cases}'`+data.toString().split("case  \""+cases+"\"")[1].split("break")[0]+"break"
}
}

const totalFitur = () =>{
var mytext = fs.readFileSync("./wandy.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

anuy = `
Hello ${namaorang}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly

──⭓ *BOT INFORMATION*

👑 *Creator*: ${namaowner}
🤖 *Bot Name*: ${namabot}
📍 *Prefix*: 「 Multi Prefix 」
🌝 *Hit Today*: ${hit_today.length}
🌎 *Hit All*: ${commandnya}
📶 *Speed*: ${sped.toFixed(4)} _Second_
🌐 *Website*: ${website}
📌 *Total fitur*: ${totalFitur()}
⏰ *Runtime*:
${runtime(process.uptime())}

──⭓ *DATE INFORMATION*

📆 *Day*: ${week} ${weton}
📆 *Date*: ${tanggalT}

──⭓ *TIME INFORMATION*

⏰ *Time*: ${wibT} *WIB*
⏰ *Time*: ${witaT} *WITA*
⏰ *Time*: ${witT} *WIT*

──⭓ *USER INFORMATION*

▢ *Name*: ${pushName}
▢ *Login*: ${login}
▢ *Bio*: ${bio}
▢ *Limit*: ${limitnya}

*</> Main Menu </>*
⭔ ${prefix}menu
⭔ ${prefix}q
⭔ ${prefix}sc
⭔ ${prefix}delete
⭔ ${prefix}donasi
⭔ ${prefix}owner
⭔ ${prefix}fetch
⭔ ${prefix}ping
⭔ ${prefix}report
⭔ ${prefix}afk
⭔ ${prefix}readviewonce 
⭔ ${prefix}listpc
⭔ ${prefix}listgrup
⭔ ${prefix}kalkulator
⭔ ${prefix}cariteman
⭔ ${prefix}rules
⭔ ${prefix}jadibot
⭔ ${prefix}listjadibot
⭔ ${prefix}infochat
⭔ ${prefix}creategc

*</> Sticker Menu </>*
⭔ ${prefix}sticker
⭔ ${prefix}ttp
⭔ ${prefix}toimg
⭔ ${prefix}smeme
⭔ ${prefix}emojimix
⭔ ${prefix}semoji

*</> Search Menu </>*
⭔ ${prefix}google
⭔ ${prefix}googleimage
⭔ ${prefix}pinterest
⭔ ${prefix}trendtwit
⭔ ${prefix}wikimedia
⭔ ${prefix}wikipedia
⭔ ${prefix}kbbi

*</> Tools Menu </>*
⭔ ${prefix}githubstalk
⭔ ${prefix}styletext
⭔ ${prefix}trendtwit
⭔ ${prefix}infogempa
⭔ ${prefix}bass
⭔ ${prefix}blown
⭔ ${prefix}deep
⭔ ${prefix}earrape
⭔ ${prefix}fast
⭔ ${prefix}fat
⭔ ${prefix}nightcore
⭔ ${prefix}reverse
⭔ ${prefix}robot
⭔ ${prefix}slow
⭔ ${prefix}tupai
⭔ ${prefix}tinyurl
⭔ ${prefix}qrcode
⭔ ${prefix}readmore
⭔ ${prefix}ssweb
⭔ ${prefix}jarak
⭔ ${prefix}translate
⭔ ${prefix}telegraph
⭔ ${prefix}ebinary
⭔ ${prefix}dbinary

*</> Money Menu </>*
⭔ ${prefix}myinfo

*</> Random Menu </>*
⭔ ${prefix}katabucin
⭔ ${prefix}ppcouple
⭔ ${prefix}darkjoke
⭔ ${prefix}quotes
⭔ ${prefix}quotesanime
⭔ ${prefix}katabijak
⭔ ${prefix}wallpaperml
⭔ ${prefix}coffe
⭔ ${prefix}joke

*</> Game Menu </>*
⭔ ${prefix}namaninja
⭔ ${prefix}bahasapurba
⭔ ${prefix}halah
⭔ ${prefix}hilih
⭔ ${prefix}huluh
⭔ ${prefix}heleh
⭔ ${prefix}holoh
⭔ ${prefix}kerangajaib
⭔ ${prefix}truth
⭔ ${prefix}dare
⭔ ${prefix}apakah
⭔ ${prefix}bisakah
⭔ ${prefix}kapankah
⭔ ${prefix}bagaimanakah
⭔ ${prefix}cekme
⭔ ${prefix}cekmati
⭔ ${prefix}sangecek
⭔ ${prefix}persengay
⭔ ${prefix}persenganteng
⭔ ${prefix}persencantik
⭔ ${prefix}jadian

*</> Downloader Menu </>*
⭔ ${prefix}gitclone

*</> Group Menu </>*
⭔ ${prefix}setsubject
⭔ ${prefix}getpp
⭔ ${prefix}antitoxic
⭔ ${prefix}getname
⭔ ${prefix}tagall
⭔ ${prefix}hidetag
⭔ ${prefix}add
⭔ ${prefix}promote
⭔ ${prefix}demote
⭔ ${prefix}tagme
⭔ ${prefix}listadmin
⭔ ${prefix}group
⭔ ${prefix}setdesc
⭔ ${prefix}linkgroup
⭔ ${prefix}ephemeral
⭔ ${prefix}editinfo
⭔ ${prefix}setppgrup
⭔ ${prefix}listonline
⭔ ${prefix}revoke
⭔ ${prefix}react
⭔ ${prefix}cekmember
⭔ ${prefix}groupupdateinfo
⭔ ${prefix}autowelcome
⭔ ${prefix}antiviewonce

*</> Primbon Menu </>*
⭔ ${prefix}artimimpi
⭔ ${prefix}ramalanpekerjaan
⭔ ${prefix}artinama
⭔ ${prefix}kecocokannama
⭔ ${prefix}kecocokanpasangan
⭔ ${prefix}jadianpernikahan
⭔ ${prefix}ramalancinta
⭔ ${prefix}ramalanjodohbali
⭔ ${prefix}suamiistri
⭔ ${prefix}sifatusaha
⭔ ${prefix}rezeki
⭔ ${prefix}pekerjaan
⭔ ${prefix}potensipenyakit
⭔ ${prefix}artitarot
⭔ ${prefix}fengshui
⭔ ${prefix}harisangar
⭔ ${prefix}harinaas
⭔ ${prefix}nagahari
⭔ ${prefix}arahrezeki
⭔ ${prefix}peruntungan
⭔ ${prefix}wetonjawa
⭔ ${prefix}karakter
⭔ ${prefix}keberuntungan
⭔ ${prefix}memancing
⭔ ${prefix}masasubur
⭔ ${prefix}zodiak
⭔ ${prefix}shio

*</> Owner Menu </>*
⭔ ${prefix}nano
⭔ ${prefix}autoread
⭔ ${prefix}autotyping
⭔ ${prefix}broadcast 
⭔ ${prefix}setppbot
⭔ ${prefix}setbiobot
⭔ ${prefix}setnamebot
⭔ ${prefix}leavegc
⭔ ${prefix}eval
⭔ ${prefix}join
⭔ ${prefix}getfile
⭔ ${prefix}ban
⭔ ${prefix}unban
⭔ ${prefix}getcase
⭔ ${prefix}delsampah
⭔ ${prefix}self
⭔ ${prefix}public 
⭔ >
⭔ $


*_Special thanks for user👋_*
`

global.error = async function error(text, quoted, chatnya){
nganu = '```'
hehe = util.format(text)
errornya = `「 *TERJADI KESALAHAN* 」\n\n${nganu}${hehe}${nganu}`
await conn.sendMessage(chatnya, { text: errornya }, { quoted })
mmm = `「 *TERJADI KESALAHAN* 」

⭔ *Name*: ${m.pushName}
⭔ *Command*: ${command}
⭔ *Error*:

${nganu}${hehe}${nganu}
`
await conn.sendMessage(`6282125039170@s.whatsapp.net`, { text: mmm})
}

const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
conn.sendTextWithMentions(m.chat,`「 *SEDANG AFK* 」\n\n📛 *Name* : ${nama}\n👤 *User* : @${jid.split("@")[0]}\n⏰ *Selama* : ${clockString(new Date - afkTime)}\n✍️ *Alasan* : ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}`, m)
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
conn.sendTextWithMentions(m.chat, `「 *BERHENTI AFK* 」\n\n📛 *Name* : ${nama}\n👤 *User* : @${m.sender.split("@")[0]}\n⏰ *Selama* : ${clockString(new Date - user.afkTime)}\n✍️ *Setelah* : ${user.afkReason ? '' + user.afkReason : ''}`, m)
user.afkTime = -1
user.afkReason = ''
 }
 
function pickRandom(list){
return list[Math.floor(list.length * Math.random())]
}

async function fetchJson(url, options){
try {
options ? options : {}
const res = await axios({
method: 'GET',
url: url,
headers: {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
},
...options
})
return res.data
} catch (err) {
return err
}
}

async function namaninja(teks){
let hasil = teks.replace(/[a-zA-Z]/gi, v => {
switch (v.toLowerCase()) {
case 'a': return 'ka';
case 'b': return 'tu';
case 'c': return 'mi';
case 'd': return 'te';
case 'e': return 'ku';
case 'f': return 'lu';
case 'g': return 'ji';
case 'h': return 'ri';
case 'i': return 'ki';
case 'j': return 'zu';
case 'k': return 'me';
case 'l': return 'ta';
case 'm': return 'rin';
case 'n': return 'to';
case 'o': return 'mo';
case 'p': return 'no';
case 'q': return 'ke';
case 'r': return 'shi';
case 's': return 'ari';
case 't': return 'ci';
case 'u': return 'do';
case 'v': return 'ru';
case 'w': return 'mei';
case 'x': return 'na';
case 'y': return 'fu';
case 'z': return 'zi';
}
});
return hasil;
}

async function purba(value){
let hasil = value.replace(/[aiueo]/gi, v=> {
switch(v.toLowerCase()){
case 'a': return 'ove';
case 'i': return 'ove';
case 'u': return 'ove';
case 'e': return 'ove';
case 'o': return 'ove';
}
});
return hasil;
}

function TelegraPh (Path) {
return new Promise (async (resolve, reject) => {
if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
try {
const form = new BodyForm();
form.append("file", fs.createReadStream(Path))
const data = await  axios({
url: "https://telegra.ph/upload",
method: "POST",
headers: {
...form.getHeaders()
},
data: form
})
return resolve("https://telegra.ph" + data.data[0].src)
} catch (err) {
return reject(new Error(String(err)))
}
})
}

try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (e){
ppuser = './media/avatar_contact.png'
}
const ppnyauser = await getBuffer(ppuser)
const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: 'tes',jpegThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxjI17evEyt_JBc2t73PJ7VMvGcJDFW3jlw&usqp=CAU'}}}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: 'Tes',jpegThumbnail: await getBuffer('./media/own.jpeg')}}}
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":'Test', "h": 'Zero-Bot', 'seconds': '359996400', 'gifPlayback': 'true', 'caption': `WandyGans`, 'jpegThumbnail': await getBuffer('./media/own.jpeg')}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${nama}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${nama},;;;\nFN:${nama},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/own.jpeg')}}}
const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://pps.whatsapp.net/v/t61.24694-24/408149001_1569135900557984_8682654391849883594_n.jpg","mimetype": "image/jpeg","caption": `*_${ucapanWaktu}, ${nama}_ 👋*`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": ppnyauser,"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

function isToxic(budy) {
for (let i = 0; i < toxic.length; i++) {
const regex = new RegExp(`\\b${toxic[i]}\\b`, 'gi');
if (regex.test(budy)) {
return true;
}
}
return false;
}

if (db.data.chats[m.chat].antitoxic && budy && isToxic(budy) && isBotAdmins) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: sender } })
waow = `───────────────────
◪ *ANTITOXIC*
│
└ ❏ Nama : *${nama}*
    ❏ Nomor : *${sender.replace('@s.whatsapp.net', '')}*
    ❏ Text : *${budy}*
    ❏ Waktu : *${wib()}*
    ❏ Tanggal : *${tanggal()}*
    
*Note*: Pesan toxic anda sudah di delete!
───────────────────`
await conn.sendTextWithMentions(m.chat, waow, m)
}

if (db.data.chats[m.chat].antiviewonce) {
if (m.mtype == 'viewOnceMessageV2') {
let msg = m.message.viewOnceMessageV2.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
wasu = msg[type].caption
data = `「 *ANTI VIEWONCE MESSAGE* 」
      
📛 *Name* : ${nama}
👤 *User* : @${m.sender.split("@")[0]}
⏰ *Clock* : ${wib()} WIB
✍️ *MessageType* : viewOnceMessageV2
💬 *Caption* : ${wasu ? '' + wasu : 'No caption'}
`
data1 = data.trim()
await conn.sendTextWithMentions(m.chat, data1, m)
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return await conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return await conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
}

if (!db.data.visitor.count === NaN){
db.data.visitor.count = 0
}

async function dafontSearch(query) {
const base = 'https://www.dafont.com'
const res = await axios.get(`${base}/search.php?q=${query}`)
const $ = cheerio.load(res.data)
const hasil = []
const total = $('div.dffont2').text().replace(` fonts on DaFont for ${query}`, '') 
$('div').find('div.container > div > div.preview').each(function(a, b) {
$('div').find('div.container > div > div.lv1left.dfbg').each(function(c, d) { 
$('div').find('div.container > div > div.lv1right.dfbg').each(function(e, f) { 
let link = `${base}/` + $(b).find('a').attr('href')
let judul = $(d).text() 
let style = $(f).text() 
hasil.push({ judul, style, link, total}) 
}) 
}) 
}) 
return hasil
}

//━━━━━━━━━━━━━━━[ COMMAND ]━━━━━━━━━━━━━━━━━//
 
switch (command) {
case 'ebinary':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Indonesia`)
let { eBinary } = require('./lib/binary')
tekss = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
eb = await eBinary(tekss)
m.reply(eb)
break
case 'dbinary':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Indonesia`)
let { dBinary } = require('./lib/binary')
tekss = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
db = await dBinary(tekss)
m.reply(db)
break
case 'artinama':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Wandy`)
resultt = await primbon.arti_nama(text)
m.reply(`Hasil pencarian artinama untuk: ${text}\n\n${resultt.message.arti}`)
break
case 'artimimpi':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} jatuh`)
resultt = await primbon.tafsir_mimpi(text)
m.reply(`Hasil pencarian tafsir untuk: ${text}\n\n${resultt.message.arti}`)
break
case 'pekerjaan': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'potensipenyakit': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
teksnyaa = anu.message.analisa;
analisa = teksnyaa.replace("(adsbygoogle = window.adsbygoogle || []).push({});\n\n\n\n\n", "")
m.reply(`⭔ *Analisa :* ${analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'artitarot': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendMessage(m.chat, { image: { url: anu.message.image },  caption: `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}` })
}
break
case 'fengshui': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Wandy, 1, 2009\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
teksnyaa = anu.message.karakter
analisa = teksnyaa.replace("\n\n\n\n\n\n\n     (adsbygoogle = window.adsbygoogle || []).push({});", "")
m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${analisa}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
break
case 'harisangar': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
teksnyaa = anu.message.tgl_lahir;
analisa = teksnyaa.replace("\n\n\n\n\n     (adsbygoogle = window.adsbygoogle || []).push({});\n\n\n", "")
m.reply(`⭔ *Lahir :* ${analisa}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'harinaas': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`)
}
break
case 'nagahari': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
teksnyaa = anu.message.hari_lahir;
analisa = teksnyaa.replace("\n\n\n\n\n     (adsbygoogle = window.adsbygoogle || []).push({});\n\n\n", "")
m.reply(`⭔ *Hari Lahir :* ${analisa}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'arahrezeki': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'peruntungan': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Wandy, 18, 9, 2009, 2023\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': case 'wetonjawa': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
break
case 'karakter': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case 'keberuntungan': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Wandy, 18, 9, 2009`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`)
}
break
case 'memancing': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'masasubur': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
teksnyaa = anu.message.result;
analisa = teksnyaa.replace("(adsbygoogle = window.adsbygoogle || []).push({});\n\n\n\n\n", "")
m.reply(`⭔ *Hasil :* ${analisa}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'zodiak': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 2009, 9, 18`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
teksnyaa = anu.message.zodiak;
analisa = teksnyaa.replace("\n\n\n\n\n     (adsbygoogle = window.adsbygoogle || []).push({});\n", "")
m.reply(`⭔ *Zodiak :* ${analisa}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'shio': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.html`)
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Hasil :* ${anu.message}`)
}
break
case 'sifatusaha': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`)
}
break
case 'rezeki': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 18, 9, 2009`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'setwebsite': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Example: ${prefix + command} Wadidaw`)
let anu = db.data.web.website = text
m.reply(`Berhasil mengubah website dari ${anu} menjadi ${text}`)
db.data.web.website = text
}
break
case 'setpanel': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Example: ${prefix + command} Wadidaw`)
let anu = db.data.web.panel = text
m.reply(`Berhasil mengubah panel dari ${anu} menjadi ${text}`)
db.data.web.panel = text
}
break
case 'setinformasi': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Example: ${prefix + command} Wadidaw`)
let anu = db.data.settings.information
m.reply(`Berhasil mengubah informasi dari ${anu} menjadi ${text}`)
db.data.settings.information = text
}
break
case 'suamiistri': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Wandy, 18, 9, 2009, Z, 23, 9, 2007`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalanjodohbali': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Wandy, 18, 9, 2009, Z, 23, 9, 2007`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalancinta': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} Wandy, 18, 9, 2009, Z, 23, 9, 2007`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`)
}
break
case 'kbbi': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} tangan`)
f = await kbbi(text)
w = f.data.arti;
try {
a = w.replace("n ", "")
d = a;
} catch (e) {
d = `Tidak ada hasil untuk: ${text}`
}
m.reply(d)
}
break
case 'jadian': case 'jodohku': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
let member = participants.map(u => u.id)
let orang
if (/ku/i.test(command)) orang = m.sender
else orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `@${orang.replace(/@.+/, '')} ❤️ @${jodoh.replace(/@.+/, '')}`.trim()
let mentionedJid = [orang, jodoh]
conn.sendTextWithMentions(m.chat, jawab, m)
}
break
case 'infochat': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
conn.sendTextWithMentions(m.chat, teks, m)
}
break
case 'joke': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await fetchJson('https://some-random-api.ml/joke')
m.reply(data.joke)
}
break
case 'telegraph': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
m.reply(mess.wait)
let anu = await TelegraPh(media)
conn.sendMessage(m.chat, { image: { url: anu },  caption: anu }, { quoted: m })
} else {
m.reply(`Kirim Gambar Dengan Caption ${prefix + command}`)
}
}
break
case 'wikipedia': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if(!text) return m.reply(`Example : ${prefix + command} asal usul rumah adat`)
m.reply(mess.wait)
ressss = await wiki(text).catch(e => {
return m.reply('Hasil Tidak Ditemukan') 
}) 
resultt = `Hasil pencarian untuk: ${text}\n\n${ressss[0].wiki}`
m.reply(resultt)
}
break
case 'wikimedia': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Ayam`)
m.reply(mess.wait)
try {
anus = await wikimedia(text)
result = anus[Math.floor(Math.random() * anus.length)]
conn.sendMessage(m.chat, { image: { url: result.image }, caption: `• Title : ${result.title}\n• Source : ${result.source}\n• Media Url : ${result.image}` }, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
}
break
case 'semoji':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} 😂`)
emoji.get(`${text}`).then(emoji => {
linknya = `${emoji.images[10].url}`
m.reply(mess.wait)
conn.sendImageAsSticker(m.chat, linknya, m, { packname: global.packname, author: global.author })
})
break
case 'wallpaperml': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await fetchJson(`https://raw.githubusercontent.com/Wandygans/database/main/wallml.js`)
randKey = await pickRandom(data)
conn.sendMessage(m.chat, { image: { url: randKey.result }, caption: `_Done_` }, { quoted: m })
}
break
case 'emojimix': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return reply(`Example : ${prefix + command} 😂+😭`)
m.reply(mess.wait)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'bagaimanakah': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example: ${prefix + command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
reply(`Pertanyaan : ${command} ${text}\nJawaban : ${ya}`)
}
break
case 'public': {
if (!isCreator) return reply(mess.owner)
conn.public = true
m.reply('*_Succes Change To Public - Mode_*')
}
break
case 'self': {
if (!isCreator) return reply(mess.owner)
conn.public = false
m.reply('*_Succes Change To Self - Mode_*')
}
break
case 'cekmati':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix}cekmati Wandy`)
predea = await axios.get(`https://api.agify.io/?name=${text}`)
m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
case 'sangecek':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} wandy`)
const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const nge = sang[Math.floor(Math.random() * sang.length)]
m.reply(`*Pertanyaan* : ${command} ${text}\n*Jawaban* : ${nge}%`)
break
case 'persenganteng':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} wandy`)
const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`*Pertanyaan* : ${command} ${text}\n*Jawaban* : ${teng}`)
break
case 'persencantik':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} wandu`)
const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`*Pertanyaan* : ${command} ${text}\n*Jawaban* : ${tik}`)
break
case 'persengay':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} wandu`)
persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah Gay🤦*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*","83%\n\n Yaallah Nak🤦","97%\n\nAstagfirullah🤦","100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃","29%\n\n amann:v","94%\n\n Yaallah🏃","75%\n\nHadehh Gay🤦","82%\n\nMending Lu Tobat Dah🏃","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool Topan🏃"]
const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
m.reply(`*Pertanyaan* : ${command} ${text}\n*Jawaban* : ${kl}`)
break
case 'trendtwit': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
m.reply(mess.wait)
trend = await trendtwit()
console.log(trend)
teks2 = `「 *TRENDTWITTER* 」\n`
for (let i of trend.result) {
teks2 += `\n*Rank* : ${i.rank}\n*Hastag* : ${i.hastag}\n*Tweet* : ${i.tweet}\n`
}
m.reply(teks2.trim())
}
break
case 'antiviewonce': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antiviewonce) return m.reply(`Antiviewonce sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antiviewonce = true
m.reply(`Antiviewonce sukses di aktifkan!`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antiviewonce) return m.reply(`Antiviewonce sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antiviewonce = false
m.reply(`Antiviewonce sukses di matikan!`)
} else {
m.reply(`Example: ${prefix + command} on/off`)
}
}
break
case 'coffe': case 'kopi': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
conn.sendMessage(m.chat, {caption: "Done", image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
}
break
case 'translate': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m.quoted && m.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m.quoted.text
} else return reply(`Ex: ${prefix + command} id hello i am robot`)
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return reply(`Error : Bahasa"${lang}" Tidak Support`)
m.reply(`*Terdeteksi Bahasa:* ${res.from.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
}
break
case 'cekme': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
const ganteng = ['Cakep ✅','Jelek Anjrit ❎']
const sifat = ['Pembohong','Galak','Suka Bantu Orang','Baik','Jahat:(','Bobrok','Suka BadMood','Setia','Tulus','Beriman','Penyayang Binatang','Baperan']
const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${conn.getName(m.sender)} Sukai`,'Belajar','Ibadah','Diri Sendiri']
const nomernyah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const keberanian = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const kepinteran = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const ganz = ganteng[Math.floor(Math.random() * ganteng.length)]
const sipat = sifat[Math.floor(Math.random() * sifat.length)]
const numb = nomernyah[Math.floor(Math.random() * nomernyah.length)]
const gai = suka[Math.floor(Math.random() * suka.length)]
const berani = keberanian[Math.floor(Math.random() * keberanian.length)]
const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)]
var cek = `*[ CEK PRIBADI KAMU ]*
 
Nama : ${nama}
Sifat : ${sipat}
Keberanian : ${berani}%
Ketakutan : ${numb}%
Cakep : ${ganz}
Cek Pintar : ${pinter}%
Menyukai : ${gai}`
m.reply(cek)
}
break
case 'listjadibot': 
try {
let user = [... new Set([...global.conns.filter(conn => conn.user).map(conn => conn.user)])]
te = "*List Bot Numpang*\n\n"
for (let i of user){
y = await conn.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
conn.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`There are no users who have rented the bot yet`)
}
break
case 'jadibot': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
wawan(conn, m, from)
}
break
case 'apakah': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} gw kaya`)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
caption = `*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${kah}`
m.reply(caption)
}
break
case 'bisakah': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} gw kaya`)
const apa =['Bisa banget','Tidak bisa','Mungkin bisa','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
caption = `*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${kah}`
m.reply(caption)
}
break
case 'kapankah': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} gw kaya`)
const apa =['Tidak tau','2 taun lagi','besok paling','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
caption = `*Pertanyaan* : ${command} ${q}\n*Jawaban* : ${kah}`
m.reply(caption)
}
break
case 'rules':{
let teks =`
Syarat dan Ketentuan menggunakan *${fake}*

1. Nama dan nomer user ${fake}
akan Kami simpan di dalam
server selama bot aktif

2. Data akan di hapus ketika bot Offline
atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar,
video, file, audio, dan dokumen
yang kamu kirim ke ${fake}

4. Kami tidak akan pernah meminta users
untuk memberikan informasi pribadi

5. Jika menemukan Bug/Error silahkan
langsung lapor ke Owner atau Developer
atau bisa juga memakai fitur _*reportbug*_

6. Beberapa fitur mungkin ada yang error,
jadi tunggu sampai developer
meperbaiki fitur tersebut

8. Bot ini sudah di lengkapi dengan
fitur _*Auto laporerror*_ jika terjadi
error maka bot akan auto report ke
developer, terkecuali error yang
menyebabkan bot mati, maka user
harus lapor ke developer

7. Bot ini juga sudah di lengkapi dengan
Fitur Anti Spam jika kamu terdeteksi
melakukan spam, maka Bot tidak
akan menanggapi kamu selama 20 detik

9. User dilarang keras menelpon bot!
jika melanggar maka kamu akan terkena
banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
meminta untuk di save nomernya`
m.reply(teks)
}
break
case 'jarak':{
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Tasik|Jakarta`)
let Dari = q.split("|")[0]
let Ke = q.split("|")[1]
if (!Ke) return m.reply(`Example: ${prefix + command} Tasik|Jakarta`)
async function jarak(dari, ke) {
let url = `https://www.google.com/search?q=${encodeURIComponent("jarak " + dari + " ke " + ke)}&hl=id`
let { data } = await axios(url)
let $ = cheerio.load(data)
let img = data.split("var s=\'")[1].split("\'")[0]
let res = {
result: {
img: /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,`[1], 'base64') : '',
desc: $("div.BNeawe.deIvCb.AP7Wnd").text()
}
}
return res
}
let nana = await jarak(Dari,Ke)
let image = nana.result.img
let caption = `*Google Maps* \n\n${nana.result.desc}`
conn.sendMessage(from,{image, caption},{quoted: m})
} 
break
case 'quotes': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
resultan = await fetchJson('https://raw.githubusercontent.com/Wandygans/database/main/quotes.json')
randKey = await pickRandom(resultan)
m.reply(`Quotes : ${randKey.quotes}\n\n*By ${randKey.author}*`)
}
break
case 'quotesanime':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
data = await quotesAnime()
datanya = await pickRandom(data)
hasilnya = `*Quote* : ${datanya.quotes}\n\n*By ${datanya.karakter}*`
m.reply(hasilnya)
break
case 'katabijak':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
hasilnya = await katabijak()
result = await pickRandom(hasilnya)
katabi = `Quotes : ${result.quotes}\n\n*By : ${result.author.name}*`
m.reply(katabi)
break
case 'antitoxic': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antitoxic) return m.reply(`Antitoxic sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antitoxic = true
m.reply(`Antitoxic sukses di aktifkan!`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antitoxic) return m.reply(`Antitoxic sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antitoxic = false
m.reply(`Antitoxic sukses di matikan!`)
} else {
m.reply(`Example: ${prefix + command} on/off`)
}
}
break
case 'darkjoke': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
resultan = await fetchJson("https://raw.githubusercontent.com/Wandygans/database/main/darkjoke.js")
randIndex = await pickRandom(resultan)
conn.sendMessage(m.chat, { image: { url: randIndex.result }, caption: "_Done_"}, { quoted: m })
}
break
case 'ppcouple': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
memek = await fetchJson('https://raw.githubusercontent.com/ShirokamiRyzen/WAbot-DB/main/fitur_db/ppcp.json')
cowo = await pickRandom(memek)
conn.sendMessage(m.chat, { image: { url: cowo.cowo }, caption: "_Cowo_"}, { quoted: m })
conn.sendMessage(m.chat, { image: { url: cowo.cewe }, caption: "_Cewe_"}, { quoted: m })
}
break
case 'cekmember': {
if (!m.isGroup) return m.reply(mess.group)
const participants = await conn.groupMetadata(m.chat).then(metadata => metadata.participants);
let countIndonesia = 0;
let countMalaysia = 0;
let countUSA = 0;
let countOther = 0;
participants.forEach(participant => {
const phoneNumber = participant.id.split('@')[0];
if (phoneNumber.startsWith("62")) {
countIndonesia++;
} else if (phoneNumber.startsWith("60")) {
countMalaysia++;
} else if (phoneNumber.startsWith("1")) {
countUSA++;
} else if (phoneNumber.startsWith("+1")) {
countOther++;
} else {
countOther++;
}
});
const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 👤\nAnggota Malaysia: ${countMalaysia} 👤\nAnggota USA + OTHER : ${countUSA} 👤\nAnggota Negara Lain: ${countOther} 👤`;
m.reply(replyMessage);
}
break
case 'speedtest': {
m.reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)
}
}
break
case 'react': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} 😜`)
conn.sendMessage(m.chat, { react: { text: args[0], key: { remoteJid: m.chat, fromMe: true, id: m.quoted? m.quoted.id : m.id }}})
}
break
case 'getname': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (Input) {
try{
var name = db.data.users[Input].nama
} catch {
var name = await conn.getName(Input) 
}
reply(name)
} else {
reply(m.pushName)
}
}
break
case 'getpp': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (Input) {
try{
var ppWong = await conn.profilePictureUrl(Input, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
conn.sendMessage(m.chat, { image : { url : ppWong }, caption: `Nyoh` }, { quoted : m })
} else {
try{
var ppWong = await conn.profilePictureUrl(m.sender, "image")
} catch {
var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
conn.sendMessage(m.chat, { image : { url : ppWong }, caption: `Nyoh` }, { quoted : m })
}
}
break
case 'getcase':{
if (!isCreator) return reply(mess.owner)
if (!args[0]) return m.reply("Mau ngambil case apa?")
try{
m.reply(getCase(args[0]))
} catch {
m.reply("Case Tidak Ditemukan")
}
}
break
case "getfolder":{
if (!isCreator) return reply(mess.owner)
if (!text.includes("./")) return reply(`*Example* : ${prefix + command} ./basetzy`)
if (text.split("/")[1] == "node_modules" && !text.split("/")[1]) {
reply("Au Ah Sizenya G NgotakðŸ˜‘")
} else {
setTimeout(() => {
fs.unlinkSync(`${text}.zip`)
}, 5000)
setTimeout(() => {
const file = fs.readFileSync(`${text}.zip`)
conn.sendMessage(m.chat, { document: file, mimetype: "application/bin", fileName: `${path.basename(`${text}.zip`)}` }, { quoted: m })
}, 3000)
setTimeout(() => {
reply("Send file......")
}, 2000)
setTimeout(() => {
let qur = `zip -r ${text}.zip ${text}`
exec(qur, (err, stdout) => {
})
}, 1000)
}
}
break
case 'delsampah': {
if (!isCreator) return reply(mess.owner)
let files = fs.readdirSync("./src")
let data = files.splice("@Xzra", files.length - 1)
if (data.length == 0) return m.reply(`${data.length} junk files detected`)
m.reply(`${data.length} junk files detected`)
setTimeout(() => {
m.reply("Removing junk files...")
for (let x of data) {
fs.unlinkSync("./src/" + x)
}
}, 2000)
setTimeout(() => {
m.reply("Success deleted all junk files")
}, 5000)
}
break
case "getfile":{
if (!isCreator) return reply(mess.owner)
if (!text.includes("./")) return m.reply(`*Example* : ${prefix + command} ./package.json`)
setTimeout(() => {
const file = fs.readFileSync(`${text}`)
conn.sendMessage(m.chat, { document: file, mimetype: "application/bin", fileName: `${path.basename(text)}` }, { quoted: m })
}, 2000)
m.reply("Send file......")
}
break
case 'ban': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Example: ${prefix + command} @tag/nomor, alasan`)
let [who, alasange] = text.split`,`
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
let users = global.db.data.users
users[who].Banneduser = true
users[who].BannedReason = alasange
reply(`Berhasil banned user dengan alasan: ${alasange}`)
}
break
case 'unban': {
if (!isCreator) return reply(mess.owner)
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
let users = global.db.data.users
users[who].Banneduser = false
reply(`Berhasil unban User`)
}
break
case 'creategc': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Tes`)
let cret = await conn.groupCreate(text, [])
let response = await conn.groupInviteCode(cret.id)
let teks = `\`\`\`CREATION GROUP MESSAGE\`\`\`

⭔ Name : ${cret.subject}
⭔ Owner : @${cret.owner.split("@")[0]}
⭔ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
⭔ Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
conn.groupLeave(cret.id)
conn.sendTextWithMentions(m.chat, teks, m)
}, 7000)
setTimeout(() => {
conn.groupSettingUpdate(cret.id, 'locked')
conn.updateProfilePicture(cret.id , { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxjI17evEyt_JBc2t73PJ7VMvGcJDFW3jlw&usqp=CAU' })
conn.groupParticipantsUpdate(cret.id, [m.sender], "promote")
conn.groupUpdateDescription(cret.id, `*Group create by Zero-Bot*`)
}, 5000)
setTimeout(() => {
conn.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
case "cariteman":{
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
let data = Object.keys(db.data.users)
let dapat = pickRandom(data)
let name = db.data.users[dapat].nama
let number = dapat.split("@")[0]
setTimeout(() => {
m.reply("Looking for friends.......")
}, 1000)
setTimeout(() => {
m.reply("Success to get one friend")
}, 5000)
setTimeout(() => {
let vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `N:;${name};;;`
+ `FN:${name}\n`
+ `ORG:${name};\n`
+ `TEL;type=CELL;type=VOICE;waid=${number}:${require('awesome-phonenumber')(`+${dapat.split('@')[0]}`).getNumber('international')}\n` // WhatsApp ID + phone number
+ 'END:VCARD'
conn.sendMessage(m.chat, { contacts: { displayName: `${name}`, contacts: [{ vcard }] } }, { quoted: m })
}, 9000)
}
break
case 'autoread': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Example: .autoread open/close`
if (args[0].toLowerCase() === 'off') {
db.data.settings.bot.autoread = false
m.reply('Berhasil mematikan autoread!')
} else if (args[0].toLowerCase() === 'on') {
db.data.settings.bot.autoread = true
m.reply('Berhasil menyalakan autoread!')
}
}
break
case 'autotyping': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw `Example: .autotyping open/close`
if (args[0].toLowerCase() === 'off') {
db.data.settings.bot.autotyping = false
m.reply('Berhasil mematikan autotyping!')
} else if (args[0].toLowerCase() === 'on') {
db.data.settings.bot.autotyping = true
m.reply('Berhasil menyalakan autotyping!')
}
}
break
case 'broadcast': {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} wan-can`)
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
txt = `「 Broadcast Bot 」\n\n${text}`
conn.sendMessage(yoi, { text: txt })
}
m.reply('Sukses Broadcast')
}
break
case 'pinterest': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} ayam`)
try {
m.reply(mess.wait)
anus = await pinterest(text)
resultt = anus[Math.floor(Math.random() * anus.length)]
conn.sendMessage(m.chat, { image: { url: resultt }, caption: '⭔ Media Url : '+resultt }, { quoted: m })
} catch (e) {
error(util.format(e), m, m.chat)
}
}
break
case 'kalkulator':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`: untuk pembagian\n* untuk perkalian\n- untuk pengurangan\n+ untuk pertambahan\n\nExample : #kalkulator 1+1`)
try {
teks2 = `${text} = ${Math_js.evaluate(text)}`
m.reply(teks2)
} catch (e) {
error(util.format(e), m, m.chat)
}
break
case 'truth':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
trut = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/truth.json')
const ttrth = trut[Math.floor(Math.random() * trut.length)]
m.reply(`*TRUTH*\n${ttrth}`)
break
case 'dare':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
dare = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/dare.json')
const der = dare[Math.floor(Math.random() * dare.length)]
m.reply(`*DARE*\n${der}`)
break
case 'listpc': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let tekss = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
tekss += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────\n\n`
}
conn.sendTextWithMentions(m.chat, tekss, m)
}
break
case 'listgc': {
dmenut = 'ଓ═┅═━–〈'
dmenub = '┊↬'
dmenuf = '┗––––––––––✦'
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!isCreator) return m.reply(mess.owner)
let groups = Object.values(await conn.groupFetchAllParticipating())
let str = Object.keys(groups).map((i, index) => {
return `*${dmenut}* ${1 + index}
*${dmenub} Name :* ${groups[i].subject}
*${dmenub} Owner :* ${groups[i].owner ? "@" + groups[i].owner.split("@")[0] : "Unknown"}
*${dmenub} Subject Owner :* ${groups[i].subjectOwner ? "@" + groups[i].subjectOwner.split("@")[0] : "Unknown"}
*${dmenub} ID :* ${groups[i].id}
*${dmenub} Restrict :* ${groups[i].restrict}
*${dmenub} Announce :* ${groups[i].announce}
*${dmenub} Ephemeral :* ${new Date(groups[i].ephemeralDuration* 1000).toDateString()}
*${dmenub} Desc ID :* ${groups[i].descId}
*${dmenub} Description :* ${groups[i].desc?.toString().slice(0, 10) + '...' || 'unknown'}
*${dmenub} Admins :* ${groups[i].participants.filter(p => p.admin).map((v, i) => `\n${dmenub} ${i + 1}. @${v.id.split('@')[0]}`).join(' [admin]')}
${isCreator ? `*${dmenub} Participants :* ${groups[i].participants.length}` : ''}
*${dmenub} Created :* ${new Date(groups[i].subjectTime* 1000).toDateString()}
*${dmenub} Creation :* ${new Date(groups[i].creation* 1000).toDateString()}
*${dmenub} Size :* ${groups[i].size}
${dmenuf}`.trim()
}).join('\n\n')
conn.sendTextWithMentions(m.chat,str, m)
}
break
case 'revoke':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !m.key.fromMe) return m.reply(mess.admin)                                        
let link = await conn.groupRevokeInvite(m.chat)
m.reply( `*Berhasil mereset link group!*\n https://chat.whatsapp.com/${link}`)
break
case 'googleimage': case 'gimage': case 'googlefoto': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} ayam`)
m.reply(mess.wait)
anus = await googleImage(q)
resultt = await pickRandom(anus)
conn.sendMessage(m.chat, { image: { url: resultt }, caption: '⭔ Media Url : '+resultt }, { quoted: m })
.catch((err) => {
m.reply(`Maaf, tidak ada hasil untuk ${text}`)
})
}
break
case 'infogempa': case 'gempabumi': case 'gempa': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply(mess.wait)
hasilnya = await gempa()
teks2 = `*INFO GEMPA*
*Wilayah* : ${hasilnya.Wilayah}
*Lintang* : ${hasilnya.Lintang}
*Bujur* : ${hasilnya.Bujur}
*Magnitudo* : ${hasilnya.Magnitudo}
*Kedalaman* : ${hasilnya.Kedalaman}
*Map* : ${hasilnya.Map}`
conn.sendMessage(m.chat, { image: { url: hasilnya.Map }, caption: teks2 }, { quoted: m })
}
break
case 'google': case 'googlesearch': case 'ggl': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Bot WhatsApp`)
m.reply(mess.wait)
resss = await ggs({'query' : `${q}`})
kant = ``
for (let i of resss) {
kant += `\n*▢ Judul* : ${i.title}
*▢ Link* : ${i.link}
*▢ Keterangan* : ${i.snippet}\n\n────────────────────\n`
}
var akhir = kant.trim()
m.reply(akhir)
}
break
case 'ssweb':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} google.com`)
ssweb = await fetchJson(`https://json-server.wandygunawan.repl.co/home/ssweb?text=${text}`)
m.reply(mess.wait)
try {
await conn.sendMessage(m.chat, { image: { url: ssweb.result },  caption: `Hasil dari screenshoot web: ${text}`}, { quoted: m })
} catch (e) {
m.reply(`Url invalid!`)
}
break
case 'readviewonce':{
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!/viewOnce/.test(m.quoted?.mtype)) return reply('Itu Bukan Pesan ViewOnce')
let msg = m.quoted.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return await conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return await conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break
case 'kerangajaib': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return reply(`Use example ${prefix + command} i'm alien?`)
lanangg = ['Mungkin suatu hari','Tidak juga','Tidak keduanya','Kurasa tidak','Ya','Coba tanya lagi','Tidak ada']
lanang = pickRandom(lanangg)
m.reply(lanang)
}
break
case 'githubstalk': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply('Harap Masukan Username')
await m.reply('Searching...')
let request = await githubstalk(text) 
let { username, following, followers, type, bio, company, blog, location, email, public_repo, public_gists, profile_pic } = request
let thumb = await getBuffer(profile_pic)
let hasil = `*── 「 GITHUB STALK 」 ──*
➸ *Username*: ${username}
➸ *Bio*: ${bio}
➸ *Perusahaan*: ${company}
➸ *Email:* ${email}
➸ *Blog:* ${blog}
➸ *Repo Publik:* ${public_repo}
➸ *Gists Publik:* ${public_gists}
➸ *Follower:* ${followers}
➸ *Following:* ${following}
➸ *Lokasi:* ${location}
➸ *Type:* ${type}
`
conn.sendFile(m.chat, thumb, 'githubstalk.jpg', hasil, m)
}
break
case 'readmore':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example: ${prefix + command} angjay|mabar`)
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
m.reply(l + readMore + r)
break
case 'qrcode': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Wanday`)
m.reply(mess.wait)
qr = await qrcode.toBuffer(text)
conn.sendMessage(m.chat, { image: qr,  caption: `Berhasil membuat qr dari: ${text}`}, { quoted: m })
}
break
case 'listonline':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), nomorBot]
conn.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, mentions: online}, { quoted: m })
break
case 'report':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example: ${prefix + command} error fitur smeme`)
if (text.length > 300) return m.reply(`Teks terlalu panjang`)
nomor = m.sender
ress = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${q}`
conn.sendTextWithMentions(`6282125039170@s.whatsapp.net`, ress)
m.reply(`Sukses meneruskan report ${text} kepada owner, sihlakan tunggu balasan dari owner!\n\nNote: *Jika report main-main tidak akan di respon owner!*`)
break
case 'setppgrup': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (!/image/.test(mime)) return m.reply(`Kirim/reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return(`Kirim/reply Image Dengan Caption ${prefix + command}`)
let media = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply('Done')
}
break
case 'smeme': 
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Kirim/reply image dengan caption ${prefix + command} teks1|teks2`)
if (!quoted) return m.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
if (!/image/.test(mime)) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} teks1|teks2`)
let [teks1, teks2] = text.split`|`
let dwnld = await conn.downloadAndSaveMediaMessage(quoted)
let fatGans = await TelegraPh(dwnld)
m.reply(mess.wait)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(teks1)}/${encodeURIComponent(teks2)}.png?background=${fatGans}`
let FaTiH = await conn.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} else {
return m.reply(`Kirim/reply image dengan caption ${prefix + command} teks1|teks2`)
}
break
case 'join':
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
m.reply(mess.wait)
result = args[0].split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(result).then((res) => m.reply('Berhasil bergabung ke group')).catch((err) => m.reply(jsonformat(err)))
break
case 'ephemeral': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (args[0] === '1') {
await conn.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply('Berhasil mengubah ephemeral')).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === '7') {
await conn.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply('Berhasil mengubah ephemeral')).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === '90') {
await conn.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply('Berhasil mengubah ephemeral')).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'off') {
await conn.groupToggleEphemeral(m.chat, 0).then((res) => m.reply('Berhasil mematikan ephemeral')).catch((err) => m.reply(jsonformat(err)))
} else {
m.reply(`Example: ${prefix + command} 1/7/90/off`)
}
}
break
case 'editinfo': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (args[0] === 'open'){
await conn.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await conn.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
m.reply(`Example: ${prefix + command} open/close`)
}
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'tinyurl':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com`)
if (args[0].includes('www')) return m.reply('Url harus berupa https://url')
m.reply(mess.wait)
anus = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
m.reply(`${anus.data}`)
break
case 'menu':
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
conn.sendMessage(m.chat, {
text: anuy,
contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `${ucapanWaktu} ${pushName}`,
body: "Zero-Bot",
thumbnailUrl: "https://telegra.ph/file/bc82d46d7d3003d07a281.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VaJNLUeEAKWDtknjzI2t",
mediaType: 1,
renderLargerThumbnail: true
}
}
})
break
case 'styletext': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Wandy`)
let anu = await style(text)
let teks = `Style Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break
case 'setbiobot': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Masukan Text Untuk Bio Baru Bot`)
try {
await conn.updateProfileStatus(text).catch(_ => _)
conn.reply(m.chat, 'Sukses Mengganti Bio Bot', m)
} catch (e){
reply(`Yah Error Kak...`)
}
}
break
case 'setnamebot': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Masukan Text Untuk Nama Baru Bot`)
try {
await conn.updateProfileName(text).catch(_ => _)
conn.reply(m.chat, 'Sukses Mengganti Nama Bot', m)
} catch (e){
reply(`Yah Error Kak...`)
}
}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
case 'setppbot': {
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await conn.downloadAndSaveMediaMessage(quoted)
await conn.updateProfilePicture(nomorBot, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(`_Done_`)
}
break
case 'q': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await conn.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'bahasapurba':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} Indonesia`)
hasilnya = await purba(text)
m.reply(hasilnya)
break
case 'namaninja':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!text) return m.reply(`Example : ${prefix + command} Wandy`)
hasilnya = await namaninja(text)
m.reply(hasilnya)
break
case 'katabucin':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
katakata = await fetchJson('https://raw.githubusercontent.com/Wandygans/database/main/katabucin.json')
hata = await pickRandom(katakata)
m.reply(`${hata.result}\n\n*By: WandyGans*`)
break
case 'ttp': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return m.reply(`Example: ${prefix + command} Wandy`)
anus = await ttp(text)
m.reply(mess.wait)
conn.sendImageAsSticker(m.chat, anus.result, m, { packname: global.packname, author: global.author })
}
break
case 'afk': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
conn.sendTextWithMentions(m.chat,`「 *MULAI AFK* 」\n\n📛 *Name* : ${nama}\n👤 *User* : @${m.sender.split("@")[0]}\n⏰ *Waktu* : ${wib()}\n📅 *Tanggal*: ${tanggal()}\n✍️ *Alasan* ${text ? ': ' + text : ''}`, m)
}
break	
case 'gitclone': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!args[0]) return reply(`Example: ${prefix + command} https://github.com/ImYanXiao/Elaina-MultiDevice`)
if (!regex.test(args[0])) return reply('Url Tidak Valid!')
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(mess.wait)
conn.sendFile(m.chat, url, filename, null, m)
}
break
/*
case 'tanya': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
try {
if (!text) return m.reply(`Example: ${prefix + command} apa itu tits`)
const configuration = new Configuration({
apiKey: openaikey
});
const openai = new OpenAIApi(configuration);
const response = await openai.createChatCompletion({
model: "gpt-3.5-turbo",
messages: [{role: "user", content: text}],
});
m.reply(`*ZERO-BOT AI*\n\n\n${response.data.choices[0].message.content}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
m.reply("Maaf, sepertinya ada yang error :"+ error.message);
}
}
}
break
*/
case 'myinfo':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let usert = global.db.data.users[who]
let anut =`╭───❑ 「 BALANCE 」 ❑────
├─ 📇 *Name*: ${usert.nama}
├─ 🆔 *Nomor* : ${require('awesome-phonenumber')(`+${m.sender.split('@')[0]}`).getNumber('international')}
├─ 🎫 *Limit*: ${usert.limit}
├─ 💹 *Money*: ${usert.money}
├─ 📍 *Role*: ${usert.role}
├─ 💳 *Bank* : ${usert.atm}
├─ 📊 *Level*: ${usert.level}
╰─❑ ✨ *Exp*: ${usert.exp}
`
conn.sendMessage(m.chat, { image: fs.readFileSync('./media/bank.jpg'),  caption: anut }, { quoted: m })
break
case 'signup': {
if (db.data.users[m.sender].registered === true) return m.reply('Anda sudah terdaftar di dalam database!, jika ingin mendaftar ulang sihlakan ketik .logout untuk keluar dari akun')
if (!text) return m.reply(`Example: ${prefix + command} nama, email\n\n.signup wandy, wandy@gmail.com`)
let [namaorang, emailny] = text.split`,`
if (!emailny) return m.reply('Masukan email anda untuk proses verifikasi!')
timeoutny = 60000
conn.expired = conn.expired ? conn.expired : {}
let id = m.sender
db.data.users[m.sender].nama = namaorang
tokeninput = await getToken()
db.data.users[m.sender].token = tokeninput
conn.expired[id] = [
await email(emailny, tokeninput, namaorang),
m.reply(`「 *VERIFIKASI* 」\n\nKode verifikasi telah di kirim ke email anda!, copy otp yang sudah dikirim lalu ketik, .signin <otp>`),
setTimeout(() => {
if (conn.expired[id]) db.data.users[m.sender].token = ''
m.reply('Token sudah expired!')
delete conn.expired[id]
}, timeoutny)
]
if (id in conn.expired[id]) {
m.reply('Token belum direfresh, sihlakan tunggu sampai token di refresh!')
}
}
break
case 'signin':
if (!text) return
tokenan = db.data.users[m.sender].token
if (text.toLowerCase() == tokenan) {
m.reply(`「 *BERHASIL TERDAFTAR* 」\n\n👤 *Nama*: ${nama}\n⏰ *Waktu*: ${wib()}\n📅 *Tanggal*: ${tanggal()}`)
clearTimeout(conn.expired[m.sender][2])
db.data.users[m.sender].expired = ""
db.data.users[m.sender].registered = true
db.data.users[m.sender].token = ''
} else m.reply(`「 *OTP INVALID* 」\n\nNomor otp invalid!`)
break
case 'logout':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
db.data.users[m.sender].nama = ''
db.data.users[m.sender].email = ''
db.data.users[m.sender].registered = false
db.data.users[m.sender].limit = limitUser
db.data.users[m.sender].money = 0
db.data.users[m.sender].exp = 0
db.data.users[m.sender].level = 0
m.reply(`Berhasil logout akun anda!\n\n*Note*: Seluruh progress yang sudah anda peroleh akan di reset!`)
break
case 'setdesc': case 'setdesk': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw `Example: ${prefix + command} Welcome`
await conn.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'linkgroup': case 'linkgc': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
let response = await conn.groupInviteCode(m.chat)
conn.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'group': case 'grup': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isAdmins && !m.key.fromMe) throw mess.admin
if (!text) throw `Example: ${prefix + command} open/close`
if (args[0].toLowerCase() === 'close') {
await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => console.log('done')).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'open') {
await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => console.log('done')).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'autowelcome': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isAdmins && !m.key.fromMe) throw mess.admin
if (!text) throw `Example: ${prefix + command} on/off`
if (args[0].toLowerCase() === 'off') {
if (db.data.chats[m.chat].welcome) return m.reply('Autowelcome sudah dinyalakan sebelum nya!')
db.data.chats[m.chat].welcome = false
m.reply('Autowelcome sukses di dimatikan!')
} else if (args[0].toLowerCase() === 'on') {
if (!db.data.chats[m.chat].welcome) return m.reply('Autowelcome sudah dimatikan sebelum nya!')
db.data.chats[m.chat].welcome = true
m.reply('Autowelcome sukses di dinyalakan!')
}
}
break
case 'groupupdateinfo': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isAdmins && !m.key.fromMe) throw mess.admin
if (!text) throw `Example: ${prefix + command} on/off`
if (args[0].toLowerCase() === 'off') {
if (db.data.chats[m.chat].gcupdate) return m.reply('Groupupdateinfo sudah dinyalakan sebelum nya!')
db.data.chats[m.chat].gcupdate = false
m.reply('Groupupdateinfo sukses di dimatikan!')
} else if (args[0].toLowerCase() === 'on') {
if (!db.data.chats[m.chat].gcupdate) return m.reply('Groupupdateinfo sudah dimatikan sebelum nya!')
db.data.chats[m.chat].gcupdate = true
m.reply('Groupupdateinfo sukses di dinyalakan!')
}
}
break
case 'tagme':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!m.isGroup) throw mess.group
var num = m.sender
conn.sendMessage(m.chat, {text: `@${num.split("@")[0]} Tag!`, contextInfo: { mentionedJid: [num]}}, {quoted: m})
break
case 'listadmins':
case 'listadmin':
case 'admin':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!m.isGroup) return m.reply(mess.group)
teks2 = `List admin group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks2 += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
conn.sendTextWithMentions(m.chat, teks2, m)
break
case 'promote': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await conn.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(`Berhasil menambahkan: ${users}`)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'tagall': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
 }
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break
case 'sc':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
m.reply('Script : https://github.com/DikaArdnt/Hisoka-Morou')
break
case 'leavegc':
if (!isCreator && !m.key.fromMe) throw mess.owner
conn.groupLeave(from)
break
case 'setname': case 'setsubject': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!m.isGroup) throw mess.group
if (!isBotAdmins && !m.key.fromMe) throw mess.botAdmin
if (!isAdmins && !m.key.fromMe) throw mess.admin
if (!q) throw `Example : ${prefix + command} Wibu`
await conn.groupUpdateSubject(m.chat, text).then((res) => console.log('done')).catch((err) => reply(jsonformat(err)))
}
break
case 'nano':
if (!isCreator && !m.key.fromMe) throw mess.owner
if (!q) return reply(`Example : ${prefix + command} index.js`)
anus = fs.readFileSync(`${q}`)
m.reply(String(anus))
break
case 'eval': {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
error(util.format(e), m, m.chat)
}
}
break
case 'donasi':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (db.data.users[m.sender].Banneduser) return m.reply(mess.banned)
texx = `「 *DONASI* 」

Hai, Untuk menjaga bot tetap on dan selalu update

*❏* PULSA: 082125039170
*❏* SAWERIA: https://saweria.co/wandaydzxy

「 *SEWA BOT* 」

*_SEWA BOT_* 
*❏* Sewa Bot 10k (1 bulan)
*❏* Sewa Bot 15k (2 bulan)
*❏* Sewa Bot 20k (3 bulan)
*❏* Sewa Bot 50k (6 bulan)


_ARIGATOU_~`
m.reply(texx)
break
case 'delete': case 'del': case 'd': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'get':
case 'fetch':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!q) return m.reply(`Example : #fetch https://youtube.com`)
fetch(`${q}`).then(res => res.text())  
.then(bu =>{
m.reply(bu)
})   
break
case 'owner': {
let vcard = `
BEGIN:VCARD
VERSION:3.0
N:;WandyGunawan;;;
FN:Owner Zero-Bot
item1.TEL;type=CELL;type=VOICE;waid=6282125039170:+62 821-2503-9170
item1.X-ABLabel:📱 Ponsel
item2.EMAIL;type=INTERNET:https://wandzxy.my.id
item2.X-ABLabel:🌐 Website
item3.URL:https://instagram.com/wanday_dzxy
item3.X-ABLabel: ✉️ Instagram
item4.ADR:;;Indonesia;;;;
item4.X-ABLabel:🌍 Region
END:VCARD`
return await conn.sendMessage(m.chat, {
contacts: {
displayName: nama,
contacts: [{ vcard }],
quoted, m
}
})
}
break
case 'toimage': case 'toimg':
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
try {
m.reply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
} catch (e) {
error(util.format(e), m, m.chat)
}
break
case 'ping': case 'botstatus': case 'statusbot': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
let timestamp = speed()
let latensi = speed() - timestamp
let all = require('util').inspect(hit.all)
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': {
if (!db.data.users[m.sender].registered) return m.reply(mess.register)
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
default:

if (budy.startsWith('>')) {
if (!isCreator) return 
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await error(util.format(err), m, m.chat)
}
}

if (budy.startsWith('$')) {
                    if (!isCreator) return 
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }


}
} catch (rusak) {
console.log(rusak)
m.reply(util.format(rusak))
}
};		
  
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.redBright(`Sip, File Diupdate (Gak Usah Restart) => ${__filename}`));
delete require.cache[file];
require(file);
});
