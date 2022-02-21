import Main_5_items_1 from "./Main_5_items_1";
import Main_5_items_2 from "./Main_5_items_2";
import Main_5_items_3 from "./Main_5_items_3";


const Main_5 = ({Main_5_item}) => {
    return (
        <div className='select_5'>
            {
                Main_5_item.map((item,index)=>(
                       <div className='select_5_1'>
                           <Main_5_items_1 item={item.contact_box} key={10+index}/>
                           <Main_5_items_2 item={item.opening_hours} key={11+index}/>
                           <Main_5_items_3 item={item.info_box} key={12+index}/>
                       </div>

                ))
            }
        </div>
    )
}

export default Main_5;