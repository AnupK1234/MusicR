import { useState, useEffect, useRef } from "react";
import ProgressBar from "../components/ProgressBar";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const stepsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-black text-green-400 min-h-screen">
      <ProgressBar currentStep={currentStep} />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <div ref={(el) => (stepsRef.current[0] = el)}>
          <Step1 />
        </div>
        <div ref={(el) => (stepsRef.current[1] = el)}>
          <Step2 />
        </div>
        <div ref={(el) => (stepsRef.current[2] = el)}>
          <Step3 />
        </div>
      </div>
    </main>
  );
}
