import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <a className={styles.logo__link}>
        <Image
          src="/logo.svg"
          alt="itmo logo"
          width={160}
          height={16}
        />
      </a>
    </Link>
  );
}
