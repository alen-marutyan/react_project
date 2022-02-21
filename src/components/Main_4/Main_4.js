import Main_4_items from "./Main_4_items";


const Main_4 = ({Main_4_item,Main_4_body}) => {
    return (
        <div className='select_4'>
            <div className='select_4_1'>
                <h2>Why you should <span>choose</span>  <br/>our lessons?</h2>
            </div>
            <div className='select_4_2'>
                {
                    Main_4_item.map((item,index)=>{
                        return <Main_4_items Main_4_body={Main_4_body} item={item} key={index}/>
                    })
                }
            </div>
            <a href=""><button className='btn'>Learn more</button></a>
        </div>
    )
}

export default Main_4;