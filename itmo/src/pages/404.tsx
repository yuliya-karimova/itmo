import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { RU_CODE } from '../constants';
import { MainLayout } from '../components';

import { MainLink } from '../styles/sharedComponents';

const NotFoundPage = () => {
  const { t } = useTranslation();  
  
  return (
    <MainLayout title="Not Found">
      <h1>{t('notFoundPage')}</h1>
      <Link href="/">
        <MainLink>{t('goToMain')}</MainLink>
      </Link>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale ?? RU_CODE),
  },
});

export default NotFoundPage;
