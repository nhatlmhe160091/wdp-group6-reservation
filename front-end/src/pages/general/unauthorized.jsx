import React from 'react';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Unauthorized = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#d02028',
            secondary: {
                main: '#FFAF00',
            }
        }
        },
    });
    useEffect(() => {
        document.title = "Ratatouille | Lỗi"
    }, []);

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}
                >
                    <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom>
                        Bạn không có quyền truy cập vào trang này!
                    </Typography>
                </Box>
            </ThemeProvider>
        </React.Fragment>

    );
};

export default Unauthorized;