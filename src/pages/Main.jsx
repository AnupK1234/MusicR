import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useState } from "react";

const playlist = [
  { id: 1, title: "Song 1", artist: "Artist 1" },
  { id: 2, title: "Song 2", artist: "Artist 2" },
  { id: 3, title: "Song 3", artist: "Artist 3" },
];

export default function Main() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextSong = () => setCurrentSong((prev) => (prev + 1) % playlist.length);
  const prevSong = () =>
    setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length);

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Your Generated Playlist</h1>

      <div className="w-full max-w-2xl bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Now Playing</h2>
        <div className="flex items-center space-x-4">
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="Album cover"
            width={150}
            height={150}
            className="rounded-md"
          />
          <div>
            <h3 className="text-xl font-semibold">
              {playlist[currentSong].title}
            </h3>
            <p className="text-gray-400">{playlist[currentSong].artist}</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <button
            onClick={prevSong}
            className="p-2 rounded-full bg-green-500 text-black hover:bg-green-600"
          >
            <SkipBack size={24} />
          </button>
          <button
            onClick={togglePlay}
            className="p-4 rounded-full bg-green-500 text-black hover:bg-green-600"
          >
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>
          <button
            onClick={nextSong}
            className="p-2 rounded-full bg-green-500 text-black hover:bg-green-600"
          >
            <SkipForward size={24} />
          </button>
        </div>
      </div>

      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Playlist</h2>
        <ul className="space-y-2">
          {playlist.map((song, index) => (
            <li
              key={song.id}
              className={`flex items-center justify-between p-2 rounded ${
                index === currentSong
                  ? "bg-green-500 text-black"
                  : "bg-gray-800"
              }`}
            >
              <span>
                {song.title} - {song.artist}
              </span>
              {index === currentSong && (
                <span className="text-sm font-semibold">Now Playing</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
