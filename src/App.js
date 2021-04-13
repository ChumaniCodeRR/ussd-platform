import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import {PrivateRoute} from './helpers/privateRouter'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const ResetPasswordPage = React.lazy(() => import('./views/pages/login/ResetPassword'))

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/reset" name="Reset page" render={props => <ResetPasswordPage {...props}/>} />
              <PrivateRoute path="/" name="Home" component={TheLayout}  />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
