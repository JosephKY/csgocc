require("dotenv").config();

const configApp = {
    name: "CSGO Community Competitive",
    baseURL: process.env.MODE == "DEV" ? "http://localhost:4000/" : "https://www.csgocompetitive.com/",
    corsWhitelist: [
        "http://localhost:4000",
        "http://localhost:5000",
        "https://csgocompetitive.com",
        "https://www.csgocompetitive.com",
        "https://avatars.steamstatic.com"
    ],
    localSecure: false
}

if(process.env.MODE == "DEV" && configApp.localSecure === true){
    configApp.baseURL = "https://localhost:4000"
}

module.exports = configApp;