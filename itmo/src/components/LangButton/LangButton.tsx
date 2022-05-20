import Image from 'next/image';
import { LangType } from '../../types';
import styles from './LangButton.module.scss';

type PropsType = {
  lang: LangType;
  isActive?: boolean;
  onClick?: (lang: LangType) => void;
};

export default function LangButton({ lang, isActive, onClick }: PropsType) {  
  const handleClick = () => {
    if (onClick) onClick(lang);
  };

  return (
    <button className={isActive ? styles.button_active : styles.button} onClick={(handleClick)}>
      <Image
        src={`/flags/flag-${lang.code}.svg`}
        alt="english flag"
        width={24}
        height={24}
      />
      <p>{lang.title}</p>
    </button>
  );
}
