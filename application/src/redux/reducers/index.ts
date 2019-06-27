import { combineReducers } from 'redux';
import {
  currentEmployee,
  allEmployees,
  isModalOpen,
} from './employeeReducers';
import {
  paginatorStartIndex,
} from './paginatorReducers';
import { Employee } from '../actions';

export interface StoreState {
  allEmployees: Employee[];
  currentEmployee: Employee;
  isModalOpen: boolean;
  paginatorStartIndex: number;
}

export const reducers = combineReducers<StoreState>({
  allEmployees,
  currentEmployee,
  isModalOpen,
  paginatorStartIndex,
});
