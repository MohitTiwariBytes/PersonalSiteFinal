import React, { useEffect } from "react";
import { useScramble } from "use-scramble";

const Scramble = ({ text, shouldScramble, color, scrambleTime }) => {
  const { ref, replay } = useScramble({
    text: text,
    range: [65, 125],
    speed: 1,
    tick: 4,
    step: 5,
    scramble: scrambleTime,
    seed: 3,
    chance: 0.42,
    overdrive: true,
    overflow: true,
  });

  useEffect(() => {
    if (shouldScramble) {
      replay();
    }
  }, [replay, shouldScramble]);

  return (
    <span
      style={{ color: color }}
      ref={ref}
      onMouseOver={replay}
      onFocus={replay}
    ></span>
  );
};

export default Scramble;
