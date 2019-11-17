import React from 'react';
import Login from 'pages/Login/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'constants/theme';
import links from 'constants/links';

const getDeviceIndex = () => {
  if (document.documentElement.clientWidth <= 425) return 0;
  if (document.documentElement.clientWidth <= 768) return 1; // Change to 2 to disable the tablet view
  return 2;
};

const freshState = {
  isLoggedIn: false,
  isAcceptingRequests: null,
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
          <Switch>
            {!this.state.isLoggedIn && (
              <Route exact path={links.login} render={props => <Login {...props} {...shared} />} />
            )}

            {!this.state.isLoggedIn && <Redirect to={links.login} />}

            {this.state.isLoggedIn && <Redirect to={links.home} />}
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
