const nodemailer = require('nodemailer')

const {GMAIL_PASS,GMAIL_MAIL} = require('./server-config')

const mailsender = nodemailer.createTransport({
    service : 'Gmail',
    auth : {
        user : GMAIL_MAIL,
        pass : GMAIL_PASS
    }
});

module.exports=mailsender