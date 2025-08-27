/** @format */
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import firevidoe from "../assets/Fire vidoe.mp4";

// Import local images
import flyer1 from "../assets/icplc 2.jpg";
import flyer2 from "../assets/icplc banner.jpg";
import flyer3 from "../assets/icplcpart.jpg";
import agatha from "../assets/agatha 2.jpg";
import marvelous from "../assets/agatha.jpg";
import joy from "../assets/joy.jpg";
import agathaa from "../assets/37a24f6a-e6c1-48c0-a963-ca4af504b927.jpg";
import precious from "../assets/ebbf7957-97da-47c1-b7b0-07b0276a4179.png";
import marv from '../assets/AONDONA PRECIOUS PIX.png';
import buildingFront from "../assets/Loving Heart of LoveWorld Arena.png";
import buildingInterior from "../assets/jostum inner.jpg";

// Main Projects component with routing
const Projects = () => {
  const homeVariants = [
    {
      title: "Church Building",
      description: "Modern sanctuary design with community spaces",
      path: "/church-building",
    },
    {
      title: "Office Renovation",
      description: "Functional workspace for ministry operations",
      path: "/office-renovation",
    },
    {
      title: "ICPLC Logistics",
      description: "Partnership to help students attend the conference",
      path: "/icplc",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ProjectsList homeVariants={homeVariants} />}
        />
        <Route path="/church-building" element={<ChurchBuilding />} />
        <Route path="/office-renovation" element={<OfficeRenovation />} />
        <Route path="/icplc" element={<ICPLC />} />
      </Routes>
    </Router>
  );
};

// Projects list component (main page)
const ProjectsList = ({ homeVariants }) => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#01257D] to-[#023190] overflow-hidden">
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 text-white/20 bg-dots pointer-events-none"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-[#00FFFF] mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Projects
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-[#00FFFF] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p
            className="text-[#00FFFF] max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Three key initiatives transforming our community and enabling
            ministry growth
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {homeVariants.map((home, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-[#00FFFF] flex flex-col shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-64 bg-gradient-to-br from-[#01257D] to-[#023190] flex items-center justify-center text-[#00FFFF]">
                <div className="text-8xl font-bold opacity-40">{index + 1}</div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  {home.title}
                </h3>
                <p className="text-[#00FFFF] mb-4">{home.description}</p>
              </div>
              <div className="p-4 bg-[#01257D]">
                <Link
                  to={home.path}
                  className="w-full bg-[#00FFFF] text-[#01257D] py-2 rounded-lg font-bold hover:bg-white hover:text-[#01257D] transition-colors block text-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Video Player Component
const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-md aspect-video bg-black/30 border border-[#00FFFF] rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster="data:image/gif,AAAA" // Simple transparent placeholder
        onEnded={() => setIsPlaying(false)}
      >
        <source src={firevidoe} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <button
            onClick={togglePlay}
            className="bg-[#00FFFF] text-[#01257D] rounded-full p-4 hover:bg-white transition-colors"
            aria-label="Play video"
          >
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}

      {isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 bg-[#00FFFF] text-[#01257D] rounded-full p-2 hover:bg-white transition-colors"
          aria-label="Pause video"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>
      )}
    </div>
  );
};

// Church Building Component with Image Toggle
const ChurchBuilding = () => {
  const [currentView, setCurrentView] = useState(0);
  const buildingViews = [
    {
      name: "Front View",
      image: buildingFront,
    },
    {
      name: "Interior View",
      image: buildingInterior,
    },
  ];

  const nextView = () => {
    setCurrentView((prev) => (prev + 1) % buildingViews.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01257D] to-[#023190] py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl border border-[#00FFFF] p-8">
        <Link
          to="/"
          className="inline-block mb-6 text-[#00FFFF] hover:text-white"
        >
          &larr; Back to Projects
        </Link>

        <motion.h1
          className="text-4xl font-bold text-[#00FFFF] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Church Building Project
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Current Challenges
            </motion.h2>
            <motion.p
              className="text-[#00FFFF] mb-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Due to the ever increasing growth we have experienced as a church
              and also significant venue challenges, moving between temporary
              locations that limit our growth and community impact, We seek a
              permanent home to serve our congregation effectively and establish
              the will of God!
            </motion.p>

            <motion.h2
              className="text-2xl font-bold text-white mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our Vision
            </motion.h2>
            <motion.p
              className="text-[#00FFFF] mb-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              We have identified a perfect land for our new church building - a
              centrally located 2-plot property that can accommodate our current
              congregation and future growth. The proposed building will include
              a 500-seat sanctuary, classrooms for Sunday school, fellowship
              hall, and administrative offices.
            </motion.p>
          </div>

          <motion.div
            className="bg-gradient-to-br from-[#01257D] to-[#023190] p-6 rounded-lg border border-[#00FFFF]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                Proposed Building Plan
              </h3>
              <button
                onClick={nextView}
                className="text-sm bg-[#00FFFF] text-[#01257D] px-3 py-1 rounded hover:bg-white transition-colors"
              >
                Switch View
              </button>
            </div>
            <div className="aspect-video bg-[#00FFFF]/10 mb-4 overflow-hidden rounded-lg">
              <img
                src={buildingViews[currentView].image}
                alt={buildingViews[currentView].name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#00FFFF] text-center mb-2">
              {buildingViews[currentView].name}
            </p>
            <ul className="text-[#00FFFF] list-disc pl-5 space-y-2">
              <li>500-seat main sanctuary</li>
              <li>Multi-purpose fellowship hall</li>
              <li>Pastoral offices and meeting rooms</li>
              <li>Children's ministry area</li>
              <li>Parking for 50 vehicles</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 p-6 bg-[#01257D] rounded-lg border border-[#00FFFF] text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-[#00FFFF] mb-4">
            Join Us to Build God a House
          </h2>
          <p className="text-white mb-6">
            Your Partnership can speak volumes even as you give to help us
            acquire the church land and construct a permanent church home. Your
            support will make a lasting impact in Believers Loveworld campus
            ministry JOSTUM and beyond
          </p>
          <button className="bg-[#00FFFF] text-[#01257D] py-3 px-8 rounded-lg font-bold hover:bg-white transition-colors">
            Support Church Building Project
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// Toast Notification Component
const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed top-4 right-4 bg-[#00FFFF] text-[#01257D] px-6 py-3 rounded-lg shadow-lg z-50 max-w-xs"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <div className="flex items-center">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </motion.div>
  );
};

// Office Renovation Component with Equipment Donation Form
const OfficeRenovation = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Equipment Donation Form Component
  const EquipmentDonationForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      location: "",
      email: "",
      contact: "",
      equipment: "",
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Send email using mailto link
      const subject = "Equipment Donation Offer";
      const body = `
Name: ${formData.name}
Country/Location: ${formData.location}
Contact: ${formData.contact}
Equipment to donate: ${formData.equipment}
      `;

      window.location.href = `mailto:Blwuamsouthcore1@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Reset form
      setFormData({
        name: "",
        location: "",
        email: "",
        contact: "",
        equipment: "",
      });

      // Close the form
      setShowDonationForm(false);

      // Show custom toast message
      setToastMessage(
        "Thank you for your donation offer! An email has been prepared for you to send."
      );
      setShowToast(true);
    };

    return (
      <motion.div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowDonationForm(false)}
      >
        <motion.div
          className="bg-gradient-to-b from-[#01257D] to-[#023190] rounded-xl border border-[#00FFFF] p-4 w-full max-w-xs mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-[#00FFFF]">
              Donate Equipment
            </h3>
            <button
              onClick={() => setShowDonationForm(false)}
              className="text-white hover:text-[#00FFFF] text-xl"
              aria-label="Close form"
            >
              &times;
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-white text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-[#00FFFF] rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#00FFFF]"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-1">
                Country/Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-[#00FFFF] rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#00FFFF]"
                placeholder="Enter your country or location"
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-1">
                Personal Contact
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-[#00FFFF] rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#00FFFF]"
                placeholder="Phone number or email"
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-1">
                Equipment to donate
              </label>
              <textarea
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
                required
                rows={2}
                className="w-full bg-white/10 border border-[#00FFFF] rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#00FFFF]"
                placeholder="Describe the equipment you'd like to donate"
              ></textarea>
            </div>

            <button
              action="https://public.herotofu.com/v1/87fdd140-66ca-11ef-b675-51969bcd4265"
              method="post"
              accept-charset="UTF-8"
              type="submit"
              className="w-full bg-[#00FFFF] text-[#01257D] py-2 rounded font-bold text-sm hover:bg-white transition-colors"
            >
              Submit Donation Offer
            </button>
          </form>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01257D] to-[#023190] py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl border border-[#00FFFF] p-8">
        <Link
          to="/"
          className="inline-block mb-6 text-[#00FFFF] hover:text-white"
        >
          &larr; Back to Projects
        </Link>

        <motion.h1
          className="text-4xl font-bold text-[#00FFFF] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Office Renovation and Church Equipment Purchase
        </motion.h1>

        <motion.div
          className="mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Fire Outbreak Incident
          </h2>
          <p className="text-[#00FFFF]">
            On July 17, 2025, our Church central office suffered a devastating
            electrical fire that destroyed much of our equipment and damaged the
            interior structure. While no one was injured to the glory of God,
            most of our church equipments, furniture, ministry materials and
            properties were lost to the fire.
          </p>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Video Documentation
          </h2>
          <div className="flex justify-center">
            <VideoPlayer />
          </div>
          <p className="text-center text-[#00FFFF] mt-2">
            Video footage of fire damage
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              List of Items lost to the fire
            </h3>
            <ul className="text-[#00FFFF] list-disc pl-5 space-y-2">
              <li>Drumset</li>
              <li>Microphones</li>
              <li>Office partition structure</li>
              <li>Amplifier</li>
              <li>All technical cords and wires</li>
              <li>Office wiring structure</li>
              <li>Distribution boxes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Renovation Requirements
            </h3>
            <ul className="text-[#00FFFF] list-disc pl-5 space-y-2">
              <li>Painting</li>
              <li>Rewiring of entire structure</li>
              <li>Creation of office partition</li>
              <li>Purchase of new church equipments</li>
              <li>Flooring repairs</li>
              <li>Smoke Detection System</li>
              <li>Fire Extinguishers</li>
              <li>Dry Wall Replacement</li>
              <li>New lighting fixtures</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="p-6 bg-[#01257D] rounded-lg border border-[#00FFFF] text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-[#00FFFF] mb-4">
            Become a Restoration Partner
          </h2>
          <p className="text-white mb-6">
            Your Partnership will help us restore our ministry operations and
            complete the full preaching of the gospel in this year of
            completeness
          </p>
          <button
            onClick={() => setShowDonationForm(true)}
            className="bg-[#00FFFF] text-[#01257D] py-3 px-8 rounded-lg font-bold hover:bg-white transition-colors mr-4 mb-4 md:mb-0"
          >
            Donate Equipment
          </button>
          <a href="#partnership">
            <button className="bg-white text-[#01257D] py-3 px-8 rounded-lg font-bold hover:bg-[#00FFFF] transition-colors">
              Partner with us Today
            </button>
          </a>
        </motion.div>
      </div>

      {/* Render the donation form modal */}
      {showDonationForm && <EquipmentDonationForm />}

      {/* Render the toast notification */}
      <Toast
        message={toastMessage}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

// Testimony Card Component with Glitter Effect
const TestimonyCard = ({ name, image, testimony, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showGlitter, setShowGlitter] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    setShowGlitter(true);
    setTimeout(() => setShowGlitter(false), 1000);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-[#00FFFF] bg-white/5 backdrop-blur-sm p-4 mb-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ rotate: 12 }}
      onHoverStart={handleHover}
      onHoverEnd={handleLeave}
      onTap={handleHover}
    >
      {/* Glitter Effect */}
      {showGlitter && (
        <div className="glitter-overlay">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="glitter-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
              }}
            />
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#00FFFF] flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-lg font-bold text-[#00FFFF] mb-2">{name}</h4>
          <p className="text-white italic">"{testimony}"</p>
        </div>
      </div>
    </motion.div>
  );
};

// ICPLC Component with Enhanced Features
const ICPLC = () => {
  const testimonials = [
    {
      name: "Sister Joy Atile",
      image: joy,
      testimony:
        "My expectations for ICPLC is to gain a deeper revelation of God's word and learn how to apply it to effect change in my world, while receiving grace for multiplication in cell ministry, church growth, and partnership. I also anticipate experiencing a notable all-round transformation in my spiritual growth, finances, and business, with a specific word for my finances. Additionally, I seek grace and direction to raise an effective army for Christ.",
    },
    {
      name: "Sister Agatha Adima",
      image: agathaa,
      testimony:
        "I expect ICPLC to deepen my understanding of God's word for impactful change and empower me with grace for exponential growth in ministry, partnerships, and personal finances. Additionally, I seek divine direction and strength to build a powerful, Christ-centered community while experiencing transformation in my spiritual and professional life.",
    },
    {
      name: "Brother Marvelous",
      image: precious,
      testimony:
        "To increase in my capacity and have a shift in my thinking from major encounters that will cause mighty results back at my home church and my life as a whole.",
    },
    {
      name: "Sister Agatha Ortyom",
      image: agatha,
      testimony:
        "Attending the ICPLC, I expect to return refreshed and reenergized, with a renewed mind ready for kingdom exploits. I anticipate receiving increased grace for expansion in cell ministry and the ability to profoundly impact others' lives. Furthermore, I look forward to gaining end-time territorial domination counsel from our dear man of God and receiving a life-changing word that will transform my finances forever.",
    },

    {
      name: "Sister Aondona Precious",
      image: marv,
      testimony:
        "Looking forward to ICPLC with so many expecations, grace to actively partcipate in the full complete preaching of the gospel this year, Especially through the 3P's of the Gospel: Preaching, Paying, and Praying for the Gospel. That all &~much Grace will abound towards me, no excuses or complains empowered for the last work God has on earth. I just want to be his vessel who does his heart burdens dilligently",
    },
  ];

  const flyers = [flyer1, flyer2, flyer3];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01257D] to-[#023190] py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl border border-[#00FFFF] p-8">
        <Link
          to="/"
          className="inline-block mb-6 text-[#00FFFF] hover:text-white"
        >
          &larr; Back to Projects
        </Link>

        <motion.h1
          className="text-4xl font-bold text-[#00FFFF] mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          ICPLC Logistics
        </motion.h1>

        <motion.h2
          className="text-2xl text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          International Campus Pastors and Leaders Conference
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">What is ICPLC?</h3>
          <p className="text-[#00FFFF]">
            ICPLC (International Campus Pastors and Leaders Conference) is a
            global gathering of passionate, purpose-driven youth leaders,
            student ministers, and campus fellowship pastors in the Believers'
            Loveworld Nation with Pastor Chris Oyakhilome at ASEESE Believers
            Loveworld city.
          </p>
        </motion.div>

        {/* E-Cards and Flyers Section */}
        <motion.div
          className="mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            ICPLC Program Materials
          </h3>
          <p className="text-[#00FFFF] text-center mb-6">
            Check out our latest flyers and e-cards for the ICPLC program
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {flyers.map((flyer, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden border border-[#00FFFF]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={flyer}
                  alt={`ICPLC Flyer ${index + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Student Expectations
          </h3>
          <p className="text-[#00FFFF] text-center mb-6">
            Students Loud Heart Desires for ICPLC
          </p>

          <div className="grid grid-cols-1 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonyCard
                key={index}
                name={testimonial.name}
                image={testimonial.image}
                testimony={testimonial.testimony}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="p-6 bg-[#01257D] rounded-lg border border-[#00FFFF] text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[#00FFFF] mb-4">
            Sponsor a Student for ICPLC 2025
          </h2>
          <p className="text-white mb-6">
            Many young students from our campus desire so greatly to be part of
            this live transforming conference with Pastor Chris but have some
            constraints. Your sponsorship of at least $55 will cover for the
            registration, materials, accommodation, meals and transportation of
            at least one student.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-3xl font-bold text-[#00FFFF]">1</div>
              <div className="text-white text-sm"> delegate</div>
              <div className="text-[#00FFFF] font-bold">$55</div>
            </div>

            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-3xl font-bold text-[#00FFFF]">5</div>
              <div className="text-white text-sm"> delegates</div>
              <div className="text-[#00FFFF] font-bold">$275</div>
            </div>

            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-3xl font-bold text-[#00FFFF]">10</div>
              <div className="text-white text-sm">delegates</div>
              <div className="text-[#00FFFF] font-bold">$550</div>
            </div>
          </div>

          <a href="#partnership">
            <button className="bg-[#00FFFF] text-[#01257D] py-3 px-8 rounded-lg font-bold hover:bg-white transition-colors">
              Sponsor a delegate now
            </button>
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .glitter-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10;
        }

        .glitter-particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          animation: glitter 1s ease-out forwards;
        }

        @keyframes glitter {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(
                ${Math.random() * 100 - 50}px,
                ${Math.random() * 100 - 50}px
              )
              scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
