import Image from 'next/image';
import { LangType } from '../../types';

import styles from './LangButton.module.scss';

type PropsType = {
  lang: LangType;
  isActive?: boolean;
  setLang?: (lang: LangType) => void;
};

export default function LangButton({ lang, isActive = false, setLang }: PropsType) {
  const { title, code } = lang;

  const handleClick = () => {
    if (setLang) {
      setLang(lang);
    }
  };

  return (
    <button
      className={isActive ? styles.button_active : styles.button}
      onClick={handleClick}
    >
      <Image
        src={`/flags/flag-${code}.svg`}
        alt="english flag"
        width={24}
        height={24}
      />
      <p>{title}</p>
    </button>
  );
}
