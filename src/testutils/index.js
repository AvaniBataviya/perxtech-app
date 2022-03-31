import { render as rtlRender, configure } from '@testing-library/react';
import store from '../store';

import { Provider } from 'react-redux';

export const render = component => rtlRender(
  <Provider store={store}>{component}</Provider>
);

export const beforeAllTest = () => {
  beforeAll(() => {
    configure({ testIdAttribute: 'id' });
  });
};