import { Employee } from '../redux/actions';
import { createHeaders } from '../utils';


interface ServerResponse {
  success?:boolean;
  employees:Employee[]
  err:string;
}
export class EmployeeRequest {
  err:string = '';
  employees:Employee[] = [];

  constructor(public url:string) {}

  async get() {
    try {
      await fetch(this.url, { method: 'GET', headers: createHeaders() })
        .then((res:Response) => res.json())
        .then((parsedRes:ServerResponse) => {
          if (parsedRes.err) this.err = parsedRes.err;
          const updatedEmployees = parsedRes.employees;
          if (parsedRes.success && updatedEmployees) {
            this.employees = updatedEmployees
          }
        })
    } catch (error) {
      this.err = 'Could not connect to server';
    }
  };

}

interface BodyInterface {
  _id:string;
}
export class EmployeeDeleteRequest extends EmployeeRequest {
  success:boolean = false;

  constructor(public url:string, public body:BodyInterface) {
    super(url);
  }

  async delete() {
    try {
      await fetch(this.url, { method: 'DELETE', headers: createHeaders(), body: JSON.stringify(this.body) })
        .then((res:Response) => res.json())
        .then((parsedRes:ServerResponse) => {
          if (parsedRes.err) this.err = parsedRes.err;
          if (parsedRes.success) this.success = true;
          const updatedEmployees = parsedRes.employees;
          if (parsedRes.success && updatedEmployees) {
            this.employees = updatedEmployees
          }
        })
    } catch (error) {
      this.err = 'Could not Connect to server';
    }
  }
}
