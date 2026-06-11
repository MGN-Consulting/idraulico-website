'use strict';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, issueType, date, timeSlot, notes } = body;

    // Convalida campi obbligatori
    if (!name || !phone || !email || !date || !timeSlot) {
      return NextResponse.json(
        { error: 'Tutti i campi obbligatori (Nome, Telefono, Email, Data e Fascia Oraria) devono essere compilati.' },
        { status: 400 }
      );
    }

    // Parsa la data in formato corretto
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json(
        { error: 'Formato data non valido.' },
        { status: 400 }
      );
    }

    // 1. Salva l'appuntamento su MongoDB tramite Prisma ORM
    const appointment = await prisma.appointment.create({
      data: {
        name,
        email,
        phone,
        date: parsedDate,
        timeSlot,
        issueType,
        notes: notes || '',
        status: 'confirmed'
      }
    });

    // 2. Integrazione Predisposta per Google Calendar
    // Per attivare la sincronizzazione automatica reale con Google Calendar:
    // a. Crea un Service Account nella Google Cloud Console.
    // b. Abilita le Google Calendar API.
    // c. Scarica il file JSON delle credenziali e imposta le variabili d'ambiente:
    //    GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_CALENDAR_ID
    // d. Rimuovi i commenti dal blocco di integrazione qui sotto ed installa googleapis: npm i googleapis
    
    /*
    try {
      const { google } = require('googleapis');
      const auth = new google.auth.JWT(
        process.env.GOOGLE_CLIENT_EMAIL,
        null,
        process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        ['https://www.googleapis.com/auth/calendar']
      );

      const calendar = google.calendar({ version: 'v3', auth });
      
      const startDateTime = new Date(`${date}T${timeSlot.split(' - ')[0] || '08:00'}:00`);
      const endDateTime = new Date(`${date}T${timeSlot.split(' - ')[1] || '10:00'}:00`);

      const event = {
        summary: `🔧 Idraulico Bozzi - Intervento ${issueType}`,
        location: `Indirizzo fornito da ${name}`,
        description: `Cliente: ${name}\nTel: ${phone}\nEmail: ${email}\nProblema: ${notes}`,
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: 'Europe/Rome',
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: 'Europe/Rome',
        },
        attendees: [{ email }],
      };

      const calResponse = await calendar.events.insert({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        requestBody: event,
      });

      // Aggiorna l'appuntamento in MongoDB inserendo l'ID di Google Calendar
      await prisma.appointment.update({
        where: { id: appointment.id },
        data: { googleCalId: calResponse.data.id }
      });
    } catch (gcalError) {
      console.error('Errore durante la sincronizzazione con Google Calendar:', gcalError);
      // Non blocchiamo il flusso principale in caso di errore della sincronizzazione esterna
    }
    */

    return NextResponse.json(
      { 
        message: 'Appuntamento registrato con successo!', 
        appointmentId: appointment.id 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Errore durante il salvataggio dell\'appuntamento:', error);
    return NextResponse.json(
      { error: 'Si è verificato un errore del server durante il salvataggio dell\'appuntamento.' },
      { status: 500 }
    );
  }
}
