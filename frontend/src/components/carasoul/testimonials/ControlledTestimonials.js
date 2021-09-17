import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";
import Grid from '@material-ui/core/Grid';
import Testimonials from './Testimonials'
import Testimonials2 from './Testimonials2';
import Testimonials3 from './Testimonials3';
import '../../../App.css'

const ControlledTestimonial = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Grid container >
            <Grid item xs={12}>
                <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <Testimonials />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Testimonials2 />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Testimonials3 />
                    </Carousel.Item>
                </Carousel>
            </Grid>
        </Grid>
    );
}
export default ControlledTestimonial;
