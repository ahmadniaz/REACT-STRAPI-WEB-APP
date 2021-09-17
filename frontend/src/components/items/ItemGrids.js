import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { Button } from '@material-ui/core';
import Poradge from '../../Assets/Poradge.png'
import Fruits from '../../Assets/Fruits.png'

const ItemGrids = () => {
    const useStyles = makeStyles(theme => ({
        mainGrid: {
            marginRight: '80px',
            marginLeft: '80px',
            marginTop: '50px',
        },
        p1: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.light
        },
        p2: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main
        },
        firstGrid: {
            backgroundColor: theme.palette.primary.dark,
            borderRadius: '15px',
            padding: '20px 20px 20px 20px',
            display: 'flex'
        },
        secondGrid: {
            backgroundColor: theme.palette.secondary.contrastText,
            borderRadius: '15px',
            padding: '20px 20px 20px 20px',
            display: 'flex'
        },
        firstGridButton: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.light,
            textDecoration: 'underline',
            '&:hover': {
                backgroundColor: theme.palette.secondary.main
            }
        },
        secondGridButton: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            textDecoration: 'underline',
            '&:hover': {
                backgroundColor: theme.palette.secondary.light
            }
        }


    }))
    const classes = useStyles();
    return (
        <div >
            <Grid container style={{ flexWrap: 'nowrap', marginTop: '50px' }}>
                <Grid item xs={6} className={classes.firstGrid} >
                    <Grid item xs={3}>
                        <p className={classes.p1} style={{ marginBottom: 0, marginTop: '50px' }}>Enjoy</p>
                        <p className={classes.p1} style={{ marginBottom: 0, fontSize: '36px', fontWeight: 'bold', letterSpacing: '2px' }}>Organic</p>
                        <p className={classes.p1} style={{ fontSize: '36px', fontWeight: 'bold', letterSpacing: '2px' }}>Meals</p>
                        <div >
                            <Button className={classes.firstGridButton}>
                                BROWSE
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <img alt="Grapes" src={Poradge} style={{ height: '300px', width: '300px', marginLeft: '50px' }} />
                    </Grid>
                </Grid>
                <div style={{ padding: '3px' }}>
                </div>
                <Grid xs={6} className={classes.secondGrid} >
                    <Grid item xs={3}>
                        <p className={classes.p2} style={{ marginBottom: 0, marginTop: '50px' }}>New</p>
                        <p className={classes.p2} style={{ marginBottom: 0, fontSize: '36px', fontWeight: 'bold', letterSpacing: '2px' }}>Organic</p>
                        <p className={classes.p2} style={{ fontSize: '36px', fontWeight: 'bold', letterSpacing: '2px' }}>Snacks</p>
                        <div >
                            <Button className={classes.secondGridButton}>
                                BROWSE
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <img alt="Grapes" src={Fruits} style={{ height: '330px', width: '330px', marginLeft: '50px' }} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemGrids;