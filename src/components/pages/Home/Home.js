
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import  homeimg from '../Home/Assets/food.jpg'
import salad1 from '../Home/Assets//salad-1.jpg'
import salad2 from '../Home/Assets/salad-2.jpg'
import salad3 from '../Home/Assets/salad-3.jpg'
import bike from '../Home/Assets/bike.jpg'
import cust1 from "../Home/Assets/cust1.jpg"
import cust2 from "../Home/Assets/cust2.jpg"
import cust3 from "../Home/Assets/cust3.jpg"
import cust4 from "../Home/Assets/cust4.jpg"
import chef1 from '../Home/Assets/chef1.jpg'
import chef2 from '../Home/Assets/chef2.jpg'

export default function Home(){
    return(
       <>
       <div className="Panel one content row">
         <div className="TextOne col-6 m-0 d-flex justify-content-center align-items-start
          flex-column">
           <p className="lgtext m-0">Littel Lemon</p>
           <p className="city m-0">Chicago</p>
           <p>We are family owned mediterian restraurant, focused on traditional recipies served with modern twist.</p>
          <button className="PrimaryBtn  rounded-4" > <Link to="/booking" style={{textDecoration:"none",color:'white'}}>Reserve Table</Link></button>
         </div>
         <div className=" col-6 m-0">

           <img src={homeimg} ></img>
         </div>

       </div>


       <div className="Panel two content">
           <div className="row">
                
               <h3 className="col-9">This week specials !...</h3>
               <button className="PrimaryBtn col-2 "> Online Menu</button>
           </div>
           <div className="row d-flex justify-content-center align-items-center">
               <div className="specials col ">
                   
                   <img src={salad1} className="m-0 p-0D"></img>

                   <div className="row w-100 p-2">
                       <p className="col-9">Greek Salad</p>
                       <p className="col   text-danger border-light">$12.99</p>
                   </div>
                   
                   <p className="p-4 m-0 ">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>

                   <a className="">Order a delivery <img src={bike}></img></a>

               </div>
               <div className="specials col ">

                   <img src={salad2} className="m-0 p-0D"></img>
                   
                   <div className="row w-100 p-2">
                       <p className="col-9">Greek Salad</p>
                       <p className="col   text-danger border-light">$12.99</p>
                   </div>
                   
                   <p className="p-4 m-0 ">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>

                   <a className="">Order a delivery <img src={bike}></img></a>


               </div>
               <div className="specials col ">

                   <img src={salad3} className="m-0 p-0 "></img> 

                   <div className="row w-100 p-2">
                       <p className="col-9">Greek Salad</p>
                       <p className="col   text-danger border-light">$12.99</p>
                   </div>
                   
                   <p className="p-4 m-0 ">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>

                   <a className="">Order a delivery <img src={bike}></img></a>

               </div>
           </div>
       </div>
       <div className="Panel three">

           <div className="row container-fluid content d-flex justify-content-center align-items-center">
               <div className="feedbk  m-4 d-flex justify-content-center align-items-center flex-column">
                   <img src={cust1} alt='customer 1' className=' col-xxl p-0'></img>
                   <h3>Maria sanchez</h3>
                   <div className='feedstars d-flex justify-content-center align-items-center'>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2' ></FaStar>

                   </div>
                   
                  <p className=' m-4'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>

               </div>
               <div className="feedbk  m-4 d-flex justify-content-center align-items-center flex-column">
                   <img className=' col-xxl p-0' src={cust2} alt='Customer 2'></img>
                   <h3> Maria sanchez</h3>
                   <div className='feedstars d-flex justify-content-center align-items-center'>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2' ></FaStar>

                   </div>
                   <p className=' m-4'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>


               </div>
               <div className="feedbk  m-4 d-flex justify-content-center align-items-center flex-column">
                   <img className='col-xxl p-0' src={cust3} alt='Customer 2' ></img>
                   <h3>Maria sanchez</h3>
                   <div className='feedstars d-flex justify-content-center align-items-center'>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2' ></FaStar>

                   </div>
                   <p className=' m-4'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>


               </div>
               <div className="feedbk  m-4 d-flex justify-content-center align-items-center flex-column">
                   <img className='col-xxl p-0' src={cust4} alt='Customer 2'></img>
                   <h3>Maria sanchez</h3>
                   <div className='feedstars d-flex justify-content-center align-items-center'>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2 checked' ></FaStar>
                           <FaStar color='rgb(192,192,192)' height="100px" width="100px" className='star m-2' ></FaStar>

                   </div>
                   <p className=' m-4'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>

                 
               </div>


               
           </div>
       </div>
       <div className='Panel four'>
           <div className=' container-fluid content'>
           <p className="lgtext ">Littel Lemon</p>
           <p className="city">Chicago</p>
           
           <div className='row justify-content-center align-items-center'>
               <div className='col-6 text'>
                   <p>
                   Lorem ipsum dolor sit amet, consecSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                   </p>
               </div>

               <img className='col-6' src={chef1}></img>

           </div>
           <div className='row justify-content-center align-items-center'>

               <img className='col-6' src={chef2}></img>
               
               <div className='col-6 text'>
               <p>
                   Lorem ipsum dolor sit amet, consecSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
               </p>
               </div>

              

           </div>
           </div>
      
       </div>
       </>
       

    );


}