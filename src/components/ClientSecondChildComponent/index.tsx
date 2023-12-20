'use client';

import { useContext } from 'react';

import { TestContext } from '@/contexts/test';

const ClientSecondChildComponent = () => {
  const { count, setCount } = useContext(TestContext);

  return <button onClick={() => setCount(count + 1)}>Click me</button>;
};

export default ClientSecondChildComponent;
