import type { NextApiRequest, NextApiResponse } from 'next';
import { adminEmail } from '../../utils/constants';
import { WorkshopsPayload, ContestPayload } from '../../utils/types';
const SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SENDINBLUE_SECRET;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const payload: WorkshopsPayload | ContestPayload = JSON.parse(req.body);

  const getAdminSubject = () => {
    if (payload.type == 'contest') return 'Neue Wettbewerbe Buchung!';
    if (payload.type == 'workshops') return 'Neue Workshop Buchung!';
    else return 'Incorrect subject';
  };

  const getUserEmailBody = () => {
    if (payload.type == 'contest')
      return `<html>
      <body>
      <h1>Vielen Dank für Deine Anmeldung</h1>
      <p>Ich habe Deine Buchung bekommen und werde so schnell wie möglich antworten.
      Unten findest Du noch einmal alle Details</p>
      <p>Künstlernahme/Gruppenname: ${payload.gruppenname}</p>
      <p>Vorname/Name: ${payload.name}</p>
      <p>Kategorie: ${payload.kategorie}</p>
      <p>Tanzstil: ${payload.tanzstil}</p>
      <p>Musiktitel/Interpret: ${payload.musiktitel}</p>
      <p>Email: ${payload.email}</p>
      <p>Telefonnummer: ${payload.phone}</p>
      <hr>
      <p><a href="www.1001nacht.art/danke" target="_blank">Hier unten findest Du Zahlungsmöglichkeiten<a/></p>
      </body>
      </html>`;

    if (payload.type == 'workshops')
      return `<html>
      <body>
      <h1>Vielen Dank für Deine Anmeldung</h1>
      <p>Ich habe Deine Buchung bekommen und werde so schnell wie möglich antworten.
      Unten findest Du noch einmal alle Details</p>
      <p>Vorname/Name: ${payload.name}</p>
      <p>Email: ${payload.email}</p>
      <p>Telefonnummer: ${payload.phone}</p>
      <p>Workshop Einzeln/FullPack: ${payload.workshops}</p>
      <hr>
      <p><a href="www.1001nacht.art/danke" target="_blank">Hier unten findest Du Zahlungsmöglichkeiten<a/></p>
      </body>
      </html>`;
    else return 'Incorrect data';
  };

  const getAdminEmailBody = () => {
    if (payload.type == 'contest')
      return `<html>
      <body>
      <h1>Neue Workshop Buchung!</h1>
      <p>Künstlernahme/Gruppenname: ${payload.gruppenname}</p>
      <p>Vorname/Name: ${payload.name}</p>
      <p>Kategorie: ${payload.kategorie}</p>
      <p>Tanzstil: ${payload.tanzstil}</p>
      <p>Musiktitel/Interpret: ${payload.musiktitel}</p>
      <p>Email: ${payload.email}</p>
      <p>Telefonnummer: ${payload.phone}</p>
      </body>
      </html>`;

    if (payload.type == 'workshops')
      return `<html>
      <body>
      <h1>Neue Workshop Buchung!</h1>
      <p>Vorname/Name: ${payload.name}</p>
      <p>Email: ${payload.email}</p>
      <p>Telefonnummer: ${payload.phone}</p>
      <p>Workshop Einzeln/FullPack: ${payload.workshops}</p>
      </body>
      </html>`;
    else return 'Incorrect data';
  };

  const sendMail = () => {
    new SibApiV3Sdk.TransactionalEmailsApi()
      .sendTransacEmail({
        sender: { email: 'nafisa@mac.com', name: '1001 Nacht festival' },
        subject: 'Form submission confirmation',
        htmlContent: `<html></html>`,
        messageVersions: [
          // Admin email
          {
            to: [
              {
                name: 'Festival admin',
                email: adminEmail,
              },
            ],
            subject: getAdminSubject(),
            htmlContent: getAdminEmailBody(),
          },
          // User email
          {
            to: [
              {
                name: payload.name,
                email: payload.email,
              },
            ],
            subject: 'Vielen Dank für Deine Bestellung!',
            htmlContent: getUserEmailBody(),
          },
        ],
      })
      .then(
        function (data: any) {
          res.status(200).send(JSON.stringify({ result: 'Ok' }));
        },
        function (error: any) {
          console.log(error);
          res.status(500).send(JSON.stringify({ result: 'Message not sent!' }));
        }
      );
  };
  sendMail();
}
