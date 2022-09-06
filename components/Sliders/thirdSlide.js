import {React} from "react";
import Card from "../common/Card"

export default function ThirdSlide(){
    return (
        <>
       
         <h2 className="text-2xl space-x-2 font-serif font-black p-3">Watersports in Goa</h2>
        <div className="items-center flex flex-row overflow-x-auto overflow-y-hidden flex-nowrap space-x-4 mt-4 ml-4 mb-4" >
           
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </div>
        <div className="py-4 top-4 w-full flex  items-center justify-center bg-purple-900 text-white font-bold font-6xl rounded-full mx-4" >
           <a href="https://api.whatsapp.com/send?phone=9330234144&text=Hi"> <button className="primary" >Get Full Details On Your Phone Free</button></a>
        </div>
        </>
    )
}