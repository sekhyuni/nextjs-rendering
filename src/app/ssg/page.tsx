import { promises as fs } from 'fs';

export default async function Page() {
  const response = await fs.readFile(`${process.cwd()}/something.txt`, 'utf-8');

  return (
    <div>
      <p>{response}</p>
    </div>
  );
}
