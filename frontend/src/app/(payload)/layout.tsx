import '@payloadcms/next/css';
import { RootLayout } from '@payloadcms/next/layouts';
import React from 'react';

import configPromise from '$/payload.config';

type Args = {
  children: React.ReactNode;
};

const Layout = ({ children }: Args) => <RootLayout config={configPromise}>{children}</RootLayout>;

export default Layout;
