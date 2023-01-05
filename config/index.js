module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "lakdjoçidha83y9r83ahrpa7fbp93892bf3892fbufolh32lf89b",
    api: process.env.NODE_ENV === "production" ? "https://api.loja-teste.ampliee.com/" : "http://localhost:3000", 
    loja: process.env.NODE_ENV === "production" ? "https://loja-teste.ampliee.com/" : "http://localhost:8000"
};