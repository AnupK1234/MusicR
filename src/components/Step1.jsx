import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Music } from "lucide-react";
import { defaultSongs } from "../utils/constant";

export default function Step1() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredSongs = defaultSongs.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  const addSong = (song) => {
    if (!songs.find((s) => s.title === song.title)) {
      setSongs([...songs, song]);
    }
    setSearch("");
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-container")) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="h-screen snap-start flex flex-col items-center justify-center p-8 relative">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Step 1: Choose Your Songs
      </motion.h2>
      <div className="w-full max-w-md search-container">
        <div className="relative mb-4">
          <div className="flex items-center bg-gray-800 rounded-lg">
            <Search className="w-5 h-5 ml-3 text-gray-400" />
            <input
              type="text"
              value={search}
              onFocus={() => setShowDropdown(true)}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowDropdown(true);
              }}
              className="w-full px-4 py-3 bg-transparent text-white focus:outline-none"
              placeholder="Search for songs..."
            />
          </div>

          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute w-full mt-2 bg-gray-800 rounded-lg shadow-xl z-10 max-h-80 overflow-y-auto"
              >
                {filteredSongs.map((song, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                    className="flex items-center justify-between p-3 cursor-pointer"
                    onClick={() => addSong(song)}
                  >
                    <div className="flex items-center">
                      <Music className="w-5 h-5 mr-3 text-purple-500" />
                      <div>
                        <p className="font-medium">{song.title}</p>
                        <p className="text-sm text-gray-400">{song.album}</p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <img
                        src={song.image}
                        alt={song.artist}
                        className="w-8 h-8 rounded-full mb-1"
                      />
                      <p className="text-sm text-gray-400">{song.artist}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.ul layout className="space-y-2">
          {songs.map((song, index) => (
            <motion.li
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-lg"
            >
              <div>
                <p className="font-medium">{song.title}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
              <button
                onClick={() => setSongs(songs.filter((_, i) => i !== index))}
                className="text-red-500 hover:text-red-600"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
