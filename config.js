const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |BWM-XMD;;;H4sIAAAAAAAAA5VU2W6rSBT8l36Nc8NubCnSAAaMdwPeGI1GbWhwm9XdbHbkfx8RJ7p5mHsn89bqpU51VZ3zBrIcUzRFVzB8AwXBNSxRtyyvBQJDoFZhiAjogQCWEAzBZTGDulIXm+npxCTWhXieMKguhsjPnYHxRFVRQ0tpFUl6/AruPVBUxwT7vwEc3aCWr6cURp6vCu6E7mF4QZ6Z8k7u6kw55s3gHC6aZN+8gnuHCDHBWaQXJ5QiApMpuq4gJt+jjwyPFJIqI9fcHxrHSXfutF3KgerLK1VgfH+0ry2Gb7lM/h79q+oa4+hC3erJY2dz5TrNbDpKOEFZTRa+vhZIfAxmlRpfhQd9iqMMBVaAshKX12/r7it9Y36UbcOv5alIZ2bT8k/eYMdFjlvh0izgPp03Ee/F0feIE8tcyqhtd0bIChDtz7WyO5vSJCzmxV4QzTXraeVIPWCWfiW+Ip9Zif+P7rpmo8ZKch05El+LUZstSjxtvZJzlIlXLNbhXPaM2llvhO/RP8+hObLXVcxKjX0kVz0UDxvJHT81B2Wysvz5yNN37FGrtC/0YVmR37Ic++dDw68qTXCxhX1nB3luvomOe/nsMsvBBBFGtFbK1n5xWmaK6Zh5ud1kCe2EA4dtfA5ZsV3QRSQcJq5hn1N4mI7Wr+8/itHVCsCQvfcAQRGmJYElzrNuj+N6AAa1g3yCynd1wZPtbGbqiOipHjW0cuwNjd249Vg1W+rRaLs6Wmxin7AF16+gBwqS+4hSFIwxLXNynSNKYYQoGP75Vw9kqC0fvnXVeLYHQkxoucmqIslh8Gnq5yH0/bzKSuea+Vq3QAQMmZ/bqCxxFtFOxiqDxD/hGmknWFIwDGFC0b0HAlRjH3V4AMuTw99KfXCq3eZ8m6Gtze9cpaN8yrPHleB4lAZhIDwLksQ9C7IvPsuh5D9DRhoMGK4vcEgGPYA/WqZ780sHBd6kQt+U/NJrbbiGOLsRhoeSt5u/u/CQHhEUgGFJKtQDR+jHVeHmMcp+g6vETbrQ4a3cXZqX1OjvILraE1d/ov4X3IelYPj2c0xpedDhCbMJb4vcCPRA+p5A3P2c43mRZ0WWEQf9oST9QX80nZCwKH5kqOxwP0TvXgSohDihYAi0idtWA2WkT/ZUngmmqeiRokWdqp8mfYb9kSZmLym2udXEHNUoPoeXNI4mGzVJ+vLoBtOgZvms0I/+Gh9e/wUEDIHIbqylHEvmZol3KjED1VrxsnRW6zlbXRbVzTs30brE57PQKGgR05es4Pjpi7fQtOVp6RbL/iZvDXevmW2cxcZUtYKR8tpVe4TlazGpHt8m4stG8OOF7LNxsJq33NK4cC2/Jabr1ks6Xpz2kN2upxlzE2TexKvUR/4cLxcrpxgpJLtMb60yNiYXHaZHsboozaMN38dA8jF+8XuHvH1EK8TofZplsLPov8z5mnLm3vuC8TEff5EkNTCeIt1O1hUcE76weKkoLG2reB56UWSuyI6DQJRsk9etFNzvf/VAkcAyzEkKhgBmAclxAHoggbRUfjaqi1NES5gWYMj2BU6QRYbr3/8BUlsTeN0HAAA=| '',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Nismark",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 233531510597",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

