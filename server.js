'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Some random motivational quotes
const quotes = [
  "Der einzige Weg, großartige Arbeit zu leisten, ist zu lieben, was man tut. – Steve Jobs",
  "Scheitern ist lediglich die Gelegenheit, mit neuen Ansätzen noch einmal anzufangen. – Henry Ford",
  "Wer immer tut, was er schon kann, bleibt immer das, was er schon ist. – Henry Ford",
  "Erfolg hat nur, wer etwas tut, während er auf den Erfolg wartet. – Thomas Alva Edison",
  "Mut steht am Anfang des Handelns, Glück am Ende. – Demokrit"
];

// Wochentagsnamen auf Deutsch
const days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

// App
const app = express();

app.get('/', (req, res) => {
  const now = new Date();
  const dayName = days[now.getDay()];
  const dateStr = now.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  res.send(`
    <!DOCTYPE html>
    <html lang="de">
      <head>
        <meta charset="UTF-8">
        <title>FS2025 DevOps Kurs</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f4f9; color: #333; text-align: center; padding: 2rem; }
          h1 { color: #2c3e50; }
          blockquote { font-style: italic; margin: 1.5rem auto; max-width: 600px; color: #555; }
          footer { margin-top: 2rem; font-size: 0.9rem; color: #777; }
        </style>
      </head>
      <body>
        <h1>👋 Willkommen zum FS2025 DevOps Kurs - Anpassung mit Cloud Deployment!</h1>
        <p>Heute ist <strong>${dayName}, ${dateStr}</strong></p>
        <blockquote>„${quote}“</blockquote>
        <footer>Deployed mit ❤ auf render.com</footer>
      </body>
    </html>
  `);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
