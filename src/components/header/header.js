import React from 'react';
import { Helmet } from 'react-helmet';

import NavBar from 'components/nav-bar';

export default function Header({ pageTitle }) {
  return (
    <>
      <Helmet>
        <style>{'body { background-color: #f7f3e9; overflow-x: hidden }'}</style>
        <title>{pageTitle ? `Kailey Tam - ${pageTitle}` : `Kailey Tam`}</title>
      </Helmet>
      <NavBar />
    </>
  );
}
