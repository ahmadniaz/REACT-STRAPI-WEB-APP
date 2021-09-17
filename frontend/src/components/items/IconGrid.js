import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import FreeDelivery from '../../Assets/svg/FreeDelivery.svg'
import warranty from '../../Assets/svg/warranty.svg'
import headphones from '../../Assets/svg/headphones.svg'
import creditCard from '../../Assets/svg/creditCard.svg'

const IconGrid = () => {
    const useStyles = makeStyles(theme => ({
        mainGrid: {
            marginTop: '70px'
        },
        p1: {
            ...theme.typography.secondary,
            color: theme.palette.primary.light
        },
        p2: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            paddingLeft: '15px'
        },
        firstHeading: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '18px',
            marginBottom: 0,
            height: '5%'

        },
        secondHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '50px',
            marginTop: 0,
            marginBottom: 0,
            height: '10%'

        },
        thirdHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '70px',
            fontWeight: 'bold',
            marginTop: 0,
            height: '20%'

        },
        fourthHeading: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '18px',
            maxWidth: '450px'
        },
        floatingDiv: {
            position: 'relative',
            top: '-80px'
        },
        button: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            marginTop: 0,
            fontWeight: 'bold',
            borderRadius: '20px',
            borderWidth: '3px ',
            borderColor: theme.palette.secondary.main,
            padding: '5px 35px 5px 35px',
        }
    }))
    const classes = useStyles();
    return (
        <>

            <Grid container className={classes.mainGrid}>
                <Grid item xs={3} style={{ display: 'flex' }}>
                    <div>
                        <img alt="Truck" src={FreeDelivery} style={{ height: '50px' }} />
                    </div>
                    <div>
                        <p className={classes.p2} style={{ marginBottom: '2px', fontWeight: 'bold' }}>Free Shipping</p>
                        <p className={classes.p2} style={{ fontSize: '14px', marginTop: '1px' }}>Free Shipping on all orders</p>
                    </div>
                </Grid>
                <Grid item xs={3} style={{ display: 'flex' }}>
                    <div>
                        <img alt="Truck" src={warranty} style={{ height: '50px' }} />
                    </div>
                    <div>
                        <p className={classes.p2} style={{ marginBottom: '2px', fontWeight: 'bold' }}>Free Shipping</p>
                        <p className={classes.p2} style={{ fontSize: '14px', marginTop: '1px' }}>Free Shipping on all orders</p>
                    </div>
                </Grid>
                <Grid item xs={3} style={{ display: 'flex' }}>
                    <div>
                        <img alt="Truck" src={headphones} style={{ height: '50px' }} />
                    </div>
                    <div>
                        <p className={classes.p2} style={{ marginBottom: '2px', fontWeight: 'bold' }}>Free Shipping</p>
                        <p className={classes.p2} style={{ fontSize: '14px', marginTop: '1px' }}>Free Shipping on all orders</p>
                    </div>
                </Grid>
                <Grid item xs={3} style={{ display: 'flex' }}>
                    <div>
                        <img alt="Truck" src={creditCard} style={{ height: '50px' }} />
                    </div>
                    <div>
                        <p className={classes.p2} style={{ marginBottom: '2px', fontWeight: 'bold' }}>Free Shipping</p>
                        <p className={classes.p2} style={{ fontSize: '14px', marginTop: '1px' }}>Free Shipping on all orders</p>
                    </div>
                </Grid>
            </Grid>

        </>
    )
}

export default IconGrid;