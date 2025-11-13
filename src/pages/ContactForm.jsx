import { useState } from "react";
import Header from "../components/Header";
import Aibaner from "../assets/Aicompany.png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    datetime: "",
    timezone: "",
    description: "",
  });
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  console.log("BASE_URL =", BASE_URL);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleKeyPress = (e) => {
    if (/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}api/form/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(
          "✅ Form submitted successfully! Check Ethereal inbox or preview link."
        );
        console.log("📬 Preview URL:", data.preview);

        setFormData({
          name: "",
          company: "",
          datetime: "",
          timezone: "",
          description: "",
        });
      } else {
        alert(" Failed to send form. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(" Something went wrong. Please check the console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <section
        className="relative bg-cover h-[630px] bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${Aibaner})`,
        }}
      >
        <div className="container mx-auto max-w-6xl text-center relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"></h1>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
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
              // onKeyPress={handleKeyPress}
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
            <label className="block text-gray-700 font-medium mb-2">Date</label>
            <input
              type={formData.datetime ? "datetime-local" : "text"}
              name="datetime"
              value={formData.datetime}
              placeholder="d/m/y : --"
              onFocus={(e) => (e.target.type = "datetime-local")}
              onBlur={(e) => {
                if (!formData.datetime) e.target.type = "text";
              }}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Timezone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Time-zone
            </label>
            <input
              type="text"
              name="timezone"
              placeholder="e.g. GMT+5:30 (India)"
              value={formData.timezone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Project Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength="1000"
              rows="5"
              placeholder="Tell us briefly about your project..."
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            />
            <p className="text-gray-500 text-sm text-right">
              {formData.description.length}/1000
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-teal-600 hover:bg-teal-700"
            } text-white font-semibold py-3 rounded-lg transition-all`}
          >
            {loading ? "Submitting..." : "Submit Form"}
          </button>
        </form>
      </div>
    </div>
  );
}
