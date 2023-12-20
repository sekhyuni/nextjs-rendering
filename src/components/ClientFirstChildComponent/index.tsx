'use client';

import { useContext } from 'react';

import { TestContext } from '@/contexts/test';

const ClientFirstChildComponent = () => {
  const { count } = useContext(TestContext);

  return <p>{count}</p>;
};

export default ClientFirstChildComponent;
