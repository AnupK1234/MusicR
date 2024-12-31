import { CheckCircle } from "lucide-react";

export default function ProgressBar({ currentStep }) {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-4">
        {[1, 2, 3].map((step) => (
          <div key={step} className="relative">
            <div
              className={`w-8 h-8 rounded-full border-2 ${
                step <= currentStep
                  ? "border-green-500 bg-green-500"
                  : "border-gray-500 bg-black"
              } flex items-center justify-center`}
            >
              {step < currentStep ? (
                <CheckCircle className="w-6 h-6 text-black" />
              ) : (
                <span className="text-sm">{step}</span>
              )}
            </div>
            {step < 3 && (
              <div
                className={`h-12 w-0.5 ${
                  step < currentStep ? "bg-green-500" : "bg-gray-500"
                } absolute left-1/2 transform -translate-x-1/2 mt-2`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
