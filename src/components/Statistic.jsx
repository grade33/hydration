import chartBarImg from '/src/assets/img/main-content/chart-bar.svg';

function Statistic() {
  return (
    <section className='main-content__statistic statistic'>
      <ul className='statistic__list'>
        <li className='statistic__list-item statistic__list-item_green'>
          <div className='statistic__list-info'>
            <svg
              className='statistic__list-circle statistic__list-circle_green'
              viewBox='0 0 120 120'
            >
              <circle
                className='statistic__list-circle-common'
                stroke='currentColor'
                strokeWidth='5'
                fill='transparent'
                r='52'
                cx='60'
                cy='60'
              />
              <circle
                className='statistic__list-circle-progress'
                stroke='currentColor'
                strokeWidth='5'
                fill='transparent'
                r='52'
                cx='60'
                cy='60'
                strokeDasharray='327'
                strokeDashoffset='65'
              />
            </svg>
            <span className='statistic__list-percente'>80%</span>
          </div>
          <div className='statistic__list-text-block'>
            <strong className='statistic__list-title'>Daily Intake</strong>
            <span className='statistic__list-value'>5000 ml</span>
          </div>
        </li>
        <li className='statistic__list-item statistic__list-item_purple'>
          <div className='statistic__list-info'>
            <svg
              className='statistic__list-circle statistic__list-circle_green'
              viewBox='0 0 120 120'
            >
              <circle
                className='statistic__list-circle-common'
                stroke='currentColor'
                strokeWidth='5'
                fill='transparent'
                r='52'
                cx='60'
                cy='60'
              />
              <circle
                className='statistic__list-circle-progress'
                stroke='currentColor'
                strokeWidth='5'
                fill='transparent'
                r='52'
                cx='60'
                cy='60'
                strokeDasharray='327'
                strokeDashoffset='49'
              />
            </svg>
            <span className='statistic__list-percente'>85%</span>
          </div>
          <div className='statistic__list-text-block'>
            <strong className='statistic__list-title'>Average Intake</strong>
            <span className='statistic__list-value'>2500 ml</span>
          </div>
        </li>
        <li className='statistic__list-item statistic__list-item_brown'>
          <div className='statistic__list-info'>
            <svg
              className='statistic__list-circle statistic__list-circle_green'
              viewBox='0 0 120 120'
            >
              <circle
                className='statistic__list-circle-common'
                stroke='currentColor'
                strokeWidth='5'
                fill='transparent'
                r='52'
                cx='60'
                cy='60'
              />
              <circle
                className='statistic__list-circle-progress'
                stroke='currentColor'
                strokeWidth='5'
                fill='transparent'
                r='52'
                cx='60'
                cy='60'
                strokeDasharray='327'
                strokeDashoffset='105 '
              />
            </svg>
            <span className='statistic__list-percente'>68%</span>
          </div>
          <div className='statistic__list-text-block'>
            <strong className='statistic__list-title'>Total Intake</strong>
            <span className='statistic__list-value'>17000 ml</span>
          </div>
        </li>
      </ul>
      <div className='statistic__content'>
        <div className='statistic__top'>
          <div className='statistic__title'>
            <strong className='statistic__title-name'>Glass Intake</strong>
            <strong className='statistic__title-value'>200 ml</strong>
          </div>
          <ul className='statistic__info'>
            <li className='statistic__info-item statistic__info-item_blue'>
              Glass 1
            </li>
            <li className='statistic__info-item statistic__info-item_pink'>
              Glass 2
            </li>
            <li className='statistic__info-item statistic__info-item_purple'>
              Glass 2
            </li>
          </ul>
        </div>
        <div className='statistic__chart'>
          <div className='statistic__chart-bar'>
            <div className='statistic__chart-img-block'>
              <img className='statistic__chart-img' src={chartBarImg} alt='' />
            </div>
            <div className='statistic__chart-line'>
              <span className='statistic__chart-line-item statistic__chart-line-item_dashed'></span>
              <span className='statistic__chart-line-item statistic__chart-line-item_dashed'></span>
              <span className='statistic__chart-line-item statistic__chart-line-item_dashed'></span>
              <span className='statistic__chart-line-item'></span>
              <span className='statistic__chart-line-item statistic__chart-line-item_dashed'></span>
            </div>
          </div>
          <ul className='statistic__chart-time'>
            <li className='statistic__time-item'>6 am</li>
            <li className='statistic__time-item'>8 am</li>
            <li className='statistic__time-item'>10 am</li>
            <li className='statistic__time-item'>12 pm</li>
            <li className='statistic__time-item'>2 pm</li>
            <li className='statistic__time-item'>4 pm</li>
            <li className='statistic__time-item'>6 pm</li>
            <li className='statistic__time-item'>8 pm</li>
            <li className='statistic__time-item'>10 pm</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Statistic;
