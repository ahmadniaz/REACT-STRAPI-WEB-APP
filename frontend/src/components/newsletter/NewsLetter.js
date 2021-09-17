import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { Button } from '@material-ui/core';
import Mint from '../../Assets/Mint.png';
import { theme } from '../Theme'


const NewsLetter = () => {
    const useStyles = makeStyles(theme => ({

        secondHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.light,
            letterSpacing: '1px',
            fontSize: '30px',
            marginTop: 0,
            marginBottom: 0,


        },
        thirdHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.light,
            letterSpacing: '1px',
            fontSize: '50px',
            fontWeight: 'bold',
            marginTop: 0,


        },
        floatingDiv: {
            position: 'relative',
            top: '-100px'
        },
        inputField: {
            borderRadius: '20px',
            padding: '7px 95px 10px 190px',
            borderColor: theme.palette.secondary.light,
            borderSize: '1px',
            "&::placeholder":
            {
                color: theme.palette.secondary.dark,
            }
        },
        button: {
            ...theme.typography.secondary,
            backgroundColor: theme.palette.secondary.contrastText,
            color: theme.palette.secondary.main,
            marginTop: 0,
            fontWeight: 'bold',
            borderRadius: '20px',
            borderWidth: '3px ',
            padding: '5px 35px 6px 35px',
            position: 'relative',
            right: '70px',
            "&:hover": {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.light
            }
        }

    }));

    const classes = useStyles();
    return (
        <>

            <Grid container
                style={{
                    backgroundColor: theme.palette.primary.dark,
                    borderRadius: '15px', marginTop: '100px', maxHeight: '300px',
                    // maxWidth: '90%'
                }}>
                <Grid item xs={12} style={{ display: 'flex' }}>
                    <div style={{
                        top: '50px', transform: 'translateY(2%)', padding: '30px'
                    }}>

                        <p className={classes.secondHeading}>Subscribe To Our Email</p>
                        <p className={classes.thirdHeading}>For Latest News and Updates</p>
                        <input className={classes.inputField} type='text' placeholder='enter your email here' />
                        <Button className={classes.button}>SUBSCRIBE</Button>
                    </div>
                    <div className={classes.floatingDiv}>
                        <img alt="Limes" src={Mint} style={{ height: '350px', width: '300px', marginLeft: '30px' }} />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default NewsLetter;