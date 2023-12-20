'use client';

import Header from '../Header';

const IntroPage = () => {
  return (
    <>
      <Header
        title="인트로"
        buttonText="인쇄하기"
        handleClick={() => console.log('인쇄하기')}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p>This is intro page</p>
      </div>
    </>
  );
};

export default IntroPage;
