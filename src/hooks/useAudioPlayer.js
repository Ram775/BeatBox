import { useEffect, useRef, useState } from "react";

export default function useAudioPlayer() {
  const audioRef = useRef(new Audio());

  const [current, setCurrent] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const playSong = async (song) => {
    const audio = audioRef.current;

    if (current?.id === song.id) {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }

      return;
    }

    audio.src = song.audio;
    setCurrent(song);
    setProgress(0);

    await audio.play();
    setPlaying(true);
  };

  const seek = (time) => {
    audioRef.current.currentTime = time;
    setProgress(time);
  };

  return {
    current,
    playing,
    progress,
    duration,
    audioRef,
    playSong,
    seek,
    setPlaying,
  };
}