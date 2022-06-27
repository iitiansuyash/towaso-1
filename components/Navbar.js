import Link from 'next/link';
import { useRouter } from 'next/router'
import Image from 'next/image';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {

    

        
    return ( 
        <> 
        <header className="header">
        	<div className="logo">
            <Link href="/"><a><Image src="/logo.png" width="150" height="75"/></a></Link>
            </div>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>		
                <ul className="menu">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/blog"><a>Blogs</a></Link></li>
                    <li><Link href="/team"><a>Team</a></Link></li>
                    <li><Link href="/#contact"><a>Contact</a></Link></li>
                </ul>
            </header>


    
    

        </>

    );
}
 
export default Navbar;