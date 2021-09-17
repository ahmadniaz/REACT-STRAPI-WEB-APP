import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { Button } from '@material-ui/core';
import DryFruit from '../../Assets/DryFruit.png'
import Herbs from '../../Assets/Herbs.png'
import Shake from '../../Assets/Shake.png'

const ItemGrids2 = () => {
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
            color: theme.palette.secondary.main,
            marginLeft: '5px'
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

        thirdGrid: {
            backgroundColor: theme.palette.primary.light,
            borderRadius: '15px',
            padding: '20px 20px 20px 20px',
            display: 'flex'
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
            <Grid container style={{ flexWrap: 'nowrap', marginTop: '30px' }}>
                <Grid item xs={3} className={classes.secondGrid} >
                    <Grid item xs={2} style={{ padding: '10px' }}>
                        <p className={classes.p2} style={{ marginBottom: 0, marginTop: '50px' }}>Enjoy</p>
                        <p className={classes.p2} style={{ marginBottom: 0, fontSize: '30px', fontWeight: 'bold', letterSpacing: '2px' }}>Dry</p>
                        <p className={classes.p2} style={{ fontSize: '30px', fontWeight: 'bold', letterSpacing: '2px' }}>Fruits</p>
                        <div >
                            <Button className={classes.secondGridButton}>
                                BROWSE
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <img alt="Grapes" src={DryFruit} style={{ height: '300px', marginLeft: '50px' }} />
                    </Grid>
                </Grid>
                <div style={{ padding: '5px' }}>

                </div>
                <Grid item xs={6} className={classes.thirdGrid} >
                    <Grid item xs={3} style={{ padding: '10px' }}>
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
                        <img alt="Herbs" src={Herbs} style={{ height: '330px', width: '330px', marginLeft: '50px' }} />
                    </Grid>
                </Grid>
                <div style={{ padding: '5px' }}>

                </div>
                <Grid item xs={3} className={classes.firstGrid} >
                    <Grid item xs={2} style={{ padding: '6px' }}>
                        <p className={classes.p1} style={{ marginBottom: 0, marginTop: '50px' }}>New</p>
                        <p className={classes.p1} style={{ marginBottom: 0, fontSize: '36px', fontWeight: 'bold', letterSpacing: '2px' }}>Organic</p>
                        <p className={classes.p1} style={{ fontSize: '36px', fontWeight: 'bold', letterSpacing: '2px' }}>Drinks</p>
                        <div >
                            <Button className={classes.firstGridButton}>
                                BROWSE
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <img alt="Grapes" src={Shake} style={{ height: '300px', marginLeft: '100px' }} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemGrids2;