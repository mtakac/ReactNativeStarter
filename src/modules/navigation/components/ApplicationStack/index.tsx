import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { HOME_SCREEN_NAME, HomeScreen } from '~modules/home';
import { colors } from '~theme';

const Stack = createStackNavigator();

const ApplicationStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.PRIMARY },
        headerTintColor: colors.TEXT_LIGHT,
      }}>
      <Stack.Screen
        name={HOME_SCREEN_NAME}
        component={HomeScreen}
        options={{ headerTitle: 'React Native starter kit' }}
      />
    </Stack.Navigator>
  );
};

export default ApplicationStack;
