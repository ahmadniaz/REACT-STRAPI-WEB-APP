import {
    GET_BLOGS,
    BLOG_CLICK
} from '../types';


const blogReducer = (state, action) => {
    switch (action.type) {

        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload,
            }
        case BLOG_CLICK:
            return {
                ...state,
                currentBlog: action.payload
            }

        default:
            return state;
    };
}

export default blogReducer;