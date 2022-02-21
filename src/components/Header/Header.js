import React from "react";


const Header = () => {
    let menu = ['Home','About us', 'Training', 'Teachers', 'Contact'];

    return(
        <nav>
            <div className="logo_menu">
                <div>
                    <img src='https://themes.muffingroup.com/be/training2/wp-content/uploads/2020/02/training2.png' alt="train" width='195' height='44'/>
                </div>
                <div className='Menu'>
                    {
                        menu.map((value,index) => (
                            <a key={index} href='#'>
                                {value}
                            </a>
                        ))
                    }
                </div>
            </div>
            <div >
                <button className='btn menu'>Buy now
                    <i className="fas fa-angle-right"></i>
                </button>
            </div>
        </nav>
    );
}

export default Header;