import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../../redux/reducers';
import { setCurrentEmployee, Employee } from '../../redux/actions';
import { EmployeeCard, EmployeeModal } from '../'
import { CardsContainer } from './HomeStyles';

interface HomeProps {
  setCurrentEmployee:Function;
  allEmployees:Employee[];
  currentEmployee:Employee;
  isModalOpen:boolean;
}
class HomeComponent extends React.Component<HomeProps> {
  renderNoEmployees():JSX.Element {
    return <p>No employees found</p>;
  }
  render() {
    if (this.props.allEmployees.length === 0) return this.renderNoEmployees();
    return (
      <CardsContainer>
        {this.props.isModalOpen && (
          <EmployeeModal currentEmployee={this.props.currentEmployee} />
        )}
        {this.props.allEmployees.map((employee:Employee) => {
          return (
            <EmployeeCard key={JSON.stringify(employee)} employee={employee}/>
          )
        })}
    </CardsContainer>
    )
  }
}


const mapStateToProps = ({ allEmployees, currentEmployee, isModalOpen }:StoreState) => ({
  allEmployees,
  currentEmployee,
  isModalOpen,
})
const mapActionsToProps = (dispatch:Dispatch) => ({
  setCurrentEmployee(employee:Employee) {
    return dispatch(setCurrentEmployee(employee));
  },
});

export const Home = connect(mapStateToProps, mapActionsToProps)(HomeComponent);
