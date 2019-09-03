import React, { PureComponent } from 'react';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Loading from '../components/Loading';

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

export default (App) => {
  class BackHoc extends PureComponent {
    constructor() {
      super();
      BackHandler.addEventListener('hardwareBackPress', this.backHandle);
    }

    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.backHandle);
    }

    backHandle = () => {
      const currentScreen = getActiveRouteName(this.props.router);
      if (currentScreen === 'Login') {
        return true;
      }
      if (currentScreen !== 'Home') {
        this.props.dispatch(NavigationActions.back());
        return true;
      }
      return false;
    };

    render() {
      const { login, dispatch, router} = this.props;
      if (login.loading) {
        return <Loading/>;
      }

      return <App dispatch={dispatch} state={router}/>
    }
  }

  return BackHoc;
}


