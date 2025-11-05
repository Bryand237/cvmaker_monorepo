import React from "react";

type Step = {
  id: string;
  label: string;
};

const steps: Step[] = [
  { id: "design", label: "Design" },
  { id: "content", label: "Contenu" },
  { id: "review", label: "Aperçu" },
];

const CVStepsTabs: React.FC = () => {
  const [active, setActive] = React.useState<string>(steps[0].id);

  return (
    <div className="w-full flex items-center justify-center my-6">
      {/* carré rotaté (losange) masqué pour ne garder que la moitié gauche */}
      <div className="relative flex">
        <div className="absolute left-96">
          <div className="relative w-fit flex bg-transparent">
            <div
              aria-hidden
              className="absolute w-12 h-12 border-indigo-600"
              style={{
                clipPath: "polygon(0 0, 50% 50%, 0 100%)",
              }}
            />
            <div className="border-2 w-32 h-12 bg-indigo-600 border-indigo-600 rounded-full"></div>
            {/* <div
              aria-hidden
              className="w-12 h-12 border-2 border-indigo-600"
              style={{
                clipPath: "polygon(0 0, 50% 50%, 0 100%)",
                backgroundColor: "rgb(79 70 229)",
              }} // bg-indigo-600
            /> */}
          </div>
        </div>
        <div className="absolute left-64">
          <div className="relative w-fit flex bg-transparent">
            <div
              aria-hidden
              className="absolute w-12 h-12 border-indigo-600"
              style={{
                clipPath: "polygon(0 0, 50% 50%, 0 100%)",
              }}
            />
            <div className="border-2 w-32 h-12 bg-indigo-600 border-indigo-600 rounded-l-full rounded-bl-full"></div>
            <div
              aria-hidden
              className="w-12 h-12 border-2 border-indigo-600"
              style={{
                clipPath: "polygon(0 0, 50% 50%, 0 100%)",
                backgroundColor: "rgb(79 70 229)",
              }} // bg-indigo-600
            />
          </div>
        </div>
        <div className="absolute left-32">
          <div className="relative w-fit flex bg-transparent">
            <div
              aria-hidden
              className="absolute w-12 h-12 border-indigo-600"
              style={{
                clipPath: "polygon(0 0, 50% 50%, 0 100%)",
              }}
            />
            <div className="border-2 w-32 h-12 bg-indigo-600 border-indigo-600 rounded-l-full rounded-bl-full"></div>
            <div
              aria-hidden
              className="w-12 h-12 border-2 border-indigo-600"
              style={{
                clipPath: "polygon(0 0, 50% 50%, 0 100%)",
                backgroundColor: "rgb(79 70 229)",
              }} // bg-indigo-600
            />
          </div>
        </div>
        <div className="absolute">
          <div className="relative w-fit flex bg-transparent">
            <div
              aria-hidden
              className="absolute w-12 h-12 border-indigo-600"
              style={{
                clipPath: "polygon(0 0, 50% 50%, 0 100%)",
              }}
            />
            <div className="border-2 w-32 h-12 bg-indigo-600 border-indigo-600 rounded-l-full rounded-bl-full"></div>
            <div
              aria-hidden
              className="w-12 h-12 border-2 border-indigo-600"
              style={{
                clipPath: "polygon(0 0, 50% 50%, 0 100%)",
                backgroundColor: "rgb(79 70 229)",
              }} // bg-indigo-600
            />
          </div>
        </div>
      </div>
      <div className="inline-flex items-stretch bg-transparent">
        {steps.map((s, i) => {
          const isFirst = i === 0;
          const isLast = i === steps.length - 1;
          const isActive = active === s.id;
          return (
            <React.Fragment key={s.id}>
              <button
                onClick={() => setActive(s.id)}
                className={
                  "relative px-6 py-2 text-sm font-medium focus:outline-none z-10 " +
                  (isActive
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-100 text-indigo-700") +
                  (isFirst ? " rounded-l-lg" : "") +
                  (isLast ? " rounded-r-lg" : "")
                }
              >
                {s.label}
              </button>

              {!isLast && (
                <div
                  aria-hidden
                  className={
                    "w-3 h-3 self-center transform rotate-45 -mx-1 z-0 " +
                    (active === s.id ? "bg-indigo-600" : "bg-indigo-200")
                  }
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CVStepsTabs;
