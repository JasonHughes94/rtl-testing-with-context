import React from 'react';
import { render } from '@testing-library/react';
import CreateForm from '../components/CreateForm';
import MockAppProvider from './__mocks__/MockAppProvider';

test('Renders CreateForm Component', () => {
  const { getByText } = render(
    <MockAppProvider>
      <CreateForm />
    </MockAppProvider>
  );

  expect(getByText('Click Me to show create form')).toBeVisible();
});
