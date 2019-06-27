import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../../redux/reducers';
import { setCurrentEmployee, Employee } from '../../redux/actions';

interface HomeProps {
  setCurrentEmployee:Function;
  allEmployees:Employee[];
}
class HomeComponent extends React.Component<HomeProps> {
  render() {
    return (
      this.props.allEmployees.map((employee:Employee, index:number) => {
        return (
          <li
            onClick={() => this.props.setCurrentEmployee(employee)}
            key={employee.cell + index}
          >
            {employee.cell}
          </li>
        )
      })
    )
  }
}


const mapStateToProps = ({ allEmployees }:StoreState) => ({
  allEmployees
})
const mapActionsToProps = (dispatch:Dispatch) => ({
  setCurrentEmployee(employee:Employee) {
    return dispatch(setCurrentEmployee(employee));
  },
});

export const Home = connect(mapStateToProps, mapActionsToProps)(HomeComponent);
