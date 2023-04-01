import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login/Login';
import Signup from './Signup/Signup';



const AuthNavigator: React.FC = () => {

  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
    initialRouteName='Login'
    >
      <AuthStack.Screen
        name='Login'
        component={Login}
      />
      <AuthStack.Screen
        name='Signup'
        component={Signup}
      />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator