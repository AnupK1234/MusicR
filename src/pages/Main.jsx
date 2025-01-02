import React, { useState } from "react";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Menu,
  X,
  Search,
  Bell,
  Settings,
  Music2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Main() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(30);
  const [volume, setVolume] = useState(80);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const song = {
    title: "Perfect (Photosynthesis Version)",
    artist: "Ed Sheeran",
    originalLyrics: [
      "I found a love for me",
      "Oh, darling, just dive right in and follow my lead",
      "Well, I found a girl, beautiful and sweet",
      "Oh, I never knew you were the someone waitin' for me",
    ],
    modifiedLyrics: [
      "I found a leaf so green",
      "Oh sunlight, just shine right in and power my needs",
      "Well, I found chlorophyll, essential and key",
      "Oh, I never knew you were the process feeding me",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 border-b border-purple-500/30 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <Music2 className="text-pink-500" size={28} />
              <span className="text-xl font-bold text-pink-400 hidden sm:inline">
                MusicR
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-6">
            {/* Mobile Search Toggle */}
            <button
              className="sm:hidden p-2 hover:bg-gray-700 rounded-full"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search className="text-gray-300" size={20} />
            </button>

            {/* Desktop Search */}
            <div className="hidden sm:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-700 text-gray-100 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>

            <button className="relative p-2 hover:bg-gray-700 rounded-full hidden sm:block">
              <Bell className="text-gray-300" size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full"></span>
            </button>

            <button className="p-2 hover:bg-gray-700 rounded-full hidden sm:block">
              <Settings className="text-gray-300" size={20} />
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-gray-700 rounded-full"
            >
              {menuOpen ? (
                <X className="text-pink-400" size={24} />
              ) : (
                <Menu className="text-gray-300" size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="mt-4 sm:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-700 text-gray-100 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>
          </div>
        )}
      </header>

      {/* Side Menu */}
      <div
        className={`fixed right-0 top-0 h-full w-64 sm:w-80 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg z-50 pt-20 border-l border-purple-500/30`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded-full text-pink-400"
        >
          <X size={24} />
        </button>
        <div className="space-y-4 p-4">
          <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 rounded flex items-center gap-3">
            <Music2 size={18} />
            <span>My Library</span>
          </button>
          <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 rounded flex items-center gap-3">
            <Bell size={18} />
            <span>Notifications</span>
          </button>
          <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 rounded flex items-center gap-3">
            <Settings size={18} />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-8 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="mb-8 p-4 sm:p-6 bg-gray-800 border-purple-500 relative z-10 backdrop-blur-lg bg-opacity-90 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-pink-400">
            Lyrics Comparison
          </h2>
          <div className="overflow-x-auto text-white -mx-4 sm:mx-0">
            <table className="w-full border-collapse min-w-[640px]">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 sm:p-4 text-left border-b border-purple-500">
                    #
                  </th>
                  <th className="p-3 sm:p-4 text-left border-b border-purple-500">
                    Original Lyrics
                  </th>
                  <th className="w-16 text-center border-b border-purple-500">
                    →
                  </th>
                  <th className="p-3 sm:p-4 text-left border-b border-purple-500">
                    Modified Lyrics
                  </th>
                </tr>
              </thead>
              <tbody>
                {song.originalLyrics.map((lyric, index) => (
                  <tr key={index} className="border-b border-purple-500/30">
                    <td className="p-3 sm:p-4 border-r border-purple-500/30 font-medium text-pink-400">
                      {index + 1}
                    </td>
                    <td className="p-3 sm:p-4 border-r border-purple-500/30">
                      {lyric}
                    </td>
                    <td className="text-center border-r border-purple-500/30 text-pink-400">
                      →
                    </td>
                    <td className="p-3 sm:p-4">
                      {song.modifiedLyrics[index]
                        .split(" ")
                        .map((word, wordIndex) => {
                          const isChanged = !lyric
                            .toLowerCase()
                            .includes(word.toLowerCase());
                          return (
                            <span
                              key={wordIndex}
                              className={
                                isChanged
                                  ? "bg-purple-500/30 px-1 rounded text-pink-300"
                                  : ""
                              }
                            >
                              {word}{" "}
                            </span>
                          );
                        })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Audio Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800/95 border-t border-purple-500 shadow-lg backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img
                src="https://static.standard.co.uk/2023/09/08/11/GettyImages-1496391549.jpeg"
                alt="Album cover"
                className="w-12 h-12 rounded-md ring-2 ring-pink-500/20"
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold truncate text-pink-400">
                  {song.title}
                </h3>
                <p className="text-sm text-gray-400 truncate">{song.artist}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
              <button className="p-2 hover:bg-gray-700 rounded-full text-gray-300">
                <SkipBack size={20} />
              </button>
              <button
                className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transform transition-transform active:scale-95"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-full text-gray-300">
                <SkipForward size={20} />
              </button>
            </div>

            <div className="flex items-center gap-3 w-full sm:flex-1">
              <span className="text-sm text-gray-400 hidden sm:block">
                1:30
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="flex-1 accent-pink-500"
              />
              <span className="text-sm text-gray-400 hidden sm:block">
                3:45
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 hover:bg-gray-700 rounded-full text-gray-300"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-24 accent-pink-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
