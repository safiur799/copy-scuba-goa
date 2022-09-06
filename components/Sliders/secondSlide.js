import { React } from "react";
import Card from "../common/Card";
import northGoa from "../../public/otherActivity/north-goa.jpg";
import southGoa from "../../public/otherActivity/south-goa.jpg";
import flyingBoat from "../../public/otherActivity/flying-board.jpg";
import snowPark from "../../public/otherActivity/snow-park.jpg";
import heightJumping from "../../public/otherActivity/hieght-jimping.jpg";
import scenamaBeach from "../../public/otherActivity/scenama-beach-side.jpg";
import bestPackage from "../../public/topActivity/best-package.jpg";
import Image from "next/image";
import star from "../../public/images/star.svg";
import star1 from "../../public/images/star-half.svg";
import right from "../../public/images/right.svg";
import swimmer from "../../public/images/swimmer.png";
import funRides from "../../public/images/run-rides.jpg";
import award from "../../public/images/award.svg";
import tools from "../../public/images/tools.svg";
import booking from "../../public/images/booking.svg";
import preBooking from "../../public/images/preBooking.svg";
import userShield from "../../public/images/user-shield.png";
import tripadvisor from "../../public/images/tripadvisor.png";
import TripPlanner from "../../public/images/Blog-Header-Diver-Fish.jpg";
import whatsApp from "../../public/images/whatApp.svg";
import mail from "../../public/images/mail.svg";
import message from "../../public/images/message.png";
import message1 from "../../public/images/message.svg";
import phone from "../../public/images/phone.svg";
import bachelor from "../../public/topPakages/bachelor-party.jpg";
import honymoon from "../../public/topPakages/honymoon.jpg";
import family from "../../public/topPakages/family.jpg";
import student from "../../public/topPakages/students.jpg";
import reunion from "../../public/topPakages/reunion.jpg";
import Head from "next/head";
import Link from "next/link";




export default function SecondSlide() {
  return (
    <>
     <Head>
      <title>Scuba diving in goa</title>
     </Head>
      <div className="mt-12 shadow-lg m-2 rounded-lg">
        <div className="flex flex-col justify-center items-center w-full">
          <h1
            className="animate-pulse mt-10 text-center capitalize font-bold text-2xl text-blue-500"
            style={{ fontSize: "2rem" }}
          >
            BestSelling pakages
          </h1>
          <p
            className="my-3 text-center flex justify-center align-center w-full px-4 font-bold opacity-50"
            style={{ fontSize: "1.2rem" }}
          >
            Select the best scuba diving in goa package and get a special
            discount on pre-booking.
          </p>
          <h2
            className="my-3 text-center font-bold  px-2 py-2 opacity-60"
            style={{ fontSize: "1.4rem" }}
          >
            Scuba Diving in goa with Water Sports,Grand Island Unlimited Package
          </h2>
          <div>
            <div className="image_slider px-2">
              <Image src={bestPackage} alt="goa best packages"/>
            </div>
            <p className="text-center mb-2 text-lg text-blue-500 font-bold">
              Scuba Dingin &#38; water Sports at Grand Island
            </p>
          </div>
          <div>
            <p
              className="text-center px-2 py-4 font-bold opacity-75"
              style={{ fontSize: "1rem" }}
            >
              Scuba Diving in Goa at Grand Island +5 water sprots.ONly Starting
              From ₹ <span className="line-through">4500/-</span> ₹3200/- per
              person ( use Coupon FIRSTDIVE TO GET A FLAT 800/- discount )
            </p>
          </div>
        </div>
        <ul
          className="justify-center flex flex-row px-4 "
          style={{ fontSize: "1.3rem" }}
        >
          <span className="font-bold font-4xl mr-2 line-height-10">
            1034 Reviews
          </span>
          <li>
            <Image src={star} alt="scuba diving"/>
          </li>
          <li>
            <Image src={star} alt="scuba diving"/>
          </li>
          <li>
            <Image src={star} alt="scuba diving"/>
          </li>
          <li>
            <Image src={star} alt="scuba diving"/>
          </li>
          <li>
            <Image src={star1} alt="scuba diving"/>
          </li>
        </ul>
        <div>
          <h1 className="text-center mb-3 font-bold text-purple-900 text-base line-height-16">
            HighLights ( 8 activities Included )
          </h1>
          <ol className="pl-8">
            <li className="flex space-x-3 mb-2">
              <Image height={25} width={30} src={right} alt ="right svg"/>
              <p className="text-base text-gray-600">Water Sports</p>
            </li>
            <li className="flex space-x-3 mb-2">
              <Image height={25} width={30} src={right} alt ="right svg"/>
              <p className="text-base text-gray-600">Scuba Diving</p>
            </li>
            <li className="flex space-x-3 mb-2">
              <Image height={25} width={30} src={right} alt ="right svg"/>
              <p className="text-base text-gray-600">
                Scuba Training by Certified Trainer
              </p>
            </li>
            <li className="flex space-x-3 mb-2">
              <Image height={25} width={30} src={right} alt ="right svg"/>
              <p className="text-base text-gray-600">Jet Ski</p>
            </li>
            <li className="flex space-x-3 mb-2">
              <Image height={25} width={30} src={right} alt ="right svg"/>
              <p className="text-base text-gray-600">Banana Ride</p>
            </li>
            <li className="flex space-x-3 mb-2">
              <Image height={25} width={30} src={right} alt ="right svg"/>
              <p className="text-base text-gray-600">Bumper Ride</p>
            </li>
            <li className="flex space-x-3 mb-2">
              <Image height={25} width={30} src={right} alt ="right svg"/>
              <p className="text-base text-gray-600"> Speed Boat</p>
            </li>
            <li className="flex space-x-3 mb-2">
              <Image height={25} width={30} src={right} alt ="right svg"/>
              <p className="text-base text-gray-600">
                Underwater HD Video GoPro8
              </p>
            </li>
            <li className="flex space-x-3 mb-2">
              <Image height={25} width={30} src={right} alt ="right svg"/>
              <p className="text-base text-gray-600">
                Free Pickup/Drop from Hotel
              </p>
            </li>
            <li className="flex space-x-3 mb-2">
              <Image height={25} width={30} src={right} alt ="right svg"/>
              <p className="text-base text-gray-600">
                Snacks, Water, Breakfast
              </p>
            </li>
            <li className="flex space-x-3 mb-2">
              <Image height={25} width={30} src={right} alt ="right svg"/>
              <p className="text-base text-gray-600">
                Delicious Lunch Non-Veg/ Veg
              </p>
            </li>
            <li className="flex space-x-3 mb-2">
              <Image height={25} width={30} src={right} alt ="right svg"/>
              <p className="text-base text-gray-600">Equipment Rental</p>
            </li>
          </ol>
        </div>
        <div className="px-4 pb-4 flex flex-col justify-center mt-4 space-y-4">
          <a href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process">
            <button className="w-full flex justify-center bg-purple-700 py-2 px-4 rounded-full text-white font-bold">
              Get Full Details On Your Phone Free
            </button>
          </a>
          <a href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process">
            <button className=" flex justify-center bg-purple-700 py-2 px-2 rounded-full text-white font-bold w-full">
              Book Now{" "}
            </button>
          </a>
        </div>
      </div>
      <h2 className="animate-pulse mt-10 text-center capitalize font-bold text-2xl text-blue-500">
      Top 5 Affordable Packages In Goa
      </h2>
      <div className="mt-3 pb-4 items-center flex flex-row overflow-x-auto overflow-y-hidden flex-nowrap space-x-4  px-3 ">
        <Card
          name={honymoon}
          rating={9898}
          price={4999}
          title="Luxury Honeymoon Packages In Goa"
          noPeople="for 2pax for 5 day"
          dis={5000}
          loc="North Goa"
        />
        <Card
          name={bachelor}
          rating={4598}
          price={3199}
          title="Private Bachelor Party In Goa"
          noPeople="for 3pax To 30 Pax for 3 day "
          dis={3000}
          loc="North Goa"
        />
        <Card
          name={family}
          rating={9583}
          price={3599}
          title="Family Holiday Packages In Goa"
          noPeople="3 Pax To 30 Pax for 4d"
          dis={3000}
          loc="North Goa"
        />
        <Card
          name={student}
          rating={4325}
          price={3999}
          title="Goa Budget Tour Packages For Students"
          noPeople="for 5 Pax To 200 Pax "
          dis={4000}
          loca="South Goa"
        />
        <Card
          name={reunion}
          rating={3456}
          price={4299}
          title="Group Reunion Party In Goa"
          noPeople="for 5 Pax To 200 Pax "
          dis={4000}
          loc="North Goa"
        />
     
      </div>
      <div className="px-6 py-4 shadow-lg">
        <a href="https://api.whatsapp.com/send?phone=9330234144&text=Hi">
          <button className="bg-purple-900 text-base py-3 px-2 rounded-full text-white font-medium w-full">
            Get Full Details On Your Phone Free
          </button>
        </a>
      </div>
      <div className="mt-12 pb-4 shadow-lg m-2 rounded-lg">
        <div className="flex flex-col justify-center items-center bottom-20">
          <h1
            className="text-blue-500 font-bold px-2 py-4 bottom-4"
            style={{ fontSize: "2rem" }}
          >
            {" "}
            Get Best Experience{" "}
          </h1>
          <p
            className="font-bold text-center opacity-80 px-2"
            style={{ fontSize: "1.5rem" }}
          >
            Best service,We Strive To Provide Our Customers.
          </p>
        </div>
        <ul className="px-4 mt-4 space-y-4 ">
          <li className="flex space-x-4 py-4 items-center border-b-2 border-indigo-500">
            <div className="border border-solid border-gray-400 rounded-lg">
              <Image src={swimmer} width={45} height={40} alt="swimmer"/>
            </div>
            <span
              className="font-bold text-green-900"
              style={{ fontSize: "1.2rem" }}
            >
              Real scuba Experience
            </span>
          </li>
          <li className="flex space-x-4 py-4 items-center border-b-2 border-indigo-500">
            <div className="image_slider border border-solid border-gray-400 rounded-[10px]">
              <Image src={funRides} width={45} height={40} alt="funRides"/>
            </div>
            <span
              className="font-bold text-green-900"
              style={{ fontSize: "1.2rem" }}
            >
              Fun rides in WaterSports
            </span>
          </li>
          <li className="flex space-x-4 py-4 items-center border-b-2 border-indigo-500">
            <div className="border border-solid border-gray-400 rounded-lg">
              <Image src={award} width={52} height={40} alt="award svg"/>
            </div>
            <span
              className="font-bold text-green-900"
              style={{ fontSize: "1.2rem" }}
            >
              Profesional &#38; Expert Instructors
            </span>
          </li>

          <li className="flex space-x-4 py-4 items-center border-b-2 border-indigo-500">
            <div className="border border-solid border-gray-400 rounded-lg">
              <Image src={tools} width={45} height={35} alt="tools svg"/>
            </div>
            <span
              className="font-bold text-green-900"
              style={{ fontSize: "1.2rem" }}
            >
              Quality &#38; Best Equipments
            </span>
          </li>

          <li className="flex space-x-4 items-center border-b-2 border-indigo-500 py-4">
            <div className="border border-solid border-gray-400 rounded-lg">
              <Image src={preBooking} width={50} height={50} alt="booking svg"/>
            </div>
            <span
              className="font-bold text-green-900"
              style={{ fontSize: "1.2rem" }}
            >
              Instant Booking Confirmation on Phone
            </span>
          </li>

          <li className="flex space-x-4 items-center border-b-2 border-indigo-500 py-4">
            <div className="border border-solid border-gray-400 rounded-lg">
              <Image src={booking} width={50} height={50} alt="booking svg"/>
            </div>
            <span
              className="font-bold text-green-900"
              style={{ fontSize: "1.2rem" }}
            >
              Pre Booking Confirmation on Phone
            </span>
          </li>

          <li className="flex space-x-4 items-center border-b-2 border-indigo-500 py-4">
            <div className="border border-solid border-gray-400 rounded-lg">
              <Image src={userShield} width={50} height={50} alt="user sheild"/>
            </div>
            <span
              className="font-bold text-green-900"
              style={{ fontSize: "1.2rem" }}
            >
              Pre Booking Discount available
            </span>
          </li>

          <li className="flex space-x-4 items-center py-4">
            <div className="border border-solid border-gray-400 rounded-lg">
              <Image src={tripadvisor} width={50} height={50} alt="tripadvisor icon"/>
            </div>
            <span
              className="font-bold text-green-900"
              style={{ fontSize: "1.2rem" }}
            >
              Certified &#38; safe Activities
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h1
          className="mt-10 mb-5 text-center capitalize font-bold text-2xl text-blue-500"
          style={{ fontSize: "2.3rem" }}
        >
          Chat with Us
        </h1>
        <div className="m-2">
          <a
           href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
            className="w-full"
          >
            <div className="image_round_top">
              <Image src={TripPlanner} alt="what's app icon"/>
            </div>
            <div
              className="rounded-b-xl flex flex-col items-start justify-center   space-y-4 -mt-1.5 p-10"
              style={{ backgroundColor: "#1A2D73" }}
            >
              <div>
                <Image src={whatsApp} style={{ margin: "" }} alt="what's icon"/>
              </div>
              <h1
                className="font-bold  opacity-100"
                style={{
                  fontSize: "2rem ",
                  zIndex: "20",
                  color: "rgb(68, 244, 14)",
                }}
              >
                Trip Planner
              </h1>
              <p
                className="flex justify-center items-center w-full text-white"
                style={{ fontSize: "1.3rem" }}
              >
                Feel free to ask any query related to any package and Booking.
              </p>
              <button
                className="rounded-md text-white border-2 border-white py-4 px-8 cursor-pointer font-bold"
                style={{ fontSize: "1.2rem" }}
              >
                Chat Now
              </button>
            </div>
          </a>
        </div>
      </div>
      <div className="mt-10 flex flex-col space-y-4 justify-center items-center mb-10">
        <a
          href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
          className="w-full flex justify-center items-center p-6"
        >
          <div
            style={{ backgroundColor: "#1A2D73" }}
            className="p-6 rounded-full"
          >
            <Image src={message1} height={80} width={80} alt="message icon"/>
          </div>
        </a>
        <h2 className="font-bold" style={{ fontSize: "1.6rem" }}>
          Contact Us
        </h2>
        <p
          className="text-center px-3 capitalize"
          style={{ fontSize: "1.2rem" }}
        >
          We love to answer all your questions.Feel free to contact us.
        </p>
        <a
          href="tel:9330234144"
          className="w-full flex justify-center items-center p-6"
        >
          <div
            style={{ backgroundColor: "#1A2D73" }}
            className="p-6 rounded-full"
          >
            <Image src={phone} height={80} width={80} alt="phone icon"/>
          </div>
        </a>
        <a
          href="tel:9330234144"
          className="w-full flex justify-center items-center"
        >
          <span style={{ fontSize: "1.5rem" }}>+91-9330234144</span>
        </a>
        <a
         href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
          className="w-full flex justify-center items-center p-6"
        >
          <div
            style={{ backgroundColor: "#1A2D73" }}
            className="p-6 rounded-full"
          >
            <Image src={message1} height={80} width={80} alt="message icon"/>
          </div>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process"
          className="w-full flex justify-center items-center"
        >
          <span style={{ fontSize: "1.6rem" }} className="font-bold opacity-90">
            Trip Planner
          </span>
        </a>
        <a
          href="mailto:goabestscubadiving.in@gmail.com"
          className="w-full flex justify-center items-center"
        >
          <div
            style={{ backgroundColor: "#1A2D73" }}
            className="p-6 rounded-full"
          >
            <Image src={mail} height={80} width={80} alt="mail icon"/>
          </div>
        </a>
        <a
          href="mailto:safiurrahaman799@gmail.com"
          className="w-full flex justify-center items-center"
        >
          <span style={{ fontSize: "1.3rem" }}>goabestscubadiving.in@gmail.com</span>
        </a>
      </div>
      <div className="m-2">
            <ul style={{fontSize:"1.2rem"}} className="space-y-4 mb-4">
                <li><span className="font-bold mr-2">Email:</span><a className="text-blue-500" href="mailto:safiurrahaman799@gmail.com">goabestscubadiving.in@gmail.com</a></li>
                <li><span className="font-bold mr-2">Address:</span>42/2b, 4th lane, Calangute , opp. Calangute KFC, Goa, Pin code:-403501</li>
                <li><span className="font-bold mr-2">Reservation:</span><a className="text-blue-500"  href="tel:9330234144">+91-9330234144</a></li>
            </ul>
      </div>
      {/* <div className="">
        <h1>Terms & Conditions</h1>
        <p>Welcome to Goa Best Scuba Diving</p>
        <p>These terms and conditions outline the rules and regulations for the use of Divesport Website, located at https://goabestscubadiving.in</p>
        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Divesport if you do not agree to take all of the terms and conditions stated on this page.</p>
        <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of the provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
      </div> */}
      <div className="p-4 w-full flex justify-center items-center space-x-3 text-blue-600 font-bold font-6xl" style={{fontSize:"1.3rem"}}>
        <Link href="/termsCondition" className="font-bold text-blue-600"><a>Terms&Condition</a></Link>
        <Link href="/scubaDive" className="font-bold text-blue-600"><a>Scuba Dive</a></Link>
      </div>
    </>
  );
}
