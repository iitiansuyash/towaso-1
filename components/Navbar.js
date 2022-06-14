import Link from 'next/link';
import { useRouter } from 'next/router'
import Image from 'next/image';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {

    

        
    return ( 
        <> 
        	<a href="/" className="logo">
                <Image src="/favicon.ico" width="80px" height="75px" alt=""/>
            </a>
            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
            <label for="menu-icon"></label>
            <nav className="nav"> 		
                <ul className="pt-5">
                    <li><a href="/">About</a></li>
                    <li><a href="/blog">Blogs</a></li>
                    <li><a href="/team">Team</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
  	        </nav>


    
    

        </>

    );
}
 
export default Navbar;