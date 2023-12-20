'use client';

import { createContext, type Dispatch, type SetStateAction } from 'react';

type TestContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const TestContext = createContext<TestContextType>({
  count: 0,
  setCount: () => {},
});
