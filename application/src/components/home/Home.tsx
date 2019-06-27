import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../../redux/reducers';
import { setCurrentEmployee, increasePaginator, decreasePaginator, Employee } from '../../redux/actions';
import { EmployeeCard, EmployeeModal, Paginator } from '../'
import { CardsContainer, TitleText, HomeContainer } from './HomeStyles';

const _NUM_PER_PAGE = 4; // not using process.env for demo simplicity
interface HomeProps {
  setCurrentEmployee:Function;
  allEmployees:Employee[];
  currentEmployee:Employee;
  isModalOpen:boolean;
  increasePaginator:Function;
  decreasePaginator:Function;
  paginatorStartIndex:number;
}
class HomeComponent extends React.Component<HomeProps> {
  increaseIndex(numPerPage:number):void {
    this.props.increasePaginator(numPerPage);
  }
  decreaseIndex(numPerPage:number):void {
    this.props.decreasePaginator(numPerPage);
  }
  renderNoEmployees():JSX.Element {
    return <p>No employees found</p>;
  }
  generatePageOfEmployees():Employee[] {
    const { allEmployees, paginatorStartIndex } = this.props;
    return allEmployees.slice(paginatorStartIndex, paginatorStartIndex + _NUM_PER_PAGE);
  }
  render() {
    if (this.props.allEmployees.length === 0) return this.renderNoEmployees();
    return (
      <HomeContainer>
      {this.props.isModalOpen && (
        <EmployeeModal currentEmployee={this.props.currentEmployee} />
      )}
      <TitleText>Our Team:</TitleText>
      <Paginator
        list={this.props.allEmployees}
        decreaseFunc={(numPerPage:number) => this.decreaseIndex(numPerPage)}
        increaseFunc={(numPerPage:number) => this.increaseIndex(numPerPage)}
        startIndex={this.props.paginatorStartIndex}
        numPerPage={_NUM_PER_PAGE}
      />
      <CardsContainer>
        {this.generatePageOfEmployees().map((employee:Employee) => {
          return (
            <EmployeeCard key={JSON.stringify(employee)} employee={employee}/>
          )
        })}
    </CardsContainer>
    </HomeContainer>
    )
  }
}


const mapStateToProps = ({ allEmployees, currentEmployee, isModalOpen, paginatorStartIndex }:StoreState) => ({
  allEmployees,
  currentEmployee,
  isModalOpen,
  paginatorStartIndex,
})
const mapActionsToProps = (dispatch:Dispatch) => ({
  setCurrentEmployee(employee:Employee) {
    return dispatch(setCurrentEmployee(employee));
  },
  increasePaginator(numPerPage:number) {
    return dispatch(increasePaginator(numPerPage));
  },
  decreasePaginator(numPerPage:number) {
    return dispatch(decreasePaginator(numPerPage));
  },
});

export const Home = connect(mapStateToProps, mapActionsToProps)(HomeComponent);
