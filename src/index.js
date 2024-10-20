const express = require('express')
const { ServerConfig } = require('./config')
const apiRoutes = require('./routes');
const mailsender = require('./config/email-config')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoutes)

app.listen(ServerConfig.PORT,async () => {
    console.log(`Successfully started the server on on PORT : ${ServerConfig.PORT}`)
    /*
    Nodemailer testing
    try {
        const response = await mailsender.sendMail({
            from : ServerConfig.GMAIL_MAIL,
            to : 'tripathisameer415@gmail.com',
            subject : 'Is it working ?',
            text: 'All is well !'
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    */
    })