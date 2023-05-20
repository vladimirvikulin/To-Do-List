import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import styles from './Registration.module.css';
import MyButton from '../../components/ui/button/MyButton';

const Registration = () => {
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Створення акаунта
      </Typography>
      <TextField className={styles.field} label="Ваше ім'я" fullWidth />
      <TextField className={styles.field} label="Email" fullWidth />
      <TextField className={styles.field} label="Пароль" fullWidth />
      <MyButton>
        Зареєструватися
      </MyButton>
    </Paper>
  );
};

export default Registration;