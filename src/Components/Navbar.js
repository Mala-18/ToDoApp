import "./Navbar.css"
import ItemsList from "./ItemsList";
// import 'reactjs-popup/dist/index.css';
import {useState} from 'react'
import itemsList from "../TaskList"
import Popup from "reactjs-popup";

function Navbar(){
    const [title,setTitle] = useState("");
    const [status,setStatus] = useState("");

    const handleSubmit = event =>{
        const date= new Date();

        const currentDate= date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();

        const hours=(date.getHours()%12) || 12;

        const amOrPm= hours>=12 ? 'pm' : 'am';

        const currentTime= hours+" "+amOrPm;

        itemsList.push({text : title, dateAndTime : currentTime+" "+currentDate})

        console.log(itemsList);
    }

    return(
        <div className="navbar">

            {/* <Popup className="navbar-popup-box" trigger={<button className="navbar-btn" closeOnEscape> Add Task </button>}>

                <div className="navbar-popup">
                    <h2>Add Task</h2>
                    <label className="navbar-btn-title"> Title
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </label>
                    
                    <label className="navbar-btn-status"> Status
                        <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)}>
                            <option>Complete</option>
                            <option>Incomplete</option>
                        </select>
                    </label>
                    <div className="navbar-popup-btns">
                        <input type="submit"  onClick={handleSubmit} className="navbar-popup-btns-btn1" Add task />
                        <button className="navbar-popup-btns-btn2"> Cancel </button>
                    </div>
                    
                </div>
            </Popup> */}
            

            <div className="buttons">
                <button className="navbar-btn">Add Task</button>

                <select className="navbar-select" name="items" id="items">
                    <option>All</option>
                    <option>Complete</option>
                    <option>Incomplete</option>
                </select>

            </div>

            <div className="items">
                {
                    itemsList.length===0 ?
                    <ItemsList text="No tasks found"/> :
                    
                    itemsList.map(items=>{
                        return(
                            <ItemsList text={items.text} dateAndTime={items.dateAndTime}/>
                              )})
                }

            </div>

            
        </div>
    )
}

export default Navbar;