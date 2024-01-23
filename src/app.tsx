import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="flex absolute top-0 left-0 z-10 flex-col gap-10 p-10 w-full h-screen tracking-tight bg-gray-50 font-spaceGrotesk"
      >
        <h1 id="title-1" className="text-9xl">
          Software Engineer
        </h1>
        <h1 id="title-2" className="text-9xl">
          Designer
        </h1>
        <h1 id="title-3" className="text-9xl">
          Freelancer
        </h1>
      </div>
      <div className="flex justify-center place-items-center h-screen bg-gray-950">
        <h1
          id="welcome"
          className="text-9xl font-bold text-gray-100 font-spaceGrotesk"
        >
          Welcome.
        </h1>
      </div>
    </div>
  );
};
