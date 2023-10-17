import React,{useState}from 'react'
import img1 from "../images/netflix.png"
import img2 from "../images/myicon.jpg"
import "./navbar.css"
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
const Navbar = () => {
    const [isScrolled, setisScrolled] = useState(false);
    window.onscroll=()=>{
        setisScrolled(window.pageYOffset===0?false:true);
        return ()=>(window.onscroll=null);
    };
  return (
    <div className={isScrolled?"scrolled":"navbar"}>
        <div className="container">
            <div className="left">
                <img  className="logo"src={img1} alt="logo" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and popular</span>
                <span>Mylist</span>
            </div>
            <div className="right">
               <Search className="icon"/>
               <span className='kid'>Kid</span>
               <Notifications className="icon"/>
               <img  className="pi"src={img2}alt="icon" />
               <div className ="profile">
                <div className ="arrow-dropdown">
                    <ArrowDropDown className="icon" />
                    <div class="options">
                    <span className="spand">Settings</span>
                    <span className="spand">Logout</span>
                    </div>
                </div>
                </div>

               
            </div>
        </div>
    </div>
  )
}

export default Navbar;