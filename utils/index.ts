import {Record} from '@/types';
import Airtable from 'airtable';

export async function fetchAirtableRecords(): Promise<Record[]> {
  // Airtable.configure({
  //   endpointUrl: 'https://api.airtable.com',
  //   apiKey:
  //     'pat1EFkK4t1lvkafU.5b27fcfacbaeba9a409b0e2642d1d35973dd97577e5b48320e230a18d8511b0c',
  // });
  // const base = Airtable.base('appKXOqc6yAK0a9a9');

  // console.log('fetching...');

  // const records = await base('Trends Table')
  //   .select({
  //     maxRecords: 1,
  //     fields: ['Trending Keyword'],
  //   })
  //   .firstPage();

  // return JSON.parse(JSON.stringify(records));
  const res = await fetch(
    'https://api.airtable.com/v0/appKXOqc6yAK0a9a9/tblXNIYFPImMh8TiQ',
    {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer pat1EFkK4t1lvkafU.5b27fcfacbaeba9a409b0e2642d1d35973dd97577e5b48320e230a18d8511b0c',
      },
    }
  );
  const records: Record[] = await res.json();

  // console.log(records);

  return records;
}
