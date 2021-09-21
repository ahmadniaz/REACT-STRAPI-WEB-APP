import React, { useEffect, useState, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import { theme } from '../Theme'
import Badge from '@material-ui/core/Badge';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Grid from '@material-ui/core/Grid';
import LogoCropped from '../../Assets/LogoCropped.png';
import WaveTop from '../../Assets/WaveTop.png';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '../../Assets/svg/SearchIcon.svg'
import { NavLink, Link } from 'react-router-dom';
import Breadcrumb from "../breadcrumb/Breadcrumb";
import ProductContext from "../../context/productContext/productContext";
import Cart from '../../Assets/Cart.png'



function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: 1,
        top: 6,
        border: `2px solid ${theme.palette.primary.dark}`,
        padding: '0 4px',
    },
}))(Badge);

const useStyles = makeStyles(theme => ({

    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "5em"
    },
    logo: {
        height: "8em",
    },
    bar: {
        backgroundImage: `url(${WaveTop})`,
        backgroundColor: '#fff',
        backgroundSize: '130% 100%',
        marginTop: 0,
        marginBottom: '70px'
    },
    link: {
        margin: 'auto'
    },
    tab: {
        ...theme.typography.secondary,
        minWidth: 10,
        marginLeft: "25px",
        textDecoration: 'none',
        color: theme.palette.secondary.main
    },
    cart: {
        marginRight: '10px',
        minWidth: 10,
        marginLeft: "25px",
        height: "1em",
        marginTop: '2px',
        cursor: 'pointer'
    },
    pageName: {
        marginLeft: '10%',
        ...theme.typography.secondary,
        fontSize: '42px',
        fontWeight: 'bold',
        color: theme.palette.secondary.main
    }
}))

export default function Menu(props) {
    const productContext = useContext(ProductContext);
    const { cartItems } = productContext
    const [upperCase, setUpperCase] = useState('')
    const [open, setOpen] = useState(false)
    const getPageName = () => {
        const path = window.location.pathname;
        const page = path.split("/").pop();
        setUpperCase(page.toUpperCase());
    }

    useEffect(() => {

        getPageName()
        //eslint-disable-next-line
    }, [])

    const classes = useStyles()
    return (

        <Grid container>
            <ElevationScroll>
                <AppBar position='fixed' className={classes.bar}>
                    <Toolbar disableGutters>
                        <div className={classes.logo}>
                            <img alt="company logo" style={{ marginTop: '20px' }} src={LogoCropped} />
                        </div>
                        <div className={classes.link}>
                            <Link className={classes.tab} as={NavLink} to='/'> Home </Link>
                            <Link className={classes.tab} as={NavLink} to='/about'> About </Link>
                            <Link className={classes.tab} as={NavLink} to='/store'> Store </Link>
                            <Link className={classes.tab} as={NavLink} to='/contact'> Contact </Link>
                        </div>
                        <Link className={classes.tab} as={NavLink} to='/login'>Login</Link>
                        {open ?
                            <div>
                                <img alt='Search Icon' src={SearchIcon} className={classes.cart} onClick={() => setOpen(!open)} />
                                <input style={{ borderRadius: '15px', borderColor: theme.palette.secondary.main, boderSize: '0px' }} type='text' placeholder='search....' />
                            </div>
                            :
                            <img alt='Search Icon' src={SearchIcon} className={classes.cart} onClick={() => setOpen(!open)} />
                        }
                        <Link className={classes.tab} as={NavLink} to='/cart'>
                            <IconButton aria-label="cart" style={{ marginRight: '2%' }} >
                                <StyledBadge badgeContent={cartItems.length} color="secondary">
                                    <img alt="Cart Icon" src={Cart} />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                    </Toolbar>
                    <h1 className={classes.pageName}>{upperCase}</h1>
                    <Breadcrumb />
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </Grid >
    );
}
