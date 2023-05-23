import MainContent from './components/MainContent';
import SidebarNav from './components/SidebarNav';
import SidebarInfo from './components/SidebarInfo';
import 'normalize.css';
import '/src/assets/styles/main.scss';

function App() {
  return (
    <div className='app'>
      <div className='dashboard'>
        <SidebarNav />
        <MainContent />
        <SidebarInfo />
        <div></div>
      </div>
    </div>
  );
}

export default App;
