import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
  import Aibaner from "../assets/Aicompany.png"



export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    datetime: "",
    timezone: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs
    //   .send(
    //     "YOUR_SERVICE_ID", 
    //     "YOUR_TEMPLATE_ID",
    //     formData,
    //     "YOUR_PUBLIC_KEY"  
    //   )
    // .then(
    //   () => alert("✅ Email sent successfully!"),
    //   (error) => alert("❌ Failed to send email: " + error.text)
    // );
  };


  return (
    <div className="bg-gray-50 font-sans">
      <Header/>
       <section
                className="relative bg-cover h-[630px] bg-center flex items-end justify-end  "
                style={{
                  backgroundImage: `url(${Aibaner})`,
                }}
              >
                {/* Overlay */}
                {/* <div className="absolute inset-0 "></div> */}
      
                {/* Content */}
                <div className="container mx-auto max-w-6xl text-center relative z-10 py-6 ">
                  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg ">
                    For Manufacturing Companies
                  </h1>
                </div>
              </section>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Project Inquiry Form
          </h2>

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Date & Time */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Date / Time
            </label>
            <input
              type="datetime-local"
              name="datetime"
              value={formData.datetime}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Timezone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Timezone
            </label>
            <input
              type="text"
              name="timezone"
              placeholder="e.g. GMT+5:30 (India)"
              value={formData.timezone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Project Description (max 500 chars)
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength="500"
              rows="5"
              placeholder="Tell us briefly about your project..."
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            />
            <p className="text-gray-500 text-sm text-right">
              {formData.description.length}/500
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  )



}