import {
  SetEmployeeInterface,
  SetAllEmployeesInterFace
} from './actions';

export enum ActionTypes {
  SET_CURRENT_EMPLOYEE,
  SET_ALL_EMPLOYEES,
}

export type Action = SetEmployeeInterface|SetAllEmployeesInterFace;
