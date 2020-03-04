import React, { Fragment } from 'react';

import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Features from '../Features/Features';
import OtherFeatures from '../OtherFeatures/OtherFeatures';
import LastFeatures from '../LastFeatures/LastFeatures';
import Download from '../Download/Download';


const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Reviews />
        <Features />
        <OtherFeatures />
        <LastFeatures />
        <Download />
      </main>
      <footer>

      </footer>
    </Fragment>
  );
}

export default Layout;
