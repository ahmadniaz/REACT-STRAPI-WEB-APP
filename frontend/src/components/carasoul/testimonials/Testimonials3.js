import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import Group54 from '../../../Assets/Group54.png'
import QMark from '../../../Assets/svg/QMark.svg'

const Testimonials3 = () => {
    const useStyles = makeStyles(theme => ({
        mainGrid: {
            marginRight: '120px',
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
    }));

    const classes = useStyles();
    return (
        <div className={classes.mainGrid}>

            <Grid container >
                <Grid item xs={12}>
                    <div>
                        <p className={classes.firstHeading}>Testimonials</p>
                        <p className={classes.firstHeading}
                            style={{ fontSize: '18px', fontWeight: 500, marginTop: 0 }}>
                            Have a look what our clients say about our Organic Products
                        </p>
                    </div>
                </Grid>
            </Grid>

            <Grid container style={{ display: 'flex', marginTop: '40px' }} >
                <Grid item xs={5}>
                    <img alt="Testimonials" src={Group54} style={{ width: '450px' }} />
                </Grid>
                <Grid item xs={7} style={{ top: '50px', transform: 'translateY(15%)' }}>
                    <img alt="Qoutation" src={QMark} style={{ height: '25px' }} />
                    <p style={{ fontSize: '18px', fontWeight: 600, marginTop: 0, paddingLeft: '43px' }}
                        className={classes.firstHeading}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    </p>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', marginTop: 0, float: 'right' }}
                        className={classes.firstHeading}
                    >
                        Gabriella Macqueen
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Testimonials3