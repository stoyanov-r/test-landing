import React from 'react';
import classes from './List.module.scss';

const List = ({list, style, wrapStyle}) => {
  return (
    <dl style={style} className={classes.list}>
      {list.map((item, i) => 
      <div style={wrapStyle} key={'list-' + i}>
        <dt className={classes.termin} >{item.termin}</dt>
        <dd className={classes.definition} >{item.definition}</dd>
      </div>
      )}
    </dl>
  );
}

export default List;
