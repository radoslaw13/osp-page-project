import { createMuiTheme }  from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                backgroundColor: "rgba(166, 166, 166, 0.4)",
                '&:hover': {
                    backgroundColor: 'rgba(196, 196, 196, 0.4)',
                },
                color: "white",
                height: "56px",
                fontWeight: "900",
                textDecoration: "none",
            },
        },
    },
    typography: {
        useNextVariants: true,
    },
});

export const MenuStyle = {
    menuWrapper: {
        backgroundColor: "rgba(77, 77, 77, 0.4)", 
        borderRadius: "0 0 3% 3%",
    },
    menuGrid: {
        margin: "0 2% 2% 2%", 
        width: "unset",
    }
}