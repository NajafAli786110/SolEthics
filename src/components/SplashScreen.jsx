import React, { useEffect, useState } from "react";
import anime from "animejs";
import BlackLogo from "../images/SolEthics_Logo.png";
import Image from "next/image";

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const anime_func = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });
    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 1,
      duration: 500,
      easing: "easeInOutExpo",
    })
    .add({
      targets: "#logo",
      delay: 0,
      scale: 1.25,
      duration: 500,
      easing: "easeInOutExpo",
    })
    .add({
      targets: "#logo",
      delay: 0,
      scale: 1,
      duration: 500,
      easing: "easeInOutExpo",
    })
    .add({
      targets: "#logo",
      delay: 0,
      scale: 1.25,
      duration: 500,
      easing: "easeInOutExpo",
    })
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    anime_func();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="h-screen flex items-center justify-center"
      isMounted={isMounted}
    >
      <Image id="logo" src={BlackLogo} height={400} width={400} />
    </div>
  );
};

export default SplashScreen;
