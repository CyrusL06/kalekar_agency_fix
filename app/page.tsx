"use client";
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import Link from "next/link";

import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import Services from "./services";
import { useRef } from "react";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import FAQS from "./faq";

export default function Home() {

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };


  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const serviceRef =       useRef<HTMLDivElement>(null);
//   const shopifyStoresRef = useRef<HTMLDivElement>(null);
//   const brandsRef = useRef<HTMLDivElement>(null);
  
  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", });
  }
  
  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  
  

  
  


    function scrollToService(): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesign}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToService={scrollToService}
        // scrollToShopifyStores={scrollToShopifyStores}
        // scrollToBrands={scrollToBrands}



      />
      {/* FOR PHONE */}
        {/* className="md:left-80 " */}
    {/* NO PHONE */}
      {/* <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" /> */}

    {/* PHONE */}
      <Spotlight className=" md:flex md:-top-80 left-80  " fill="white" />
      <div className="p-5 mx-auto relative
       z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className=" text-4xl pb-7 md:text-7xl px-6 text-center font-bold  bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
            {/* Conversion To Profits */}
          Create, grow, and <br /> scale your business
        </div>
        {/* <LampDemo/> */}




        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom tailored solutions for your business. crafted for optimal 
          conversions achieving result.
        </p>

        <Link
          href={"/book"}
          className="cursor-pointer 
          flex items-center 
          justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
        >
          Book a call
        </Link>

        <div className="w-full pt-20">
        <InfiniteMovingCardsDemo />
          {/* <SliderOne /> */}
          </div>
          <div ref={websiteDesignRef}>
        {/* <WebsiteDesign /> */}
        </div>
       
    <div ref={graphicDesignRef}>
        <GraphicDesign />
    </div>

        {/* <InfiniteMovingCardsDemo /> */}

    <div ref={serviceRef}>
        <Services />
    </div>
          
          <FAQS/>
        
      </div>
    </div>
  );
}


