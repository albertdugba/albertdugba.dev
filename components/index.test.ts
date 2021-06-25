import { render, screen } from '@testing-library/react';
import MyApp from '../pages/_app';

describe('MyApp', () => {
  it('Renders without crashing', () => {
    render(<MyApp />);
  });
});
