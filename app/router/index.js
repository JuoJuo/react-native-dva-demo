import React from 'react';
import BackHoc from './BackHoc';
import StackNavigator from './stackNav';
import { createReduxContainer, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers'

import {connect} from 'react-redux';

export const routerReducer = createNavigationReducer(StackNavigator);

export const routerMiddleware = createReactNavigationReduxMiddleware(state => state.router);

const App = BackHoc(createReduxContainer(StackNavigator));

export default connect(state => state)(App);
