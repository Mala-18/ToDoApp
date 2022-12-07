import "./Navbar.css"
import Box from "./Box"
import {useState} from 'react'

function Navbar(){
    const [isShown,setIsShown]=useState(false);
    const handleClick=event=>{
        setIsShown(prevShown=> !prevShown)
    }
    return(
        <div className="navbar">
            <button onClick={handleClick} className="navbar-btn">Add Task</button>
            { isShown && <Box/> }
            <select className="navbar-select" name="items" id="items">
                <option>All</option>
                <option>Complete</option>
                <option>Incomplete</option>
            </select>
      </div>
    )
}

export default Navbar;