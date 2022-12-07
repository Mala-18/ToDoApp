import "./Navbar.css"
import ItemsList from "./ItemsList";
import {useState} from 'react'
import itemsList from "../TaskList"

function Navbar(){
    const [title,setTitle] = useState("");
    const [status,setStatus] = useState("");
    const [popup,setPopup] = useState(false);

    const handleButtonClick = () => {
        setPopup(!popup);
    }

    const closePopup = () => {
        setPopup(false);
    }
    const handleSubmit = event =>{
        setPopup(false)
        const date= new Date();

        const currentDate= date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();

        const hours=(date.getHours()%12) || 12;

        const amOrPm= hours>=12 ? 'pm' : 'am';

        const currentTime= hours+" "+amOrPm;

        itemsList.push({text : title, dateAndTime : currentTime+" "+currentDate})

        
    }

    return(
        <div className="navbar">
            <div className="buttons">
                <button  onClick={handleButtonClick} className="navbar-btn">Add Task</button>

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
            {
                
                popup ?
                <div>
                    <div className="navbar-main">
                        <div className="navbar-popup">
                            <div className="navbar-popup-header">
                                <h1>Add Task</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <div className="navbar-popup-form">
                                <form onSubmit={handleSubmit}>
                                    <label className="navbar-btn-title"> Title
                                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                                    </label>
                            
                                    <label className="navbar-btn-status"> Status
                                        <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)}>
                                            <option>Complete</option>
                                            <option>Incomplete</option>
                                        </select>
                                    </label>
                                    <button className="navbar-popup-btns-btn1">Add Task</button>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>:""
            
            }

            
        </div>
    )
}

export default Navbar;