import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import LogoCropped from '../../Assets/LogoCropped.png';
import WaveTop from '../../Assets/WaveTop.png';
import Cart from '../../Assets/svg/Cart.svg'
import SearchIcon from '../../Assets/svg/SearchIcon.svg'
import { NavLink, Link } from 'react-router-dom';
import Breadcrumb from "../breadcrumb/Breadcrumb";






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
        marginTop: '2px'
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
    const [upperCase, setUpperCase] = useState('')
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
                        <img alt='Search Icon' src={SearchIcon} className={classes.cart} />
                        <Link className={classes.tab} as={NavLink} to='/cart'>
                            <img alt='Cart Icon' src={Cart} className={classes.cart} />
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
