import * as yup from 'yup';

//TODO: Investigate shape and improve schema
export const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required('general.firstNameRequired'),
  lastName: yup.string().trim(),
  email: yup
    .string()
    .email('general.invalidEmail')
    .required('general.emailRequired'),
  password: yup.string().required('general.passwordRequired'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('general.invalidEmail')
    .required('general.emailRequired'),
  password: yup.string().required('general.passwordRequired'),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('general.invalidEmail')
    .required('general.emailRequired'),
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
