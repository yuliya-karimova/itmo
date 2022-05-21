import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-US';
import { LangCodeType } from '../types';

export const getFormatDate = (date: string, langCode: LangCodeType) => {
  const localeMap = {
    en: enLocale,
    ru: ruLocale
  };

  const locale = localeMap[langCode] || ruLocale;

  return format(new Date(date), 'd MMMM yyyy', { locale }).toUpperCase();
};
