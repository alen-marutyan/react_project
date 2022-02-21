import db from './db.json';
import Main_1 from "./components/Main_1/Main_1";
import Main_2 from "./components/Main_2/Main_2";
import Main_3 from "./components/Main_3/Main_3";
import './style.css'
import Main_4 from "./components/Main_4/Main_4";
import Header from "./components/Header/Header";
import Main_5 from "./components/Main_5/Main_5";
import Main_6 from "./components/Main_6/Main_6";
import Footer from "./components/Footer/Footer";

function App() {
    console.log(db.Main_5_item)
  return (
    <div className="App">
        <div className='header_sel1'>
            <Header/>
            <Main_1 Main_1_item={db.Main_1_item}/>
        </div>
        <Main_2 Main_2_item={db.Main_2_item}/>
        <Main_3 Main_3_item={db.Main_3_item}/>
        <Main_4 Main_4_item={db.Main_4_item} Main_4_body={db.Main_4_body}/>
        <Main_5 Main_5_item={db.Main_5_item} />
        <div className="footer_sel1">
            <Main_6 />
            <Footer/>
        </div>
    </div>
  );
}

export default App;
