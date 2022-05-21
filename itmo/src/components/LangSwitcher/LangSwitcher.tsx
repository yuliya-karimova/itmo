import Image from 'next/image';
import { LangType } from '../../types';
import { langList } from '../../constants';
import LangButton from '../LangButton/LangButton';
import LangModal from '../LangModal/LangModal';
import { setIsModalOpen, setCurrentLang } from '../../store/langSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEffect, useRef } from 'react';

import styles from './LangSwitcher.module.scss';
import { useRouter } from 'next/router';

export default function LangSwitcher() {
  const { currentLang, isModalOpen } = useAppSelector((state) => state.langReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  const toggleModal = () => dispatch(setIsModalOpen(!isModalOpen));
  const closeModal = () => dispatch(setIsModalOpen(false));
  const setLang = (lang: LangType) => dispatch(setCurrentLang(lang));

  useEffect(() => {
    const currentLang = langList.find((el) => el.code === router.locale) || langList[0];
    dispatch(setLang(currentLang));
  }, []);
  
  const langSwitcherRef = useRef(null);
  useClickOutside(langSwitcherRef, closeModal);

  const changeLocale = (locale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
  };

  const onSetLang = (lang: LangType) => {   
    changeLocale(lang.code);
    setLang(lang);
    closeModal();
  };
  
  return (
    <div className={styles.switcher} ref={langSwitcherRef}>
      <div className={styles.topButton} onClick={toggleModal}>
        <LangButton lang={currentLang} />
        <Image
          src={'/arrow.svg'}
          alt="arrow"
          width={10}
          height={10}
        />
      </div>
      <LangModal langList={langList} currentLang={currentLang} isOpen={isModalOpen} setLang={onSetLang} />
    </div>
  );
}
