import { createStackNavigator } from 'react-navigation-stack';
import BottomTabNavigator from './bottomNav';
import Login from '../pages/Login';

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    BottomTabNavigator: {
      screen: BottomTabNavigator
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);

export default StackNavigator;
