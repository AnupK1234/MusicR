const flashcards = [
  {
    id: 1,
    term: "Photosynthesis",
    definition:
      "The process by which plants use sunlight to produce energy from carbon dioxide and water",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    term: "Mitosis",
    definition:
      "A type of cell division that results in two daughter cells each having the same number and kind of chromosomes as the parent nucleus",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    term: "Gravity",
    definition:
      "The force that attracts a body toward the center of the earth, or toward any other physical body having mass",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    term: "Atom",
    definition:
      "The basic unit of a chemical element, consisting of a positively charged nucleus surrounded by negatively charged electrons",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    term: "Plate Tectonics",
    definition:
      "A scientific theory describing the large-scale motion of seven large plates and the movements of a larger number of smaller plates of the Earth's lithosphere",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function Step2() {
  return (
    <div className="h-screen snap-start flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-8">
        Step 2: Explore Educational Concepts
      </h2>
      <div className="w-full overflow-x-auto pb-4">
        <div className="flex space-x-4">
          {flashcards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-80 h-64 bg-gray-800 rounded-lg p-4 flex flex-col justify-between"
            >
              <div className="flex items-center mb-2">
                <img
                  src={card.image}
                  alt={card.term}
                  width={50}
                  height={50}
                  className="mr-4"
                />
                <h3 className="text-xl font-semibold">{card.term}</h3>
              </div>
              <p className="text-sm text-gray-400">{card.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
