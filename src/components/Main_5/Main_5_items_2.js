

const Main_5_items_2 = ({item}) => {

    return (
        <div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <span className='week'>{item.week_1}</span>
            <span>{item.time_1}</span>
            <span className='week'>{item.week_2}</span>
            <span>{item.time_2}</span>
        </div>
    );
}

export default Main_5_items_2;