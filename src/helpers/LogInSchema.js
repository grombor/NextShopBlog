import * as Yup from "yup";

const LogInSchema = Yup.object().shape({
    password: Yup.string()
      .required('Pole wymagane'),  
    email: Yup.string()
      .email('Niepoprawny e-mail')
      .required('Pole wymagane'),
  });

  export default LogInSchema;