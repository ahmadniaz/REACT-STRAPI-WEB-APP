import { createTheme } from "@material-ui/core";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#29C7B6',
            light: '#AFEBE8',
            dark: '#F0243D',

        },
        secondary: {
            contrastText: '#FED530',
            main: '#03235A',
            light: '#fff',
            dark: '#707070'
        }
    },
    typography: {
        primary: {
            fontFamily: 'Open Sans',
            fontSize: '22px'
        },
        secondary: {
            fontFamily: 'Roboto',
            fontSize: '20px',
            fontWeight: 500
        }
    }

})

