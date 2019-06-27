import {
  SetEmployeeInterface,
  SetAllEmployeesInterFace,
  ToggleModalInterface,
} from './actions';

export enum ActionTypes {
  SET_CURRENT_EMPLOYEE,
  SET_ALL_EMPLOYEES,
  TOGGLE_MODAL,
}

export type Action =
SetEmployeeInterface|
SetAllEmployeesInterFace|
ToggleModalInterface;
