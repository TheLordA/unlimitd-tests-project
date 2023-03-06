import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page = ({ children, title }) => (
  <>
    <Helmet>
      <title>{`${title} | Client`}</title>
    </Helmet>
    {children}
  </>
);

export default Page;
