// import styles from '../styles/Footer.module.css'
import styles from '../styles/Team.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
import Head from 'next/head';

const Team = () => {
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
                            <h1>Team Members.</h1>
                            <h4>Join our community to make this world a better place</h4>
                        </div>
            </div>

        <section className="speakers-section">
        <div className="parallax-scene parallax-scene-2 anim-icons">
            <span data-depth="0.40" className="parallax-layer icon icon-circle-5"></span>
            <span data-depth="0.99" className="parallax-layer icon icon-circle-5"></span>
        </div>

        <div className="container">
            <div className="sec-title light text-center">
                <h2 className="display-1 ">Team</h2>
                {/* <h2 className="display-1">Our Team</h2> */}
            </div>

            <div className="row">
          
                <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt=""/>
                                <div className="social-links">
                                    <ul>
                                       <li><a href="#"><span className="bi bi-facebook"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-twitter"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-pinterest"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Lorem Ipsum </a></h4>
                            <span className="designation">simply dummy text</span>
                        </div>
                    </div>
                </div>

              
              <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt=""/>
                                <div className="social-links">
                                    <ul>
                                       <li><a href="#"><span className="bi bi-facebook"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-twitter"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-pinterest"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Lorem Ipsum </a></h4>
                            <span className="designation">simply dummy text</span>
                        </div>
                    </div>
                </div>
              <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt=""/>
                                <div className="social-links">
                                    <ul>
                                       <li><a href="#"><span className="bi bi-facebook"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-twitter"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-pinterest"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Lorem Ipsum </a></h4>
                            <span className="designation">simply dummy text</span>
                        </div>
                    </div>
                </div>
            
           
                <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt=""/>
                                <div className="social-links">
                                    <ul>
                                       <li><a href="#"><span className="bi bi-facebook"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-twitter"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-pinterest"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Lorem Ipsum </a></h4>
                            <span className="designation">simply dummy text</span>
                        </div>
                    </div>
                </div>
              
              
              <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt=""/>
                                <div className="social-links">
                                    <ul>
                                       <li><a href="#"><span className="bi bi-facebook"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-twitter"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-pinterest"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Lorem Ipsum </a></h4>
                            <span className="designation">simply dummy text</span>
                        </div>
                    </div>
                </div>

         
                <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt=""/>
                                <div className="social-links">
                                    <ul>
                                       <li><a href="#"><span className="bi bi-facebook"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-twitter"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-pinterest"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Lorem Ipsum </a></h4>
                            <span className="designation">simply dummy text</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
     );
}
 
export default Team;