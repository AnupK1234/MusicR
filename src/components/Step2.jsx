import { useState } from "react";
import { motion } from "framer-motion";
import { flashcards } from "../utils/constant";

export default function Step2() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="h-screen snap-start flex flex-col items-center justify-center p-4 md:p-8">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center"
      >
        Step 2: Explore Musical Concepts
      </motion.h2>
      <div className="w-[95%] overflow-x-auto pb-4 ml-[2%]">
        <div className="flex space-x-4 px-4 min-w-min">
          {flashcards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCard(card.id)}
              className={`flex-shrink-0 w-[280px] md:w-[400px] h-[200px] md:h-[250px] rounded-xl p-6 cursor-pointer backdrop-blur-lg transition-all duration-300 ${
                selectedCard === card.id
                  ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500"
                  : "bg-gray-800/50"
              }`}
            >
              <h3 className="text-lg md:text-xl font-bold mb-4 text-purple-400">
                {card.term}
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                {card.definition}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
