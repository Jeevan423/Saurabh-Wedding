import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import Intro from "@/components/wedding/Intro";
import SmoothScroll from "@/components/wedding/SmoothScroll";
import Particles from "@/components/wedding/Particles";
import Confetti from "@/components/wedding/Confetti";
import Navbar from "@/components/wedding/Navbar";
import MusicController, { type MusicHandle } from "@/components/wedding/MusicController";
import FloatingButtons from "@/components/wedding/FloatingButtons";
import { ScrollProgress, MouseFollower } from "@/components/wedding/Overlays";

import Hero from "@/components/wedding/sections/Hero";
import Couple from "@/components/wedding/sections/Couple";
import Invitation from "@/components/wedding/sections/Invitation";
import Events from "@/components/wedding/sections/Events";
import Countdown from "@/components/wedding/sections/Countdown";
import Blessings from "@/components/wedding/sections/Blessings";
import Family from "@/components/wedding/sections/Family";
import Venue from "@/components/wedding/sections/Venue";
import Footer from "@/components/wedding/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);
  const musicRef = useRef<MusicHandle>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);
    try {
      musicRef.current?.start();
    } catch {
      /* audio may be blocked; ignore */
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      <Intro onOpen={handleOpen} />
      <Confetti fire={opened} />

      {opened && (
        <>
          <SmoothScroll />
          <ScrollProgress />
          <MouseFollower />
          <Particles />
          <Navbar />
          <FloatingButtons />
        </>
      )}

      <MusicController ref={musicRef} />

      <main>
        <Hero />
        <Couple />
        <Invitation />
        <Events />
        <Countdown />
        <Blessings />
        <Family />
        <Venue />
        <Footer />
      </main>
    </div>
  );
}
