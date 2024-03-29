require('./config') 
const {
default: wandyConnect,
useMultiFileAuthState,
DisconnectReason,
fetchLatestBaileysVersion,
makeInMemoryStore,
makeCacheableSignalKeyStore,
jidDecode,
proto,
downloadContentFromMessage,
generateForwardMessageContent,
generateWAMessageFromContent,
getContentType,
getAggregateVotesInPollMessage
} = require("@whiskeysockets/baileys");
const logg = require('pino')
const pino = require('pino')
const readline = require("readline");
const util = require("util");
const jimp = require('jimp')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const cp = require('child_process')
const FileType = require('file-type')
const path = require('path')
const _ = require('lodash')
const figlet = require("figlet");
const canva = require('knights-canvas')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg,
isUrl,
generateMessageTag,
getSizeMedia,
await,
sleep,
getBuffer,
fetchJson,
color } = require('./lib/function.js')

var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
return new Promise((resolve) => {
rl.question(text, resolve)
})
};

const usePairingCode = false

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test('mongodb://stealbotda:wandyganteng123@ac-np3spgr-shard-00-00.knbmqh7.mongodb.net:27017,ac-np3spgr-shard-00-01.knbmqh7.mongodb.net:27017,ac-np3spgr-shard-00-02.knbmqh7.mongodb.net:27017/?ssl=true&replicaSet=atlas-a0cefe-shard-0&authSource=admin&retryWrites=true&w=majority' || '') ?
new cloudDBAdapter('mongodb://stealbotda:wandyganteng123@ac-np3spgr-shard-00-00.knbmqh7.mongodb.net:27017,ac-np3spgr-shard-00-01.knbmqh7.mongodb.net:27017,ac-np3spgr-shard-00-02.knbmqh7.mongodb.net:27017/?ssl=true&replicaSet=atlas-a0cefe-shard-0&authSource=admin&retryWrites=true&w=majority') : /mongodb/.test('mongodb://stealbotda:wandyganteng123@ac-np3spgr-shard-00-00.knbmqh7.mongodb.net:27017,ac-np3spgr-shard-00-01.knbmqh7.mongodb.net:27017,ac-np3spgr-shard-00-02.knbmqh7.mongodb.net:27017/?ssl=true&replicaSet=atlas-a0cefe-shard-0&authSource=admin&retryWrites=true&w=majority') ?
new mongoDB('mongodb://stealbotda:wandyganteng123@ac-np3spgr-shard-00-00.knbmqh7.mongodb.net:27017,ac-np3spgr-shard-00-01.knbmqh7.mongodb.net:27017,ac-np3spgr-shard-00-02.knbmqh7.mongodb.net:27017/?ssl=true&replicaSet=atlas-a0cefe-shard-0&authSource=admin&retryWrites=true&w=majority') :
new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)     
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
database: {},
game: {},
settings: {},
others: {},
sticker: {},
...(global.db.data || {})
}
global.db.chain = _.chain(global.db.data)
}
loadDatabase()

if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
}, 30 * 1000)

async function startWandyy() {
const { state, saveCreds } = await useMultiFileAuthState(`./wandy2`)
const { version, isLatest } = await fetchLatestBaileysVersion();
console.log(`Pakai Versi v${version.join(".")}, Terbaru: ${isLatest}`);
 
const conn = wandyConnect({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
browser: ['Chrome (Linux)', '', ''],
auth: state
});

if(usePairingCode) {
const phoneNumber = await question('6281318565558');
const code = await conn.requestPairingCode(phoneNumber.trim())
console.log(`KODE CONNECTING : ${code}`)
}

const auth = {
creds: state.creds,
/** caching membuat penyimpanan lebih cepat untuk mengirim/menerima pesan */
keys: makeCacheableSignalKeyStore(state.keys, logg().child({ level: 'fatal', stream: 'store' })),
}

store.bind(conn.ev)

//if (global.db.data.chats[m.chat].welcome){
conn.ev.on('group-participants.update', async (anu) => {
console.log(anu)

try {
let metadata = await conn.groupMetadata(anu.id)
let participants = anu.participants
let jumlah = participants.length
for (let num of participants) {
let namem = num.replace("@s.whatsapp.net", "")
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}

async function welcomer(){
const image = await new canva.Welcome2()
.setAvatar(ppuser)
.setUsername(namem)
.setBg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAJUlAjJvRP_n-rV7mmb6Xf3-Zutfy8agig&usqp=CAU")
.setGroupname(metadata.subject)
.setMember(metadata.participants.length)
.toAttachment();
data = image.toBuffer();
return data
}

async function goodbye() {
const image = await new canva.Goodbye2()
.setAvatar(ppuser)
.setUsername(namem)
.setBg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAJUlAjJvRP_n-rV7mmb6Xf3-Zutfy8agig&usqp=CAU")
.setMember(metadata.participants.length)
.toAttachment();
data = image.toBuffer();
return data
}

let groupDesc = metadata.desc
let tes = await groupDesc.toString('utf-8')

if (anu.action == 'add') {
conn.sendMessage(anu.id, { image: await welcomer(), contextInfo: { mentionedJid: [num] }, caption: `Hi @${num.split("@")[0]}👋\nWelcome To ${metadata.subject}\n\n${tes}` })
} else if (anu.action == 'remove') {
conn.sendMessage(anu.id, { image: await goodbye(), contextInfo: { mentionedJid: [num] }, caption: `@${num.split("@")[0]} Leaving To ${metadata.subject}` })
}
}
} catch (e) {
console.log(e)
}
})
//}

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

//if (global.db.data.chats[m.chat].gcupdate){
conn.ev.on('groups.update', async (pea) => {
if (pea[0].announce == true) {
await conn.sendMessage(pea[0].id, { text: '「 Group Settings 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !' })
} else if(pea[0].announce == false) {
await conn.sendMessage(pea[0].id, { text: `「 Group Settings 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !` })
} else if (pea[0].restrict == true) {
await conn.sendMessage(pea[0].id, { text: `「 Group Settings 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`})
} else if (pea[0].restrict == false) {
await conn.sendMessage(pea[0].id, { text: `「 Group Settings 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`})
} else {
await conn.sendMessage(pea[0].id, { text:  `「 Group Settings 」\n\nGroup Subject telah diganti menjadi *${pea[0].subject}*`})
}
})
//}

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

conn.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await conn.getFile(path, true)
        let { res, data: file, filename: pathFile } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try { throw { json: JSON.parse(file.toString()) } }
            catch (e) { if (e.json) throw e.json }
        }
        let opt = { filename }
        if (quoted) opt.quoted = quoted
        if (!type) if (options.asDocument) options.asDocument = true
        let mtype = '', mimetype = type.mime
        if (/webp/.test(type.mime)) mtype = 'sticker'
        else if (/image/.test(type.mime)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime)) (
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        return await conn.sendMessage(jid, {
            ...options,
            caption,
            ptt,
            [mtype]: { url: pathFile },
            mimetype
        }, {
            ...opt,
            ...options
        })
    }


    conn.getName = (jid, withoutContact  = false) => {
        id = conn.decodeJid(jid)
        withoutContact = conn.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === conn.decodeJid(conn.user.id) ?
            conn.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await conn.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i + '@s.whatsapp.net')}\nFN:${await conn.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:hdiiofficial.bot@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/hdiiofficial\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	conn.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts })
    }
    
    conn.setStatus = (status) => {
        conn.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    conn.public = true

    conn.serializeM = (m) => smsg(conn, m, store)

conn.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
startWandyy();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
startWandyy();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
startWandyy();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
startWandyy();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
startWandyy();
  }
} else if (connection === "open") {
  conn.sendMessage('6282125039170' + "@s.whatsapp.net", { text: `Hai Sayang Aku On Kembali ` })
}
})

    conn.ev.on('creds.update', saveCreds)

conn.resize = async(buffer, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
var baper = await jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
resolve(ab)
})
}
  
    conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })
  
    conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options })
    }

    conn.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options })
    }

  
    conn.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { audio: buffer, ptt: ptt, ...options })
    }

   
    conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),  ...options }, { quoted })

   
    conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

     
    conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
    conn.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await conn.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    conn.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
   
    conn.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await conn.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await conn.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
       
       conn.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

   



    conn.cMod = (jid, copy, text = '', sender = conn.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === conn.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    
        
        

}
return conn
}

async function startWandy() {
const { state, saveCreds } = await useMultiFileAuthState(`./wandy`)
const { version, isLatest } = await fetchLatestBaileysVersion();
console.log(`Pakai Versi v${version.join(".")}, Terbaru: ${isLatest}`);
 
const conn = wandyConnect({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
browser: ['Chrome (Linux)', '', ''],
auth: state
});

if(usePairingCode) {
const phoneNumber = await question('6281318565558');
const code = await conn.requestPairingCode(phoneNumber.trim())
console.log(`KODE CONNECTING : ${code}`)
}

const auth = {
creds: state.creds,
/** caching membuat penyimpanan lebih cepat untuk mengirim/menerima pesan */
keys: makeCacheableSignalKeyStore(state.keys, logg().child({ level: 'fatal', stream: 'store' })),
}

store.bind(conn.ev)

//if (global.db.data.chats[m.chat].welcome){
conn.ev.on('group-participants.update', async (anu) => {
console.log(anu)

try {
let metadata = await conn.groupMetadata(anu.id)
let participants = anu.participants
let jumlah = participants.length
for (let num of participants) {
let namem = num.replace("@s.whatsapp.net", "")
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}

async function welcomer(){
const image = await new canva.Welcome2()
.setAvatar(ppuser)
.setUsername(namem)
.setBg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAJUlAjJvRP_n-rV7mmb6Xf3-Zutfy8agig&usqp=CAU")
.setGroupname(metadata.subject)
.setMember(metadata.participants.length)
.toAttachment();
data = image.toBuffer();
return data
}

async function goodbye() {
const image = await new canva.Goodbye2()
.setAvatar(ppuser)
.setUsername(namem)
.setBg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAJUlAjJvRP_n-rV7mmb6Xf3-Zutfy8agig&usqp=CAU")
.setMember(metadata.participants.length)
.toAttachment();
data = image.toBuffer();
return data
}

let groupDesc = metadata.desc
let tes = await groupDesc.toString('utf-8')

if (anu.action == 'add') {
conn.sendMessage(anu.id, { image: await welcomer(), contextInfo: { mentionedJid: [num] }, caption: `Hi @${num.split("@")[0]}👋\nWelcome To ${metadata.subject}\n\n${tes}` })
} else if (anu.action == 'remove') {
conn.sendMessage(anu.id, { image: await goodbye(), contextInfo: { mentionedJid: [num] }, caption: `@${num.split("@")[0]} Leaving To ${metadata.subject}` })
}
}
} catch (e) {
console.log(e)
}
})
//}

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

//if (global.db.data.chats[m.chat].gcupdate){
conn.ev.on('groups.update', async (pea) => {
if (pea[0].announce == true) {
await conn.sendMessage(pea[0].id, { text: '「 Group Settings 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !' })
} else if(pea[0].announce == false) {
await conn.sendMessage(pea[0].id, { text: `「 Group Settings 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !` })
} else if (pea[0].restrict == true) {
await conn.sendMessage(pea[0].id, { text: `「 Group Settings 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`})
} else if (pea[0].restrict == false) {
await conn.sendMessage(pea[0].id, { text: `「 Group Settings 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`})
} else {
await conn.sendMessage(pea[0].id, { text:  `「 Group Settings 」\n\nGroup Subject telah diganti menjadi *${pea[0].subject}*`})
}
})
//}

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

conn.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await conn.getFile(path, true)
        let { res, data: file, filename: pathFile } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try { throw { json: JSON.parse(file.toString()) } }
            catch (e) { if (e.json) throw e.json }
        }
        let opt = { filename }
        if (quoted) opt.quoted = quoted
        if (!type) if (options.asDocument) options.asDocument = true
        let mtype = '', mimetype = type.mime
        if (/webp/.test(type.mime)) mtype = 'sticker'
        else if (/image/.test(type.mime)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime)) (
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        return await conn.sendMessage(jid, {
            ...options,
            caption,
            ptt,
            [mtype]: { url: pathFile },
            mimetype
        }, {
            ...opt,
            ...options
        })
    }


    conn.getName = (jid, withoutContact  = false) => {
        id = conn.decodeJid(jid)
        withoutContact = conn.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === conn.decodeJid(conn.user.id) ?
            conn.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await conn.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i + '@s.whatsapp.net')}\nFN:${await conn.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:hdiiofficial.bot@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/hdiiofficial\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	conn.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts })
    }
    
    conn.setStatus = (status) => {
        conn.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    conn.public = true

    conn.serializeM = (m) => smsg(conn, m, store)

conn.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
startWandy();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
startWandy();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
startWandy();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
startWandy();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
startWandy();
  }
} else if (connection === "open") {
  conn.sendMessage('6282125039170' + "@s.whatsapp.net", { text: `Hai Sayang Aku On Kembali ` })
}
})

    conn.ev.on('creds.update', saveCreds)

conn.resize = async(buffer, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
var baper = await jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
resolve(ab)
})
}
  
    conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })
  
    conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options })
    }

    conn.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options })
    }

  
    conn.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await conn.sendMessage(jid, { audio: buffer, ptt: ptt, ...options })
    }

   
    conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),  ...options }, { quoted })

   
    conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

     
    conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
    conn.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await conn.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    conn.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
   
    conn.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await conn.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await conn.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
       
       conn.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

   



    conn.cMod = (jid, copy, text = '', sender = conn.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === conn.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    
        
        

}
return conn
}








async function _quickTest() {
  let test = await Promise.all([
    cp.spawn('ffmpeg'),
    cp.spawn('ffprobe'),
    cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    cp.spawn('convert'),
    cp.spawn('magick'),
    cp.spawn('gm'),
    cp.spawn('find', ['--version'])
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
  console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm,
    find
}
  
Object.freeze(global.support)

if (!s.ffmpeg) console.log('Please install ffmpeg for sending videos (pkg install ffmpeg)')
if (s.ffmpeg && !s.ffmpegWebp) console.log('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
if (!s.convert && !s.magick && !s.gm) console.log('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
.then(() => console.log('Quick Test Done')).catch(console.error)

startWandyy()
startWandy()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
