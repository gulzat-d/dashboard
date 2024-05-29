import React from 'react';
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField
                fullWidth={true}
                margin='normal'
                label="Имя"
                variant="outlined"
                placeholder="Введите ваше имя"
            />
            <TextField
                fullWidth={true}
                margin='normal'
                label="Username"
                variant="outlined"
                placeholder="Введите ваш username"
            />
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
                label="Password"
                variant="outlined"
                placeholder="Введите ваш пароль"
            />
            <TextField
                type="password"
                fullWidth={true}
                margin='normal'
                label="Password"
                variant="outlined"
                placeholder="Повторите ваш пароль"
            />
            <Button type='submit' variant="contained">Регистрация</Button>
            <Typography variant="body1">У вас ecть аккаунта?<span onClick={() => navigate('/login')}>Авторизация</span></Typography>
        </>
    );
};

export default RegisterPage;