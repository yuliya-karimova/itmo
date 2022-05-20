import Image from 'next/image';
import React from 'react';

import styles from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <Image src="/preloader.svg" alt="preloader" width={40} height={40} />
    </div>
  );
};

export default Preloader;
