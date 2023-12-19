'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/test');
      const { data } = await response.json();

      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
