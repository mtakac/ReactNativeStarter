import { cleanup, render, toJSON } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '~redux';

import AppContainer from '../index';

const children = 'Children';

const Providers: React.FC = (props) => <Provider store={store}>{props.children}</Provider>;

const renderAppContainer = () =>
  render(<AppContainer>{children}</AppContainer>, {
    wrapper: Providers,
  });

describe('main', () => {
  describe('<AppContainer />', () => {
    it('renders correctly', () => {
      const { container } = renderAppContainer();

      expect(toJSON(container)).toMatchSnapshot();
      cleanup();
    });
  });
});
