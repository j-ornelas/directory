import { combineReducers } from 'redux';
import {
  currentEmployee,
  allEmployees,
  isModalOpen,
} from './employeeReducers';
import { Employee } from '../actions';

export interface StoreState {
  allEmployees: Employee[];
  currentEmployee: Employee;
  isModalOpen: boolean;
}

export const reducers = combineReducers<StoreState>({
  allEmployees,
  currentEmployee,
  isModalOpen
});
