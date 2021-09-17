import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { theme } from '../Theme'
import Borkely from '../../Assets/Borkely.png'
import { Button } from '@material-ui/core';

const OrganicMeals = () => {
    const useStyles = makeStyles(theme => ({

        firstHeading: {
            ...theme.typography.primary,
            color: theme.palette.secondary.light,
            letterSpacing: '1px',
            fontWeight: 'bold',
            marginBottom: 0

        },
        secondHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.light,
            letterSpacing: '1px',
            fontSize: '40px',
            fontWeight: 'bold'

        },
        paragraph: {
            ...theme.typography.primary,
            color: theme.palette.secondary.light,
            fontSize: '14px',
            marginTop: '2%',
            marginRight: '10%'
        },
        thirdHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.light,
            letterSpacing: '1px',
            fontSize: '50px',
            fontWeight: 'bold',

        },
        fourthHeading: {
            ...theme.typography.primary,
            color: theme.palette.secondary.light,
            letterSpacing: '1px',
            fontSize: '18px',
        },
        floatingDiv: {
            position: 'relative',
            top: '-40%',
        },
        button: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.light,
            marginTop: 0,
            fontWeight: 'bold',
            borderRadius: '20px',
            borderWidth: '3px ',
            borderColor: theme.palette.secondary.light,
        }
    }))
    const classes = useStyles();
    return (
        <>

            <Grid container spacing={1}
                style={{ marginTop: '100px', maxHeight: '400px' }}>
                <Grid item xs={6} style={{
                    display: 'flex',
                    backgroundColor: theme.palette.primary.dark, borderRadius: '15px'
                }}>
                    <Grid item xs={4}>
                        <div style={{
                            top: '50px', transform: 'translate(60%, 20%)'
                        }}>
                            <p className={classes.firstHeading} >New</p>
                            <p className={classes.secondHeading}>Organic<br />Meals</p>
                            <Button variant="outlined" className={classes.button}>
                                <span> SHOP NOW </span>
                            </Button >
                        </div>
                    </Grid>

                    <div className={classes.floatingDiv}>
                        <img alt="Green Tea" src={Borkely} style={{ height: '350px', width: '400px' }} />
                    </div>
                </Grid>
                <Grid item xs={6} style={{ display: 'flex' }}>
                    <div style={{
                        top: '50px', transform: 'translate(5%, 10%)'
                    }}>
                        <h3 className={classes.firstHeading} style={{ color: theme.palette.secondary.main }}>Our Mission</h3>
                        <p className={classes.paragraph} style={{ color: theme.palette.secondary.main }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                    </div>
                </Grid>
            </Grid>

        </>
    )
}
export default OrganicMeals;
