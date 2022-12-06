import React, { ChangeEventHandler, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './SingUp.module.css';
import classForm from './SingUp.module.css';
interface IFormInput {
  login: string;
  password: string;
  name: string;
  show: boolean;
}

const SingUp = () => {
  const [typePassword, setTypePassword] = useState('password');
  const showPassword: ChangeEventHandler = () => {
    if (typePassword === 'password') {
      setTypePassword('text');
    } else {
      setTypePassword('password');
    }
  };
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label>Name</label>
      <input {...register('name')} />
      <label>Login</label>
      <input {...register('login')} />
      <label>Password</label>
      <input className="password" type={typePassword} {...register('password')} />
      <div className={classForm.container_password}>
        <label>Show Password</label>
        <input className="show" type={'checkbox'} {...register('show')} onChange={showPassword} />
      </div>
      <input type="submit" />
    </form>
  );
};

export default SingUp;
