import { useState } from "react";
import { PlusCircle, X } from "lucide-react";

export default function Step1() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState("");

  const addSong = () => {
    if (currentSong.trim() !== "") {
      setSongs([...songs, currentSong.trim()]);
      setCurrentSong("");
    }
  };

  const removeSong = (index) => {
    setSongs(songs.filter((_, i) => i !== index));
  };

  return (
    <div className="h-screen snap-start flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-8">
        Step 1: Enter Your Desired Songs
      </h2>
      <div className="w-full max-w-md">
        <div className="flex mb-4">
          <input
            type="text"
            value={currentSong}
            onChange={(e) => setCurrentSong(e.target.value)}
            className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter a song name"
          />
          <button
            onClick={addSong}
            className="bg-green-500 text-black px-4 py-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <PlusCircle className="w-6 h-6" />
          </button>
        </div>
        <ul className="space-y-2">
          {songs.map((song, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-md"
            >
              <span>{song}</span>
              <button
                onClick={() => removeSong(index)}
                className="text-red-500 hover:text-red-600"
              >
                <X className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
