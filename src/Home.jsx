import Centralpic from './images/icon.jpg';
import menulist from './images/menulist.jpg';
import "./Home.css"

function Home(){
    return(
        
        <div id="main">
    <body>
        <div class="image-container">
            <img src={menulist} alt="image" />
            <div class="overlay-text">
                <ul class="list">
                <li>
                Heroes
                </li>
                <li>
                Monsters
                </li>
                </ul>
            </div>
        </div>
    </body>
           
            
        <img id="central" src={Centralpic} alt ="logo"/>        
       



        </div>

    );
}

export default Home;