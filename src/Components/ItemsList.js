import "./ItemsList.css"
import { RxTrash,RxPencil1,RxCheck } from "react-icons/rx"
import { useState } from "react"

function ItemsList({ allTasks, removeTasks, text, dateAndTime, isComplete}){

    const [style,setStyle] = useState("before");

    const changeStyle = () => {
        setStyle("after");
        isComplete=true;
    }

    const handleRemove = () => {
        const filteredTasks=allTasks.filter((task)=> task.text !== text);
        removeTasks(filteredTasks);
    }
    console.log(allTasks);
    return(
           <div>
                
                    
                    
                    
                            <div className="items-list">
                                <div className="items-text">
                                    <div>
                                        
                                            <RxCheck size={29} className={style} onClick={changeStyle}/>
                                           
                                     
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
                                    <RxPencil1 size={20}/>
                                </div>
                            </div>
                        
                    
                    
                
            </div>            
        
    )
}

export default ItemsList;