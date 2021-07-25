import Landing from '@components/Landing';
import { render, screen } from '@testing-library/react';

test('Render the landing page', () => {
  render(<Landing />);
  screen.debug();
});
