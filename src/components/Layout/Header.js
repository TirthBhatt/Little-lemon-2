import { Link, } from 'react-router-dom';
import lg from './Assets/Logo.svg';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { useState } from 'react';

const Header=()=>{
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
       
 <header>
        <nav className=" row content">
            <a className="col-3 float-start"> <img src={lg} className="logo"></img></a>
             <div className=" col-8 d-flex justify-content-center align-items-center float-end">
                    <a className="col-2">
                        <Link to='/'>HOME</Link>
                    
                    </a>
                    
                    <a className="col-2">
                    <Link to='/Under'>MENU</Link>
                    </a>
                    <a className="col-2">
                    <Link to='/booking'> RESERVATION</Link>
                       
                    </a>
                    <a className="col-2">
                    <Link to='/Under'>ABOUT</Link>
                    </a>
                    <a className="col-2">
                    <Link to='/Under'> ORDER ONLINE</Link>
                       
                    </a>
                    <a className="col-2">
                    <Link to='/Under'>   LOGIN</Link>
                   
                      
                    </a>
                    <div className="hamburger" onClick = {handleClick}>
            {click ? (<AiOutlineClose size={20} style={{ color: "#333333"}}/>) : (<AiOutlineMenu size={30} style={{ color: "#333333", borderLeft: "1px solid #333333", paddingLeft: "10px", height: "20px"}}/>)}  
        </div>
                      
                       
                       
                  

                  
             </div>
        </nav>
       </header>
        

      
       
       
    );
    
}



 export default Header;