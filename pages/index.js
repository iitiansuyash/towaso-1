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
          <h4>TOWASO - Home Page.</h4>
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
    
    
       
        
      
    

      {/* Blog page redirect button sectionnnn */}
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <br/> the Home Page of ToWaSo
        </h1>

        <p className={styles.description}>
          <Link href="/blog">Go to Blog</Link>
        </p>
      </main>
    </div>{/* Blog page redirect button sectionnnn */}


    </>
  )
}
