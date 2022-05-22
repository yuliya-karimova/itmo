import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const LogoLink = styled.a`
  display: flex;
  cursor: pointer;
`;

export default function Logo() {
  return (
    <Link href="/">
      <LogoLink>
        <Image
          src="/logo.svg"
          alt="itmo logo"
          width={160}
          height={16}
          priority
        />
      </LogoLink>
    </Link>
  );
}
