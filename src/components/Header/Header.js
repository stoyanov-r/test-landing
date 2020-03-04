import React, { useState, useEffect } from 'react';
import WithWrapper from '../WithWrapper/WithWrapper';
import classes from './Header.module.scss';
import Download from '../Download/Download';


const list = [
  { title: 'Lorem ipsum', anchor: '' },
  { title: 'Lorem ipsum', anchor: '' },
  { title: 'Lorem ipsum', anchor: '' },
]

const Header = ({winWidth}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cls = [classes.nav];

  if (!isMenuOpen) {
    cls.push(classes.nav_close)
  };

  function buttonClickHandler () {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect (() => {
    if(winWidth >= 1920) {
      setIsMenuOpen(true)
    };
  }, [winWidth]);
  
  return (
    <header className={classes.Header}>
      <WithWrapper>
        <nav className={cls.join(' ')}>
          <div className={classes.logo}>
            <a className={classes.logo_link} href="/" title="LOGO">LOGO</a>
          </div>
          <button onClick={buttonClickHandler} className={classes.menu_toggle}>Menu</button>
          <ul className={classes.menu}>
            {list.map((item, i) => 
              <li className={classes.menu_item} key={item.title + i}>
                <a 
                  className={classes.menu_link} 
                  href={item.anchor} 
                  title={item.title}
                >{item.title}</a>
              </li>
            )}
          </ul>
        </nav>
        <section className={classes.promo}>
          <h1 className={classes.headline}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <div className={classes.image}></div>
          <p className={classes.slogan}>Sed do eiusmod tempor incididunt ut labore et dolore</p>
          <p className={classes.download}>lorem ipsum:</p>
          <div className={classes.downloadWrapper}>
          <Download />
          </div>
        </section>
      </WithWrapper>
    </header>
  );
}


export default Header;
