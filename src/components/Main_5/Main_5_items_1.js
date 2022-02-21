

const Main_5_items_1 = ({item}) => {

    console.log(item.body)
    return (
        <div>
            <h2>
                {item.title}
            </h2>
            <p>
                {item.body}
            </p>
            <h3>
                {item.help_desk}
            </h3>
            <h3>
                <i className="fas fa-phone"></i>{item.number}
            </h3>
            <h3>
                <i className="far fa-envelope"></i>{item.letter}
            </h3>
        </div>
    );
}

export default Main_5_items_1;