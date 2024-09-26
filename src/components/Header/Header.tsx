import { faMoon } from '@fortawesome/free-regular-svg-icons/faMoon';
import { faMagnifyingGlass, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <header className="flex h-14  items-center justify-between bg-white text-black dark:text-white dark:bg-black px-8">
      <div className="flex items-center gap-4 text-sm ">
        <Link to="/">
          <img src="/img/netflix.png" className="w-16 sm:w-28" alt="" />
        </Link>
        <Link to={`/`} className="">
          Home
        </Link>
        <Link to={`/search?mediaType=movie`} className="  ">
          Movie
        </Link>
        <Link to={`/search?mediaType=tv`}>TV Show</Link>
      </div>
      <div className="flex items-center gap-6">
        {!darkMode ? (
          <button
            onClick={() => setDarkMode(!darkMode)}
            className=" text-black rounded"
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>
        ) : (
          <button
            onClick={() => setDarkMode(!darkMode)}
            className=" text-white rounded"
          >
            <FontAwesomeIcon icon={faSun} />
          </button>
        )}
        <Link to={`/search`}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
