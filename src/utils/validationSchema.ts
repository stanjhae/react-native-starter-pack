import * as yup from 'yup';

//TODO: Investigate shape and improve schema
export const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required(),
  lastName: yup
    .string()
    .trim()
    .required(),
  email: yup
    .string()
    .email('Email must be a valid email')
    .required(),
  password: yup.string().required(),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Email must be a valid email')
    .required(),
  password: yup.string().required(),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Email must be a valid email')
    .required(),
});

export const profileSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required(),
  lastName: yup
    .string()
    .trim()
    .required(),
  telephone: yup
    .number()
    .typeError('telephone must be a number')
    .required()
    .positive()
    .integer(),
});
