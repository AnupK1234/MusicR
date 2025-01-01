import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Music, BookOpen } from "lucide-react";

export default function Step3() {
  const navigate = useNavigate();

  return (
    <div className="h-screen snap-start flex flex-col items-center justify-center p-8">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Step 3: Review & Generate
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-gray-800 p-6 rounded-xl"
        >
          <div className="flex items-center mb-4">
            <Music className="w-6 h-6 text-purple-500 mr-2" />
            <h3 className="text-xl font-bold">Selected Songs</h3>
          </div>
          {/* Display selected songs */}
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-gray-800 p-6 rounded-xl"
        >
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-purple-500 mr-2" />
            <h3 className="text-xl font-bold">Selected Concepts</h3>
          </div>
          {/* Display selected concepts */}
        </motion.div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/playlist")}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
      >
        Generate Playlist
      </motion.button>
    </div>
  );
}