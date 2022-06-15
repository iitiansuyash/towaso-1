import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { bgWrap, typeBox, bgText } from '../styles/Home.module.css'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import TypeWrite from '../components/TypeWrite';


export default function Home() {
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
        <div className={typeBox} style={{ filter: "brightness(100%)" }}>
            <TypeWrite />
            <br />
          <h4>Join Our Community To Make This World A Better Place.</h4>
        </div>
      </div>
 
    {/* --------------SERVICES SECTION START--------------- */}
    <section className="c-section" id="services">
      <h2 className="c-section__title"><span>Our Services</span></h2>
        <ul className="c-services">
              <li className="c-services__item">
                  <h3>Responsive Web Design</h3>
                  <p>We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes.</p>
              </li>
              <li className="c-services__item">
                  <h3>UX Auditing</h3>
                  <p>If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues.</p>
              </li>
              <li className="c-services__item">
                  <h3>Front End Development</h3>
                  <p>We are Front End masters with a deep focus on HTML, CSS. The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we&rsquo;re happy to do so.</p>
              </li>
              <li className="c-services__item">
                  <h3>UX Consultation</h3>
                  <p>If you don&rsquo;t know what kind of service to request from us, don&rsquo;t worry. We can help and see what fits your business and your budget.</p>
              </li>
              <li className="c-services__item">
                  <h3>Mobile Apps Design</h3>
                  <p>To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.</p>
              </li>
              <li className="c-services__item">
                  <h3>UX Research</h3>
                  <p>It&rsquo;s important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more. </p>
              </li>
        </ul>
    </section>
     {/* --------------SERVICES SECTION END--------------- */}

     {/* ---------------PARALLAX SECTION START---------------- */}
     <main className="mainParallax">
        {/* <section2 className="no-parallax">
            <h1>Fun fact:</h1>
        </section2> */}
        <section2 className="parallax bg">
            <h1>The sound that occurs when you snap your fingers is made by your middle finger hitting your palm!</h1>
        </section2>
        {/* <section2 className="no-parallax">
            <h1>Have a nice day!</h1>
        </section2> */}
    </main>
    
      {/* ---------------PARALLAX SECTION END---------------- */}
  


      {/* ---------------PRODUCTS START---------------- */}
      

<div className="shell">
<div className="row justify-content-center">
    <div className="col-xl-8 col-lg-8 text-center">
        <div className="section-title">
            <h4 className="h1"> <strong>Portfolio </strong> </h4>
            <h2 className="display-1">Products <span>Section</span></h2>
        </div>
    </div>
</div>
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img">
            <img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmgg9l-964453-Preview.webp" alt="Product" className="img-responsive" />
          </div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Ethnic</span>
            </div>
            <div className="title-product">
              <h3>My face not my heart</h3>
            </div>
            <div className="description-prod">
              <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img"><img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmgg9l-964453-Preview.webp" alt="Product" className="img-responsive" /></div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Introvert</span>
            </div>
            <div className="title-product">
              <h3>My face not my heart</h3>
            </div>
            <div className="description-prod">
              <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img"><img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmgg9l-964453-Preview.webp" alt="Product" className="img-responsive" /></div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Beauty</span>
            </div>
            <div className="title-product">
              <h3>My face not my heart</h3>
            </div>
            <div className="description-prod">
              <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img"><img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmgg9l-964453-Preview.webp" alt="Product" className="img-responsive" /></div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Drama</span>
            </div>
            <div className="title-product">
              <h3>My face not my heart cvf ggf gfg g</h3>
            </div>
            <div className="description-prod">
              <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img">
            <img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmgg9l-964453-Preview.webp" alt="Product" className="img-responsive" />
          </div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Ethnic</span>
            </div>
            <div className="title-product">
              <h3>My face not my heart</h3>
            </div>
            <div className="description-prod">
              <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img"><img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmgg9l-964453-Preview.webp" alt="Product" className="img-responsive" /></div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Introvert</span>
            </div>
            <div className="title-product">
              <h3>My face not my heart</h3>
            </div>
            <div className="description-prod">
              <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img"><img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmgg9l-964453-Preview.webp" alt="Product" className="img-responsive" /></div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Beauty</span>
            </div>
            <div className="title-product">
              <h3>My face not my heart</h3>
            </div>
            <div className="description-prod">
              <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-md-4 offset-md-7">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img"><img src="https://3.bp.blogspot.com/-iUes8qr4uC8/WVSvl6Wf_fI/AAAAAAAAAKs/JiTUUVvdbqEC_QGGaQhuVJiezIN3LIqEgCPcBGAYYCw/s1600/IMG_5367-bp.jpg" alt="Product" className="img-responsive" /></div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Drama</span>
            </div>
            <div className="title-product">
              <h3>My face not my heart cvf ggf gfg g</h3>
            </div>
            <div className="description-prod">
              <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>


      {/*---------------PRODUCTS END---------------- */}




    {/* --------------TESTIMONIALS SECTION START--------------- */}

    {/* <section className="testimonial text-center">
    <div className="container">

        <div className="heading white-heading">
            Testimonial
        </div>
        <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">

            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <div className="testimonial4_slide">
                        <img src="https://i.imgur.com/m2O0ykv.jpeg" className="img-circle img-responsive" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor risus diam, ac elementum est porta iaculis. Etiam in mi aliquet, ornare ante eu, molestie mi. Pellentesque a aliquet nibh.
                            In facilisis massa tortor, quis tristique sem malesuada ac. Aliquam convallis lacus </p>
                        <h4>Ravi Raushan</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="testimonial4_slide">
                        <img src="https://i.imgur.com/k7XVwpB.jpeg" className="img-circle img-responsive" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor risus diam, ac elementum est porta iaculis. Etiam in mi aliquet, ornare ante eu, molestie mi.
                            Pellentesque a aliquet nibh. In facilisis massa tortor, quis tristique sem malesuada ac. Aliquam convallis lacus </p>
                        <h4>Ramdas Gupta</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="testimonial4_slide">
                        <img src="https://i.imgur.com/BSK7iEv.jpeg" className="img-circle img-responsive" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor risus diam, ac elementum est porta iaculis. Etiam in mi aliquet, ornare ante eu, molestie mi. Pellentesque a aliquet nibh.
                            In facilisis massa tortor, quis tristique sem malesuada ac. Aliquam convallis lacus </p>
                        <h4>Disha Patani</h4>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#testimonial4" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    </div>
    </section> */}
  {/* --------------TESTIMONIALS SECTION END--------------- */}

  <section className="faq">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-8 text-center">
                    <div className="section-title">
                        <h4>FAQ's</h4>
                        <h2>Frequently Asked <span>Questions</span></h2>
                    </div>
                </div>
            </div>
    
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="accordion" id="accordionExample">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                            <main2>
                                <details open>
                                    <summary>What Is Web Design?</summary>
                                    <div className="faq__content">
                                    <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites.</p>
                                    </div>
                                </details>

                                    <details>
                                    <summary>What Is Graphic Design?</summary>
                                    <div className="faq__content">
                                    <p>Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration. </p>
                                    </div>
                                </details>
                                <details>
                                    <summary>What Is JavaScript?</summary>
                                    <div className="faq__content">
                                    <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. </p>
                                    </div>
                                </details>
                                </main2>
    
                                </div> 
    
                            <div className="col-xl-6 col-lg-6">
                            <main2>
                                <details open>
                                    <summary>What Is Web Design?</summary>
                                    <div className="faq__content">
                                    <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites.</p>
                                    </div>
                                </details>

                                    <details>
                                    <summary>What Is Graphic Design?</summary>
                                    <div className="faq__content">
                                    <p>Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration. </p>
                                    </div>
                                </details>
                                <details>
                                    <summary>What Is JavaScript?</summary>
                                    <div className="faq__content">
                                    <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. </p>
                                    </div>
                                </details>
                                </main2>
    
                                
    
                            </div>
    
                        </div>
    
                    </div>
    
                </div>
            </div>
        </div>
        
    </section>



    </>
  )
}
