import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#eeeeee',
            background: '#111111',
            opacity: 0.75,
        },
        secondary: {
            main: '#eeeeee',
        },
    },

    typography: {
        fontFamily: [
            'Noto Sans',
            'sans-serif',
        ].join(','),

        h1: {
            fontSize: 24,
            fontWeight: '600',
        },
        body1: {
            fontSize: 16,
            fontWeight: '300',
        }

    },
});

export default theme;