import "./Navbar.css"
// import 'reactjs-popup/dist/index.css';
// import {useState} from 'react'
import Popup from "reactjs-popup";

function Navbar(){
    

    return(
        <div className="navbar">

            <Popup className="navbar-popup-box" trigger={<button className="navbar-btn"> Add Task </button>}>

                <div className="navbar-popup">
                    <h2>Add Task</h2>
                    <label className="navbar-btn-title"> Title
                        <input type="text"/>
                    </label>
                    
                    <label className="navbar-btn-status"> Status
                        <select name="status" id="status">
                            <option>Complete</option>
                            <option>Incomplete</option>
                        </select>
                    </label>
                    <div className="navbar-popup-btns">
                        <button className="navbar-popup-btns-btn1"> Add task</button>
                        <button className="navbar-popup-btns-btn2"> Cancel </button>
                    </div>
                    
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