import Landing from '@components/home/Landing';
import WorksPage from '@pages/works';
import { render, screen } from '@testing-library/react';

describe('Landing Page', () => {
  it('Render the landing page', () => {
    render(<Landing />);
  });

  it('Should route to work page when link is clicked', async () => {
    const works: any = [];
    render(<WorksPage works={works} />);
  });
});
