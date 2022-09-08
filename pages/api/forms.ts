import type { NextApiRequest, NextApiResponse } from 'next';
import { adminEmail } from '../../utils/constants';

interface WorkshopsPayload {
  type: 'workshops';
  name: string;
  email: string;
  phone: string;
  ws: string;
}

const SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SENDINBLUE_SECRET;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body: WorkshopsPayload = JSON.parse(req.body);

  const sendMail = () => {
    new SibApiV3Sdk.TransactionalEmailsApi()
      .sendTransacEmail({
        sender: { email: 'vkluchenkov@gmail.com', name: '1001 Nacht festival' },
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
            subject: 'Neue Workshop Buchung!',
            htmlContent: `<html>
            <body>
            <h1>Neue Workshop Buchung!</h1>
            <p>Vorname/Name: ${body.name}</p>
            <p>Email: ${body.email}</p>
            <p>Telefonnummer: ${body.phone}</p>
            <p>Workshop Einzeln/FullPack: ${body.ws}</p>
            </body>
            </html>`,
          },
          // User email
          {
            to: [
              {
                name: body.name,
                email: body.email,
              },
            ],
            subject: 'Vielen Dank für Deine Bestellung!',
            htmlContent: `<html>
            <body>
            <h1>Vielen Dank für Deine Anmeldung</h1>
            <p>Ich habe Deine Buchung bekommen und werde so schnell wie möglich antworten.
            Unten findest Du noch einmal alle Details</p>
            <p>Vorname/Name: ${body.name}</p>
            <p>Email: ${body.email}</p>
            <p>Telefonnummer: ${body.phone}</p>
            <p>Workshop Einzeln/FullPack: ${body.ws}</p>
            </body>
            </html>`,
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
