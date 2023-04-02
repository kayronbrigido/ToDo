import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeTab/HomeStack';
import { TaskDetail } from './HomeTab/TaskDetail/TaskDetail';



const ContentNavigator: React.FC = () => {

  const ContentStack = createNativeStackNavigator();

  return (
    <ContentStack.Navigator
    initialRouteName='HomeStack'
    screenOptions={{
      headerShown: false
    }}
    >
      <ContentStack.Screen
        name='HomeStack'
        component={HomeStack}
      />
      <ContentStack.Screen
        name='TaskDetail'
        component={TaskDetail}
      />
    </ContentStack.Navigator>
  )
}

export default ContentNavigator