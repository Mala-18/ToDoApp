import "./ItemsList.css"
//import { TfiCheck,TfiTrash,TfiPencil } from "react-icons/tfi"
import { RxTrash,RxPencil1,RxCheck } from "react-icons/rx"

function ItemsList(props){
    return(
           <div>
                {
                    Object.keys(props).length===1 ?
                    <div className="items-list" style={{textAlign:'center', marginLeft: 185, width:100}}>
                        <div className="items-text">
                            <p>{props.text}</p>
                            <p>{props.dateAndTime}</p>
                        </div>
                    </div>
                    :
                    <div className="items-list">
                        <div className="items-text">
                            <div>
                                <RxCheck size={29} strokeWidth={0} marginLeft={10}/>
                            </div>
                            <div>
                                <p>{props.text}</p>
                                <p>{props.dateAndTime}</p>
                            </div>               
                        </div>
                        <div className="items-btn">
                            <RxTrash size={25}/>
                            <RxPencil1 size={25}/>
                        </div>
                    </div>
                }
            </div>            
        
    )
}

export default ItemsList;