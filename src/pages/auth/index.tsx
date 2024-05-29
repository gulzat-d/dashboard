import React from 'react';
import LoginPage from './login';
import RegisterPage from './register';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import './style.scss';

const AuthRootPage = () => {
    const location = useLocation();
    return (
        <div className='root'>
            <form
                className='form'
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    maxWidth={640}
                    margin="auto"
                    padding={5}
                    borderRadius={5}
                    boxShadow={'-3px -2px 20px 1px #202020'}
                >
                    {location.pathname === '/login' ? (
                        <LoginPage />
                    ) : location.pathname === '/register' ? (
                        <RegisterPage />
                    ) : null}
                </Box>
            </form>
        </div>
    );
};

export default AuthRootPage;
