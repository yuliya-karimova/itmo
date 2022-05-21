import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { LangType } from '../../types';

import styles from './LangButton.module.scss';

type PropsType = {
  lang: LangType;
  isTop?: boolean;
  isActive?: boolean;
  handleClick?: () => void;
};

export default function LangButton({ lang, isTop = false, isActive = false, handleClick }: PropsType) {
  const { title, code } = lang;
  const { t } = useTranslation();  

  return (
    <button
      className={isActive ? styles.button_active : styles.button}
      onClick={handleClick}
    >
      <Image
        src={`/flags/flag-${code}.svg`}
        alt={t(`langFlagsAltText.${code}`)}
        width={24}
        height={24}
      />
      <p>{title}</p>
      {isTop && (
        <Image
          src={'/arrow.svg'}
          alt="arrow"
          width={10}
          height={10}
        />
      )}
    </button>
  );
}
