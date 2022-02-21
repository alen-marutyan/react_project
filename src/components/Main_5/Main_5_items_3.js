


const Main_5_items_3 = ({item}) => {
    console.log(item)
    return (
        <div>
            <h2>Info box</h2>
            <ul>
                {
                    item.map((value,index)=>{
                       return <li key={index}>{value}</li>
                })
                }
            </ul>
        </div>
    );
}

export default Main_5_items_3;