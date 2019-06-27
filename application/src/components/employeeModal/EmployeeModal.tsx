import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setCurrentEmployee, toggleModal, Employee } from '../../redux/actions';
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
  toggleModal:Function;
}
class EmployeeModalComponent extends React.Component<CurrentEmployeeProps> {
  render() {
    const { currentEmployee, toggleModal } = this.props;
    const { first, last } = currentEmployee.name;
    return (
      <EmployeeModalContainer onClick={() => toggleModal()}>
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
  toggleModal() {
    return dispatch(toggleModal());
  }
});

export const EmployeeModal = connect(null, mapActionsToProps)(EmployeeModalComponent);
