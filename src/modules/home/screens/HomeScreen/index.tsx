import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import { ApplicationStackParams } from '~modules/navigation';

import styles from './styles';

export type HomeScreenProps = {
  navigation: StackNavigationProp<ApplicationStackParams, 'HOME_SCREEN'>;
  route: RouteProp<ApplicationStackParams, 'HOME_SCREEN'>;
};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.homeScreen}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.heading}>InBa Labs React Native starter kit</Text>
    </View>
  );
};

export default HomeScreen;
