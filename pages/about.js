// import styles from '../styles/Footer.module.css'
import styles from '../styles/About.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
import Head from 'next/head';

const About = () => {
    return ( 
        <>
            <Head>
                <title>ToWaSo-Total Waste Solution</title>
                <meta
                name="description"
                content="Save your surroundings with ToWaSo"
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <div className={styles.bgWrap}>
                </div>
                <div className={styles.typeBox}>
                            <h1>About Us.</h1>
                            <h4>Join our community to make this world a better place</h4>
            
                <div className="scroll-downs">
                    <div className="mousey">
                        
                        <div className="scroller"></div>
                    </div>
                </div>
            
                </div>
            </div>

            <section id="about">
                <div className={styles.container}>

                    <div className="container-fluid main-container">
                    <div className="row justify-content-center">
                            {/* <div className=""> */}
                                <div className="section-title">
                                    <h2 className="display-1">Message From The Founders Desk</h2>
                                </div>
                            {/* </div> */}
                        </div>
                        
                        <br/>
                         
                        <div className={styles.section }>
                        <div className="row">
                            <div className="col-xs-12 col-sm-2">
                                <img src="https://i.imgur.com/tRU0Xfn.jpeg" alt="harambe face" className="img-responsive" id="harambe-face"/>
                            </div>
                            <div className="col-xs-12 col-sm-9">
                                <div className="section text-justify">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </p>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                        <h3>Initial</h3>
                        <div className={styles.section }>
                        <p>
                        TOWASO (Total Waste Solution) is a start-up founded by two enthusiastic people Saurabh Kumar( IITian and AIESECer), Founder and CEO and Soni Kumari (Biologist, Postgraduate), Co - founder and COO which aims at providing a complete, effective and efficient solution to the waste generated in day to day life. 
                        </p>
                        <p>
                        TOWASO ensure END to End Municipal Solid Waste Management. TOWASO is interested in resource management, waste management and pollution reduction practices. TOWASO specializes in providing sustainable solutions for the waste collection, segregation, waste utilization through composting, Bio-Gas generation and recycling. Our byproducts of waste processing are valuable metals, Vermi (Organic) fertilizer, Bio-Gas, recycled paper and plastics. TOWASO doesn’t discriminate on the basis of race, color, gender, sexual orientation, creed and religion, national, ethnic, or social origin.
                        </p>
                        </div>
                        <h3>Our Mission</h3>
                        <div className={styles.section }>
                        <p>To provide utilization solutions to every matter before it is wasted to have a better and sustainable growth. </p>
                        </div>
                        <h3>Our Impact </h3>
                        <div className={styles.section }>
                        <p>
                        Our platform enables citizen to explore and develop resource management and waste management habits to have positive impact on the environment. <br/> Our unique way of IEC and awareness programs helps us achieving some impossible mile stones: 
                        </p>
                        <ul>
                            {/* <li>1. <strong>Harambe was born and raised in captivity.</strong> Animals raised their whole life by humans tend to be more calm. It's true that they will retain some of their wild behaviors even if they are raised this way, but...</li> */}
                            <li>1. <strong>Successfully Cleared GVP of more than 50 years.</strong>  </li>
                            <li>2. <strong>The Eco - brick initiative helps in reducing single use plastic.</strong></li>
                            <li>3. <strong>Our Dont mix campaigns helped ULBs achieving the segregation 2 times easier and faster.</strong>  </li>
                            <li>4. <strong>The waste management services helped the ULBs to achieve various recognition and certificates on  State and National level.</strong> </li>
                            <li>5. <strong>The natural and easy to apply innovative ideas help in reducing water pollution.</strong></li>
                        </ul>
                        <p>Having to pay the price because of your own incompetence? That's no problem (just <a href="https://www.youtube.com/watch?v=1BiGsu56ud4">Watch our Timeline</a>). </p>
                        </div>

                        <h3>Aim And Objectives</h3>
                        <div className={styles.section }>
                            <p>
                            We are committed to environmental improvement and prevention of pollution. We work with our customers, suppliers and the community to adopt procedures that -
                            </p>
                        <ul>
                        <li>•	utilize resources sustainably considering the need of present and future</li>
                        <li>•	reduce waste through innovative work practices and recycling practices </li>
                        <li>•	minimize environmental impacts by reduction of polluting substances produced </li>
                        <li>•	minimize the impact of our operations on the neighboring community </li>
                        <li>•	increase the use of environmentally acceptable materials, equipment and technology in place of those which are considered harmful </li>
                        <li>•	ensure that our suppliers follow acceptable environmental policies, and actively promote environmental awareness among staff, clients, customers and the general </li>
                        </ul>
                        <p>
                        We started researching innovations in the waste management and waste to energy arena and soon began expanding our products and services.
                        </p>
                        </div>

                        <h3>Timeline</h3>
                        <div className={styles.section }>
                        <ul>
                        <li><strong>May 27, 1999.</strong> Lorem ipsum lorem ipsum lorem</li>
                        <li><strong>September 18, 2014.</strong> Lorem ipsum lorem ipsum lorem</li>
                        <li><strong>May 28, 2016.</strong> Lorem ipsum lorem ipsum lorem</li>
                        </ul>
                        </div>
                    </div>
                </div>

            </section>
        </>
     );
}
 
export default About;