import styles from '../styles/Team.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
import Head from 'next/head';

const Products = () => {
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

        {/* <div>
                <div className={styles.bgWrap}>
                </div>
                <div className={styles.typeBox}>
                            <h1>Product Portfolio.</h1>
                            <h4>Join our community to make this world a better place</h4>
                            <div className="scroll-downs">
                                <div className="mousey">
                                    
                                    <div className="scroller"></div>
                                </div>
                            </div>
                        </div>
            </div> */}

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

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
        
        </>
     );
}
 
export default Products;