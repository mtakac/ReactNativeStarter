import React from 'react';
import { View } from 'react-native';

import styles from './styles';

export type AppContainerProps = {
  children: React.ReactNode;
};

const AppContainer: React.FC<AppContainerProps> = (props) => {
  return <View style={styles.appContainer}>{props.children}</View>;
};

export default React.memo(AppContainer);
