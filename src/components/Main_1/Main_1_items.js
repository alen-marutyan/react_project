

const Main_1_items = ({item}) => {

    return (
        <div className="Main">
            <div  className='main_sel_div_1'>
                <h2>{item.title.title_1}</h2>
                <h2>{item.title.title_2}</h2>
                <p>{item.body}</p>
                <div className='main_btn'>
                    <a className='btn main read_more'>
                        Read more
                    </a>
                    <a className='btn main course_details'>
                        Course details
                    </a>
                </div>
            </div>
            <div className='main_sel_div_2'>
            </div>
        </div>
    );
}

export default Main_1_items;