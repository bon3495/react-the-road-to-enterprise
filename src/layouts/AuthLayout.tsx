import React from 'react';
import clsx from 'clsx';

import bgIcon1 from '@/assets/images/banner-icon-1-1.svg';
import bgIcon2 from '@/assets/images/banner-icon-1-2.svg';
import bgIcon3 from '@/assets/images/banner-icon-1-3.svg';
import bgIcon4 from '@/assets/images/banner-icon-1-4.svg';
import bgIcon5 from '@/assets/images/banner-icon-1-5.svg';
import bgIcon6 from '@/assets/images/banner-icon-1-6.svg';
import styles from './AuthLayout.module.scss';

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AuthLayout = (props: AuthLayoutProps) => {
  const { children, className } = props;
  return (
    <main
      className={clsx(
        'relative flex min-h-screen w-screen items-center justify-center bg-gradientBg p-5',
        styles.container,
        className
      )}
    >
      <img
        src={bgIcon1}
        className={clsx(
          'absolute top-[10%] left-[10%] hidden lg:block',
          styles.animation2
        )}
        alt="banner icon 1"
      />
      <img
        src={bgIcon2}
        className={clsx(
          'absolute top-[10%] right-[10%] hidden lg:block',
          styles.animation2
        )}
        alt="banner icon 2"
      />
      <img
        src={bgIcon3}
        className={clsx(
          'absolute bottom-10 right-5 hidden lg:block 2lg:bottom-16 2lg:right-[120px] xl:right-[200px] xl:bottom-[120px]',
          styles.animation1
        )}
        alt="banner icon 3"
      />
      <img
        src={bgIcon4}
        className={clsx(
          'absolute bottom-10 left-5 hidden lg:block 2lg:bottom-16 2lg:left-[120px] xl:left-[200px] xl:bottom-[120px]',
          styles.animation1
        )}
        alt="banner icon 4"
      />
      <img
        src={bgIcon5}
        className="absolute top-[10%] left-[22%] hidden lg:block"
        alt="banner icon 5"
      />

      <img
        src={bgIcon6}
        className={clsx(
          'absolute left-0 -bottom-[50px] hidden lg:block',
          styles.animation3
        )}
        alt="banner icon 6"
      />
      {children}
    </main>
  );
};

export default AuthLayout;
