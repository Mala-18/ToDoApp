import './App.css';
import Header from './Components/Header';
import Items from './Components/Items';
import Navbar from './Components/Navbar';

function App() {

  const date= new Date();

  const currentDate= date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();

  const hours=(date.getHours()%12) || 12;

  const amOrPm= hours>=12 ? 'pm' : 'am';

  const currentTime= hours+" "+amOrPm;
    const itemsList= {
      item1: { text: "Task 1", dateAndTime: currentTime+","+currentDate}
    }

    return (
      <div className="App">
        <Header/>
        <Navbar/>
        <Items items={itemsList}/>
      </div>
    );
}

export default App;
