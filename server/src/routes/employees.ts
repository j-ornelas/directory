import { Router, Request, Response } from 'express';
import fetch from 'node-fetch';

const router = Router();

interface RequestWithBody extends Request {
  body: { [key:string]: string|undefined };
}
router.get('/employees', (req:RequestWithBody, res:Response) => {
  const { numOfResults } = req.body;
  fetch(`https://randomuser.me/api/?results=${numOfResults || 10}`)
    .then(info => info.json())
    .then(data => res.send({ employees: data.results }))
    .catch((err) => res.send({ employees: [], error: err.toString() }));
});

export { router };
