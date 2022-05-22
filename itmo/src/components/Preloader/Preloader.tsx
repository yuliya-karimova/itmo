import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { PreloaderImage } from '../../assets';

const PreloaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Preloader = () => {
  const { t } = useTranslation();

  return (
    <PreloaderWrapper>
      <Image src={PreloaderImage} alt={t('loading')} width={40} height={40} />
    </PreloaderWrapper>
  );
};

export default Preloader;
