import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";
import Grid from '@material-ui/core/Grid';
import Slide from './Slide';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Grid container >
      <Grid item xs={12}>
        <Carousel controls={false} interval={null} activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Slide />
          </Carousel.Item>
          <Carousel.Item>
            <Slide2 />
          </Carousel.Item>
          <Carousel.Item>
            <Slide3 />
          </Carousel.Item>
          <Carousel.Item>
            <Slide4 />
          </Carousel.Item>
          <Carousel.Item>
            <Slide5 />
          </Carousel.Item>
        </Carousel>
      </Grid>
    </Grid>
  );
}

export default ControlledCarousel;