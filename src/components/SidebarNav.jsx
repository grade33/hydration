import logoImg from '/src/assets/img/sidebar-nav/logo.svg';
import avatarImg from '/src/assets/img/sidebar-nav/avatar.jpg';
import CategoryIcon from './icons/CategoryIcon';
import CalendarTimeIcon from './icons/CalendarTimeIcon';
import PieChartIcon from './icons/PieChartIcon';
import NotificationIcon from './icons/NotificationIcon';
import SettingsIcon from './icons/SettingsIcon';
import MoreIcon from './icons/MoreIcon';

function SidebarNav() {
  return (
    <aside className='sidebar-nav'>
      <a className='sidebar-nav__logo' href='#'>
        <img
          className='sidebar-nav__logo-icon'
          src={logoImg}
          alt='Hydrocult Logo'
        />
      </a>

      <nav className='sidebar-nav__nav'>
        <strong className='sidebar-nav__nav-title'>Menu</strong>
        <ul className='sidebar-nav__nav-list'>
          <li className='sidebar-nav__nav-item'>
            <a href='#' className='sidebar-nav__nav-link'>
              <CategoryIcon />
              <span>Dashboard</span>
            </a>
          </li>
          <li className='sidebar-nav__nav-item'>
            <a href='#' className='sidebar-nav__nav-link'>
              <CalendarTimeIcon />
              <span>Schedule Reminder</span>
            </a>
          </li>
          <li className='sidebar-nav__nav-item'>
            <a href='#' className='sidebar-nav__nav-link'>
              <PieChartIcon />
              <span>Reports</span>
            </a>
          </li>
          <li className='sidebar-nav__nav-item'>
            <a href='#' className='sidebar-nav__nav-link'>
              <NotificationIcon />
              <span>Notifications</span>
            </a>
          </li>
          <li className='sidebar-nav__nav-item'>
            <a href='#' className='sidebar-nav__nav-link'>
              <SettingsIcon />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className='sidebar-nav__account'>
        <div className='sidebar-nav__account-content'>
          <img
            src={avatarImg}
            alt='Mathew Perry'
            className='sidebar-nav__account-avatar'
          />
          <div className='sidebar-nav__account-text-block'>
            <span className='sidebar-nav__account-name'>Mathew Perry</span>
            <span className='sidebar-nav__account-email'>
              mathewperry@xyz.com
            </span>
          </div>
        </div>
        <div className='sidebar-nav__account-right'>
          <button className='sidebar-nav__account-more'>
            <MoreIcon />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default SidebarNav;
