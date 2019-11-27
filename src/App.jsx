import React, { useState } from 'react';
import Login from 'pages/Login/Login';
import Job from 'pages/Job/Job';
import Home from 'pages/Home/Home';
import Services from 'pages/Services/Services';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Page, MobileDrawer } from 'components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import theme from 'constants/theme';
import links from 'constants/links';

const freshState = {
  userId: null,
  requesterId: null,
  helperId: null,
  clientId: null,
};

const App = () => {
  const initState = {
    ...freshState,
    ...JSON.parse(localStorage.getItem('APP') || {}),
  };

  const [appState, setAppState] = useState(initState);
  const [menuOpen, setMenuOpen] = useState(true);
  const value = {
    ...appState,
    setAppState,
    setMenuOpen,
  };

  return (
    <MuiThemeProvider theme={theme}>
      <AppContext.Provider value={value}>
        <Router>
          <Page>
            <Switch>
              {!appState.userId && (
                <Route exact path={links.login}>
                  <Login />
                </Route>
              )}

              {/* {!this.state.userId && <Redirect to={links.login} />} */}

              <Route exact path={links.home}>
                <Home />
              </Route>
              <Route exact path={links.services}>
                <Services />
              </Route>
              <Route exact path={links.job}>
                <Job />
              </Route>

              {appState.userId && <Redirect to={links.home} />}
            </Switch>
          </Page>
        </Router>
        <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} onOpen={() => setMenuOpen(true)} />
      </AppContext.Provider>
    </MuiThemeProvider>
  );
};

export default App;
