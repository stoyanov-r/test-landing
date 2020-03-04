import React from 'react';
import classes from './Footer.module.scss';
import WithWrapper from '../WithWrapper/WithWrapper';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <WithWrapper>
        <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </WithWrapper>
    </footer>
  );
}

export default Footer;
