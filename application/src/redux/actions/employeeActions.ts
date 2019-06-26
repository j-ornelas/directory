import { ActionTypes } from '../types';

export interface Employee {
  cell:string;
  email:string;
  name: {
    first:string;
    last:string;
  }
}
//set all employees
export interface SetAllEmployeesInterFace {
  type:ActionTypes.SET_ALL_EMPLOYEES;
  payload: Employee[];
}
export const setAllEmployees = (employees:Employee[]) => ({
  type: ActionTypes.SET_ALL_EMPLOYEES,
  payload: employees
})
//set focused employee
export interface SetEmployeeInterface {
  type:ActionTypes.SET_CURRENT_EMPLOYEE;
  payload: Employee;
}
export const setCurrrentEmployee = (info:Employee) => ({
  type: ActionTypes.SET_CURRENT_EMPLOYEE,
  payload: info
})
