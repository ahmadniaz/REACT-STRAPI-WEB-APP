import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { theme } from '../Theme'
import Anar from '../../Assets/Anar.png'
import { Button } from '@material-ui/core';

const GreenTeaSection = () => {
    const useStyles = makeStyles(theme => ({

        firstHeading: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontWeight: 'bold',
            marginBottom: 0

        },
        secondHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '40px',
            fontWeight: 'bold'

        },
        paragraph: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            fontSize: '14px',
            marginTop: '2%',
            marginRight: '10%'
        },
        thirdHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '50px',
            fontWeight: 'bold',

        },
        fourthHeading: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '18px',
        },
        floatingDiv: {
            position: 'relative',
            top: '-20%',
        },
        button: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            marginTop: 0,
            fontWeight: 'bold',
            borderRadius: '20px',
            borderWidth: '3px ',
            borderColor: theme.palette.secondary.main,
        }
    }))
    const classes = useStyles();
    return (
        <>

            <Grid container
                style={{ marginTop: '100px', maxHeight: '400px' }}>
                <Grid item xs={6} style={{ display: 'flex' }}>
                    <div style={{
                        top: '50px', transform: 'translate(0%, 20%)'
                    }}>
                        <h3 className={classes.firstHeading}>Our Vision</h3>
                        <p className={classes.paragraph}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                    </div>
                </Grid>
                <Grid item xs={6} style={{
                    display: 'flex',
                    backgroundColor: theme.palette.secondary.contrastText, borderRadius: '15px'
                }}>

                    <div className={classes.floatingDiv}>
                        <img alt="Green Tea" src={Anar} style={{ height: '350px', width: '400px' }} />
                    </div>
                    <Grid item xs={3}>
                        <div style={{
                            top: '50px', transform: 'translate(0%, 20%)'
                        }}>
                            <p className={classes.firstHeading} >New</p>
                            <p className={classes.secondHeading}>Organic<br />Snack</p>
                            <Button variant="outlined" className={classes.button}>
                                <span> SHOP NOW </span>
                            </Button >
                        </div>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}
export default GreenTeaSection;
