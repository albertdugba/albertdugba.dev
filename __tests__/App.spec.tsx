import Landing from '@components/Landing';
import Layout from '@components/layout';
import MyApp from '@pages/_app';
import { render, screen } from '@testing-library/react';

test('Render the landing page', () => {
  render(<Landing />);
});
