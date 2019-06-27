import { ActionTypes } from '../types';

export interface Employee {
  cell:string;
  email:string;
  name: {
    first:string;
    last:string;
  };
  picture: {
    large:string;
    medium:string;
  }
}
// Set all employees
export interface SetAllEmployeesInterFace {
  type:ActionTypes.SET_ALL_EMPLOYEES;
  payload: Employee[];
}
export const setAllEmployees = (employees:Employee[]) => ({
  type: ActionTypes.SET_ALL_EMPLOYEES,
  payload: employees
})
// Set focused employee
export interface SetEmployeeInterface {
  type:ActionTypes.SET_CURRENT_EMPLOYEE;
  payload: Employee;
}
export const setCurrentEmployee = (info:Employee) => ({
  type: ActionTypes.SET_CURRENT_EMPLOYEE,
  payload: info
})
// toggle EmployeeModal
export interface ToggleModalInterface {
  type:ActionTypes.TOGGLE_MODAL;
}
export const toggleModal = () => ({
  type: ActionTypes.TOGGLE_MODAL,
})
