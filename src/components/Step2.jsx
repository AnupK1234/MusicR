import { useState } from "react";
import { flashcards } from "../utils/constant";

export default function Step2() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <div className="h-screen snap-start flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-8">
        Step 2: Explore Educational Concepts
      </h2>
      <div className="w-[97%] overflow-x-auto pb-4">
        <div className="flex space-x-4">
          {flashcards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`flex-shrink-0 w-80 h-96 bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-between cursor-pointer border-4 transition-colors ${
                selectedCard === card.id
                  ? "border-green-500"
                  : "border-transparent"
              }`}
            >
              <img
                src={card.image}
                alt={card.term}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{card.term}</h3>
                <p className="text-sm text-gray-400">{card.definition}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
