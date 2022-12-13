import "./ItemsList.css"
import { RxTrash,RxPencil1,RxCheck,RxCrossCircled } from "react-icons/rx"
import { useState } from "react"

function ItemsList({ allTasks, removeTasks, text, dateAndTime, isComplete}){

    const [style,setStyle] = useState("before");
    const [edit,setEdit] = useState(false);

    const changeStyle = () => {
        style === "before" ? setStyle("after") : setStyle("before");
        if(!isComplete){
            isComplete=true;
        }
        else{
            isComplete=false;
        }
    }

    const handleRemove = () => {
        const filteredTasks=allTasks.filter((task)=> task.text !== text);
        removeTasks(filteredTasks);
    }
    
    const editClick = () => {
        setEdit(!edit);
    }

    const closeEdit = () => {
        setEdit(false);
    }

    const handleUpdateSubmit = () => {
        setEdit(false);
    }

    return(
           <div>   
                <div className="items-list">
                    <div className="items-text" onClick={changeStyle}>
                        <div>
                            <RxCheck size={29} className={style} />               
                        </div>
                        <div>            
                            <div>
                                <p>{text}</p>
                                <p>{dateAndTime}</p>
                            </div>
                        </div>               
                    </div>
                    <div className="items-btn">
                        <RxTrash size={20} onClick={handleRemove}/>
                        <RxPencil1 size={20} onClick={editClick}/>
                    </div>
                </div> 
                {
                    edit ?
                    <div>
                        <div className="update-main">
                            <div className="update-popup">
                                <div className="update-popup-header">
                                    <h1>Update Task</h1>
                                    <RxCrossCircled size={25} onClick={closeEdit} />
                                </div>
                                <div className="update-popup-form">
                                    <form onSubmit={handleUpdateSubmit}>
                                        <label className="update-btn-title"> Title
                                            <input type="text" />
                                        </label>
                                
                                        <label className="navbar-btn-status"> Status
                                            <select name="status" id="status" >
                                                <option>Complete</option>
                                                <option>Incomplete</option>
                                            </select>
                                        </label> 
                                        <button type="submit" className="update-popup-btns-btn1" >Add Task</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>:""
                }         
            </div>            
        
    )
}

export default ItemsList;