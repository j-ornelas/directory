import React from 'react';
import { connect } from 'react-redux';
import { Home } from './';
import { setAllEmployees } from '../redux/actions';
import { Loading } from '../components/common/Spinner';
import { EmployeeRequest } from '../classes/API';

interface AppProps {
  setAllEmployees:Function;
}
class AppComponent extends React.Component<AppProps> {
  state = {
    isLoading: true,
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const employeeRequest = new EmployeeRequest('/employees/get');
    await employeeRequest.get();
    if (employeeRequest.err) alert(employeeRequest.err)
    this.props.setAllEmployees(employeeRequest.employees);
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ? <Loading size="large"/> : (
      <Home />
    )
  }
}

export const App = connect(null, { setAllEmployees })(AppComponent);
