import {createBottomTabNavigator} from 'react-navigation-tabs';
import Activities from '../pages/Activities';
import Hall from '../pages/Hall';
import Profile from '../pages/Profile';
import StarLife from '../pages/StarLife';

const BottomTabNavigator = createBottomTabNavigator({
  Activities: {
    screen: Activities
  },
  Hall: {
    screen: Hall
  },
  Profile: {
    screen: Profile
  },
  StarLife: {
    screen: StarLife
  },
});

export default BottomTabNavigator;
