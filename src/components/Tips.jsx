import watermelonImg from '/src/assets/img/main-content/watermelon.png';
import orangesImg from '/src/assets/img/main-content/oranges.png';
import grapesImg from '/src/assets/img/main-content/grapes.png';
import ChevronDown from './icons/ChevronDown';

function Tips() {
  return (
    <section className='main-content__tips tips'>
      <div className='tips__top'>
        <div className='tips__text-block'>
          <h2 className='tips__title'>Hydration Tips</h2>
          <p className='tips__desc'>
            Consuming fruit juices keeps up the hydration level.
          </p>
        </div>
        <div className='tips__right'>
        <button className="tips__select" type='button'>
          See All
          <ChevronDown />
        </button>
        </div>
      </div>
      <div className='tips__list'>
        <li className='tips__item tips__item_watermelon'>
          <div className='tips__icon-block'>
            <img className='tips__icon' src={watermelonImg} alt='' />
          </div>
          <h3 className='tips__name'>Watermelon</h3>
          <p className='tips__text'>
            It contains 97% water in it. A good choice to stay hydrated.
          </p>
        </li>
        <li className='tips__item tips__item_oranges'>
          <div className='tips__icon-block'>
            <img className='tips__icon' src={orangesImg} alt='' />
          </div>
          <h3 className='tips__name'>Oranges</h3>
          <p className='tips__text'>
            It contains 72% water in it. It’s tangy nature helps with skin care.
          </p>
        </li>
        <li className='tips__item tips__item_grapes'>
          <div className='tips__icon-block'>
            <img className='tips__icon' src={grapesImg} alt='' />
          </div>
          <h3 className='tips__name'>Grapes</h3>
          <p className='tips__text'>
            It contains vitamin ‘C’ which helps with retaining water.
          </p>
        </li>
      </div>
    </section>
  );
}

export default Tips;
