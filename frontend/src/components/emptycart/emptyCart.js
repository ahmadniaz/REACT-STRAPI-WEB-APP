import React from 'react'
import { makeStyles } from "@material-ui/styles";
import empty from '../../Assets/empty.png'

const EmptyCart = () => {

    const useStyles = makeStyles(theme => ({
        mainDiv: {
            marginTop: '10%',
            textAlign: 'center'
        },
        title: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            fontSize: '30px',
            fontWeight: 'bold',

        },
        button: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.light,
            backgroundColor: theme.palette.secondary.main,
            marginTop: 0,
            borderRadius: '20px',
            borderWidth: '3px ',
            borderColor: theme.palette.secondary.main,
            padding: '2px 25px 2px 25px',
            "&:hover": {
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.secondary.main,
                borderColor: theme.palette.secondary.main,
            }
        }

    }))
    const classes = useStyles();
    return (
        <div className={classes.mainDiv}>
            <h1 className={classes.title}>You Cart is Empty. Please Add some products in it!</h1>
            <img alt="Empty Cart" src={empty} />
        </div>
    )
}

export default EmptyCart
