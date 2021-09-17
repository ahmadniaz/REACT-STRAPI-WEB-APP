import React from 'react';
import ProductItems from '../components/products/ProductItems';
import Limes from '../components/CallToAction/Limes'
import IconGrid from '../components/items/IconGrid';
import NewsLetter from '../components/newsletter/NewsLetter'


const Store = () => {
    return (
        <>
            <div style={{ marginTop: '10%', width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                <ProductItems />
                <Limes />
                <IconGrid />
                <NewsLetter />
            </div>
        </>
    )
}

export default Store;