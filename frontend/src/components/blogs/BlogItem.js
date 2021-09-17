import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { Link, NavLink } from 'react-router-dom';
import Waves from '../../Assets/Waves.png'
import N1 from '../../Assets/N1.png'
import N2 from '../../Assets/N2.png'
import N3 from '../../Assets/N3.png'



const BlogItem = () => {
    const useStyles = makeStyles(theme => ({
        mainGrid: {
            marginRight: '80px',
            marginLeft: '80px'
        },
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
        <div style={{
            backgroundImage: `url(${Waves})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1150px, 1650px'
        }}>

            <Grid container>
                <Grid item xs={12}>
                    <div style={{ marginTop: '155px' }}>
                        <p className={classes.firstHeading}>News and Updates</p>
                        <p className={classes.firstHeading}
                            style={{
                                fontSize: '18px', fontWeight: 500,
                                marginTop: 0, width: '350px', margin: 'auto'
                            }}>
                            Check out the new Organic trends and lifestyles in our Blogs.
                        </p>
                    </div>
                </Grid>
            </Grid>

            <Grid container style={{ marginTop: '200px' }}>
                <Grid item xs={12} className={classes.mainGrid} style={{ display: 'flex' }}>
                    <Grid item xs={3} style={{ textAlign: 'center' }}>
                        <img alt="NEWS 1" src={N1} style={{ width: '280px', height: '330px' }} />
                        <Link className={classes.tab} as={NavLink} to='/blog'>
                            <p className={classes.firstPara}>Organic Drinks</p>
                        </Link>
                        <p className={classes.secondPara}> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        </p>
                    </Grid>
                    <Grid item xs={5} style={{ textAlign: 'center' }}>
                        <img alt="NEWS 2" src={N2} style={{ width: '430px', height: '330px', marginLeft: '30px' }} />
                        <Link className={classes.tab} as={NavLink} to='/blog'>
                            <p className={classes.firstPara}>Summer Fruits</p>
                        </Link>
                        <p className={classes.secondPara}> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        </p>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: 'center' }}>
                        <img alt="NEWS 3" src={N3} style={{ width: '270px', height: '330px' }} />
                        <Link className={classes.tab} as={NavLink} to='/blog'>
                            <p className={classes.firstPara}>Organic BreakFast</p>
                        </Link>
                        <p className={classes.secondPara}> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        </p>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default BlogItem