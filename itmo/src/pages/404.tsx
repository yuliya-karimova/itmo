import { GetStaticProps } from 'next';
import { MainLayout } from '../components';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { RU_CODE } from '../constants';

const NotFoundPage = () => {
  const { t } = useTranslation();  
  
  return (
    <MainLayout title="Not Found">
      <h1>{t('notFoundPage')}</h1>
      <Link href="/"><a className="navLink">{t('goToMain')}</a></Link>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale ?? RU_CODE),
  },
});

export default NotFoundPage;
