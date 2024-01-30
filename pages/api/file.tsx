import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { createReadStream, existsSync } from 'fs';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.method);

  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Not authorised' });
    // throw new Error('Only POST requests allowed');
  }

  if (!req.body.name || !req.body.email || !req.body.telephone) {
    res.status(400).json({ message: 'Not authorised' });
    // throw new Error('Not authorised');
  }

  try {
    const { filename } = req.query;

    //If no file name, return 404
    if (!filename) {
      res.status(404).json({ message: 'No file found' });
      // throw new Error('No file found');
    }

    const filePath = path.join('./pages/assets/', filename as string);

    console.log(filePath);

    if (!existsSync(filePath)) {
      res.status(404).json({ message: 'Not found' });
      // throw new Error('No file found');
    }

    //Set the proper headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

    //Create a read stream and pipe to the response
    createReadStream(filePath).pipe(res);
  } catch (exception) {
    //Conceal the exception, but log it
    console.warn(exception);
    res.status(500).json({ message: 'Internal Server Error' });
    // throw new Error('Server Error');
  }
};

export default handler;
