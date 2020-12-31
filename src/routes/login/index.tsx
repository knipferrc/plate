import React from 'react';
import classnames from 'classnames/bind';
import * as yup from 'yup';
import { useFormik } from 'formik';
import feather from 'feather-icons';
import { Link } from 'react-router-dom';

import { supabase } from '../../helpers/supabase';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useTheme } from '../../hooks/useTheme';
import { useI18n } from '../../hooks/useI18n';

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
  const { theme } = useTheme();
  const { i18n } = useI18n();
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
    <>
      <Link to="/">
        <div
          className={cx('back-arrow')}
          dangerouslySetInnerHTML={{
            __html: feather.icons['arrow-left'].toSvg({
              'stroke-width': 2,
              color: theme === 'dark' ? '#fff' : '#333',
              height: 30,
              width: 30,
            }),
          }}
        />
      </Link>
      <div className={cx('container')}>
        <h1 className={cx('header-text')}>{i18n.t('login.headerText')}</h1>
        <form className={cx('login-form')} onSubmit={handleSubmit}>
          <Input
            inputLabel={i18n.t('login.emailInputLabel')}
            type="email"
            placeholder={i18n.t('login.emailInputPlaceholder')}
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <div className={cx('separator')} />
          <Button type="submit" block>
            {i18n.t('login.submitButton')}
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
