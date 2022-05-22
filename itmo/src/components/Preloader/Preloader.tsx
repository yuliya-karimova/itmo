import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const PreloaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Preloader = () => {
  return (
    <PreloaderWrapper>
      <Image src="/preloader.svg" alt="preloader" width={40} height={40} />
    </PreloaderWrapper>
  );
};

export default Preloader;
