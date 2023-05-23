import sun from '/src/assets/img/main-content/sun.svg';
import SearchIcon from './icons/SearchIcon';

function Header() {
  return (
    <header className='main-content__header header'>
      <div className='header__top'>
        <h1 className='header__title'>
          Welcome back&#32;
          <span className='header__title_bold'>Mathew!</span>
        </h1>
        <form action='#' className='header__form'>
          <button className='header__submit' type='submit'>
            <SearchIcon />
          </button>
          <input
            className='header__search'
            type='search'
            placeholder='Search'
          />
        </form>
      </div>
      <div className='header__weather'>
        <div className='header__degree'>
          <img className='header__degree-icon' src={sun} alt='Sun' />
          <strong className='header__degree-text'>
            <span className='header__degree-text_qount'>26</span>
            <span>C</span>
          </strong>
        </div>
        <span className='header__weather-text'>
          It’s a&#32;
          <strong className='header__weather-text_bold'>Sunny Day</strong>
          &#32;today!
        </span>
        <span className='header__weather-desc'>
          Don’t forget to take your water bottle with you.
        </span>
      </div>
    </header>
  );
}

export default Header;
