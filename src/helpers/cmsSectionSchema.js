import * as Yup from 'yup';

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];

const cmsSectionSchema = Yup.object().shape(
    {
        header: Yup.string()
        .min(5, 'Treść jest za krótka')
        .max(70, 'Treść jest za długa')
        .required('Pole wymagane'),
        content: Yup.string()
        .min(5, 'Treś jest za krótka')
        .max(15000, 'Treść jest za długa')
        .required('Pole wymagane'),
    }
)

export default cmsSectionSchema;