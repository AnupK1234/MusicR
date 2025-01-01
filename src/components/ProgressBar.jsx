import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ProgressBar({ currentStep }) {
  return (
    <div className="fixed left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-6">
        {[1, 2, 3].map((step) => (
          <div key={step} className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [1, step === currentStep ? 1.1 : 1, 1],
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                repeat: step === currentStep ? Infinity : 0,
                repeatType: "reverse",
              }}
              className={`w-10 h-10 rounded-full border-2 relative ${
                step <= currentStep
                  ? "border-purple-500 bg-gradient-to-br from-purple-500 to-pink-500"
                  : "border-gray-600 bg-gray-800"
              } flex items-center justify-center shadow-lg ${
                step === currentStep ? "ring-4 ring-purple-500/30" : ""
              }`}
            >
              {step < currentStep ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <span className="text-sm font-medium text-white">{step}</span>
              )}
            </motion.div>
            {step < 3 && (
              <div className="relative h-12 mt-2">
                <motion.div
                  className={`w-0.5 h-full absolute left-1/2 transform -translate-x-1/2 ${
                    step < currentStep
                      ? "bg-gradient-to-b from-purple-500 to-pink-500"
                      : "bg-gray-600"
                  }`}
                />
                {step < currentStep && (
                  <motion.div
                    initial={{ top: "0%" }}
                    animate={{
                      top: ["0%", "100%", "0%"],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400/50 blur-sm"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
