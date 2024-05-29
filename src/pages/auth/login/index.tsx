import React from 'react';
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Typography variant="h2" textAlign='center' fontSize={32}>Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>Введите ваш логин и пароль</Typography>
            <TextField
                fullWidth={true}
                margin='normal'
                label="Email"
                variant="outlined"
                placeholder="Введите ваш email"
            />
            <TextField
                type="password"
                fullWidth={true}
                margin='normal'
                label="Password" variant="outlined"
                placeholder="Введите ваш пароль"
            />
            <Button type="submit" sx={{ marginTop: 2, marginBottom: 2, width: '60%' }} variant="contained">Войти</Button>
            <Typography variant="body1">У вас нет аккаунта?<span onClick={() => navigate('/register')}>Регистрация</span></Typography>
        </>
    );
};

export default LoginPage;