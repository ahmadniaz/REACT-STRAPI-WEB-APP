import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { theme } from '../Theme';
import axios from 'axios'
import ProductContext from '../../context/productContext/productContext';
import BuyIcon from '../../Assets/svg/BuyIcon.svg'
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './ProductStyling';
import Loader from 'react-spinners/PropagateLoader';

import ToggleFilter from '../filter/ToggleFilter';
import { Link, NavLink } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const ProductItems = () => {
    const productLimit = 8;
    const productContext = useContext(ProductContext);
    const { min, max, category, sort, sortProducts, handleProductClick,
        clicked, handleClickState, clearFilter, handleAddToCart, total, num } = productContext;
    const [sliced1, setSliced1] = useState(0)
    const [products, setProducts] = useState([])
    const [sliced2, setSliced2] = useState(productLimit)
    const [noOfPages, setNoOfPages] = useState(products && products.length / productLimit)
    const [loading, setLoading] = useState(false)

    console.log(num, 'item num')
    console.log(total, 'num total')
    const handleChange = (e, value) => {

        e.preventDefault()

        if (value === 1) {

            setSliced1(0);
            setSliced2(productLimit)
        }
        else {

            setSliced1((value * productLimit) - productLimit)
            setSliced2((value * productLimit))

        }



    }

    const getProducts = async () => {
        setLoading(true)
        const res = await axios.get(`http://localhost:1337/products`)
        setProducts(res.data)
        setNoOfPages(res.data.length / productLimit)
        setLoading(false)
    }
    useEffect(() => {

        getProducts();
        //eslint-disable-next-line
    }, [])

    const handleSort = e => {
        e.preventDefault();
        sortProducts(e.target.value)
    }


    useEffect(() => {
        let filteredProducts = products;
        if (sort !== 'Sort By') {

            filteredProducts = filteredProducts.sort((a, b) => b.created_at.localeCompare(a.created_at))

        }
        else if (sort === 'Sort By') {
            filteredProducts = products
        }
        if (clicked) {
            if (category !== 'all') {
                filteredProducts = filteredProducts.filter(product => product.categories[0].name === category)

            }
            if (min !== '') {
                filteredProducts = filteredProducts.filter(product => product.price > min)

            }

            if (max !== '') {
                filteredProducts = filteredProducts.filter(product => product.price < max)

            }
            handleClickState()
        }

        setProducts(filteredProducts)
        clearFilter()
        //eslint-disable-next-line
    }, [sort, clicked])


    const classes = useStyles();

    return (
        <div className={classes.mainDiv}>

            <ToggleFilter />
            <Grid container>
                <Grid item xs={12} style={{ display: 'flex', marginTop: '50px' }}>
                    <Grid item xs={6}>
                        <Grid item xs={12} >
                            <p className={classes.firstHeading}
                                style={{ fontSize: '26px' }}>
                                All Products
                            </p>
                        </Grid>
                        <p style={{ color: theme.palette.secondary.main }}>Viewing {sliced1 + 1} to {sliced2} product of {products && products.length}products</p>
                    </Grid>

                    <Grid item xs={6}>
                        <Grid item xs={12} style={{ display: 'flex', marginLeft: '50%' }}>
                            <Grid item xs={5} style={{ alignSelf: 'flex-end' }}>

                                <p className={classes.firstHeading} >Sort by:</p>
                            </Grid>
                            <Grid item xs={7}>
                                <FormControl style={{ minWidth: '150px' }} className={classes.formControl}  >
                                    <InputLabel id="demo-simple-select-label">sort by</InputLabel>
                                    <Select
                                        value={sort}
                                        onChange={handleSort}
                                    >
                                        <MenuItem value="Latest Products"> Latest Products</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {loading ? <Loader /> :
                <Grid container spacing={3}>
                    {products && products.slice(sliced1, sliced2).map((product) => (

                        <Grid item xs={3} key={product.id} >

                            <div className={classes.productDiv}>
                                <img alt="product1" src={`http://localhost:1337${product.image.url}`} style={{ width: '95%', }} />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Grid item xs={10}>
                                    <Link className={classes.tab} as={NavLink} to='/productdescription'>
                                        <p className={classes.productTitle} onClick={() => handleProductClick(product)}>{product.title}</p>
                                    </Link>
                                    <p className={classes.productPrice} >${product.price}</p>
                                </Grid>
                                <Grid item xs={2}>
                                    <Link className={classes.tab} as={NavLink} to='/cart'>
                                        <img alt="Cart Icon" className={classes.bagIcon} src={BuyIcon}
                                            onClick={() => handleAddToCart(product.id, num)}
                                        />
                                    </Link>
                                </Grid>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            }

            <Pagination
                style={{ float: 'right', marginTop: '50px' }}
                count={noOfPages}
                color='secondary'
                variant='outlined'
                onChange={handleChange}
            />
        </div >
    )
}
export default ProductItems;