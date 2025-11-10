// // components/HeroSection.jsx
// import React from 'react';
// import bannner from "../assets/homeBanner.png";

// const HeroSection = () => {
//     return (
//         <section
//             className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
//             style={{ backgroundImage: `url(${bannner})` }} // अपनी इमेज का पाथ बदलें
//         >
//             <div className="absolute inset-0  opacity-70"></div> {/* Overlay */}
//             <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
//                 <h1
//                   className=" font-normal text-[50px] leading-[60px] tracking-[0] text-[#FFFFFF] text-center flex items-center justify-center"
//                 >
//                     Bridging manufacturing & AI Tech Solutions Through Strategic Consulting.
//                 </h1>

//                 <p className=" md:text-[31px]   text-[#FFFFFF]">
//                     At Mechstrat Global, We empower manufacturers to grow smarter and AI solution
//                     providers to scale faster — through strategy that unites innovation, cost efficiency,
//                     and execution excellence.
//                 </p>
//                 <button className="bg-[#189BAA] hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300">
//                     Schedule a Consultation &rarr;
//                 </button>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;

import React from 'react';
import { ArrowRight } from 'lucide-react';
import bannner from "../assets/homeBanner.png";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{ 
        backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop)`,
        backgroundPosition: 'center center'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-teal-900/60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-wide text-white mb-8">
          Bridging Manufacturing & AI Tech Solutions Through Strategic Consulting.
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-[#FFFFFF] leading-relaxed mb-10 max-w-4xl mx-auto font-light">
          At MechStrat Global, We empower manufacturers to grow smarter and AI solution
          providers to scale faster — through strategy that unites innovation, cost efficiency,
          and execution excellence.
        </p>

        <button className="bg-[#189BAA] hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
          Schedule a Consultation
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}