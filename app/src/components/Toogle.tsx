import {useState} from "react";
import "@fontsource/roboto";
import {
    Switch,
    Container,
    CssBaseline,
    createTheme,
    PaletteMode,
    ThemeProvider
} from "@mui/material";

const Toggle = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    const light = {
        palette: {
            mode: "light" as PaletteMode,
        },
    };

    const dark = {
        palette: {
            mode: "dark" as PaletteMode
        },
    };

    return (
        <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
            <CssBaseline/>
            <Container>
                <div style={{marginLeft: '700px'}}>
                <Switch checked={isDarkTheme} onChange={changeTheme}/>
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default Toggle;




































































