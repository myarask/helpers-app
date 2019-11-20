import React from 'react';
import Login from 'pages/Login/Login';
import Home from 'pages/Home/Home';
import Services from 'pages/Services/Services';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Page } from 'components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'constants/theme';
import links from 'constants/links';

const getDeviceIndex = () => {
  if (document.documentElement.clientWidth <= 425) return 0;
  if (document.documentElement.clientWidth <= 768) return 1; // Change to 2 to disable the tablet view
  return 2;
};

const freshState = {
  userId: null,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...freshState,
      deviceIndex: getDeviceIndex(),
    };

    this.onResize = this.onResize.bind(this);
    this.onResize();

    this.funcs = {
      setAppState: this.setState.bind(this),
      logout: this.logout.bind(this),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  onResize() {
    const deviceIndex = getDeviceIndex();
    if (deviceIndex !== this.state.deviceIndex) {
      this.setState({ deviceIndex });
    }

    if (deviceIndex === 0) {
      document.body.style.height = `${window.innerHeight}px`;
      document.getElementById('root').style.height = `${window.innerHeight}px`;
    }
  }

  logout() {
    this.setState(freshState);
  }

  render() {
    const shared = {
      ...this.state,
      ...this.funcs,
    };

    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Page>
            <Switch>
              {!this.state.userId && (
                <Route exact path={links.login} render={props => <Login {...props} {...shared} />} />
              )}

              {/* {!this.state.userId && <Redirect to={links.login} />} */}

              <Route exact path={links.home} render={props => <Home {...props} {...shared} />} />
              <Route exact path={links.services} render={props => <Services {...props} {...shared} />} />

              {this.state.userId && <Redirect to={links.home} />}
            </Switch>
          </Page>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
