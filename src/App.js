
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import 'react-notifications/lib/notifications.css';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {

  

    return (
      <div className="App">
        <Header/>
        <Navbar/>
        {/* <Items/> */}
        <NotificationContainer/>
      </div>
    );
}

export default App;
