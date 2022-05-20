import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setIsModalOpen, setLang } from '../../store/langSlice';
import { LangType } from '../../types';
import { langList } from '../../constants';
import LangButton from '../LangButton/LangButton';
import LangModal from '../LangModal/LangModal';
import { useClickOutside } from '../../hooks/useClickOutside';
import Image from 'next/image';

import styles from './LangSwitcher.module.scss';
import { useRef } from 'react';

export default function LangSwitcher() {
  const { lang, isModalOpen } = useAppSelector((state) => state.langReducer);
  const dispatch = useAppDispatch();

  const switcherModal = () => dispatch(setIsModalOpen(!isModalOpen));
  const closeModal = () => dispatch(setIsModalOpen(false));
  const changeLang = (lang: LangType) => {
    dispatch(setLang(lang));
  };

  const langSwitcherRef = useRef(null);
  useClickOutside(langSwitcherRef, closeModal);

  const onChangeLang = (lang: LangType) => {
    changeLang(lang);
    closeModal();
  };
  
  return (
    <div className={styles.switcher} ref={langSwitcherRef}>
      <div className={styles.topButton} onClick={switcherModal}>
        <LangButton lang={lang} />
        <Image
          src={'/arrow.svg'}
          alt="arrow"
          width="12"
          height={12}
        />
      </div>
      <LangModal langList={langList} currentLang={lang} isOpen={isModalOpen} changeLang={onChangeLang} />
    </div>
  );
}
