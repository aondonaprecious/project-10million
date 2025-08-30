/** @format */
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Partnership = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Partnership form submitted:", formData);

    // Show success toast
    toast.success(
      `Thank you ${formData.name}! Your partnership has been confirmed. We'll be in touch soon.`,
      {
        position: "top-center",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );

    // Close modal and reset form
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      amount: "",
      message: "",
    });
  };

  return (
    <>
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-[#01257D]">
            <div className="text-center">
              {/* Section Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#01257D] mb-4 md:mb-6">
                Become A Partner With Us
              </h2>

              {/* Accent line */}
              <div className="w-24 sm:w-32 h-1 bg-[#00FFFF] mx-auto mb-6 md:mb-8 rounded-full"></div>

              {/* Partnership Description */}
              <p className="text-base sm:text-lg md:text-xl text-[#666666] mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                Join us in our mission to build God a house, renovate our
                facilities, and sponsor students for the ICPLC with Pastor Chris
                at Loveworld City ASEESE, Lagos state. Your partnership makes a
                lasting impact.
              </p>

              {/* Account Details */}
              <div className="mt-6 md:mt-8 bg-[#01257D] rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 text-white max-w-xl mx-auto">
                <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                  Partnership Account Details
                </h3>
                <div className="text-left space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <div className="flex flex-col xs:flex-row xs:justify-between">
                    <span className="font-medium">Bank Name:</span>
                    <span className="mt-1 xs:mt-0">OPAY Microfinance Bank</span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:justify-between">
                    <span className="font-medium">Account Name:</span>
                    <span className="mt-1 xs:mt-0 ">
                      BELIEVERS LOVEWORLD JOSTUM (Roseline Nwafor)
                    </span>
                  </div>
                  <div className="flex flex-col xs:flex-row xs:justify-between">
                    <span className="font-medium">Account Number:</span>
                    <span className="text-[#00FFFF] font-bold mt-1 xs:mt-0">
                      8148599366
                    </span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-6 md:mt-8">
                <p className="text-base md:text-lg text-[#666666] mb-4">
                  Thank you for partnering with us to advance God's kingdom.
                </p>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-[#01257D] to-[#00C6FF] hover:from-[#00C6FF] hover:to-[#01257D] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Confirm Your Partnership
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#01257D]">
                  Confirm Your Partnership
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#01257D] hover:text-[#00C6FF] text-2xl"
                >
                  &times;
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#01257D] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-[#01257D] rounded-lg focus:ring-2 focus:ring-[#00C6FF] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#01257D] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-[#01257D] rounded-lg focus:ring-2 focus:ring-[#00C6FF] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#01257D] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-[#01257D] rounded-lg focus:ring-2 focus:ring-[#00C6FF] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#01257D] mb-1">
                      Partnership Amount (₦)
                    </label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-[#01257D] rounded-lg focus:ring-2 focus:ring-[#00C6FF] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#01257D] mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-[#01257D] rounded-lg focus:ring-2 focus:ring-[#00C6FF] focus:border-transparent"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    action="https://public.herotofu.com/v1/87fdd140-66ca-11ef-b675-51969bcd4265"
                    method="post"
                    accept-charset="UTF-8"
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#01257D] to-[#00C6FF] hover:from-[#00C6FF] hover:to-[#01257D] text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300"
                  >
                    Submit Partnership
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default Partnership;
