import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Header/Navbar";
import Slider from "../components/Header/Slider";
import FirstSlider from "../components/Sliders/firstSlider";
import SecondSlide from "../components/Sliders/secondSlide";
import ThirdSlide from "../components/Sliders/thirdSlide";
import Script from "next/script";


export default function Home() {
  return (
    <>
     <Head>
       <title>Scuba diving in goa</title>
       <meta name="description" content="Scuba diving in goa in afortable price"/>
       <meta name="og:title" content="Scuba diving in Goa"/>
       <link rel="icon"  href="/favicon.ico"/>
     </Head>
      <Navbar />
      <Slider />
      <FirstSlider />
      <SecondSlide />
      {/* <ThirdSlide /> */}
 <div id="elemID031021" style={{lineHeight:"16px",textAlign:"center",position:"relative",zIndex:100000}}>
 <Script type="text/javascript" src="//s2.tracemyip.org/tracker/lgUrl.php?random='+Math.random()+'&amp;stlVar2=1321&amp;rgtype=4684NR-IPIB&amp;pidnVar2=97326&amp;prtVar2=6&amp;scvVar2=12"></Script>
 <noscript><a title="traces website visits" href="https://www.tracemyip.org/">
  <img src="//s2.tracemyip.org/tracker/1321/4684NR-IPIB/97326/6/12/ans/" alt="traces website visits" referrerPolicy="no-referrer-when-downgrade" style={{border:"0px"}}/>
  </a></noscript></div>  
    </>
  );
}
