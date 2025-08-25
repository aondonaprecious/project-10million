/** @format */
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useRef } from "react";
import firevidoe from '../assets/Fire vidoe.mp4';

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
    <div className="relative aspect-video bg-black/30 border border-[#00FFFF] rounded-lg overflow-hidden">
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

// Church Building Component
const ChurchBuilding = () => {
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
              Our fellowship has been experiencing significant venue issues,
              moving between temporary locations that limit our growth and
              community impact. We need a permanent home to serve our
              congregation effectively.
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
              centrally located 2-acre property that can accommodate our current
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
            <h3 className="text-xl font-bold text-white mb-4">
              Proposed Building Plan
            </h3>
            <div className="aspect-video bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF] mb-4">
              <span className="text-lg">
                Architectural Rendering of Church Building
              </span>
            </div>
            <ul className="text-[#00FFFF] list-disc pl-5 space-y-2">
              <li>500-seat main sanctuary</li>
              <li>Multi-purpose fellowship hall</li>
              <li>8 Sunday school classrooms</li>
              <li>Pastoral offices and meeting rooms</li>
              <li>Children's ministry area</li>
              <li>Parking for 150 vehicles</li>
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
            Help Us Build God's House
          </h2>
          <p className="text-white mb-6">
            We're seeking partners to help acquire the land and construct our
            permanent church home. Your support will make a lasting impact on
            our community.
          </p>
          <button className="bg-[#00FFFF] text-[#01257D] py-3 px-8 rounded-lg font-bold hover:bg-white transition-colors">
            Support Church Building Project
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// Office Renovation Component
const OfficeRenovation = () => {
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
          Office Renovation Project
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
            On March 15, 2023, our ministry office suffered a devastating
            electrical fire that destroyed much of our equipment and damaged the
            interior structure. While no one was injured, we lost computers,
            furniture, ministry materials, and our entire network
            infrastructure.
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
          <VideoPlayer />
          <p className="text-center text-[#00FFFF] mt-2">
            Video footage of fire damage and renovation plans
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
              Burnt Equipment Needs Replacement
            </h3>
            <ul className="text-[#00FFFF] list-disc pl-5 space-y-2">
              <li>6 Desktop Computers</li>
              <li>3 Laptops</li>
              <li>Network Server & Equipment</li>
              <li>Printers and Scanners</li>
              <li>Office Furniture (desks, chairs)</li>
              <li>Filing Cabinets and Storage</li>
              <li>Air Conditioning Units</li>
              <li>Kitchen Appliances</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Renovation Requirements
            </h3>
            <ul className="text-[#00FFFF] list-disc pl-5 space-y-2">
              <li>Electrical System Overhaul</li>
              <li>Drywall Replacement</li>
              <li>Flooring Repair</li>
              <li>Painting Entire Office</li>
              <li>New Lighting Fixtures</li>
              <li>Smoke Detection System</li>
              <li>Fire Extinguishers</li>
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
            Your support will help us restore our ministry operations and
            continue serving our community effectively.
          </p>
          <button className="bg-[#00FFFF] text-[#01257D] py-3 px-8 rounded-lg font-bold hover:bg-white transition-colors mr-4">
            Donate Equipment
          </button>
          <button className="bg-white text-[#01257D] py-3 px-8 rounded-lg font-bold hover:bg-[#00FFFF] transition-colors">
            Financial Support
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// Flip Card Component for Testimonials
const FlipCard = ({ front, back, delay }) => {
  return (
    <motion.div
      className="flip-card h-64 w-full cursor-pointer"
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ rotateY: 180 }}
    >
      <div className="flip-card-inner relative w-full h-full">
        <div className="flip-card-front absolute w-full h-full bg-[#01257D] p-4 rounded-lg border border-[#00FFFF] flex flex-col items-center justify-center backface-hidden">
          <h4 className="text-lg font-bold text-[#00FFFF] mb-2 text-center">
            {front.title}
          </h4>
          <p className="text-white text-sm text-center">{front.content}</p>
        </div>
        <div className="flip-card-back absolute w-full h-full bg-[#00FFFF] p-4 rounded-lg border border-[#01257D] flex flex-col items-center justify-center backface-hidden rotate-y-180">
          <p className="text-[#01257D] text-sm text-center italic">
            "{back.testimonial}"
          </p>
          <p className="text-[#01257D] font-bold mt-4">- {back.author}</p>
        </div>
      </div>
    </motion.div>
  );
};

// ICPLC Component
const ICPLC = () => {
  const testimonials = [
    {
      front: {
        title: "Learning Experience",
        content:
          "Comprehensive church planting methodologies and leadership strategies",
      },
      back: {
        testimonial:
          "ICPLC transformed my understanding of cross-cultural ministry. The hands-on workshops were invaluable.",
        author: "Pastor James, Nigeria",
      },
    },
    {
      front: {
        title: "Global Networking",
        content: "Connect with leaders from diverse backgrounds and cultures",
      },
      back: {
        testimonial:
          "The relationships I built at ICPLC have become my support network in ministry. Forever grateful!",
        author: "Sarah M., Kenya",
      },
    },
    {
      front: {
        title: "Practical Application",
        content:
          "Real-world ministry application and problem-solving techniques",
      },
      back: {
        testimonial:
          "The practical skills I gained at ICPLC helped me launch a thriving church in my community.",
        author: "Emmanuel, Ghana",
      },
    },
    {
      front: {
        title: "Spiritual Growth",
        content: "Deepen your faith and calling through worship and teaching",
      },
      back: {
        testimonial:
          "ICPLC reignited my passion for ministry and gave me fresh vision for serving my community.",
        author: "Rebecca T., Uganda",
      },
    },
  ];

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
           International Campus Pastors’ and Leaders’ Conference
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">What is ICPLC?</h3>
          <p className="text-[#00FFFF]">
            ICPLC (International Campus Pastors’ and Leaders’ Conference) is a
            global gathering of passionate, purpose-driven youth leaders,
            student ministers, and campus fellowship pastors in the Believers’
            Loveworld Nation.
          </p>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Student Testimonials
          </h3>
          <p className="text-[#00FFFF] text-center mb-6">
            Hear from past participants about their ICPLC experience
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <FlipCard
                key={index}
                front={testimonial.front}
                back={testimonial.back}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="p-6 bg-[#01257D] rounded-lg border border-[#00FFFF] text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-[#00FFFF] mb-4">
            Sponsor a Student for ICPLC 2025
          </h2>
          <p className="text-white mb-6">
            Many aspiring church leaders from developing nations cannot afford
            conference expenses. Your sponsorship of $500 covers registration,
            materials, accommodation, and meals for one student.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-3xl font-bold text-[#00FFFF]">1</div>
              <div className="text-white text-sm">Student Sponsor</div>
              <div className="text-[#00FFFF] font-bold">$500</div>
            </div>

            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-3xl font-bold text-[#00FFFF]">5</div>
              <div className="text-white text-sm">Students Sponsor</div>
              <div className="text-[#00FFFF] font-bold">$2,500</div>
            </div>

            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-3xl font-bold text-[#00FFFF]">10</div>
              <div className="text-white text-sm">Students Sponsor</div>
              <div className="text-[#00FFFF] font-bold">$5,000</div>
            </div>
          </div>

          <button className="bg-[#00FFFF] text-[#01257D] py-3 px-8 rounded-lg font-bold hover:bg-white transition-colors">
            Sponsor a Student Now
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .flip-card-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Projects;
