import Head from 'next/head';
import * as React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>
        <div className="content">{children}</div>
      </main>
    </>
  );
}
