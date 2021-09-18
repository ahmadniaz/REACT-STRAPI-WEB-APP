
import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import ProductContext from '../context/productContext/productContext';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Button } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom'

const ProductDescription = () => {
    const productContext = useContext(ProductContext);
    const { clickedProduct, handleInputChange, handleAddToCart, total } = productContext;
    const [curProd, setCurProd] = useState(clickedProduct)
    const [value, setValue] = useState(1)

    const doIncrement = () => {
        setValue(value + 1)
    }

    const doDecrement = () => {

        if (value === 1) {
            alert("Minimum Limit reached")
        }
        else {
            setValue(value - 1)
        }
    }

    // useEffect(() => {
    //     const localProducts = JSON.parse(localStorage.getItem("curProd")) || [];
    //     setCurProd(localProducts)

    // }, []);

    // useEffect(() => {

    //     if (clickedProduct) {
    //         localStorage.setItem("curProd", JSON.stringify(curProd || []));
    //     }
    //     //eslint-disable-next-line
    // }, []);
    // window.onunload = () => {
    //     // Clear the local storage
    //     localStorage.clear()
    // }


    const useStyles = makeStyles(theme => ({
        mainDiv: {
            marginTop: '15%',
            marginRight: '10%',
            marginLeft: '10%',
            padding: 0,
            overflowX: 'hidden',
            overflowY: 'hidden',

        },
        productDiv: {
            backgroundColor: ' rgba(112,112,112, 0.1)',
            textAlign: 'center'

        }, productTitle: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            letterSpacing: '1px',
            fontSize: '17px',
            marginBottom: 0,
        },
        productPrice: {
            ...theme.typography.primary,
            color: theme.palette.primary.dark,
            letterSpacing: '1px',
            fontSize: '14px',
            marginBottom: 0,
        },
        title: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            fontSize: '36px',
            fontWeight: 'bold'
        },
        firstHeading: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
        },
        description: {
            transform: 'translate(10%, 0%)'
        },
        paragraph: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            fontSize: '14px',
            marginBottom: '7%'
        },
        quantity: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
        },
        input: {
            width: '40%',
            textAlign: 'center',
            borderRadius: '15px',
            borderColor: theme.palette.secondary.main
        },
        span: {
            color: theme.palette.primary.dark,
            marginLeft: '25%',
            ...theme.typography.secondary,
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
        },
        tab: {
            textDecoration: 'none'
        }
    }))
    const classes = useStyles();
    return (
        <div className={classes.mainDiv}>
            <Grid container spacing={3} style={{ display: 'contents' }}>
                <div>
                    <h1 className={classes.title}>{curProd && curProd.title}</h1>
                </div>
                <div style={{ display: 'flex' }}>
                    <Grid item xs={5} >
                        <div className={classes.productDiv}>
                            <img alt="product1" src={`http://localhost:1337${curProd && curProd.image.url}`} style={{ width: '75%', }} />
                        </div>
                    </Grid>
                    <Grid item xs={7} >
                        <div className={classes.description}>
                            <div>
                                <h3 className={classes.firstHeading}>Description</h3>
                            </div>
                            <div>
                                <p className={classes.paragraph}>{curProd && curProd.description}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p className={classes.firstHeading}>Quantity:</p>
                                <div style={{ textAlign: 'center' }}>
                                    <RemoveIcon style={{ cursor: 'pointer' }} onClick={doDecrement} />
                                    <input
                                        className={classes.input}
                                        type='text' value={value}
                                        onChange={handleInputChange}
                                    />
                                    <AddIcon style={{ cursor: 'pointer' }} onClick={doIncrement} />
                                </div>
                            </div>
                            <Grid container>
                                <Grid item xs={3} style={{ marginLeft: '2%' }}>
                                    <h3 className={classes.quantity}>PRICE:<span className={classes.span}> ${curProd.price} </span></h3>
                                </Grid>
                                <Grid item xs={4} style={{ textAlign: 'end', marginLeft: '25%' }}>
                                    <Link className={classes.tab} as={NavLink} to='/cart'>
                                        <Button variant="outlined" className={classes.button} onClick={() => handleAddToCart(curProd.id, value, total)}>
                                            <span> ADD TO CART </span>
                                        </Button >
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </div>
            </Grid>
        </div>

    )
}
export default ProductDescription;