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
                            {/* <h1>Team.</h1> */}
                            {/* <h4>Join our community to make this world a better place</h4> */}
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
                            <figure className="image"><img src="https://lh3.googleusercontent.com/pw/AM-JKLVoXnVk7DX8yTEHzowFq-lb8FFo3Mz8D8hMG4QzBZIGfabrBwI7i7VRAbN0nON8_5ENMjK2yLn5FXEkqEPdnHK3_Lvgib7JPNB_enyvJ5ErZRTsPfU-I-aCfNCOAdxHxVflf5E0toNxRpYmz2ldBwgzXg=w751-h857-no?authuser=0" alt=""/>
                                <div className="social-links">
                                    <ul>
                                        
                                       <li><a href="https://www.linkedin.com/in/saurabhism16"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="#"><span className="bi bi-envelope"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Saurabh Kumar </a></h4>
                            <span className="designation">Founder and CEO</span>
                        </div>
                    </div>
                </div>

              
              <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><img src="https://lh3.googleusercontent.com/pw/AM-JKLWjtMRWfm4ax9H0Go7TOtNE6noggb9V3JZsfzzKCbSIoFQleOxkbIXgokLbWTnbWnl3BxL1BuPQmUEzXFLIzTnp5ZKWFieI2IaHEOoTapmtp8IFztnSEcB7dnph6U3J5tTw0WvVu4pKjWX9i1WtDYO7Mw=w751-h1001-no?authuser=0" style={{height:440}} alt=""/>
                                <div className="social-links">
                                    <ul>
                                        
                                       <li><a href="https://www.linkedin.com/in/soni-kumari-9308a2b0"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="mailto:Sonicrj03@gmail.com"><span className="bi bi-envelope"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Soni Kumari </a></h4>
                            <span className="designation">Co - Founder and COO</span>
                        </div>
                    </div>
                </div>
              <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt=""/>
                                <div className="social-links">
                                    <ul>
                                        
                                       <li><a href="www.linkedin.com/in/alok-skandh-63504113b"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="mailto:askandh@gmail.com"><span className="bi bi-envelope"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Alok Kumar Skandh</a></h4>
                            <span className="designation">Project Manager</span>
                        </div>
                    </div>
                </div>
            
           
                <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt=""/>
                                <div className="social-links">
                                    <ul>
                                        
                                       <li><a href="https://www.linkedin.com/in/mamta-jyoti-besra-a029"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="mailto:mamtajyotibesra96@gmail.com"><span className="bi bi-envelope"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Mamta Kumari </a></h4>
                            <span className="designation">Project Officer and Team Leader</span>
                        </div>
                    </div>
                </div>
              
              
              <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><img src="https://lh6.googleusercontent.com/D-o_NtDKd8-j26-tr2CsmDQv2mdQqeBOL84jpN3l7Gj2TMnLanFeGGsOnwzPze-pW37CB_CwGeCPPBKiRxo8=w1960-h3484-rw" style={{height:440}}  alt=""/>
                                <div className="social-links">
                                    <ul>
                                        
                                       <li><a href="https://www.linkedin.com/in/amrita-sakshi-538175225"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="mailto:sakshi169.mbr@gmail.com"><span className="bi bi-envelope"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Amrita Sakschi</a></h4>
                            <span className="designation">Project Co-ordinator</span>
                        </div>
                    </div>
                </div>


                <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><img src="https://lh3.googleusercontent.com/pw/AM-JKLV2OsKoZiSTrkuc3mDVWqKaYGBFKd3eHTcv6oMT5Vbsdyymff3pFADLF38qXops9mJdVTeobzy2ScCkcT7GeSJQ4dt8U_-p-dxWuCoQRNoyC017yPpa5uidcta0Hqu5AjVkBzwoTuxOU64HYnKB9vN7hw=w751-h565-no?authuser=0"  style={{height:440}} alt=""/>
                                <div className="social-links">
                                    <ul>
                                        
                                       <li><a href="https://www.linkedin.com/in/anshuman-sah-11321718a"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="mailto:Anshumansah3@gmail.com"><span className="bi bi-envelope"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Anshuman Sah</a></h4>
                            <span className="designation">Intern Product Development, Machinery</span>
                        </div>
                    </div>
                </div>

                <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><img src="https://lh3.googleusercontent.com/pw/AM-JKLXRGOs0Z7jOkbsTOD7eh7i8zGaS048E25A5sloxf7atLDjNqKvx3WEZ3YkqxFCo7PYgwoh4OFby7t5krz3Cd7kASkgG_ve8LVw_j-6r-3noU0LUQX1V5xZ8KpY1Ge4LaHidicBx__gKD2Sm_8Uq_MWXdw=w751-h565-no?authuser=0" style={{height:440}} alt=""/>
                                <div className="social-links">
                                    <ul>
                                        
                                       <li><a href="https://www.linkedin.com/in/ikshitij22/"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="mailto:meet2kshitij200@gmail.com"><span className="bi bi-envelope"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Kshitij Raj</a></h4>
                            <span className="designation">Product Manager Machinery</span>
                        </div>
                    </div>
                </div>






         
                <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image"><img src="https://lh3.googleusercontent.com/pw/AM-JKLX1ulbmtxmN3kapp34Ym_5jgtOlSbyicYzN0FJm9VLZvC_vdo1DXZkbR9UmagKFh2fNLxZ-9NqI5S8KhKI19PVu7GsU2BQ_B5x73Cn92WB1ofzo9sp936Jqk9aExIxlDgK8-51bDaT73na7I9WCVo5XyQ=w337-h299-no?authuser=0" style={{height:440}} alt=""/>
                                <div className="social-links">
                                    <ul>
                                        
                                       <li><a href="https://www.linkedin.com/in/abhilasha-das-989a34160"><span className="bi bi-linkedin"></span></a></li> 
                                       <li><a href="mailto:abhilashadas47@gmail.com"><span className="bi bi-envelope"></span></a></li> 
                                    </ul>
                                </div>
                            </figure>
                        </div>
                        <div className="caption-box">
                            <h4 className="name"><a href="#">Abhilasha Das </a></h4>
                            <span className="designation">Project Co-ordinator</span>
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