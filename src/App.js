import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';

import AuthPage from 'pages/AuthPage';
import AuthModalPage from 'pages/AuthModalPage';
import MainPage from 'pages/MainPage';

import './styles/style.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/">
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />
            <LayoutRoute
              exact
              path="/login-modal"
              layout={MainLayout}
              component={AuthModalPage}
            />
            <LayoutRoute
              exact
              path="/"
              layout={MainLayout}
              component={MainPage}
            />
            <Redirect to="/" />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;