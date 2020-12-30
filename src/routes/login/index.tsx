import React from 'react';
import classnames from 'classnames/bind';
import * as yup from 'yup';
import { useFormik } from 'formik';

import { supabase } from '../../helpers/supabase';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import styles from './style.module.css';

const cx = classnames.bind(styles);

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Email is invalid')
    .required('Email is required'),
});

const Login: React.FC = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    validationSchema,
    initialErrors: {
      email: '',
    },
    initialValues: {
      email: '',
    },
    onSubmit: async ({ email }) => {
      try {
        const result = await supabase.auth.signIn({
          email,
        });

        if (result.error) {
          alert(result.error.message);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className={cx('container')}>
      <form className={cx('login-form')} onSubmit={handleSubmit}>
        <Input
          inputLabel="Email"
          type="email"
          placeholder="Email address"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <div className={cx('separator')} />
        <Button type="submit" block>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
