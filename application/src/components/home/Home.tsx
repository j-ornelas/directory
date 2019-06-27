import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../../redux/reducers';
import { setCurrentEmployee, Employee } from '../../redux/actions';
import { EmployeeCard, EmployeeModal, Paginator } from '../'
import { CardsContainer } from './HomeStyles';

const _NUM_PER_PAGE = 4; // not using process.env for demo simplicity
interface HomeProps {
  setCurrentEmployee:Function;
  allEmployees:Employee[];
  currentEmployee:Employee;
  isModalOpen:boolean;
}
class HomeComponent extends React.Component<HomeProps> {
  state = {
    startIndex: 0,
  }
  increaseIndex(numPerPage:number):void {
    this.setState({ startIndex: this.state.startIndex + numPerPage });
  }
  decreaseIndex(numPerPage:number):void {
    const newIndex = this.state.startIndex - numPerPage;
    this.setState({ startIndex: newIndex < 0 ? 0 : newIndex });
  }
  renderNoEmployees():JSX.Element {
    return <p>No employees found</p>;
  }
  generatePageOfEmployees():Employee[] {
    const { allEmployees } = this.props;
    const { startIndex } = this.state;
    return allEmployees.slice(startIndex, startIndex + _NUM_PER_PAGE);
  }
  render() {
    if (this.props.allEmployees.length === 0) return this.renderNoEmployees();
    return (
      <>
      {this.props.isModalOpen && (
        <EmployeeModal currentEmployee={this.props.currentEmployee} />
      )}
      <CardsContainer>
        {this.generatePageOfEmployees().map((employee:Employee) => {
          return (
            <EmployeeCard key={JSON.stringify(employee)} employee={employee}/>
          )
        })}
    </CardsContainer>
    <Paginator
      list={this.props.allEmployees}
      decreaseFunc={(numPerPage:number) => this.decreaseIndex(numPerPage)}
      increaseFunc={(numPerPage:number) => this.increaseIndex(numPerPage)}
      startIndex={this.state.startIndex}
      numPerPage={_NUM_PER_PAGE}
    />
    </>
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
