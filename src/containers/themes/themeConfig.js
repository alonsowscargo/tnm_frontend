import { createMuiTheme } from "@material-ui/core/styles";
import blue from '@material-ui/core/colors/blue';

const theme =  createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: "#000",
            light: '#fff',
            dark: '#f1f3f8',
            contrastText: '#D133FF'
        }
    },
})


export default theme
