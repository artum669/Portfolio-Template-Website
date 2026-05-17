import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: readonly string[], offset = 0.35): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio);
        }
        let bestId = '';
        let bestRatio = -1;
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestRatio > 0 && bestId) {
          setActive((prev) => (prev === bestId ? prev : bestId));
        }
      },
      {
        rootMargin: `-${Math.round(offset * 100)}% 0px -${Math.round((1 - offset) * 100)}% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return active;
}
