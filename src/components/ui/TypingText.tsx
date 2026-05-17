import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface TypingTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  start?: boolean;
  onDone?: () => void;
  className?: string;
  caret?: boolean;
}

export default function TypingText({
  text,
  speed = 22,
  startDelay = 0,
  start = true,
  onDone,
  className = '',
  caret = false,
}: TypingTextProps) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    if (!start) return;
    doneRef.current = false;
    let i = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const finish = () => {
      if (!doneRef.current) {
        doneRef.current = true;
        onDone?.();
      }
    };
    if (reduce) {
      timer = setTimeout(() => {
        setShown(text.length);
        finish();
      }, 0);
      return () => {
        if (timer) clearTimeout(timer);
      };
    }
    const tick = () => {
      i += 1;
      setShown(i);
      if (i >= text.length) {
        finish();
        return;
      }
      timer = setTimeout(tick, speed);
    };
    const initial = setTimeout(tick, Math.max(startDelay, 0));
    return () => {
      clearTimeout(initial);
      if (timer) clearTimeout(timer);
    };
  }, [start, text, speed, startDelay, reduce, onDone]);

  return (
    <span className={className}>
      {text.slice(0, shown)}
      {caret && shown < text.length && (
        <span className="ml-0.5 inline-block h-[1em] w-[0.55ch] -translate-y-[2px] animate-[caret_1s_steps(2)_infinite] bg-violet-400 align-middle" />
      )}
    </span>
  );
}
