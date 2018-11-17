import React, {Component} from 'react';
import './carousel.css';
import huntforwilderpeople from '../../images/huntforwilderpeople.jpg';
import nichtspassiert from '../../images/nichtspassiert.jpg';
import viceversa from '../../images/viceversa.jpg';
import fourthphase from '../../images/fourthphase.jpg';
import fullmoon from '../../images/fullmoon.jpg';

import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
  Container,
  Row, 
  Col,
  Button
} from 'reactstrap';

const items = [
  {
    src: huntforwilderpeople,
    header: 'Hunt for the Wilderpeople',
    caption: 'Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. from the director of What We Do In The Shadows.'
  },
  {
    src: nichtspassiert,
    header: 'Nichts passiert / A Decent Man',
    caption: 'A Swiss family takes a ski vacation and runs into trouble when the father, the titular decent man, finds himself in a series of moral quandaries.'
  },
  {
    src: viceversa,
    header: 'Vice Versa',
    caption: 'Come along with the Good Company crew as they travel throughout the US, Japan, BC and Quebec to showcase skiing in the best way possible.'
  },
  {
    src: fourthphase,
    header: 'The Fourth Phase',
    caption: 'From the creators of The Art of FLIGHT, Red Bull Media House presents THE FOURTH PHASE, a snowboarding epic starring iconic athlete Travis Rice.'
  },
  {
    src: fullmoon,
    header: 'Full Moon',
    caption: 'Be inspired by women who push boundaries, FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifestyle sport.',
  }
];

class vimeo_carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = false;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <Container fluid={true}>
                <Row>
                  <Col xs={{size: 4, offset: 1}}>
                    <img id="item" src={item.src} alt="" />
                  </Col>
                  <Col xs="6">
                    <h2 id="header">{item.header}</h2>
                    <p id="caption">{item.caption}</p>
                    <div className="button">
                      <Button id="buy">Buy Now</Button>{' '}
                      <Button id="watch" outline color="secondary">Watch Trailer</Button>{' '}
                    </div>
                  </Col>
                </Row>
              </Container>
            </CarouselItem>
      
      );
    });

    return (   
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {slides}
          <div>
            <CarouselControl className="arrow" direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </div>
          </Carousel>
   
    );
  }
}


export default vimeo_carousel;

