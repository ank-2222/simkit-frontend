import {
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
} from "lucide-react";
import React, { useRef, useState } from "react";

interface CustomAudioPlayerProps {
  src: string;
}

const CustomAudioPlayer: React.FC<CustomAudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1); // Volume from 0 to 1
  const [showControls, setShowControls] = useState(false);

  const togglePlayPause = () => {
    setShowControls(true);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = (parseFloat(e.target.value) / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value) / 100; // Scale volume to be between 0 and 1
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        0,
        audioRef.current.currentTime - 10
      );
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        duration,
        audioRef.current.currentTime + 10
      );
    }
  };

  return (
    <div className="custom-audio-player w-[100%] lg:w-[60%] ">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      {!showControls && (
        <div className="flex justify-start lg:justify-center items-center gap-x-4">
          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <Pause
                size={20}
                className="text-white bg-cGreen w-8 h-8 rounded-[50px] p-2  "
              />
            ) : (
              <Play
                size={20}
                className="text-white bg-cGreen w-8 h-8 rounded-[50px] p-2  "
              />
            )}
          </button>
          <p className="text-stone-900 text-2xl font-bold font-jakarta leading-[110%]   ">
            {Math.floor(duration / 60)}:
            {Math.floor(duration % 60)
              .toString()
              .padStart(2, "0")}{" "}
            Min
          </p>
        </div>
      )}
      {showControls && (
        <div className="w-full">
              <div className="volume-control  relative min-h-fit flex justify-center items-center w-full gap-x-4">
            <label htmlFor="volume">
              {volume === 0 ? <VolumeX /> : <Volume2 />}
            </label>
            <input
              type="range"
              id="volume"
              value={volume * 100} // Convert to percentage for display
              onChange={handleVolumeChange}
              min="0"
              max="100"
              className="accent-cGreen  rounded-none    w-full"
            />
          </div>
          <div className="time text-jakarta font-semibold my-1">
            {Math.floor(currentTime / 60)}:
            {Math.floor(currentTime % 60)
              .toString()
              .padStart(2, "0")}{" "}
            /{Math.floor(duration / 60)}:
            {Math.floor(duration % 60)
              .toString()
              .padStart(2, "0")}
          </div>
          <div className="progress">
            <input
              type="range"
              value={duration ? (currentTime / duration) * 100 : 0} // 0 if duration is 0
              onChange={handleSeek}
              max="100"
              className="   accent-cGreen  rounded-none   w-full"
            />
          </div>
         


          <div className="flex justify-between items-center gap-x-4 mt-4">
            <button
              onClick={skipBackward}
              className="relative flex justify-center items-center"
            >
              <RotateCcw size={30} className="text-gray-600" />
              <p className="absolute text-[0.7rem] font-bold text-gray-600 ">
                10
              </p>
            </button>
            <button onClick={togglePlayPause}>
              {isPlaying ? (
                <Pause
                  size={24}
                  className="text-white  bg-cGreen w-10 h-10 rounded-[50px] p-2  "
                />
              ) : (
                <Play
                  size={24}
                  className="text-white bg-cGreen w-10 h-10  rounded-[50px] p-2  "
                />
              )}
            </button>
            <button
              onClick={skipForward}
              className="relative flex justify-center items-center"
            >
              <RotateCw size={30} className="text-gray-600" />
              <p className="absolute text-[0.7rem] font-bold  text-gray-600">
                10
              </p>
            </button>
          </div>

      
        
        </div>
      )}
    </div>
  );
};

export default CustomAudioPlayer;
