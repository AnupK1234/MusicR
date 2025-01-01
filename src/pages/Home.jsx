import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, ChevronDown, X } from "lucide-react";
import ProgressBar from "../components/ProgressBar";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const stepsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      stepsRef.current.forEach((step, index) => {
        if (step) {
          const { top, bottom } = step.getBoundingClientRect();
          if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
            setCurrentStep(index + 1);
          }
        }
      });
    };

    const scrollContainer = document.getElementById("steps-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () =>
      scrollContainer &&
      scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="text-xl font-bold text-center flex-grow">MusicR</div>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </header>

      {/* Sidebar Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg z-50"
      >
        <div className="flex items-center justify-between px-4 py-4 bg-gray-900">
          <span className="text-lg font-bold text-white">Menu</span>
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="mt-4 text-white">
          <li className="p-4 hover:bg-gray-700">Menu Item 1</li>
          <li className="p-4 hover:bg-gray-700">Menu Item 2</li>
          <li className="p-4 hover:bg-gray-700">Menu Item 3</li>
        </ul>
      </motion.div>

      {/* Overlay for Sidebar */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <ProgressBar currentStep={currentStep} />
      <div
        id="steps-container"
        className="snap-y snap-mandatory h-screen overflow-y-scroll"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        {[Step1, Step2, Step3].map((Step, index) => (
          <motion.div
            key={index}
            ref={(el) => (stepsRef.current[index] = el)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Step />
            {index < 2 && (
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronDown className="w-8 h-8 text-purple-500" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </main>
  );
}
