// import React from 'react'
// import Image from 'next/image'
// import Patan from './../../public/patan.jpg'
// const page = () => {
//   return (
//     <div className='flex justify-between h-screen space-x-2'>
//     <div>
//       <Image alt='img' src={Patan} className='w-full h-full object-cover' />
//     </div>
//     <div>
//       <Image alt='img' src={Patan} className='w-full h-full object-cover' />
//     </div>
//     <div>
//       <Image alt='img' src={Patan} className='w-full h-full object-cover' />
//     </div>
//   </div>
//   )
// }
// export default page;
"use client"; 
import "./globals.css";
import Plx from "react-plx";

export default function page() {
  return (
    <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "easeIn",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%"
        }}
      >
        <img style={{ width: "100%" }} src="background.jpg" alt="background" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          display:'flex',
          justifyContent:'center',
          top: "26vw",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "30vw"
          }}
          src="text-img.webp"
          alt="Goonies"
        />
      </Plx>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        ></div>
      </div>
    </div>
  );
}





