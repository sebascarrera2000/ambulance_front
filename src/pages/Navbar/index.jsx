// import link
import './navbar.css/';
import {SideNavData} from  './SideNavData.js';
import { Icon } from '@mui/material';
const Navbar = () => {
    return (

        <div className="SideBar">
        <div className="SideBar__container"></div>
        <h1 className="titulo">Transport Module</h1>
        <ul className="SideBarList">
        {SideNavData.map((val,key) => {
        return(  <li key={key} 
                className="row"
                id={window.location.pathname== val.link ? "active"  : ""}
                onClick={()=>{  
                    window.location.pathname= val.link}}> 
                {""}
                <div id="icon">{val.icon} </div> {""}
                <div id="text"> {val.title}  </div>
                 </li>
            );
         })}
         </ul>
    </div>
    )
}

export { Navbar };