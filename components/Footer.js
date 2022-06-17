import styles from '../styles/Footer.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v6ie5cf', 'template_jcy1dih', form.current, 'dSpz4RrPplRfoV7B2')
      .then((result) => {
          console.log(result.text);
          alert('Thankyou! Your Message has been delivered.');
      }, (error) => {
          console.log(error.text);
        alert('Sorry! Your Message could not be delivered. pl. mail your message to {Email}');
      });
      e.target.reset();

  };



    return ( 

	<>
	  <section className="contact" id="contact">
        <div className="container">
            <div className="heading text-center">
                <h2>Contact
                    <span> Us </span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    <br/>incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <div className="title">
                        <h3>Contact detail</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    </div>
                    <div className="content">
                       
                        <div className="info">
                            <i className="fas fa-mobile-alt"></i>
                            <h4 className="d-inline-block">PHONE :
                                <br/>
                                <span>+12457836913 , +12457836913</span></h4>
                        </div>
                        
                        <div className="info">
                            <i className="far fa-envelope"></i>
                            <h4 className="d-inline-block">EMAIL :
                                <br/>
                                <span>example@info.com</span></h4>
                        </div>
                        
                        <div className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            <h4 className="d-inline-block">ADDRESS :<br/>
                                <span>6743 last street , Abcd, Xyz</span></h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-7">

                    <form ref={form} onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-sm-6">
                                <input type="text" name="name" className="form-control" placeholder="Name" required/>
                            </div>
                            <div className="col-sm-6">
                                <input type="email" name="email" className="form-control" placeholder="Email" required/>
                            </div>
                            <div className="col-sm-12">
                                <input type="text" name="subject" className="form-control" placeholder="Subject" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea name="message" className="form-control" rows="5" id="comment" placeholder="Message" required></textarea>
                        </div>
                        <button className="btn btn-block" type="submit">Send Now!</button>
                    </form>
                </div>
            </div>
        </div>
    </section>  
  
  
    
   
    
    

  


	<footer id={styles.primaryFooter}>
	<div className={`container ${styles.footerWidgetArea}`}>
		<div className="row">
			<div className="col-md-4 p-3">
				<div className={styles.footerWidgetHeading}>
					<h4>ToWaSo</h4>
				</div>
				<p>We are providing consultancy for Air, Noise and Water pollution, and IT solutions for Door to Door garbage collection . Further we will extend our services to Life Cycle Assesment.</p>
			</div>
			<div className="col-md-4 p-3">
				<div className={styles.footerWidgetHeading}>
					
				<div className={styles.footerSocialIcon}>
                                <div className={styles.socialTitle}>Follow us</div>
                                <a href="https://www.facebook.com/towasoWM/"><img src="/fb.webp" className={styles.circleIcon}/></a>
                                <a href="https://www.instagram.com/towasowm/?hl=en"><img src="/ig.webp" className={styles.circleIcon}/></a>
                                <a href="https://www.linkedin.com/company/towaso/?originalSubdomain=in"><img src="/li.webp" className={styles.circleIcon}/></a>
                            </div>
				</div>
				</div>
			<div className="col-md-4 p-3">
				<div className={styles.footerWidgetHeading}>
					<h4>Quick Links</h4>
				</div>
				<ul className={styles.linkediting}>
                        <li><Link href="/contact"><a ><img src="/ar.webp" className={styles.fa} />Contact Us</a></Link></li>
                        <li><Link href="/team"><a ><img src="/ar.webp" className={styles.fa} />Our Team</a></Link></li>
                        <li><Link href="/"><a><img src="/ar.webp" className={styles.fa} />Web Development Team</a></Link></li>
	                  </ul>
			</div>
		</div>
	</div>
    <hr/>
	<div className={styles.copyrightArea}>
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className={`${styles.copyrightText} text-left`}>
                            <p>Designed by &copy;ToWaSo {new Date().getFullYear()}</p>
                        </div>
				</div>
			</div>
		</div>
	</div>
	
</footer>

</>
    );
}
 
export default Footer;