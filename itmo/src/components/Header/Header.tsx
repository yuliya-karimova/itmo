import { LangSwitcher, Logo } from '..';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo />
        <LangSwitcher />
      </div>
    </header>
  );
}
