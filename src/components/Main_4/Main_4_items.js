

const Main_4_items = ({item,Main_4_body}) => {

    return (
        <div className='item_sec_4'>
            <img src={item.image} alt=""/>
            <div>
                <h2>{item.title.title_1}</h2>
                <h2>{item.title.title_2}</h2>
            </div>
            <p>{Main_4_body}</p>
        </div>
    );
}

export default Main_4_items;