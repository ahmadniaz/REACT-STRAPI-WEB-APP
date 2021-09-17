import React from 'react';
import ControlledCarousel from '../components/carasoul/heroslider/ControlledCarousel';
import ItemGrids from '../components/items/ItemGrids';
import ItemGrids2 from '../components/items/ItemGrids2';
import IconGrid from '../components/items/IconGrid';
import GreenTeaSection from '../components/CallToAction/GreenTea';
import BestSellerProducts from '../components/products/BestSellerProducts';
import LimesSection from '../components/CallToAction/Limes';
import ControlledTestimonial from '../components/carasoul/testimonials/ControlledTestimonials';
import BlogItem from '../components/blogs/BlogItem'
import NewsLetter from '../components/newsletter/NewsLetter';

const Home = () => {
    return (
        <>
            <ControlledCarousel style={{ marginTop: '5%' }} />
            <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                <ItemGrids />
                <ItemGrids2 />
                <IconGrid />
                <GreenTeaSection />
                <BestSellerProducts />
                <LimesSection />
                <ControlledTestimonial />
                <BlogItem />
                <NewsLetter />
            </div>
        </>
    )
}
export default Home;


