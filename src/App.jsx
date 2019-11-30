import React, { useState } from 'react';
import Pages from 'pages';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Page, MobileDrawer } from 'components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import appState from 'constants/appState';
import links from 'constants/links';
import theme from 'constants/theme';

const App = () => {
  const [state, setState] = useState(appState.local);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onLogin = data => {
    localStorage.setItem('APP', JSON.stringify(data));
    setState(data);
  };

  const onLogout = () => {
    localStorage.removeItem('APP');
    setIsMenuOpen(false);
    setState(appState.fresh);
  };

  const value = {
    ...state,
    onLogin,
    onLogout,
    setIsMenuOpen,
  };

  return (
    <MuiThemeProvider theme={theme}>
      <AppContext.Provider value={value}>
        <Router>
          <Page>
            <Switch>
              {!state.userId && <Route exact path={links.login} component={Pages.Login} />}
              {!state.userId && <Redirect to={links.login} />}

              <Route exact path={links.home}>
                {state.requesterId && <Redirect to={links.homeRequester} />}
                {state.clientId && <Redirect to={links.homeClient} />}
                {state.helperId && <Redirect to={links.homeHelper} />}
              </Route>
              <Route exact path={links.homeRequester} component={Pages.HomeRequester} />
              <Route exact path={links.homeClient} component={Pages.HomeClient} />
              <Route exact path={links.homeHelper} component={Pages.HomeHelper} />
              <Route exact path={links.services} component={Pages.Services} />
              <Route exact path={links.job} component={Pages.Job} />

              {state.userId && <Redirect to={links.home} />}
            </Switch>
          </Page>
        </Router>
        <MobileDrawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)} onOpen={() => setIsMenuOpen(true)} />
      </AppContext.Provider>
    </MuiThemeProvider>
  );
};

export default App;
