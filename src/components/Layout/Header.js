import {Route, Link, Routes} from 'react-router-dom';
import lg from './Assets/Logo.svg';
import  Bokking from  "../pages/Booking/Booking"
import  Underc from '../pages/UnderConstruction/underConstruction'

import Main from '../pages/Home/Home'

function header(){
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
                    
                      
                       
                       
                  

                  
             </div>
        </nav>
       </header>
        

      
       
       
    );
    
}



 export default header;