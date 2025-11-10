import React, { useState } from 'react';
import Header from "../components/Header";
import vector from "../assets/vector.png";
import vector1 from "../assets/vector1.png";
import target from "../assets/target.png";
import focus from "../assets/focus.png"
import { Target, ChevronUp, ChevronDown, Users, TrendingUp, BarChart3, DollarSign, MapPin, Send, Mail, Globe } from 'lucide-react';
import Aibaner from "../assets/Aicompany.png"
import manufacturing from "../assets/manufacturingImage.jpg"
import stock from "../assets/stock.jpg"
export default function Manufacturing() {
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
    <div className="bg-white">
      <Header />

      {/* Hero Banner */}
      <section
        className="relative bg-cover h-[630px] bg-center py-20 px-6"
        style={{
          backgroundImage: `url(${Aibaner})`,
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 "></div> */}

        {/* Content */}
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg ">
            For Manufacturing Companies
          </h1>
        </div>
      </section>

      {/* Business Consulting Section */}
      <section className="py-16 px-6 bg-[#E7F5F6]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Business Consulting & Growth Strategy
          </h2>
          <div className="w-64 h-1 bg-black mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                In today's competitive landscape, standing still is the surest way to moving backward. Our <span className="font-bold">Business Consulting & Growth Strategy</span> service is designed to be the catalyst for your next phase of expansion and profitability. We don't just offer advice - we partner with you to implement bold, measurable growth initiatives.
              </p>

              {/* Dashboard Image for mobile/left column */}
              <div className="md:hidden mb-8">
                <div className="relative bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="Manufacturing Performance Dashboard"
                    className="w-full h-64 object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">Manufacturing</h3>
                      <h3 className="text-2xl font-bold mb-2">Performance</h3>
                      <h3 className="text-2xl font-bold">Dashboard</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Three Cards */}
              <div className="space-y-6">
                {/* Card 1 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-white p-3 rounded-lg flex-shrink-0 shadow-md">
                    <Users className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Business Expansion & New Client Acquisition:
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      We dissect your current market position and develop a robust strategy for penetrating <span className="font-semibold">new markets</span> and acquiring <span className="font-semibold">high-value clients.</span> This includes everything from detailed market segmentation to creating effective, targeted sales campaigns that drive your top line.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-white p-3 rounded-lg flex-shrink-0 shadow-md">
                    <Target className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Optimized Service & Distribution Strategy:
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      We analyze your product/service offerings and establish the most efficient and profitable <span className="font-semibold">distribution channels.</span> Whether you need to streamline your current network or establish entirely new routes to market, we ensure your offerings reach customers efficiently and effectively.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-white p-3 rounded-lg flex-shrink-0 shadow-md">
                    <TrendingUp className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Revenue & Business Share Increase:
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Our ultimate goal is tangible financial impact. We focus on strategies that directly lead to increased <span className="font-semibold">revenue</span> and an expanded <span className="font-semibold">market share</span> within your industry, ensuring your growth is sustained and strategically sound.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Dashboard Image */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative bg-slate-800 rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg">
                <img
                  src={manufacturing}
                  alt="Manufacturing Performance Dashboard"
                  className="w-full h-full object-cover opacity-70"
                />
                {/* Dashboard Overlay */}
                <div className="absolute inset-0 p-6">
                  {/* Title */}
                  <div className="text-white text-center mb-8">
                    <h3 className="text-2xl font-bold">Manufacturing</h3>
                    <h3 className="text-2xl font-bold">Performance</h3>
                    <h3 className="text-2xl font-bold mb-1">Dashboard</h3>
                    <div className="w-24 h-0.5 bg-white mx-auto"></div>
                  </div>

                  {/* Chart Elements - Decorative */}
                  <div className="absolute bottom-8 left-6 right-6">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-green-500/20 backdrop-blur-sm rounded p-2 text-center">
                        <BarChart3 className="w-6 h-6 text-green-400 mx-auto mb-1" />
                        <p className="text-xs text-white">Production Rate</p>
                      </div>
                      <div className="bg-blue-500/20 backdrop-blur-sm rounded p-2 text-center">
                        <TrendingUp className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                        <p className="text-xs text-white">Machine Uptime</p>
                      </div>
                      <div className="bg-yellow-500/20 backdrop-blur-sm rounded p-2 text-center">
                        <DollarSign className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                        <p className="text-xs text-white">Machine Value</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">


          {/* Carousel Container */}
          <div className="relative bg-gray-50 rounded-3xl p-8 md:p-16 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2  text-left">
              Manufacturing Process & Capex Optimization
            </h2>
            <div className="w-80 h-1 bg-teal-500 mb-8 mx-auto"></div>

            <p className="text-gray-700 text-center mb-12 leading-relaxed max-w-4xl mx-auto">
              To remain competitive, manufacturers must continually evaluate and upgrade their production processes. We call this service Manufacturing Process & Investment Optimization as it clearly focuses on technical benefits and cost savings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Left Card */}
              <div className="bg-[#E0F2F1] p-8 rounded-2xl">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 border-4 border-teal-600">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-800 text-xl mb-4">
                  Process Migration for Cost & Technical Gain:
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We analyze your existing manufacturing processes and identify opportunities to migrate to more efficient alternatives. These migrations can be critical for yielding significant cost benefits (e.g., lower material usage, faster cycle times) and realizing key technical benefits (e.g., improved product quality, tighter tolerances, or new material capabilities).
                </p>
              </div>

              {/* Right Card */}
              <div className="bg-[#E0F2F1] p-8 rounded-2xl">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 border-4 border-teal-600">
                  <BarChart3 className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-800 text-xl mb-4">
                  Capital Equipment Investment Analysis:
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Before committing to new machinery or equipment, you need confidence in the return on investment. We rigorously evaluate whether proposed capex expenditures will deliver tangible improvements—lower operating costs, fewer breakdowns, or enhanced yield. Our analysis ensures that capital decisions are data-backed and strategically sound.
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 w-12 h-12 rounded-full shadow-lg transition-colors flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 w-12 h-12 rounded-full shadow-lg transition-colors flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-10">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-10 h-2 rounded-full bg-teal-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Business Problem Solving & Transformation
          </h2>
          <div className="w-80 h-1 bg-teal-500 mb-8"></div>

          <p className="text-gray-700 text-center mb-12 leading-relaxed max-w-4xl mx-auto">
            Every business faces hurdles, but it's the speed and effectiveness with which they are solved that dictates long-term success. Our <span className="font-bold">Business Problem Solving & Transformation</span> service offers a structured, systematic approach to tackling your most complex operational, market, and financial challenges.
          </p>

          {/* Four Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="font-bold text-gray-800 text-lg mb-4">
                Holistic & Systematic Problem Resolution:
              </h3>
              <div className="flex gap-6 items-start">
                <p className="text-sm text-gray-700 leading-relaxed flex-1">
                  Our team takes a systematic approach to diagnostic and solve business challenges across every function—be it operational bottlenecks, inefficient Marketing and reporting, declining Sales and Marketing performance, critical Cost Position issues.
                </p>
                <div className="flex-shrink-0">
                  <img
                    src={vector}
                    alt="Problem Resolution"
                    className="w-24 h-24"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="font-bold text-gray-800 text-lg mb-4">
                Scouting & Integration for Smart Factory Transformation:
              </h3>
              <div className="flex gap-6 items-start">
                <p className="text-sm text-gray-700 leading-relaxed flex-1">
                  We actively scout for the latest AI and technology solutions that can be seamlessly integrated into your operations into a Smart Factory. We identify, evaluate, and help integrate systems that drive predictive maintenance, optimize resource allocation, and enhance.
                </p>
                <div className="flex-shrink-0">
                  <img
                    src={vector1}
                    alt="Smart Factory"
                    className="w-24 h-24"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="font-bold text-gray-800 text-lg mb-4">
                Transformation for Lasting Change:
              </h3>
              <div className="flex gap-6 items-start">
                <p className="text-sm text-gray-700 leading-relaxed flex-1">
                  We implement transformative changes by re-engineering processes, modernizing systems, and deploying solutions that not only fix the immediate issue but also future-proof your business against recurrence, leading to sustainable operational excellence.
                </p>
                <div className="flex-shrink-0">
                  <img
                    src={target}
                    alt="Transformation"
                    className="w-24 h-24"
                  />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="font-bold text-gray-800 text-lg mb-4">
                Focus on Tangible Outcomes:
              </h3>
              <div className="flex gap-6 items-start">
                <p className="text-sm text-gray-700 leading-relaxed flex-1">
                  We are committed to delivering practical, actionable solutions that result in measurable improvements in efficiency, profitability, and overall business health.
                </p>
                <div className="flex-shrink-0">
                  <img
                    src={focus}
                    alt="Tangible Outcomes"
                    className="w-24 h-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Strategic Sourcing & Supply Chain Consulting
          </h2>
          <div className="w-80 h-1 bg-teal-600  mb-8"></div>
          {/* Subtitle */}
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Cost optimization is non-negotiable for manufacturers aiming for a competitive edge.
            Our Strategic Sourcing & Supply Chain Consulting service provides expert guidance to
            dramatically reduce material and component costs while building a resilient,
            future-proof supply chain.
          </p>

          {/* Main Section */}
          <div className="grid md:grid-cols-2 gap-8 bg-teal-50 rounded-2xl p-8 items-center">
            {/* Left Content */}
            <div>
              {/* Section 1 */}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Global Resource and Cost Optimization:
                  </h3>
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                </div>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  We specialize in resourcing projects by identifying and developing high-quality,
                  reliable alternative supply sources in low-cost countries. For components or
                  assemblies currently sourced from high-cost regions (like Europe or the USA),
                  we manage the entire migration process—from initial supplier vetting to qualification
                  and stable production handover.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Alternative Supply Source Development:
                  </h3>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Maximizing Profitability:
                  </h3>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
              src={stock}
                alt="Data Analytics Dashboard"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
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
    </div>
  );
}