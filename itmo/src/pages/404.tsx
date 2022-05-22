import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { RU_CODE } from '../constants';
import { MainLayout } from '../components';
import { H1, MainLink } from '../styles/sharedComponents';


const NotFoundPage = () => {
  const { t } = useTranslation();  
  
  return (
    <MainLayout title="Not Found">
      <H1 isLarge={true}>{t('notFoundPage')}</H1>
      <Link href="/news">
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
