const { default: makeWaSocket,
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
const chalk = require("chalk");
const cheerio = require('cheerio')
const ffmpeg = require("fluent-ffmpeg")
const axios = require('axios')
const qrcode = require('qrcode')
const log = (pino = require("pino"));
const { Boom } = require('@hapi/boom')
const Math_js = require('mathjs')
const FileType = require('file-type')
const jimp = require('jimp')
const ggs = require('google-it')
const os = require('os')
const path = require("path")
const { exec, spawn, execSync } = require("child_process");
const speed = require('performance-now')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

if (global.conns instanceof Array) console.log()
else global.conns = []

const wawan = async (conn, m, from) => {
const { sendImage, sendMessage } =  conn;
const { reply, sender } = m;
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./jadibot/${sender.split("@")[0]}`), log({ level: "silent" }));

try {
async function start() {
let { version, isLatest } = await fetchLatestBaileysVersion();
const conn = await makeWaSocket({
auth: state,
browser: [`Bot By Wanday`, "Chrome", "1.0.0"],
logger: log({ level: "silent" }),
version,
})

conn.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!conn.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(conn, mek, store)
require("./wandy")(conn, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

conn.public = true

store.bind(conn.ev);
conn.ev.on("creds.update", saveCreds);
conn.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to rent bot..")
}
console.log(up)
if (up.qr) await sendImage(m.chat, await qrcode.toDataURL(up.qr,{scale : 8}), 'Scan this QR to become a temporary bot\n\n1. Click the three dots in the top right corner\n2. Tap Link Devices\n3. Scan this QR \nQR Expired in 30 seconds', m)
console.log(connection)
if (connection == "open") {
conn.id = conn.decodeJid(conn.user.id)
conn.time = Date.now()
global.conns.push(conn)
await m.reply(`*Connected to Zero-Bot*\n\n*User :*\n _*× id : ${conn.decodeJid(conn.user.id)}*_`)
user = `${conn.decodeJid(conn.user.id)}`
txt = `*Detected using rent bot*\n\n _× User : @${user.split("@")[0]}_`
sendMessage(`6282125039170@s.whatsapp.net`,{text: txt, mentions : [user]})
}
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { 
console.log(`Bad Session File, Please Delete Session and Scan Again`); conn.logout(); }
else if (reason === DisconnectReason.connectionClosed) { 
console.log("Connection closed, reconnecting...."); start(); }
else if (reason === DisconnectReason.connectionLost) { 
console.log("Connection Lost from Server, reconnecting..."); start(); }
else if (reason === DisconnectReason.connectionReplaced) { 
console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); conn.logout(); }
else if (reason === DisconnectReason.loggedOut) { 
console.log(`Device Logged Out, Please Scan Again And Run.`); conn.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
console.log("Restart Required, Restarting..."); start(); }
else if (reason === DisconnectReason.timedOut) { 
console.log("Connection TimedOut, Reconnecting..."); start(); }
else conn.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
})

conn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

conn.ev.on('contacts.update', update => {
for (let contact of update) {
let id = conn.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

}
start()
} catch (e) {
console.log(e)
}
}

module.exports = { wawan, conns }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})