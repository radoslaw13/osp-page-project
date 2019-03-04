import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            h5: {
                color: "white",
                margin: "0 0 10px 0",
            },
            h4: {
                color: "white",
            },
            body1: {
                color: "white",
                marginBottom: "10px",
                borderBottom: "3px solid",
            },
            caption: {
                color: "white",
            },
            root: {
                whiteSpace: "pre-wrap"
            },
            h6: {
                color: "white",
                borderBottom: "5px solid",
            },
        },
        MuiGrid: {
            "spacing-xs-8": {
                width: "inherit",
                margin: "2% 10% 0 10%"
            },
        },
        MuiPaper: {
            root: {
                backgroundColor: "rgba(166, 166, 166, 0.4)",
                height: "100%",
                width: "100%",
            },
            elevation2: {
                boxShadow: '2px 1px 3px 0px rgba(255,255,255,0.3), 0px 1px 1px 0px rgba(255,255,255,0.14), 0px 2px 1px -1px rgba(255,255,255,0.12)',
            },
        },
    },
    typography: {
        useNextVariants: true,
    },
});
