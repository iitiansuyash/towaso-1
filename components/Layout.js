import Footer from "./Footer";
import Navbar from "./Navbar";
import Script from "next/script";
import Head from "next/head";

const Layout = ({children}) => {
    return ( 
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}
export default Layout;
