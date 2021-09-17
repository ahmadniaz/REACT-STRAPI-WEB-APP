import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
    mainDiv: {
        marginTop: '50px',
        marginRight: '50px',
        marginLeft: '50px',
        padding: 0,
        overflowX: 'hidden',
        overflowY: 'hidden',
        position: 'relative'

    },
    firstHeading: {
        ...theme.typography.secondary,
        color: theme.palette.secondary.main,
        letterSpacing: '1px',
        paddingBottom: 0,
        marginBottom: 0

    },
    icons: {
        width: '30px',
        cursor: 'pointer'
    },
    FirstHeading: {
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
        backgroundColor: ' rgba(112,112,112, 0.1)'

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
    },
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    tab: {
        textDecoration: 'none'
    },

}))

