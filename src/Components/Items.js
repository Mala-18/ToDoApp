import "./Items.css"

function Items(){
    return(
        <div className="items">
            <div className="items-list">
                <p>Task 1</p>
                <div className="items-btn">
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
                
            </div>
            <div className="items-list">
                <p>Task 2</p>
                <div className="items-btn">
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Items;