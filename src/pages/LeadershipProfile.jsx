import React, { useState } from 'react';
import { ChevronRight,Send,ArrowRight ,Mail,MapPin,Globe } from 'lucide-react';
import bannner from "../assets/servicesBanner1.png";
import tech from "../assets/leadershiptech.png";
import agent from "../assets/agent.png"
import Header from '../components/Header';
import price from "../assets/price.png";




export default function LeadershipProfilePage() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out! We will get back to you soon.');
        // Add your form submission logic here
    };
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
                        <Header />
            
             <section
                            className="relative bg-cover bg-center h-[730px] flex items-end justify-end text-white"
                            style={{
                                backgroundImage: `url(${bannner})`,
                                backgroundPosition: 'center center'
                            }}
                        >
                            {/* Dark Overlay */}
                            {/* <div className="absolute inset-0 "></div> */}
            
                            {/* Content */}
                            <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-wide text-white mb-8">
                                    Leadership Profile
                                </h1>
                            </div>
                        </section>
            

            {/* Leadership Profile Section */}
            <section className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Section Title */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3 inline-block border-b-4 border-teal-500 pb-1">
                            Leadership Profile
                        </h2>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            The consulting practice at <span className="font-semibold text-gray-900">MechStrat Global</span> is led by an industry professionals with over <span className="font-semibold text-gray-900">17+ years</span> of cross-functional experience across manufacturing, AI & Advanced Technology solutions.
                        </p>
                    </div>

                    {/* Professional Expertise Heading */}
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Professional Expertise</h3>

                    {/* Content Grid - Manufacturing Technologies */}
                    <div className="grid md:grid-cols-2 gap-12 mb-12 items-center bg-[#E7F5F6]">
                        {/* Left - Image */}
                        <div className="order-2 md:order-1">
                            <img
                                src={tech}
                                alt="Manufacturing Technologies"
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>

                        {/* Right - Content */}
                        <div className="order-1 md:order-2">
                            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Manufacturing Technologies:</h4>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3 ">•</span>
                                    <span>Metal Injection Molding (MIM).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3 ">•</span>
                                    <span>Investment Casting.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3 ">•</span>
                                    <span>Precision Machining.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3 ">•</span>
                                    <span>Laser Cladding.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3 ">•</span>
                                    <span>Surface Treatments.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3">•</span>
                                    <span>Rubber Processing Machines.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3 ">•</span>
                                    <span>Food Processing equipment.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3 ">•</span>
                                    <span>Warehouse Automation.</span>
                                </li>
                            </ul>
                            <button className="mt-8 text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                Know More <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Content Grid - AI Solutions */}
                    <div className="grid md:grid-cols-2 gap-12 mb-12 p-8     rounded-xl items-center bg-[#E7F5F6] ">
                        {/* Content (Left side) */}
                        <div className="order-1 ">
                            <h4 className=" text-2xl font-semibold text-gray-900 mb-6">Al Solutions & Advanced Digital Technology:</h4>
                            <ul className=" space-y-3 text-gray-700">
                                <li className="flex items-end">
                                    <span className="text-gray-900 mr-3 ">•</span>
                                    <span>Al-Driven Manufacturing Solutions.</span>
                                </li>
                                <li className="flex items-endt">
                                    <span className="text-gray-900 mr-3 ">•</span>
                                    <span>Predictive Analytics for Production & Sourcing.</span>
                                </li>
                                <li className="flex items-end">
                                    <span className="text-gray-900 mr-3 ">•</span>
                                    <span>Data-Driven Process Improvement.</span>
                                </li>
                                <li className="flex items-end">
                                    <span className="text-gray-900 mr-3 ">•</span>
                                    <span>Digital Smart Factory Solutions
.</span>
                                </li>
                                <li className="flex items-end">
                                    <span className="text-gray-900 mr-3 ">•</span>
                                    <span>Advanced Process Automation & Robotics.</span>
                                </li>
                             
                               
                         
                                
                            </ul>
                            <button className="mt-8 text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                Know More <ArrowRight size={18} />
                            </button>
                        </div>

                        {/* Image (Right side) */}
                        <div className="order-2">
                            <img
                                src={agent}
                                alt="Manufacturing Technologies"
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>



                    {/* Functions Section */}
                    <div className="bg-white p-6 rounded-lg">
                        <p className="text-gray-700">
                            <span className="font-semibold text-gray-900">+ Functions:</span> Production, Process Engineering, Application Engineering,
                            Business Development, Sales, Costing, and Strategy.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 mb-12 bg-[#E7F5F6] mt-4">
                        {/* Left - Image */}
                        <div className="order-2 md:order-1">
                            <img
                                src={price}
                                alt="Industry Exposure"
                                className="w-full h-96 object-cover rounded-lg shadow-md"
                            />
                        </div>

                        {/* Right - Content */}
                        <div className="order-1 md:order-2">
                            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Industry Exposure:</h4>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3 mt-1">•</span>
                                    <span>Automotive.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3 mt-1">•</span>
                                    <span>Industrial Engineering.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3 mt-1">•</span>
                                    <span>HVAC & Thermal Systems.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3 mt-1">•</span>
                                    <span>Aerospace & Defense.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3 mt-1">•</span>
                                    <span>Firearms.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-900 mr-3 mt-1">•</span>
                                    <span>Medical Devises & Equipment.</span>
                                </li>
                            </ul>
                            <button className="mt-8 text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                Know More <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                    <section className="bg-[#FAFBFB] py-20">
                        <div className="max-w-6xl mx-auto px-6">
                            {/* ================== SECTION HEADER ================== */}
                            <div className="mb-10">
                                <h2 className="text-4xl font-semibold text-gray-900 relative inline-block">
                                    Consulting Vision:
                                    <span className="absolute left-0 -bottom-2 w-24 h-[3px] bg-teal-500"></span>
                                </h2>
                                <p className="text-gray-600 text-base leading-relaxed max-w-3xl mt-6">
                                    Through <span className="font-semibold text-gray-900">MechStrat Global</span>, we fuse our{" "}
                                    <span className="font-semibold text-gray-900">passion for manufacturing excellence</span> with{" "}
                                    <span className="font-semibold text-gray-900">advanced AI technologies</span> to deliver measurable, sustainable
                                    business transformation.
                                </p>
                            </div>

                            {/* ================== CARDS SECTION ================== */}
                            <div className="relative flex items-center">
                                {/* Left Arrow */}
                                <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md">
                                    <ChevronRight className="rotate-180 text-gray-600" size={22} />
                                </button>

                                {/* Cards */}
                                <div className="flex justify-between gap-6 overflow-hidden w-full px-10">
                                    {[
                                        {
                                            title: "Built the Business",
                                            icon: (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                                />
                                            ),
                                        },
                                        {
                                            title: "Accelerated & Expanded the Growth",
                                            icon: (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                />
                                            ),
                                        },
                                        {
                                            title: "Operational & Digital Problem Solving",
                                            icon: (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                />
                                            ),
                                        },
                                        {
                                            title: "Global Value Chain Optimization",
                                            icon: (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                                />
                                            ),
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="flex-1 text-center">
                                            <div className="bg-teal-50 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-sm">
                                                <svg
                                                    className="w-10 h-10 text-teal-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    {item.icon}
                                                </svg>
                                            </div>
                                            <h4 className="font-semibold text-gray-900 text-base leading-snug">
                                                {item.title}
                                            </h4>
                                        </div>
                                    ))}
                                </div>

                                {/* Right Arrow */}
                                <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-teal-600 hover:bg-teal-700 rounded-full p-2 shadow-md">
                                    <ChevronRight className="text-white" size={22} />
                                </button>
                            </div>

                            {/* ================== PROGRESS DOTS ================== */}
                            <div className="flex justify-center gap-2 mt-8">
                                <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            </div>

                            {/* ================== FOOTER TEXT ================== */}
                            <div className="mt-12">
                                <p className="text-gray-700 leading-relaxed max-w-4xl">
                                    We believe that true transformation happens when business intelligence meets industrial expertise, and{" "}
                                    <span className="font-semibold text-gray-900">MechStrat Global</span> was founded to make that synergy possible
                                    across global markets.
                                </p>
                            </div>
                        </div>
                    </section>
                    

                </div>
                
                

            </section>
                <section className="bg-white py-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="font-semibold text-[36px]   text-[#111827] flex items-center justify-center text-center mb-2">
                            Let's Build Your Strategy for Growth
                        </h2>
                        <div className="w-24 h-1 bg-[#1695A3] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
                        {/* Left Side - Get in Touch */}
                        <div>
                            <h3 className="  text-2xl font-bold text-[#111827] mb-8">Get in Touch</h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#E5F3F4] p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#111827] mb-1">Email</h4>
                                        <a
                                            href="mailto:info@mechstratglobal.com"
                                            className="text-[#1695A3] hover:text-teal-700"
                                        >
                                            info@mechstratglobal.com
                                        </a>
                                    </div>
                                </div>

                                {/* Website */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#E5F3F4] p-3 rounded-lg">
                                        <Globe className="w-6 h-6 text-[#1695A3]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#111827] mb-1">Website</h4>
                                        <a
                                            href="https://www.MechStratGlobal.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-teal-600 hover:text-teal-700"
                                        >
                                            www.MechStratGlobal.com
                                        </a>
                                    </div>
                                </div>

                                {/* Locations */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#E5F3F4] p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#111827] mb-1">Locations</h4>
                                        <p className="text-gray-600">Bengaluru | Munich</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div>
                            <div className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-[#111827] font-medium mb-2">
                                        Name <span className="text-[#111827]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Company Field */}
                                <div>
                                    <label className="block text-[#111827] font-medium mb-2">
                                        Company <span className="text-[#111827]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your company"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-[#111827]text-gray-700 font-medium mb-2">
                                        Email <span className="text-[#111827]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@company.com"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="block text-[#111827] font-medium mb-2">
                                        Message <span className="text-[#111827]">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your needs..."
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-[#1695A3] hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    Schedule a Consultation
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                  <footer className="bg-[#1695A3] py-8 px-6">
                <div className="container mx-auto text-center">
                    <p className="text-white text-sm mb-2">
                        © 2025 · MechStrat Global. All rights reserved.
                    </p>
                    <p className="text-white/90 text-sm">
                        Business Strategy for a Smarter Manufacturing World
                    </p>
                </div>
            </footer>

        </div>
    );
}