import nodemailer from 'nodemailer';

export async function sendContactEmail({
  name,
  phone,
  email,
  subject,
  message,
}: {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.CONTACT_ADDRESS || 'no-reply@example.com',
      subject: `Richiesta: ${subject}`,
      text: `Nome: ${name}\nTelefono: ${phone}\nEmail: ${email}\nOggetto: ${subject}\n\n---\nMessaggio:\n---\n${message}`,
    });
  } catch (err) {
    console.error('Email send error:', err);
    throw err;
  }
}
