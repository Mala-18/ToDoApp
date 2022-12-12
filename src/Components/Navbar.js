import "./Navbar.css"
import ItemsList from "./ItemsList";
import {useState} from 'react'
import { RxCrossCircled } from "react-icons/rx"

function Navbar(){

    const currentDateTime = () =>{
        const date= new Date();
        const currentDate= date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();
        const hours=(date.getHours()%12) || 12;
        const amOrPm= hours>=12 ? 'am' : 'pm';
        const currentTime= hours+" "+amOrPm;
        return currentTime+" "+currentDate;
    }
    
    const [title,setTitle] = useState("");
    const [status,setStatus] = useState("All");
    const [popup,setPopup] = useState(false);
    const [items,setItems] = useState([
        {
            text:"Make bed",
            dateAndTime:currentDateTime(),
            isComplete: false
        },
        {
            text:"Meditate",
            dateAndTime:currentDateTime(),
            isComplete: true
        },
        {
            text:"Journal",
            dateAndTime:currentDateTime(),
            isComplete: false
        },
        {
            text:"Gratitude Practice",
            dateAndTime:currentDateTime(),
            isComplete: true
        }
    ])

    const handleButtonClick = () => {
        setPopup(!popup);
    }

    const closePopup = () => {
        setPopup(false);
    }
    const handleSubmit = event =>{
        setPopup(false);
        setItems(prev=>
            [
                ...prev,
                {
                    text:title,
                    dateAndTime:currentDateTime(),
                    isComplete:false
                }
            ]
        );
    
    }
    
    
    return(
        <div className="navbar">
            <div className="buttons">
                <button  onClick={handleButtonClick} className="navbar-btn">Add Task</button>

                <select className="navbar-select" name="items" id="items" value={status} onChange={(e)=>setStatus(e.target.value)}>
                    <option>All</option>
                    <option>Complete</option>
                    <option>Incomplete</option>
                </select>

            </div>

            <div className="items">
                { 
                    items.length===0 ?
                    <ItemsList text="No tasks found"/>
                    :
                    items.map(item=>{
                        return(
                            <ItemsList allTasks={items} removeTasks={setItems} text={item.text} dateAndTime={item.dateAndTime} isComplete={item.isComplete}/>
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
                                <RxCrossCircled size={25} onClick={closePopup} />
                            </div>
                            <div className="navbar-popup-form">
                                <form onSubmit={handleSubmit}>
                                    <label className="navbar-btn-title"> Title
                                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                                    </label>
                            
                                    {/* <label className="navbar-btn-status"> Status
                                        <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)}>
                                            <option>Complete</option>
                                            <option>Incomplete</option>
                                        </select>
                                    </label> */}
                                    <button type="submit" className="navbar-popup-btns-btn1" >Add Task</button>

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