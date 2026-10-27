import { block3 } from "@/lib/site-content";

export function BlockBook() {
  return (
    <section data-block="3" className="relative">
      <div className="bg-ink px-5 pb-2 pt-8 text-fg sm:px-8 sm:pb-10 sm:pt-4">
        <div className="relative mx-auto max-w-4xl pt-8 sm:pt-10">
          <div className="rounded-panel bg-snow px-4 pb-5 pt-14 text-center sm:px-10 sm:pb-10 sm:pt-20">
            <p className="font-sans text-lede italic leading-snug text-ink sm:whitespace-nowrap">
              {block3.lede}
            </p>
          </div>

          <div className="absolute left-1/2 top-8 w-[96%] -translate-x-1/2 -translate-y-1/2 sm:top-10 sm:w-[94%]">
            <div className="flex min-h-16 items-center justify-center rounded-bubble bg-mustard px-4 py-6 sm:min-h-20 sm:px-7 sm:py-8">
              <p className="text-balance text-center font-display text-banner font-bold uppercase leading-tight tracking-tight text-ink sm:whitespace-nowrap sm:leading-none">
                {block3.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
