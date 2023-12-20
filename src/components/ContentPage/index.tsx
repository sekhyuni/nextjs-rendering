'use client';

import type { Post } from '@/entities/post';

import Header from '../Header';
import Main from '../Main';

const ContentPage = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Header
        title="블로그"
        buttonText="저장하기"
        handleClick={() => console.log('저장하기')}
      />
      <Main posts={posts} />
    </>
  );
};

export default ContentPage;
