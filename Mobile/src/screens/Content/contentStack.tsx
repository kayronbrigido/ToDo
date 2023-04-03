import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeTab/HomeStack';
import { TaskDetail } from './HomeTab/TaskDetail/TaskDetail';
import BackIcon from '@assets/icons/ic_back_button.svg'
import { translator } from '@services/translator';

const ContentNavigator: React.FC = () => {

  const ContentStack = createNativeStackNavigator();

  return (
    <ContentStack.Navigator
    initialRouteName='HomeStack'
    >
      <ContentStack.Screen
        name='HomeStack'
        component={HomeStack}
        options={{header: () => null}}
      />
      <ContentStack.Screen
        options={{
          headerTitle: translator('HEADERS.TASK_DETAIL'),
          headerTitleAlign: 'center',
        }}
        name='TaskDetail'
        component={TaskDetail}
      />
    </ContentStack.Navigator>
  )
}

export default ContentNavigator