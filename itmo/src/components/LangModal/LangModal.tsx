import { LangButton } from '..';
import { LangType } from '../../types';

import styles from './LangModal.module.scss';

type PropsType = {
  langList: LangType[];
  currentLang: LangType;
  isOpen: boolean;
  setLang: (lang: LangType) =>void;
};

export default function LangModal({ langList, currentLang, isOpen, setLang }: PropsType) {
  return (
    <div className={isOpen ? styles.modal_open : styles.modal}>
      {langList.map((lang) => (
        <LangButton
          key={lang.id}
          lang={lang}
          isActive={currentLang.code === lang.code}
          handleClick={() => setLang(lang)}
        />
      ))}
    </div>
  );
}
