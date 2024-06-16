import Centralpic from './images/icon.jpg';

import "./Home.css"

function Home(){
    return(
        
        <div id="main">
           
           
            
        <img id="central" src={Centralpic} alt ="logo"/>        
       
       <div id="RuleBook">
        <a id="RuleBook" href ="https://arcadiaquest.com/dl/AQ-Rulebook-v2.pdf">RuleBook</a>
       </div>

        <div id="Monsters">
        <p>monster will be there</p>
        </div>


        </div>

    );
}

export default Home;