import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setAllEmployees, toggleModal, Employee } from '../../redux/actions';
import {
  EmployeeModalContainer,
  ExtendedCard,
  LargerImage,
  InfoText,
  DeleteButton,
  DeleteButtonContainer,
} from './employeeModalStyles';
import { formatName, createHeaders } from '../../utils';

interface RemoveEmployeeResponse {
  success?:boolean;
  employees:Employee[]
  err?:string;
}
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

  handleDelete(e:MouseEvent):void {
    e.stopPropagation();
    this.setLoading(true);
    fetch('/employees/remove', {
      method: 'DELETE',
      headers: createHeaders(),
      body: JSON.stringify({
        _id: this.props.currentEmployee._id
      })
    })
      .then((res:Response) => res.json())
      .then((info:RemoveEmployeeResponse) => {
        if (info.err) alert(info.err);
        if (info.success && info.employees) {
          this.setLoading(false);
          this.props.setAllEmployees(info.employees);
          this.props.toggleModal();
        } else {
          this.setLoading(false);
        }
      })
      .catch(() => {
        alert('There was an error processing your requst.')
        this.setLoading(false);
      });
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
              <div>hi</div>
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
