import React from "react";
import { useNavigate } from "react-router-dom";

function Step3() {
  const navigate = useNavigate();

  const handleGeneratePlaylist = () => {
    navigate("/playlist");
  };

  return (
    <div className="h-screen snap-start flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-8">
        Step 3: Generate Your Playlist
      </h2>
      <button
        onClick={handleGeneratePlaylist}
        className="bg-green-500 text-black px-8 py-4 rounded-md text-xl font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
      >
        Generate Playlist
      </button>
    </div>
  );
}

export default Step3;
