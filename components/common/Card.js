import next from "next";
import temp from "../../public/temp.jpg";
import Image from "next/image";
import star from "../../public/images/star.svg";
import star1 from "../../public/images/star-half.svg";
import location from "../../public/images/location.svg";
import clock from "../../public/images/clock.svg";
import styles from "../../styles/Home.module.css";
import Head from "next/head";

export default function Card({ name, price, title, rating, noPeople,dis,loc}) {
  return (
    <>   
     <Head>
      <title>Scuba diving in goa</title>
     </Head>
     <div className="">
      <div
        className={`rounded-xl w-80 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]`}
      >
        <div className="image_round_top">
          <Image src={name} height={180} width={320} alt={title} />
        </div>
        <div className="min-h-[220px]">
          <div className="flex flex-row space-x-4 px-4">
            <div className="flex flex-row space-x-2">
              <Image src={clock} width={12} height={20} alt="clock icon"/>
              <span>4n-5d</span>
            </div>
            <div className="flex flex-row space-x-2">
              <Image src={location} width={12} height={12} alt="location icon"/>
              <span>{loc}</span>
            </div>
          </div>

          <div className="px-6 py-2 flex flex-col">
            <div className="font-bold text-lg capitalize">{title}</div>
            <div>
              <div className="flex flex-row space-x-2 mt-2">
                <Image src={star} width={12} height={12} alt="start icon"/>
                <Image src={star} width={12} height={12} alt="start icon"/>
                <Image src={star} width={12} height={12} alt="start icon"/>
                <Image src={star} width={12} height={12} alt="start icon"/>
                <Image src={star1} width={12} height={12} alt="start icon"/>
                <span className="text-sm opacity-50	">{rating} Ratings</span>
              </div>
            </div>
            <div className="flex flex-row justify-between  py-1.5">
              <div className="flex flex-col">
                <div className="text-base line-through opacity-50	">
                  ₹ {price + dis} {noPeople}
                </div>
                <div className="text-lg	font-bold">
                  ₹ {price} {noPeople}
                </div>
              </div>
              <div>
                <a href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process">
                  <button className="bg-purple-500 hover:bg-purple-700 text-white  py-2 px-4 rounded font-book" style={{backgroundColor:"#ad8a18"}}>
                    view Details
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}
