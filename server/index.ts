import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:5173', methods: ['POST'] }));
app.use(bodyParser.json());

app.post('/send-email', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portafolio Web" <${process.env.SMTP_USER}>`, // el remitente real
      to: process.env.SMTP_RECEIVER,
      replyTo: email, // <- para responder al usuario
      subject: `📩 Nuevo mensaje de ${name}`,
      text: `
        Has recibido un nuevo mensaje desde tu portafolio:
    
        👤 Nombre: ${name}
        📧 Correo: ${email}
        ✉️ Mensaje:
        ${message}
      `,
    });
res.status(200).send({ message: 'Email sent successfully' });
    

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Nodemailer error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
