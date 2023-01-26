const express = require('express')
const app = express()

app.get('/', (req, res) => {
res.send('Hello World!4')
// Invocamos o leitor de qr code
const qrcode = require('qrcode-terminal');

const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // MudanÃ§a Buttons
const client = new Client();

// entao habilitamos o usuario a acessar o serviÃ§o de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certin 
client.on('ready', () => {
    res.send('Hello World!5')
});

})

var port = process.env.PORT || '3000';
app.listen(port, () => console.log(`Example app listening on port ${port}!`))