import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { Button } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import line from '../../../Assets/line.png'
import slide3 from '../../../Assets/slide2.png'
import WaveTop from '../../../Assets/WaveTop.png'
import facebook from '../../../Assets/svg/facebook.svg'
import instagram from '../../../Assets/svg/instagram.svg'
import twitter from '../../../Assets/svg/twitter.svg'
import youtube from '../../../Assets/svg/youtube.svg'
import ArrowLeft from '../../../Assets/svg/ArrowLeft.svg'

const Slide3 = () => {
    const useStyles = makeStyles(theme => ({
        mainDiv: {
            backgroundImage: `url(${WaveTop})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '150% 150%',
            width: '100%',
            padding: 0,
            overflowX: 'hidden',
            overflowY: 'hidden'


        },
        tab: {
            textDecoration: 'none'
        },
        scroll: {
            ...theme.typography.secondary,
            minWidth: 10,
            marginLeft: "25px",
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            writingMode: 'vertical-rl'
        },
        scrollLine: {
            marginTop: '10px',
            marginLeft: '33px',
            height: '25em'
        },
        firstGrid: {

            marginTop: '230px'
        },
        firstHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '26px',
            paddingBottom: 0,
            fontWeight: 'bold',
            marginBottom: 0

        },
        secondHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '100px',
            marginTop: 0,
            marginBottom: 0

        },
        thirdHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '30px',
            fontWeight: 'bold',
            marginTop: 0

        },
        button: {
            ...theme.typography.secondary,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.light,
            letterSpacing: '1px',
            marginTop: 0,
            borderRadius: '25px',
            padding: '5px 25px 5px 25px'
        },
        paragraph: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            marginTop: '2px',
            fontSize: '22px',
            fontWeight: 400,

        },
        paraDiv: {
            marginTop: '100px'
        },
        paraGrid: {
            display: 'flex',
        },
        slide3: {
            marginTop: '-30px',
            marginLeft: '70px'
        },
        icons: {
            writingMode: 'vertical-rl',
            marginTop: '150px',
            display: 'flex',
            marginLeft: '145px',
            justifyContent: 'space-between',
            maxHeight: '200px',
        },
        iconSize: {
            width: '50%',
            height: '70%'
        },
        buttonText: {
            fontSize: '16px',
            color: theme.palette.primary.light,
            fontWeight: 'bold'
        },
        arrowDiv: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '30px'
        },
        rightArrow: {
            transform: 'scaleX(-1)'
        }

    }))
    const classes = useStyles();

    return (
        <div className={classes.mainDiv}>
            <Grid container style={{ paddingTop: '50px' }}>
                <div className={classes.firstGrid}>
                    <Grid item xs={2} >
                        <h3 className={classes.scroll}>Scroll Down</h3>
                        <img className={classes.scrollLine} alt="Vertical line" src={line} />
                    </Grid>
                </div>
                <Grid item xs={5} className={classes.paraGrid} >
                    <div className={classes.paraDiv}>
                        <p className={classes.firstHeading}>If a bug won't bite it, why should you?</p>
                        <p className={classes.secondHeading}>Go Organic!</p>
                        <p className={classes.thirdHeading}>Embrace Your Choices!</p>
                        <div className={classes.paraGrid}>
                            <Button className={classes.button} variant="contained" color="primary">
                                <Link className={classes.tab} as={NavLink} to='/store'> <span className={classes.buttonText}> VIEW PRODUCTS </span></Link>
                            </Button >
                            <p className={classes.paragraph}>Check our latest products!</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div className={classes.paraGrid}>
                        <div className={classes.slide3}>
                            <img alt="slide3 Circle" style={{ height: '500px', width: '450px' }} src={slide3} />
                        </div>
                        <div className={classes.icons} >

                            <img className={classes.iconSize} alt="Facebook" src={facebook} />
                            <img className={classes.iconSize} alt="instagram" src={instagram} />
                            <img className={classes.iconSize} alt="TWITTER" src={twitter} />
                            <img className={classes.iconSize} alt="YOUTUBE" src={youtube} />

                        </div>
                    </div>
                    <div className={classes.arrowDiv}>
                        <img className={classes.rightArrow} style={{ height: '50px', width: '100px', marginLeft: '320px' }} alt='Right Arrow' src={ArrowLeft} />
                        <img alt='Left Arrow' src={ArrowLeft} style={{ height: '50px', width: '100px', marginLeft: '270px' }} />
                    </div>
                </Grid>
            </Grid>
        </div >
    )
}
export default Slide3;