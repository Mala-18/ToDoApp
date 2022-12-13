import "./ItemsList.css"
import { NotificationManager } from 'react-notifications';
import { RxTrash,RxPencil1,RxCheck,RxCrossCircled } from "react-icons/rx"
import { useState } from "react"

function ItemsList({ allTasks, removeTasks, text, dateAndTime, isComplete}){

    const [style,setStyle] = useState("before");
    const [title,setTitle] = useState("");
    const [edit,setEdit] = useState(false);
    
    const changeStyle = () => {
        if( style === "before"){
            setStyle("after");
            var index=allTasks.findIndex(task=>task.text===text);
            allTasks[index].isComplete="Complete";
            removeTasks(allTasks);
        }
        else{
            setStyle("before");
            var index = allTasks.findIndex(task=>task.text===text);
            allTasks[index].isComplete="Incomplete";
            removeTasks(allTasks);
        }
    }

    const handleRemove = () => {
        const filteredTasks=allTasks.filter((task)=> task.text !== text);
        removeTasks(filteredTasks);
        NotificationManager.error('Task deleted', 'Deleted!', 1000);
    }
    
    const editClick = () => {
        setEdit(!edit);
    }

    const closeEdit = () => {
        setEdit(false);
    }

    const handleUpdateSubmit = () => {
        setEdit(false);
        var index=allTasks.findIndex(task=>task.text===text);
        allTasks[index].text=title;
        removeTasks(allTasks);
        NotificationManager.info('Task Updated','Updated',1000);
        
    }
    
    return(
           <div> 
                {
                    text === "No tasks" ?
                    <div className="items-text-notask">
                        <p>{text}</p>
                    </div>
                    :
                    <div>
                        <div className="items-list" >
                        <div className="items-text" onClick={changeStyle}>
                            <div>
                                <RxCheck size={29} className={`${isComplete==="Complete" ? "after" : style}`}/>            
                            </div>
                            <div>       
                                <p className={`${isComplete==="Complete" ? "after" : style}`}>{text}</p>
                                <p>{dateAndTime}</p>    
                            </div>               
                        </div>
                        <div className="items-btn">
                            <RxTrash size={20} onClick={handleRemove}/>
                            <RxPencil1 size={20} onClick={editClick}/>
                        </div>
                        </div>
                    </div> 
                }{
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
                                                <input placeholder={text} type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                                            </label>
                                    
                                            <label className="navbar-btn-status"> Status
                                                <select name="status" id="status">
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