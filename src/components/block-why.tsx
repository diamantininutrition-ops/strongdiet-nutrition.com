import { block5 } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const senseTone: Record<(typeof block5.senseTitle)[number]["tone"], string> = {
  fg: "text-fg",
  lime: "text-field",
};

export function BlockWhy() {
  return (
    <section data-block="5" className="relative bg-paper text-ink-fg">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-stretch lg:gap-8">
        <div className="flex min-w-0 flex-col justify-center px-4 pb-8 pt-20 sm:px-8 lg:py-16 lg:pl-16 lg:pr-12">
          <div className="mx-auto mb-8 h-px w-12 bg-gold lg:mx-0" aria-hidden="true" />
          <h3 className="text-center font-display text-2xl font-semibold leading-snug tracking-display lg:text-left lg:whitespace-nowrap lg:text-[clamp(1.65rem,2.5vw,2.25rem)]">
            {block5.title.map((part) => (
              <span
                key={part.text}
                className={cn(part.bold && "font-bold", part.lime && "text-field")}
              >
                {part.text}
              </span>
            ))}
          </h3>
          <p className="mt-8 text-base leading-relaxed sm:text-xl">
            {block5.body.map((part) => (
              <span key={part.text}>
                {part.breakBefore ? <br /> : null}
                <span
                  className={cn(
                    part.bold && "font-bold",
                    part.ash && "text-cendre",
                  )}
                >
                  {part.text}
                </span>
              </span>
            ))}
          </p>
        </div>
        <img
          src="/athlete.jpg"
          alt=""
          className="h-52 w-full object-cover object-bottom lg:h-full lg:min-h-96 lg:w-full lg:object-center"
        />
      </div>

      <div className="bg-ink px-4 py-16 text-fg sm:px-8 sm:py-24">
        <p className="text-center font-display text-2xl font-semibold leading-snug tracking-display lg:whitespace-nowrap lg:text-[clamp(2.15rem,3.5vw,2.85rem)]">
          {block5.senseTitle.map((part) => (
            <span key={part.text} className={senseTone[part.tone]}>
              {part.text}
            </span>
          ))}
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-0 top-0 h-[46%] w-[clamp(1.15rem,calc((100%-54rem)/2-0.75rem),13rem)] bg-gold [clip-path:polygon(0_0,100%_0,0_100%)] sm:h-[64%] lg:h-[78%]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-[46%] w-[clamp(1.15rem,calc((100%-54rem)/2-0.75rem),13rem)] bg-gold [clip-path:polygon(0_0,100%_0,100%_100%)] sm:h-[64%] lg:h-[78%]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-8 py-20 sm:px-10 sm:py-28 lg:w-fit lg:max-w-[calc(100%-4rem)]">
        <h3 className="text-pretty text-center font-display text-xl font-semibold tracking-tight sm:whitespace-nowrap sm:text-2xl lg:text-4xl">
          {block5.kicker.map((part) => (
            <span key={part.text} className={cn(part.gold && "text-gold")}>
              {part.text}
            </span>
          ))}
        </h3>
        <div className="mx-auto mt-6 h-px w-12 bg-gold lg:mt-10 lg:w-36" aria-hidden="true" />
        <p className="mx-auto mt-6 max-w-3xl text-center font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl lg:mt-10 lg:max-w-none lg:text-3xl">
          {block5.senseLead}
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-left text-base leading-relaxed sm:text-xl lg:mx-0 lg:w-0 lg:min-w-full lg:max-w-none">
          {block5.senseBody.map((part) => (
            <span
              key={part.text}
              className={cn(
                part.bold && "font-bold",
                part.semibold && "font-semibold",
              )}
            >
              {part.text}
            </span>
          ))}
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xl font-semibold leading-snug sm:text-2xl lg:max-w-none lg:text-3xl">
          {block5.senseClose.map((part) => (
            <span
              key={part.text}
              className={cn(part.bold && "font-bold", part.lime && "text-field")}
            >
              {part.text}
            </span>
          ))}
        </p>
      </div>
      </div>
    </section>
  );
}


