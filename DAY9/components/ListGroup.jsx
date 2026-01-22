// List rendering and conditional rendering
function ListGroup(){
    const item = ['Noida','Pune','Kolkata','Bangluru']

    return(
        <div>
            <h2> List Group</h2>
            {item.length === 0? <p>Not Found!</p> : null }
            <ul className="ist-group-item">
                {
                    item.map((item)=> (
                        <li className= 'List-group-item' key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ListGroup;