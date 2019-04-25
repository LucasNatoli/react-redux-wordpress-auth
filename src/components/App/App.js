import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../helpers';
import { alertActions } from '../../actions'
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { PrivateRoute } from '../PrivateRoute';
import { Layout } from 'antd';

import './App.css';
const {
  Content,
} = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <Layout>
        <Content>
          {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
          <Router history={history}>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
          </Router>
        </Content>
      </Layout>
    )
  }
}


function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 