import Image from "next/image";
import { useEffect, useState } from "react";
import dudhSagar from "../../public/topActivity/dudhsagar.jpg";
import boatScuba from "../../public/topActivity/scuba.jpg";
import boatCruise from "../../public/topActivity/boat-cruise.webp";
import dinnerCruise from "../../public/topActivity/dinner-cruise.jpg";
import first1 from "../../public/topActivity/1.jpeg";
import northGoa from "../../public/otherActivity/north-goa.jpg";
import southGoa from "../../public/otherActivity/south-goa.jpg";
import flyingBoat from "../../public/otherActivity/flying-board.jpg";
import snowPark from "../../public/otherActivity/snow-park.jpg";
import heightJumping from "../../public/otherActivity/hieght-jimping.jpg";
import scenamaBeach from "../../public/otherActivity/scenama-beach-side.jpg";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import whatsappsvg from "../../public/images/whatapp-real.svg";
import data from "./data";
import Head from "next/head";

export default function Slider() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <Head>
      <title>Scuba diving in goa</title>
     </Head>
    <section className="w-full">
      <div className="w-full  flex justify-center -mb-5 space-x-2 mt-3">
      <a className="space-x-2 flex" href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process">
              
              <button className="bg-[#ad8a18] hover:bg-indigo-700 text-base py-1 px-2  flex justify-center items-center   rounded-full text-white font-bold" style={{fontSize:"0.875rem",}} >
               <Image src={whatsappsvg} alt="what's app icon"/> <span className="ml-2">Get Free Videos</span> 
              </button>
              <button className="bg-[#ad8a18] hover:bg-indigo-700  flex justify-center items-center text-base py-1 px-2  rounded-full text-white font-bold" style={{fontSize:"0.875rem"}} >
               
               <Image src={whatsappsvg} alt="what's app icon"/> <span className="ml-2">Guide Book On Phone</span> 
              </button>
            </a>
      </div>
      <div className="p-4 rounded-[10px] section-center w-full  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article
              key={id}
              className={position}
              style={{ paddingTop: "25rem", paddingLeft: "2rem" }}
            >
              <div className="image_slider">
                <Image src={image} alt={name} layout="fill" className="" />
              </div>
              <h4 className="animate-pulse text-xl absolute text-white z-50 opacity-100 font-bold ">
                {name}
              </h4>
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => setIndex(index - 1)}
          style={{ fontSize: "4rem", color: "white" }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => setIndex(index + 1)}
          style={{ fontSize: "4rem", color: "white", marginRight: "1.3rem" }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
    <div className="mt-3 w-full flex justify-center items-center">
    <a href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process">
              
              <button className="bg-[#ad8a18] hover:bg-indigo-700  flex justify-center items-center text-base py-1 px-2 rounded-full text-white font-bold w-full" style={{fontSize:"0.875rem"}}>
                
                <Image src={whatsappsvg} alt="what's app icon"/> <span className="ml-2">Get Top 10 Goa Adventure </span> 
              </button>
            </a>
    </div>
    </>
  );
}
