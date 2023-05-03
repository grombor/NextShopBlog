import {useRouter} from 'next/router';
import {FaSearch} from 'react-icons/fa';

function Searchbar({ setSearchValue }) {
  const router = useRouter();
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchValue ? setSearchValue(event.target.value) : router.replace('/sklep/wyniki_wyszukiwania?klucz=' + event.target.value)
    }
  };
  return (
    <div className="container my-2">
      <div className="control has-icons-left">
        <input
          className="input is-primary is-large-mobile"
          type="text"
          placeholder="Szukaj"
          style={{ maxWidth: '93%' }}
          onKeyDown={handleKeyDown}
        />
        <span className="icon is-left">
          <FaSearch />
        </span>
      </div>
    </div>
  );
}

export default Searchbar;
