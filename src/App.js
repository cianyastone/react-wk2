import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <header className="header">
            <a href="index.html" className="logo">
                <img className="logo_img" src="img/the-hunger-games-logo-1.png" alt="logo"/>
            </a>
            <div className="burger">
              <img className="icon_menu" src="img/icon_menu.png" alt=""/>
            </div>
            <div className="float-nav">
              <ul className="nav_list">
                <li className="nav_list_item">
                  <a className="nav_list_item_link" href="page_404.html">
                    <img className="icon_mockingjay" src="img/mockingjay_icon_gray.png" alt="icon_mockingjay"/>
                    <span className="nav_span">STORY</span>
                  </a>
                </li>
                <li className="nav_list_item">
                  <a className="nav_list_item_link" href="people.html">
                    <img className="icon_mockingjay" src="img/mockingjay_icon_1_gray.png" alt="icon_mockingjay"/>
                    <span className="nav_span">PEOPLE</span>
                  </a>
                </li>
                <li className="nav_list_item">
                  <a className="nav_list_item_link" href="district.html">
                    <img className="icon_mockingjay" src="img/mockingjay_icon_2_gray.png" alt="icon_mockingjay"/>
                    <span className="nav_span">DISTRICT</span>
                  </a>
                </li>
                <li className="nav_list_item">
                  <a className="nav_list_item_link" href="page_404.html">
                    <img className="icon_mockingjay" src="img/mockingjay_icon_gray.png" alt="icon_mockingjay"/>
                    <span className="nav_span">AUTHOR</span>
                  </a>
                </li>
                <li className="nav_list_item">
                  <a className="nav_list_item_link" href="books.html">
                    <img className="icon_mockingjay" src="img/mockingjay_icon_1_gray.png" alt="icon_mockingjay"/>
                    <span className="nav_span">BOOKS</span>
                  </a>
                </li>
                <li className="nav_list_item">
                  <a className="nav_list_item_link" href="page_404.html">
                    <img className="icon_mockingjay" src="img/mockingjay_icon_2_gray.png" alt="icon_mockingjay"/>
                    <span className="nav_span">BTS</span>
                  </a>
                </li>
              </ul>
            </div>
        </header>
        <div className="content_area">
          <div className="bg_img"></div>
          <div className="box_content">
            <div className="box_katniss_explain">
              <img className="img_bgi_black" src="img/bg_black.png" alt="explain img"/>
              <div className="explain">
                <p className="center box_name">
                  <span className="explain_name">Primrose Everdeen</span>
                </p>
                <br/>
                <p className="center box_quote">
                  <span className="explain_quote">"I just want you to come home. You'll try, won't you?"</span>
                </p>
                <br/>
                <p className="center box_quote_name">
                  <span className="explain_quote_name">- Primrose Everdeen</span>
                </p>
                <br/>
                <p className="center box_word">
                  <span className="explain_word">Primrose "Prim" Everdeen was Katniss Everdeen's younger sister. Unlike her sister in many ways, Prim was the opposite of Katniss in both looks and character; having blonde hair like their mother, a gentle personality (unlike Katniss' prickly one) and a talent for healing, as opposed to Katniss' talent for hunting. Despite this, they are very devoted to each other.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="box_people">
            <div className="box_img_katniss_1">
              <img className="img_katniss_1" src="img/primrose_1.jpg" alt="primrose"/>
            </div>
            <div className="box_katniss_2">
              <a href="district.html"><img className="img_district_12" src="img/12.png" alt="district 12"/></a>
              <img className="img_katniss_2" src="img/Primrose_2.jpg" alt="primrose"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
