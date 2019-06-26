import { Router, Request, Response } from 'express';

const router = Router();

router.get('/employees', (req:Request, res:Response) => {
  res.send({ info: [
    { name: 'john doe' },
    { name: 'jane doe' },
  ] })
});

export { router };
