import React, { useState, useEffect } from 'react';
import Pages from 'pages';
import axios from 'utils/axios';
import { HELPERS_ME } from 'constants/apis';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Page, MobileDrawer } from 'components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import appState from 'constants/appState';
import links from 'constants/links';
import theme from 'constants/theme';

const App = () => {
  const [state, setAppState] = useState(appState.local);
  // const [isInitialized, setIsInitialized] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('APP', JSON.stringify(state));
  }, [state]);

  const onLogin = data => {
    localStorage.setItem('jwt', data.token);
    setAppState(data);
  };

  const onLogout = () => {
    localStorage.removeItem('APP');
    setIsMenuOpen(false);
    setAppState(appState.fresh);
  };

  const onToggleHelping = () => {
    axios.patch(HELPERS_ME, { isHelping: !state.isHelping });
    setAppState(prevState => ({
      ...prevState,
      isHelping: !prevState.isHelping,
    }));
  };

  const value = {
    ...state,
    onLogin,
    onLogout,
    onToggleHelping,
    setIsMenuOpen,
    setAppState,
  };

  const { userId, requesterId, helperId, clientId } = state;

  return (
    <MuiThemeProvider theme={theme}>
      <AppContext.Provider value={value}>
        <Router>
          <Page>
            <Switch>
              {!userId && <Route exact path={links.login} component={Pages.Login} />}
              {!userId && <Redirect to={links.login} />}

              {/* {!isInitialized && <Route component={Pages.Initializing} />} */}

              <Route exact path={links.job} component={Pages.Job} />
              {requesterId && <Route exact path={links.jobRequester} component={Pages.JobRequester} />}
              {helperId && <Route exact path={links.jobHelper} component={Pages.JobHelper} />}

              <Route exact path={links.home}>
                {requesterId && <Redirect to={links.homeRequester} />}
                {helperId && <Redirect to={links.homeHelper} />}
                {clientId && !requesterId && <Redirect to={links.homeClient} />}
              </Route>
              {requesterId && <Route exact path={links.homeRequester} component={Pages.HomeRequester} />}
              {clientId && <Route exact path={links.homeClient} component={Pages.HomeClient} />}
              {helperId && state.activeJobId && <Redirect to={links.jobHelper.replace(':id', state.activeJobId)} />}
              {helperId && <Route exact path={links.homeHelper} component={Pages.HomeHelper} />}

              <Route exact path={links.services} component={Pages.Services} />

              <Redirect to={links.home} />
            </Switch>
          </Page>
        </Router>
        <MobileDrawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)} onOpen={() => setIsMenuOpen(true)} />
      </AppContext.Provider>
    </MuiThemeProvider>
  );
};

export default App;
