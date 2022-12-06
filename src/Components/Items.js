import "./Items.css"

function Items(){

const date= new Date();

const currentDate= date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();

const hours=(date.getHours()%12) || 12;

const amOrPm= hours>=12 ? 'pm' : 'am';

const currentTime= hours+" "+amOrPm;

    return(
        <div className="items">
            <div className="items-list">
                <div className="items-text">
                    <p>Task 1</p>
                    <p>{currentTime}, {currentDate}</p>
                </div>
                <div className="items-btn">
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
                
            </div>
            <div className="items-list">
                <div className="items-text">
                    <p>Task 2</p>
                    <p>{currentTime}, {currentDate}</p>
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