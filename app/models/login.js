import { createAction, NavigationActions, Storage } from '../utils';
import { loginApi } from '../services/login';

export default {
  namespace: 'login',
  state: {
    login: false,
    loading: false,
    uname: 'null1111',
    pwd: 'null2222',
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
      try{
        yield put(createAction('updateState')({ loading: true }));

        const userInfo = yield call(loginApi, payload);

        yield put(createAction('updateState')({ uname: userInfo.login, pwd: userInfo.location, loading: false }));

        if (userInfo) {
          yield put(NavigationActions.navigate({routeName:'BottomTabNavigator', params: userInfo}));
        }

      }catch (e) {
        console.log(e);
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      // dispatch({ type: 'loadStorage' })
    },
  },
}
