import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { NavigationContainer, RootStack } from '~modules/navigation';
// import { ErrorBoundary } from '~modules/errors';
import { persistor, store } from '~redux';

import AppContainer from '../AppContainer';

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          {/* <ErrorBoundary> */}
          <AppContainer>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </AppContainer>
          {/* </ErrorBoundary> */}
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default Root;
