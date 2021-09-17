import React from 'react'
import Grid from '@material-ui/core/Grid';
import { NavLink, Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/styles";
import facebook from '../../Assets/svg/facebook.svg'
import instagram from '../../Assets/svg/instagram.svg'
import twitter from '../../Assets/svg/twitter.svg'
import youtube from '../../Assets/svg/youtube.svg'
import WaveBottom from '../../Assets/WaveBottom.png'



const Footer = () => {
    const useStyles = makeStyles(theme => ({
        mainGrid: {
            marginRight: '80px',
            marginLeft: '80px',
        },
        firstHeading: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            letterSpacing: '1px',
            fontSize: '26px',
            marginTop: '50px',
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
            fontSize: '12px',
        }, icons: {
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '100px'
        },
        iconSize: {
            width: '20px',
            height: '20px'
        },
        tab: {
            ...theme.typography.secondary,
            minWidth: 10,
            display: 'block',
            textDecoration: 'none',
            color: theme.palette.secondary.main,
            fontSize: '16px'
        },

    }));

    const classes = useStyles();
    return (
        <div className={classes.mainGrid} style={{ marginTop: '100px' }}>

            <Grid container>
                <Grid item xs={3}>
                    <p className={classes.firstHeading}>The Organic</p>
                    <p className={classes.secondPara}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className={classes.icons}>
                        <img className={classes.iconSize} alt="Facebook" src={facebook} />
                        <img className={classes.iconSize} alt="instagram" src={instagram} />
                        <img className={classes.iconSize} alt="TWITTER" src={twitter} />
                        <img className={classes.iconSize} alt="YOUTUBE" src={youtube} />

                    </div>
                </Grid>

                <Grid item xs={3} style={{ textAlign: 'center' }}>
                    <p className={classes.firstHeading}>Quick Links</p>
                    <Link className={classes.tab} as={NavLink} to='/'> Home </Link>
                    <Link className={classes.tab} as={NavLink} to='/about'> About </Link>
                    <Link className={classes.tab} as={NavLink} to='/store'> Store </Link>
                    <Link className={classes.tab} as={NavLink} to='/signin'> Sign In </Link>
                    <Link className={classes.tab} as={NavLink} to='/signup'> Sign Up</Link>
                    <Link className={classes.tab} as={NavLink} to='/contact'> Contact </Link>

                </Grid>

                <Grid item xs={3} style={{ textAlign: 'center' }}>
                    <p className={classes.firstHeading}>Additional Links</p>
                    <Link className={classes.tab} as='services' to='/termsofservices'> Terms Of Services </Link>
                    <Link className={classes.tab} as={NavLink} to='/privacypolicy'> Privacy Policies </Link>
                    <Link className={classes.tab} as={NavLink} to='/blog'> News and Updates </Link>
                    <Link className={classes.tab} as={NavLink} to="/faq's"> FAQ's </Link>
                </Grid>

                <Grid item xs={3} style={{ textAlign: 'center' }}>
                    <p className={classes.firstHeading}>Contact Us</p>
                    <p className={classes.tab} > +92480778857</p>
                    <p className={classes.tab} > IT tower Gulberg,Lahore,Pakistan</p>
                    <p className={classes.tab} > in@organic.com</p>
                </Grid>
            </Grid>
            <div className={classes.bottomDiv}>
                <Grid container className={classes.mainGrid}>
                    <Grid item xs={12}>
                        <div>
                            <div>
                                <div>
                                    <img alt="Bottom wave" src={WaveBottom} style={{ width: '90%', position: 'relative' }} />
                                    <p className={classes.tab} style={{
                                        position: 'absolute',
                                        transform: 'translate(-50%, -100%)', left: '50%'
                                    }}>
                                        COPYRIGHTS.&copy; 2010-2020. BLANK SLATE TECHNOLOGIES.PVT.LTD. ALL RIGHTD RESERVED</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}

export default Footer