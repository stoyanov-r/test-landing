import React from 'react';
import classes from './Download.module.scss'
const Download = () => {
  return (
    <ul className={classes.download_list}>
      <li><a className={classes.google_play} href='/' title='Google play'>Google play</a></li>
      <li><a className={classes.app_store} href='/' title='App Store'>App Store</a></li>
    </ul>
  );
}

export default Download;
