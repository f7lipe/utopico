import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import  Home  from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

export default function App(){
    const theme = createTheme({
        palette: {
          secondary: { main: "#424445" },
          background: { default: "#FAFAFA", paper: "#FAFAFA" },
        },
      });

    return (   
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes> 
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}