import React, { useReducer } from 'react';
import axios from 'axios';
import BlogContext from './blogContext';
import blogReducer from './blogReducer'

import {
    GET_BLOGS,
    BLOG_CLICK

} from '../types';


const BlogState = (props) => {
    const initialState = {
        blogs: [],
        currentBlog: ''
    };
    const [state, dispatch] = useReducer(blogReducer, initialState);


    // GET contacts
    const getBlogs = async () => {
        try {
            const res = await axios.get(`http://localhost:1337/blogs`);
            dispatch({
                type: GET_BLOGS,
                payload: res.data
            })
        } catch (error) {
            return console.log('this is not working')
        }

    }

    const handleBlogClick = (blog) => {

        dispatch({
            type: BLOG_CLICK,
            payload: blog
        })

    }




    return (
        <BlogContext.Provider
            value={{
                blogs: state.blogs,
                currentBlog: state.currentBlog,
                getBlogs,
                handleBlogClick


            }}
        >
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState;