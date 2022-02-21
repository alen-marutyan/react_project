

const Main_2_items = ({item}) => {

    return (
        <div className='item_sec'>
            <div className="item_id"><img src={item.image} alt={item.image} /></div>
            <div>
                <h2>{item.title.title_1}</h2>
                <h2>{item.title.title_2}</h2>
            </div>
            <div>
                <p>{item.body}</p>
            </div>
            <div>
                <a href=""><button className='btn'>Read more</button></a>
            </div>
        </div>
    );
}

export default Main_2_items;