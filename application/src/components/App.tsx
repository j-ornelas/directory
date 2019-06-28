import React from 'react';
import { connect } from 'react-redux';
import { Home } from './';
import { setAllEmployees } from '../redux/actions';
import { Loading } from '../components/common/Spinner';

interface AppProps {
  setAllEmployees:Function;
}
class AppComponent extends React.Component<AppProps> {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    fetch('/employees/get')
      .then(res => res.json())
      .then(info => {
        this.props.setAllEmployees(info.employees);
        this.setState({ isLoading: false });
      })
      .catch(() => {
        this.props.setAllEmployees([]);
        this.setState({ isLoading: false });
      })
  }

  render() {
    return this.state.isLoading ? <Loading size="large"/> : (
      <Home />
    )
  }
}

export const App = connect(null, { setAllEmployees })(AppComponent);
