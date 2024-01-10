import { promises as fs } from 'fs';
import { cache } from 'react';

export const revalidate = 5;

export default async function Page() {
  const response = await cache(() =>
    fs.readFile(`${process.cwd()}/something.txt`, 'utf-8'),
  )();

  return (
    <div>
      <p>{response}</p>
    </div>
  );
}
