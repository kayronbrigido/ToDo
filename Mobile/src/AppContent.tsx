import React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './MainNavigation';
import { navigationRef } from '@services/navigationService';
import theme from '@config/theme';
import { useColorScheme } from 'react-native';


const Light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.background
  },
};

const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: theme.background
  },
};

  

const AppContent = () => {
  const scheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer  theme={scheme === 'dark' ? Dark : Light} ref={navigationRef}>
        <MainNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppContent;
