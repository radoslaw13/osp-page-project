import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: "rgb(166, 166, 166)",
                color: "white",
            },
        },
        MuiButton: {
            root: {
                backgroundColor: "rgba(166, 166, 166, 0.4)",
                '&:hover': {
                    backgroundColor: 'rgb(196, 196, 196, 0.4)',
                },
                color: "white",
                height: "56px",
                fontWeight: "900",
                textDecoration: "none",
            },
        },
        MuiMenuItem: {
            root: {
                color: "white",
                textTransform: "uppercase",
                fontWeight: "900",
            },
            gutters: {
                paddingRight: 0,
                paddingLeft: 0,
            }
        }
    },
    typography: {
        useNextVariants: true,
    },
});