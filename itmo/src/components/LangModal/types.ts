import { LangType } from '../../types';

export type WrapperPropsType = {
  isOpen: boolean;
};

export type LangModalPropsType = {
  langList: LangType[];
  currentLang: LangType;
  isOpen: boolean;
  setLang: (lang: LangType) =>void;
};
