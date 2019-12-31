import Haptic from 'utils/Haptic';

export const invalidForm = (errors: object) => {
  if (Object.keys(errors).length !== 0 && errors.constructor === Object) {
    Haptic.error();
  }
};
