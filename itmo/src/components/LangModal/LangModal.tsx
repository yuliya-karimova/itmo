import { LangButton } from '..';
import { LangType } from '../../types';
import styles from './LangModal.module.scss';

type PropsType = {
  langList: LangType[];
  currentLang: LangType;
  isOpen: boolean;
  changeLang: (lang: LangType) => void;
};

export default function LangModal({ langList, currentLang, isOpen, changeLang }: PropsType) {
  return (
    <div className={isOpen ? styles.modal_open : styles.modal}>
      {langList.map((lang) => (
        <LangButton key={lang.name} lang={lang} onClick={changeLang} isActive={currentLang.name === lang.name}/>
      ))}
    </div>
  );
}
