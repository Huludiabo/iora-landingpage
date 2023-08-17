import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { email, name, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.AWS_SMTP_HOST,
        port: 587,
        auth: {
            user: process.env.AWS_SMTP_USER,
            pass: process.env.AWS_SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.DESTINATION_EMAIL,
            subject: `New message from ${name}`,
            text: message,
        });

        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('There was an error sending the email', error);
        res.status(500).send('Internal Server Error');
    }
};