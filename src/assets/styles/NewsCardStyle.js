import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    overrides: {
        MuiCard: {
            root: {
                background: "rgba(166, 166, 166, 0.4)",
                boxShadow: '2px 1px 3px 0px rgba(255,255,255,0.3), 0px 1px 1px 0px rgba(255,255,255,0.14), 0px 2px 1px -1px rgba(255,255,255,0.12)',
                height: "100%"
            },
        },
        MuiCardHeader: {
            title: {
                color: "white",
            },
            subheader: {
                color: "white",
            },
        },
        MuiCardMedia: {
            root: {
                height: "12vw",
                backgroundSize: "contain",
                marginLeft: "2%"
            },
        },
        MuiTypography: {
            subtitle1: {
                color: "white",
            },
        },
        MuiButton: {
            root: {
                color: "white",
                textTransform: "none",
                textDecoration: "none",
            },
        },
    },
    typography: {
        useNextVariants: true,
    },
});

export const NewsCardStyle = {
    image: {
        height:"100%", 
        width: "100%", 
        objectFit: "cover", 
        borderRadius: "4px",
    },
    imageWrapper: {
        height: "12rem",
        width: "100%",
        padding: "12px",
    }
}