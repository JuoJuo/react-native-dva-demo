import React from 'react';
import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'
import models from './models'

const app = dva({
  models,
  initialState: {},
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
});

const App = app.start(<Router />);

export default App;
