import { LangType } from '../../types';

export type StyledButtonPropsType = {
  isActive: boolean;
  isTop: boolean;
};

export type LangButtonPropsType = {
  lang: LangType;
  isTop?: boolean;
  isActive?: boolean;
  handleClick?: () => void;
};
