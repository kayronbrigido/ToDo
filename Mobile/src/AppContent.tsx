import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './MainNavigation';
import { navigationRef } from '@services/navigationService';

const AppContent = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <MainNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppContent;
