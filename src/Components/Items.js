import "./Items.css"

function Items(props){

    return(
        <div className="items">
            <div className="items-list">
                <div className="items-text">
                    <p>{props.items.item1.text}</p>
                    <p>{props.items.item1.dateAndTime}</p>
                </div>
                <div className="items-btn">
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
                
            </div>
            <div className="items-list">
                <div className="items-text">
                    <p>{props.items.item1.text}</p>
                    <p>{props.items.item1.dateAndTime}</p>
                </div>
                <div className="items-btn">
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Items;