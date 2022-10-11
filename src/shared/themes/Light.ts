import { createTheme } from '@mui/material';
import { blue, grey, pink } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette:{
        primary: {
             main: pink[700],
             dark: pink[800],
             light: pink[500], 
             contrastText: '#ffffff',
        },
        secondary:{
            main: grey[500],
            dark: grey[400],
            light: grey[300], 
            contrastText: '#ffffff',
        },
        background:{
            paper: '#ffffff',
            default:'#f7f6f3',
        }
    }
});