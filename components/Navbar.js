import Link from 'next/link';
import { useRouter } from 'next/router'
import Image from 'next/image';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {

    

        
    return ( 
        <> 
        	<Link href="/" className="logo">
                <Image src="/favicon.ico" width="80px" height="75px" alt=""/>
            </Link>
            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
            <label for="menu-icon"></label>
            <nav className="nav"> 		
                <ul className="pt-5">
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/blog">Blogs</Link></li>
                    <li><Link href="/team">Team</Link></li>
                    <li><Link href="#">News</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
  	        </nav>


    
    

        </>

    );
}
 
export default Navbar;