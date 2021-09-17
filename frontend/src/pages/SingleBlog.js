import React, { useContext, useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import BlogContext from '../context/blogsContext/blogContext';
import IconGrid from '../components/items/IconGrid';
import NewsLetter from '../components/newsletter/NewsLetter';
import { makeStyles } from "@material-ui/styles";
import { Link, NavLink } from 'react-router-dom';


const SingleBlog = () => {
    const blogContext = useContext(BlogContext);
    const { currentBlog, handleBlogClick, blogs } = blogContext;
    const [curBlog, setCurUserBlog] = useState(currentBlog)
    useEffect(() => {

        const localProducts = JSON.parse(localStorage.getItem("curBlog")) || [];
        setCurUserBlog(localProducts)

    }, []);

    useEffect(() => {

        if (currentBlog) {
            localStorage.setItem("curUser", JSON.stringify(curBlog || []));
        }
        //eslint-disable-next-line
    }, []);
    const data = curBlog.detailedDescription.split('\n')

    const useStyles = makeStyles(theme => ({
        paragraph: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            fontSize: '12px'
        },
        heading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
        },

        title: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            fontSize: '36px',
            fontWeight: 'bold'
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
    }))
    const classes = useStyles();
    return (
        <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%' }}>
            <div>

                <h1 className={classes.title}>{curBlog.title}</h1>
                <div style={{ marginBottom: '5%' }}>
                    <img alt="NEWS 1" src={`http://localhost:1337${curBlog.image.url}`} style={{ width: '180vh', height: '50vh' }} />
                </div>
                <Grid>{data.map(value => value.length < 100 ? <p className={classes.heading}>{value}</p> : <p className={classes.paragraph}>{value}</p>)}</Grid>
            </div>
            <div>
                <h1 className={classes.title}>Related Posts</h1>
                <Grid container>
                    {blogs.slice(1, 4).map((blog) => (
                        <Grid key={blog.id} item xs={4} style={{ textAlign: 'center', marginBottom: '5%' }}>
                            <img alt="NEWS 1" src={`http://localhost:1337${blog.image.url}`} style={{ width: '95%', height: '70%' }} />
                            <Link className={classes.tab} as={NavLink} to='/post'>
                                <p className={classes.firstPara} onClick={() => { handleBlogClick(blog) }}>{blog.title}</p></Link>
                            <p className={classes.secondPara}>{blog.description}</p>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <IconGrid />
            <NewsLetter />
        </div>

    )
}

export default SingleBlog;

