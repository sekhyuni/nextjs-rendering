'use client';

import { type ReactNode, useState } from 'react';

import { TestContext } from '@/contexts/test';

const ClientComponentWithChildren = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <TestContext.Provider value={{ count, setCount }}>
      {children}
    </TestContext.Provider>
  );
};

export default ClientComponentWithChildren;
