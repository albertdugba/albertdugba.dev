import Landing from '@components/Landing';
import { render, screen } from '@testing-library/react';

describe('Landing Page', () => {
  test('Render the landing page', () => {
    render(<Landing />);
  });
});
