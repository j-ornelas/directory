import { Employee } from '../actions';
import { ActionTypes, Action } from '../types';


export const allEmployees = (state:Employee[] = [], action:Action) => {
  switch (action.type) {
    case ActionTypes.SET_ALL_EMPLOYEES:
      return action.payload;
    default:
      return state;
  }
}

const DEFAULT_EMPLOYEE_STATE = {
  email: '',
  cell: '',
  name: { first:'', last: ''},
  picture: { medium: '', large: ''},

}
export const currentEmployee = (state:Employee = DEFAULT_EMPLOYEE_STATE, action:Action) => {
  switch(action.type) {
    case ActionTypes.SET_CURRENT_EMPLOYEE:
      return action.payload;
    default:
      return state;
  }
}
