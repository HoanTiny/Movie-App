import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <header className="flex h-14 bg-black items-center justify-between text-white px-8">
      <div className="flex items-center gap-4 text-sm ">
        <img src="./img/netflix.png" className="w-16 sm:w-28" alt="" />
        <a href="" className="">
          Home
        </a>
        <a href="">Series</a>
        <a href="">Films</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
