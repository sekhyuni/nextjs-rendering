import { promises as fs } from 'fs';

import ClientComponent from '@/components/ClientComponent';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const response = await fs.readFile(
    `${process.cwd()}/server-data.txt`,
    'utf-8',
  );

  return (
    <div>
      <ClientComponent />
      <p>{response}</p>
    </div>
  );
}
