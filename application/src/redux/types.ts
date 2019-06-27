import {
  SetEmployeeInterface,
  SetAllEmployeesInterFace,
  ToggleModalInterface,
  IncreasePaginatorInterface,
  DecreasePaginatorInterface,
} from './actions';

export enum ActionTypes {
  SET_CURRENT_EMPLOYEE,
  SET_ALL_EMPLOYEES,
  TOGGLE_MODAL,
  INCREASE_PAGINATOR,
  DECREASE_PAGINATOR,
}

export type Action =
SetEmployeeInterface|
SetAllEmployeesInterFace|
ToggleModalInterface|
IncreasePaginatorInterface|
DecreasePaginatorInterface;
