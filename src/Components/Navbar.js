import React from "react";
import mylogo from "../assets/logo1.png";
import { NavLink } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import {
  ScrollSpy,
  initTE,
} from "tw-elements";

initTE({ ScrollSpy });

const Navbar = () => 

{

  
  return (
    <>
    <div 
      className="drop-shadow-2xl m-4 w-auto">
        
        <div className="flex -space-x-auto bg-red-600 text-red-800 justify-between items-center rounded-full p-5 text-xl font-bold">
          <div className="w-21">
            
             <img
              src={mylogo}
              className="drop-shadow-lg h-16 align-baseline rounded-full"
              alt="Bck to go home" 
            ></img>
            
            
          </div>
          <span className="drop-shadow-lg self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
            India Post Philately
            </span>
            
          <div className="">
            <NavLink  to ="/" className="drop-shadow-lg p-4 space-x-3 bg-yellow-200 text-red-900 rounded-full m-1 hover:bg-white">
              Home
            </NavLink>
            <NavLink to="/about" className="drop-shadow-lg p-4 space-x-3 bg-yellow-200 text-red-900 rounded-full m-1 hover:bg-white">
              About
            </NavLink>
            <NavLink to="/contact" className="drop-shadow-lg p-4 space-x-3 bg-yellow-200 text-red-900 rounded-full m-1 hover:bg-white">
              Contact
            </NavLink>
            <NavLink to="/Login" className="drop-shadow-lg p-4 space-x-3 bg-yellow-200 text-red-900 rounded-full m-1 hover:bg-white">
              Login
            </NavLink>
            
          </div>
        </div><Marquee pauseOnHover='true'>
            <li>Hyderabad H.O - 500 001</li>
            <li>Visakhapatnam H.O - 530 001</li>
            <li>Vijayawada H. O - 520 001</li>
            <li>Patna GPO - 800 001</li>
            <li>Jamshedpur GPO - 831 001</li>
            <li>Parliament Street H.O - 110 001</li>
            <li>Ahmedabad GPO - 380 001</li>
            <li>Rajkot H. O. - 360 001</li>
            <li>Vadodara H.O. - 390 001 </li>
            <li>Ambala GPO - 133 001</li>
            <li>Shimla GPO - 171 001 </li>
            <li>Jammu Tawi H. O. - 180 001</li>
            <li>Bangalore GPO - 560 001</li>
            <li>Mangalore GPO - 575 001</li>
            <li>Trivandrum GPO - 695 001</li>
            <li>Calicut H.O. - 673 001</li>
            <li>Ernakulam H. O. - 682 001</li>
            <li>Bhopal GPO - 462 001</li>
            <li>Indore H. O. - 452 001</li>
            <li>Gwalior H.O. - 474 001</li>
            <li>Civic Centre Bhilai - 490 006</li>
            <li>Raipur H.O. - 492 001</li>
            <li>Mumbai GPO - 400 001</li>
            <li>Panaji H. O. - 403 001</li>
            <li>Pune H.O. - 411 001</li>
            <li>Nagpur GPO - 440 001</li>
            <li>Nashik H.O. - 422 001</li>
            <li>Shillong GPO - 793 001</li>
            <li>Imphal H.O. - 795 001</li>
            <li>Agartala H.O. - 799 001</li>
            <li>Kohima H.O.- 797 001</li>
            <li>Cuttak GPO - 753 001</li>
            <li>Chandigarh GPO - 160 017</li>
            <li>Amritsar H.O. - 143 001</li>
            <li>Ludhiana H.O - 141 001</li>
            <li>Jalandhar City H.O. - 144 001 </li>
            <li>Jaipur GPO - 302 001</li>
            <li>Jodhpur H.O. - 342 001</li>
            <li>Anna Road Chennai - 600 002</li>
            <li>Pondicherry H.O.- 605 001</li>
            <li>Coimbatore H.O.- 641 001</li>
            <li>Madurai H.O.- 625 001</li>
            <li>Tiruchirappalli H.O.- 620 001</li>
            <li>Lucknow GPO - 226 001</li>
            <li>Kanpur H.O.- 208 001</li>
            <li>Allahabad H.O.- 211 001</li>
            <li>Agra H.O.- 282 001</li>
            <li>Varanasi H.O - 221 001</li>
            <li>Dehradun H.O.- 248 001</li>
            <li>Calcutta GPO - 700 001</li>
            <li>CBPO, C/O 56 APO</li>
            <li>CBPO, C/O 99 APO.</li>
        </Marquee>
      </div>
      
    </>
  );
};

export default Navbar;
