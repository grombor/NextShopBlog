import {Header} from '../atoms/Header';

function ProfileContent() {
  return (
    <div className="mx-2 mb-6">
      <Header size="3" blackText="LOREM | OFICJALNY" />
      <div className="content my-5">
        <p>
          Najlepsze rozwiązanie dla Twojego biznesu. Współpracuj z LOREM! Postaw
          na najlepszych!
        </p>
        <p>Jesteśmy na rynku od ponad 30 lat - to marka sama w sobie.</p>
        <p>Metalowe meble Malow w najlepszych cenach.</p>
      </div>
    </div>
  );
}

export default ProfileContent;
