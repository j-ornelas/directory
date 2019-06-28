import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Loading } from '../common/Spinner';
import { setAllEmployees, toggleModal, Employee } from '../../redux/actions';
import {
  EmployeeModalContainer,
  ExtendedCard,
  LargerImage,
  InfoText,
  DeleteButton,
  DeleteButtonContainer,
} from './employeeModalStyles';
import { formatName } from '../../utils';
import { EmployeeDeleteRequest } from '../../classes/API';

interface CurrentEmployeeProps {
  currentEmployee:Employee;
  toggleModal:Function;
  setAllEmployees:Function;
}
class EmployeeModalComponent extends React.Component<CurrentEmployeeProps> {
  state = {
    isLoading: false,
  }

  setLoading(bool:boolean):void {
    this.setState({ isLoading: bool})
  }

  async handleDelete(e:MouseEvent) {
    e.stopPropagation();
    this.setLoading(true);
    const deleteRequest = new EmployeeDeleteRequest('/employees/remove',
      { _id: this.props.currentEmployee._id }
    );
    await deleteRequest.delete();
    if (deleteRequest.err) alert(deleteRequest.err)
    if (deleteRequest.success) {
      this.props.setAllEmployees(deleteRequest.employees);
      this.setState({ isLoading: false });
      this.props.toggleModal();
    }
  }

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
          <DeleteButtonContainer>
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <DeleteButton onClick={(e) => this.handleDelete(e)}>
                Delete
              </DeleteButton>
            )}
          </DeleteButtonContainer>
        </ExtendedCard>
      </EmployeeModalContainer>
    )
  }
}

const mapActionsToProps = (dispatch:Dispatch) => ({
  setAllEmployees(employees:Employee[]) {
    return dispatch(setAllEmployees(employees));
  },
  toggleModal() {
    return dispatch(toggleModal());
  }
});

export const EmployeeModal = connect(null, mapActionsToProps)(EmployeeModalComponent);
