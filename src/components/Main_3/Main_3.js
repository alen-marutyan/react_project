import Main_3_items from "./Main_3_items";


const Main_3 = ({Main_3_item}) => {
    return (
        <div className='select_3'>
            {
                Main_3_item.map((item,index)=>{
                    return <Main_3_items item={item} key={index}/>
                })
            }
        </div>
    )
}

export default Main_3;