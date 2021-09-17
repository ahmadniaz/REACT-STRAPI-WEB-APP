import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ProductContext from '../../context/productContext/productContext';
import BuyIcon from '../../Assets/svg/BuyIcon.svg'

const BestSellerProducts = () => {

    const productContext = useContext(ProductContext);
    const { products, getProducts } = productContext;


    useEffect(() => {
        getProducts();
        //eslint-disable-next-line
    }, [])
    console.log(products, 'in bestseller')
    const useStyles = makeStyles(theme => ({
        mainGrid: {
            marginRight: '80px',
            marginLeft: '80px'
        },
        firstHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            letterSpacing: '1px',
            fontSize: '26px',
            marginBottom: 0,
            marginTop: '50px',
            textAlign: 'center'
        },
        button: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            textDecoration: 'underline',
            '&:hover': {
                backgroundColor: theme.palette.primary.dark
            },
            float: 'right'
        },
        productDiv: {
            backgroundColor: ' rgba(112,112,112, 0.2)'

        },
        productTitle: {
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
        bagIcon: {
            height: '50px',
            float: 'right',
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
                cursor: 'pointer'
            }
        },
        FirstHeading: {
            ...theme.typography.primary,
            color: theme.palette.secondary.light,
            letterSpacing: '1px',
            fontSize: '18px',
            marginBottom: 0,
            height: '5%'

        },
        secondHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.light,
            letterSpacing: '1px',
            fontSize: '50px',
            marginTop: 0,
            marginBottom: 0,
            height: '10%'

        },
        thirdHeading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.light,
            letterSpacing: '1px',
            fontSize: '70px',
            fontWeight: 'bold',
            marginTop: 0,
            height: '20%'

        },
        fourthHeading: {
            ...theme.typography.primary,
            color: theme.palette.secondary.light,
            letterSpacing: '1px',
            fontSize: '18px',
            maxWidth: '450px'
        },
        floatingDiv: {
            position: 'relative',
            top: '-80px'
        },
        button1: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.light,
            marginTop: 0,
            fontWeight: 'bold',
            borderRadius: '20px',
            borderWidth: '3px ',
            borderColor: theme.palette.secondary.light,
            padding: '5px 35px 5px 35px',
        }
    }));

    const classes = useStyles();
    return (
        <div >
            <Grid container >
                <Grid item xs={12}>
                    <div>
                        <p className={classes.firstHeading}>Best Seller Products</p>
                        <p className={classes.firstHeading} style={{ fontSize: '18px', fontWeight: 500, marginTop: 0 }}>The best selling products that will make your products organic</p>
                    </div>
                    <div>
                        <Link className={classes.tab} as={NavLink} to='/store'>
                            <Button className={classes.button}>SHOP MORE</Button>
                        </Link>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                {products.slice(0, 8).map((product) => (

                    <Grid item xs={3} key={product.id} >

                        <div className={classes.productDiv}>
                            <img alt="product1" src={`http://localhost:1337${product.image.url}`} style={{ width: '95%', }} />
                        </div>
                        <div style={{ display: 'flex' }}>

                            <Grid item xs={10}>
                                <p className={classes.productTitle}>{product.title}</p>
                                <p className={classes.productPrice} >${product.price}</p>
                            </Grid>
                            <Grid item xs={2}>
                                <img alt="Cart Icon" className={classes.bagIcon} src={BuyIcon} />
                            </Grid>

                        </div>
                    </Grid>

                ))}
            </Grid>
        </div>
    )
}
export default BestSellerProducts;