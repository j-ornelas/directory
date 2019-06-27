import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setCurrentEmployee, Employee } from '../../redux/actions';
import { CurrentEmployeeContainer } from './employeeModalStyles';

interface CurrentEmployeeProps {
  currentEmployee:Employee;
  setCurrentEmployee:Function;
}
class EmployeeModalComponent extends React.Component<CurrentEmployeeProps> {
  render() {
    return (
      <CurrentEmployeeContainer />
    )
  }
}

const mapActionsToProps = (dispatch:Dispatch) => ({
  setCurrentEmployee(employee:Employee) {
    return dispatch(setCurrentEmployee(employee));
  },
});

export const EmployeeModal = connect(null, mapActionsToProps)(EmployeeModalComponent);
