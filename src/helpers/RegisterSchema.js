import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  passwordConfirmation: Yup.string()
    .min(6, 'Hasło jest za krótkie')
    .max(70, 'Hasło jest za długie')
    .required('Pole wymagane'),
  password: Yup.string()
    .min(6, 'Hasło jest za krótkie')
    .max(70, 'Hasło jest za długie')
    .required('Pole wymagane'),
  passwordConfirmation: Yup.string().when('password', {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      'Oba hasła muszą być takie same'
    ),
  }),
  email: Yup.string().email('Niepoprawny e-mail').required('Pole wymagane'),
});

export default SignupSchema;
