import React, { useState } from 'react';
import Login from 'pages/Login/Login';
import Job from 'pages/Job/Job';
import Services from 'pages/Services/Services';
import HomeClient from 'pages/HomeClient/HomeClient';
import HomeHelper from 'pages/HomeHelper/HomeHelper';
import HomeRequester from 'pages/HomeRequester/HomeRequester';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Page, MobileDrawer } from 'components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import links from 'constants/links';
import theme from 'constants/theme';

const freshState = {
  firstName: null,
  lastName: null,
  email: null,
  userId: null,
  requesterId: null,
  helperId: null,
  clientId: null,
};

const App = () => {
  const initState = {
    ...freshState,
    ...JSON.parse(localStorage.getItem('APP') || '{}'),
  };

  const [state, setState] = useState(initState);
  const [menuOpen, setMenuOpen] = useState(false);

  const onLogin = data => {
    localStorage.setItem('APP', JSON.stringify(data));
    setState(data);
  };

  const onLogout = () => {
    localStorage.removeItem('APP');
    setMenuOpen(false);
    setState(freshState);
  };

  const value = {
    ...state,
    onLogin,
    onLogout,
    setMenuOpen,
  };

  return (
    <MuiThemeProvider theme={theme}>
      <AppContext.Provider value={value}>
        <Router>
          <Page>
            <Switch>
              {!state.userId && (
                <Route exact path={links.login}>
                  <Login />
                </Route>
              )}

              {!state.userId && <Redirect to={links.login} />}

              <Route exact path={links.home}>
                {state.requesterId && <Redirect to={links.homeRequester} />}
                {state.clientId && <Redirect to={links.homeClient} />}
                {state.helperId && <Redirect to={links.homeHelper} />}
              </Route>
              <Route exact path={links.homeRequester}>
                <HomeRequester />
              </Route>
              <Route exact path={links.homeClient}>
                <HomeClient />
              </Route>
              <Route exact path={links.homeClient}>
                <HomeHelper />
              </Route>
              <Route exact path={links.services}>
                <Services />
              </Route>
              <Route exact path={links.job}>
                <Job />
              </Route>

              {state.userId && <Redirect to={links.home} />}
            </Switch>
          </Page>
        </Router>
        <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} onOpen={() => setMenuOpen(true)} />
      </AppContext.Provider>
    </MuiThemeProvider>
  );
};

export default App;
