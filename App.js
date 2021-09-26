import React, { Component, Suspense } from 'react';
import Layout from './components/Layout/';
import { Route, Switch, HashRouter as Router, Redirect } from 'react-router-dom';
import { IRoutePath } from './models/utilitiesModel';
import routes from './routes';
import './custom.css';
import './App.scss';
import AppIdle from './AppIdle'
// Get all Auth methods
import { isUserAuthenticated, initVersionCheck } from './helpers/helpersIndex';
import { withTranslation } from 'react-i18next';
import AppLanguageTransaltors from './AppLanugageTranslators';
//fakeBackend();


function withLayout(WrappedComponent, profilePath) {
  // ...and returns another component...
  return class extends React.Component {
    render() {
      return (<Suspense fallback={<div className="appLoading">Loading <div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>}>
        <Layout>
          <WrappedComponent profilePath={profilePath}></WrappedComponent>
        </Layout></Suspense>)
    }
  };
}

function withOutLayout(WrappedComponent, profilePath) {
  // ...and returns another component...
  return class extends React.Component {
    render() {
      return (<Suspense fallback={<div className="appLoading">Loading <div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>}>
        <WrappedComponent profilePath={profilePath}></WrappedComponent>
      </Suspense>)
    }
  };
}
let previousPath;
class App extends Component {

  componentDidMount() {
    const { t } = this.props
    if (process.env.NODE_ENV === 'production')
      initVersionCheck('version.json', routes, t('Utilities.versionUpdateMsg'));

    window.history.pushState(null, "", window.location.href);
    previousPath = window.location.hash;
    window.onpopstate = function () {
      if (previousPath !== window.location.hash) {
        let index = routes.filter(y => y.ispublic || y?.isDefultauth || (y.isClient && !y.isProfilePath)).findIndex(x => '#' + x.path === previousPath || '#' + x.path === window.location.hash);
        previousPath = window.location.hash;
        if (index !== -1)
          window.history.pushState(null, "", window.location.href);
      }
      else
        window.history.pushState(null, "", window.location.href);
    };
  }


  render() {

    const PrivateRoute = ({ component: Component, ...rest }) => {
      let isAuthenticated = isUserAuthenticated(rest)
      return (<Route {...rest} render={(props) => (
        isAuthenticated === IRoutePath.isAuthenticated
          ? <Component {...props} />
          : <Redirect to={isAuthenticated} />
      )} />)
    }

    return (
      <React.Fragment>
        <AppIdle />
        <AppLanguageTransaltors />
        <Router >
          <Switch>
            {routes.map((route, idx) =>
              route.ispublic ?
                <Route path={route.path} exact component={route.islazy ? withOutLayout(route.component, route.isProfilePath) : route.component} key={idx} />
                :
                <PrivateRoute path={route.path} exact routeProps={route} component={withLayout(route.component, route.isProfilePath)} key={idx} />
            )}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}


export default withTranslation('translations')(App);


