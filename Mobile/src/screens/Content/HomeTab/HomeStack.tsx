import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderIcon from '@assets/icons/ic_order.svg';
import PlusIcon from '@assets/icons/ic_plus.svg';
import { AddTask } from './AddTask/AddTask';
import { Home } from './Home/Home';
import { translator } from '@services/translator';
import theme from '@config/theme';

const HomeTab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <HomeTab.Navigator
    screenOptions={{
      headerShown: false
    }}
    
    >
      <HomeTab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: () => { return <OrderIcon fill={theme.iconFill}/>; },
          tabBarLabel: translator('HOME_TAB.TASK'),
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 14
          }
        }}

      />
      <HomeTab.Screen
        name="AddTask"
        component={AddTask}
        options={{
          tabBarIcon: () => { return <PlusIcon fill={theme.iconFill} />; },
          tabBarLabel: translator('HOME_TAB.ADD'),
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 14
          }
        }}
      />
    </HomeTab.Navigator>
  );
}

export default HomeStack;