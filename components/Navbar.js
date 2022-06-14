import Link from 'next/link';
import { useRouter } from 'next/router'
import Image from 'next/image';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {

    

        
    return ( 
        <> 
        	<div className="logo">
            <Link href="/"><a><Image src="/favicon.ico" width="75" height="75"/></a></Link>
            </div>
            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
            <label htmlFor="menu-icon"></label>
            <nav className="nav"> 		
                <ul className="pt-5">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/#services"><a>Services</a></Link></li>
                    <li><Link href="/blog"><a>Blogs</a></Link></li>
                    <li><Link href="/team"><a>Team</a></Link></li>
                    <li><Link href="/#contact"><a>Contact</a></Link></li>
                </ul>
  	        </nav>


    
    

        </>

    );
}
 
export default Navbar;