import { StyleSheet } from 'react-native';

import { sizes } from '~theme';

export default StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: sizes.L_FONT_SIZE,
    fontWeight: 'bold',
  },
});
