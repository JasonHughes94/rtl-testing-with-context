import React from 'react';
import { render } from '@testing-library/react';
import CreateForm from '../components/CreateForm';
import AppProvider from '../contexts/app/AppProvider';
import AppConsumer from '../contexts/app/AppConsumer';

it('Renders App Component', () => {
  const { getByText } = render(
    <AppProvider>
      <AppConsumer>
        {({ createContext, findContext }) => (
          <CreateForm createContext={createContext} findContext={findContext} />
        )}
      </AppConsumer>
    </AppProvider>
  );

  expect(getByText('Click Me to show create form')).toBeVisible();
});
