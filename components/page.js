import React from 'react';
import { NextSeo } from 'next-seo';
import { PLATFORM_URL } from '@utils/constants';

const Page = ({ name, path, children }) => {
  const title = `Assistant – ${name}`;
  const url = `${PLATFORM_URL}${path}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      {children}
    </>
  );
};

export default Page;
