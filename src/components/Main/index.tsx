'use client';

import { useState } from 'react';

import type { Post } from '@/entities/post';

import styles from './Main.module.css';

const Main = ({ posts }: { posts: Post[] }) => {
  const [postIdx, setPostIdx] = useState(0);

  const post = posts[postIdx];

  return (
    <main className={styles.container}>
      <nav>
        <button
          disabled={postIdx === 0}
          onClick={() => setPostIdx(postIdx - 1)}
        >
          {'<-'}
        </button>
        <button
          disabled={postIdx === posts.length - 1}
          onClick={() => setPostIdx(postIdx + 1)}
        >
          {'->'}
        </button>
      </nav>
      <p>{post.body}</p>
    </main>
  );
};

export default Main;
