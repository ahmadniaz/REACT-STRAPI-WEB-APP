import React from 'react'
import { makeStyles } from "@material-ui/styles";


const FAQs = () => {




    const useStyles = makeStyles(theme => ({
        paragraph: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            fontSize: '12px'
        },
        heading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
        },

        title: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            fontSize: '36px',
            fontWeight: 'bold'
        },
        firstPara: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            letterSpacing: '1px',
            fontSize: '22px',
            fontWeight: 'bold',
        },
        secondPara: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            fontSize: '14px',
            marginBottom: 0,
        },
        tab: {
            textDecoration: 'none'
        },
    }))
    const classes = useStyles();
    return (
        <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%' }}>

            <h1 className={classes.title}>24/7 SUPPORT</h1>

            <h3 className={classes.heading}>Effective Date:6 Nov 2020</h3>

            <h3 className={classes.heading}>Hello and Welcome to the Organic Privacy Policies</h3>

            <p className={classes.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>

            <h3 className={classes.heading}>01.Heading?</h3>

            <p className={classes.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>

            <h3 className={classes.heading}>02.Heading?</h3>

            <p className={classes.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>

            <h3 className={classes.heading}>03.Heading?</h3>

            <p className={classes.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>

            <h3 className={classes.heading}>04.Heading?</h3>

            <p className={classes.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.

            </p>

        </div>

    )
}

export default FAQs;

