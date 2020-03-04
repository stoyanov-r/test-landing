import React from 'react';
import WithWrapper from '../WithWrapper/WithWrapper';
import classes from './Features.module.scss';
import List from '../List/List';

const list = [
  { termin: 'Vestibulum rhoncus', definition: 'At auctor urna nunc id cursus metus aliquam. Sit amet aliquam id diam maecenas ultricies mi eget.' },
  { termin: 'Lectus arcu', definition: 'Bibendum at varius. Turpis nunc eget lorem dolor sed viverra ipsum. Tortor consequat id porta nibh venenatis.' },
  { termin: 'Montes nascetur', definition: 'ridiculus mus mauris vitae ultricies leo. Libero justo laoreet sit amet. Morbi tincidunt augue interdum velit.' },
]

const Features = ({ winWidth }) => {
  return (
    <section className={classes.Features}>
      <WithWrapper styles={{ paddingRight: 0 }}>
        <div className={classes.wrapper}>
          <h2 className={classes.headline}>Viverra tellus in hac habitasse platea dictumst</h2>
          {winWidth < 1920
            && <picture className={classes.picture}>
              <img className={classes.image} src='/img/Features/Features__img.png' alt='IMG' />
            </picture>
          }

          <div className={classes.list}>
            <List list={list} />
          </div>
          <div className={classes.button_wrapper}>
            <button className={classes.button}>Lorem ipsum</button>
          </div>
        </div>
        {winWidth >= 1920
          && <picture className={classes.picture}>
            <img className={classes.image} src='/img/Features/Features__img--desktop.png' alt='IMG' />
          </picture>
        }
      </WithWrapper>
    </section>
  );
}

export default Features;
