import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import LangButton from '../LangButton/LangButton';
import LangModal from '../LangModal/LangModal';
import { LangType } from '../../types';
import { langList } from '../../constants';
import { useClickOutside } from '../../hooks/useClickOutside';
import { setIsModalOpen, setCurrentLang } from '../../store/langSlice';
import { RootState } from '../../store/store';

const SwitcherWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 76px;
`;

function LangSwitcher() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentLang, isModalOpen } = useSelector((state: RootState) => state.langReducer);
  
  const toggleModal = () => dispatch(setIsModalOpen(!isModalOpen));
  const closeModal = () => dispatch(setIsModalOpen(false));
  const setLang = (lang: LangType) => dispatch(setCurrentLang(lang));

  useEffect(() => {
    const currentLang = langList.find(({ code }) => code === router.locale) || langList[0];
    dispatch(setLang(currentLang));
  }, []);
  
  const langSwitcherRef = useRef(null);
  useClickOutside(langSwitcherRef, closeModal);

  const changeLocale = (locale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
  };

  const onSetLang = (lang: LangType) => {   
    setLang(lang);
    closeModal();
    changeLocale(lang.code);
  };
  
  return (
    <SwitcherWrapper ref={langSwitcherRef}>
      <LangButton lang={currentLang} handleClick={toggleModal} isTop />
      <LangModal langList={langList} currentLang={currentLang} isOpen={isModalOpen} setLang={onSetLang} />
    </SwitcherWrapper>
  );
}

export default LangSwitcher;
