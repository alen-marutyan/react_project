import Main_2_items from "./Main_2_items";


const Main_1 = ({Main_2_item}) => {
    return (
        <div className='select_2'>
            {
                Main_2_item.map((item,index)=>{
                    return <Main_2_items item={item} key={index}/>
                })
            }
        </div>
    )
}

export default Main_1;