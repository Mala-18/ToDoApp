import "./Navbar.css"
import 'reactjs-popup/dist/index.css';
// import {useState} from 'react'
import Popup from "reactjs-popup";

function Navbar(){
    // const [isShown,setIsShown]=useState(false);

    // const handleClick=event=>{
    //     setIsShown(prevShown=> !prevShown)
    // }

    return(
        <div className="navbar">

            {/* <button onClick={handleClick} className="navbar-btn">Add Task</button>
            { isShown && <p>I am shown !</p> } */}

            <Popup trigger={<button className="navbar-btn"> Add Task </button>}>
                <div>
                    <p>I am shown</p>
                </div>
            </Popup>
            <select className="navbar-select" name="items" id="items">
                <option>All</option>
                <option>Complete</option>
                <option>Incomplete</option>
            </select>
      </div>
    )
}

export default Navbar;