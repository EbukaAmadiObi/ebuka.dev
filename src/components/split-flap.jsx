import { useEffect, useState } from "react";

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function SplitFlapChar({ target, settleDelay, triggered, isStatic = false }) {
  const [char, setChar] = useState(isStatic ? target : randomChar);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (isStatic || !triggered) return;

    const intervalId = setInterval(() => {
      setChar(randomChar());
      setTick(t => t + 1);
    }, 100);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setChar(target);
      setTick(t => t + 1);
    }, settleDelay);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [target, settleDelay, triggered, isStatic]);

  return (
    <div
      className="relative flex items-center justify-center bg-[#0d0602] border border-[#3e1e0f] rounded-sm"
      style={{ width: '0.68em', height: '1.15em' }}
    >
      <div className="absolute inset-x-0 top-1/2 z-10" style={{ height: '2px', background: '#000', boxShadow: '0 1px 3px #000' }} />
      <span
        key={tick}
        className="font-mono font-bold text-[#cd9272] leading-none select-none"
        style={{ animation: (!isStatic && triggered) ? 'splitFlap 0.16s ease-in-out' : 'none' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    </div>
  );
}

export function SplitFlapDisplay({ city, triggered = true, isStatic = false, fontSize = 'clamp(3.5rem, 9vw, 8rem)' }) {
  const chars = city.toUpperCase().split('');
  return (
    <div className="flex gap-[0.12em]" style={{ fontSize }}>
      {chars.map((char, i) => (
        <SplitFlapChar
          key={i}
          target={char}
          settleDelay={600 + i * 220}
          triggered={triggered}
          isStatic={isStatic}
        />
      ))}
    </div>
  );
}
