// "use client";

// import { useEffect, useState } from "react";
// import { useTheme } from "next-themes";
// import { TbSun, TbMoon } from "react-icons/tb";
// import { GiNightSleep } from "react-icons/gi";
// import { TiWeatherSunny } from "react-icons/ti";
// import { RxMoon } from "react-icons/rx";

// export default function ThemeToggle() {
//   const { resolvedTheme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     // Needed for next-themes: theme isn't known until mounted on the client.
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return <span className="h-9 w-9 shrink-0" aria-hidden="true" />;
//   }

//   const isDark = resolvedTheme === "dark";

//   return (
//     <button
//       type="button"
//       onClick={() => setTheme(isDark ? "light" : "dark")}
//       aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
//       // className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-foreground/80 transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer"
//       className="border-transparent transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer"
//     >
//       {isDark ? <TiWeatherSunny size={18} /> : <RxMoon size={18} />}
//     </button>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { TiWeatherSunny } from "react-icons/ti";
import { RxMoon } from "react-icons/rx";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // const toggleTheme = () => {
  //   const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

  //   const prefersReducedMotion = window.matchMedia(
  //     "(prefers-reduced-motion: reduce)"
  //   ).matches;

  //   const startViewTransition = document.startViewTransition;

  //   // Fallback for unsupported browsers or reduced motion.
  //   if (!startViewTransition || prefersReducedMotion) {
  //     setTheme(nextTheme);
  //     return;
  //   }

  //   const button = buttonRef.current;
  //   if (!button) {
  //     setTheme(nextTheme);
  //     return;
  //   }

  //   // Get the center of the clicked theme button.
  //   const rect = button.getBoundingClientRect();

  //   const x = rect.left + rect.width / 2;
  //   const y = rect.top + rect.height / 2;

  //   // Calculate the radius needed to cover the entire viewport.
  //   const endRadius = Math.hypot(
  //     Math.max(x, window.innerWidth - x),
  //     Math.max(y, window.innerHeight - y)
  //   );

  //   const transition = startViewTransition(() => {
  //     // Ensure React applies the new theme inside the transition.
  //     flushSync(() => {
  //       setTheme(nextTheme);
  //     });
  //   });

  //   transition.ready.then(() => {
  //     document.documentElement.animate(
  //       {
  //         clipPath: [
  //           `circle(0px at ${x}px ${y}px)`,
  //           `circle(${endRadius}px at ${x}px ${y}px)`,
  //         ],
  //       },
  //       {
  //         duration: 650,
  //         easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  //         pseudoElement: "::view-transition-new(root)",
  //       }
  //     );
  //   }).catch(() => {
  //     // If the transition cannot start, the theme has still changed.
  //   });
  // };


  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const startViewTransition =
      document.startViewTransition?.bind(document);

    if (!startViewTransition || prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    const button = buttonRef.current;

    if (!button) {
      setTheme(nextTheme);
      return;
    }

    const rect = button.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 650,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {
        // Theme has already changed; animation failure is non-critical.
      });
  };

  if (!mounted) {
    return (
      <span
        className="h-7 w-7 animate-pulse rounded-full bg-muted/40"
        aria-hidden="true"
      />
    );
  }


  const isDark = resolvedTheme === "dark";

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
      className="border-transparent transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer"
    >
      {isDark ? (
        <TiWeatherSunny size={20} />
      ) : (
        <RxMoon size={18} />
      )}
    </button>
  );
}
