import {useRouter} from 'next/router';
import styles from './ProfileLinks.module.css';

function ProfileLinks({ isActive }) {
  const router = useRouter();
  return (
    <div className="container">
      <div className="is-flex is-justify-content-center mt-6 is-hidden-touch">
        <button
          className={`button is-ghost ${styles.button} ${
            isActive === 'account' ? 'is-light' : null
          }`}
          // onClick={() => {
          //   router.push('/cms/profil');
          // }}
        >
          konto
        </button>
        <button
          className={`button is-ghost ${styles.button} ${
            isActive === 'panel' ? 'is-light' : null
          }`}
          onClick={() => {
            router.push('/cms/panelStrony');
          }}
        >
          panel strony
        </button>

        <button
          className={`button is-ghost ${styles.button} ${
            isActive === 'admin' ? 'is-light' : null
          }`}
          // onClick={() => {
          //   router.push('/cms/administracja');
          // }}
        >
          administracja
        </button>
        <button
          className={`button is-ghost ${styles.button} ${
            isActive === 'setti' ? 'is-light' : null
          }`}
          // onClick={() => {
          //   router.push('/cms/ustawienia');
          // }}
        >
          ustawienia
        </button>
      </div>
    </div>
  );
}

export default ProfileLinks;
