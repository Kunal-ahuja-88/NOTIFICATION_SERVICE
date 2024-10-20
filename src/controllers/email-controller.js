const { EmailService } = require('../services');

async function create(req, res) {
    try {

        console.log(req.body); // Log the request body to ensure recepientEmail is passed

        const { subject, content, recepientEmail } = req.body;

        if (!subject || !content || !recepientEmail) {
            return res.status(400).json({
                message: 'Subject, content, and recepientEmail are required fields.'
            });
        }

        const response = await EmailService.createTicket({
            subject: req.body.subject,
            content: req.body.content,
            recepientEmail: req.body.recepientEmail
        });
        return res.status(201).json(response);
    } catch(error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    create
}