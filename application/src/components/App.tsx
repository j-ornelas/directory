import React from 'react';
import { connect } from 'react-redux';
import { Home } from './';
import { setAllEmployees } from '../redux/actions';

interface AppProps {
  setAllEmployees:Function;
}
class AppComponent extends React.Component<AppProps> {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    fetch('/employees')
      .then(res => res.json())
      .then(info => {
        this.props.setAllEmployees(info.employees);
        this.setState({ isLoading: false });
      })
  }

  render() {
    return this.state.isLoading ? <p>LOADING....</p> : (
      <Home />
    )
  }
}

export const App = connect(null, { setAllEmployees })(AppComponent);
