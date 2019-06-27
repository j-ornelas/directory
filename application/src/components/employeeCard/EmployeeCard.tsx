import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setCurrentEmployee, Employee } from '../../redux/actions';
import {
  CardContainer,
  SmallImage,
  EmployeeName,
} from './employeeCardStyles';
import { formatName } from '../../utils';

interface EmployeeProps {
  employee:Employee;
  setCurrentEmployee:Function;
}
class EmployeeComponent extends React.Component<EmployeeProps> {
  render() {
    const { employee } = this.props;
    return (
      <CardContainer onClick={() => this.props.setCurrentEmployee(this.props.employee)}>
        <SmallImage src={employee.picture.large} />
        <EmployeeName>
          {`${formatName(employee.name.first)} ${formatName(employee.name.last)}`}
        </EmployeeName>
      </CardContainer>
    )
  }
}

const mapActionsToProps = (dispatch:Dispatch) => ({
  setCurrentEmployee(employee:Employee) {
    return dispatch(setCurrentEmployee(employee));
  },
});

export const EmployeeCard = connect(null, mapActionsToProps)(EmployeeComponent);
