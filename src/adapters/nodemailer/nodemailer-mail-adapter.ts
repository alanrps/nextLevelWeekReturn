import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0a7521a1de1fd3",
      pass: "3aa9fe49b18fd6"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedback <oi@feedback.com>',
            to: 'Alan Patriarca <alanrodrigo636@gmail.com>',
            subject: subject,
            html: body,
        })
    }
}