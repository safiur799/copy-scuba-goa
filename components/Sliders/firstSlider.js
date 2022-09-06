import { React } from "react";
import Card from "../common/Card";
import dudhSagar from "../../public/topActivity/dudhsagar.jpg";
import boatScuba from "../../public/topActivity/scuba.jpg";
import boatCruise from "../../public/topActivity/boat-cruise.webp";
import dinnerCruise from "../../public/topActivity/dinner-cruise.jpg";
import first1 from "../../public/topActivity/1.jpeg";
import star from "../../public/images/star.svg";
import star1 from "../../public/images/star-half.svg";
import Image from "next/image";
import right from "../../public/images/right.svg";
import northGoa from "../../public/otherActivity/north-goa.jpg";
import southGoa from "../../public/otherActivity/south-goa.jpg";
import flyingBoat from "../../public/otherActivity/flying-board.jpg";
import snowPark from "../../public/otherActivity/snow-park.jpg";
import heightJumping from "../../public/otherActivity/hieght-jimping.jpg";
import scenamaBeach from "../../public/otherActivity/scenama-beach-side.jpg";
import bestPackage from "../../public/topActivity/best-package.jpg";
import whatsappsvg from "../../public/images/whatapp-real.svg";
import ticket from "../../public/images/ticket.svg";
import video from "../../public/images/video.svg";

import Head from "next/head";
export default function FirstSlider() {
  return (
    <>
      <Head>
        <title>Scuba diving in goa</title>
      </Head>
      <div className="shadow-lg m-2 rounded-lg p-2 mt-10 text-gray-500 line-height-4 font-4xl">
        <h2 className="font-bold text-center text-2xl text-blue-500">
          {" "}
          Hello, Welcome to Goa Official Scuba diving & Water Sports Center
        </h2>
        <h1 className="text-purple-800 mt-3 mb-1 text-base">
          About Scuba Diving &#38; Water Sports in Goa.
        </h1>
        <p className="font-6xl">
          Scuba diving experience in goa should be on everyone’s list of
          must-to-do activities in Goa. Divesport is famous for providing one of
          a kind experience when it comes to water sports and scuba diving in
          Goa With a depth ranging from 10-15 meters.
        </p>
        <p>
          At Divesport we thrive to provide the best 1st scuba experience in
          goa. we have been here for 5+ years and serve thousands of travellers
          every season.
        </p>
      </div>
      <div className="shadow-lg m-2 rounded-lg">
        <div className="w-full items-center flex flex-col justify-center p-4">
          <h1 className="mt-5 text-center capitalize font-bold text-2xl text-blue-500">
            Special Offers on Scuba Diving Combo
          </h1>
          <h3 className="text-purple-800 mt-4 mb-1 text-base text-center">
            Raining Scuba Diving in Goa with WaterSports pakages
          </h3>
          <p className="text-black font-bold my-2 text-center">
            Scuba Diving in Goa +5 Watersports. Only at ₹{" "}
            <span className="line-through">4500/</span>- ₹3000/- person
          </p>

          <ul className="flex flex-row">
            <span className="font-bold mr-2 line-height-10">1034 Reviews</span>
            <li>
              <Image src={star} alt="star icon" />
            </li>
            <li>
              <Image src={star} alt="star icon" />
            </li>
            <li>
              <Image src={star} alt="star icon" />
            </li>
            <li>
              <Image src={star} alt="star icon" />
            </li>
            <li>
              <Image src={star1} alt="star icon" />
            </li>
          </ul>
          <div>
            <div className="image_slider">
              <Image src={boatScuba} alt=" goa scuba diving" />
            </div>
            <p className="text-center mb-2 text-lg text-blue-500 font-bold">
              scuba diving in goa
            </p>
          </div>
          <div>
            <h1 className="mb-3 font-bold text-purple-900 text-base line-height-16">
              HighLights ( 12 activities Included )
            </h1>
            <ol className="">
              <li className="flex space-x-3 mb-2">
                <Image height={25} width={30} src={right} alt="right icon" />
                <p className="text-base text-gray-600">Water Sports</p>
              </li>
              <li className="flex space-x-3 mb-2">
                <Image height={25} width={30} src={right} alt="right icon" />
                <p className="text-base text-gray-600">Scuba Diving</p>
              </li>
              <li className="flex space-x-3 mb-2">
                <Image height={25} width={30} src={right} alt="right icon" />
                <p className="text-base text-gray-600">
                  Scuba Training by Certified Trainer
                </p>
              </li>
              <li className="flex space-x-3 mb-2">
                <Image height={25} width={30} src={right} alt="right icon" />
                <p className="text-base text-gray-600">Jet Ski</p>
              </li>
              <li className="flex space-x-3 mb-2">
                <Image height={25} width={30} src={right} alt="right svg" />
                <p className="text-base text-gray-600">Banana Ride</p>
              </li>
              <li className="flex space-x-3 mb-2">
                <Image height={25} width={30} src={right} alt="right svg" />
                <p className="text-base text-gray-600">Bumper Ride</p>
              </li>
              <li className="flex space-x-3 mb-2">
                <Image height={25} width={30} src={right} alt="right svg" />
                <p className="text-base text-gray-600"> Speed Boat</p>
              </li>
              <li className="flex space-x-3 mb-2">
                <Image height={25} width={30} src={right} alt="right svg" />
                <p className="text-base text-gray-600">
                  Underwater HD Video GoPro8
                </p>
              </li>
              <li className="flex space-x-3 mb-2">
                <Image height={25} width={30} src={right} alt="right svg" />
                <p className="text-base text-gray-600">
                  Free Pickup/Drop from Hotel
                </p>
              </li>
              <li className="flex space-x-3 mb-2">
                <Image height={25} width={30} src={right} alt="right svg" />
                <p className="text-base text-gray-600">
                  Snacks, Water, Breakfast
                </p>
              </li>
              <li className="flex space-x-3 mb-2">
                <Image height={25} width={30} src={right} alt="right svg" />
                <p className="text-base text-gray-600">
                  Delicious Lunch Non-Veg/ Veg
                </p>
              </li>
              <li className="flex space-x-3 mb-2">
                <Image height={25} width={30} src={right} alt="right svg" />
                <p className="text-base text-gray-600">Equipment Rental</p>
              </li>
            </ol>
          </div>
          <div className="mt-4 flex flex-col space-y-4 w-full">
            <div className="flex w-full justify-center items-center">
            <a
              href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
              className="w-full flex justify-center items-center"
            >
              <button
                className="bg-[#ad8a18] flex justify-center items-center text-base py-1 hover:bg-pink-700 px-2 rounded-full text-white font-bold"
                style={{ fontSize: "0.875rem" }}
              >
                <Image src={ticket} alt="what's app icon" />{" "}
                <span className="ml-2"> Book Now</span>
              </button>
            </a>
            <a
              className="w-full flex justify-center items-center"
              href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
            >
              {" "}
              <button
                className="bg-[#ad8a18] flex justify-center hover:bg-pink-700 items-center text-base py-1 px-2 rounded-full text-white font-bold"
                style={{ fontSize: "0.875rem" }}
              >
                <Image src={video} alt="what's app icon" />{" "}
                <span className="ml-2"> Get More Videos</span>
              </button>
            </a>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
              className="w-full flex justify-center items-center "
            >
              <button
                className="bg-[#ad8a18] text-base py-1 flex justify-center items-center px-2 hover:bg-pink-700 rounded-full text-white font-bold "
                style={{ fontSize: "0.875rem" }}
              >
                <Image src={whatsappsvg} alt="what's app icon" />{" "}
                <span className="ml-2">Get Free Full Details</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <h2 className="animate-pulse mt-10 text-center capitalize font-bold text-2xl text-blue-500">
        Top Things To Do In Goa
      </h2>
      <div className="container pb-10 pt-5 px-3 flex flex-row overflow-x-auto overflow-y-hidden gap-3">
        <Card
          name={boatScuba}
          price={599}
          title="best scuba dive & 8+ water sports with island trip combo"
          rating={9484}
          noPeople="per Adult"
          dis={599 + 600}
          loc="Goa"
        />
        <Card
          name={first1}
          price={150}
          title="top 5 water sports combo at calangute beach"
          rating={984}
          noPeople="per Adult"
          dis={1000}
          loc="Goa"
        />
        <Card
          name={flyingBoat}
          price={3499}
          title="flyboarding , kayaking & sup boarding unlimited combo"
          noPeople="per person"
          dis={3000}
          loc="Goa"
        />
        <Card
          name={boatCruise}
          price={999}
          title="adventure party boat cruise with 5+ water sports in island"
          rating={948}
          noPeople="per Adult"
          dis={1000}
          loc="Goa"
        />
        <Card
          name={dinnerCruise}
          price={1800}
          title="dinner cruise in goa"
          rating={498}
          noPeople="per Adult"
          dis={500}
          loc="Goa"
        />
        <Card
          name={dudhSagar}
          price={1900}
          title="Dudhsagar Waterfall With Jeep jungle safari trip combo"
          rating={4948}
          noPeople="per Adult"
          dis={1000}
          loc="Goa"
        />
        <Card
          name={northGoa}
          rating={5478}
          price={4499}
          title="north goa all sightseeing by private car"
          noPeople="for 4pax for 1 day"
          dis={4000}
          loc="Goa"
        />
        <Card
          name={southGoa}
          rating={4698}
          price={4499}
          title="South goa all sightseeing by private car"
          noPeople="for 4pax for 1 day "
          dis={4000}
          loc="Goa"
        />

        <Card
          name={snowPark}
          rating={3498}
          price={599}
          title="snow park full fun party"
          noPeople="per person"
          dis={500}
          loc="Goa"
        />
        <Card
          name={heightJumping}
          rating={2498}
          price={3499}
          title="highest bungee jumping"
          noPeople="per person"
          dis={3000}
          loc="Goa"
        />
        <Card
          name={scenamaBeach}
          rating={8743}
          price={150}
          title="9d cinema beach side experience"
          noPeople="per person"
          dis={200}
          loc="Goa"
        />
      </div>
      <div className="px-6 py-4 shadow-lg flex justify-center items-center">
        <a href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process" style={{fontSize:"0.875rem"}}>
          <button className="bg-[#ad8a18] hover:bg-blue-700 flex justify-center items-center  text-base py-2 px-2 rounded-full text-white font-bold">
          <Image src={whatsappsvg} alt="what's app icon" />{" "}
          <span className="ml-2">Get Free Full Details</span>
          </button>
        </a>
      </div>
    </>
  );
}
