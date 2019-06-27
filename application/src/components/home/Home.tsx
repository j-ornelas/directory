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
  render() {
    return this.props.allEmployees.length === 0 ? (
      <p>no employees found</p>
    ) : (
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
