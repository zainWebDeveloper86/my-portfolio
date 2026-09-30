// import learning from "@/data/learning.json";

// export default function CurrentlyLearning() {
//   return (
//     <section id="learning" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
//       <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
//         Currently learning
//       </h2>
//       <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">
//         {learning.intro}
//       </p>

//       <div className="mt-8 grid gap-6 sm:grid-cols-2">
//         {learning.groups.map((group) => (
//           <div key={group.category}>
//             <p className="mb-3 font-mono text-sm text-muted">
//               {group.category}
//             </p>
//             <div className="flex flex-wrap gap-2">
//               {group.items.map((item) => (
//                 <span
//                   key={item}
//                   className="rounded-md border border-dashed border-border px-3 py-1.5 text-sm text-foreground/75"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import learning from "@/data/learning.json";
import { FaServer } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import type { IconType } from "react-icons";


const categoryIcons: Record<string, IconType> = {
  "Backend & APIs": FaServer,
  "DevOps & Cloud": FaCloud,
  "Data & ML": FaChartLine,
};

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      {/* Header */}
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
          Currently learning
        </h2>
        <span className="font-mono text-xs text-muted">2026</span>
      </div>

      <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">
        {learning.intro}
      </p>

      {/* Groups */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {learning.groups.map((group) => {
          const Icon = categoryIcons[group.category] || FaServer;

          return (
            <div
              key={group.category}
              className="rounded-lg border border-border p-5"
            >
              {/* Category Header */}
              <div className="mb-4 flex items-center gap-2">
                <Icon size={16} className="text-accent" />
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  {group.category}
                </p>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border px-2.5 py-1 text-xs text-foreground/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}