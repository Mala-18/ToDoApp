
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
                            <p>{props.text}</p>
                            <p>{props.dateAndTime}</p>
                        </div>
                        <div className="items-btn">
                            <button>Delete</button>
                            <button>Edit</button>
                        </div>
                    </div>
                }
            </div>            
        
    )
}

export default ItemsList;