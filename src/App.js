import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './Components/Chat';

function App() {
  const style = {
    appContainer: `max-w-[728px] mx-auto text-center`,
    sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
  };
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
      <Navbar/>
      <Chat/>
      </section>
    </div>
  );
}

export default App;
