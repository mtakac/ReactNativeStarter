import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ApplicationStack from '../ApplicationStack';

const Stack = createStackNavigator();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        animationEnabled: false,
        header: undefined,
      }}>
      <Stack.Screen name="Application" component={ApplicationStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
