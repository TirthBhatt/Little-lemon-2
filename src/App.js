import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home/Home';
import Header from '../src/components/Layout/Header' 
import Layout from './components/Layout/Layout'
import { Link, Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Bokking from  "./components/pages/Booking/Booking"
import  Underc from './components/pages/UnderConstruction/underConstruction'
import  Main from "./components/pages/Home/Home"
import Cmf from "./components/pages/Booking/ConfirmBooking"

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>


function App() {
  return (
    <div className="App">
     <Layout>
     <Routes>
      <Route path='/' Component={Main}/>
      <Route Component={Bokking} path='/booking'/>
      <Route Component={Underc} path='/Under'/>
     
      <Route Component={Cmf} path='/Cmfbooking'/>
  
     </Routes>
     </Layout>
    
    </div>
  );
}

export default App;
