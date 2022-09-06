import React from "react";
import Navbar from "./Header/Navbar";
import Image from "next/image";
// import boatScuba from "../../public/topActivity/scuba.jpg";
import boatScuba from "../public/topActivity/scuba.jpg";
import right from "../public/images/right.svg";
import ticket1 from "../public/images/ticket1.svg";
import clock from "../public/images/clock1.svg";
import swimming from "../public/images/swimmer.png";
import ticket from "../public/images/ticket.svg";
import whatsappsvg from "../public/images/whatapp-real.svg";
import star from "../public/images/star.svg";
import star1 from "../public/images/star-half.svg";
import Link from "next/link";
import first1 from "../public/topActivity/1.jpeg";
import boatTrip from "../public/topPakages/boat-trip.jpg";
import boatTrip1 from "../public/topPakages/boat-combo1.jpg";
import boatTrip2 from "../public/topPakages/boat-combo2.jpg";


const ScubaDivingLayout = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#97F0ED]">
        <h1
          className="w-full flex  justify-center items-center font-bold mt-4 text-gray-800"
          style={{ fontSize: "2.2rem" }}
        >
          Scuba Diving In Goa
        </h1>
        <p
          className="text-center space-y-2 mx-2 text-white font-bold mt-4"
          style={{ fontSize: "1.1rem" }}
        >
          Experience the best Water Sports in Goa. Enjoy your best time on Sea
          with Fun and Safe Water Sports Rides in Goa.
        </p>
        <div className="m-4 ">
          <Image
            src={boatScuba}
            className="rounded"
            alt="scuba diving image"
            layout="responsive"
          />
        </div>
        <div className="w-full flex justify-center items-center bottom-5">
        <a
              href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
              className="w-full flex justify-center items-center "
            >
          <button className="py-3 px-6 mb-4 bg-gray-800 text-white font-bold rounded-full">
            Get Details
          </button>
          </a>
        </div>
      </div>
      <div className="bg-[#e0fbf3]">
        <h2
          className="text-center mt-4 font-bold text-gray-700 "
          style={{ fontSize: "2.3rem" }}
        >
          Watersports in Goa Combo
        </h2>
        <p
          className="text-center font-bold text-gray-400 p-2"
          style={{ fontSize: "1.1rem" }}
        >
          Get Watersports in Goa which are thrilling and exciting. Enjoy
          Parasailing, Thrilling Jetski Ride, Bouncy Banana Ride, and Speed Boat
          ride.
        </p>
        <div className="m-4">
          <Image src={first1} alt="Jet ski" className="rounded" />
        </div>

        <div className="w-full flex justify-center items-center bottom-5">
        <a
              href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
              className="w-full flex justify-center items-center "
            >
          <button className="py-2 px-4 bg-gray-700 text-white font-bold mb-4 rounded-full">
            Get Details & Videos
          </button>
          </a>
        </div>
      </div>
      <div className="m-3 p-3 bg-gray-500 text-white relative rounded">
        <span className="right-2 p-1 absolute bg-red-900 text-white">
          BESTSELLING
        </span>
        <h2
          className="text-center mt-3 font-bold"
          style={{ fontSize: "2.4rem" }}
        >
          WaterSports in Goa Combo
        </h2>
        <p className="text-center font-bold">5 in 1 Watersports Combo</p>
      </div>
      <div className="flex w-full justify-center space-x-4">
        <span
          className="font-bold line-through text-gray-400"
          style={{ fontSize: "1.5rem" }}
        >
          RS 2500
        </span>
        <span
          className="font-bold text-gray-900"
          style={{ fontSize: "1.5rem" }}
        >
          Rs1800 per person
        </span>
      </div>
      <ul className=" flex flex-col justify-center items-start ml-44 text-gray-500 space-y-4 my-4">
        <li className="flex space-x-3 mb-2">
          <Image height={25} width={30} src={right} alt="right svg" />
          <p className="text-base text-gray-600">Parasailing with Dip</p>
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
          <p className="text-base text-gray-600">Jet Ski Ride</p>
        </li>
        <li className="flex space-x-3 mb-2">
          <Image height={25} width={30} src={right} alt="right svg" />
          <p className="text-base text-gray-600">Speed Boat Ride</p>
        </li>
        <li className="flex space-x-3 mb-2">
          <Image height={25} width={30} src={right} alt="right svg" />
          <p className="text-base text-gray-600">
            Equipments Related to Activities
          </p>
        </li>
        <li className="flex space-x-3 mb-2">
          <Image height={25} width={30} src={right} alt="right svg" />
          <p className="text-base text-gray-600">Water Sports Coordinator</p>
        </li>
      </ul>
      <div className="flex justify-center flex-col items-center">
      <a
              href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
              className="w-full flex justify-center items-center "
            >
        <button className="py-3 px-6 mb-4 bg-gray-800 text-white font-bold rounded-full">
          Book Now
        </button>
        </a>
        <span className="text-gray-500 " style={{ fontSize: "1.2rem" }}>
          Disacount Available on Pre-bookings only.
        </span>
      </div>
      <div className="bg-[#e0fbf3] p-3">
        <h2
          className="text-center mt-4 font-bold text-gray-700 "
          style={{ fontSize: "2.3rem" }}
        >
          Watersports Goa with Boat Trip Combo
        </h2>
        <p
          className="text-center font-bold text-gray-400 p-2"
          style={{ fontSize: "1.1rem" }}
        >
          Enjoy the Amazing Boat Trip to Watersports Location in Panjim. Get
          Watersports in Goa which are thrilling and exciting. Enjoy Kayaking
          and Rafting, Thrilling Jetski Ride, Bouncy Banana Ride, and Speed Boat
          ride. Enjoy All these water sports activities in goa with us and add
          the missing Adventure to your Goa Trip.
        </p>
        <div className="m-4">
          <Image src={boatTrip} alt="Jet ski" className="rounded" />
        </div>

        <div className="w-full flex justify-center items-center bottom-5">
        <a
              href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
              className="w-full flex justify-center items-center "
            >
          <button className="py-2 px-4 bg-gray-700 text-white font-bold mb-4 rounded-full">
            Get Details & Videos
          </button>
          </a>
        </div>
        <div className="m-3 p-3 bg-gray-500 text-white relative rounded">
          <span className="right-2 p-1 absolute bg-red-900 text-white">
            BESTSELLING
          </span>
          <h2
            className="text-center mt-3 font-bold"
            style={{ fontSize: "2.4rem" }}
          >
            WaterSports Goa with Boat Trip Combo
          </h2>
        </div>
        <div className="flex w-full justify-center space-x-4">
          <span
            className="font-bold line-through text-gray-400"
            style={{ fontSize: "1.5rem" }}
          >
            RS 3500
          </span>
          <span
            className="font-bold text-gray-900"
            style={{ fontSize: "1.5rem" }}
          >
            Rs2500 per person
          </span>
        </div>
        <ul className=" flex flex-col justify-center items-start ml-44 text-gray-500 space-y-4 my-4">
          <li className="flex space-x-3 mb-2">
            <Image height={25} width={30} src={right} alt="right svg" />
            <p className="text-base text-gray-600">Amazing Boat Trip</p>
          </li>
          <li className="flex space-x-3 mb-2">
            <Image height={25} width={30} src={right} alt="right svg" />
            <p className="text-base text-gray-600">Kayaking</p>
          </li>
          <li className="flex space-x-3 mb-2">
            <Image height={25} width={30} src={right} alt="right svg" />
            <p className="text-base text-gray-600">Rafting</p>
          </li>
          <li className="flex space-x-3 mb-2">
            <Image height={25} width={30} src={right} alt="right svg" />
            <p className="text-base text-gray-600">Banna Ride</p>
          </li>
          <li className="flex space-x-3 mb-2">
            <Image height={25} width={30} src={right} alt="right svg" />
            <p className="text-base text-gray-600">Jet Ski Ride</p>
          </li>
          <li className="flex space-x-3 mb-2">
            <Image height={25} width={30} src={right} alt="right svg" />
            <p className="text-base text-gray-600">Speed Boat Ride</p>
          </li>
          <li className="flex space-x-3 mb-2">
            <Image height={25} width={30} src={right} alt="right svg" />
            <p className="text-base text-gray-600">
              Equipments Related to Activities
            </p>
          </li>
          <li className="flex space-x-3 mb-2">
            <Image height={25} width={30} src={right} alt="right svg" />
            <p className="text-base text-gray-600">Water Sports Coordinator</p>
          </li>
        </ul>
        <div className="flex justify-center flex-col items-center">
        <a
              href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
              className="w-full flex justify-center items-center "
            >
          <button className="py-3 px-6 mb-4 bg-gray-800 text-white font-bold rounded-full">
            Book Now
          </button>
          </a>
          <span className="text-gray-500 " style={{ fontSize: "1.2rem" }}>
            Disacount Available on Pre-bookings only.
          </span>
        </div>
      </div>
      <div className="mt-8 space-y-8 flex flex-col justify-center items-center">
        
        <h1 className="text-center font-bold" style={{ fontSize: "2.3rem" }}>
          Book With Us
        </h1>
        <div className="m-6 flex flex-col rounded justify-center items-center bg-[#0201019C] text-white p-6">
          <Image src={ticket1} alt="instant slot booking" />
          <h1 className="font-bold text-blue-500" style={{ fontSize: "2rem" }}>
            Instant Slot Booking
          </h1>
          <p className="text-center" style={{ fontSize: "1.1rem" }}>
            You dont have to wait in line. Book your Slot at amazing prices from
            this website or on WhatsApp. Get Pre-booking offers on the Website.
          </p>
        </div>
        <div className="m-6 flex flex-col rounded justify-center items-center bg-[#0201019C] text-white p-6">
          <Image src={clock} alt="instant slot booking" />
          <h1 className="font-bold text-blue-500" style={{ fontSize: "2rem" }}>
            Activity Time
          </h1>
          <p className="text-center" style={{ fontSize: "1.1rem" }}>
            Our Watersports Coordinator will help you with activities and slot
            timings. You will be able to enjoy your 2-hour slot fully.
          </p>
        </div>
        <div className="m-6 flex flex-col rounded justify-center items-center bg-[#0201019C] text-white p-6">
          <Image
            src={swimming}
            alt="instant slot booking"
            width={70}
            height={70}
          />
          <h1 className="font-bold text-blue-500" style={{ fontSize: "2rem" }}>
            Thrilling Water Sports
          </h1>
          <p className="text-center" style={{ fontSize: "1.1rem" }}>
            Parasailing with dip, Banana Ride, Bumper Ride, Jetski and Speed
            Boat. We also provide kayaking, rafting, Zorbing Ball ride.
          </p>
        </div>
      </div>
      <h1
        className="font-bold text-gray-800 text-center mt-8"
        style={{ fontSize: "2.3rem" }}
      >
        Boat Party in Goa with All Watersports
      </h1>
      <div className="m-4 flex flex-col gap-8">
        <Image src={boatTrip1} alt="" className="rounded" />
        <Image src={boatTrip2} alt="" className="rounded" />
      </div>
      <h1 className="font-bold text-purple-900 text-center" style={{fontSize:"2.3rem"}}>Package Highlights</h1>
      <div className="scudingHeading space-y-4">
        <h1>Watersports & island trip Goa Timings</h1>
        <p>Timing: 09.00 AM - 01.30 PM | 12:30 PM- 6:00 PM</p>
        <h1>AC Vehicle Pickup & Drop</h1>
        <p>
          Get Picked Up by AC Bus or Traveller From Selected Location in Goa.
        </p>
        <h1>Boat Party nearby Island, Sightseeing</h1>
        <p>
          Our friendly staff will assist you in boarding the boat and the
          journey begins. We visit one islands on this trip and stop nearby for
          swimming, Watersports Rides, lunch and even a dolphin sighting.
        </p>
        <h1> Onboard DJ Music | Delicious lunch | Snacks </h1>
        <p>
          Dance at the centre of sea. Enjoy Delicious Buffet Lunch and Snacks.
          Complementary Soft Drinks & Beers. Enjoy Dance on our boat party
          nearby Island.{" "}
        </p>
        <h1>Watersports Rides | Swimming with Life Jacket</h1>
        <p>
          We have a number of water sports equipment with us on board. All
          Famous Watersports in Goa including Banana Ride, Bumper Ride, Jetski,
          Speed Boat, Zorbing Ball Ride.
        </p>
      </div>
      <div className="space-y-3 p-4">
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
              href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
              className="w-full flex justify-center items-center "
            >
              <button
                className="bg-[#ad8a18] text-base py-1 flex justify-center items-center px-2 hover:bg-pink-700 rounded-full text-white font-bold "
                style={{ fontSize: "0.875rem" }}
              >
                <Image src={whatsappsvg} alt="what's app icon" />{" "}
                <span className="ml-2">Get Details & Videos</span>
              </button>
            </a>
      </div>
      <div className="p-16 text-center">
        <h1 className="font-bold text-purple-600" style={{fontSize:"2.2rem"}}>Customer Experience</h1>
        <p className="mt-8 font-bold " style={{fontSize:"1.2rem"}}>We try to provide the best experience of activities and adventure</p>
        <div className="shadow-lg relative	 bg-slate-200 mt-8">
          <div  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sanjana Singh</h5>
    <ul className="flex justify-center items-center">
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
    <p className="font-normal text-gray-700 dark:text-gray-400">
						Water Sports were really thrilling. I enjoyed Parasailing and Jetski, Banana and bumper ride are also good. They will slide you over the waves and throw you into the sea. All Watersports are awesome.</p>
</div>
        </div>

        <div className="shadow-lg relative	 bg-slate-200 mt-8">
          <div  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sunny Kumar</h5>
    <ul className="flex justify-center items-center">
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
    <p className="font-normal text-gray-700 dark:text-gray-400">
						Our Morning Island trip was fun. We watched the Dolphins and Light House. Scuba diving on the island was a very great adventure for the first time. We enjoyed Parasailing with dips it was an Amazing Experience</p>
</div>
        </div>
        <div className="shadow-lg relative	 bg-slate-200 mt-8">
          <div  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">S R Reddy</h5>
    <ul className="flex justify-center items-center">
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
    <p className="font-normal text-gray-700 dark:text-gray-400">
						Scuba diving was a great experience with them. I was taken deep to 12 mt. and watched fishes and coral. Overall it was good service.</p>
</div>
        </div>
        <div className="shadow-lg relative	 bg-slate-200 mt-8">
          <div  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Archana Roy</h5>
    <ul className="flex justify-center items-center">
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
    <p className="font-normal text-gray-700 dark:text-gray-400">
						I was very excited for scuba diving and they deliver best package for me. Their service is good for given price range. I enjoyed my whole day with them over the arabian sea. There is music, activities and adventure.</p>
</div>
        </div>
        <div className="shadow-lg relative	 bg-slate-200 mt-8">
          <div  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Imran Khan</h5>
    <ul className="flex justify-center items-center">
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
    <p className="font-normal text-gray-700 dark:text-gray-400">Scuba Diving, rafting, parasailing, island trip, snorkeling & many more come and open your heart and live your life with the best adventure in Goa.</p>
</div>
        </div>
        <div className="shadow-lg relative	 bg-slate-200 mt-8">
          <div  className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Karan Agarwal</h5>
    <ul className="flex justify-center items-center">
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
    <p className="font-normal text-gray-700 dark:text-gray-400">Best affordable scuba diving in grand Island.</p>
</div>
        </div>

      </div>
      <h1 className="text-center text-purple-700 font-bold" style={{fontSize:"2rem"}}>Ask Us</h1>
      <p className="p-4 text-gray-600 text-center" style={{fontSize:"1.3rem"}}>We are here to help.Please feel free to contact our team</p>
      <a
              href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
              className="w-full flex justify-center items-center "
            >
              <button
                className="bg-[#ad8a18] text-base py-1 flex justify-center items-center px-2 hover:bg-pink-700 rounded-full text-white font-bold "
                style={{ fontSize: "0.875rem" }}
              >
                <Image src={whatsappsvg} alt="what's app icon" />{" "}
                <span className="ml-2">Chat With Us</span>
              </button>
            </a>

            <div className="m-2">
            <ul style={{fontSize:"1.2rem"}} className="space-y-4 mb-4">
                <li><span className="font-bold mr-2">Email:</span><a className="text-blue-500" href="mailto:safiurrahaman799@gmail.com">goabestscubadiving.in@gmail.com</a></li>
                <li><span className="font-bold mr-2">Address:</span>42/2b, 4th lane, Calangute , opp. Calangute KFC, Goa, Pin code:-403501</li>
                <li><span className="font-bold mr-2">Reservation:</span><a className="text-blue-500"  href="tel:9330234144">+91-9330234144</a></li>
            </ul>
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
                <span className="ml-2">Chat With Us</span>
              </button>
            </a>


         <div className="p-16 flex justify-center items-center space-x-2">
            <Link href="/">
                <a className="font-bold text-blue-500" style={{fontSize:"2.3rem"}} >Home</a>
            </Link>
            <Link href="/termsCondition">
                <a className="font-bold text-blue-500" style={{fontSize:"2.3rem"}} >Terms&Condition</a>
            </Link>
            </div>   
    </>
  );
};

export default ScubaDivingLayout;
