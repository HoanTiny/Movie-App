import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex h-14 bg-black items-center justify-between text-white px-8">
      <div className="flex items-center gap-4 text-sm ">
        <Link to="/">
          <img src="/img/netflix.png" className="w-16 sm:w-28" alt="" />
        </Link>
        <Link to={`/`} className="">
          Home
        </Link>
        <Link to={`/search?mediaType=movie`}>Movie</Link>
        <Link to={`/search?mediaType=tv`}>TV Show</Link>
      </div>
      <Link to={`/search`}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
      </Link>
    </header>
  );
}

export default Header;
