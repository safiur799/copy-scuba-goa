import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import ReactWhatsapp from "react-whatsapp";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import phone from "../../public/images/phone-logo.svg";
import whatsapp from "../../public/images/whatsapp-logo.svg";
import Head from "next/head";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
      <title>Scuba diving in goa</title>
      <meta
      name="keywords"
      content="keywords"
      />
      <meta
      charSet="utf-8"
      />
      <meta
      property="og:title"
      content="scuba diving in goa"
      />
      <meta
      name="description"
      content="goabestscubadiving is an online scuba diving booking in goa"
      
      />

     </Head>
    <div className="right-0 " style={{ margin: 0, padding: 0 }}>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 mt-3 cursor-pointer">
                <Link href="/">
                <Image 
                 
                  src={logo}
                  width={90}
                  height={90}
                  alt="Workflow"
                />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="https://api.whatsapp.com/send?phone=9330234144&text=Hi"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Activity
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Top HighLights in Goa
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About us
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact For Boarding
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=9330234144&text=Hi"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Get Details On Whatsapp
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/">
                <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </a>
                </Link>
              <Link  href="/scubaDive">
                <a
                 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Scuba Dive
                </a>
                </Link>
                <Link href="/termsCondition">
                <a
                  
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Terms&Condition
                </a>
                </Link>
{/* 
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Top HighLights in Goa
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact for boarding
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=9330234144&text=Hi"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Get Details On Whatsapp
                </a> */}
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-center  font-bold" style={{color:"#ad8a18"}}>
            Best Scuba Diving &#38; Water Sports in Goa
          </h1>
        </div>
        
      </header>
      <div className="fixed z-50 space-y-4 p-3 mr-2 rounded-full bg-green-700 hover:bg-green-900" style={{ width: "65px",
         height: "65px", bottom:"180px",textAlign:"center",right:"4px"}}>
         
          <a href="https://api.whatsapp.com/send?phone=9330234144&text=Its great to known about goabestscubadiving.in Please let me know further details of Goa Tour Package and discount booking process.">  <Image src={whatsapp} alt="whats app image"/></a>
            
      </div>
      <div className="fixed z-50 space-y-4 p-3 mr-2 rounded-full bg-green-700 hover:bg-green-900" style={{ width: "65px",
         height: "65px", bottom:"270px",textAlign:"center",right:"4px"}}>
         
          <a  href="tel:9330234144"><Image src={phone} style={{marginBottom:"1rem"}} alt="phone image"/></a>
      </div>
     
    </div>
    </>
  );
}

export default Navbar;
