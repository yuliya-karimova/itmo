import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link href="/"><a>
          <Image
            src="/logo.svg"
            alt="itmo logo"
            width={160}
            height={16}
          />
        </a></Link>
      </nav>
    </header>
  );
}
