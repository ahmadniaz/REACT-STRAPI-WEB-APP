import React from 'react';
import Blogs from '../components/blogs/Blogs';
import IconGrid from '../components/items/IconGrid'
import NewsLetter from '../components/newsletter/NewsLetter'


const Blog = () => {

    return (
        <>
            <div style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto' }}>
                <Blogs />
                <IconGrid />
                <NewsLetter />
            </div>
        </>
    )
}

export default Blog;