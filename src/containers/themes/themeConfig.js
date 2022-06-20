// import { createMuiTheme } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue';

const theme =  createTheme({
    palette: {
        primary: blue,
        secondary: {
            main: "#C8352E",
            light: '#fff',
            dark: '#f1f3f8',
            contrastText: '#fff'
        }
    },
})


export default theme
