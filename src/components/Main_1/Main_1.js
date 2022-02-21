import Main_1_items from "./Main_1_items";


const Main_1 = ({Main_1_item}) => {
    return (
        <div>
            {
                Main_1_item.map((item,index)=>{
                    return <Main_1_items item={item} key={index}/>
                })
            }
        </div>
    )
}

export default Main_1;