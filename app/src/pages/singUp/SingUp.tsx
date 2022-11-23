import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './SingUp.module.css';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Form } from './types';

const SingUp = () => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<Form>({
    mode: 'onBlur',
  });

  const onRegisterClick = handleSubmit((data: Form) => {
    alert(JSON.stringify(data));
    reset();
  });

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Пожалуйста зарегиструйтесь!</h1>
      <h2>Введите свои данные</h2>
      <div className={style.inner}>
        <form onSubmit={onRegisterClick}>
          <div>
            <TextField
              {...register(`name`, {
                required: true,
                maxLength: {
                  value: 1,
                  message: 'максимум 1 символ',
                },
              })}
              id="filled-basic"
              label="Name"
              variant="outlined"
            />
          </div>
          <span style={{ color: 'red' }}>
            {errors?.name && <p>{errors?.name.message || 'Error!'}</p>}
          </span>
          <div className={style.btn}>
            <TextField
              {...register(`login`, { required: ' Заполни' })}
              id="filled-basic"
              label="Login"
              variant="outlined"
            />
          </div>
          <span style={{ color: 'red' }}>
            {errors?.login && <p>{errors?.login.message || 'Error!'}</p>}
          </span>
          <div>
            <TextField
              type="password"
              {...register(`password`, { required: 'Заполни' })}
              id="filled-basic"
              label="Password"
              variant="outlined"
            />
          </div>
          <span style={{ color: 'red' }}>
            {errors?.password && <p>{errors?.password.message || 'Error!'}</p>}
          </span>
          <Button
            disabled={!isValid}
            type="submit"
            style={{ width: 200, marginTop: 30 }}
            variant="contained"
          >
            {t('sing up')}
          </Button>{' '}
        </form>
      </div>
    </div>
  );
};

export default SingUp;
