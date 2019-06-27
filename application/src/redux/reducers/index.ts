import { combineReducers } from 'redux';
import { currentEmployee, allEmployees } from './employeeReducers';
import { Employee } from '../actions';

export interface StoreState {
  allEmployees: Employee[];
  currentEmployee: Employee;
}

export const reducers = combineReducers<StoreState>({
  allEmployees: allEmployees,
  currentEmployee: currentEmployee
});
