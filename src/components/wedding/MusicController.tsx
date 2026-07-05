import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from "react";
import { HiMusicNote } from "react-icons/hi";
import { FaVolumeMute } from "react-icons/fa";

export type MusicHandle = { start: () => void };

const MusicController = forwardRef<MusicHandle>(function MusicController(_props, ref) {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const start = () => {
    if (!audioRef.current) {
      const audio = new Audio("/wedding.mp3");
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;
    }
    audioRef.current.play().catch(() => {});
    setPlaying(true);
    setReady(true);
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setPlaying(false);
  };

  const toggle = () => (playing ? stop() : start());

  useImperativeHandle(ref, () => ({ start }));

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  if (!ready && !playing) {
    return (
      <button
        onClick={start}
        className="fixed bottom-24 right-4 z-[55] grid h-12 w-12 place-items-center rounded-full glass-gold text-gold shadow-gold md:bottom-6 md:right-6"
        aria-label="Play music"
        data-cursor
      >
        <HiMusicNote className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className="fixed bottom-24 right-4 z-[55] flex items-center gap-2 rounded-full glass-gold px-3 py-2.5 text-maroon shadow-gold md:bottom-6 md:right-6"
      aria-label={playing ? "Mute music" : "Play music"}
      data-cursor
    >
      {playing ? (
        <span className="flex items-end gap-[3px]" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-gradient-gold"
              style={{ height: 16, animation: `eq 0.9s ease-in-out ${i * 0.12}s infinite alternate` }}
            />
          ))}
        </span>
      ) : (
        <FaVolumeMute className="h-4 w-4 text-gold-deep" />
      )}
      <span className="hidden font-sans text-[10px] uppercase tracking-[0.2em] sm:inline">
        {playing ? "Wedding Music" : "Muted"}
      </span>
      <style>{`@keyframes eq { 0% { height: 5px } 100% { height: 18px } }`}</style>
    </button>
  );
});

export default MusicController;
