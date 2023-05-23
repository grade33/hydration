import Header from './Header';
import Statistic from './Statistic';
import Tips from './Tips';

function MainContent() {
  return (
    <div className='main-content'>
      <Header className='main-content__header' />
      <Statistic className='main-content__statistic' />
      <Tips className='main-content__tips' />
    </div>
  );
}

export default MainContent;
