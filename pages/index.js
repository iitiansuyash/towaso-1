import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { bgWrap, typeBox, bgText } from '../styles/Home.module.css'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import TypeWrite from '../components/TypeWrite';

import React, { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../sanityClient";
import PostCard from "../components/PostCard"


import data from '../components/data';


export default function Home({ posts }) {
    const [index, setIndex] = useState(0);

  const handleClickPrev = () => {
    if (index === 0) return setIndex(data.length - 1);
    setIndex(index - 1);
  }

  const handleClickNext = () => {
    if(index === data.length - 1) return setIndex(0);
    setIndex(index + 1);
  }


//Blogs js
const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imageBuilder = imageUrlBuilder(sanityClient);

      setMappedPosts(
        posts.map((post) => {
          return {
            ...post,
            mainImage: imageBuilder
              .image(post.mainImage)
              .width(600)
              .height(300),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);












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
          <h4>Join Our Community To Make This World A Better Place</h4>
          <Link href="/#services">
            <div className="scroll-downs">
                    <div className="mousey">
                        
                        <div className="scroller"></div>
                    </div>
            </div>
          </Link>
        </div>
      </div>
 
    {/* --------------SERVICES SECTION START--------------- */}
    <section className="c-section" id="services">
      <h2 className="c-section__title"><span>Our Services</span></h2>
        <ul className="c-services">
              <li className="c-services__item">
                  <h3>Waste management </h3>
                  <p>The very process or a series of processes to address the problem of waste and its management in a positive manner  can be termed as waste management. The heaps of waste produced everyday very specifically highlight the importance to manage waste efficiently such that it creates future usage as well as does not harm the nature. We are committed  segregation, compaction of waste and transportation of waste with optimized route.</p>
              </li>
              <li className="c-services__item">
                  <h3>Reduce Reuse Recycle</h3>
                  <p>The three R's - reduce, reuse and recycle – all help to cut down on the amount of waste we throw away. They conserve natural resources, landfill space and energy. Plus, the three R’s save land and money that communities must use to dispose of waste in landfills. </p>
              </li>
              <li className="c-services__item">
                  <h3>Consultancy related to air, water and noise pollution</h3>
                  <p>Over time, with drastic rise in pollution in spheres of human life, the need to address the issues on a mass scale is seen. Not only today consultancy and education is required but it is also seen that the population must be provided information and equipments catering to the certain level of pollution they face everyday in their lives.We are providing consultancy for Air, Noise and Water pollution .</p>
              </li>
              <li className="c-services__item">
                  <h3>Biogas</h3>
                  <p>The anaerobic breakdown of animal waste and plant scraps by certain species of microorganisms produces a renewable and a clean source of energy ,in a compost or a man made setting,  termed as biogas.When biomass decomposes naturally, or at industrial scale in an anaerobic digester, biogas is produced.We install and help you operate the Bio-Gas plant that is easy to understand and operate in Urban Areas as well.</p>
              </li>
              <li className="c-services__item">
                  <h3>IT solutions for door to door garbage collectors</h3>
                  <p>Various countries and provinces have seen the grow of automatic garbage collectors with the enhancement of GPS and garbage locators centrally connected to the main branch via internet or intranet to facilitate smooth operations. IT in this sector can help stakeholders know whether the garbage collectors are full or after how long the garbage vehicle will reach the place. Connection will only expand the cleaning services as well as improve flexibility and efficiency. We are providing IT solutions for Door to Door garbage collection .</p>
              </li>
              <li className="c-services__item">
                  <h3>Vermi compost</h3>
                  <p> Vermi compost in its literal sense means worm farming. Vermicompost not only helps in enhancement of waste management but also replenish the soil for later usage for agriculture as well. It is  a very cost efficient method and can be built over little space and time as well .</p>
              </li>
        </ul>
    </section>
     {/* --------------SERVICES SECTION END--------------- */}

     {/* ---------------PARALLAX SECTION START---------------- */}
     {/* <main className="mainParallax"> */}
        {/* <section2 className="no-parallax">
            <h1>Fun fact:</h1>
        </section2> */}
        <section2 className="parallax bg">
            <h1>If it can’t be reduced, reused, repaired, rebuilt, refurbished, refinished, resold, recycled, or composted, then it should be restricted, designed or removed from production.</h1>
        </section2>
        {/* <section2 className="no-parallax">
            <h1>Have a nice day!</h1>
        </section2> */}
    {/* </main> */}
    
      {/* ---------------PARALLAX SECTION END---------------- */}
  

{/*============ BLOGSS ===================*/}
<br/>
<br/>
<div className="container">
<div className="section-title text-center">
            {/* <h4 className="h1"> <strong>Blogs </strong> </h4> */}
            <h2 className="display-1">Recent <span>Blogs</span></h2>
        </div>
        <br/>
      <div className="row">
        {mappedPosts &&
          mappedPosts.length &&
          mappedPosts.map((post, index) => (
            <PostCard data={post} key={index} />
            ))}
      </div>
      <div className="text-center">
        <a href="blog/">
          <button type="button"  className="fill"> <strong>More Blogs.</strong> </button>
        </a> 
      </div>
      
    </div>

<br/>
<br/>
{/*============ BLOGSS END ===================*/}









      {/* ---------------PRODUCTS START---------------- */}
      

<div className="shell" id="products">
<div className="row justify-content-center">
    <div className="col-xl-8 col-lg-8 text-center">
        <div className="section-title">
            {/* <h4 className="h1"> <strong>Portfolio </strong> </h4> */}
            <h2 className="display-1">Product <span>Portfolio</span></h2>
        </div>
    </div>
</div>
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="col-sm-10">

        <div className="wsk-cp-product">
          <div className="wsk-cp-img">
            <img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmgg9l-964453-Preview.webp" alt="Product" className="img-responsive" />
          </div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Ethnic</span>
            </div>
            <div className="title-product">
              <h3>OWC </h3>
            </div>
            <div className="description-prod">
              <p>The Onsite Waste Composter(OWC) helps in coverting the wet waste without any mess and hassle. The uniquely designed composter turn wet waste into valuable compost by controlling the temp rather than the other models which burns the wet waste into ash.</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="https://www.amazon.in/dp/B082KR95Z4?ref_=cm_sw_r_cp_ud_dp_5P294KB1D1H06DYFB5H4" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>
        </div>

      </div>
      <div className="col-md-3">
      <div className="col-sm-10">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img"><img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmgg9l-964453-Preview.webp" alt="Product" className="img-responsive" /></div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Introvert</span>
            </div>
            <div className="title-product">
              <h3>Turner</h3>
            </div>
            <div className="description-prod">
              <p>The Composter turner is designed operator friendly with high mixing power to provide sufficient aeration as well maintain the temp(mixing help in temperature control)  to wet waste heap. </p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>

      </div>
      </div>
      <div className="col-md-3">
      <div className="col-sm-10">

        <div className="wsk-cp-product">
          <div className="wsk-cp-img"><img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmgg9l-964453-Preview.webp" alt="Product" className="img-responsive" /></div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Beauty</span>
            </div>
            <div className="title-product">
              <h3>Biolave</h3>
            </div>
            <div className="description-prod">
              <p>Eco-friendly formulated toilet cleaner that cleans your toilet sheets naturally and less harmful when flushed down. Biolave contains no preservative, artificial colour artificial perfume. Its natural smell is sweet fruit like.</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="col-md-3">
      <div className="col-sm-10">

        <div className="wsk-cp-product">
          <div className="wsk-cp-img"><img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmgg9l-964453-Preview.webp" alt="Product" className="img-responsive" /></div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Drama</span>
            </div>
            <div className="title-product">
              <h3>Trommels</h3>
            </div>
            <div className="description-prod">
              <p>The specially designed trommels which are perfect for both wet and dry waste to  fit in the SWM plant  help in efficient separation of waste. The cost effective, easy to operate machine driving towards the aim of attaining the zero waste plants.</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="row">
      
    <div className="col-md-3">
    <div className="col-sm-10">

        <div className="wsk-cp-product">
          <div className="wsk-cp-img">
            <img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmgg9l-964453-Preview.webp" alt="Product" className="img-responsive" />
          </div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Ethnic</span>
            </div>
            <div className="title-product">
              <h3>Home composter </h3>
            </div>
            <div className="description-prod">
              <p>Onsource  wet waste processing at household level requires a easy to operate composter with small space installation and process wet waste into valuable compost heap. The composter set comes with a pair of gloves, cocopeat, a small set of garden tool to start your composting right away.</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>
    </div>
      </div>
      <div className="col-md-3">
      <div className="col-sm-10">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img"><img src="https://i.imgur.com/NVUivuK.png"   alt="Product" className="img-responsive" /></div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Accessory</span>
            </div>
            <div className="title-product">
              <h3>Tooth Brush </h3>
            </div>
            <div className="description-prod">
              <p>Bamboo tooth brush is consumable product that is made out bamboo and eco-friendly. The soft bristles provide complete oral hygiene. The round body design of the brush make it easy to hold. Bamboo toothbrush comes in 5 variants with adult and kid section.</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 199.00</span></div>
              <div className="wcf-right"><a href="https://www.amazon.in/dp/B08GS1R3PJ?_encoding=UTF8&psc=1&ref_=cm_sw_r_cp_ud_dp_RC10HGWZXNJK6MTVB3TB" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="col-md-3">
      <div className="col-sm-10">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img"><img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmgg9l-964453-Preview.webp" alt="Product" className="img-responsive" /></div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>Beauty</span>
            </div>
            <div className="title-product">
              <h3>Air Quality monitoring system </h3>
            </div>
            <div className="description-prod">
              <p>NCAP schemes allows the cities to install Air Quality Monitoring Systems to monitor the air quality and display it at public places. The low cost reliable AQMS comes with high quality digital display.</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs 500.00</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn"><i className="bi bi-cart"></i></a></div>
            </div>
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

    
    <div className={styles.container}>
        <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-8 text-center">
            <div className="section-title">
                {/* <h4 className="h1"> <strong>Clients </strong> </h4> */}
                <h2 className="display-1">Our Clients</h2>
                </div>
            </div>
        </div>
      <div className={styles.testimonial_container}>
        <div className={styles.slider}>
          <div className={styles.slider_images}>
            <div className={styles.image_wrapper}>
              <img src={`/${data[index].picture}`} />
            </div>
          </div>
          <div className={styles.slider_buttons}>
            <button onClick={() => handleClickPrev()}>
            <Image src="/icon-prev.svg" width="11px" height="32px"/>
              {/* <IconPrev /> */}
            </button>
            <button onClick={() => handleClickNext()}>
            <Image src="/icon-next.svg" width="12px" height="32px"/>
              {/* <IconNext /> */}
            </button>
          </div>
        </div>
        <div className={styles.testimonial}>
          <p className={styles.testimonial_content}>
          <strong> {`${data[index].testimonial0}`} <br/> </strong>
            {`${data[index].testimonial}`} <br/>
            {`${data[index].testimonial2}`} <br/>
            {`${data[index].testimonial3}`} <br/>
            {`${data[index].testimonial4}`}
          </p>
          <div className={styles.testimonial_author}>
            <p className={styles.testimonial_author_name}>{`${data[index].name}`}</p>
            <p className={styles.testimonial_author_job}>{`${data[index].job}`}</p>
          </div>
        </div>
      </div>
    </div>

  



  {/* --------------TESTIMONIALS SECTION END--------------- */}

  <section className="faq">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-8 text-center">
                    <div className="section-title">
                        {/* <h4><strong>FAQ's</strong></h4> */}
                        <h2 className="display-1">Frequently Asked <span>Questions</span></h2>
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
                                    <summary>What should i compost?</summary>
                                    <div className="faq__content">
                                    <p>There are lots of good reasons to compost. Save money, save resources, improve your soil and reduce your impact on the environment. Regardless of your reasons, composting is a win/win scenario. Good for you and good for the environment.Adding compost fertilizer to your garden will not only fertilize, it actually feeds your soil with a diversity of nutrients and microorganisms that will improve plant growth.</p>
                                    </div>
                                </details>

                                    <details>
                                    <summary>What type of waste can i give for compost?</summary>
                                    <div className="faq__content">
                                    <p>Almost any organic material is suitable for composting.you can give your kitchen waste,grass clippings, garden refuses and fruit & veggie scrap also. These things are waste for you and nature if not handled properly, but here in ToWaSo we use such materials to make useful products again for society. So help us to achieve a clean India goal by submitting your waste to us.</p>
                                    </div>
                                </details>
                                <details>
                                    <summary>How much time do I need to give in this activity?</summary>
                                    <div className="faq__content">
                                    <p>You need to spend only 5 minutes daily to manage your organic waste. If you get your segregation containers sorted out – it’s just a task of submitting the waste to our waste collector vehicles which is available near to your home.We'll also remind you when the vehicle is near by of your home using our tracking app.</p>
                                    </div>
                                </details>
                                </main2>
    
                                </div> 
    
                            <div className="col-xl-6 col-lg-6">
                            <main2>
                                <details open>
                                    <summary>What Should I Compost?</summary>
                                    <div className="faq__content">
                                    <p>There are lots of good reasons to compost. Save money, save resources, improve your soil and reduce your impact on the environment. Regardless of your reasons, composting is a win/win scenario. Good for you and good for the environment.Adding compost fertilizer to your garden will not only fertilize, it actually feeds your soil with a diversity of nutrients and microorganisms that will improve plant growth.</p>
                                    </div>
                                </details>

                                    <details>
                                    <summary>What Type Of Waste Can I Give For Compost?</summary>
                                    <div className="faq__content">
                                    <p>Almost any organic material is suitable for composting.you can give your kitchen waste,grass clippings, garden refuses and fruit & veggie scrap also. These things are waste for you and nature if not handled properly, but here in ToWaSo we use such materials to make useful products again for society. So help us to achieve a clean India goal by submitting your waste to us.</p>
                                    </div>
                                </details>
                                <details>
                                    <summary>How Much Time Do I Need To Give In This Activity?</summary>
                                    <div className="faq__content">
                                    <p>You need to spend only 5 minutes daily to manage your organic waste. If you get your segregation containers sorted out – it’s just a task of submitting the waste to our waste collector vehicles which is available near to your home.We'll also remind you when the vehicle is near by of your home using our tracking app. </p>
                                    </div>
                                </details>
                                </main2>
    
                                
    
                            </div>
    
                        </div>
    
                    </div>
    
                </div>
            </div>
        </div>

        {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fasme.iit.ism.ss&tabs=timeline&width=900&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="900" height="400" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
        
    </section>



    </>
  )
}

export const getServerSideProps = async (context) => {
  const query = encodeURIComponent(`*[ _type == "post" ][0...3]`);
  const url = `${`https://1pxwynxd.api.sanity.io/v2021-06-07/data/query/production?`}query=${query}`;

  const data = await fetch(url).then((res) => res.json());
  const posts = data.result;

  // if (!posts || !posts.length === 0) {
  //   return {
  //     props: {
  //       posts: [],
  //     },
  //   };
  // } else {
    return {
      props: {
        posts,
      },
    };
  }
  // }