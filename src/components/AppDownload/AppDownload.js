import React from 'react';
import WithWrapper from '../WithWrapper/WithWrapper';
import classes from './AppDownload.module.scss';
import Download from '../Download/Download';

const AppDownload = () => {
  return (
    <section className={classes.AppDownload}>
      <WithWrapper>
        <h2 className={classes.headline}>Download App</h2>
        <p className={classes.action}>Lorem ipsum!</p>
        <div className={classes.download}>

          <Download />
        </div>
      </WithWrapper>
    </section>
  );
}

export default AppDownload;
