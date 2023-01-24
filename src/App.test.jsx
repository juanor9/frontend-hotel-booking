/* eslint-disable */
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from './app/store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
  const linkElement = screen.getByText('top offerts');
  expect(linkElement).toBeInTheDocument();
});
