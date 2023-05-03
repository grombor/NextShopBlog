import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  email: Yup
  .string()
  .min(8, 'Adres email jest za krótki')
  .max(70, 'Adres email jest za długi')
  .email('Niepoprawny e-mail')
  .required('Pole wymagane'),
  firstName: Yup
  .string()
  .min(3, 'Imię nie  może być krótsze niż 3 znaki'),
  lastName: Yup
  .string()
  .min(3, 'Nazwisko nie  może być krótsze niż 3 znaki'),
  phoneNumber: Yup
  .string()
  .min(6, 'Treść wiadomości musi być dłuższa niz 6 znaków.')
  .required('Pole wymagane'),
  content: Yup
  .string()
  .min(20, 'Treść wiadomości musi być dłuższa niz 20 znaków.')
  .required('Pole wymagane'),
});

export default ContactSchema;
