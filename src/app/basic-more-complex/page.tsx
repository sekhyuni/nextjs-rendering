import { promises as fs } from 'fs';

import ContentPage from '@/components/ContentPage';
import IntroPage from '@/components/IntroPage';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = (await response.json()).slice(0, 10);

  const alreadyRead =
    (await fs.readFile(`${process.cwd()}/already-read.txt`, 'utf-8')) ===
    'true';

  if (alreadyRead) return <ContentPage posts={posts} />;

  return <IntroPage />;
}
