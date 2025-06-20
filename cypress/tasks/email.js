// cypress/tasks/email.js
const nodemailer = require('nodemailer');

module.exports = {
    enviaEmail: async ({ remetente, assunto, corpo }) => {
        console.log('Remetente:', remetente);
        // cy.log('Remetente:', remetente);
        console.log('Assunto:', assunto);
        console.log('Corpo:', corpo);
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'email that sends',
                    pass: 'code gmail'
                },
                // tls: {
                //     rejectUnauthorized: false
                // }
            });

            const mailOptions = {
                from: 'email that sends',
                to: remetente,
                subject: String(assunto),
                text: String(corpo),
            };
            //ver o retorno, isso que está dando erro
            const info = await transporter.sendMail(mailOptions);
            console.log('Email enviado com sucesso:', info);
            return info;
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            throw error;
        }
    },
};
