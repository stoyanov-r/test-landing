import React from 'react';
import classes from './LastFeatures.module.scss'
import List from '../List/List';
import WithWrapper from '../WithWrapper/WithWrapper';

const list = [
  { termin: 'Lectus arcu', definition: 'Bibendum at varius. Turpis nunc eget lorem dolor sed viverra ipsum. Tortor consequat id porta nibh venenatis.' },
  { termin: 'Morbi tincidunt', definition: 'Ugue interdum velit. Ut placerat orci nulla pellentesque dignissim enim sit amet. Ut sem nulla pharetra diam sit amet nisl suscipit. Tellus in hac habitasse platea. ' },
  { termin: ' Diam phasellus', definition: 'Vestibulum lorem sed risus ultricies tristique nulla. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.' },
]

const LastFeatures = ({winWidth}) => {
  let style = {};
  let wrapStyle = {};
  if (winWidth >= 1920) {
    style = {display: 'flex', justifyContent: 'space-between', width: '100%'}
    wrapStyle =   {width: 355 }
  }
  return (
    <section className={classes.LastFeatures}>
      <WithWrapper>
        <h2 className={classes.headline}>Ullamcorper dignissim</h2>
        <List 
          list={list} 
          style={style} 
          wrapStyle={wrapStyle} />
      </WithWrapper>
    </section>
  );
}

export default LastFeatures;
