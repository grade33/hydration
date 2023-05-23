import waterBgImg from '/src/assets/img/sidebar-info/water-bg.svg';
import waterBottleImg from '/src/assets/img/sidebar-info/water-bottle.svg';
import goalBgImg from '/src/assets/img/sidebar-info/goal-bg.svg';
import blobImg from '/src/assets/img/sidebar-info/blob.svg';
import CalendarIcon from './icons/CalendarIcon';
import MoreIcon from './icons/MoreIcon';
import ChevronDown from './icons/ChevronDown';

function SidebarInfo() {
  return (
    <aside className='sidebar-info'>
      <button className='sidebar-info__calendar' type='button'>
        <CalendarIcon />
        Tue, 24 Nov 2021
        <ChevronDown />
      </button>
      <div className='water'>
        <img className='water__bg-img' src={waterBgImg} alt='' />
        <div className='water__content'>
          <img className='water__bottle' src={waterBottleImg} alt='' />
          <strong className='water__name'>Stay Hydrated and beat heat.</strong>
        </div>
      </div>
      <div className='goal'>
        <img className='goal__bg-img' src={goalBgImg} alt='' />
        <div className='goal__content'>
          <strong className='goal__name'>Intake Goal</strong>
          <span className='goal__value'>18000 ml / 25000 ml</span>
        </div>
      </div>
      <div className='drink-log'>
        <div className='drink-log__top'>
          <strong className='drink-log__title'>Drink Log</strong>
          <button className='drink-log__more'>
            <MoreIcon />
          </button>
        </div>
        <div className='drink-log__list-block'>
          <ul className='drink-log__list'>
            <li className='drink-log__item'>
              <div className='drink-log__value'>
                <img src={blobImg} alt='' className='drink-log__value-icon' />
                250 ml
              </div>
              <span className='.drink-log__time'>8:00 am</span>
            </li>
            <li className='drink-log__item'>
              <div className='drink-log__value'>
                <img src={blobImg} alt='' className='drink-log__value-icon' />
                200 ml
              </div>
              <span className='.drink-log__time'>9:30 am</span>
            </li>
            <li className='drink-log__item'>
              <div className='drink-log__value'>
                <img src={blobImg} alt='' className='drink-log__value-icon' />
                500 ml
              </div>
              <span className='.drink-log__time'>11:00 am</span>
            </li>
            <li className='drink-log__item'>
              <div className='drink-log__value'>
                <img src={blobImg} alt='' className='drink-log__value-icon' />
                200 ml
              </div>
              <span className='.drink-log__time'>01:00 pm</span>
            </li>
            <li className='drink-log__item'>
              <div className='drink-log__value'>
                <img src={blobImg} alt='' className='drink-log__value-icon' />
                250 ml
              </div>
              <span className='.drink-log__time'>03:00 pm</span>
            </li>
          </ul>
          <button className='drink-log__list-more' type='button'>
            <ChevronDown />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default SidebarInfo;
