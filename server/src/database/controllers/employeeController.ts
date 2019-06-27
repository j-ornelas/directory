import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { EmployeeModel, seedDB } from '../models/EmployeeModel';
const router = Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/get', async (req:Request, res:Response) => {
  try {
    const employees = await EmployeeModel.find();
    res.send({ employees, success: true })
  } catch(err) {
    res.send({ employees: []})
  }
});

interface RemoveRequestInterface extends Request {
  body: { _id: string|undefined };
}
router.post('/remove', async (req:RemoveRequestInterface, res:Response) => {
  // In a real application, this route would be hidden
  // behind some authorization middleware.
  try {
    const { _id } = req.body;
    if (!_id) res.send({ err: 'No ID Given'});
    const deleteAttempt = await EmployeeModel.findOneAndDelete({ _id });
    const employees = await EmployeeModel.find();
    if (deleteAttempt) res.send({ employees, success: true });
  } catch (err) {
  }
});

router.get('/seed', async (req:Request, res:Response) => {
  // just a convienence to seed from an http req for demo simplicity
  // this is not intended to be used in the web app.
  try {
    await seedDB(true);
    res.send('database seeded')
  } catch (err) {
    res.send('error while seeding')
  }
});

export const EmployeeController = router;
