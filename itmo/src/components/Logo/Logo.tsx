import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

import { LogoIcon } from '../../assets';

const LogoLink = styled.a`
  display: flex;
  cursor: pointer;
`;

export default function Logo() {
  const { t } = useTranslation();
  
  return (
    <Link href="/">
      <LogoLink>
        <Image
          src={LogoIcon}
          alt={t('logoItmo')}
          width={160}
          height={16}
          priority
        />
      </LogoLink>
    </Link>
  );
}
