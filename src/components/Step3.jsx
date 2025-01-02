import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Music, BookOpen, Disc } from "lucide-react";

export default function Step3() {
  const navigate = useNavigate();

  // Dummy data
  const selectedSong = {
    title: "Perfect",
    artist: "Ed Sheeran",
    album: "÷",
    image: "https://static.standard.co.uk/2023/09/08/11/GettyImages-1496391549.jpeg"
  };

  const selectedConcept = {
    term: "Photosynthesis",
    definition: "Process by which plants convert light energy into chemical energy"
  };

  return (
    <div className="h-screen snap-start flex flex-col items-center justify-center p-4 md:p-8">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center"
      >
        Step 3: Review & Generate
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 w-full max-w-4xl">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20"
        >
          <div className="flex items-center mb-6">
            <Music className="w-6 h-6 text-purple-500 mr-2" />
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Selected Song</h3>
          </div>
          <motion.div 
            className="flex items-center p-4 bg-gray-900/50 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative mr-4">
              <img
                src={selectedSong.image}
                alt={selectedSong.title}
                className="w-16 h-16 rounded-lg"
              />
              <motion.div
                className="absolute -right-2 -top-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Disc className="w-6 h-6 text-purple-500" />
              </motion.div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">{selectedSong.title}</h4>
              <p className="text-sm text-gray-400">{selectedSong.artist}</p>
              <p className="text-xs text-gray-500">{selectedSong.album}</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20"
        >
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-purple-500 mr-2" />
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Selected Concept</h3>
          </div>
          <motion.div 
            className="p-4 bg-gray-900/50 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-lg font-semibold text-white mb-2">{selectedConcept.term}</h4>
            <p className="text-sm text-gray-400 leading-relaxed">{selectedConcept.definition}</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/playlist")}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg transition-all duration-300"
      >
        Generate Playlist
      </motion.button>
    </div>
  );
}