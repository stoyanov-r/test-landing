import React, { PureComponent } from 'react';
import classes from './Reviews.module.scss';
import WithWrapper from '../WithWrapper/WithWrapper';
import Slider from 'react-slick';


const blockquotes = [
  { author: 'Nibh nisl', text: 'Condimentum id venenatis a condimentum vitae sapien pellentesque. At tellus at urna condimentum mattis pellentesque id nibh tortor.' },
  { author: 'Nibh nisl', text: 'Condimentum id venenatis a condimentum vitae sapien pellentesque. At tellus at urna condimentum mattis pellentesque id nibh tortor.' },
  { author: 'Nibh nisl', text: 'Condimentum id venenatis a condimentum vitae sapien pellentesque. At tellus at urna condimentum mattis pellentesque id nibh tortor.' },
]
  .map((item, i) =>
    <div key={item.author + i}>
      <blockquote className={classes.blockquote} >
        <cite className={classes.author}>{item.author}</cite>
        <p className={classes.text}>{item.text}</p>
      </blockquote>
    </div>
  )

const settings = {
  className: "center",
  infinite: true,
  slidesToShow: 1,
  swipeToSlide: true,
  arrows: false,
}

class Reviews extends PureComponent {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  };

  next() {
    this.slider.slickNext();
  };

  previous() {
    this.slider.slickPrev();
  };

  render() {
    return (
      <section className={classes.Reviews}>
        <WithWrapper>
          <h2 className={classes.headline}>Lorem ipsum dolor sit amet</h2>
          <div className={classes.slider}>
            <button onClick={this.previous} className={classes.previous}>previous</button>
            <Slider ref={c => (this.slider = c)} {...settings}>
              {blockquotes}
            </Slider>
            <button onClick={this.next} className={classes.next}>next</button>
          </div>
        </WithWrapper>
      </section>
    );
  }
}

export default Reviews;
