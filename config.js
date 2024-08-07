
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8befb8f19593eadc17ea1.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "18298621148";
global.owner = process.env.OWNER_NUMBER || "242066456472";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/8befb8f19593eadc17ea1.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUtZYnE2VXlUY1hBWTdENXJNVnVZWWFTMmlId1g3VytEZFBCSDhFVGUzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXZmT0F1OUhFTVpUV0xQZTZtaXp5QWdrQWhhYmptTnJSdVZYZCtFVG9nVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTEtubW9FekYrVEQydks3SEFwbk9paklBQkx2dDU1THZFUXdzWkQ4U1ZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyVndhd1FPMWxjVnUvb0p3NldLc21qWCtjOHhVWnFyZmxMNzNwVzdCalRFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdMa2hYTDlNTStyV2lUeXNHdnlqWHhNMmhTM2xCbU4rYS9SRGh4eldoMFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVyVXd6SmZGb0p2SjJRNllTZEZWcUpackwxekl6UHFUaXZNdmwrZkNqaWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlrS0xTMis0eXlpV2pWRFl4ZHdrYWtqQjRTcnl1WGZoT3FxRTBCRHhrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFd2YjhvZnl4dzE1b0k5NzRsVEE1T2ErcjlOTEVkV3B1SVB6cVY1OCt3dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklqWkFtalBSdndzVFRrbC9jeURSUy9hNWt1SitrcUU4akZCTzdtT3Q1NDVRcm1HRHlQV1FkVFJIVWV6WW5VeDJHRDhZdDlJSXN5TmpZOWhUVUxnMUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM2LCJhZHZTZWNyZXRLZXkiOiJUQTRIMWJLb2dDa081YUwxa0RmK2poenpIUlNJMDRpWDhieTBHVXNrR3hRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyMElrTnlxNVFuNnl6aXVBTmNRWmRRIiwicGhvbmVJZCI6ImZkZjBmMmZmLTcyYjQtNGE3Ny1iNDkxLTkwOThkN2VkMTMyYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlaWFwZ05mRXNmUEpRMzZRVVI5MlpNLytIdzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNG0rZUxkeGNVTzM1L3BXWHhXWWJHajlJR1JBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNLNlFXNE1LIiwibWUiOnsiaWQiOiIyNDIwNjY0NTY0NzI6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDQVZBVklOIPCWo5gifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01iYWlZa0dFT3ZMejdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBXTERWTkdHaE9SamZHVVdOYlIwMzZ5SXNmRkwvMkJkL1E1UVZyWGZQVTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJUQ2tidHZPcER0NWdTbWVPRHJ1empGbmZKaFpyWW82cE9GVmtSU05HVFY1QVBkMDhBclQ0SWpLVWE0RzlsSUhiMlBlVERQaHgxd3dOb3lTVnpqMWpBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4NUN1WFVySzlRdU5WNXhnZFJzU0JHR0kwSnVkei9waVJGWjIwTVVVcHNOTkhZRFU0enRNdzFva0ZHcEIreXVuenAvR1VtSzlkQzNPNEVQbnBVbFBBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MjA2NjQ1NjQ3MjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQxaXcxVFJob1RrWTN4bEZqVzBkTitzaUxIeFMvOWdYZjBPVUZhMTN6MU8ifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMwNjU4NDcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTXRqIn0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "https://telegra.ph/file/8befb8f19593eadc17ea1.jpg",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "🇨🇬",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𖤐𝗦𝗲́𝗻𝗮𝘁𝗲𝘂𝗿✍️𝗕𝗹𝗮𝗰𝗸✞𝗞𝗶𝗹𝗹𝗲𝗿༒*",
  author: process.env.PACK_AUTHER || "𖤐𝗦𝗲́𝗻𝗮𝘁𝗲𝘂𝗿✍️𝗕𝗹𝗮𝗰𝗸✞𝗞𝗶𝗹𝗹𝗲𝗿༒",
  packname: process.env.PACK_NAME || "𖤐𝗦𝗲́𝗻𝗮𝘁𝗲𝘂𝗿✍️𝗕𝗹𝗮𝗰𝗸✞𝗞𝗶𝗹𝗹𝗲𝗿༒",
  botname: process.env.BOT_NAME || "𖤐𝗦𝗲́𝗻𝗮𝘁𝗲𝘂𝗿✍️𝗕𝗹𝗮𝗰𝗸✞𝗞𝗶𝗹𝗹𝗲𝗿༒",
  ownername: process.env.OWNER_NAME || "𝐂𝐀𝐕𝐀𝐕𝐈𝐍-𝐂𝐎𝐍𝐆𝐎",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "𖤐𝗦𝗲́𝗻𝗮𝘁𝗲𝘂𝗿✍️𝗕𝗹𝗮𝗰𝗸✞𝗞𝗶𝗹𝗹𝗲𝗿༒").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
