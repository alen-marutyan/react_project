

const Main_3_items = ({item}) => {

    return (
        <div className='item_sec_3'>
            <div className='select_3_img'>
            </div>
            <div className='select_3_text'>
                <h2>{item.title.title_1}</h2>
                <h2>{item.title.title_2}</h2>
                <p>{item.body}</p>
                <a href=""><button className='btn'>Learn more</button></a>
            </div>
        </div>
    );
}

export default Main_3_items;