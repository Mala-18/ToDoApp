import "./Navbar.css"

function Navbar(){
    return(
        <div className="navbar">
            <button className="navbar-btn">Add Task</button>
            <select className="navbar-select" name="items" id="items">
                <option>All</option>
                <option>Complete</option>
                <option>Incomplete</option>
            </select>
      </div>
    )
}

export default Navbar;