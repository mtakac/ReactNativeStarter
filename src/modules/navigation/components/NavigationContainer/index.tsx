import AsyncStorage from '@react-native-community/async-storage';
import {
  NavigationContainer as NativeNavigationContainer,
  NavigationState,
} from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';

import { NAVIGATION_STATE_PERSISTENCE_KEY } from '../../config';

type NavigationContainerProps = React.ComponentProps<typeof NativeNavigationContainer>;

const NavigationContainer: React.FC<NavigationContainerProps> = (props) => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState<NavigationState>();

  const handleStateChange = useCallback((state: NavigationState | undefined): void => {
    void AsyncStorage.setItem(NAVIGATION_STATE_PERSISTENCE_KEY, JSON.stringify(state));
  }, []);

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(NAVIGATION_STATE_PERSISTENCE_KEY);
        let state: NavigationState | undefined;

        if (savedStateString) state = JSON.parse(savedStateString) as NavigationState;

        if (state !== undefined) setInitialState(state);
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) void restoreState();
  }, [isReady]);

  if (!isReady) return null;

  return (
    <NativeNavigationContainer initialState={initialState} onStateChange={handleStateChange}>
      {props.children}
    </NativeNavigationContainer>
  );
};

export default NavigationContainer;
