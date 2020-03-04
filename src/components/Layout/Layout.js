import React, { Fragment, Component } from 'react';

import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Features from '../Features/Features';
import OtherFeatures from '../OtherFeatures/OtherFeatures';
import LastFeatures from '../LastFeatures/LastFeatures';
import AppDownload from '../AppDownload/AppDownload';
import Footer from '../Footer/Footer';


export class Layout extends Component {

  state = {
    winWidth: window.innerWidth,
  };

  updateDimensions = () => {
    this.setState({ winWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  };

  shouldComponentUpdate() {
    if (this.state.winWidth > 1920) {
      return true;
    };
    return false;
  };

  render() {
    return (
      <Fragment>
        <Header winWidth={this.state.winWidth}/>
        <main>
          <Reviews />
          <Features winWidth={this.state.winWidth} />
          <OtherFeatures winWidth={this.state.winWidth} />
          <LastFeatures winWidth={this.state.winWidth} />
          <AppDownload />
        </main>
        <Footer />
      </Fragment>
    );
  };
};

export default Layout;
