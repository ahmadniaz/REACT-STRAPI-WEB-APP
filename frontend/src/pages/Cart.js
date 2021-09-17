import React, { useContext, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import ProductContext from '../context/productContext/productContext';
import DeleteIcon from '../Assets/DeleteIcon.png'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EmptyCart from '../components/emptycart/emptyCart'
// import { Button } from '@material-ui/core';


const Cart = () => {

    const productContext = useContext(ProductContext);
    const { doDecrement, doIncrement, handleInputChange, cartItems,
        removeCartItem, loading, total, num, clickedProduct } = productContext;
    console.log(clickedProduct, 'in cart file')
    useEffect(() => {
        //eslint-disable-next-line
    }, [])
    const useStyles = makeStyles(theme => ({

        mainDiv: {
            marginTop: '15%',
            display: 'flex',
        },
        secondDiv: {
            marginTop: '5%',
            display: 'flex'

        },
        bottomDiv: {
            marginTop: '10%',
            display: 'flex',
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto'

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
            fontSize: '30px',
            fontWeight: 'bold',

        },
        quantity: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
        },
        price: {
            color: theme.palette.primary.dark,
            ...theme.typography.secondary,
        },
        input: {
            width: '40%',
            textAlign: 'center',
            borderRadius: '15px',
            borderColor: theme.palette.secondary.main
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
        deleteIcon: {
            width: '50%',
            cursor: 'pointer'
        },
        total: {
            ...theme.typography.secondary,
            color: theme.palette.primary.dark,
            fontSize: '36px',
            fontWeight: 'bold',
        }
    }))
    const classes = useStyles();
    return (
        <>
            {!loading && cartItems && cartItems.length === 0 ? (<EmptyCart />) :
                <div>
                    <Grid container className={classes.mainDiv}>
                        <Grid xs={1}></Grid>
                        <Grid item xs={2} >
                            <h1 className={classes.title}>Products</h1>
                        </Grid>
                        <Grid xs={3}></Grid>
                        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <Grid item xs={3}>
                                <h1 className={classes.title}>Quantity</h1>
                            </Grid>
                            <Grid item xs={1} >
                                <h1 className={classes.title}>Price</h1>
                            </Grid>
                            <Grid item xs={2}>
                                <h1 className={classes.title}>Remove</h1>
                            </Grid>
                        </Grid>
                    </Grid>

                    {cartItems && cartItems.map((item) => (
                        <Grid container className={classes.secondDiv}>
                            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Grid item xs={3}>
                                    <div className={classes.productDiv}>
                                        <img alt="product1" src={`http://localhost:1337${item && item.product.image.url}`}
                                            style={{ width: '95%', }} />
                                    </div>
                                </Grid>
                                <Grid item xs={3} style={{ alignSelf: 'center' }}>
                                    <h1 className={classes.title}>{item && item.product.title}</h1>
                                </Grid>
                            </Grid>
                            <Grid Grid item xs={6} style={{ display: 'flex', justifyContent: 'space-evenly', alignSelf: 'center' }}>
                                <Grid item xs={3} style={{ alignSelf: 'center' }} >
                                    <RemoveIcon style={{ cursor: 'pointer' }} onClick={() => doDecrement(num, clickedProduct)} />
                                    <input
                                        className={classes.input}
                                        type='text' value={num}
                                        onChange={handleInputChange}
                                    />
                                    <AddIcon style={{ cursor: 'pointer' }} onClick={() => doIncrement(num, clickedProduct)} />
                                </Grid>
                                <Grid item xs={1} style={{ alignSelf: 'center' }}>
                                    <h1 className={classes.price}> ${item && item.product.price}.00</h1>
                                </Grid>
                                <Grid item xs={2} style={{ textAlign: 'center' }}>
                                    <img alt="Delete" src={DeleteIcon} className={classes.deleteIcon} onClick={() => removeCartItem(item.product.id)} />
                                </Grid>
                            </Grid>
                            <hr />
                        </Grid>
                    ))}
                    <Grid container className={classes.bottomDiv}>
                        <Grid item xs={6}>
                            <h3> Total Products</h3>
                            <h3> Sub Total</h3>
                            <h1 className={classes.title}> Total</h1>
                        </Grid>
                        <Grid item xs={6} style={{ textAlignLast: 'right' }}>
                            <h3> {cartItems.length}</h3>
                            <h3>${total}.00</h3>
                            <h1 className={classes.total}>${total}.00</h1>
                        </Grid>
                    </Grid>
                </div>
            }
        </>
    )
}

export default Cart;
