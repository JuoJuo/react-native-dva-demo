import { createStackNavigator } from 'react-navigation-stack';
import BottomTabNavigator from './bottomNav';
import Splash from '../pages/Splash';

const StackNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
  },
  BottomTabNavigator: {
    screen: BottomTabNavigator
  },
});

export default StackNavigator;
