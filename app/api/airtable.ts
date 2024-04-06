// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import Airtable from 'airtable';

// type Data = {
//   id: string,
//   fields:
// };

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey:
    'pat1EFkK4t1lvkafU.5b27fcfacbaeba9a409b0e2642d1d35973dd97577e5b48320e230a18d8511b0c',
});
var base = Airtable.base('appKXOqc6yAK0a9a9');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const table = base('Trends Table');
    const records = await table.select().all();
    res.status(200).json(records);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
}
