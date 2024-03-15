import React from 'react';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

const DynamicImage = dynamic(() => import('next/image'), { ssr: false });

import bgDesktopImage from '/public/static/images/bg-sidebar-desktop.svg';
import bgMobileImage from '/public/static/images/bg-sidebar-mobile.svg';


const BackgroundImage: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 940 });

  return (
    <DynamicImage
      alt=""
      src={isMobile ? bgMobileImage : bgDesktopImage}
      fill
      priority
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  );
};

export default BackgroundImage;