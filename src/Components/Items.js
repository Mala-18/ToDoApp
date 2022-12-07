import "./Items.css"
import itemsList from "../TaskList";
import ItemsList from "./ItemsList";

function Items(){

    return(
        <div className="items">
            {
                itemsList.length===0 ?
                <ItemsList text="No tasks found"/> :
                
                itemsList.map(items=>{
                    return(
                        <ItemsList text={items.text} dateAndTime={items.dateAndTime}/>
                    )
            })}
        </div>
    )
}

export default Items;