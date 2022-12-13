import "./Navbar.css"
// import { store } from 'react-notifications-component';
// import 'react-notifications-component/dist/theme.css';
// import 'animate.css';
import ItemsList from "./ItemsList";
import {useState} from 'react'
import { RxCrossCircled } from "react-icons/rx"
import { NotificationManager } from 'react-notifications';


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
    const [secondStatus, setSecondStatus] = useState("Incomplete");
    const [popup,setPopup] = useState(false);
    const [items,setItems] = useState([
        
    ])

    const handleButtonClick = () => {
        setPopup(!popup);
    }

    const closePopup = () => {
        setPopup(false);
    }
    const handleSubmit = () =>{
        setPopup(false);
        console.log("Inside handleSubmit func/Navbar.js")
        console.log(secondStatus)
        setItems(prev=>
            [
                ...prev,
                {
                    text:title,
                    dateAndTime:currentDateTime(),
                    isComplete:secondStatus
                }
            ]
        );
        NotificationManager.success('Task added', 'Success!', 2000);
    }

    // const addTaskNotification = () => {
    //     store.addNotification({
    //         title: 'Success',
    //         message: 'Task is added successfully',
    //         type: 'success',                         // 'default', 'success', 'info', 'warning'
    //         container: 'bottom-right',                // where to position the notifications
    //         animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
    //         animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
    //         dismiss: {
    //           duration: 3000 
    //         }
    //       })
    //     }
    
    
    
    return(
        <div className="navbar">
            <div className="buttons">
                <button  onClick={() => {
                    handleButtonClick();
                    }} className="navbar-btn">Add Task</button>

                <select className="navbar-select" name="items" id="items" value={status} onChange={(e)=>setStatus(e.target.value)}>
                    <option>All</option>
                    <option>Complete</option>
                    <option>Incomplete</option>
                </select>

            </div>

            <div className="items">
                { 
                    

                    items.length===0?
                    <ItemsList text="No tasks"/>
                    :
                    <div>
                        {
                            status==="All" 
                            ?
                            items.map(
                                item=>
                                {
                                    return(
                                    <ItemsList allTasks={items} removeTasks={setItems} text={item.text} dateAndTime={item.dateAndTime} isComplete={item.isComplete}/>
                                )}
                            )
                            :
                            <div>
                                {
                                    status==="Complete"
                                    ?
                                    <div>
                                        {
                                            items.map(item=>{
                                                if(item.isComplete==="Complete"){
                                                    return(
                                                        <ItemsList allTasks={items} removeTasks={setItems} text={item.text} dateAndTime={item.dateAndTime} isComplete={item.isComplete}/>
                                                    )
                                                }
                                            }

                                            )
                                        }
                                    </div>
                                    :
                                    <div>
                                        {
                                            items.map(item=>{
                                                if(item.isComplete==="Incomplete"){
                                                    return(
                                                        <ItemsList allTasks={items} removeTasks={setItems} text={item.text} dateAndTime={item.dateAndTime} isComplete={item.isComplete}/>
                                                    )
                                                }
                                            }

                                            )
                                        }
                                    </div>
                                }
                            </div>
                        }
                    </div>
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
                            
                                    <label className="navbar-btn-status"> Status
                                        <select name="status" id="status" value={secondStatus} onChange={(e)=>setSecondStatus(e.target.value)}>
                                            <option>Complete</option>
                                            <option>Incomplete</option>
                                        </select>
                                    </label>
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