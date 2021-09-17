import React, { useContext, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import BlogContext from '../../context/blogsContext/blogContext';
import { makeStyles } from "@material-ui/styles";
import { Link, NavLink } from 'react-router-dom';



const Blogs = () => {

    const blogContext = useContext(BlogContext);
    const { getBlogs, blogs, handleBlogClick } = blogContext;

    useEffect(() => {
        getBlogs();

        //eslint-disable-next-line
    }, [])
    const useStyles = makeStyles(theme => ({

        firstHeading: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            letterSpacing: '1px',
            fontSize: '26px',
            marginBottom: 0,
            marginTop: '50px',
            textAlign: 'center'
        },
        firstPara: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '22px',
            fontWeight: 'bold',
        },
        secondPara: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            fontSize: '14px',
            marginBottom: 0,
        },
        tab: {
            textDecoration: 'none'
        },
    }));

    const classes = useStyles();
    return (
        <div>

            <Grid container style={{ marginTop: '10%' }}>
                {blogs.map((blog) => (
                    <Grid key={blog.id} item xs={4} style={{ textAlign: 'center', marginBottom: '5%' }}>
                        <img alt="NEWS 1" src={`http://localhost:1337${blog.image.url}`} style={{ width: '95%', height: '70%' }} />
                        <Link className={classes.tab} as={NavLink} to='/post'>
                            <p className={classes.firstPara} onClick={() => { handleBlogClick(blog) }}>{blog.title}</p></Link>
                        <p className={classes.secondPara}>{blog.description}</p>
                    </Grid>
                ))}
            </Grid>
        </div >
    )
}

export default Blogs