import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setCurrentEmployee, Employee } from '../../redux/actions';
import {
  EmployeeModalContainer,
  ExtendedCard,
  LargerImage,
  InfoText,
} from './employeeModalStyles';
import { formatName } from '../../utils';

interface CurrentEmployeeProps {
  currentEmployee:Employee;
  setCurrentEmployee:Function;
}
class EmployeeModalComponent extends React.Component<CurrentEmployeeProps> {
  render() {
    const { currentEmployee } = this.props;
    const { first, last } = currentEmployee.name;
    return (
      <EmployeeModalContainer onClick={() => console.log('clicked')}>
        <ExtendedCard>
          <LargerImage src={currentEmployee.picture.large} />
          <InfoText>{`${formatName(first)} ${formatName(last)}`}</InfoText>
          <InfoText>{currentEmployee.email}</InfoText>
          <InfoText>{currentEmployee.cell}</InfoText>
        </ExtendedCard>
      </EmployeeModalContainer>
    )
  }
}

const mapActionsToProps = (dispatch:Dispatch) => ({
  // TODO: replace with action to remove employee.
  setCurrentEmployee(employee:Employee) {
    return dispatch(setCurrentEmployee(employee));
  },
});

export const EmployeeModal = connect(null, mapActionsToProps)(EmployeeModalComponent);
