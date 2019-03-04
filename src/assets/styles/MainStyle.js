import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                color: "white",
                textDecoration: "none",
                '&:hover': {
                    backgroundColor: 'rgba(166, 166, 166, 0.4)',
                },
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
        MuiTypography: {
            root: {
                whiteSpace: "pre-wrap"
            },
            h5: {
                color: "white",
                margin: "10px 0 0 10px",
            },
            subtitle1: {
                color: "white",
                margin: "0 0 10px 10px",
            },
            body1: {
                color: "white",
                margin: "10px",
            },
            h4: {
                color: "white",
            },
            h6: {
                color: "white",
            },
            colorTextSecondary: {
                color: "white"
            },
        },
        MuiGrid: {
            "spacing-xs-8": {
                width: "inherit",
                margin: "2% 10% 0 10%"
            },
        },
        MuiPopover: {
            paper: {
                height: 'unset',
                width: 'unset',
                backgroundColor: "rgb(166, 166, 166)",
                color: "white"
            }
        }
    },
    typography: {
        useNextVariants: true,
    },
});


export const ArticleStyle = {
    backButtonDiv: {
        position: "absolute", 
        right: "0", 
        bottom: "0", 
        margin: "10px"
    },
};

export const FooterStyle = {
    buttonsDiv: {
        margin: "0 auto", 
        display: "table",
    },
};

export const HistoryStyle = {
    imageWrapper: {
        position: "relative",
        height: "25rem",
        margin: "2%",
    },
    image: {
        position: "absolute",
        margin: "auto",
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        maxHeight: "100%",
        maxWidth: "100%",

    },
    paragraphContainer: {
        marginTop: '2%',
    }
}

