import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import styles from './Registration.module.css';
import MyButton from '../../components/ui/button/MyButton';

const Registration = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isValid }
    } = useForm({
    defaultValues: {
        fullName: '',
        email: '',
        password: '',
    },
        mode: 'onChange'
  });
    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));
        if (!data.payload) return alert('Не вдалося зареєструватися');
        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
        }
    };

    if (isAuth) {
        return <Navigate to='/'/>
    }
  return (
    <Paper classes={{ root: styles.root }}>
        <Typography classes={{ root: styles.title }} variant="h5">
            Створення акаунта
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    className={styles.field}
                    type='fullName'
                    label="Ім'я"
                    error={Boolean(errors.fullName?.message)}
                    helperText={errors.fullName?.message}
                    {...register('fullName', {required: 'Вкажіть і\'мя'})}
                    fullWidth
               />
                <TextField
                    className={styles.field}
                    type='email'
                    label="Email"
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    {...register('email', {required: 'Вкажіть пошту'})}
                    fullWidth
               />
                <TextField
                    className={styles.field}
                    label="Пароль"
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    {...register('password', {required: 'Вкажіть пароль'})}
                    fullWidth
               />
                <MyButton disabled = {!isValid} type='submit'>
                    Зареєструватися
                </MyButton>
            </form>  
    </Paper>
  );
};

export default Registration;