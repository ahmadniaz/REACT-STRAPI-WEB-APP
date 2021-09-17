import React from 'react'
import { makeStyles } from "@material-ui/styles";
import OrganicSnacks from '../components/CallToAction/OrganicSnacks'
import OrganicMeals from '../components/CallToAction/OrganicMeals'
import OrganicDrinks from '../components/CallToAction/OrganicDrinks'
import GreenTea from '../components/CallToAction/GreenTea'
import IconGrid from '../components/items/IconGrid'
import ControlledTestimonials from '../components/carasoul/testimonials/ControlledTestimonials'
import NewsLetter from '../components/newsletter/NewsLetter'


const About = () => {




    const useStyles = makeStyles(theme => ({
        paragraph: {
            ...theme.typography.primary,
            color: theme.palette.secondary.main,
            fontSize: '14px',
            marginTop: '2%',

        },
        heading: {
            ...theme.typography.secondary,
            color: theme.palette.secondary.main,
            float: 'left',
            display: 'contents',
            fontSize: '32px',
            fontWeight: 'bold',
        },

    }))
    const classes = useStyles();
    return (
        <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%' }}>

            <h3 className={classes.heading}>The Organic</h3>
            <p className={classes.paragraph}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>

            <OrganicSnacks />
            <OrganicMeals />
            <OrganicDrinks />

            <div style={{ marginTop: '10%' }}>

                <h3 className={classes.heading}>Benefits Of Using The Organic</h3>
                <p className={classes.paragraph}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            </div>
            <GreenTea />
            <ControlledTestimonials />
            <IconGrid />
            <NewsLetter />
        </div>

    )
}

export default About;

