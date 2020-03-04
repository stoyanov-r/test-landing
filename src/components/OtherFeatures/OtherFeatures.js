import React from 'react';
import WithWrapper from '../WithWrapper/WithWrapper';
import classes from './OtherFeatures.module.scss';
import List from '../List/List';

const list = [
  { termin: 'Vestibulum rhoncus', definition: 'At auctor urna nunc id cursus metus aliquam. Sit amet aliquam id diam maecenas ultricies mi eget.' },
  { termin: 'Lectus arcu', definition: 'Bibendum at varius. Turpis nunc eget lorem dolor sed viverra ipsum. Tortor consequat id porta nibh venenatis.' },
  { termin: 'Montes nascetur', definition: 'ridiculus mus mauris vitae ultricies leo. Libero justo laoreet sit amet. Morbi tincidunt augue interdum velit.' },
]

const OtherFeatures = ({ winWidth }) => {
  return (
    <section className={classes.OtherFeatures}>
      <WithWrapper>
      {winWidth >= 1920
          && <picture className={classes.picture}>
            <img className={classes.image} src='/img/OtherFeatures/OtherFeatures__img.png' alt='IMG' />
          </picture>
        }
        <div className={classes.wrapper}>
          <h2 className={classes.headline}>Ut placerat orci nulla pellentes</h2>
          {winWidth < 1920
            && <picture className={classes.picture}>
              <img className={classes.image} src='/img/OtherFeatures/OtherFeatures__img.png' alt='IMG' />
            </picture>
          }
          <div className={classes.list}>
            <List list={list} />
          </div>
        </div>
        
      </WithWrapper>
    </section>
  );
}

export default OtherFeatures;
