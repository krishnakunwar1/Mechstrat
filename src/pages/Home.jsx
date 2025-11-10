// pages/HomePage.jsx (या जहां भी आप इसे रखना पसंद करें)

import React, { useState } from 'react';


import { Eye, CheckCircle,ArrowRight, Lightbulb, Cpu, Briefcase, Factory, Network, Target, Users, Globe, TrendingUp, Award, Send, Mail, MapPin } from 'lucide-react';
import HeroSection from '../components/heroSection'; // HeroSection का सही पाथ सुनिश्चित करें
import Header from '../components/Header'; // Header का सही पाथ सुनिश्चित करें
import about from "../assets/aboutAI.png";
import mg from "../assets/mgimage.png";
import LeaderAI from "../assets/LeaderAI.jpg";


export default function HomePage() {
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
        <div className="bg-gray-50 font-sans">
            <Header /> {/* Header यहां रेंडर होगा */}
            <HeroSection />

            {/* About Us Section */}
            <section className="bg-white py-16 px-6 overflow-hidden ">
                <div className="container mx-auto relative max-w-7xl">
                    {/* Image - positioned on left, slightly smaller from top and bottom */}
                    <div className="md:w-1/2 py-8">
                        <img
                            src={about}
                            alt="About Us - Manufacturing Gears"
                            className="rounded-lg shadow-2xl w-full h-auto"
                        />
                    </div>

                    {/* Text Box - overlapping the image */}
                    <div className="md:absolute md:top-16 md:left-[38%] md:right-0 mt-8 md:mt-0 md:pr-8 lg:pr-16">
                        <div className="bg-[#E7F5F6] p-8 md:p-10 rounded-lg shadow-xl max-w-2xl mx-auto">
                            <h2 className="font-[Poppins] font-normal text-[40px] leading-[52px] tracking-[0] text-[#111827] flex items-center mb-6 relative">
                                About Us
                                <span className="absolute bottom-[-5px] left-0 w-24 h-1 bg-[#1695A3]"></span>
                            </h2>
                            <div className="text-[#374151] font-medium text-[15px] space-y-4 leading-relaxed">
                                <p>
                                    MechStrat Global is a specialized consulting firm focused exclusively on the manufacturing ecosystem, partnering with both manufacturing companies and AI-driven solution providers that serve the industrial sector.
                                </p>
                                <p>
                                    We bring together deep mechanical domain knowledge, strategic business insight, and global market experience to help clients unlock performance, efficiency, and sustainable growth.
                                </p>

                                <p>
                                    At MechStrat Global, we don't just offer advice — we co-create transformation roadmaps, helping manufacturers optimize cost structures, strengthen sourcing ecosystems, and expand into new markets, while guiding AI innovators to accelerate adoption within manufacturing clusters.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Vision & Core Expertise Section */}
            <section className="bg-white py-16 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Vision & Expertise */}
                        <div className="space-y-8">
                            {/* Our Vision Box */}
                            <div className="bg-[#E7F5F6] rounded-2xl p-8 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <Eye className="w-8 h-8 text-[#0b3740]" />
                                    <h2 className="font-[Poppins] font-normal text-[32px] leading-[32px]  text-[#0b3740] flex items-center">Our Vision</h2>
                                </div>
                                <p className="font-[Poppins] font-normal text-[17px] leading-[26px] tracking-[0] text-[#0b3740] flex items-center">
                                    To be the trusted strategic partner for organizations shaping the next era of manufacturing — where technology and business intelligence converge to deliver sustainable growth.
                                </p>
                            </div>

                            {/* Our Core Expertise Box */}
                            <div className="bg-[#E7F5F6] rounded-2xl p-8 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <CheckCircle className="w-8 h-8 text-[#0b3740]" />
                                    <h2 className="font-[Poppins] font-normal text-[32px] leading-[32px] text-[#0b3740] flex items-center">Our Core Expertise</h2>
                                </div>

                                <h3 className="font-[Poppins] font-normal  text-[#000000] text-[20px] leading-[26px]  text-[#0b3740] flex items-center mb-6">
                                    Bridging Manufacturing to the Future
                                </h3>

                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-teal-600 text-xl mt-1">•</span>
                                        <span className="text-[#0b3740] text-base">Accelerated Market Penetration</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-teal-600 text-xl mt-1">•</span>
                                        <span className="text-[#0b3740] text-base">Smart Factory Transformation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-teal-600 text-xl mt-1">•</span>
                                        <span className="text-[#0b3740] text-base">Business Problem Solving & Growth Consulting</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-teal-600 text-xl mt-1">•</span>
                                        <span className="text-[#0b3740] text-base">Tech Investment Validation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-teal-600 text-xl mt-1">•</span>
                                        <span className="text-[#0b3740] text-base">Ecosystem & Partnership Enablement</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column - Image with Overlay Graphics */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[600px]">
                            <img
                                src={mg}
                                alt="Manufacturing & AI"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Graphics */}

                        </div>
                    </div>
                </div>
                <footer className="bg-white  py-10 px-6 text-center">
                    <div className="container mx-auto">
                        <p className="text-lg font-semibold text-[#111827] mb-4">
                            Mechstrat Global – Business Strategy for a Smarter Manufacturing World.
                        </p>
                        <p className="text-gray-400 text-sm">
                            Leading manufacturers and technology innovators to scale, compete, and lead globally.
                        </p>
                    </div>
                </footer>
            </section>
            <section className="bg-[#FAFBFB] py-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className=" font-normal text-[#111827] text-[50px] leading-[40px] flex items-center justify-center text-center mb-2">Leadership Profile</h2>
                        <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
                    </div>

                    {/* Experience Box */}
                    <div className="bg-[#E7F5F6] rounded-lg p-8 mb-8 shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                            <Briefcase className="w-6 h-6 text-teal-600" />
                            <h3 className=" font-[Poppins] text-2xl font-semibold text-[#111827]">Experience</h3>
                        </div>
                        <p className="font-[Poppins]  text-[#374151] text-[17px] ">
                            Our leadership team brings decades of combined experience in the manufacturing sector, having worked with Fortune 500  <br />
                            companies, innovative  <br /> startups, and global technology leaders. We have successfully guided organizations through complex transformations and
                            strategic challenges across multiple continents.
                        </p>
                    </div>

                    {/* Two Column Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Manufacturing Technologies Box */}
                        <div className="bg-[#E5F3F4] rounded-lg p-8 shadow-md">
                            <div className="flex items-center gap-3 mb-6">
                                <Cpu className="w-6 h-6 text-teal-600" />
                                <h3 className=" font-[Poppins] text-[24px] font-semibold text-[#111827]">Manufacturing Technologies:</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-gray-700">
                                    <span className="text-teal-600 mt-1">•</span>
                                    <span>Metal Injection Molding (MIM),</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <span className="text-teal-600 mt-1">•</span>
                                    <span>Investment Casting,</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <span className="text-teal-600 mt-1">•</span>
                                    <span>Precision Machining</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <span className="text-teal-600 mt-1">•</span>
                                    <span>Laser Cladding</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <span className="text-teal-600 mt-1">•</span>
                                    <span>Surface Treatments</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <span className="text-teal-600 mt-1">•</span>
                                    <span>Rubber Processing Machines</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <span className="text-teal-600 mt-1">•</span>
                                    <span>Food Processing equipment</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <span className="text-teal-600 mt-1">•</span>
                                    <span>Warehouse Automation.</span>
                                </li>
                            </ul>
                        </div>

                        {/* AI Solutions Box */}
                        <div className="bg-[#E5F3F4] rounded-lg p-8 shadow-md">
                            <div className="flex items-center gap-3 mb-6">
                                <Lightbulb className="w-6 h-6 text-teal-600" />
                                <h3 className="text-xl font-semibold text-gray-800">AI Solutions & Advanced Digital Technology:</h3>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-gray-700">
                                    <span className="text-teal-600 mt-1">•</span>
                                    <span>AI-Driven Manufacturing Solutions</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <span className="text-teal-600 mt-1">•</span>
                                    <span>Predictive Analytics for Production & Sourcing</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <span className="text-teal-600 mt-1">•</span>
                                    <span>Data-Driven Process Improvement</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <span className="text-teal-600 mt-1">•</span>
                                    <span>Digital Smart Factory Solutions</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700">
                                    <span className="text-teal-600 mt-1">•</span>
                                    <span>Advanced Process Automation & Robotics</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Consulting Vision Box */}
                    <div className="bg-[#E5F3F4] rounded-lg p-8 shadow-md">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Left Content */}
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Consulting Vision:</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Through Mechstrat Global , we fuse our passion for Manufacturing excellence with Advanced AI technologies to deliver measurable,
                                    sustainable business transformation.
                                </p>
                                <p className="text-gray-800 font-semibold mb-4">Our Aim is to :</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <span className="text-teal-600 mt-1">•</span>
                                        <span>Built the Business</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <span className="text-teal-600 mt-1">•</span>
                                        <span>Accelerated & Expand the Growth</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <span className="text-teal-600 mt-1">•</span>
                                        <span>Support Operation Excellence</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right Image */}
                            <div className="md:w-64 flex-shrink-0">
                                <img
                                    src={LeaderAI}
                                    alt="AI Technology"
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-16 px-6">
                <div className="container mx-auto max-w-7xl">
                    {/* Heading */}
                    <div className="text-center mb-4">
                        <h2 className=" font-normal text-[50px] leading-[40px] tracking-[0] text-gray-800 text-center flex items-center justify-center mb-2">
                            Service Offerings
                        </h2>

                        <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
                    </div>

                    {/* Description */}
                    <p className="font-[Inter] font-normal text-[20px] leading-[28px] tracking-[0] text-center text-gray-700 max-w-4xl mx-auto mb-12 flex items-center justify-center">
                        At MechStrat Global, we serve two complementary client groups: Manufacturing Companies seeking business growth,
                        cost optimization, and sourcing excellence, and AI-Based & Advanced Solution Providers targeting the manufacturing ecosystem.
                    </p>

                    {/* Three Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Manufacturing Companies Card */}
                        <div className="bg-[#E7F5F6]  rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-[#1695A3] p-3 rounded-lg">
                                    <Factory className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-[Poppins] font-semibold text-[20px] leading-[28px] tracking-[0] text-[#111827] flex items-center">
                                    Manufacturing<br />Companies
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <span className="text-[#1695A3] font-bold flex-shrink-0">1.</span>
                                    <p className="font-[Poppins] font-normal text-[17px] leading-[26px] tracking-[0] text-[#374151] flex items-center">Business Consulting & Growth Strategy</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[#1695A3] font-bold flex-shrink-0">2.</span>
                                    <p className="font-[Poppins] font-normal text-[17px] leading-[26px] tracking-[0] text-[#374151] flex items-center">Manufacturing Process & Capex Optimization</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[#1695A3] font-bold flex-shrink-0">3.</span>
                                    <p className="font-[Poppins] font-normal text-[17px] leading-[26px] tracking-[0] text-[#374151] flex items-center">Business Problem Solving & Transformation</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[#1695A3] font-bold flex-shrink-0">4.</span>
                                    <p className="font-[Poppins] font-normal text-[17px] leading-[26px] tracking-[0] text-[#374151] flex items-center">Strategic Sourcing & Supply Chain Consulting</p>
                                </div>
                            </div>

                            <button className="mt-8 text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                Learn More <ArrowRight size={18} />
                            </button>
                        </div>

                        {/* AI Solution Providers Card */}
                        <div className="bg-[#E7F5F6]  p-6 shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-[#1695A3] p-3 rounded-lg">
                                    <Cpu className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-[Poppins] font-semibold text-[20px] leading-[28px] tracking-[0] text-[#111827] flex items-center">
                                    AI Solution Providers
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <span className="text-[#1695A3] font-bold flex-shrink-0">1.</span>
                                    <p className="font-[Poppins] font-normal text-[17px] leading-[26px] tracking-[0] text-[#374151] flex items-center">Go-to-Market (GTM) Strategy for AI-Based Manufacturing Solutions</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[#1695A3] font-bold flex-shrink-0">2.</span>
                                    <p className="font-[Poppins] font-normal text-[17px] leading-[26px] tracking-[0] text-[#374151] flex items-center">Market Access & Partnership Development</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[#1695A3] font-bold flex-shrink-0">3.</span>
                                    <p className="font-[Poppins] font-normal text-[17px] leading-[26px] tracking-[0] text-[#374151] flex items-center">Business Strategy & Commercial Scaling</p>
                                </div>
                            </div>
                           <button className="mt-8 text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                Learn More <ArrowRight size={18} />
                            </button>
                        </div>

                        {/* Technology Solution Providers Card */}
                        <div className="bg-[#E7F5F6] border-2  p-6 shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-[#1695A3] p-3 rounded-lg">
                                    <Network className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-[Poppins] font-semibold text-[20px] leading-[28px] tracking-[0] text-[#111827] flex items-center">
                                    Technology Solution<br />Providers
                                </h3>

                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <span className="text-[#1695A3] font-bold flex-shrink-0">1.</span>
                                    <p className="font-[Poppins] font-normal text-[17px] leading-[26px] tracking-[0] text-[#374151] flex items-center">Go-to-Market and Localization Strategy</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[#1695A3] font-bold flex-shrink-0">2.</span>
                                    <p className="font-[Poppins] font-normal text-[17px] leading-[26px] tracking-[0] text-[#374151] flex items-center">Partnership and Ecosystem Development</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-[#1695A3] font-bold flex-shrink-0">3.</span>
                                    <p className="font-[Poppins] font-normal text-[17px] leading-[26px] tracking-[0] text-[#374151] flex items-center">Business Consulting for Growth and Expansion</p>
                                </div>
                            </div>
                            <button className="mt-8 text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                Learn More <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-gray-50 py-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-[#111827] font-normal text-[50px]  flex items-center justify-center text-center mb-2">Why MechStrat Global?</h2>
                        <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
                    </div>

                    {/* Cards Grid */}
                    <div className="space-y-8">
                        {/* First Row - 3 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Exclusive Manufacturing Focus */}
                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="bg-[#E5F3F4] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <Target className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-xl  text-[#111827] mb-3">
                                    Exclusive Manufacturing Focus
                                </h3>
                                <p className="text-[#374151] leading-relaxed">
                                    Specialized expertise exclusively in the manufacturing ecosystem
                                </p>
                            </div>

                            {/* Dual Expertise */}
                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="bg-[#E5F3F4] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <Users className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-xl  text-[#111827] mb-3">
                                    Dual Expertise
                                </h3>
                                <p className="text-[#37415 leading-relaxed">
                                    Serving both manufacturers and AI/technology providers
                                </p>
                            </div>

                            {/* Global Experience */}
                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="bg-[#E5F3F4] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <Globe className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-[20px] font-regular text-[#111827] mb-3">
                                    Global Experience
                                </h3>
                                <p className="text-[#37415 leading-relaxed">
                                    Proven track record across India, Europe, and Asia
                                </p>
                            </div>
                        </div>

                        {/* Second Row - 2 Cards Centered */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {/* Results-Oriented */}
                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="bg-[#E5F3F4] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <TrendingUp className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-[20px] font-regular text-[#111827] mb-3">
                                    Results-Oriented
                                </h3>
                                <p className="text-[#37415 leading-relaxed">
                                    Data-driven, practical consulting focused on measurable outcomes
                                </p>
                            </div>

                            {/* Proven Execution */}
                            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="bg-[#E5F3F4] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <Award className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-[20px] font-regular text-[#111827] mb-3">
                                    Proven Execution
                                </h3>
                                <p className="text-[#37415] leading-relaxed">
                                    Strong record in strategy execution and business transformation
                                </p>
                            </div>
                        </div>
                    </div>
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

            {/* Footer */}
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

            {/* Footer Section */}

        </div>
    );
};

// export default HomePage;