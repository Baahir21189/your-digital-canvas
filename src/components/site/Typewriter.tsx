import { useEffect, useState } from "react";

type TypewriterProps = {
  lines: string[];
  speed?: number;
  startDelay?: number;
  className?: string;
};

export function Typewriter({ lines, speed = 42, startDelay = 250, className }: TypewriterProps) {
  const full = lines.join("\n");
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || count >= full.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [started, count, full.length, speed]);

  const typed = full.slice(0, count);
  const done = count >= full.length;

  return (
    <span className={className}>
      <span className="sr-only">{full}</span>
      <span aria-hidden="true">
        {typed.split("\n").map((line, i) => (
          <span key={i} className="block">
            {line}
            {i === typed.split("\n").length - 1 && (
              <span
                className={`ml-1 inline-block h-[0.8em] w-[0.06em] translate-y-[0.05em] bg-candy align-middle ${
                  done ? "animate-pulse" : ""
                }`}
              />
            )}
          </span>
        ))}
      </span>
    </span>
  );
}
