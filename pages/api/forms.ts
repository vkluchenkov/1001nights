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
            subject: 'New form submission',
            htmlContent: `<html>
            <body>
            <h1>New workshops registration!</h1>
            <p>Name: ${body.name}</p>
            <p>Email: ${body.email}</p>
            <p>Phone: ${body.phone}</p>
            <p>Workshops: ${body.ws}</p>
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
            subject: 'Thank you for registration!',
            htmlContent: `<html>
            <body>
            <h1>Your registration is received!</h1>
            <p>We will contact you as soon as we process it.</p>
            <h2>Your registration details:</h2>
            <p>Name: ${body.name}</p>
            <p>Email: ${body.email}</p>
            <p>Phone: ${body.phone}</p>
            <p>Workshops: ${body.ws}</p>
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
