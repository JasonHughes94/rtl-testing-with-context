import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateForm from '../components/CreateForm';
import MockAppProvider from './__mocks__/MockAppProvider';

test('Renders CreateForm Component', () => {
  const { container } = render(
    <MockAppProvider>
      <CreateForm />
    </MockAppProvider>
  );

  expect(container.querySelector('button')).toBeVisible();
});

test('Click create form calls toggleShowCreate one time', () => {
  const mockToggleShowCreate = jest.fn();
  const mockShowCreate = false;

  const { getByText } = render(
    <MockAppProvider
      toggleShowCreate={mockToggleShowCreate}
      showCreate={mockShowCreate}
    >
      <CreateForm />
    </MockAppProvider>
  );

  var createFormButton = getByText('Click Me to show create form');
  expect(createFormButton).toBeVisible();
  fireEvent.click(createFormButton);
  expect(mockToggleShowCreate).toHaveBeenCalledTimes(1);
});
